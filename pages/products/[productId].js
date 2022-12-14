import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          throw new Error(`Fetch failed, status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    if (productId) {
      getProduct();
    }
  }, [productId]);
  console.log(product);
  // console.log(products);
  return (
    <>
      <Head>
        <title>Product Details for Product {productId}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <div>Product Details for Product: {productId}</div>
      {product ? (
        <>
          <p>Id: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
