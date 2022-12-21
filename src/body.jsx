import "./App.css";
import mostcloud from "./components/img/mostlycloudy.svg";
import clear from "./components/img/clear.svg";
import drizzle from "./components/img/drizzle.svg";
import fog from "./components/img/fog.svg";
import partlycloudy from "./components/img/partlycloudy.svg";
import rain from "./components/img/rain.svg";
import snow from "./components/img/snow.svg";
import storm from "./components/img/storm.svg";
export default function Body(props) {
  const image = () => {
    console.log(props.id);
    if (props.id < 300) {
      return (
        <div>
          {" "}
          <img src={storm} alt="mostly-clouded" className="bigImage" />
        </div>
      );
    } else if (props.id >= 300 && props.id <= 499) {
      return (
        <div>
          {" "}
          <img src={drizzle} alt="mostly-clouded" className="bigImage" />
        </div>
      );
    } else if (props.id >= 499 && props.id <= 599) {
      return (
        <div>
          {" "}
          <img src={rain} alt="mostly-clouded" className="bigImage" />{" "}
        </div>
      );
    } else if (props.id >= 599 && props.id <= 699) {
      return (
        <div>
          {" "}
          <img src={snow} alt="mostly-clouded" className="bigImage" />{" "}
        </div>
      );
    } else if (props.id >= 699 && props.id <= 799) {
      return (
        <div>
          {" "}
          <img src={fog} alt="mostly-clouded" className="bigImage" />{" "}
        </div>
      );
    } else if (props.id === 800) {
      return (
        <div>
          {" "}
          <img src={clear} alt="mostly-clouded" className="bigImage" />{" "}
        </div>
      );
    } else if (props.id >= 801 && props.id <= 805) {
      return (
        <div>
          {" "}
          <img
            src={partlycloudy}
            alt="mostly-clouded"
            className="bigImage"
          />{" "}
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <img src={mostcloud} alt="mostly-clouded" className="bigImage" />{" "}
        </div>
      );
    }
  };

  // const textall=()=>{
  //   <><h3>{props.desc}</h3><h2>
  //   Temperature{" "}
  //   <span>
  //     {" "}
  //     {props.mintemp} &deg; to {props.maxt} &deg; C
  //   </span>
  // </h2><p>
  //     Humidity <span> {props.hu} % </span> Pressure
  //     <span> {props.pres}</span>
  //   </p></>
  // }

  return <div>{image()}</div>;
}
