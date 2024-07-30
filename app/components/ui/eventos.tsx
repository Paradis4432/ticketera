import React from 'react';


const Eventos  = () => {

  const { rows } = activeEvents();
  console.log('Events received in Eventos component:', Eventos); // Log the events data

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mx-auto">Your Events</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? ( // Correct the logical error here
          data.map((event: any) => (
            <li key={event.event_id} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold">{event.name}</h2>
              <p className="text-sm text-gray-500">{event.event_start_date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="text-sm text-gray-700">{event.description}</p>
            </li>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </ul>
    </div>
  );
};

export default Eventos;
