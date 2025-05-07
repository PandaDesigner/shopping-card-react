export interface IRating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface IProductMapper {
    id: number
    name: string
    description: string;
    price: number
    originalPrice?: number
    image: string
    category: string
    quantity?: number
}