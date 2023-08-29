import { Router } from "express";
import { authorization } from '../utils/utils.js'
import cartController from '../controllers/carts.controller.js';
import EnumErrors from '../utils/errorHandler/enum.js';
import FloweryCustomError from '../utils/errorHandler/FloweryCustomError.js';

const router = Router();

router.post('/', authorization(['user']), cartController.createCart);

router.get('/:cartId', authorization(['admin', 'user']), cartController.getCartById);

router.put('/:cartId', authorization(['user']), cartController.updateCartById);

router.post('/:cartId/products/:productId', authorization(['user']), cartController.addProductToCart);

router.delete('/:cartId/products/:productId', authorization(['user']), cartController.removeProductFromCart);

router.put('/:cartId/products/:productId', authorization(['user']), cartController.updateProductQuantity);

router.delete('/:cartId', authorization(['user']), cartController.emptyCart);

router.post('/:cartId/checkout', authorization(['user']), cartController.checkoutCart);

//handler for invalid routes
router.all('*', (req, res) => {
    FloweryCustomError.createError({
        name: 'Routing Error',
        message: 'Invalid route',
        type: EnumErrors.ROUTING_ERROR.type,
        recievedParams: { route: req.originalUrl },
        statusCode: EnumErrors.ROUTING_ERROR.statusCode
    });    
});

export default router;
