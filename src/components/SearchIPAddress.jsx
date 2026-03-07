import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import bgImage from "../assets/images/pattern-bg-desktop.png";

const SearchIPAddress = ({ fetchIp }) => {
  const [query, setQuery] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchIp(query);
    setQuery("");
  };

  return (
    <div
      className="bg-cover h-80"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "35vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "2rem",
        textAlign: "center",
        justifyContent: "center",
        
      }}
    >
      <form id="searchForm" onSubmit={handleSubmit}>
        <h1>IP Address Tracker</h1>

        <div className="searchbox">
          <input
            type="text"
            id="searchInput"
            placeholder="Search for IP address or domain"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" id="submit">
            <img alt="Arrow Icon" src={arrowIcon} className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchIPAddress;
