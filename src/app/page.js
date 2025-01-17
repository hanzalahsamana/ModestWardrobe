"use client";

import CollectionAbout from "@/components/sections/collectionAbout";
import FabricsAbout from "@/components/sections/fabricsAbout";
import FabricsLiberary from "@/components/sections/fabricsLiberary";
import Hero from "@/components/sections/hero";
import Contact from "./contact/page";
import ProductsSection from "@/components/sections/productsSection";
import AddReviews from "@/components/sections/addReviews";
import CollectionSection from "@/components/sections/collectionSection";


export default function Home() {
 
  return (
    <div className="max-w-[1500px]">
    <Hero/>
    <CollectionSection CategoryNumber={3}/>
    <FabricsAbout/>
    <ProductsSection maxLength={4} collection={'all'} name={"Best Sellers"}/>
    <CollectionAbout/>
    <ProductsSection maxLength={4} collection={'all'} name={"Discover More"}/>
    <FabricsLiberary/>
    {/* <AddReviews/> */}
    <Contact/>
    </div>
  );
}
