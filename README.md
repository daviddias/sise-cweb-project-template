SISE-CWEB Project Template
==========================

[![](https://img.shields.io/badge/TÉCNICO-LISBOA-blue.svg?style=flat-square)](http://tecnico.ulisboa.pt/)

> This repo contains a template for your SISE-CWEB project.

## Project assignment

## Template

This project template you offers you with a foundation on how to structure your code for the SISE-CWEB Project. Students are free to change the structure if they feel the need to.

The template is organized in 2 parts.

```
> tree -L 1
.
├── LICENSE
├── README.md # The README that you are currently reading
├── api # RESTful API
└── app # Client side application
```

Each of this parts should be pretty self explanatority from what is available on the, nevertheless we will cover each in more detail so you know how to get up and running.

### RESTful API

Here you can find the foundation for your RESTful API. This template presents one route, one with GET and one with POST, using the example business logic available on the `bl` folder.

Folder structure:

```bash
> cd api
> tree
.
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── index.js
│   ├── routes.js     # Your route handlers
│   └── start.js
└── test              # Unit tests
    └── test.js
```

You can test this code by:

```bash
# Make sure you are inside the folder api
> npm install
> npm test
# ...
```

To start the server normally, do:

```bash
> npm start
API has started http://localhost:9090
```

### Client side application

In this folder you have a static server and a template for your client side application. The bootstrap assets are already present.

Folder structure

```bash
> tree
.
├── package.json
└── src
    ├── css
    │   ├── bootstrap-theme.css
    │   ├── bootstrap.min.css
    │   └── jumbotron-narrow.css
    ├── fonts
    │   ├── glyphicons-halflings-regular.eot
    │   ├── glyphicons-halflings-regular.svg
    │   ├── glyphicons-halflings-regular.ttf
    │   ├── glyphicons-halflings-regular.woff
    │   └── glyphicons-halflings-regular.woff2
    ├── img
    │   └── favicon.ico
    ├── index.html
    └── js
        └── app.js # Where you application JS lives
```

```bash
# Make sure you are inside the folder app
> npm install
> npm start
> Then, open your browser in http://localhost:9000
```

## Getting confortable with git

Using git or Github is not required for SISE-CWEB, however if you are interested in optimizing your workflow and are unfamiliar to git, you can, similar to the exercises in lab 3 and 4, learn how to use git by doing the `git-it` workshopper.

```bash
$ npm install -g git-it
# ... 
$ git-it
```

![](/img/gitit.png)

## Good luck!
