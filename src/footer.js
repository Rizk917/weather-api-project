import "./App.css";
import mostcloud from "./components/img/mostlycloudy.svg";
import clear from "./components/img/clear.svg";
import drizzle from "./components/img/drizzle.svg";
import fog from "./components/img/fog.svg";
import partlycloudy from "./components/img/partlycloudy.svg";
import rain from "./components/img/rain.svg";
import snow from "./components/img/snow.svg";
import storm from "./components/img/storm.svg";

export default function Footer(props) {
  const image = () => {
    console.log(props.io);
    if (props.io < 300) {
      return (
        <div>
          {" "}
          <img src={storm} alt="mostly-clouded" className="smallImage" />
        </div>
      );
    } else if (props.io > 300 && props.io < 499) {
      return (
        <div>
          {" "}
          <img src={drizzle} alt="mostly-clouded" className="smallImage" />
        </div>
      );
    } else if (props.io > 499 && props.io < 599) {
      return (
        <div>
          {" "}
          <img src={rain} alt="mostly-clouded" className="smallImage" />{" "}
        </div>
      );
    } else if (props.io > 599 && props.io < 699) {
      return (
        <div>
          {" "}
          <img src={snow} alt="mostly-clouded" className="smallImage" />{" "}
        </div>
      );
    } else if (props.io > 699 && props.io < 799) {
      return (
        <div>
          {" "}
          <img src={fog} alt="mostly-clouded" className="smallImage" />{" "}
        </div>
      );
    } else if (props.io === 800) {
      return (
        <div>
          {" "}
          <img src={clear} alt="mostly-clouded" className="smallImage" />{" "}
        </div>
      );
    } else if (props.io === 801) {
      return (
        <div>
          {" "}
          <img
            src={partlycloudy}
            alt="mostly-clouded"
            className="smallImage"
          />{" "}
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <img
            src={mostcloud}
            alt="mostly-clouded"
            className="smallImage"
          />{" "}
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <div>{props.time}:00</div>
        <div>{image()}</div>

        <div>{props.temp}&deg;C</div>
      </div>
    </div>
  );
}
