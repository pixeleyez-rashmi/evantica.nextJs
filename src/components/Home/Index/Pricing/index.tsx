"use client";

import Link from "next/link";
import Image from "next/image";

// Import pricing shape images
import pricingShape1 from "../../../../assets/images/business/business-pricing-shape-1.png";
import pricingShape2 from "../../../../assets/images/business/business-pricing-shape-2.png";

interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic Pass",
    description: "Access to meetup + networking",
    price: "₹499",
  },
  {
    id: 2,
    name: "Pro Freelancer Pass",
    description: "Includes meetup + premium networking",
    price: "₹899",
    featured: true,
  },
  {
    id: 3,
    name: "VIP Creator Pass",
    description: "Front-row access + backstage meet",
    price: "₹1499",
  },
];

export default function PricingSection() {
  return (
    <section className="lg:py-30 py-20 bg-[#0B2C36] text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-15">
          <p
            className="mb-3 text-[#c0f037]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            [ Pricing Plans ]
          </p>
          <h2
            className="md:text-6xl font-chivo font-medium leading-[1.2]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            Choose the Perfect Plan for Your Conference Experience
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="col-span-12 xl:col-span-4 md:col-span-6"
            >
              <div
                className={`${
                  plan.featured
                    ? "bg-[#c0f037]"
                    : "bg-white/10 backdrop-blur-sm"
                } p-9 rounded-4xl relative h-100 flex flex-col justify-between`}
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="300"
              >
                {/* Decorative Images */}
                <Image
                  src={pricingShape1.src}
                  alt=""
                  width={pricingShape1.width || 200}
                  height={pricingShape1.height || 200}
                  className="absolute top-0 ltr:end-0 rtl:hidden hidden lg:block"
                />
                <Image
                  src={pricingShape2.src}
                  alt=""
                  width={pricingShape2.width || 200}
                  height={pricingShape2.height || 200}
                  className="absolute top-0 left-0 hidden lg:rtl:block"
                />

                {/* SVG Decorative Element */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 129 129"
                  fill={plan.featured ? "#0B2C36" : "#fff"}
                  className="opacity-10 absolute size-50 ltr:end-0 rtl:left-0 rtl:scale-x-[-1] bottom-0 hidden md:block"
                >
                  <path d="M64.5 30.807L37.6696 0H0V33.691L26.8324 64.5L64.5 64.498V30.807Z"></path>
                  <path d="M129 30.807L102.17 0H64.5V33.691L91.3324 64.5L129 64.498V30.807Z"></path>
                  <path d="M64.5 95.307L37.6696 64.5H0V98.191L26.8324 129H64.5V95.307Z"></path>
                  <path d="M129 95.307L102.17 64.5H64.5V98.191L91.3324 129H129V95.307Z"></path>
                </svg>

                {/* Content */}
                <div>
                  <h3
                    className={`mb-3 text-3xl ${
                      plan.featured ? "text-black" : ""
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xl ${
                      plan.featured ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div>
                  <h2
                    className={`text-5xl mb-6 font-bold ${
                      plan.featured ? "text-black" : ""
                    }`}
                  >
                    {plan.price}
                  </h2>
                  {plan.featured ? (
                    <Link
                      href="#!"
                      className="btn text-lg rounded-none group bg-[#032530] tracking-[1px] uppercase font-medium relative transition-all duration-300 inline-block hover:rotate-[2deg]"
                    >
                      Book Now
                      <span className="bg-white size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                    </Link>
                  ) : (
                    <Link
                      href="#!"
                      className="btn text-lg rounded-none group border border-[#c0f037] text-[#c0f037] tracking-[1px] uppercase font-medium relative transition-all duration-300 hover:bg-[#c0f037] hover:text-black inline-block hover:rotate-[2deg]"
                    >
                      Book Now
                      <span className="bg-[#c0f037] size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
