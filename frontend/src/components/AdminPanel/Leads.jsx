import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const EventLeads = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const students = [
    { id: "ST001", name: "Rahul Sharma", status: "Attended" },
    { id: "ST002", name: "Priya Verma", status: "Not Attended" },
    { id: "ST003", name: "Aman Gupta", status: "Attended" },
  ];

  const stats = {
    total: students.length,
    attended: students.filter((s) => s.status === "Attended").length,
    notAttended: students.filter((s) => s.status === "Not Attended").length,
  };

  const chartData = [
    { name: "Attended", value: stats.attended },
    { name: "Not Attended", value: stats.notAttended },
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // green, red

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || student.status === filter;

    return matchesSearch && matchesFilter;
  });

  // Export CSV
  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Student ID,Name,Status"]
        .concat(students.map((s) => `${s.id},${s.name},${s.status}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = `event_${id}_leads.csv`;
    link.click();
  };

  return (
    <div className="p-6 bg-gray-950 text-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-indigo-400">
          📊 Event {id} - Leads
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition"
        >
          ⬅ Back
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-300">Total</h2>
          <p className="text-2xl font-bold text-indigo-400">{stats.total}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-300">Attended</h2>
          <p className="text-2xl font-bold text-green-400">{stats.attended}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-300">Not Attended</h2>
          <p className="text-2xl font-bold text-red-400">{stats.notAttended}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center">
          <button
            onClick={exportCSV}
            className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            📥 Export CSV
          </button>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center mb-10">
        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={110}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="🔍 Search by name or ID..."
          className="px-4 py-2 rounded-lg text-black w-1/3 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-lg text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Attended">Attended</option>
          <option value="Not Attended">Not Attended</option>
        </select>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-indigo-300">
              <th className="p-4 text-left">Student ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student.id}
                className={`cursor-pointer transition ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700`}
                onClick={() => navigate(`/student/${student.id}`)}
              >
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td
                  className={`p-4 font-semibold ${
                    student.status === "Attended"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLeads;
