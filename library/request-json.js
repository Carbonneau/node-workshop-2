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

module.exports = {
    requestJson: requestJson,
};