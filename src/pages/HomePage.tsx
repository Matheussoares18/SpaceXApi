import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { Launches } from '../interfaces/Launches';
import LaunchCard from '../components/LaunchCard';
import api from '../api';

const HomePage: React.FC = () => {
    const [launches, setLaunches] = useState<Launches[]>();
    useEffect(() => {
        api.get('/launches').then((res: AxiosResponse<Launches[]>) => {
            setLaunches(res.data);
        });
    }, []);

    return (
        <div className="w-2/3 m-8 min-w-min">
            <div className="space-y-8  w-full">
                {launches &&
                    launches?.length > 0 &&
                    launches?.map(item => (
                        <LaunchCard launch={item} key={item.id} />
                    ))}
            </div>
        </div>
    );
};

export default HomePage;
