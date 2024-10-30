"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  Clock,
  Users,
  Calendar,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";
import background6 from "../assets/background6.jpg";
import AboutImage from "../assets/About.jpg";
import logo from "../assets/black logo.pdf";

const carouselImages = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
];

const initialChallenges = [
  { id: 1, player: "John Doe", game: "8-Ball", prize: 500 },
  { id: 2, player: "Jane Smith", game: "9-Ball", prize: 750 },
  { id: 3, player: "Mike Johnson", game: "Snooker", prize: 1000 },
];

const initialTables = [
  { id: 1, name: "Table 1", type: "8-Ball", isAvailable: true },
  { id: 2, name: "Table 2", type: "9-Ball", isAvailable: false },
  { id: 3, name: "Table 3", type: "Snooker", isAvailable: true },
  { id: 4, name: "Table 4", type: "8-Ball", isAvailable: true },
  { id: 5, name: "Table 5", type: "9-Ball", isAvailable: true },
];

const wifiPackages = [
  { id: 1, duration: "1 Hour", price: 100 },
  { id: 2, duration: "2 Hours", price: 180 },
  { id: 3, duration: "4 Hours", price: 300 },
  { id: 4, duration: "All Day", price: 500 },
];

export default function ChalkHouse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [challenges, setChallenges] = useState(initialChallenges);
  const [newChallenge, setNewChallenge] = useState({
    player: "",
    game: "",
    prize: "",
  });
  const [tables, setTables] = useState(initialTables);
  const [selectedTable, setSelectedTable] = useState(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNewChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChallenge.player || !newChallenge.game || !newChallenge.prize) {
      setMessage("Please fill in all fields.");
      return;
    }
    const id = challenges.length ? challenges[challenges.length - 1].id + 1 : 1; // Generate a unique ID
    setChallenges([...challenges, { id, ...newChallenge }]);
    setNewChallenge({ player: "", game: "", prize: "" });
    setMessage("Challenge posted successfully!");
  };

  const acceptChallenge = (id: number) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
    setMessage(`You've accepted the challenge! Get ready to play!`);
  };
  const bookTable = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTable) {
      setTables(
        tables.map((table) =>
          table.id === selectedTable.id
            ? { ...table, isAvailable: false }
            : table
        )
      );
      alert(
        `Table ${selectedTable.name} booked for ${bookingDate} at ${bookingTime}`
      );
      setSelectedTable(null);
      setBookingDate("");
      setBookingTime("");
    }
  };

  const buyWifiPackage = (packageId: number) => {
    const selectedPackage = wifiPackages.find((pkg) => pkg.id === packageId);
    if (selectedPackage) {
      alert(
        `You've purchased ${selectedPackage.duration} of WiFi for ${selectedPackage.price} KSH`
      );
    }
  };
  useEffect(() => {
    const Tawk_LoadStart = new Date();
    const script = document.createElement("script");

    script.async = true;
    script.src = "https://embed.tawk.to/6721f12b4304e3196ada89e7/1ibe9c4lh";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">The Chalkhouse</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {[
                "Home",
                "About",
                "Games",
                "Challenges",
                "Book",
                "WiFi",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black"
            >
              <ul className="py-4">
                {[
                  "Home",
                  "About",
                  "Games",
                  "Challenges",
                  "Book",
                  "WiFi",
                  "Contact",
                ].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 px-4 text-white hover:text-red-500 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Logo Background Overlay */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 z-0"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Hero Section with Mixed Animations */}
      <section id="home" className="relative h-screen overflow-hidden">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              zIndex: currentImage === index ? 1 : 0,
            }}
            initial={{
              opacity: currentImage === index ? 0 : 1,
              x: currentImage === index ? 50 : 0,
            }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              x: currentImage === index ? 0 : -50,
            }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 0.7, ease: "easeInOut" },
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white z-10 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight"
          >
            Welcome to The Chalkhouse
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="text-xl md:text-3xl font-light mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow-md"
          >
            Where skills meet chill - Your ultimate pool & billiards experience
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            href="#book"
            className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-xl transition-transform duration-300 transform hover:scale-110 focus:ring-4 focus:ring-red-500 focus:outline-none"
          >
            Reserve Your Spot
          </motion.a>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:scale-105 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:scale-105 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-wide">
            About The Chalkhouse
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Image with Parallax Effect */}
            {/* Image with Parallax Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-500">
                <img
                  src={AboutImage}
                  alt="The Chalkhouse Interior"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Text Content with Staggered Animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.3 }}
              className="md:w-1/2 md:pl-8 text-gray-700"
            >
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg leading-relaxed mb-6"
              >
                The Chalkhouse is Nairobi's premier pool and billiards
                destination. We offer a sophisticated atmosphere for both casual
                players and serious enthusiasts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg leading-relaxed mb-6"
              >
                Our facility features top-of-the-line tables, a full-service
                bar, and a friendly staff dedicated to ensuring you have the
                best possible experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg leading-relaxed"
              >
                Whether you're looking to improve your game, compete in
                tournaments, or simply enjoy a night out with friends, The
                Chalkhouse is the perfect spot for you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pool Games Section */}
      <section id="games" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "8-Ball", image: background1 },
              { name: "9-Ball", image: background2 },
              { name: "Snooker", image: background3 },
            ].map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden group transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white">
                      {game.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Experience the thrill of {game.name} on our professional
                    tables.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Challenges Section */}
      <section id="challenges" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Player Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg shadow-lg p-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {challenge.player}
                  </h3>
                  <p className="text-gray-600">Game: {challenge.game}</p>
                  <p className="text-green-600 font-semibold">
                    Prize: {challenge.prize} KSH
                  </p>
                </div>
                <button
                  onClick={() => acceptChallenge(challenge.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Accept Challenge
                </button>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Post a New Challenge
            </h3>
            <form onSubmit={handleNewChallenge} className="space-y-4">
              <div>
                <label
                  htmlFor="player"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="player"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  value={newChallenge.player}
                  onChange={(e) =>
                    setNewChallenge({ ...newChallenge, player: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="game"
                  className="block text-sm font-medium text-gray-700"
                >
                  Game
                </label>
                <select
                  id="game"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  value={newChallenge.game}
                  onChange={(e) =>
                    setNewChallenge({ ...newChallenge, game: e.target.value })
                  }
                  required
                >
                  <option value="">Select a game</option>
                  <option value="8-Ball">8-Ball</option>
                  <option value="9-Ball">9-Ball</option>
                  <option value="Snooker">Snooker</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="prize"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prize Amount (KSH)
                </label>
                <input
                  type="number"
                  id="prize"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  value={newChallenge.prize}
                  onChange={(e) =>
                    setNewChallenge({ ...newChallenge, prize: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                Post Challenge
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Table Booking Section */}
      <section
        id="book"
        className="py-20 bg-gradient-to-b from-gray-100 to-gray-200"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Book a Table
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Available Tables Section */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Available Tables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tables.slice(0, 6).map((table) => (
                  <button
                    key={table.id}
                    onClick={() => setSelectedTable(table)}
                    className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-transform transform duration-300 ${
                      table.isAvailable
                        ? "bg-green-50 hover:bg-green-100 text-green-700"
                        : "bg-red-50 text-red-400 cursor-not-allowed"
                    } ${
                      selectedTable?.id === table.id
                        ? "scale-105 border border-red-500"
                        : ""
                    }`}
                    disabled={!table.isAvailable}
                  >
                    <span className="font-semibold text-lg mb-2">
                      {table.name}
                    </span>
                    <span className="text-sm">{table.type}</span>
                    {table.isAvailable ? (
                      <svg
                        className="w-8 h-8 text-green-600 mt-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414 0L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8 text-red-500 mt-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10A8 8 0 11-1 10 8 8 0 0118 10zm-4-4a1 1 0 00-1.414 1.414L14.586 10l-2.293 2.293a1 1 0 001.414 1.414L16 11.414l2.293 2.293a1 1 0 001.414-1.414L17.414 10l2.293-2.293A1 1 0 0018.293 6.707L16 9.414l-2.293-2.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Book Your Table
              </h3>
              <form onSubmit={bookTable} className="space-y-5">
                <div>
                  <label
                    htmlFor="table"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Selected Table
                  </label>
                  <input
                    type="text"
                    id="table"
                    value={selectedTable ? selectedTable.name : ""}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    readOnly
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-medium text-gray-800">
                    Reservation Fee:
                  </span>
                  <span className="text-lg font-semibold text-red-600">
                    50 KSH
                  </span>
                </div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 font-bold text-white rounded-lg transition-transform transform duration-300 ${
                    selectedTable
                      ? "bg-blue-600 hover:bg-blue-700 scale-105"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!selectedTable}
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Packages Section */}
      <section id="wifi" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WiFi Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wifiPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-lg shadow-xl p-6 text-center"
              >
                <Wifi className="w-12 h-12 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">{pkg.duration}</h3>
                <p className="text-gray-600 mb-4">{pkg.price} KSH</p>
                <button
                  onClick={() => buyWifiPackage(pkg.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Buy Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 md:pl-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <p className="flex items-center mb-2">
                <MapPin className="mr-2" /> 123 Pool Street, Nairobi, Kenya
              </p>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" /> +254 123 456 789
              </p>
              <p className="flex items-center mb-4">
                <Mail className="mr-2" /> info@thechalkhouse.com
              </p>
              <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
              <p className="mb-1">Monday - Thursday: 2pm - 11pm</p>
              <p className="mb-1">Friday - Saturday: 12pm - 2am</p>
              <p>Sunday: 12pm - 10pm</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">The Chalkhouse</h2>
              <p>Nairobi's Premier Pool and Billiards Destination</p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                {[
                  "Home",
                  "About",
                  "Games",
                  "Challenges",
                  "Book",
                  "WiFi",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 The Chalkhouse. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
