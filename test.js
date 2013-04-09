var PORT = 8080,
	http = require("http"),
	url = require("url");

var options = url.parse("http://127.0.0.1:" + PORT);
options.method = "POST";

var request = http.request(options, function (res) {
	res.on("data", function(chunk) {
		console.log(chunk.toString());
		process.exit(0);
	});
});

request.write("testing");
request.end();