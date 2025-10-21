// src/config/api.js
const WP_BASE = process.env.NEXT_PUBLIC_WP_BASE_URL;

// Centralized API paths
export const API = {
  PRODUCTS: `${WP_BASE}/wp-json/custom/v1/products`,
  WISHLIST: `${WP_BASE}/wp-json/custom/v1/wishlist`,
};

export default API;
