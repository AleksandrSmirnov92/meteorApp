import style from "./main.module.css";
import store from "../../store/store";
import { addAsteroids } from "@/store/asteroidsSlice";
import { Content } from "../Content/Content";
import { Header } from "../Header/Header";
import { ResponceData } from "../../types/index";

let responceData: ResponceData[] = [
  {
    absolute_magnitude_h: 17.5,
    close_approach_date: [
      {
        close_approach_date: "2023-08-22",
        close_approach_date_full: "2023-Aug-22 09:21",
        epoch_date_close_approach: 1692696060000,
        miss_distanse: {
          astronomical: "0.11002284",
          killometers: "16459697.73041508",
          lunar: "42.800224476",
          miles: "10227581.910404904",
        },
        orbiting_body: "Earch",
        relative_velocity: {
          kilometers_per_hour: "65510.8145462977",
          kilometers_per_second: "18.1974464851",
          miles_per_hour: "40705.8725162815",
        },
      },
    ],
    feet: {
      estimated_diameter_max: 6166.3053954643,
      estimated_diameter_min: 2757.6556068564,
    },
    kilometers: {
      estimated_diameter_max: 1.8794898244,
      estimated_diameter_min: 0.8405334021,
    },
    meters: {
      estimated_diameter_max: 1879.4898243938,
      estimated_diameter_min: 840.5334020728,
    },
    miles: {
      estimated_diameter_max: 1.1678604717,
      estimated_diameter_min: 0.5222830806,
    },
    id: "2004769",
    is_potentially_hazardous_asteroid: true,
    is_sentry_object: false,
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/2004769?api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo",
    },
    name: "4769 Castalia (1989 PB)",
    nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2004769",
    neo_reference_id: "2004769",
  },
];

const getData = async () => {
  // fetch .... newObject
  return responceData.map((item) => {
    return {
      id: item.id,
      name: item.name,
      approach_date: item.close_approach_date[0].close_approach_date,
      diameter: item.meters.estimated_diameter_max,
      distanse: {
        killometers: item.close_approach_date[0].miss_distanse.killometers,
        lunar: item.close_approach_date[0].miss_distanse.lunar,
      },
    };
  });
};
export const Main = async () => {
  let data = await getData();
  store.dispatch(addAsteroids(data));
  // console.log(store.getState());
  return (
    <div className={style.main__container}>
      <Header />
      <Content data={data} />
    </div>
  );
};
