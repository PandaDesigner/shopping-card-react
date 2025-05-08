import type { IProductMapper } from '../products/product.interface';

export interface IJsPDFAdapter {
    generatePdf: (body: Array<IProductMapper>) => void
}