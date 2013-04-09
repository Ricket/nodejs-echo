var PORT = 8080,
    http = require("http");

http.createServer(function (req, res) {
	req.on("data", function (chunk) {
		res.write(chunk);
	});
}).listen(PORT);
