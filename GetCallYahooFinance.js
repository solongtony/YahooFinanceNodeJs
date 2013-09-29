// For Node.js
// From example code at:
// http://isolasoftware.it/2012/05/28/call-rest-api-with-node-js/
// Unofficial Yahoo finance API documentation:
// http://www.jarloo.com/yahoo_finance/
// Tony Bye
// 9/28/2013

var http = require('http');

// Options for GET
var optionsget = {
	host : 'download.finance.yahoo.com',
	port : 80,
	path : '/d/quotes.csv?s=AAPL+AMZN+GOOG+MSFT+YHOO&f=sl1d1t1c1hgvbap2', // the rest of the url with parameters if needed
	method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('\nDo the GET call\n');

// do the GET request
var reqGet = http.request(optionsget, function(res) {
	// response callback:
	console.log("statusCode: ", res.statusCode);
	
	// header details
	//console.log("\nheaders: ", res.headers);

	res.on('data', function(d) {
		// data response callback:
		console.info('\nGET result:\n');
		process.stdout.write(d);
		console.info('\n\nCall completed');
	});

});

reqGet.end();
reqGet.on('error', function(e) {
	console.error('Got this error: '+e);
});

/*
Success!!!

"AAPL",482.75,"9/27/2013","4:00pm",-3.47,484.67,480.72,8144247,482.85,483.40,"-0.71%"
"AMZN",316.01,"9/27/2013","4:00pm",-2.11,317.21,313.35,1658435,315.94,316.49,"-0.66%"
"GOOG",876.39,"9/27/2013","4:00pm",-1.78,877.52,871.31,1258822,855.50,888.00,"-0.20%"
"MSFT",33.27,"9/27/2013","4:00pm",+0.50,33.75,32.87,55347904,32.78,33.99,"+1.53%"
"YHOO",33.55,"9/27/2013","4:00pm",+0.80,33.85,32.76,31791544,N/A,33.87,"+2.44%"
*/
