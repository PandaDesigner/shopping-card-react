import type {IProductRepository} from "@/models/products/productRepository.interface.ts";
import type {IProduct , IProductMapper} from "@/models/products/product.interface.ts";
import {NotificationService} from "@/models/notification/notification.service.ts";
import {Utils} from "@/utils/utils.ts";


export class ProductRepositoryImpl implements IProductRepository {

    private apiUrl : string = "https://fakestoreapi.com";
    private notificationService : NotificationService;
    private products : Array<IProductMapper>;
    private searchArray : Array<IProductMapper>;

    constructor () {
        this.notificationService = new NotificationService();
        this.products = [];
        this.searchArray = [];
    }

    public async fetchProducts () : Promise<void> {
        const url = `${this.apiUrl}/products`;
        console.log(url);
        try{
           const response = await fetch(url)
              if (!response.ok) {
                throw new Error("error al cargar los productos");
              }
          const data :Array<IProduct> = await response.json();

            this.products = data.map( product =>  Utils.mapperProducts(product));
        } catch (err) {
            this.notificationService.showError("Error", "error al cargar los productos");
            console.error("error al cargar los productos ", err);
        }

    }

    getAllProducts () : Array<IProductMapper> {
        return this.searchArray.length === 0
            ? this.products
            : this.searchArray;
    }

    getProductById ( id : number ) : IProductMapper | null {
        return this.products.find(item => item.id === id.toString()) || null;
    }

    getProductsByCategory ( category : string ) : Array<IProductMapper> | null {
        return this.products.filter(item => item.category === category) || null;
    }

    getProductsBySearch ( search : string ) : Array<IProductMapper> {
        const lowerCaseSearch = search.toLowerCase();
        this.searchArray = this.products.filter(item => {
            return (
                item.name.toLowerCase().includes(lowerCaseSearch) ||
                item.description.toLowerCase().includes(lowerCaseSearch)
            );
        });

        return this.searchArray.length === 0 ? this.products : this.searchArray;
    }

}