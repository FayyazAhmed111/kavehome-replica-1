import API from "@/config/api";

const authHeader = () => {
  const token = process.env.NEXT_PUBLIC_WP_BASIC_AUTH;
  return token ? { Authorization: `Basic ${token}` } : {};
};

async function apiFetch(url, method = "GET", body) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  };

  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`Request failed: ${res.status} → ${msg}`);
  }
  return res.json();
}

export const getWishlist = () => apiFetch(API.WISHLIST, "GET");
export const addToWishlist = (productId) =>
  apiFetch(API.WISHLIST, "POST", { product_id: productId });
export const removeFromWishlist = (productId) =>
  apiFetch(`${API.WISHLIST}?product_id=${productId}`, "DELETE");
