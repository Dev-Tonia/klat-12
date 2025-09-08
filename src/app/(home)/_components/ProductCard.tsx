"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useCart } from "@/contexts/CartContext";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  status: "In Stock" | "Out Stock";
}
export default function ProductCard({
  product,
  children,
}: {
  product: Product;
  children?: React.ReactNode;
}) {
  const { addItem, cartItems } = useCart();

  // Convert price string to number (remove ₦ and commas)
  const priceNumber = parseFloat(product.price.replace(/[₦,]/g, ""));

  const handleAddToCart = () => {
    if (product.status === "In Stock") {
      addItem({
        name: product.name,
        price: priceNumber,
        quantity: 1,
        image: product.image,
        description: product.description,
      });
    }
  };

  // Check if item is already in cart
  const isInCart = cartItems.some((item) => item.name === product.name);
  const cartItem = cartItems.find((item) => item.name === product.name);

  return (
    <div className="rounded-xl border border-gray-200 w-full py-2.5 pr-2 ">
      <div className=" flex gap-2.5">
        {/* product image */}

        <div className=" mt-2">
          <Image
            src={product.image}
            alt={product.name}
            width={60}
            height={80}
            className="object-contain"
          />
        </div>
        {/* product details */}
        <div className=" space-y-2.5 text-[9px] lg:text-xs flex-1">
          <div className=" space-y-2.5">
            <div className=" flex items-start gap-2 justify-between">
              <div className="font-dm-sans tracking-tighter leading-5.5">
                {product.name}
              </div>
              <span
                className={clsx(
                  " px-2 py-0.5 text-nowrap font-inter rounded-full  font-medium  tracking-tighter ",
                  product.status === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700  "
                )}
              >
                {product.status}
              </span>
            </div>
            <div className="  text-gray-400 font-dm-sans ">
              {product.description}
            </div>
            {/* </div> */}
          </div>
          <div className=" font-bold  leading-5.5 tracking-tighter font-dm-sans text-black">
            {product.price}
          </div>
          {children ? (
            children
          ) : (
            <div className="flex  xl:flex-row flex-col  gap-3 mt-4">
              <button
                className="flex-1 border border-gray-300 text-sm leading-3 rounded-full cursor-not-allowed py-2 font-dm-sans text-primary bg-white"
                disabled
              >
                Inquire
              </button>
              <button
                className={clsx(
                  "flex-1 flex items-center  justify-center px-2 gap-2 rounded-full py-2 font-dm-sans font-medium transition",
                  product.status === "In Stock"
                    ? isInCart
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-[#232646] text-white hover:bg-[#181a2f]"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                )}
                onClick={handleAddToCart}
                disabled={product.status === "Out Stock"}
              >
                <div className="relative size-5">
                  <Image fill src="/icon/cart.svg" alt="cart" />
                </div>
                {isInCart ? `In Cart (${cartItem?.quantity})` : "Add to cart"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
