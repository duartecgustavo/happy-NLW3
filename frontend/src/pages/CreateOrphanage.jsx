import React, { useEffect, useState } from 'react';
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import Leaflet from 'leaflet';

// import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "./components/sideBar/Sidebar";

import { FiPlus } from "react-icons/fi";
// import happyMapIcon from "../../components/Map/happMapIcon";
import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages.css';


export default function CreateOrphanages() {

  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [open_on_weekend, setOpen_on_weekend] = useState(true);
  const [opening_hour, setOpening_hours] = useState('');

  const itensForm = [];
  function handleSubmit(event) {
    event.preventDefault();
    itensForm.pop()
    itensForm.push(
      {
        "name":`${name}`,
        "latitude": latitude,
        "longitude": longitude,
        "about": about,
        "instructions": instructions,
        "open_on_weekend": open_on_weekend,
        "opening_hour": opening_hour
      }
    
    );
    console.log(itensForm);

  }

  const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form" style={{ borderRadius: "20px" }}>
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

            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "20px" }}>
              <div className="input-block" style={{ width: "49%", marginTop: "0" }}>
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude"
                  onChange={event => setLatitude(event.target.value)}
                />
              </div>

              <div className="input-block" style={{ width: "49%", marginTop: "0" }}>
                <label htmlFor="longitude">Longitude</label>
                <input id="longitude"
                  onChange={event => setLongitude(event.target.value)}
                />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"
                value={name}
                onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="about" maxLength={300}
                onChange={event => setAbout(event.target.value)}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions"
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horários de atendimento</label>
              <input id="opening_hours"
                onChange={event => setOpening_hours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button"
                  className={open_on_weekend ? 'active' : ''}
                  onClick={() => setOpen_on_weekend(true)}>Sim</button>

                <button type="button"
                  className={!open_on_weekend ? 'active' : ''}
                  onClick={() => setOpen_on_weekend(false)}>Não</button>
              </div>
            </div>
          </fieldset>

          <button className='confirm-button' type='submit'>
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;