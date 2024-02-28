import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Navbar = () => {
  // const navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(false);
  const handleClick = () => {
    setShowModal(false);
    // navigate("/");
  };
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState();
  
  // const navigate = useNavigate();

  const getUser = async (data) => {
    try {
      const answer =  await fetch(
        `https://backlight-leaderbaord.up.railway.app/api/v1/UserId`,
        {
          // mode: "*",
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
      console.log("user Data",userData);
    } catch (error) {
      console.log("found err in catch");
      console.log(error);
    }
    setShowModal(true);
    // navigate("/getUser");
  };
  // useEffect(() => {
  //   // const userId="3";
  //   getUser();
  // }, []);
  // console.log(user);
  // if(user===undefined) return <h2>Loading User Info..</h2>;
  //  else
  return (
    <div className="flex gap-2 justify-around py-1">
      <Link to={"/"}>Home</Link>
      <Link to={"/Leaderboard"}>Current-Week-LeaderBoard</Link>
      <Link to={"/Last-Week-LeaderBoard"}>Last-Week-LeaderBoard</Link>
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
            // ref={register({ required: true })}
            // required
          ></input>
          <button type="submit">submit</button>
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
                        <h2>Country:{user.user.Name}</h2>
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

export default Navbar;
