//Using nodemailer
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const NodeRSA = require('node-rsa');
const myConektaKey = "MIIEowIBAAKCAQEAq2Vn8uPpi2G2Q1RQWK9anaiWQTOf9hHOuZHMbE3l8eVKC/DbDPvOuqlD3PqnT62PmydNsscyThN+NPFTVi6WMpaEhyjlpM5L5as33AxWJVFbQ8Z8FHwk9YGSgE8vu1pA3M3eQyNkl+pf/E4/XNtYOLK0wM580vbn/qB7DxUOf9dT+7IlpkGl9Qfj09IUb64BH+rCFmBv/+Jr63ktoAbl6UFY+hExTHQVnWBtAZN4sJzcriegTFR587btg1koiHcMj1xRCAVJJ64bftHsg1giONZPX2BpdezDvrsVMOoMtZrFnE2P0mfmUSCtKU5WInpryHTuNQzZ+UaTXpWSdxoyUQIDAQABAoIBADJxbd52ZU24PEQklGEFes3byBz4bKOnKghDeL6HTp2ateg9wrpXgcg9+NMYkhVJJ3KqZpuvNIb2BbbfL3+1xk6tLeP5jVyrunqloZMJrnDdONcBm5ML1nTK5asNoyaosV5K2Jc522k6eXVwMgXKKHTHY5s7KlGMiUrPQGh38gR9h9WXyhwjOBBsYjtIhB4K26aHSe9k037lRiNqXhBSo29c+Cw9C5VDAFxN/OJyw2qcxT936wa+sdtQdJIFQsgPYCGiWw4wxEaSsOEdTFdecuUdEjr2UWnbIiclt9uv0hhWv2pjZHDMaYfmiNHDofys/cn+eeBbjCZojkhvmRgOceECgYEA0euRrepU69woDfKAONsYpJ4EJFxtApZyZ515VNIfVvzO68J8mNyas8UfSwj1hBTBk8qbRo2wDVFfmNYZSQLAREgkjxUOxuzWxnErjwapPq4Bx8j0prAmSYrEmNbjjPbxzcHvAsxuwvADteyKfiQ2CPpX8DndW2M5mUvbLxu0cAsCgYEA0QT7oI+u39lR1mpclwHbNJC6HtvWuG6GJEF2pIct5+A7HO3SgDJ+8sonhwx6M4CQ2rlTgtqmpWntyhQ4RUdAY5ssVYgzh4wwUX+2HRR7yUTAeGdFDaCNTJ8ZpP/9L0IZhbHFdHCsO6Mn/7pRHplNsnQfRtYOhNMl3ewbT2ZXFJMCgYAOu/IluuTrCTDmibbmRrqcE1tHEhW0sMqm6y6w/W6ltGjxs1z7fcB+Db/8jExvUOWlcfskIJ3S0XtcRurPbRoBsO6f/GJlJAqPMzJTf6wxchU96KUDbinBz7Os5qhiJJMkVhBoqeC8XgxkoI23/OKuDqRNgEJBP92zHNftnowzsQKBgQCtvtOfovA9ePtTHXS7vbpGVquv7RPumUj+KECEAS5CmhzpLjOVhuQJ08rJsrB90TgX6IentTNjOsuD+AzSYaj/Y0SWELKs0PZ1OJDcWWOQaYsISueWrUfnUjVR98yxFOP8Q0qcQPCaXkRoiarWoZ55YZeCHXtSI+ZNM+97r9lg6wKBgCyEs4UfOtTIYYwnwWyb8VoYvW3Giu05p33I/aEjPZTkvG5FpSRVadW4k7YEimRdM4/N8+IDd2Uzo/SlOaKgnam2ndGGl+LEkc6hOxm4XlQOodIQj+GwRiVGACgNjN2MDZwgS76qumkeNoL/r8/eZpWCqzINXpfLGedoxWtA2jKQ";
const base64 = require('base-64');


