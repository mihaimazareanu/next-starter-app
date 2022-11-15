import { products } from "../_data/products";

export default function Products(req, res) {
  switch (req.method) {
    case "GET":
      if (req.query.category) {
        return res
          .status(200)
          .json(
            products.filter(
              (product) => req.query.category === product.category
            )
          );
      } else {
        return res.status(200).json(products);
      }

    default:
      return res.status(400).json({ message: "method not supported" });
  }
}
