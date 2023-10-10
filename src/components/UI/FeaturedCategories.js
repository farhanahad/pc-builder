import others from "../../assets/images/others.jpg";
import ram from "../../assets/images/ram.webp";
import monitor from "../../assets/images/DELL 19.webp";
import motherboard from "../../assets/images/motherboard.webp";
import powerSupply from "../../assets/images/power_supply.webp";
import storage from "../../assets/images/ssd.webp";
import cpu from "../../assets/images/processor.webp";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "ram",
    image: ram,
  },
  {
    name: "monitor",
    image: monitor,
  },
  {
    name: "motherboard",
    image: motherboard,
  },
  {
    name: "powerSupply",
    image: powerSupply,
  },
  {
    name: "storage",
    image: storage,
  },
  {
    name: "cpuProcessor",
    image: cpu,
  },
  {
    name: "others",
    image: others,
  },
];

const FeaturedCategories = () => {
  return (
    <div className="w-11/12 mx-auto pb-10">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center my-8 md:my-10 lg:my-14">
        Featured Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="w-11/12 md:w-[200px] h-52 flex items-center justify-center flex-col shadow-2xl rounded-lg py-0 px-0"
          >
            <Link href={`/category/${category.name}`}>
              <Image
                className="w-full p-0"
                src={category.image}
                alt="ram"
                width="100"
                height="50"
                responsive
              />
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
                {category.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
