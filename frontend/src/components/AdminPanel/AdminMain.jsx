import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
import { Calendar, Users, Star } from "lucide-react"; // icons

const AdminPanel = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  const handleEdit = (event, index) => {
    setFormData(event);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editIndex !== null) {
        await axios.put(
          `http://localhost:5000/api/events/${formData.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/events", formData);
      }
      fetchEvents();
      setFormData({ id: "", name: "", date: "", registered: 0, desc: "" });
      setShowForm(false);
      setEditIndex(null);
    } catch (error) {
      console.error("Error saving event", error);
    }
  };

  // Stats
  const totalEvents = events.length;
  const totalRegistered = events.reduce((acc, ev) => acc + ev.registered, 0);
  const maxRegisteredEvent =
    events.length > 0
      ? events.reduce((a, b) => (a.registered > b.registered ? a : b))
      : { name: "N/A", registered: 0 };

  // Chart data
  const barData = events.map((e) => ({
    name: e.name,
    Registered: e.registered,
  }));

  const pieData = events.map((e) => ({
    name: e.name,
    value: e.registered,
  }));

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Main Content */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <Calendar className="h-10 w-10 opacity-80 mb-2" />
          <h2 className="text-lg">Total Events</h2>
          <p className="text-3xl font-bold">{totalEvents}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
          <Users className="h-10 w-10 opacity-80 mb-2" />
          <h2 className="text-lg">Total Registered</h2>
          <p className="text-3xl font-bold">{totalRegistered}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
          <Star className="h-10 w-10 opacity-80 mb-2" />
          <h2 className="text-lg">Most Popular</h2>
          <p className="text-md">{maxRegisteredEvent.name}</p>
          <p className="text-2xl font-bold">{maxRegisteredEvent.registered}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            📊 Registrations by Event
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#374151" />
              <YAxis stroke="#374151" />
              <Tooltip />
              <Bar dataKey="Registered" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            🥧 Event Distribution
          </h2>
          <ResponsiveContainer width="100%" height={260}>
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

      {/* Add Event Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-blue-700 transition transform hover:scale-105"
        >
          + Add Event
        </button>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          📅 All Events
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-50 text-blue-700">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Event Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Registered</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={event.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
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
                      onClick={() => navigate(`/lead/${event.id}`)}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                    >
                      Leads
                    </button>
                    <button
                      onClick={() => handleEdit(event, index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
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

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full animate-scaleIn">
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.desc}</p>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
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

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full animate-scaleIn">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {editIndex !== null ? "✏️ Update Event" : "➕ Add Event"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Event ID"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.id}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Event Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Event Description"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
