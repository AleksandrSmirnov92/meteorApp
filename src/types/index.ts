import { Dispatch, SetStateAction } from "react";
export interface ResponceData {
  absolute_magnitude_h: number;
  close_approach_date: [
    {
      close_approach_date: string;
      close_approach_date_full: string;
      epoch_date_close_approach: number;
      miss_distanse: {
        astronomical: string;
        killometers: string;
        lunar: string;
        miles: string;
      };
      orbiting_body: string;
      relative_velocity: {
        kilometers_per_hour: string;
        kilometers_per_second: string;
        miles_per_hour: string;
      };
    }
  ];
  feet: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  kilometers: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  meters: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  miles: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}
export interface Asteroid {
  id: string;
  name: string;
  approach_date: string;
  diameter: number;
  distanse: {
    killometers: string;
    lunar: string;
  };
  active?: boolean;
}
export interface ContentProps {
  data: Asteroid[];
}
export interface CardProps {
  data: Asteroid;
  active_link_distance?: boolean;
  addAsteroidInBasket?: (asteroid: string) => void;
  basket?: Asteroid[] | Storage | string[];
  btnActive: boolean;
}
export interface RightbarProps {
  basket: Asteroid[] | Storage | string[];
}
