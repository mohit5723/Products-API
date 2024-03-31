const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route")
app.use(express.json());

mongoose
	.connect(
		'mongodb+srv://admin:Mohit123@backenddb.bsvt6ab.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB'
	)
	.then(() => {
		console.log('connected to db');
	});

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use(express.urlencoded({extended: false}));
// routes
app.use("/api/products", productRoute);




// app.use('/api/products', productRoute);

// // read

// app.get('/api/products', async (req, res) => {
// 	try {
// 		const products = await Product.find({});
// 		console.log(products);
// 		res.status(200).json(products);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// // retreive by id

// app.get('/api/products/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findById(id);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// // update a prod

// app.put('/api/products/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndUpdate(id, req.body);
// 		if (!product) {
// 			return res.status(404).json({ message: 'prodcut not found' });
// 		}
// 		const updatedProduct = await Product.findById(id);
// 		res.status(200).json(updatedProduct);
// 	} catch (error) {
// 		console.log(err);
// 	}
// });

// // delete prod

// app.delete('/api/products/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndDelete(id);
// 		if (!product) {
// 			return res.status(404).json({ message: 'prod not found' });
// 		}
// 		res.status(200).json({ message: 'delted' });
// 		console.log(`deleted prof of id ${id}`);
// 	} catch {}
// });

// // create add prods

// app.post('/api/products', async (req, res) => {
// 	try {
// 		const product = await Product.create(req.body);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 		console.log(error);
// 	}
// });

app.listen(3000, () => {
	console.log('server running on port 3000');
});
