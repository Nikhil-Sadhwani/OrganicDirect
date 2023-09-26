import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CropsContentContext from "../Context/cropsContent/CropsContentContext";
import CropDetails from "./CropDetails";

export default function Crops() {
  const [showDetails, setShowDetails] = useState(false);
  const [propArray, setPropArray] = useState([]);

  const CropsObj = useContext(CropsContentContext);

  const { season } = useParams();

  const funcOfDetails = (arr) => {
    setShowDetails(true);
    setPropArray(arr);
  };
  useEffect(() => {
    setShowDetails(false);
    // CropsObj.fetchMonths(CropsObj[season]);

    CropsObj.fetchMonths(season);
  }, []);

  return (
    <>
      {/* {!showDetails ? ( */}
      <div
        className="relative top-[100px] bg-no-repeat bg-cover bg-fixed"
        // style={{
        //   backgroundImage: `url(${illustrateImg}) `,
        // }}
      >
        <h2 className="text-5xl h-[4.25rem] font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B]">
          {season}
        </h2>
        {CropsObj.uniqueMonth.map((month) => {
          return (
            <>
              <h4 className="text-5xl font-600 text-black m-6">{month}</h4>
              <div className="w-[96%] h-[3px] bg-black m-auto"></div>
              <div className=" grid  gap-[0.5rem] w-[66%] p-[21px] sm:w-[100%] sm:grid-cols-2 lg:grid-cols-4">
                {CropsObj.Crops.map((crop, key) => {
                  if (crop.season === season) {
                    if (crop.startMonth === month) {
                      return (
                        <div
                          key={key}
                          className={` w-[250px] h-[375px] sm:mb-[15px] sm:m-auto md:m-0 ${
                            !(crop.id % 2 === 0) ? "" : "md:mt-[60px]"
                          }`}
                        >
                          <Link
                            to={`/crop/${crop.name}`}
                            // onClick={() => funcOfDetails(crop)}
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

                              <div className="mt-32 sm:mt-48 lg:mt-24">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                  <p className="text-sm text-white">
                                    {crop.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  }
                  return false;
                })}
              </div>
            </>
          );
        })}
      </div>
      {/* ) 
      : (
        <CropDetails propArray={propArray} />
      )} */}
    </>
  );
}
