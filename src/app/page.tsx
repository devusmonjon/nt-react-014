"use client";
import Hero from "@/components/shared/hero";
import Products from "@/components/shared/products";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Page = () => {
  const { data, loading } = useFetch("/products", { limit: 8 });
  return (
    <>
      <Hero />
      <Products data={data?.products ?? []} loading={loading} />
    </>
  );
};

export default Page;
