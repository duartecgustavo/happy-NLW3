import React, { useEffect, useState } from 'react';
// import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Marker, TileLayer, MapContainer } from "react-leaflet";
import Leaflet from 'leaflet';
import axios from 'axios';


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
  const [orphanages, setOrphanages] = useState([]);
  console.log(orphanages);
  useEffect(() => {
    async function showOrphanages() {
      const response = await api.get('http://localhost:3333/orphanages')

      // console.log(response.data);

      setOrphanages(response.data);
    }
    showOrphanages();
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
            <h1>Lar das meninas</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

            {/* Teste Map */}
            {/* {orphanages.map((orph) => (
              <div key={orph.id}>
                <h1>{orph.latitude}</h1>
              </div>
            ))} */}

            <div className="map-container">
              <MapContainer
                interactive={false}
                center={[-27.2092052, -49.6401092]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {orphanages.map(orph => {
                  return (

                    <Marker key={orph.id} interactive={false} icon={happyMapIcon} position={[orph.latitude, orph.longitude]} />

                  )
                })}

              </MapContainer>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
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