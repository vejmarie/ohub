# Setup development environment

## Prerequisites

* You first need [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) installed
  on your local machine
* TCP ports 1337 (Sails), 27017 (MongoDB) and 5858 (NodeJS Debug) must be available on your local machine. If you
  wish to use other ports you can change `hosts` ports in the `Vagrantfile`.

## Setup environment

Clone the repo and and install everything needed.

```bash
$ git clone git@github.com:ggiamarchi/ohub.git
$ cd ohub
$ vagrant up
```

SSH into the machine and run the application.

```bash
$ vagrant ssh
$ SAILS_MIGRATE=drop npm start
```

The variable `SAILS_MIGRATE` indicates whether database tables have to be dropped and created back on server
startup. Setting it to `true` is mandatory for the first start because tables does not exists yet. The next time
you start the server, if you don't want your database to be flushed, set the variable to `safe` or merely omit
the variable on the command line.

__Note.__ Have a look to the configuration section bellow to see the complete list of environement variables.

At this point the application is up and running and some sample data had been inserted into the database. Now
you are done and ready to develop awesome features.

The application should be available on http://localhost:1337

# Configuration reference

Variables        | Default value
-----------------|----------------------------------
`SAILS_MIGRATE`  | `safe`
`PORT`           | `1337`
`NODE_ENV`       | `development`
`MONGO_URI`      | `mongodb://localhost:27017/ohp`
