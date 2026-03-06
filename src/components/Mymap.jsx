import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";



function MyMap({ lat, lng }) {
  const position = [lat, lng];

  return (
    <div id = "map">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer 
        attribution='© OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />
      </MapContainer>
    </div>
  );
}

// // Fix default marker icon issue in React
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
// iconRetinaUrl: markerIcon2x,
// iconUrl: markerIcon,
// shadowUrl: markerShadow,
// });

// function MyMap() {
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; OpenStreetMap contributors"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           Hello from React Leaflet!
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

export default MyMap;
