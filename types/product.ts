export interface Product {
    title: string;
    productImage: any;
    _id: string;
    productName: string;
    _type: "product";
    image?:any
    price: number;
    description?: string;
    quantity:number,
    isNew:boolean,
    showOverlay:boolean,
}