import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminPanel = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    {
      id: "EV001",
      name: "Katathon",
      date: "2025-09-12",
      registered: 500,
      desc: "Outbound activities designed to promote a healthy lifestyle, encourage teamwork, and build friendships among students from various colleges.",
    },
    {
      id: "EV002",
      name: "Alkemist Program",
      date: "2025-09-12",
      registered: 35,
      desc: "A leadership development program for women in early careers, focusing on building purpose-driven leaders and effective managers.",
    },
    {
      id: "EV003",
      name: "Akcelerator Program",
      date: "2025-09-12",
      registered: 18,
      desc: "Assists students and alumni in pursuing postgraduate education like MBA and MS in India and abroad, and new-age programs such as Data Science and Data Engineering.",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    date: "",
    registered: 0,
    desc: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // ---------- STATS ----------
  const totalEvents = events.length;
  const totalRegistered = events.reduce((acc, ev) => acc + ev.registered, 0);
  const maxRegisteredEvent = events.reduce((a, b) =>
    a.registered > b.registered ? a : b
  );

  // ---------- CHART DATA ----------
  const barData = events.map((e) => ({
    name: e.name,
    Registered: e.registered,
  }));

  const pieData = events.map((e) => ({
    name: e.name,
    value: e.registered,
  }));

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  // ---------- HANDLERS ----------
  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEdit = (event, index) => {
    setFormData(event);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = formData;
      setEvents(updatedEvents);
      setEditIndex(null);
    } else {
      setEvents([...events, formData]);
    }

    setFormData({ id: "", name: "", date: "", registered: 0, desc: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Panel - Events
      </h1>

      {/* ---------- STAT CARDS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center border">
          <h2 className="text-lg font-semibold text-gray-600">Total Events</h2>
          <p className="text-2xl font-bold text-blue-600">{totalEvents}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center border">
          <h2 className="text-lg font-semibold text-gray-600">
            Total Registered
          </h2>
          <p className="text-2xl font-bold text-green-600">{totalRegistered}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center border">
          <h2 className="text-lg font-semibold text-gray-600">
            Most Popular Event
          </h2>
          <p className="text-md font-medium text-gray-800">
            {maxRegisteredEvent.name}
          </p>
          <p className="text-xl font-bold text-purple-600">
            {maxRegisteredEvent.registered}
          </p>
        </div>
      </div>

      {/* ---------- CHARTS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Registrations by Event
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#374151" />
              <YAxis stroke="#374151" />
              <Tooltip />
              <Bar dataKey="Registered" fill="#3B82F6" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Event Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ---------- ADD EVENT BUTTON ---------- */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Event
        </button>
      </div>

      {/* ---------- EVENTS TABLE ---------- */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-50 text-blue-700">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Event Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Registered</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={event.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{event.id}</td>
                  <td
                    className="py-2 px-4 text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {event.name}
                  </td>
                  <td className="py-2 px-4 text-gray-500">{event.date}</td>
                  <td className="py-2 px-4">{event.registered}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      onClick={() => navigate(`/lead`)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    >
                      View Leads
                    </button>
                    <button
                      onClick={() => handleEdit(event, index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
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

      {/* ---------- POPUP: EVENT DETAILS ---------- */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.name}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.desc}</p>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => alert("Share functionality")}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- POPUP: ADD/EDIT FORM ---------- */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {editIndex !== null ? "Update Event" : "Add Event"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Event ID"
                className="w-full p-2 border rounded-lg"
                value={formData.id}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Event Name"
                className="w-full p-2 border rounded-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Event Description"
                className="w-full p-2 border rounded-lg"
                value={formData.desc}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                required
              ></textarea>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => {
                    setShowForm(false);
                    setEditIndex(null);
                    setFormData({
                      id: "",
                      name: "",
                      date: "",
                      registered: 0,
                      desc: "",
                    });
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
