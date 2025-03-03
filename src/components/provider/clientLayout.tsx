import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import React from "react";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className={`fixed w-full top-0 z-30 bg-background  `}>
        <Navbar />
      </div>

      <div className="mt-20 bg-background">{children}</div>
      <div className="bg-color">
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
