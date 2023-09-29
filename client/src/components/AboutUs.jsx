import React from "react";
import homeBG from "../assets/homeBG.jpg";
import greanea from "../assets/greanea.jpg";

export default function CropDetails() {
  return (
    <>
      <div className=" ">
        <img
          className="fixed top-0 h-[50vh] w-screen z-[-1]"
          src={greanea}
          alt="Loading..."
        />
        <div className="h-[30vh]"></div>

        <div className="bg-white w-[35%] m-auto shadow-lg p-5 lg:p-8">
          <div
            className="flex justify-center flex-col text-center"
            style={{ alignItems: "center" }}
          >
            <img className="w-[100%] h-[215px]" src={homeBG} alt="Loading..." />
            <div className=" mx-8">
              <h2 className="text-[35px] font-bold">Title</h2>
              <p className="">
                That sounds like a fantastic initiative to support and educate
                new farmers while also helping them sell their crops more
                effectively. Here are some important considerations and features
                you might want to include in your website project: User-friendly
                Interface: Make sure the website is easy to navigate and
                user-friendly, especially for people who may not be very
                tech-savvy. Educational Content: Provide a range of educational
                resources for new farmers, including articles, videos,
                tutorials, and possibly even online courses. Cover topics like
                crop selection, planting techniques, pest management,
                irrigation, and more. Crop Information and Stock System:
                Implement a robust system to allow farmers to input and update
                information about their crops. This should include details like
                crop type, quantity, expected harvest date, and expected price.
                Marketplace for Crop Sales: Create a platform for farmers to
                list their crops for sale. Include features like search filters,
                pricing suggestions, and possibly a bidding system. User
                Authentication: Implement a secure login system for both farmers
                and administrators. This will help in managing user accounts and
                permissions effectively. Admin Dashboard: Create a dashboard for
                administrators to oversee and manage the platform. This should
                include features like user management, content moderation, and
                analytics. Communication Tools: Implement a messaging system or
                chatbot to facilitate communication between farmers and
                potential buyers. Feedback and Rating System: Allow buyers to
                leave feedback and ratings for the crops they purchase. This
                builds trust and helps farmers improve. Payment Integration:
                Integrate a secure payment gateway to handle transactions. This
                might include options for online payments or cash on delivery,
                depending on what suits your target audience. Community Forums
                or Q&A Section: Provide a space for users to ask questions,
                share experiences, and connect with other farmers. News and
                Updates: Keep users informed about the latest industry news,
                agricultural practices, and any updates to your platform. Mobile
                Responsiveness: Ensure that the website is accessible and
                functional on various devices, including smartphones and
                tablets. Security Measures: Implement robust security measures
                to protect user data, financial transactions, and the platform
                as a whole. Legal and Regulatory Compliance: Ensure that your
                platform complies with all relevant agricultural and e-commerce
                regulations in your target regions. Marketing and Outreach:
                Develop a strategy to promote the platform to potential users.
                This might include social media marketing, content marketing,
                and partnerships with agricultural organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
