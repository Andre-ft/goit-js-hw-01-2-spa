const express = require('express');

const app = express();

const products = require('./products.json');

const PORT = process.env.PORT || 4444;

//Loads the handlebars module
const exhbs = require('express-handlebars');

app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', exhbs({
    extname: 'hbs',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('callback for "/"');
    console.log('req.url:', req.url);
    res.render('home', {titleName: 'Home Page'});
})

app.get('/about', (req, res) => {
    console.log('callback for "/about"');
    console.log('req.url:', req.url);
    res.render('about', {titleName: 'About us'});
})

app.get('/products', (req, res) => {
    res.render('products', {products, cssFileName: 'products', titleName: 'Our products'});
})

app.get('/product/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);

    res.render('product', { product });
})

app.listen(PORT, () => {
    console.log(`Application server is running on port ${PORT}`)
})
