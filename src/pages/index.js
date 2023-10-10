import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

const Home = ({ data }) => {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <FeaturedProducts data={data?.data} />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  if (typeof window === "undefined") {
    const res = await fetch(
      "https://pc-builder-server-gray.vercel.app/api/v1/products"
    );
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  }
};
