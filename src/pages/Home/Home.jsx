import { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import Logo from "../../assets/logo.svg";
import Logo1 from "../../assets/logo1.svg";
import salon from "../../assets/salon.svg";
import Navbar from "../../components/common/Navbar";
import Services from '../Services/Services'
import Footer from "../../components/common/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showLogin, setShowLogin] = useState(false); // State to control visibility of login button

  // Sample data for salon and makeup services
  const locations = [
    { name: "Asansol", logo: Logo },
    { name: "Bengaluru", logo: Logo },
    { name: "Bhubaneswar", logo: Logo },
    { name: "Burdwan", logo: Logo },
    { name: "Darbhanga", logo: Logo },
    { name: "Durgapur", logo: Logo },
    { name: "Gurgaon", logo: Logo },
    { name: "Kolkata", logo: Logo },
    { name: "Mumbai", logo: Logo },
    { name: "Muzaffarpur", logo: Logo },
    { name: "Nashik", logo: Logo },
    { name: "New Delhi", logo: Logo },
    { name: "Noida", logo: Logo },
    { name: "Patna", logo: Logo },
    { name: "Pune", logo: Logo },
    { name: "Ranchi", logo: Logo },
    { name: "Sitamarhi", logo: Logo },
    { name: "Surat", logo: Logo },
    { name: "Vadodara", logo: Logo },
  ];

  // Function to filter locations based on search term
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredLocations = locations.filter((location) =>
      location.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredLocations);
  };

  // Function to handle selection of search suggestion
  const handleSuggestionClick = (location) => {
    setSearchTerm(location.name);
    setSearchResults([]); // Clear search suggestions
  };

  // Function to toggle visibility of login button
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="bg-pink3 h-screen flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-4xl font-alata font-bold px-5 md:px-10 text-[#263238] max-w-[560px] text-">
              Elevate Your Beauty with <span className="text-pink1">Ladyfair</span>, Where Elegance Meets Excellence
            </p>
            <p className="text-xl font-alata font-normal px-5 md:px-10 text-[#455A64] max-w-[560px] text-">
              Discover unparalleled beauty treatments and personalized services
              at Ladyfair. Experience luxury and transformation with every
              visit.
            </p>
          </div>
          <img src={Logo1} className="h-auto md:h-[500px] w-full md:w-auto" />
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="relative w-full max-w-[400px]">
          <input
            type="text"
            className="rounded-md h-14 w-full max-w-[400px] py-2 pl-12 pr-8 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink3"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <BiSearch className="absolute left-3 top-3 text-gray-400" size={28}/>
          <ul className="absolute w-full bg-white shadow-lg rounded-md mt-2 overflow-hidden">
            {searchResults.map((location, index) => (
              <li 
                key={index} 
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between space-x-2" 
                onClick={() => handleSuggestionClick(location)}
              >
                <span>{location.name}</span>
                <img src={location.logo} alt={location.name} className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
        <button className={`ml-3 bg-pink1 text-white font-bold px-6 py-2 rounded-md ${showLogin ? 'hidden' : 'block'}`} onClick={toggleLogin}>Login</button>
      </div>

      <Services/>
      <Footer/>
    </div>
  );
}
