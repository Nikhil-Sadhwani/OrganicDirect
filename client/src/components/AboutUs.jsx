import React, { useEffect } from "react";
import homeBG from "../assets/homeBG.jpg";
import { useNavigate } from "react-router-dom";
import greanea from "../assets/greanea.jpg";
import farmer from "../assets/farmer.jpg";

export default function CropDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    // if (LogObj.cookies.access_Token) {
    if (window.localStorage.getItem("userId")) {
      navigate("/home");
    }
  });

  return (
    <>
      <div className=" ">
        <img
          className="fixed top-0 h-[50vh] w-screen z-[-1]"
          src={greanea}
          alt="Loading..."
        />
        <div className="h-[30vh]"></div>

        <div className="bg-[#f3f4f5] w-[35%] m-auto shadow-lg p-5 lg:p-8">
          <div
            className="flex justify-center flex-col text-center"
            style={{ alignItems: "center" }}
          >
            <img className="w-[100%] h-[215px]" src={homeBG} alt="Loading..." />
            <div className=" mx-8">
              <h2 className="text-[35px] font-bold">About Us</h2>
              <p className="">
                That sounds like a fantastic initiative to support and educate
                new farmers while also helping them sell their crops more
                effectively. Here are some important considerations and features
                you might want to include in your website project: User-friendly
                Interface: Make sure the website is easy to navigate and
                user-friendly, especially for people who may not be very
                tech-savvy.
              </p>
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-400 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-300">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] sm:h-[38rem]"
                src={farmer}
                alt=""
              />
            </div>

            <div className={`p-10 `}>
              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">
                  Educational Content:
                </h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Provide a range of educational resources for new farmers,
                    including articles, videos, tutorials, and possibly even
                    online courses. Cover topics like crop selection, planting
                    techniques, pest management, irrigation, and more.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">
                  Crop Information and Stock System:
                </h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Implement a robust system to allow farmers to input and
                    update information about their crops. This should include
                    details like crop type, quantity, expected harvest date, and
                    expected price.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">
                  Marketplace for Crop Sales:
                </h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Create a platform for farmers to list their crops for sale.
                    Include features like search filters, pricing suggestions,
                    and possibly a bidding system. User Authentication:
                    Implement a secure login system for both farmers and
                    administrators. This will help in managing user accounts and
                    permissions effectively.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">Admin Dashboard:</h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Create a dashboard for administrators to oversee and manage
                    the platform. This should include features like user
                    management, content moderation, and analytics.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">
                  Communication Tools:
                </h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Implement a messaging system or chatbot to facilitate
                    communication between farmers and potential buyers. Feedback
                    and Rating System: Allow buyers to leave feedback and
                    ratings for the crops they purchase. This builds trust and
                    helps farmers improve. Payment Integration: Integrate a
                    secure payment gateway to handle transactions. This might
                    include options for online payments or cash on delivery,
                    depending on what suits your target audience.
                  </li>
                </ul>
              </div>
              <div className="my-3">
                <h2 className=" text-[22px] font-[700]">
                  Forums or Q&A Section:
                </h2>
                <ul className="ml-[14px]">
                  <li className="text-[18px]">
                    Community Provide a space for users to ask questions, share
                    experiences, and connect with other farmers.
                  </li>
                  <li className="mt-3 text-[18px]">
                    News and Updates: Keep users informed about the latest
                    industry news, agricultural practices, and any updates to
                    your platform.
                  </li>
                  <li className="mt-3 text-[18px]">
                    Mobile Responsiveness: Ensure that the website is accessible
                    and functional on various devices, including smartphones and
                    tablets.
                  </li>
                  <li className="mt-3 text-[18px]">
                    Security Measures: Implement robust security measures to
                    protect user data, financial transactions, and the platform
                    as a whole.
                  </li>
                  <li className="mt-3 text-[18px]">
                    Legal and Regulatory Compliance: Ensure that your platform
                    complies with all relevant agricultural and e-commerce
                    regulations in your target regions. Marketing and Outreach:
                    Develop a strategy to promote the platform to potential
                    users. This might include social media marketing, content
                    marketing, and partnerships with agricultural organizations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
