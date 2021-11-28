const lib = require('messagemedia-messages-sdk');


const sendText = (number)=>{
   /* Basic Auth 
    [Security Final 2 ]
api_key    = u9G26YXuYElUFHgg0glS
api_secret = 6Fb690rQ4ty99VyFwyvzOesUG18K1N
*/
lib.Configuration.basicAuthUserName = "u9G26YXuYElUFHgg0glS";
lib.Configuration.basicAuthPassword = "6Fb690rQ4ty99VyFwyvzOesUG18K1N";

/* HMAC
[Security Final ]
api_key    = MkNqBcrjJ13pLUHx0Zh3
api_secret = w8wUPanJ8xRVi1gjeXEF9wpxj5X8JQ
*/

lib.Configuration.hmacAuthUserName = "MkNqBcrjJ13pLUHx0Zh3";
lib.Configuration.hmacAuthPassword = "w8wUPanJ8xRVi1gjeXEF9wpxj5X8JQ";


var controller = lib.MessagesController;

let body = new lib.SendMessagesRequest();

body.messages = [];

body.messages[0] = new lib.Message();

body.messages[0].content = 'Hello world!\n This is just a text!';
body.messages[0].destinationNumber = '+17247329364';

controller.sendMessages(body, function(error, response, context) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

}//function 

export default sendText;
