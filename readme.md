# Chat Bot for WhatsApp with OpenAI API

This project is a chat bot for WhatsApp that is directly connected to the OpenAI API. It replies to every message received while running on WhatsApp.
Features:

* Directly connects with WhatsApp using WhatsApp Web API
* Uses OpenAI's state-of-the-art natural language processing technology to generate responses
* Easy to configure and deploy with dotenv configuration
* Simple and intuitive interface using the WhatsApp-Web.js library
* This project is a great starting point for anyone interested in building their own chat bot or experimenting with OpenAI's natural language processing technology. * * The code is well-documented and can be easily extended to add additional functionality.

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

---

## Install

    $ git clone https://github.com/KasunAb/chatbot-for-whatsapp
    $ cd chatbot-for-whatsapp
    $ npm install
    $ cp .env.example .env

## Running the project

    $ node index.js