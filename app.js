const url = require('url');
const http = require('http');


const server = http.createServer((req, res) => {
	const pathName = req.url;

	switch (pathName) {
		case '/overview':
			res.end("This is the OVERVIEW")
			break;
	
		case '/product':
			res.end("This is the PRODUCT")
			break;
	
		case '/':
			res.end("This is the OVERVIEW")
			break;
		
		case '/api':
			res.end("API")
			break;
		
		// case '/':
		// 	res.end("This is the OVERIEW")
		// 	break;
		
		default:
			res.writeHead(404, {
				'Content-type': 'text/html'
			})
			res.end("<h1>404 not found</h1>")
			break;
	}
})


server.listen(5000, () => {
	console.log('Hola Amigos')
}) 