import React from 'react'
import { useState,useEffect } from 'react';

const LeaderBoard = () => {
  const [userData, setUserData] = useState();
  const getAllData = async () => {
    try {
      const getUsers = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/current_week_leaderboard`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(getUsers);
      const res = await getUsers.json();
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  console.log(userData);
  return (
    <table className="min-w-full {md}:min-w-min divide-y divide-gray-200 dark:divide-gray-700">
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
        {userData?.map((person,index) => (
          <tr key={person.UID}>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {index+1}
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
              {"+"+person.Country}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {person.TimeStamp}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
)}

export default LeaderBoard;