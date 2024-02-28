import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { Await } from "react-router-dom";

const LaskWeek = () => {
  const {register,handleSubmit}=useForm();

  const [lastWeekData, setlastWeekData] = useState();
  const [loading,setLoading]=useState(true);
  const LaskWeekLeaderBoard = async (data) => {
    try {
      const getUsers = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/last_week_leaderboard`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      ).then(setLoading(false))
      console.log("form Response", getUsers);
      console.log(getUsers);
      const res = await getUsers.json();
      setlastWeekData(res);
      // setLoading(false);
      
    } catch (error) {
      console.log("error",error);
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   LaskWeekLeaderBoard();
  // }, []);
  console.log(lastWeekData);
  return (
    <div>
      <form
        onSubmit={handleSubmit(LaskWeekLeaderBoard)}
        className="mt-8 flex flex-col gap-4"  
      >
        <div className="space-y-5">
          <div>
            <label
              htmlFor="country"
              className=" text-base font-medium text-black dark:text-black"
            >
              {" "}
              Country Code{" "}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-black focus:outline-none focus:ring-1
                   focus:ring-gray-400 focus:ring-offset-1 
                   disabled:cursor-not-allowed disabled:opacity-50 
                  "
              type="text"
              placeholder="Enter Country Code to see LeaderBoard"
              {...register("country",{required:true,maxLength:2,message:"required"})}
            ></input>
            <button
              type="submit"
              class=" text-white bg-gradient-to-r w-full from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  text-center
           me-1 mb-1 px-1 py-1 h-10 ."
            >
              search
            </button>
          </div>
        </div>
      </form>

      {!loading?(<table className="min-w-full {md}:min-w-min divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Rank
            </th>
            <th
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <span>UserID</span>
            </th>
            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Score
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Country Code
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Date
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {lastWeekData?.leaderBoard?.map((person, index) => (
            <tr key={person.UID}>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {index + 1}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {person.UID}
              </td>
              <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {person.Name}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {person.Score}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {"+" + person.Country}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {new Date(person.TimeStamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>) :  <div>Loading....</div>}
    </div>
  );
};

export default LaskWeek;
