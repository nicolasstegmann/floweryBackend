import { ProductManager } from '../dao/managers/products.manager.js';
import { CartManager } from '../dao/managers/carts.manager.js';

const register = async (req, res) => {
    res.render('register', {title: 'Welcome new Flowerier!!', style: 'login.css'});
}

const login = async (req, res) => {
    res.render('login', {title: 'Hello Flowerier!!', style: 'login.css'});
}

const resetPassword = async (req, res) => {
    res.render('resetPassword', {title: 'Hello Flowerier!! Lets recover your password', style: 'login.css'});
}

const userProfile = async (req, res) => {
    res.render('userProfile', {title: 'Flowerier profile', style: 'login.css', user: req.user});
}

const staticProducts = async (req, res) => {
    const productManager = new ProductManager();
    const products = await productManager.getProducts();
    res.render('home', {title: 'Flowery 4107 Products', style: 'product.css', products: products});
}

const realTimeProducts = async (req, res) => {
    res.render('realTimeProducts', {title: 'Flowery 4107 Products', style: 'productList.css'});
}

const webchat = async (req, res) => {
    res.render('chat', { style: 'chat.css', title: 'Flowery 4107 Webchat'});
}

const products = async (req, res) => {
    try {
        const { limit = 10, page = 1, sort, category, available } = req.query;
        // Get baseUrl for navigation links
        const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`;
        const productManager = new ProductManager();
        const products = await productManager.getProducts(limit, page, sort, category, available, baseUrl);
        res.render('productList', {title: 'Flowery 4107 Products', style: 'productList.css', products: products, user: req.user});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const carts = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cartManager = new CartManager();
        const cart = await cartManager.getCart(cartId);
        res.render('cart', {title: 'Flowery 4107 Cart', style: 'cart.css', cart: cart});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default {
    register,
    login,
    resetPassword,
    userProfile,
    staticProducts,
    realTimeProducts,
    webchat,
    products,
    carts
};