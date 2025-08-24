import React from "react";

const UserDashboard = () => {

  const user = {
    name: "Raghav Sharma",
    email: "raghav@example.com",
    phone: "+91 9876543210",
    accountNumber: "1234 5678 9012",
    ifsc: "HDFC0001234",
    balance: "₹1,25,000",
    lastTransaction: "₹5,000 credited on 20 Aug 2025",
    status: "Active Beneficiary",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Beneficiary Dashboard
      </h2>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Status:</span> {user.status}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Account Details</h3>
        <div className="space-y-2">
          <p><span className="font-semibold">Account Number:</span> {user.accountNumber}</p>
          <p><span className="font-semibold">IFSC Code:</span> {user.ifsc}</p>
          <p><span className="font-semibold">Balance:</span> {user.balance}</p>
          <p><span className="font-semibold">Last Transaction:</span> {user.lastTransaction}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Loan repayment scheduled for 25 Aug 2025</li>
          <li>Subsidy credited on 15 Aug 2025</li>
          <li>Profile updated on 10 Aug 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
