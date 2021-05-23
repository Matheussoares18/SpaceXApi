import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import LaunchPics from '../components/LaunchPics';
import RocketLaunchBaseInfo from '../components/RocketLaunchBaseInfo';
import RocketInfos from '../components/RocketInfos';
import { LaunchDetails } from '../interfaces/Launches';

// import { Container } from './styles';

interface PageProps {
    id: string;
}
const LaunchDetailsPage: React.FC = () => {
    const [launchDetails, setLauchDetails] =
        useState<LaunchDetails | null>(null);
    const pageParams = useParams<PageProps>();
    useEffect(() => {
        if (pageParams.id) {
            api.get(`/launches/${pageParams.id}`).then(
                (res: AxiosResponse<LaunchDetails>) => {
                    setLauchDetails(res.data);
                    console.log(res.data);
                },
            );
        }
    }, []);
    return (
        <div className="flex flex-col items-center w-full h-full px-12 ">
            {launchDetails && <LaunchPics launch={launchDetails} />}
            {launchDetails && <RocketInfos id={launchDetails.rocket} />}
            {launchDetails && (
                <RocketLaunchBaseInfo lauchpad={launchDetails.launchpad} />
            )}
        </div>
    );
};

export default LaunchDetailsPage;
