// Example messages object
var messages = {
    "0712048482": [
        { message: "hello how are you?", reply: "I am fine, how are you?" },
        { message: "How are you today?", reply: "I am good, thanks for asking." },
    ],
};


export function prompt_creater  (number, message) {
    function getLast5Messages(number) {

        var messagesList = messages[number];
        var last5Messages = messagesList.slice(-10);

        var formattedMessages = last5Messages.map(
            (m) => `message:${m.message}\nreply:${m.reply}`
        );
        
        return formattedMessages.join("\n");
    }
    var prompt = '';
    
    if (messages.hasOwnProperty(number)) {
        var last5Messages = getLast5Messages(number);
        prompt = last5Messages + "\nmessage:" + message + "\nreply:";
    }
    
    else {
        prompt = "message:" + message + "\nreply:";
    }
    return prompt;
}
export function store_messages(number,message,reply){
    var messageReply = { message: message, reply: reply };
    if (messages.hasOwnProperty(number)) {
        messages[number].push(messageReply);
    }
    else {
        messages[number] = [messageReply];
    }
}

