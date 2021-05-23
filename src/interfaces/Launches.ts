export interface Launches {
    auto_update: boolean;
    capsules: any[];
    cores: any[];
    crew: any[];
    date_local: string;
    date_precision: string;
    date_unix: number;
    date_utc: string;
    details: string;
    failures: any[];
    fairings: {
        reused: false;
        recovery_attempt: false;
        recovered: false;
        ships: any;
    };
    flight_number: number;
    id: string;
    launch_library_id: any;
    launchpad: string;
    links: {
        patch: {
            small: string;
            large: string;
        };
        reddit: any;
        flickr: any;
        presskit: any;
        webcast: string;
    };
    name: string;
    net: boolean;
    payloads: any[];
    rocket: string;
    ships: any[];
    static_fire_date_unix: number;
    static_fire_date_utc: string;
    success: boolean;
    tbd: boolean;
    upcoming: boolean;
    window: number;
}

export interface LaunchDetails {
    fairings: any;
    links: {
        patch: {
            small: string;
            large: string;
        };
        reddit: {
            campaign: string;
            launch: string;
            media: string;
            recovery: any;
        };
        flickr: {
            small: [];
            original: String[];
        };
        presskit: string;
        webcast: string;
        youtube_id: string;
        article: string;
        wikipedia: string;
    };
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    tdb: boolean;
    net: boolean;
    window: number;
    rocket: string;
    success: true;
    failures: any[];
    details: string;
    crew: any[];
    ships: any[];
    capsules: String[];
    payloads: String[];
    launchpad: string;
    auto_update: boolean;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: [
        {
            core: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landing_attempt: boolean;
            landing_success: boolean;
            landing_type: string;
            landpad: string;
        },
    ];
    id: string;
}
