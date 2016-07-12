/*
create a function called requestJson that takes a URL and a callback 
function as parameters.

1- Using the request library, make a request to the URL that you were provided

2- When you receive the response: 
    a. If there is an error, call the callback function and 
        pass it the error as the first parameter 
    b. If there is no error, move to step 3

3- Use JSON.parse inside a try/catch block to parse the response: 
    a. If there was an error parsing JSON, call the callback function 
        and pass it the same error as the first parameter 
    b. If there was no error parsing the JSON, call the callback function 
        and pass it a null error as the first parameter, 
        and the parsed response as the second parameter

*/
var request = require("request");
var prompt = require("prompt");

function requestJson(url, func) {
    request(url, function(err, res) {
        if (err) {
            func(err);
        }
        else {
            try {
                var parsedData = JSON.parse(res.body);
                func(null, parsedData);
            }
            catch (err){
                func(err);
            }
        }
    });
}

// requestJson("http://jsonplaceholder.typicode.com/users", function(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }

// });

