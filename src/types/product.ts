export interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  details: string;
  price: string;
  salePrice?: string;
  features: string[];
  bestFor: string;
  image?: string;
  isProfessional?: boolean;
  isHospitality?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  ctaText?: string;
  ctaLink?: string;
}
