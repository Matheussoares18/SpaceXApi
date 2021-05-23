import React from 'react';

type Props = {
    labelTitle: string;
    Icon: any;
    labelContent: string;
};
const RockerInfoItem: React.FC<Props> = ({
    labelTitle,
    Icon,
    labelContent,
}: Props) => {
    return (
        <div className="flex flex-row mt-8">
            <Icon color="white" size={35} />
            <span
                className="ml-6 font-poppins text-white text-3xl"
                style={{ fontFamily: 'Open sans' }}
            >
                {labelTitle}:{' '}
                <span className="text-2xl font-sans font-bold">
                    {labelContent}
                </span>
            </span>
        </div>
    );
};

export default RockerInfoItem;
