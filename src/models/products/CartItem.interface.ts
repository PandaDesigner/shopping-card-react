import type {IProductMapper} from "@/models/products/product.interface.ts";

export interface ICartItem {
    product: IProductMapper;
    quantity: number;
}
export interface ICart {
    items: ICartItem[];
    totalPrice: number;
    totalQuantity: number;
}
