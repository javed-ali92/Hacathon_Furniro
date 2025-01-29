export interface ProductCardProps {
  image: string;
  discount?: string;
  discountBgColor?: string;
  name: string;
  description: string;  
  discountedPrice: number;
  price?: number;
  status: string;
  showOverlay?: boolean; 
}
