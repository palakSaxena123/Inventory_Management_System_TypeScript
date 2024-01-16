import React from "react";
// import List from "../../Components/Table/List";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/SideBar/SideBar";
import Table from "../../Components/Table/Table";

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* --------- SideBar ----------- */}
      <SideBar />
      {/* --------------- Header -------------- */}

      <div className="p-4 xl:ml-80">
        <Header />

        {/* --------------- Product List -------------- */}
        <Table/>

        {/* --------------- Footer -------------- */}
        <div className="text-blue-gray-600 mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
