import RootLayout from "@/components/Layout/RootLayout";
import { removedComponents } from "@/redux/products/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  {
    title: "Processor",
    link: "cpuProcessor",
    stateKey: "processorExist",
  },
  {
    title: "Motherboard",
    link: "motherboard",
    stateKey: "motherboardExist",
  },
  {
    title: "RAM",
    link: "ram",
    stateKey: "ramExist",
  },
  {
    title: "Power Supply",
    link: "powerSupply",
    stateKey: "powerSupplyExist",
  },
  {
    title: "Storage",
    link: "storage",
    stateKey: "storageExist",
  },
  {
    title: "Monitor",
    link: "monitor",
    stateKey: "monitorExist",
  },
];

const PC_Builder = () => {
  const dispatch = useDispatch();
  const { buildPcComponents } = useSelector((state) => state.product);

  const [buildButton, setBuildButton] = useState(false);

  // Check if each category exists
  const categoryExists = categories.map((category) =>
    buildPcComponents.find((product) => product.category === category.link)
  );

  // console.log(categoryExists);

  const enable = categoryExists.every((category) => category !== undefined);

  const handleRemove = (product) => {
    dispatch(removedComponents(product));
  };

  useEffect(() => {
    setBuildButton(enable);
  }, [enable]);

  return (
    <div className="w-11/12 mx-auto py-10 flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold mb-10">
        {" "}
        Please select all required field: <small>note: * is required</small>
      </h2>
      {categories.map((category) => {
        const categoryData = categoryExists.find(
          (c) => c?.category === category.link
        );
        return (
          <div key={category.link} className="w-full md:w-3/4">
            {categoryData ? (
              <div className="flex w-full justify-between items-center">
                <div className="w-3/4 flex items-center">
                  <Image
                    alt={categoryData.category}
                    src={categoryData.image}
                    height="150"
                    width="100"
                    responsive
                  />
                  <div>
                    <p className="ml-4">Name: {categoryData?.category}</p>
                    <p className="ml-4">Price: {categoryData?.price}</p>
                  </div>
                </div>
                <p onClick={() => handleRemove(categoryData)} className="btn">
                  X
                </p>
              </div>
            ) : (
              <div className="flex w-full justify-between items-center">
                <h2 className="font-semibold">
                  {category.title} {category.stateKey ? "*" : ""}
                </h2>

                <Link
                  className="btn w-[20%] md:w-[12%]"
                  href={`/pc-builder/${category.link}`}
                >
                  Select
                </Link>
              </div>
            )}
            <div className="divider w-full mx-auto my-4"></div>
          </div>
        );
      })}
      <button
        onClick={() => toast.success("you built the pc successfully")}
        disabled={!buildButton}
        className="btn"
      >
        Complete Build
      </button>
    </div>
  );
};

export default PC_Builder;

PC_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
