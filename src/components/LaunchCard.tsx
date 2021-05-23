import React from 'react';
import { useHistory } from 'react-router-dom';
import example from '../assets/example.jpg';
import { Launches } from '../interfaces/Launches';

interface Props {
    launch: Launches;
}

const LaunchCard: React.FC<Props> = ({ launch }: Props) => {
    const history = useHistory();
    return (
        <div className="flex flex-col md:flex-row md:w-full bg-purple-200 rounded-lg shadow-sm h-auto gap-x-4 p-6 cursor-pointer">
            <img
                src={
                    launch.links.patch.large
                        ? launch.links.patch.large
                        : example
                }
                alt=""
                className="w-full md:w-1/6 h-full rounded-full h-24 w-24 flex items-center justify-center h-24 w-24 flex items-center justify-center md:rounded-l-lg h-auto"
            />
            <div className="flex flex-col py-2 py-4 md:py-0 w-full">
                <span className="font-poppins text-2xl font-semibold text-purple-600">
                    {launch.name}
                </span>
                <p className="font-sans pt-4 text-purple-400 italic w-full">
                    {launch.details}
                </p>
                <div className="flex flex-row justify-between w-full mt-2 items-center">
                    <span className="font-sans text-purple-800">
                        Launch date: {launch.static_fire_date_utc}
                    </span>
                    <button
                        type="button"
                        className="mr-0 md:mr-4 rounded-full py-2 px-4 w-48 h-8 bg-purple-600 hover:bg-purple-400 bg-opacity-100 text-xs text-white font-sans"
                        onClick={() =>
                            history.push(`/launch-details/${launch.id}`)
                        }
                    >
                        See more informations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LaunchCard;
