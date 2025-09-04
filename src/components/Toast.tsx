// components/Toast.tsx
"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // clear after 4s

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white font-medium transition-transform
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
      `}
    >
      {message}
    </div>
  );
}
