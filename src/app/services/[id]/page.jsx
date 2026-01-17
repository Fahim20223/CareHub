import { getSingleProduct } from "@/actions/server/service";
import BookButton from "@/components/buttons/BookButton";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = await getSingleProduct(id); // DB / API fetch

  return {
    title: service.name,
    description:
      service.shortDescription ||
      service.longDescription?.slice(0, 160) ||
      "Healthcare Service & all the support systems given by CareHub",

    openGraph: {
      name: service.name,
      description:
        "CareHub offers trusted healthcare services designed for modern patient needs.",
      images: [
        {
          url: service.image || "https://i.ibb.co.com/q3dhHmYd/image.png",
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.name,
      description: "Fun and educational learning toy for kids.",
      images: [service.image || "https://i.ibb.co.com/q3dhHmYd/image.png"],
    },
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleProduct(id);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="rounded-xl overflow-hidden h-[350px] w-full">
          <Image
            width={600}
            height={420}
            src={service.image}
            alt={service.image}
            className="w-full object-cover h-full"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {service.name}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {service.shortDescription}
          </p>

          <p className="text-2xl font-bold text-pink-500 dark:text-green-400 mb-6">
            ৳{service.pricePerHour} / hour
          </p>

          {/* <button className="px-6 py-3 rounded-full bg-pink-500 dark:bg-green-500 text-white font-semibold shadow hover:scale-105 transition">
            Book Service
          </button> */}
          <BookButton service={service} />
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Service Details
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
          {service.longDescription}
        </p>
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What’s Included
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {service.features?.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gray-100 dark:bg-green-950/30 shadow"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
