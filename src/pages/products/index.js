import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>Index.js</h1>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
