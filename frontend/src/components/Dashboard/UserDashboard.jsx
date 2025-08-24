import React from "react";

const UserDashboard = () => {
  // Dummy user data
  const user = {
    name: "Raghav Sharma",
    email: "raghav@example.com",
    phone: "+91 9876543210",
    accountNumber: "1234 5678 9012",
    ifsc: "HDFC0001234",
    balance: "₹1,25,000",
    lastTransaction: "₹5,000 credited on 20 Aug 2025",
    programs: [
      { name: "Education Support", date: "Jan 2025", status: "Completed" },
      { name: "Health Camp", date: "Mar 2025", status: "Ongoing" },
    ],
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-yellow-500 mb-2">
        User Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        View your profile, programs, and account details
      </p>

      {/* Profile Info */}
      <div className="flex flex-row bg-white rounded-xl shadow-md p-6 items-center mb-8">
        <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg font-semibold">
          Photo
        </div>
        <div className="flex flex-col flex-1 justify-between px-6">
          <p className="text-xl font-semibold text-gray-900">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        {/* Programs */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
            Programs Participated
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 text-blue-700">
                <tr>
                  <th className="py-2 px-4 text-left">Program</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {user.programs.map((p, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-4">{p.name}</td>
                    <td className="py-2 px-4 text-gray-500">{p.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          p.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
              Account Details
            </h3>
            <p className="mb-1">
              <span className="font-medium text-gray-700">Account Number:</span>{" "}
              {user.accountNumber}
            </p>
            <p className="mb-1">
              <span className="font-medium text-gray-700">IFSC:</span>{" "}
              {user.ifsc}
            </p>
            <p className="mb-1">
              <span className="font-medium text-gray-700">Balance:</span>{" "}
              {user.balance}
            </p>
            <p>
              <span className="font-medium text-gray-700">
                Last Transaction:
              </span>{" "}
              {user.lastTransaction}
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-6 self-start px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition"
            onClick={() => console.log("Edit Account Details clicked")}
          >
            Edit Details
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
          Recent Activities
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-50 text-blue-700">
              <tr>
                <th className="py-2 px-4 text-left">Activity</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {user.programs.map((p, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{p.name}</td>
                  <td className="py-2 px-4 text-gray-500">{p.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        p.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
