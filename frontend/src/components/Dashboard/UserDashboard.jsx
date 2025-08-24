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
    <div className="p-8 bg-[#F7F3EE] min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">USER DASHBOARD</h1>
      <p className="text-gray-600 mb-8">
        View your profile, programs, and account details
      </p>

      {/* Profile Info */}
      <div className="flex flex-row bg-[#F7F3EE] rounded-md p-6 items-stretch justify-between border-1 border-[#a7a4a1]">
        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg mx-6">
          Photo
        </div>
        <div className="flex flex-col flex-1 justify-between px-6">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>

      <div className="h-[1.5px] bg-[#a7a4a1] my-6 rounded-2xl"></div>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] mb-6">
        {/* Programs */}
        <div className="md:col-span-1 bg-[#F7F3EE] rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Programs Participated</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#e0ddd9] rounded-lg">
              <thead className="bg-[#ebe7e2] text-gray-700">
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
                    className="border-t border-[#e0ddd9] hover:bg-[#f1efeb] transition-colors"
                  >
                    <td className="py-2 px-4">{p.name}</td>
                    <td className="py-2 px-4 text-sm text-gray-500">
                      {p.date}
                    </td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
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
        <div className="md:col-span-1 bg-[#F7F3EE] rounded-xl shadow p-6 flex flex-row justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Account Details</h3>
            <p>
              <span className="font-medium">Account Number:</span>{" "}
              {user.accountNumber}
            </p>
            <p>
              <span className="font-medium">IFSC:</span> {user.ifsc}
            </p>
            <p>
              <span className="font-medium">Balance:</span> {user.balance}
            </p>
            <p>
              <span className="font-medium">Last Transaction:</span>{" "}
              {user.lastTransaction}
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-6 h-12 bg-[#494540] hover:bg-[#3f3a35] text-white font-medium px-4 rounded-lg transition"
            onClick={() => console.log("Edit Account Details clicked")}
          >
            Edit Details
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="md:col-span-1 bg-[#F7F3EE] rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-[#e0ddd9] rounded-lg">
            <thead className="bg-[#ebe7e2] text-gray-700">
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
                  className="border-t border-[#e0ddd9] hover:bg-[#f1efeb] transition-colors"
                >
                  <td className="py-2 px-4">{p.name}</td>
                  <td className="py-2 px-4 text-sm text-gray-500">{p.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
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
