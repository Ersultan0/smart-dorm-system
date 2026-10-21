const dormitories = [
  {
    id: 1,
    name: "Dormitory №1",
    university: "International Information Technology University",
    location: "Almaty, Kazakhstan",
    address: "Manas Street, Almaty",
    totalRooms: 120,
    availableBeds: 15,
    price: 30000,
    gender: "Male / Female",
    description:
      "Modern student dormitory with comfortable rooms, Wi-Fi, study areas and security.",
    facilities: [
      "Free Wi-Fi",
      "24/7 Security",
      "Study Room",
      "Laundry",
      "Kitchen",
      "CCTV",
    ],
    rooms: [
      {
        id: 101,
        type: "Single Room",
        capacity: 1,
        available: 2,
        price: 45000,
      },
      {
        id: 102,
        type: "Double Room",
        capacity: 2,
        available: 5,
        price: 35000,
      },
      {
        id: 103,
        type: "Triple Room",
        capacity: 3,
        available: 8,
        price: 30000,
      },
    ],
  },

  {
    id: 2,
    name: "Dormitory №2",
    university: "International Information Technology University",
    location: "Almaty, Kazakhstan",
    address: "Abai Avenue, Almaty",
    totalRooms: 95,
    availableBeds: 8,
    price: 35000,
    gender: "Male / Female",
    description:
      "Student accommodation located near the university with comfortable shared rooms.",
    facilities: [
      "Wi-Fi",
      "Security",
      "Laundry",
      "Kitchen",
      "Study Area",
    ],
    rooms: [
      {
        id: 201,
        type: "Double Room",
        capacity: 2,
        available: 3,
        price: 40000,
      },
      {
        id: 202,
        type: "Triple Room",
        capacity: 3,
        available: 5,
        price: 35000,
      },
    ],
  },

  {
    id: 3,
    name: "Dormitory №3",
    university: "International Information Technology University",
    location: "Almaty, Kazakhstan",
    address: "Tole Bi Street, Almaty",
    totalRooms: 150,
    availableBeds: 22,
    price: 40000,
    gender: "Male / Female",
    description:
      "Large student dormitory with modern facilities and convenient access to public transport.",
    facilities: [
      "High-speed Wi-Fi",
      "24/7 Security",
      "Gym",
      "Laundry",
      "Kitchen",
      "Study Rooms",
    ],
    rooms: [
      {
        id: 301,
        type: "Single Room",
        capacity: 1,
        available: 4,
        price: 55000,
      },
      {
        id: 302,
        type: "Double Room",
        capacity: 2,
        available: 8,
        price: 45000,
      },
      {
        id: 303,
        type: "Triple Room",
        capacity: 3,
        available: 10,
        price: 40000,
      },
    ],
  },
];

export default dormitories;