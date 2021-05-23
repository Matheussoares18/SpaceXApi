import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {
    FaTag,
    FaBuilding,
    FaLanguage,
    FaMoneyBillWaveAlt,
    FaFighterJet,
    FaPause,
    FaRegNewspaper,
} from 'react-icons/fa';

import api from '../api';

import '../css/RocketDetails.css';
import { Rocket } from '../interfaces/Rocket';
import RockerInfoItem from './RockerInfoItem';

type Props = {
    id: string;
};

const RocketInfos: React.FC<Props> = ({ id }: Props) => {
    const [rocketInfos, setRocketInfos] = useState<Rocket | null>(null);

    useEffect(() => {
        api.get(`/rockets/${id}`)
            .then((res: AxiosResponse<Rocket>) => {
                setRocketInfos(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
    return (
        <>
            <div className="container-border w-full pt-16 mt-20 pb-16 flex flex-row justify-between">
                <img
                    src={rocketInfos?.flickr_images[0]}
                    alt=""
                    className="w-2/5 h-84 shadow-2xl"
                    data-aos="fade-right"
                    data-aos-duration="3800"
                />
                <div className="flex flex-col p-20 items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                        <RockerInfoItem
                            Icon={FaTag}
                            labelTitle="Nome"
                            labelContent={
                                rocketInfos?.name ? rocketInfos?.name : ''
                            }
                        />

                        <RockerInfoItem
                            Icon={FaBuilding}
                            labelTitle="Empresa"
                            labelContent={
                                rocketInfos?.company ? rocketInfos?.company : ''
                            }
                        />
                        <RockerInfoItem
                            Icon={FaLanguage}
                            labelTitle="País"
                            labelContent={
                                rocketInfos?.country ? rocketInfos?.country : ''
                            }
                        />
                        <RockerInfoItem
                            Icon={FaMoneyBillWaveAlt}
                            labelTitle="Custo por lançamento"
                            labelContent={
                                rocketInfos?.cost_per_launch
                                    ? rocketInfos?.cost_per_launch.toLocaleString(
                                          'pt-br',
                                          {
                                              style: 'currency',
                                              currency: 'BRL',
                                          },
                                      )
                                    : ''
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="w-full pt-16 mt-20 pb-16 flex flex-row justify-between">
                <div className="flex flex-col items-center">
                    <RockerInfoItem
                        Icon={FaPause}
                        labelTitle="Ativo"
                        labelContent={rocketInfos?.active ? 'Sim' : 'Não'}
                    />
                    <RockerInfoItem
                        Icon={FaFighterJet}
                        labelTitle="Primeiro voo"
                        labelContent={
                            rocketInfos?.first_flight
                                ? rocketInfos?.first_flight
                                : ''
                        }
                    />
                    <RockerInfoItem
                        Icon={FaRegNewspaper}
                        labelTitle="Descrição"
                        labelContent={
                            rocketInfos?.description
                                ? rocketInfos?.description
                                : ''
                        }
                    />
                </div>

                <img
                    alt=""
                    src={rocketInfos?.flickr_images[1]}
                    className="w-2/5 h-84 shadow-2xl"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-once="false"
                />
            </div>
        </>
    );
};

export default RocketInfos;
