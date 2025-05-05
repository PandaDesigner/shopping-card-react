import {NotificationService} from "@/models/notification/notification.service.ts";
import {ProductRepositoryImpl} from "@/models/products/productRepository.impl.ts";
import {useEffect , useState} from "react";
import type {IProductMapper} from "@/models/products/product.interface.ts";



const notification = new NotificationService ();
const products = new ProductRepositoryImpl ();

export const useProduct = () => {
    const [ dataProducts , setDataProducts ] = useState<Array<IProductMapper> | []> ( );

    useEffect ( () => {
        const fetchProducts = async () => {
            try {
                await products.fetchProducts ();
                const newDataProducts = await products.getAllProducts ();
                setDataProducts ( newDataProducts );
            } catch (err) {
                notification.showError('Error', 'Failed to load products');
                console.error('error loading products', err);
            }
        }
        fetchProducts();
    } , [] )

    return {
        dataProducts
    }
}