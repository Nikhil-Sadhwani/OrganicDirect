import React, { useContext, useState } from "react";
import CropsContentContext from "../Context/cropsContent/CropsContentContext";
import { useParams } from "react-router-dom";

export default function CropDetails(props) {
  const [showContent, setShowContent] = useState(false);
  // const { propArray } = props;
  const { cropname } = useParams();

  const CropsObj = useContext(CropsContentContext);

  return (
    <>
      {CropsObj.Crops.map((crop) => {
        if (crop.name === cropname) {
          return (
            <div className=" ">
              <img
                className="fixed top-0 h-[50vh] w-screen z-[-1]"
                src={crop.imageName}
                alt="Loading..."
              />
              <div className="h-[30vh]"></div>

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
                    <svg
                      x="50%"
                      y={-1}
                      className="overflow-visible fill-gray-300"
                    >
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
                <div
                  className="flex mt-[-25px]"
                  style={{ alignItems: "center" }}
                >
                  {/* <img
                    className="w-[200px] h-[200px]"
                    src={crop.imageName}
                    alt="Loading..."
                  /> */}
                  <div className=" mx-8 text-center">
                    <h2 className="text-[35px] font-bold">{crop.name}</h2>
                    <p className="ml-3">{crop.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 mt-5">
                  <div
                    className="text-center border-2 border-black hover:bg-slate-400 hover:bg-opacity-10 "
                    onClick={() => {
                      showContent
                        ? setShowContent(!showContent)
                        : setShowContent(false);
                    }}
                  >
                    <h2 className="text-[17px] font-[600] cursor-pointer">
                      Education
                    </h2>
                  </div>
                  <div
                    className="text-center border-2 border-l-0 border-black hover:bg-slate-400 hover:bg-opacity-10"
                    onClick={() => {
                      showContent
                        ? setShowContent(true)
                        : setShowContent(!showContent);
                    }}
                  >
                    <h2 className="text-[17px] font-[600] cursor-pointer">
                      Cultivation
                    </h2>
                  </div>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                  <div className="-ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                      className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem] sm:h-[38rem]"
                      src={crop.imageName}
                      alt=""
                    />
                  </div>
                  <div className={`p-10 ${showContent ? "hidden" : ""}`}>
                    {crop.education.map((content) => {
                      return (
                        <div className="mx-auto mb-9 border-b-[1px] border-black max-w-2xl lg:mx-0">
                          <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
                            {content.heading}
                          </h2>
                          <ul className="ml-[14px]">
                            <li className="text-[18px]">{content.paraGraph}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className={`p-10 ${showContent ? "" : "hidden"}`}>
                    {crop.cultivation.map((content) => {
                      return (
                        <div className="my-3">
                          <h2 className=" text-[22px] font-[700]">
                            {content.heading}
                          </h2>
                          <ul className="ml-[14px]">
                            <li className="text-[18px]">{content.paraGraph}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
