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
import { IoIosHeart } from "react-icons/io";
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
  console.log(wishlist);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-3">
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
              <CardFooter className="absolute w-full bottom-[0px]">
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_WISHLIST", payload: product })
                  }
                >
                  <IoIosHeart size={25} className="" color="red" />
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
