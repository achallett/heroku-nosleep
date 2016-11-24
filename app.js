var request = require("request");

function wakeUp()
{
request
  .get('http://fb-dev-challenge.herokuapp.com', {timeout: 30000})
  .on('response', function(response) {
    console.log(getDateTime() + "    Status: " + response.statusCode)
  });
setTimeout(wakeUp, 60000);
}

wakeUp();


function getDateTime()
{
    var d = new Date();
	return d.toString(); 
}