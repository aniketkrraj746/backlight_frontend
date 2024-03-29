import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Searchbox = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [user, setUser] = useState();

  const handleClick = () => {
    setShowModal(false);

  };

  const { register, handleSubmit } = useForm();
   const getUser = async (data) => {
     if (register === null) {
       alert("enter value");
     } else {
       try {
         const answer = await fetch(
           `${process.env.REACT_APP_BASE_URL}/api/v1/UserId`,
           {
             mode: "cors",
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ ...data }),
           }
         );
         console.log("user id searched for", answer);
         const userData = await answer.json();
         setUser(userData);
         console.log("user Data", userData);
         setShowModal(true);
       } catch (error) {
         console.log("found err in catch");
         console.log(error);
         alert("Error in fetching data");
       }
     }
   };
  return (
    <div>
      <form onSubmit={handleSubmit(getUser)}>
        <div>
          <label htmlFor="UID" className="sr-only border border-emerald-600">
            {" "}
            UID{" "}
          </label>
          <input
            type="text"
            id="UID"
            name="userId"
            placeholder="Search User"
            {...register("userId")}
            required
          ></input>
          <button
            type="submit"
            // onClick={}
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  text-center me-1 mb-1 px-1 py-1."
          >
            search
          </button>
        </div>
      </form>
      <>
        {showModal ? (
          <div className=" w-11">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-4 min-w-44">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {user ? (
                        <div>Rank:{user.user.rank_place}</div>
                      ) : (
                        <div>loading ....</div>
                      )}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-55 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => handleClick()}
                    >
                      <span>x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div>
                    {/* {Array.isArray(user) ? (
                      <ul>
                        {user.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Loading...</p>
                    )} */}
                    {user ? (
                      <div className=" p-2 flex flex-col gap-3">
                        {/* <h1>Rank: {user.user.Rank}</h1> */}
                        <h2>UserID:{user.user.UID}</h2>
                        <h2>Name: {user.user.Name}</h2>
                        <h2>Score: {user.user.Score}</h2>
                        <h2>Country:{user.user.Country}</h2>
                        {/* <h2>
                          TimeStamp:
                          {new Date(user.user.TimeStamp).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </h2> */}
                      </div>
                    ) : (
                      <div>loading ....</div>
                    )}
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
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Searchbox;