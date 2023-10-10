import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = ({ data: products }) => {
  // console.log("Featured Products::", products);

  return (
    <div className="w-11/12 mx-auto pb-10">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center my-8 md:my-10 lg:my-14">
        Featured Products
      </h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.slice(0, 10)?.map((product) => (
          <div key={product?._id} className="card bg-white-100 shadow-xl">
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
                  href={`/products/${product._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
