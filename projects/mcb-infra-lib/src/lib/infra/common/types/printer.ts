export interface PrinterDocument {
    items: PrinterDocumentItem[];

}

export interface PrinterDocumentItem {
    key: string;
    value: any;
    x: number;
    y: number;
    type: 'image' | 'text';
    width?: number;
    height?: number;
    font?: PrinterDocumentFont;
}


export interface PrinterDocumentFont {
    name: string;
    size: number;
    style: string;
}
