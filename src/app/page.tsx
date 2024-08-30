"use client";
import Hero from "@/components/shared/hero";
import Products from "@/components/shared/products";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();

  const { data, loading } = useFetch("/products", { limit: 8 });
  const token = useSelector((state: { token: string }) => state.token);
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    console.log(token);
  }, [token]);
  return (
    <>
      <Hero />
      <Products data={data?.products ?? []} loading={loading} />
    </>
  );
};

export default Page;
