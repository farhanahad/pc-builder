import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";

const Category = ({ data }) => {
  const { data: products } = data;
  // console.log(products);

  return (
    <div className="w-11/12 mx-auto py-10 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <div key={product._id} className="card bg-white-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={product?.image}
              height="290"
              width="250"
              alt={product?.category}
              responsive
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product?.productName}</h2>
            <div>
              <p>Price: {product?.price}</p>
              <p>Category: {product?.category}</p>
            </div>
            <div>
              <p>Status: {product?.status}</p>
              <p>Rating: {product?.rating}</p>
            </div>
            <div className="card-actions w-full">
              <Link
                className="btn w-1/3 mx-auto"
                href={`/products/${product?._id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://pc-builder-server-gray.vercel.app/api/v1/products`
  );
  const { data: product } = await res.json();

  const paths = product.map((product) => ({
    params: { category: product.category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  // console.log("Ram::", params);
  const res = await fetch(
    `https://pc-builder-server-gray.vercel.app/api/v1/products?category=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
