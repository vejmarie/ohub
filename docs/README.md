# Open Hardware Platform

User documentation for the open hardward design platform.

## Contribute

Anyone can contribute to this documenation and any kind of contribution is welcome. Feel free to submit pull
requests and issues.

Documentation structure is very simple to understand. It's basically a collection of markdown documents. We
use [Gitbook](https://www.gitbook.com) to generate the documentation website.

You can easily build the website locally using [Gitbook CLI](https://github.com/GitbookIO/gitbook-cli) on
you computer. First you need [npm](https://www.npmjs.com/), the javascript package manager in order to
install Gitbook.

Then install the gitbook CLI

```bash
$ npm install -g gitbook-cli
```

__Note__
> If you have a development environment set up with vagrant already, the gitbook CLI is already installed.

Now you are ready to generate the documentation website. You can either run a server locally.

```bash
$ gitbook serve
```

or generate a static HTML website

```bash
$ gitbook build
```
