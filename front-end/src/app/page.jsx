import React from "react"
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import Footer from "@/components/footer/Footer";

export default async function Page() {  

  return (
    <main>
     
       <Header/>
       
      <div >
      <Home />
      </div>
     
<Footer />
    </main>
   
  );
}
