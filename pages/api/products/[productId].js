import { products } from "../_data/products";

export default function productId(req, res) {
  const { productId } = req.query;

  const findId = products.find((product) => {
    return product.id === Number(productId);
  });

  return res.status(200).json(findId);
}
