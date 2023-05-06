class Product {

    static productId = 1;

    constructor ({title, price, thumbnail, code, stock}) {
        if (!title || !price || !thumbnail || ! code || !stock) throw new Error('All parameters should be specified');

        if (typeof title !== 'string' || typeof price !== 'number' || typeof thumbnail !== 'string' || typeof code !== 'string' || typeof stock !== 'number') {
            throw new Error('Invalid parameter datatype');
        }

        if (price < 0) throw new Error('Price cannot be negative');

        if (stock < 0) throw new Error('Stock cannot be negative');

        this.id = Product.productId++;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct({title, price, thumbnail, code, stock}) {
        if (this.products.some((product) => product.code === code)) {
            throw new Error('The specified code is in use by an existant product');
          }
        const newProduct = new Product({title, price, thumbnail, code, stock});
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const returnProduct = this.products.find((product) => product.id === id);

        if(!returnProduct) throw new Error("Product not found");

        return returnProduct;
    }

};

export { ProductManager };