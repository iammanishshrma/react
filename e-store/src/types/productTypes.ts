type Count = {
  rate: number;
  count: number;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Count;
};
