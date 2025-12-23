 
import ProductDetailsClient from "../ProductDetails";

const ProductDetail = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3000/api/product/${id}`, { cache: "no-store" });
   const product = await res.json();

  // Pass the product data to client component
  return <ProductDetailsClient product={product} />;

};

export default ProductDetail;
