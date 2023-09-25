import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StockDetails() {
  const [inventory, setInventory] = useState([
    {
      cropName: "Pumpkin",
      totalKg: 500,
      amountPerKg: 21,
      totalAmout: 10100,
      status: "Pending",
    },
    {
      cropName: "Tomato",
      totalKg: 500,
      amountPerKg: 21,
      totalAmout: 10100,
      status: "Request",
    },
    {
      cropName: "Corn",
      totalKg: 500,
      amountPerKg: 21,
      totalAmout: 10100,
      status: "Request",
    },
  ]);
  return (
    <>
      <div className="relative top-[100px]">
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B] mb-7">
          StockDetails
        </h2>
        <div
          className="overflow-x-auto p-5 shadow-lg w-[98%] m-auto "
          style={{ border: "2px solid #ebdcdc" }}
        >
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Crops Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Kg
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Amount Per/kg
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => {
                return (
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.cropName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.totalKg}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      ₹ {item.amountPerKg}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      ₹ {item.totalAmout}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link
        to="/sellcrop"
        className="bg-black text-white w-[100px] h-[100px] text-[4rem] text-center absolute bottom-[3px] right-[3px]"
        style={{ borderRadius: "50%" }}
      >
        <i class="ri-add-fill"></i>
      </Link>
    </>
  );
}
