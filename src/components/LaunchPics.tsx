import React from 'react';
import { LaunchDetails } from '../interfaces/Launches';

// import { Container } from './styles';
interface Props {
    launch: LaunchDetails;
}
const LaunchPics: React.FC<Props> = ({ launch }: Props) => {
    return (
        <main className="flex flex-col items-center w-full h-full ">
            <div className="w-full h-full h-5/6 pt-10 ">
                <iframe
                    src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
                    title="launch-video"
                    className=" w-full shadow-2xl"
                    style={{ height: '800px' }}
                />
            </div>
        </main>
    );
};

export default LaunchPics;
