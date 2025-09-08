"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Toast from "./Toast";

interface JoinWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[0-9]{7,15}$/;

export default function JoinWaitlistModal({
  isOpen,
  onClose,
}: JoinWaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+234",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ phoneNumber: "", email: "" });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const validateEmail = (email: string) => EMAIL_REGEX.test(email);
  const validatePhoneNumber = (phone: string) => PHONE_REGEX.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ phoneNumber: "", email: "" });

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      return;
    }
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number (7–15 digits)",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName || null,
          phoneNumber: formData.phoneNumber || null,
          email: formData.email,
          type: "wait-list",
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong");

      setToast({
        message: "🎉 You’ve successfully joined the waitlist!",
        type: "success",
      });

      setFormData({
        fullName: "",
        countryCode: "+234",
        phoneNumber: "",
        email: "",
      });
    } catch (error: unknown) {
      let message = "Failed to join waitlist";
      if (error instanceof Error) {
        message = error.message;
      }
      setToast({ message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "email" && errors.email)
      setErrors((prev) => ({ ...prev, email: "" }));
    if (field === "phoneNumber" && errors.phoneNumber)
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] px-8 py-12 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 mb-6">
            <Image
              src="/imgs/brand-logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>

          <h2 className="relative z-10 text-3xl font-semibold text-white font-goodly tracking-tight">
            JOIN THE
          </h2>
          <h2 className="relative z-10 text-3xl font-semibold text-white font-goodly tracking-tight">
            WAITLIST
          </h2>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#779BC1]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    handleInputChange("countryCode", e.target.value)
                  }
                  className="px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#779BC1] bg-white"
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className={`flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#779BC1] ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Mobile number"
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#779BC1] ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#779BC1] hover:bg-[#6B8BB3] disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-2xl"
            >
              {isSubmitting ? "Joining..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => {
            setToast(null);

            if (toast.type === "success") {
              onClose();
            }
          }}
        />
      )}
    </div>
  );
}
