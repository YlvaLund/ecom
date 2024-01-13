import axios from "axios";
const path: string = "https://api.noroff.dev/api/v1/online-shop";

export default async function getProducts() {
  // Fetching the products.
  const res = await axios.get(path);
  return res;
}

export async function getProduct(id: String) {
  // Fetching the products.
  const res = await axios.get(`${path}/${id}`);
  return res;
}
