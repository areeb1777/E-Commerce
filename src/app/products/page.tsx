import React from "react";
import ImageOnly from "@/components/ImageOnly";
import TopNav from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import ProductListing from "@/components/ProductsListing";

const Products: React.FC = () => {
  return (
    <div>
      <TopNav />
      <ImageOnly />
      <Filters />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default Products;
