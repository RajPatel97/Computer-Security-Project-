const lib = require('messagemedia-messages-sdk');

const sendText = (number)=>{
   /* Basic Auth
    [Security Final 2 ]
api_key    = u9G26YXuYElUFHgg0glS
api_secret = 6Fb690rQ4ty99VyFwyvzOesUG18K1N
*/
console.log(number);

lib.Configuration.basicAuthUserName = "WHI23T1b0WxQjMnuGR7A";
lib.Configuration.basicAuthPassword = "IUAbxqex9eOOj8EhrHL8ernfT9hLgO";

/* HMAC
[Security Final ]
api_key    = MkNqBcrjJ13pLUHx0Zh3
api_secret = w8wUPanJ8xRVi1gjeXEF9wpxj5X8JQ
*/

lib.Configuration.hmacAuthUserName = "Xh69lb65lokmZbGG82Mn";
lib.Configuration.hmacAuthPassword = "kOxWHjZkAJs9imLeMrPTUsTImEK4lD";


var controller = lib.MessagesController;

let body = new lib.SendMessagesRequest();

body.messages = [];

body.messages[0] = new lib.Message();

body.messages[0].content = 'Hello\n There has been a Login on your computer.';//could also send the date and time of the log in
body.messages[0].destinationNumber = number;

controller.sendMessages(body, function(error, response, context) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

}//function

export default sendText;
