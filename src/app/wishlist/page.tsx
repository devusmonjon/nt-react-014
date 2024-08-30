"use client";
import Products from "@/components/shared/products";
import { IProduct } from "@/interfaces";
import { useSelector } from "react-redux";

const Page = () => {
  const wishlist = useSelector(
    (state: { wishlist: IProduct[] }) => state.wishlist
  );
  return (
    <>
      <Products data={wishlist} loading={false} />
    </>
  );
};

export default Page;
