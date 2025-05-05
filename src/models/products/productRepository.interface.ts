import type {IProductMapper} from "./product.interface";
import type { ICart } from "./CartItem.interface";

export interface IProductRepository {
    fetchProducts(): Promise<void>;
    getAllProducts(): Array<IProductMapper>;
    getProductById(id: number): IProductMapper | null;
    getProductsByCategory(category: string): Array<IProductMapper> | null;
    getProductsBySearch(search: string): Array<IProductMapper>;

}

export interface ICartRepository {
    addToCart(product: IProductMapper, quantity?: number): Promise<void>;
    removeFromCart(productId: number): Promise<void>;
    updateCart(productId: number, quantity: number): Promise<void>;
    clearCart(): Promise<void>;
    getCart(): Promise<ICart>;
}