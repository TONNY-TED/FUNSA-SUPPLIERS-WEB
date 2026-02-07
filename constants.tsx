
import React from 'react';
import { Product } from './types';

/**
 * ==========================================
 * 1. BRAND ASSETS
 * ==========================================
 */
export const LOGO_URL = "https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/491966012_10015358301816862_9179713803888814944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHXHYyl2ri67jOMge6H9JRMN3nCsIzIzcA3ecKwjMjNwBX4dTIkE7so9cldxL0X63KEHzsv6a7xM4qzll27UIU_&_nc_ohc=fhuysIoEA-EQ7kNvwHISf-Q&_nc_oc=AdnbY-F5ASIryDpYm4ybpGGzX7Yt5WdAGb7SqN8QZZVDPkxKuZH4mYlAbasOezaih0Y&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=fz7TD8scX5QOCS0GS3OPgA&oh=00_Afv6_UwB4FBNpYcYVmnqYAiuxKabWTbYWBvVq7rgiCF8Bg&oe=698D5D5A"; 

export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920";

export const DELIVERY_VAN_URL = "https://copilot.microsoft.com/th/id/BCO.1a0721a8-8973-4099-be8a-3e8b5ec1a6d2.png";

/**
 * ==========================================
 * 2. CONTACT INFORMATION
 * ==========================================
 */
export const CONTACT_INFO = {
  phones: ['+265 999 145 788', '+265 882 520 405', '+265 998 827 051'],
  email: 'funsasuppliers125@gmail.com',
  address: 'Kawale 2, Lilongwe, PO Box 163, Malawi'
};

/**
 * ==========================================
 * 3. PRODUCT CATEGORIES
 * ==========================================
 */
export const CATEGORIES = [
  "Medical Consumables",
  "Diagnostics",
  "Surgical Supplies",
  "Medical Equipment",
  "General Trade Items"
];

/**
 * ==========================================
 * 4. INITIAL PRODUCT CATALOG
 * ==========================================
 */
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Normal Saline',
    category: 'Medical Consumables',
    description: 'Normal saline (0.9% sodium chloride solution) is a sterile intravenous fluid used widely in healthcare.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NaCl_0%2C9%25_500ml_white_background.jpg/500px-NaCl_0%2C9%25_500ml_white_background.jpg',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Digital BP Machine',
    category: 'Diagnostics',
    description: 'A digital BP machine is an electronic device used to measure blood pressure automatically.',
    image: 'https://www.pbtech.com/imgprod/H/E/HEADGT1209__1.jpg?h=271394347',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Surgical Instrument Set (Major)',
    category: 'Surgical Supplies',
    description: 'Comprehensive high-grade stainless steel set for major orthopedic and general surgery.',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400',
    availability: 'Limited',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Wheel chair',
    category: 'Medical Equipment',
    description: 'Manual and automated wheelchairs designed for patient mobility and comfort.',
    image: 'https://www.1800wheelchair.com/media/catalog/product/cache/af1ba6b38ac5da7610f24cf4a6e7e66c/d/s/dsc08286_1.png',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '5',
    name: '2ml Disposable Syringes',
    category: 'Medical Consumables',
    description: 'Single-use sterile medical device designed for the administration of medications or fluids.',
    image: 'https://m.media-amazon.com/images/I/6167cEXCSLL._AC_SY300_SX300_QL70_FMwebp_.jpg',
    availability: 'Limited',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Absorbent Cotton Wool',
    category: 'Medical Consumables',
    description: 'Absorbent cotton wool is a soft, sterile medical consumable used for wound care and cleaning.',
    image: 'https://www.safetyfirstaid.co.uk/images/products/medium/D3703.jpg',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Professional Stethoscope',
    category: 'Diagnostics',
    description: 'Diagnostic instrument used by healthcare professionals to listen to internal body sounds.',
    image: 'https://m.media-amazon.com/images/I/61fJM2P+W0L._AC_SL400_.jpg',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Blood Collection Tube',
    category: 'Medical Consumables',
    description: 'Sterile, single-use containers designed to collect and preserve blood samples.',
    image: 'https://bsg-i.nbxc.com/product/c0/e5/fc/ef59eb2fc9e6a2f3bb623636d1.jpg@4e_500w_500h.src%7C95Q.webp',
    availability: 'In Stock',
    lastUpdated: new Date().toISOString()
  }
];

/**
 * ==========================================
 * 5. SECTOR LOGOS
 * ==========================================
 */
export const CLIENT_LOGOS = [
  { name: 'Government Hospitals', icon: <i className="fa-solid fa-hospital text-4xl opacity-50"></i> },
  { name: 'CHAM Hospitals', icon: <i className="fa-solid fa-notes-medical text-4xl opacity-50"></i> },
  { name: 'NGOs', icon: <i className="fa-solid fa-hand-holding-medical text-4xl opacity-50"></i> },
  { name: 'Private Hospitals', icon: <i className="fa-solid fa-house-medical text-4xl opacity-50"></i> },
];
