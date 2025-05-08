import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { HeaderColumn } from './jspdfAdapter.interface';
import type { IJsPDFAdapter } from './jspdfAdapter.repository';
import type { IProductMapper } from '../products/product.interface';


export class JsPDFAdapter implements IJsPDFAdapter {

    private readonly doc: jsPDF = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter'
    });
    private readonly columns: Array<HeaderColumn> = [
        { header: 'Identificador', dataKey: 'id' },
        { header: 'Producto', dataKey: 'name' },
        { header: 'Cantidad', dataKey: 'quantity' },
        { header: 'Precio', dataKey: 'price' },
        { header: 'Categoria', dataKey: 'category' }
    ];

    private pdfAdapter(arr: Array<IProductMapper>) {
        const newArray = arr.map(product => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: product.quantity ?? 1
            }
        })
        return newArray
    }


    public generatePdf(body: Array<IProductMapper>): void {
        autoTable(this.doc, {
            columns: this.columns,
            body: this.pdfAdapter(body),
            startY: 60,
            theme: 'grid',
            headStyles: { fillColor: [22, 160, 133], fontSize: 14, fontStyle: 'bold' },
            bodyStyles: { fontSize: 12, fontStyle: 'normal' },
            margin: { top: 60, right: 40, left: 40, bottom: 40 }
        });
        this.doc.save('shopping-report.pdf');
    }
}

export const reportJsPdf = new JsPDFAdapter()