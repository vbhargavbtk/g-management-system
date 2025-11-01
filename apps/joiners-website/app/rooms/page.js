async function getRooms() {
  // TODO: Replace with actual fetch call to the backend API
  // const res = await fetch('http://localhost:5000/api/rooms');
  // const rooms = await res.json();
  // return rooms;

  return [
    { _id: '1', roomNumber: '101', capacity: 2, rent: 8000, status: 'available' },
    { _id: '2', roomNumber: '102', capacity: 3, rent: 9000, status: 'occupied' },
    { _id: '3', roomNumber: '201', capacity: 2, rent: 8500, status: 'available' },
    { _id: '4', roomNumber: '202', capacity: 1, rent: 7000, status: 'maintenance' },
  ];
}

export default async function Rooms() {
  const rooms = await getRooms();

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map(room => (
          <div key={room._id} className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Room {room.roomNumber}</h2>
            <p>Capacity: {room.capacity}</p>
            <p>Rent: ₹{room.rent} / month</p>
            <p>Status: <span className={`capitalize font-bold ${room.status === 'available' ? 'text-secondary' : 'text-accent'}`}>{room.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
