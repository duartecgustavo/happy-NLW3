import React from "react";
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import Leaflet, { latLng, LatLng } from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';

// import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "./components/sideBar/Sidebar";

import { FiPlus } from "react-icons/fi";
// import happyMapIcon from "../../components/Map/happMapIcon";
import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages.css';

export default function createOrphanages() {

  const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })


  function capturarLat () {
    const capturandoLat = document.getElementById('latitude').value;
    console.log(capturandoLat)
}
//   function capturarLgn () {
//     const capturandoLgn = document.getElementById('longitude').value;
//     console.log(capturandoLgn)
// }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" style={{ borderRadius: "20px" }}>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-23.5077632, -46.2979072]}
              style={{
                width: "100%",
                height: 280,
                borderRadius: "20px",
                marginBottom: "40px",
                border: "1px solid #D3E2E5"
              }}
              zoom={15}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </MapContainer>

            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"20px"}}>
              <div className="input-block" style={{ width: "49%", marginTop:"0" }}>
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude" onClick={capturarLat()} />
              </div>

              <div className="input-block" style={{ width: "49%", marginTop:"0" }}>
                <label htmlFor="longitude">Longitude</label>
                {/* <input id="longitude" onClick={capturarLgn()} /> */}
                <input id="longitude" />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          {/* <PrimaryButton type="submit">Confirmar</PrimaryButton> */}
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;