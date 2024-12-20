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
import Match from "./Match";

import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";
import background6 from "../assets/background6.jpg";
import AboutImage from "../assets/About.jpg";
import BackgroundOverlay from "./Background";
import theatre from "../assets/theatre.jpeg";

const carouselImages = [background1, background4, background5, background6];

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
  { id: 1, duration: "1 Hour", price: 20 },
  { id: 2, duration: "2 Hours", price: 50 },
  { id: 3, duration: "4 Hours", price: 100 },
  { id: 4, duration: "All Day", price: 200 },
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
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [activeSection, setActiveSection] = useState(null);

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
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Logo Background Overlay */}
      <BackgroundOverlay />
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
                    className={`text-white hover:text-red-500 transition-colors duration-300 ${
                      activeSection === item.toLowerCase() ? "text-red-500" : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* Add Match as a link that navigates to the /match route */}
              <li key="Match">
                <a
                  href="/match"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                >
                  Match
                </a>
              </li>
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
                      className={`block py-2 px-4 text-white hover:text-red-500 transition-colors duration-300 ${
                        activeSection === item.toLowerCase()
                          ? "text-red-500"
                          : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                {/* Add Match to the mobile menu */}
                <motion.li
                  key="Match"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="/match"
                    className="block py-2 px-4 text-white hover:text-red-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Match
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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
  {/* Top Text: Animated Typewriter Effect */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg leading-tight"
  >
    <motion.span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        borderRight: '0.15em solid white', // Simulating the cursor
        whiteSpace: 'nowrap',
        width: 'auto',
        animation: 'typing 3s steps(30) 1s 1 normal both, blink 0.75s step-end infinite',
      }}
      className="inline-block"
    >
      Welcome to
      <span className="block sm:inline">
        <span className="font-extrabold text-red-400">The Chalkhouse</span>
      </span>
    </motion.span>
  </motion.h2>

  {/* Bottom Text: Appears After Top Text finishes typing */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 4, duration: 1.2, ease: "easeOut" }} // Delayed to start after typing
    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow-md"
  >
    Where skills meet chill - Your ultimate pool & billiards experience
  </motion.p>

  {/* Call to Action Button */}
  <motion.a
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
    href="#book"
    className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:shadow-xl transition-transform duration-300 transform hover:scale-110 focus:ring-4 focus:ring-red-500 focus:outline-none animate-heartbeat"
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
      <section
        id="games"
        className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Our Games & Theatre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "8-Ball",
                image: background1,
                description:
                  "Experience the thrill of 8-Ball on our professional tables.",
              },
              {
                name: "9-Ball",
                image: background2,
                description:
                  "Step up your game with 9-Ball and challenge your skills.",
              },
              {
                name: "Snooker",
                image: background3,
                description: "Test your strategy and precision in Snooker.",
              },
              {
                name: "Chalkhouse Theatre",
                image: theatre,
                description:
                  "Stream live games, latest movies, and exclusive events.",
              },
            ].map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-2xl overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-3xl font-semibold text-white">
                      {game.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-800 text-lg">{game.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="challenges"
        className="py-20 bg-gradient-to-b from-white to-gray-100 relative z-10"
      >
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Player Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl p-6 flex justify-between items-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105 relative z-20"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {challenge.player}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    Game: {challenge.game}
                  </p>
                  <p className="text-green-600 font-semibold text-sm">
                    Prize: {challenge.prize} KSH
                  </p>
                </div>
                <button
                  onClick={() => acceptChallenge(challenge.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 cursor-pointer"
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
            className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto relative z-20"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Post a New Challenge
            </h3>
            <form onSubmit={handleNewChallenge} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="player"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="player"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all cursor-text relative z-30"
                  value={newChallenge.player || ""}
                  onChange={(e) =>
                    setNewChallenge({ ...newChallenge, player: e.target.value })
                  }
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="game"
                  className="block text-sm font-medium text-gray-700"
                >
                  Game
                </label>
                <select
                  id="game"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all cursor-pointer relative z-30"
                  value={newChallenge.game || ""}
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

              <div className="relative">
                <label
                  htmlFor="prize"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prize Amount (KSH)
                </label>
                <input
                  type="number"
                  id="prize"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition-all cursor-text relative z-30"
                  value={newChallenge.prize || ""}
                  onChange={(e) =>
                    setNewChallenge({ ...newChallenge, prize: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 cursor-pointer relative z-30"
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
        className="py-20 bg-gradient-to-b from-gray-100 to-gray-300"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight">
            Book a Table
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Available Tables Section */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800">
                Available Tables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    onClick={() => setSelectedTable(table)}
                    className={`flex flex-col items-center justify-center p-6 h-32 rounded-lg shadow-lg transform transition duration-300 ease-in-out ${
                      table.isAvailable
                        ? "bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 text-green-800"
                        : "bg-gradient-to-r from-red-100 to-red-200 text-red-500 cursor-not-allowed"
                    } ${
                      selectedTable?.id === table.id
                        ? "scale-105 ring-4 ring-offset-2 ring-blue-400"
                        : ""
                    }`}
                    disabled={!table.isAvailable}
                  >
                    <span className="font-semibold text-xl mb-2">
                      {table.name}
                    </span>
                    <span className="text-md">{table.type}</span>
                    {table.isAvailable ? (
                      <svg
                        className="w-8 h-8 mt-auto text-green-600"
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
                        className="w-8 h-8 mt-auto text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Form */}

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800">
                Book Your Table
              </h3>
              <form onSubmit={bookTable} className="space-y-6">
                <div>
                  <label
                    htmlFor="table"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Selected Table
                  </label>
                  <input
                    type="text"
                    id="table"
                    value={selectedTable ? selectedTable.name : ""}
                    readOnly
                    className="mt-1 block w-full cursor-pointer rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="mt-1 block w-full cursor-pointer rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="mt-1 block w-full cursor-pointer rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="mt-1 block w-full cursor-pointer rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full cursor-pointer rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 font-bold text-white rounded-lg transition duration-300 transform ${
                    selectedTable
                      ? "bg-blue-600 hover:bg-blue-700 hover:scale-105"
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
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Get in Touch
              </h3>
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Visit Us
              </h3>
              <div className="flex flex-col space-y-2">
                <p className="flex items-center text-gray-600">
                  <MapPin className="mr-2" /> 123 Pool Street, Nairobi, Kenya
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="mr-2" /> +254 123 456 789
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="mr-2" /> info@thechalkhouse.com
                </p>
              </div>
              <h4 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                Opening Hours
              </h4>
              <div className="text-gray-600">
                <p className="mb-1">Monday - Thursday: 2pm - 11pm</p>
                <p className="mb-1">Friday - Saturday: 12pm - 2am</p>
                <p>Sunday: 12pm - 10pm</p>
              </div>
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
            <p>&copy; 2024 The Chalkhouse. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[
                {
                  name: "Facebook",
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                },
                {
                  name: "Instagram",
                  icon: "M7 2C3.686 2 1 4.686 1 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6H7zm11.5 6.438c0 .78-.27 1.495-.708 2.058l-5.586 5.586c-.563.563-1.278.878-2.065.878s-1.502-.315-2.065-.878L2.928 10.5A2.985 2.985 0 003.5 8.5c0-.78.27-1.495.708-2.058L9.794 1.856C10.357 1.293 11.072 1 11.859 1c.787 0 1.502.293 2.065.878l5.586 5.586c.563.563.878 1.278.878 2.065zM12 5a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z",
                },
                {
                  name: "Twitter",
                  icon: "M22 5.897c-.795.353-1.65.588-2.548.693A4.523 4.523 0 0021.364 4c-.872.517-1.838.892-2.863 1.096a4.507 4.507 0 00-7.69 4.115C7.69 9.345 4.073 7.99 1.64 5.94c-.766 1.315-.314 3.057 1.016 3.826a4.485 4.485 0 01-2.028-.561v.056c0 1.755 1.246 3.227 2.896 3.564-.303.083-.622.128-.95.128-.232 0-.458-.022-.678-.067.458 1.436 1.79 2.476 3.354 2.506A9.047 9.047 0 010 19.536 12.788 12.788 0 007.67 21c9.195 0 14.206-7.63 14.206-14.266 0-.218-.004-.436-.013-.651A10.068 10.068 0 0024 4.557a9.757 9.757 0 01-2.693.738A4.57 4.57 0 0022 5.897z",
                },
                {
                  name: "TikTok",
                  icon: "M12 2a10 10 0 000 20 10 10 0 000-20zM12 4a1 1 0 011 1v4a1 1 0 01-1 1H9v4H8V8h3a1 1 0 001-1V4h-1zm1 16h-1v-2h-1v2H9v-1a1 1 0 00-1-1H8v-1h1a1 1 0 001-1v-1h1v1a1 1 0 001 1h1v1a1 1 0 00-1 1z",
                },
              ].map(({ name, icon }) => (
                <a
                  key={name}
                  href="#"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  aria-label={name}
                >
                  <span className="sr-only">{name}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Where to Find Us
            </h3>
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.078370218685!2d37.011841175092655!3d-1.1034915354539072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4700596c8c7b%3A0xd34ed27bb14b1a4b!2sThe%20chalk%20house!5e0!3m2!1sen!2ske!4v1730661781393!5m2!1sen!2ske"
                className="w-full h-64 md:h-80 lg:h-96 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
