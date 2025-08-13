export default function Home() {
  const cars = [
    {
      name: "Tesla Model S Plaid",
      price: "$89,990",
      img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
    },
    {
      name: "BMW M4 Competition",
      price: "$76,500",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    },
    {
      name: "Mercedes-Benz G-Wagon",
      price: "$156,450",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    },
    {
      name: "Porsche 911 Carrera",
      price: "$114,000",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    },
    {
      name: "Audi R8 V10 Plus",
      price: "$142,000",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    },
    {
      name: "Range Rover Sport SVR",
      price: "$121,500",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-900">Car Dealership</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-900 cursor-pointer">Home</li>
          <li className="hover:text-blue-900 cursor-pointer">Inventory</li>
          <li className="hover:text-blue-900 cursor-pointer">About</li>
          <li className="hover:text-blue-900 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-5xl font-bold mb-4">Luxury Cars, Unmatched Deals</h2>
          <p className="text-lg mb-6">
            Browse our premium selection and drive away in your dream car today.
          </p>
          <a
            href="#inventory"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Browse Inventory
          </a>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Featured Vehicles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                <p className="text-gray-700">{car.price}</p>
                <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-16">
        &copy; {new Date().getFullYear()} Car Dealership. All rights reserved.
      </footer>
    </main>
  );
}
