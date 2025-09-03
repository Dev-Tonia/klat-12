"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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

// Regular expressions for validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[0-9]{7,15}$/; // 7-15 digits for international phone numbers

export default function JoinWaitlistModal({ isOpen, onClose }: JoinWaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+234",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
  });

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    return PHONE_REGEX.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ phoneNumber: "", email: "" });
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      return;
    }
    
    // Validate phone number
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors(prev => ({ ...prev, phoneNumber: "Please enter a valid phone number (7-15 digits)" }));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and close modal
    setFormData({ fullName: "", countryCode: "+234", phoneNumber: "", email: "" });
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (field === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (field === 'phoneNumber' && errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with gradient background and clouds */}
        <div className="relative bg-gradient-to-b from-[#779BC1] via-[#9ABFDA] to-[#CBDFEC] px-8 py-12 text-center overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Cloud Background */}
          <div className="absolute inset-0 z-0">
            {[
              { top: "10%", left: "10%", size: "w-16 h-10" },
              { top: "20%", right: "15%", size: "w-12 h-8" },
              { top: "60%", left: "5%", size: "w-14 h-9" },
              { top: "70%", right: "10%", size: "w-10 h-6" },
            ].map((pos, i) => (
              <Image
                key={i}
                src="/imgs/cloud.png"
                alt="cloud"
                width={60}
                height={40}
                className={`absolute animate-cloud ${pos.size}`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <div className="relative z-10 mb-6">
            <Image
              src="/imgs/brand-logo.png"
              alt="Klat-32 Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>

          {/* Title */}
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
              <label className="block text-sm font-medium text-gray-700 mb-2 font-dm-sans">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 text-gray-400">
                    👤
                  </div>
                </div>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#779BC1] focus:border-transparent outline-none font-dm-sans"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-dm-sans">
                Phone Number
              </label>
              <div className="flex gap-2">
                {/* Country Dropdown */}
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange('countryCode', e.target.value)}
                  className="px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#779BC1] focus:border-transparent outline-none font-dm-sans bg-white"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                
                {/* Phone Input */}
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className={`flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#779BC1] focus:border-transparent outline-none font-dm-sans ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Mobile number"
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600 font-dm-sans">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-dm-sans">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 text-gray-400">
                    ✉️
                  </div>
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#779BC1] focus:border-transparent outline-none font-dm-sans ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 font-dm-sans">{errors.email}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#779BC1] hover:bg-[#6B8BB3] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl transition-colors font-dm-sans"
            >
              {isSubmitting ? "Joining..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}