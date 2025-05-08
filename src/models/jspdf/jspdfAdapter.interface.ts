import type { IProductMapper } from '../products/product.interface';

export interface HeaderColumn {
    header: string;
    dataKey: string | number;
}

export type DataRow = Omit<IProductMapper, 'description' | 'originalPrice' | 'image'>


