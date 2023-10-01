import React, { useContext } from "react";
import AlertContext from "../Context/alert/AlertContext";

export default function Alert() {
  const AlertObj = useContext(AlertContext);
  return (
    <>
      {AlertObj.alert && (
        <div
          class={`bg-${AlertObj.alert.colo}-100 border-t-4 border-${AlertObj.alert.colo}-500 rounded-b text-${AlertObj.alert.colo}-900 px-4 py-3 shadow-md`}
          role="alert"
        >
          <p class="font-bold">{AlertObj.alert.type}</p>
          <p class="text-sm">{AlertObj.alert.message}</p>
        </div>
      )}
    </>
  );
}
