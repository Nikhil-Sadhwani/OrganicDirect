import React, { useContext } from "react";
import homeBG from "../assets/homeBG.jpg";
import corn from "../assets/summer/corn.jpg";
import cucumber from "../assets/summer/cucumber.jpg";
import pepper from "../assets/summer/pepper.jpg";
import pumpkin from "../assets/summer/pumpkin.jpg";
import tomato from "../assets/spring/tomato.jpg";
import wheat from "../assets/winter/wheat.jpg";
import homeVideo from "../assets/homeVideo.mp4";
import {
  BsFillSunFill,
  BsFillCloudRainFill,
  BsFillCloudSnowFill,
} from "react-icons/bs";
import { SiSpring } from "react-icons/si";
import { GiFallingLeaf, GiFrozenOrb } from "react-icons/gi";
import { Link } from "react-router-dom";
import CropsContentContext from "../Context/cropsContent/CropsContentContext";

export default function Home() {
  let count = 0;
  const CropsObj = useContext(CropsContentContext);
  const icon = [
    {
      id: 1,
      iconName: <BsFillSunFill className="w-10 h-10" />,
      name: "Summer",
    },
    {
      id: 2,
      iconName: <BsFillCloudRainFill className="w-10 h-10" />,
      name: "Monsoon",
    },
    {
      id: 3,
      iconName: <SiSpring className="w-10 h-10" />,
      name: "Spring",
    },
    {
      id: 4,
      iconName: <GiFallingLeaf className="w-10 h-10" />,
      name: "Autumn",
    },
    {
      id: 5,
      iconName: <BsFillCloudSnowFill className="w-10 h-10" />,
      name: "PreWinter",
    },
    {
      id: 6,
      iconName: <GiFrozenOrb className="w-10 h-10" />,
      name: "Winter",
    },
  ];

  return (
    <>
      {/* Starting section  */}
      <div
        className=" h-[89vh] flex justify-center flex-col"
        style={{ alignItems: "center" }}
      >
        {/* Home Back Image  */}
        <img
          className="blur-sm absolute object-cover h-[89vh] w-screen z-[-1]"
          src={homeBG}
          alt="Loading..."
        />

        <h2 className="mb-4 text-5xl font-bold text-white">Organic Direct</h2>

        {/* Box with category  */}
        <div className=" grid grid-cols-3  text-white w-[500px] h-[250px]">
          <div className="bg-gray-200 opacity-30 w-[550px] h-[300px] absolute z-[-1]"></div>
          {icon.map((icon, key) => {
            return (
              <Link
                to={`/crops/${icon.name}`}
                className="flex flex-col justify-center mt-auto ml-9"
                style={{ alignItems: "center" }}
              >
                {icon.iconName}
                <p className="mb-5 text-base text-white ">{icon.name}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Cards for Specific months  */}
      <div
        className="w-[95%] m-5  flex justify-around sm:flex-col sm:p-4 md:flex-row bg-no-repeat bg-cover"
        // style={{
        //   backgroundImage: `url(${summerHome}) `,
        // }}
      >
        <video
          className="absolute z-[-1] w-[95%] h-[105%]"
          autoPlay
          muted
          loop
          id="video"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        {/* <img
          className="absolute z-[-1] w-[95%] h-[105%]"
          src={homeVideo}
          alt=""
        /> */}

        <div className="mt-[44px] flex ">
          <div className="w-[11px] h-[62px] bg-white mr-[8px] rounded-md"></div>
          <h2 className=" text-[2.5rem] font-[700] text-white">Summer</h2>
        </div>

        <div className=" grid  gap-[0.5rem] w-[66%] p-[21px] sm:w-[100%] sm:grid-cols-2 lg:grid-cols-3">
          {CropsObj.Crops.map((crop, key) => {
            if (count == 6) {
              return false;
            }
            if (crop.season === "Summer") {
              count++;
              return (
                <div
                  key={key}
                  className="w-[250px] h-[375px] sm:mb-[15px] sm:m-auto "
                >
                  <Link
                    to={`/crop/${crop.name}`}
                    className="group relative block bg-black rounded-[6%] sm:h-[378px]"
                  >
                    <img
                      alt="Developer"
                      src={crop.imageName}
                      className="absolute inset-0  object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-[6%] h-[100%] w-[100%]"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                      <p className="text-xl font-bold text-white sm:text-2xl">
                        {crop.name}
                      </p>

                      <div className="mt-12 sm:mt-12 lg:mt-12">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-sm text-white">
                            {crop.description}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
