import { create } from 'zustand';
import type { IProductMapper } from "@/models/products/product.interface.ts";

interface ProductsStore {
    products: Array<IProductMapper>;
    filterProducts: Array<IProductMapper>;
    productsCart: Array<IProductMapper>;
    open: boolean;
    totalPrice: number;
}

interface ProductsActions {
    setProducts: (products: Array<IProductMapper>) => void;
    setFilterProducts: (category: string) => void;
    setProductsCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    deleteProductsCart: (productId: number) => void;
    cleanFilterProducts: () => void;
    setOpen: (open: boolean) => void;
    addTotalPrice: (value: number) => void;
    removeTotalPrice: (value: number) => void
}

type ProductsStoreType = ProductsStore & ProductsActions;

export const StoreProduct = create<ProductsStoreType>()((set, get) => ({
    products: [],
    filterProducts: [],
    productsCart: [],
    open: false,
    totalPrice: 0,
    setProducts: (products: Array<IProductMapper>) => {
        set({ products });
    },
    setFilterProducts: (category: string) => {
        const filteredProducts = get().products.filter((product) => product.category === category);
        set({ filterProducts: filteredProducts });
    },
    setProductsCart: (productId: number) => {
        const productToAdd = get().products.find((product) => product.id === productId);
        if (productToAdd) {
            let includeProduct = false
            get().productsCart.find(item => {
                includeProduct = item.id === productToAdd.id ? true : false
            })
            if (includeProduct) return
            set({ productsCart: [...get().productsCart, productToAdd] });
        }
    },
    updateQuantity: (productId: number, quantitys: number = 1) => {
        const updatedProductsCart = get().productsCart.map((product) => {
            const newQuantity = product?.quantity === undefined ? 0 : Math.max(product.quantity + quantitys, 1);
            if (product.id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        set({ productsCart: updatedProductsCart });
    },
    deleteProductsCart: (productId: number) => {
        const updatedProductsCart = get().productsCart.filter((product) => product.id !== productId);
        set({ productsCart: updatedProductsCart });
    },
    cleanFilterProducts: () => {
        set({ productsCart: [] });
    },
    setOpen: (open: boolean) => {
        set({ open });
    },

    addTotalPrice: (value: number) => {
        set(() => ({
            totalPrice: get().totalPrice + value
        }))
    },
    removeTotalPrice: (value: number) => {
        set(() => ({
            totalPrice: get().totalPrice - value
        }))
    }
}))
