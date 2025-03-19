"use client"

import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { MovieComp } from "@/components/MovieComp";
import { categoriesTitle } from "@/data/categoriesTitle";
import { useCategories } from "@/utils/queries";
import { useEffect, useState } from "react";


export default function Home() {


  const categories = useCategories();

  return (

    <div className="bg-[#141414]">
      <Banner>
        <Header></Header>
      </Banner>
      <Main>

        {categories?.map((item,index) => (
          <MovieComp
          key={index}
          title={categoriesTitle[index]}
          movies={item.results}
          />
        ))}

      </Main>
      <Footer />
    </div>

  );
}
