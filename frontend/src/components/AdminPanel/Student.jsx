import React from "react";
import { useParams } from "react-router-dom";

const StudentPage = () => {
  const { id } = useParams();

  const student = {
    id: "ST001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",

    events: [
      { name: "Katathon", status: "Completed" },
      { name: "Alkemist Program", status: "Ongoing" },
      { name: "Akcelerator Program", status: "Not Completed" },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Student Details - {student.id}
      </h1>

      {/* Student Info */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <p>
          <b>Name:</b> {student.name}
        </p>
        <p>
          <b>Email:</b> {student.email}
        </p>
        <p>
          <b>Phone:</b> {student.phone}
        </p>
      </div>

      {/* Events Attended */}
      <h2 className="text-2xl font-semibold mb-3">Events Attended</h2>
      <table className="w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 p-3">Event</th>
            <th className="border border-gray-600 p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {student.events.map((event, idx) => (
            <tr key={idx} className="text-center">
              <td className="border border-gray-600 p-3">{event.name}</td>
              <td className="border border-gray-600 p-3">{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