const decr = "";
var response = "";
const key = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n' +
	'MIIEowIBAAKCAQEAvlu1Vf31BDarYbgLNif8O0G9yOKs6M61RJ2z+rcf4C91aIXD\n' +
	'9fjfjiSqCTQ+bsx71OHXoo7o2XUnwfVIGsDSGtb39IwvDA8JptUds8DYVa11sHDp\n' +
	'Il4Mn40EmE2shcAcPrqrFbq+xKh36YIqQaBv7klACixNwm/zXhSal+hPrLfjkDKz\n' +
	'1HBI0t90euUwPaukFkY4iTyC4Z7yVWQgIo70dZZhPEKOX2l6Nd4vqvC7ezZn/7zH\n' +
	'SSAmP7wTdnIyZ998AV27VDavUU3dX5UxNeGz/pFKlizN8LmyKP4T/fMw0lFnRbFB\n' +
	'U1RLxJW+ouxNephJ2mTRxteawb+jfG0QwyzY7QIDAQABAoIBAGJfalrCHvjKd87M\n' +
	'GZ8nEsZctwM1gT3edPa8uOH7+NEWNYqKdjaLIpyGfgi7ovgHXIcrHxC24cZfMOif\n' +
	'JWAN/YY5SXJrb3S/4LECuZLHOgUs2wEPmKtWBxf8/D7pBRspqG8ScI+OLj/a//0A\n' +
	'c23ux2lRGXMoahbtW8tmwm12dJZAnXuQhnFTb3EkMg49KkE8YtyGa1rRsNIBH0QD\n' +
	'Y3U6jMtwDmB7J2xMhoPTEsqJfkRZne8Wu/KvsWT/0ac9t6cMAZIaP5fhDYXdsd+0\n' +
	'k87eJbUfs4vGAlfXeOvScWSlQtlTzA/JZroIgoyhF6pFUFwwgPZvKIvpJcOXOVM0\n' +
	'lfhDuQECgYEA4G4rqm8fmNGEeb+CqylJBWMgqtUiaMQWwvDYK+wDkgwJLSb2/XJm\n' +
	'ol6pr/U0Rj+QPU6ZgwNJ8GVVPHhG7aAoUMUcz37in5cyhd4q1aBadsriVARAL9Bc\n' +
	'Oilr9MxJRsl7VGWrfKN8+L19rGFyPqH3aYrKW1JI5VeiNt0R88Iy3t0CgYEA2SKW\n' +
	'NvIqfrAGoTfHE+wIIDCFjPfxA+zWwaGKeffaIaJEHJYlMtaq9Xfkaq80CApWLYdZ\n' +
	'D+UeG9DHHktNp33iVv/vovslwtE2V/qMd29L4iO1bat2DNVHHonHqK34WQH7rPS4\n' +
	'88wd27YwE2EYYQN+wywjAwZl/+h1rGZorhCn2VECgYBnXHYB1ZHgyMXRaJEekTIP\n' +
	'KBs4claZl43AFDoK6HSwg5iKUgK4sUJxj1VpM23y2H1urs9mllIsRA8gfWh1Mii/\n' +
	'Ijjlm1N2GqVrH+nsXyCqyz+3YAnLu5NuOft9T8SDtHF3aiezjHwW9vZ1OJ/sFp4i\n' +
	'3ofZzSjDbzvHNsN41zykhQKBgGsUCl34WIp3Rh21AwDJEkzFgOa+0uVro5CDmGWD\n' +
	'm9egTNSIGroScOZyhHs0AYXBizQSnhIfnBR9heRjoFzr0HW06zlFfx6uy4zhaunv\n' +
	'Qc24bF00BBhaCSN/MK33dRR3zORDHv5jd4oFM3orFLmq3pVjK7TvL9fejEFDk3Xb\n' +
	'ktqxAoGBAI5bInojDdwS4PKVTzTPFlYOeDoR7iqkpG0DKzrG61O3mUwBVTf0DIQN\n' +
	'bnJ34FeXQdm2uGL8OqrBsYJEYxaby5MeXf/qxOMZtqne70CWIezzQAdR7ZDcXi19\n' +
	'vzpkU/UwXaxbqUcZGYiqTUP8FcsLLiKIJtRxDztTkQB+eXTODWAX\n' +
	'-----END RSA PRIVATE KEY-----');






//Al objeto Request le van a agregar el body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());





//Peticion de tipo POST
//instalamos la biblioteca body parser para leer el body que envían
//npm install body-parser --save
//const bodyParser = require("body-parser");
app.post("/ConektaWebhook", (req, res) => {

	// const buffer = req.headers.digest	
	// const decodedData = base64.encode(buffer);
	// console.log("DecodedData");
	// console.log(decodedData);
	//console.log("--------------------------------------------------------------------------------------");
	//const decrypted = key.decrypt(decodedData, decr);


	// console.log("DecodedData");
	// console.log(decodedData);
	// 	console.log("--------------------------------------------------------------------------------------");

	// console.log("Decrypted");
	// console.log(decr);
	// 	console.log("--------------------------------------------------------------------------------------");

	// console.log("--------------------------------------------------------------------------------------");
	// console.log("Headers");
	// console.log(req.headers);
	// 	console.log("--------------------------------------------------------------------------------------");
	// 	console.log("Body");
	// 	console.log(req.body);
	// 	console.log("--------------------------------------------------------------------------------------");
	// 	console.log("Data");
	// 	console.log(req.body.data)
	res.sendStatus(200)
	if (req.body.data.type = 'order.paid') {



		console.log("Complete Webhook HEaders init")
		console.log("--------------------------------------------------------------------------------------");
		console.log(req.headers)
		console.log("--------------------------------------------------------------------------------------");
		console.log("Complete Webhook Headers end")


		// console.log("Headers");
		// console.log("--------------------------------------------------------------------------------------");
		// console.log(req.headers)
		// console.log("--------------------------------------------------------------------------------------");

		// console.log("Body");
		// console.log("--------------------------------------------------------------------------------------");
		// console.log(req.body)
		// console.log("--------------------------------------------------------------------------------------");


	}

	//res.sendStatus(200)


	// if (data.type == 'order.paid') {

	// 	//console.log(data)
	//   // var mail = {
	//   //     from: me,
	//   //     to: you,
	//   //     subject: 'Pago comprobado',
	//   //     text: 'Tu pago ha sido confirmado.'
	//   // };
	//   // transporter.sendMail(mail, function(error, info){
	//   //     if(error){ return console.log(error); }
	//   //   });
	// }


});
//Servidor dentro de nuestra computadora un puerto 8080 8000 3000
//app.listen(//en que puerto va a correr, callback); 
app.listen(3020, () => {
	console.log("Server corriendo en el puerto 3020")


});





