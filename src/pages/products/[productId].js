import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

const ProductDetails = ({ data }) => {
  const { data: product } = data;
  // console.log("Details Page", product);

  return (
    <div className="hero w-11/12 mx-auto py-10">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="mx-auto">
          <Image
            src={product?.image}
            alt={product?.productName}
            width="600"
            height="400"
            responsive
            className="rounded-lg shadow-2xl w-full h-full mx-auto"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            {product?.productName}
          </h1>
          <p className="pt-4">Category: {product?.category}</p>
          <p className="pt-2">Status: {product?.status}</p>
          <p className="pt-2">Price: {product?.price}</p>
          <p className="pt-2">Key Features: {product?.keyFeatures}</p>
          <p className="pt-2">My Rating: {product?.rating}</p>
          <p className="pt-2">Average Rating: {product?.averageRating}</p>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">
            User Reviews
          </p>
          {product?.reviews?.map((singleReview, i) => (
            <ul key={i}>
              {" "}
              <div className="flex">
                <li className="mr-2">User: {singleReview.username} </li>
                <li> Rating: {singleReview.rating}</li>
              </div>
            </ul>
          ))}
          <p className="py-4">Description: {product?.description}</p>
          <button className="btn">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://pc-builder-server-gray.vercel.app/api/v1/products`
  );
  const { data: product } = await res.json();

  const paths = product.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-gray.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
};
