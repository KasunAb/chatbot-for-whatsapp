import chat_helper from '../whatsapp/helper/chat_helper.js'; 
import {prompt_creater,store_messages} from './helper/prompt_creater.js';
import add_data from './helper/db.js';
import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'whatsapp',
    port: 3307
});

// connection.connect(function(err) {
//     if (err) 
//       return console.error('error: ' + err.message);
//     console.log('Connected to the MySQL server.');
//   });


const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();



client.on('message', message => {
	
    var number = message.from.split("@")[0];
    console.log("number: "+number);
    console.log("message: "+message.body);
    var chat_message = message.body;
    
    var prompt = prompt_creater(number, chat_message);
    // console.log("prompt: "+prompt);
    
    chat_helper(prompt).then((response) => {
        console.log("response: "+response);
        store_messages(number,chat_message,response);
        message.reply(response);}).then((response) => {
            console.log(number)
            console.log(chat_message)
            console.log(response)
            add_data(connection,number,chat_message,response);
        })
        .catch((error) => {
            console.error(error);
        });
});
