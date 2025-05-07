import { NotificationService } from "@/models/notification/notification.service.ts";
import { ProductRepositoryImpl } from "@/models/products/productRepository.impl.ts";
import { useEffect, useCallback, useMemo } from "react";
import { StoreProduct } from "@/store/store.ts";
import React from 'react';

const notification = new NotificationService();
const products = new ProductRepositoryImpl();

export const useProduct = () => {
    const productsStore = StoreProduct(state => state.products);
    const setProducts = StoreProduct(state => state.setProducts);
    const cartProducts = StoreProduct(state => state.productsCart);
    const setCartProducts = StoreProduct(state => state.setProductsCart);
    const deleteCartProducts = StoreProduct(state => state.deleteProductsCart);
    const upgradeQuantity = StoreProduct(state => state.updateQuantity);
    const totalValuePrice = StoreProduct(state => Number(state.totalPrice.toFixed(2)));
    const setTotalValuePrice = StoreProduct(state => state.addTotalPrice);
    const reomveTotalValuePrice = StoreProduct(state => state.removeTotalPrice);
    const cleanFilterCart = StoreProduct(state => state.cleanFilterProducts);
    const [addedToCart, setAddedToCart] = React.useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await products.fetchProducts();
                const newDataProducts = await products.getAllProducts();
                setProducts(newDataProducts);
            } catch (err) {
                notification.showError('Error', 'Failed to load products');
                console.error('error loading products', err);
            }
        };
        fetchProducts();
    }, [setProducts]); // Asegúrate de incluir solo las dependencias necesarias

    const addProductToCart = useCallback((productId: number) => {
        const product = products.getProductById(productId);
        if (!product) {
            notification.showError('Error', 'Product not found');
            return;
        }
        setCartProducts(productId);
        upgradeQuantity(productId, 1);
        setTotalValuePrice(product.price);
        notification.showSuccess('Success', `${product.name}\n added to cart 
        \n quantity: ${1}
        \n price: ${product.price}`);
    }, [setCartProducts, upgradeQuantity, setTotalValuePrice]);

    const deleteProductFromCart = useCallback((productId: number) => {
        const cardFromCart = cartProducts.find((product) => product.id === productId);
        if (!cardFromCart) {
            notification.showToast('Error', `Error deleting product from cart ${productId}`);
            return;
        }
        deleteCartProducts(productId);
        upgradeQuantity(productId, -1);
        reomveTotalValuePrice(cardFromCart.price);
        notification.showSuccess('Success', `${cardFromCart.name} deleted from cart \n quantity: ${cardFromCart.quantity}`);
    }, [cartProducts, deleteCartProducts, upgradeQuantity, reomveTotalValuePrice]);

    const cartTotalQuantity = useMemo(() => cartProducts.length, [cartProducts]);

    const handleAddToCart = React.useCallback((id: number): void => {
        setAddedToCart((prev) => !prev);
        if (addedToCart) {
            deleteProductFromCart(id);
            upgradeQuantity(id, -1)
            console.log("Producto eliminado del carrito");
        } else {
            addProductToCart(id);
            upgradeQuantity(id, 1)
            console.log("Producto agregado al carrito");
        }
    }, [addedToCart, addProductToCart, deleteProductFromCart]);

    return {
        productsStore,
        cartTotalQuantity,
        addProductToCart,
        deleteProductFromCart,
        totalValuePrice,
        upgradeQuantity,
        cartProducts,
        cleanFilterCart,
        handleAddToCart,
        addTotalPrice: setTotalValuePrice, // No es necesario crear otra función
        removeTotalPrice: reomveTotalValuePrice, // No es necesario crear otra función
        addedToCart,
        setAddedToCart,
    };
};