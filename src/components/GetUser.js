// import React, { useState } from 'react'

// const GetUser = () => {
//   const [user, setUser] = useState();
//   const getUser = async (data) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_BASE_URL}/api/v1/UserId`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ ...data }),
//         }
//       );
//       console.log("user id searched for", response);
//       const res = await response.json();
//       setUser(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>GetUser page</div>
//   )
// }

// export default GetUser;

import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetUser() {
const navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(true);
  const handleClick=()=>{
    setShowModal(!showModal);
    navigate("/");
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{"user"+"user"}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-55 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() =>handleClick()}
                  >
                    <span >
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>a</div>
                  <div>b</div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClick()}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}