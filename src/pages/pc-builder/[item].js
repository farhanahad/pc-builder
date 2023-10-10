import Image from "next/image";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addComponents } from "@/redux/products/productSlice";

const Item = ({ data }) => {
  const { data: products } = data;

  const router = useRouter();

  const dispatch = useDispatch();

  const handleSelect = (product) => {
    dispatch(addComponents(product));
    router.push("/pc-builder");
  };

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
              <button
                onClick={() => handleSelect(product)}
                className="btn mx-auto"
              >
                Add to Builder
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

Item.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  // console.log("Ram::", params);
  const res = await fetch(
    `https://pc-builder-server-gray.vercel.app/api/v1/products?category=${params.item}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
