const express = require('express');

const app = express();

//Loads the handlebars module
const exhbs = require('express-handlebars');

app.set('view engine', 'hbs')
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', exhbs({
    extname: 'hbs',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('callback for "/"');
    console.log('req.url:', req.url);
    res.render('home');
})

app.get('/about', (req, res) => {
    console.log('callback for "/about"');
    console.log('req.url:', req.url);
    res.render('about');
})

app.get('/products', (req, res) => {
    res.render('products');
})

app.listen(4444, () => {
    console.log('Application server is running on port 4444')
})
