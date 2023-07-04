import { Router } from "express";
import { productsUpdated } from "../utils/socketUtils.js";
import { ProductManager } from "../dao/managers/products.manager.js";
import uploader from '../utils/multer.js';

const productManager = new ProductManager();

const router = Router();

router.get('/', async (req, res) => { 
    try {
        const { limit = 10, page = 1, sort, category, available } = req.query;
        const products = await productManager.getProducts(limit, page, sort, category, available);        
        // Add navigation links to response
        const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`;
        const sortOptions = ['asc', 'desc'];
        const availableOptions = ['true', 'false'];
        const sortQuery = sort && sortOptions.includes(sort.toLowerCase()) ? `&sort=${sort}` : '';
        const categoryQuery = category ? `&category=${encodeURIComponent(category)}` : '';
        const availableQuery = available && availableOptions.includes(available.toLowerCase()) ? `&available=${available}` : '';
        const navLinks = {
            firstLink: products.totalPages > 1? `${baseUrl}?limit=${limit}&page=1${sortQuery}${categoryQuery}${availableQuery}` : null,
            prevLink: products.hasPrevPage ? `${baseUrl}?limit=${limit}&page=${products.prevPage}${sortQuery}${categoryQuery}${availableQuery}` : null,
            nextLink: products.hasNextPage ? `${baseUrl}?limit=${limit}&page=${products.nextPage}${sortQuery}${categoryQuery}${availableQuery}` : null,
            lastLink: products.totalPages > 1? `${baseUrl}?limit=${limit}&page=${products.totalPages}${sortQuery}${categoryQuery}${availableQuery}` : null
        }
        res.send({status: 1, ...products, ...navLinks});
    } catch (error) {
        res.status(500).send({status: 0, msg: error.message});
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productManager.getProductById(productId)
        res.send({status: 1, product: product});
    } catch (error) {
        res.status(404).send({status: 0, msg: error.message});
    }
});

router.post('/', uploader.array('thumbnails'), async (req, res) => {
    try {
        const newProductFields = req.body;
        const files = req.files;
        const filesUrls = files.map(file => `http://localhost:8080/files/uploads/${file.filename}`);
        newProductFields.thumbnails = filesUrls;        
        const newProduct = await productManager.addProduct(newProductFields);
        productsUpdated(req.app.get('io'));
        res.send({status: 1, msg: 'Product added successfully', product: newProduct});
        } catch (error) {
        res.status(500).send({status: 0, msg: error.message});
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const updatedProductFields= req.body;

        if (Object.keys(req.body).length === 0) throw new Error('Empty request body');
        const updatedProduct = await productManager.updateProduct(productId, updatedProductFields);
        productsUpdated(req.app.get('io'));
        res.send({status: 1, msg: 'Product updated successfully', product: updatedProduct});
    } catch (error) {
        res.status(404).send({status: 0, msg: error.message});
    }
});

router.delete('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        await productManager.deleteProduct(productId);
        productsUpdated(req.app.get('io'));
        res.send({status: 1, msg: 'Product deleted successfully'});
    } catch (error) {
        res.status(404).send({status: 0, msg: error.message});
    }
});

export default router;
