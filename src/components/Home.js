'use client'

import React, { useState, useEffect } from 'react'
import { Wifi, Clock, Users, Calendar, Menu, X, ChevronLeft, ChevronRight, Trophy, Star, Mail, Phone, MapPin } from 'lucide-react'

const carouselImages = [
  'https://images.unsplash.com/photo-1611704337723-8654b211e9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1615915016731-f94a1b2d1d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1626775238053-4315516eedc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
]

const initialChallenges = [
  { id: 1, player: "John Doe", game: "8-Ball", prize: 500 },
  { id: 2, player: "Jane Smith", game: "9-Ball", prize: 750 },
  { id: 3, player: "Mike Johnson", game: "Snooker", prize: 1000 },
]

export default function ChalkHouse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [challenges, setChallenges] = useState(initialChallenges)
  const [newChallenge, setNewChallenge] = useState({ player: '', game: '', prize: '' })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + carouselImages.length) % carouselImages.length)
  }

  const handleNewChallenge = (e: React.FormEvent) => {
    e.preventDefault()
    setChallenges([...challenges, { id: challenges.length + 1, ...newChallenge }])
    setNewChallenge({ player: '', game: '', prize: '' })
  }

  const acceptChallenge = (id: number) => {
    alert(`You've accepted the challenge! Get ready to play!`)
    setChallenges(challenges.filter(challenge => challenge.id !== id))
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-black text-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">The Chalkhouse</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-white hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-white hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#games" className="text-white hover:text-red-500 transition-colors">Games</a></li>
              <li><a href="#challenges" className="text-white hover:text-red-500 transition-colors">Challenges</a></li>
              <li><a href="#events" className="text-white hover:text-red-500 transition-colors">Events</a></li>
              <li><a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <ul className="py-4">
              <li><a href="#home" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#games" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Games</a></li>
              <li><a href="#challenges" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Challenges</a></li>
              <li><a href="#events" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Events</a></li>
              <li><a href="#contact" className="block py-2 px-4 text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h2 className="text-5xl font-bold mb-4">Welcome to The Chalkhouse</h2>
            <p className="text-xl mb-8">Experience the best in pool and billiards</p>
            <a href="#games" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Explore Our Games
            </a>
          </div>
        </div>
        <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About The Chalkhouse</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1626775238053-4315516eedc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="The Chalkhouse Interior" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">The Chalkhouse is Nairobi's premier pool and billiards destination. We offer a sophisticated atmosphere for both casual players and serious enthusiasts.</p>
              <p className="text-lg mb-4">Our facility features top-of-the-line tables, a full-service bar, and a friendly staff dedicated to ensuring you have the best possible experience.</p>
              <p className="text-lg">Whether you're looking to improve your game, compete in tournaments, or simply enjoy a night out with friends, The Chalkhouse is the perfect spot for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Games Section */}
      <section id="games" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '8-Ball', image: 'https://images.unsplash.com/photo-1611704337723-8654b211e9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
              { name: '9-Ball', image: 'https://images.unsplash.com/photo-1615915016731-f94a1b2d1d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
              { name: 'Snooker', image: 'https://images.unsplash.com/photo-1626775238053-4315516eedc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
            ].map((game) => (
              <div key={game.name} className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={game.image} alt={game.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white">{game.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Experience the thrill of {game.name} on our professional tables.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Challenges Section */}
      <section id="challenges" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Player Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.player}</h3>
                  <p className="text-gray-600">Game: {challenge.game}</p>
                  <p className="text-green-600 font-semibold">Prize: {challenge.prize} KSH</p>
                </div>
                <button onClick={() => acceptChallenge(challenge.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Accept Challenge
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Post a New Challenge</h3>
            <form onSubmit={handleNewChallenge} className="space-y-4">
              <div>
                <label htmlFor="player" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="player"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  value={newChallenge.player}
                  onChange={(e) => setNewChallenge({...newChallenge, player: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="game" className="block text-sm font-medium text-gray-700">Game</label>
                <select
                  id="game"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  
                  value={newChallenge.game}
                  onChange={(e) => setNewChallenge({...newChallenge, game: e.target.value})}
                  required
                >
                  <option value="">Select a game</option>
                  <option value="8-Ball">8-Ball</option>
                  <option value="9-Ball">9-Ball</option>
                  <option value="Snooker">Snooker</option>
                </select>
              </div>
              <div>
                <label htmlFor="prize" className="block text-sm font-medium text-gray-700">Prize Amount (KSH)</label>
                <input
                  type="number"
                  id="prize"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  value={newChallenge.prize}
                  onChange={(e) => setNewChallenge({...newChallenge, prize: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Post Challenge
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Weekly Tournament", date: "Every Saturday", prize: "10,000 KSH" },
              { name: "Beginners Workshop", date: "First Sunday of the month", prize: "Learn from the pros" },
              { name: "Championship Qualifier", date: "July 15-17", prize: "Chance to compete nationally" },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-2"><Calendar className="inline-block mr-2" />{event.date}</p>
                <p className="text-green-600 font-semibold"><Trophy className="inline-block mr-2" />{event.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex M.", quote: "The Chalkhouse is my go-to spot for a great game of pool. The atmosphere is unbeatable!" },
              { name: "Sarah K.", quote: "I've improved my game so much thanks to the lessons offered here. Highly recommended!" },
              { name: "David L.", quote: "The tournaments are well-organized and super fun. I look forward to them every week!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" required></textarea>
                </div>
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <p className="flex items-center mb-2"><MapPin className="mr-2" /> 123 Pool Street, Nairobi, Kenya</p>
              <p className="flex items-center mb-2"><Phone className="mr-2" /> +254 123 456 789</p>
              <p className="flex items-center mb-4"><Mail className="mr-2" /> info@thechalkhouse.com</p>
              <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
              <p className="mb-1">Monday - Thursday: 2pm - 11pm</p>
              <p className="mb-1">Friday - Saturday: 12pm - 2am</p>
              <p>Sunday: 12pm - 10pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">The Chalkhouse</h2>
              <p>Nairobi's Premier Pool and Billiards Destination</p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#games" className="hover:text-red-500 transition-colors">Games</a></li>
                <li><a href="#challenges" className="hover:text-red-500 transition-colors">Challenges</a></li>
                <li><a href="#events" className="hover:text-red-500 transition-colors">Events</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 The Chalkhouse. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}