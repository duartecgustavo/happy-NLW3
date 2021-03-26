import React from 'react';

import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 


import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />
                    <h2>
                        Escolha um orfanato no mapa.
                    </h2>
                    <p>
                        Muitas crianças estão esperando a sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>
                        São Paulo
                    </strong>
                    <span>
                        SP
                    </span>
                </footer>
            </aside>

            <MapContainer
                center={[-23.6142144,-46.468151]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;