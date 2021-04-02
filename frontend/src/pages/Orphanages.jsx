import React, { useEffect, useState } from 'react';
// import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Marker, TileLayer, MapContainer } from "react-leaflet";
import Leaflet from 'leaflet';
import { useParams } from 'react-router-dom'

import mapMarkerImg from '../images/map-marker.svg'

// import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "./components/sideBar/Sidebar";

import api from '../services/api'

import '../styles/pages/createOrphanage.css';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {

  const { id } = useParams();

  const [orphanage, setOrphanage] = useState([]);
  const [name, setName] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [about, setAbout] = useState([]);
  const [open_on_weekend, setOpen_on_weekend] = useState([]);
  const [opening_hour, setOpening_hour] = useState([]);

  useEffect(() => {
    async function showOrphanage() {
      const response = await api.get(`http://localhost:3333/orphanages/${id}`)
      // console.log(response.data);

      setOrphanage(response.data);
      setName(response.data[0].name)
      setLatitude(response.data[0].latitude)
      setLongitude(response.data[0].longitude)
      setAbout(response.data[0].about)
      setOpen_on_weekend(response.data[0].open_on_weekend)
      setOpening_hour(response.data[0].opening_hour)
    }
    showOrphanage();
  }, []);

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>{name}</h1>
            <h1>{latitude}</h1>
            <h1>{longitude}</h1>
            <p>{about}</p>

            <div className="map-container">
              {orphanage.map(orph => {
                return (
                  <MapContainer
                    interactive={false}
                    center={[orph.latitude, orph.longitude]}
                    zoom={16}
                    style={{ width: '100%', height: 280 }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker key={orph.id} interactive={false} icon={happyMapIcon} position={[orph.latitude, orph.longitude]} />
                  </MapContainer>
                )
              })}
              <footer>
                <a target="_blanck" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {opening_hour}
              </div>

              {
                open_on_weekend == "true" ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                Atendemos de finais de semana
                  </div>
                ) : (
                  <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos de finais de semana
              </div>
                )
              }
            </div>

            {/* <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton> */}
          </div>
        </div>
      </main>
    </div>
  );
}