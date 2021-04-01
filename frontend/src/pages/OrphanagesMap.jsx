import React, { useEffect, useState } from 'react';

import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import api from '../services/api'

import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [48, 58],
    iconAnchor: [29, 68],
    popupAnchor: [165, 10]
})

function OrphanagesMap() {

    
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
                center={[-23.6142144, -46.468151]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={mapIcon}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={40} className="map-popup">
                                Lar das Meninas
                            <Link to={`/orphanage/${orphanage.id}`} >
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}

                )

            </MapContainer>

            <Link to="/createOrphanage" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;