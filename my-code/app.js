const url = require('url');
const http = require('http');
const fs = require('fs');
const replaceTemp = require(`${__dirname}/my-code/starter/modules/replaceTemplate.js`)

const tempOverview = fs.readFileSync(`${__dirname}/my-code/starter/templates/template-overview.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/my-code/starter/templates/template-product.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/my-code/starter/templates/template-card.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/my-code/starter/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data); 




const server = http.createServer((req, res) => {

	const { query, pathname } = url.parse(req.url, true)
	console.log(pathname)

	const pathName = req.url;
	switch (pathname) {

		// Overview
		case '/':
			res.writeHead('200', {'Content-type': 'text/html'})
			const cardsHTML = dataObj.map((el) => replaceTemp(tempCard, el)).join('');
			const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)
			res.end(output)

			
			break;

		// Overview 
		case '/overview':
			res.writeHead('200', {'Content-type': 'text/html'})
			const cardsHTMLL = dataObj.map((el) => replaceTemp(tempCard, el)).join('');
			const outputt = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTMLL)
			res.end(outputt)
			break;

		// Product
		case '/product':
			res.writeHead('200', {'Content-type': 'text/html'})
			const product = dataObj[query.id];
			const out = replaceTemp(tempProduct, product); 
			res.end(out)
			break;

		//API
		case '/api':
			res.writeHead('200', {'Content-type': 'application/JSON'})
			res.end(data)
			break;
		
		// Not Found	
		default:
			res.writeHead(404, {
				'Content-type': 'text/html'
			})
			res.end("<h1>404 not found</h1>")
			break;
	}
})


server.listen(5000, () => {
	console.log('Listening in port 5000')
}) 