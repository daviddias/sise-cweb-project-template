SISE-CWEB Project Template
==========================

[![](https://img.shields.io/badge/TÉCNICO-LISBOA-blue.svg?style=flat-square)](http://tecnico.ulisboa.pt/)

> This repo contains a template and instructions on how to submit the Project for the SISE-CWEB Course

## Project assignment

## Template

This project template you offers you with a foundation on how to structure your code for the SISE-CWEB Project. Students are free to change the structure if they feel the need to.

The template is organized by 3 main goals:

```
$ tree -L 1
.
├── LICENSE
├── README.md # The README that you are currently reading
├── api # RESTful API
├── app # Client side application
├── bl  # Business Logic
└── data # Data set for your application
```

Each of this parts should be pretty self explanatority from what is available on the, nevertheless we will cover each in more detail so you know how to get up and running.

### Business logic

This folder is the destination of the business logic of your application, essentially, where the manipulation the data (in this case a raw JSON object, but in a typicall production app, it would be a Database).

Folder structure:

```bash
$ tree
.
├── package.json
├── src
│   └── index.js
└── tests
    └── bl-test.js
```

Business Logic is designed as Node.js module so that it can be 'required' by the remaining parts of the stack, open `src/index.js` to see what functionality is already there and implement there the rest.

You can test this code by:

```
# Make sure you are inside the folder bl
$ cd project-template/bl
$ npm i
$ npm test
```

### RESTful API

Here you can find the foundation for your RESTful API. This template presents two routes, one with GET and one with POST, using the example business logic available on the `bl` folder.

Folder structure:

```bash
$ tree
.
├── package.json
├── src
│   ├── index.js
│   ├── resources     # Your handlers
│   │   ├── hello.js
│   │   └── index.js
│   └── routes        # Routing table
│       └── hello.js
└── tests
    └── api-test.js
```

You can test this code by:

```bash
# Make sure you are inside the folder api
$ cd project-template/api
$ npm i
$ npm test
```

To start the server normally, do:

```bash
$ npm start
```

### Client side application

Finally, in this folder you have a static server and a template for your client side application. The bootstrap assets are already present.

Folder structure

```bash
$ tree
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
        ├── app.js # Where you application JS lives
        └── bl.js  # This is an auto generated file that imports your business logic code into this part of the project
```

```bash
# Make sure you are inside the folder app
$ cd project-template/app
$ npm i
$ npm start
# Then, open your browser in http://localhost:9000
```

## Project submission

The project submission will be done by making a commit+push on a fork of this github repo.

To get a github repo where you and your colleagues can collaborate, you must first create a free github account, if you don't have an account yet, follow the steps on https://github.com/join.

Next, it is important to set up your name and email in your local Github account, this can be done as shown in the following page: https://help.github.com/articles/set-up-git/#setting-up-git

There are two main ways to push your project to Github, through HTTPS and through SSH. HTTPS won't require any extra setup, but it will ask you to type your username and password for every push to github, while SSH offers you the convinience of Auth through Public Key. To set up SSH, follow the tutorial available on https://help.github.com/articles/generating-ssh-keys/

Now that you have git and github set up, click the bottom in the top right corner where it says `fork`.

![](/img/fork.png)

Only one member of each group needs to do this (everyone else in the group will contribute to the same repo). You can add the remaining group members as collaborators on the settings page

![](/img/collaborator.png)

Once you have created your fork, open a issue on https://github.com/sise-cweb/project-template/issues with the title "SISE-CWEB GROUPNUMBER" (replacing GROUPNUMBER with your actual group number) and in that issue post a link to your fork, the name, email and IST number of the people in your team.

If this is your complete first git and github experience, you can learn more in the following section "Getting confortable with Git".

The project submission will be the **last commit** pushed to your fork on December 22nd.

Note, please use a Nix environment (like the one made available during Lab 1) for the development of the project.

## Getting confortable with git

If you are unfamiliar to git, you can, similar to the exercises in lab 1 and 2, learn how to use git by doing the `git-it` workshopper.

```bash
$ npm install -g git-it
# ... 
$ git-it
```

![](/img/gitit.png)

## Good luck with your project!
