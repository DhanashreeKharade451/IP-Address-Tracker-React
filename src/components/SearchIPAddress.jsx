import arrowIcon from "../assets/images/icon-arrow.svg";
import bgImage from "../assets/images/pattern-bg-desktop.png";
function SearchIpAddress() {
  return (
    <div
      className="bg-cover h-80"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
            <h1 className="text-center text-2xl">IP Address Tracker</h1>
            
      <div className="flex justify-center">
                <label htmlFor="searchIp"></label>
                
        <input className="border" type="search" id="searchIp" />
                
        <button className="h-10 w-10 bg-black border-none">
                    
          <img alt="Arrow Icon" src={arrowIcon} className="h-5 w-5" />
                  
        </button>
              
      </div>
          
    </div>
  );
}
export default SearchIpAddress;

// const searchIPAddress = ({onSearch }) => {

//     return(
//         <form>
//             <input type="text"
//             placeholder="Search for IP or domain"
//             value={input}

//             />
//             <button bg-black>Search</button>
//         </form>
//     );
// };

// export default searchIPAddress;
