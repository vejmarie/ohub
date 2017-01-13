# -*- mode: ruby -*-
# vi: set ft=ruby :

$create_swap_drive = <<SCRIPT
set -x

# Size of swapfile in MB
swapsize=1024

# Does the swap file already exist?
grep -q "swapfile" /etc/fstab

# if not then create it
if [ $? -ne 0 ]; then
  sudo fallocate -l ${swapsize}M /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  sudo bash -c "echo '/swapfile none swap defaults 0 0' >> /etc/fstab"
fi
SCRIPT

$script = <<SCRIPT
set -ex

sudo apt-get update

#################################################
### Install nodejs
#################################################

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y git nodejs build-essential

#################################################
### Install bower
#################################################

sudo npm install -g bower sails node-inspector

#################################################
### Install MongoDB
#################################################

sudo apt-get -y --force-yes install mongodb

#################################################
### .bashrc customizations
#################################################

echo "
export LOG_QUERIES=true
cd /vagrant
" >> ~/.bashrc

#################################################
### Fetch project dependencies
#################################################

cd /vagrant
sudo rm -rf web/packages

npm install
#bower install
SCRIPT

ENV["LC_ALL"] = "en_US.UTF-8"

Vagrant.configure('2') do |config|

  config.vm.box = 'ubuntu/trusty64'
  config.vm.hostname = 'Open Hardware Platform'

  config.vm.post_up_message = [
    "",
    "##############################################################",
    "",
    "Your development VM is now up and running ! You have to",
    "SSH into the VM and launch to the application :",
    "",
    "  $ vagrant ssh",
    "  $ SAILS_MIGRATE=drop npm start",
    "",
    "The application is now available on http://localhost:1337",
    "",
    "##############################################################",
    "",
  ].join("\n  ")

  config.vm.provider 'virtualbox' do |vb|
    vb.customize ['modifyvm', :id, '--memory', '512']
  end

  config.vm.network 'forwarded_port', guest: 5858, host: 5858
  config.vm.network 'forwarded_port', guest: 1337, host: 1337
  config.vm.network 'forwarded_port', guest: 27017, host: 27017

  config.vm.provision 'shell', inline: $create_swap_drive, privileged: true
  config.vm.provision 'shell', inline: $script, privileged: false
end
