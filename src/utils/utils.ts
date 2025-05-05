import type {IProduct , IProductMapper} from "@/models/products/product.interface.ts";


export class Utils {
    public static formatCurrency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
    }

    public static formatDate(date: Date): string {
        return new Intl.DateTimeFormat('en-US').format(date);
    }

    public static formatNumber(value: number): string {
        return new Intl.NumberFormat('en-US').format(value);
    }

    public static mapperProducts( product: IProduct) :IProductMapper {
        return {
            id: product.id.toString(),
            name: product.title,
            price: product.price,
            description: product.description,
            originalPrice: product.price,
            image: product.image,
            category: product.category
        }
    }
}