"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { Minus, MoveLeft, Plus, Trash2 } from "lucide-react";
import ProductCard from "./ProductCard";
// import { useRouter } from "next/router";

export default function CartHeader() {
  const { getTotalItems, setOpenCart, cartItems, removeItem, updateQuantity } =
    useCart();
  //   const router = useRouter();

  const handleBackClick = () => {
    setOpenCart && setOpenCart(false);
  };
  const handleIncrease = (itemName: string, currentQuantity: number) => {
    updateQuantity(itemName, currentQuantity + 1);
  };

  const handleDecrease = (itemName: string, currentQuantity: number) => {
    updateQuantity(itemName, currentQuantity - 1);
  };
  return (
    <>
      {/* header */}
      <div className=" mb-5">
        <div
          className="flex items-center mb-9 justify-between"
          onClick={handleBackClick}
        >
          <div className=" bg-white rounded-full px-4 py-2 shadow-sm">
            <MoveLeft size={20} className=" text-gray-950" />
          </div>
          <button className="bg-primary rounded-full relative w-fit p-2">
            <span className="absolute -top-1 -right-1 bg-white text-primary text-[8px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              {getTotalItems()}
            </span>
            <div className="w-6 h-6 relative">
              <Image fill src="/icon/cart.svg" alt="cart" />
            </div>
          </button>
        </div>

        <div className=" mt-8  font-goodly">
          <h3 className=" text-ink-darkest font-semibold text-xl sm:text-2xl lg:text-[2rem] leading-10 tracking-tight">
            Cart
          </h3>
          <p className=" mt-1.5 text-black leading-5  text-xs md:text-sm ">
            All your favorite items in one place
          </p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <div className=" space-y-3">
          {cartItems.map((item) => (
            <ProductCard
              product={{
                name: item.name,
                description: item.description || "No description available",
                price: item.price.toString(),
                image: item?.image,
                status: "In Stock",
              }}
            >
              <div className=" flex justify-end items-center gap-4 mt-5">
                <button className=" border border-primary text-primary rounded-full px-4 py-2 flex items-center gap-2 ">
                  <Minus
                    size={16}
                    className=" rounded bg-primary/40 cursor-pointer"
                    onClick={() => handleDecrease(item.name, item.quantity)}
                  />
                  <span className="text-gray-700 text-sm font-medium">
                    {item.quantity} Added
                  </span>
                  <Plus
                    size={16}
                    className=" bg-primary/40 rounded cursor-pointer"
                    onClick={() => handleIncrease(item.name, item.quantity)}
                  />
                </button>
                <Trash2
                  size={16}
                  className=" text-red-500 cursor-pointer"
                  onClick={() => removeItem(item.name)}
                />
              </div>
            </ProductCard>
          ))}
        </div>
      )}
    </>
  );
}
