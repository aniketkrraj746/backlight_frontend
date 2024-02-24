import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';


const App = ()=>{
   const [userData, setUserData] = useState();
  const getAllData = async()=>{
   
    try {
      const getUsers = await fetch(`http://localhost:4000/allData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(getUsers);
      const res = await getUsers.json();
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(()=>{
    getAllData();
  },[]);
  console.log(userData);
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
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
            Country
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
        {userData?.map((person) => (
          <tr key={person.UID}>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {person.UID}
            </td>
            <td className="px-12 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-white">
                {person.Name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {person.Score}
              </div>
            </td>

            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {person.Score}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {person.country}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {person.TimeStamp}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
}

export default App;
