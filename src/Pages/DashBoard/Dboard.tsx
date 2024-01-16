import React from "react";
import CardOne from "../../Components/Cards/CardOne";
import CardTwo from "../../Components/Cards/CardTwo";
import CardThree from "../../Components/Cards/CardThree";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import TableChart from "../../Components/Charts/TableChart";
import BarChart from "../../Components/Charts/BarChart";

 function Dboard(){
  return (
  
      <div className="min-h-screen bg-gray-50/50">

        <SideBar/>
        <div className="p-4 xl:ml-80">
          <Header />
          {/* --------- Cards----------- */}
          <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Card 1 ---  */}
              <CardOne />
              {/* Card 2 --- */}
              <CardTwo />
              {/* Card 3 ---- */}
              <CardThree />
            </div>
            {/*  Charts */}
            <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
               <TableChart />
               <BarChart />
               <BarChart/>
            </div>
          </div>
          <div className="text-blue-gray-600 mt-2">
            <Footer/>
          </div>
        </div>
      </div>
  
  );
};

export default Dboard;
