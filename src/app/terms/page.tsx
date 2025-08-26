import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Klat-32 Terms and Conditions page",
};

// Data for terms and conditions
const terms = [
  {
    id: "eligibility",
    title: "1. User Eligibility",
    content: (
      <p className="text-gray-600">
        To use Klat-32, you must be at least 18 years old or have the legal
        consent of a parent or guardian. You affirm that you are fully able and
        competent to enter into the terms, conditions, obligations, and
        warranties set forth in this agreement.
      </p>
    ),
  },
  {
    id: "account",
    title: "2. Account Registration and Verification",
    content: (
      <>
        <p className="text-gray-600 mb-6">
          To use Klat-32, users must register an account using a valid phone
          number or email. During onboarding, you may be required to:
        </p>
        <ul className="list-disc text-gray-600 mb-6">
          <li>Create a secure 6-digit PIN</li>
          <li>Set up biometric authentication (optional)</li>
          <li>
            Complete KYC verification by submitting a valid government-issued ID
            and a selfie
          </li>
          <li>Provide accurate profile information</li>
        </ul>
        <p className="text-gray-600">
          You are responsible for maintaining the confidentiality of your login
          credentials. Klat-32 is not responsible for any loss or damage arising
          from unauthorized access due to your negligence
        </p>
      </>
    ),
  },
  {
    id: "wallet",
    title: "3. Wallet and Payment Services",
    content: (
      <>
        <p className="text-gray-600 mb-6">
          Klat-32 provides you with a digital wallet that supports the following
          functions:
        </p>
        <ul className="list-disc text-gray-600 mb-6">
          <li>
            Funding your wallet using debit cards, bank transfers, or USSD
          </li>
          <li>Sending and receiving money to and from other Klat-32 users</li>
          <li>Withdrawing funds to your linked bank account</li>
          <li>
            Paying for products and services via in-app chat or merchant
            profiles
          </li>
        </ul>
        <p className="text-gray-600">
          All payment services are processed securely. Klat-32 may delay,
          reverse, or investigate suspicious or high-risk transactions.
        </p>
      </>
    ),
  },
  {
    id: "business",
    title: "4. Business Account & Marketplace Use",
    content: (
      <>
        <p className="text-gray-600 mb-6">
          Klat-32 provides enhanced features for merchants and business users:
        </p>
        <ul className="list-disc text-gray-600 mb-6">
          <li>Merchant onboarding with business verification</li>
          <li>
            Listing of products and services with pricing, media, and inventory
            management
          </li>
          <li>Accepting and managing orders</li>
          <li>Receiving payments via wallet, bank transfer, or USSD</li>
          <li>
            Managing customer interactions via chat, calls, and notifications
          </li>
        </ul>
        <p className="text-gray-600">
          Merchants are solely responsible for the accuracy of their listings,
          pricing, delivery, and customer service.
        </p>
      </>
    ),
  },
  {
    id: "communication",
    title: "5. In-App Communication",
    content: (
      <>
        <p className="text-gray-600 mb-6">
          Klat-32 enables communication between users, including:
        </p>
        <ul className="list-disc text-gray-600 mb-6">
          <li>Secure real-time chat</li>
          <li>Audio and video calling</li>
          <li>
            Sharing of payment requests, product links, or service offers within
            chat
          </li>
        </ul>
        <p className="text-gray-600">
          All interactions must remain respectful and non-abusive. Violations
          may result in account suspension or termination.
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    title: "6. User Conduct and Restrictions",
    content: (
      <>
        <p className="text-gray-600 mb-6">You agree not to:</p>
        <ul className="list-disc text-gray-600 mb-6">
          <li>Use the app for illegal or fraudulent purpose</li>
          <li>Upload false or misleading information</li>
          <li>Interfere with app functionality or security</li>
          <li>Violate third-party rights or intellectual property</li>
        </ul>
        <p className="text-gray-600">
          We reserve the right to suspend, restrict, or terminate your account
          if we detect abuse, non-compliance, or fraudulent behavior.
        </p>
      </>
    ),
  },
  {
    id: "Property",
    title: "7. Intellectual Property",
    content: (
      <>
        <p className="text-gray-600">
          All content, logos, and features of the Klat-32 App are the exclusive
          property of Klat-32 and protected by applicable copyright and
          trademark laws.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "8. Termination",
    content: (
      <p className="text-gray-600">
        We reserve the right to terminate or suspend your access to the App
        without notice for any reason, including breach of these Terms.
      </p>
    ),
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    content: (
      <p className="text-gray-600">
        Klat-32 is not liable for any indirect, incidental, or consequential
        damages arising from your use of the App. We do not guarantee
        uninterrupted access, and all services are provided "as-is."
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content: (
      <p className="text-gray-600">
        We may update these Terms periodically. Continued use of the App
        constitutes your acceptance of the updated terms.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">Terms and Conditions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 max-w-6xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <nav className="space-y-4 text-sm text-gray-700">
            <a href="#overview" className="font-bold">Overview</a>
            <ul className="space-y-2 mt-3">
              {terms.map((term) => (
                <li key={term.id}>
                  <a href={`#${term.id}`} className="hover:text-primary">
                    {term.title.replace(/^\d+\.\s/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <section className="prose max-w-none">
          {/* Overview intro */}
          <div id="overview" className="mb-10">
            <h2 id="overview" className="text-lg font-bold mb-3">Overview</h2>
            <p className="text-gray-600">
              Welcome to Klat-32, your all-in-one digital wallet and smart
              marketplace platform that allows users to chat, send and receive
              money, pay merchants, and manage products or services all in one
              secure application. These Terms and Conditions ("Terms") govern
              your use of Klat-32 services, features, and functionalities
              provided through our mobile application ("App").
            </p>
            <p className="mt-5 text-gray-600">
              By downloading, accessing, or using the App, you agree to be bound
              by these Terms. If you do not agree to all of these Terms, do not
              use the App.
            </p>
          </div>

          {terms.map((term) => (
            <div key={term.id} id={term.id} className="mb-10">
              <h2 className="text-lg font-bold mb-3">{term.title}</h2>
              {term.content}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
