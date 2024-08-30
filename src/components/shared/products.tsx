"use client";
import { IProduct } from "@/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { MdRemoveShoppingCart, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Products = ({
  data,
  loading,
}: {
  data: IProduct[];
  loading: boolean;
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state: { wishlist: IProduct[] }) => state.wishlist
  );
  const cart = useSelector((state: { cart: IProduct[] }) => state.cart);
  console.log(cart);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((product: IProduct) => (
            <Card key={product.id} className="relative h-[500px]">
              <CardContent className="w-full h-[280px] relative hover:scale-105 duration-300">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  fill
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>
                  {product.description.slice(0, 90)} ...
                </CardDescription>
              </CardHeader>
              <CardFooter className="absolute w-full bottom-[0px] flex item-center justify-between">
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_WISHLIST", payload: product })
                  }
                >
                  {wishlist.some((item: IProduct) => item.id === product.id) ? (
                    <IoIosHeartDislike size={25} className="text-red-900" />
                  ) : (
                    <IoIosHeart size={25} className="" color="red" />
                  )}
                </Button>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_CART", payload: product })
                  }
                >
                  {cart.some((item: IProduct) => item.id === product.id) ? (
                    <MdRemoveShoppingCart size={20} />
                  ) : (
                    <MdShoppingCart size={20} />
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
