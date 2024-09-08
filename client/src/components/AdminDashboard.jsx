import React, { useEffect, useState } from "react";
import { Oval } from 'react-loader-spinner';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // State to control loader

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched users:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleMLAlgorithm = async (userId) => {
    console.log(`Running ML algorithm for user ID: ${userId}`);
    setLoading(true); // Show the loader

    try {
        const response = await fetch(`http://127.0.0.1:8000/process_convert/${userId}`, {
            method: "POST",
        });

        if (response.ok) {
            const blob = await response.blob(); // Get the CSV file as a blob
            console.log("CSV file generated successfully");

            // Automatically download the CSV file
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'output.csv'; // Set the filename
            document.body.appendChild(downloadLink);
            downloadLink.click(); // Automatically trigger the download
            document.body.removeChild(downloadLink); // Clean up

            alert("CSV file downloaded successfully");
        } else {
            const data = await response.json();
            console.error("Error:", data.detail || "Failed to process the request");
            alert("Error processing the request: " + (data.detail || "Unknown error"));
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error processing the request");
    } finally {
        setLoading(false); // Hide the loader
    }
  };

  const handleDeleteUser = (userId) => {
    console.log(`Attempting to delete user ID: ${userId}`);

    if (!userId) {
      console.error("User ID is undefined or null");
      return;
    }

    // Optimistically remove the user from the UI first
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      console.log("Optimistically updated users:", updatedUsers);
      return updatedUsers;
    });

    fetch(`http://localhost:8000/api/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`User ID ${userId} deleted successfully`);
          alert("Item deleted");
        } else {
          return response.json().then((errorData) => {
            console.error("Failed to delete user:", errorData);
            setUsers((prevUsers) => {
              const revertedUser = prevUsers.find((user) => user.id === userId);
              console.log(
                "Reverting optimistic update, adding user back:",
                revertedUser
              );
              return [...prevUsers, revertedUser];
            });
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        setUsers((prevUsers) => {
          const revertedUser = prevUsers.find((user) => user.id === userId);
          console.log(
            "Reverting optimistic update, adding user back:",
            revertedUser
          );
          return [...prevUsers, revertedUser];
        });
      });
  };

  return (
    <div className="admin-dashboard p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Admin Dashboard
      </h1>
      
      {/* Loader Display */}
      {loading && (
        <div className="flex justify-center items-center mb-8">
          <Oval
            height={50}
            width={50}
            color="blue"
            wrapperStyle={{}}
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4f46e5"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Time of Upload</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr
                key={user.id || user._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-4 px-6">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="py-4 px-6 text-center flex justify-center gap-2">
                  <button
                    onClick={() => handleMLAlgorithm(user.id || user._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                  >
                    Run Algorithm and download
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id || user._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
