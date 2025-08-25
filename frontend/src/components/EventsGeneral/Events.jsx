import React, { useState, useEffect } from "react";

const EventsPage = () => {
//   const events = [
//     {
//       name: "Science Fair",
//       date: "2025-09-01",
//       description: "Lorem ipsum dolor sit amet...",
//       category: "Science",
//     },
//     {
//       name: "Tech Summit",
//       date: "2025-09-05",
//       description: "Consectetur adipiscing elit...",
//       category: "Technology",
//     },
//     {
//       name: "Engineering Expo",
//       date: "2025-09-10",
//       description: "Sed do eiusmod tempor...",
//       category: "Engineering",
//     },
//     {
//       name: "Math Olympiad",
//       date: "2025-09-15",
//       description: "Ut enim ad minim veniam...",
//       category: "Mathematics",
//     },
//     {
//       name: "Robotics Workshop",
//       date: "2025-09-20",
//       description: "Quis nostrud exercitation...",
//       category: "Technology",
//     },
//     {
//       name: "Astronomy Night",
//       date: "2025-09-25",
//       description: "Duis aute irure dolor...",
//       category: "Science",
//     },
//     {
//       name: "Bridge Building Contest",
//       date: "2025-09-28",
//       description: "In reprehenderit in...",
//       category: "Engineering",
//     },
//     {
//       name: "Data Science Seminar",
//       date: "2025-10-01",
//       description: "Excepteur sint occaecat...",
//       category: "Mathematics",
//     },
//     {
//       name: "AI Hackathon",
//       date: "2025-10-05",
//       description: "Cupidatat non proident...",
//       category: "Technology",
//     },
//     {
//       name: "Chemistry Lab Day",
//       date: "2025-10-10",
//       description: "Sunt in culpa qui officia...",
//       category: "Science",
//     },
//   ];
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registerEvent, setRegisterEvent] = useState(null); // For registration form popup
  const [search, setSearch] = useState("");

  // Filtered events
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase())
  );

   useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      {/* Header with Search */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-400 pb-3">
          <span className="w-1 h-6 bg-blue-500 rounded-md"></span>
          Upcoming Events
        </h3>

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 text-sm border w-72 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-50 text-blue-700">
              <tr>
                <th className="py-2 px-4 text-left">Event</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                  onClick={(e) => {
                    // Prevent "Register Now" click from also triggering event details popup
                    if (!e.target.closest(".register-link")) {
                      setSelectedEvent(event);
                    }
                  }}
                >
                  <td className="py-2 px-4">{event.name}</td>
                  <td className="py-2 px-4 text-gray-500">{event.date}</td>
                  <td className="py-2 px-4">{event.category}</td>
                  <td className="py-2 px-4">
                    <span
                      className="text-blue-600 hover:underline register-link cursor-pointer"
                      onClick={() => setRegisterEvent(event)}
                    >
                      Register Now
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-1">{selectedEvent.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{selectedEvent.date}</p>
            <p className="mt-1 text-sm font-medium text-blue-600">
              {selectedEvent.category}
            </p>
            <p className="text-gray-700">{selectedEvent.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
              <span
                className="text-blue-600 hover:underline register-link cursor-pointer ml-4"
                onClick={() => setRegisterEvent(event)}
              >
                Register Now
              </span>
            </div>
          </div>
        </div>
      )}

      {registerEvent && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50"
          onClick={() => setRegisterEvent(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-lg font-semibold mb-4">
              Register for {registerEvent.name}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your student ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Name
                </label>
                <input
                  type="text"
                  value={registerEvent.name}
                  readOnly
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100 text-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
