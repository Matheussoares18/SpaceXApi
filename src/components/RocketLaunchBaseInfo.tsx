import React, { useEffect, useState } from 'react';
import '../css/RocketDetails.css';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FaRocket, FaFighterJet } from 'react-icons/fa';
import mapPin from '../assets/pin.svg';
import api from '../api';
import RockerInfoItem from './RockerInfoItem';

interface Position {
    lng: number;
    lat: number;
}
type Props = {
    lauchpad: string;
};
const RocketLaunchBaseInfo: React.FC<Props> = ({ lauchpad }: Props) => {
    const initialPosition = { lat: -9.0477206, lng: -167.7431292 };

    const mapPinIcon = Leaflet.icon({
        iconUrl: mapPin,
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2],
    });

    const [position, setPosition] = useState<any>(null);

    const [launchPadInfos, setLaunchPadInfos] = useState<any>();

    useEffect(() => {
        api.get(`/launchpads/${lauchpad}`).then(res => {
            console.log(res.data);
            setLaunchPadInfos(res.data);
            setPosition({
                lat: -res.data.latitude,
                lng: -res.data.longitude,
            });
        });
    }, [lauchpad]);

    return (
        <div
            className="container-border w-full pt-16 mt-20 pb-16 flex flex-col justify-between"
            style={{ height: '1000px' }}
        >
            <div className="w-full flex flex-row justify-center">
                <h1
                    style={{ fontFamily: 'Poppins' }}
                    className="text-5xl font-semibold text-white mb-16"
                >
                    Base de lançamento
                </h1>
            </div>
            {position != null && (
                <Map
                    center={position}
                    zoom={2}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                    />

                    <Marker
                        icon={mapPinIcon}
                        position={[position.lat, position.lng]}
                    />
                </Map>
            )}
            <div className="space-y-4">
                <div className="w-full flex flex-col items-start">
                    <RockerInfoItem
                        Icon={FaFighterJet}
                        labelTitle="Nome da base"
                        labelContent={
                            launchPadInfos?.full_name
                                ? launchPadInfos?.full_name
                                : ''
                        }
                    />
                    <RockerInfoItem
                        Icon={FaRocket}
                        labelTitle="Lançamentos bem-sucedidos"
                        labelContent={
                            launchPadInfos?.launch_successes
                                ? launchPadInfos?.launch_successes
                                : ''
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default RocketLaunchBaseInfo;
