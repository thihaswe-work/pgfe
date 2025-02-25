"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import { footerData } from "@/lib/data";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [footerdata, setFooterData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await footerData();
        setFooterData(response.data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className={`fixed w-full top-0 z-30 bg-background border-b border-[#424242]  `}
      >
        <Navbar />
      </div>

      <div className="mt-20 bg-background">{children}</div>
      <Footer data={footerdata} />
    </div>
  );
};

export default ClientLayout;
