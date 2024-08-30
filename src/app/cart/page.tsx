"use client";
import Products from "@/components/shared/products";
import { IProduct } from "@/interfaces";
import { useSelector } from "react-redux";

const Page = () => {
  const cart = useSelector((state: { cart: IProduct[] }) => state.cart);
  return (
    <>
      <Products data={cart} loading={false} />
    </>
  );
};

export default Page;
