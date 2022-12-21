import React from "react";
import { useState } from "react";
import Footer from "./footer";
import Headerimage from "./Body";
import axios from "axios";

function App() {
  const [weatherInfo, setWeatherInfo] = useState();
  const [city, setcity] = useState('Paris');
  const [headerid, setheaderid] = useState(null);
  const [tempmin, settempmin] = useState();
  const [maxTemp, setmaxTemp] = useState();
  const [humidity, sethumidity] = useState();
  const [Pressure, setPressure] = useState();
  const [description, setdescription] = useState();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  //GET WEATEHER DATA USING AXIOS
  //-------------------------------------------------------------------------------------
  const apikey = "90a87f6525b6106c84e2a03b668a1bce";
  const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apikey}`;

  const getWeatherData = async () => {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    setWeatherInfo(data);
    console.log(weatherInfo?.list);
    makeinfoList();
  };
//-----------------------------------------------------------------------------------------------

//listing items we are gonna use
  const makeinfoList = () => {
    setheaderid(weatherInfo.list[0].weather[0].id);
    settempmin(weatherInfo.list[0].main.temp_min);
    setmaxTemp(weatherInfo.list[0].main.temp_max);
    sethumidity(weatherInfo.list[0].main.humidity);
    setPressure(weatherInfo.list[0].main.pressure);
    setdescription(weatherInfo.list[0].weather[0].description);
  };
  //_____________________________________________________________________________________

  return (
    <div className="App">
      <div className="searchBox">
        <input
          onChange={handleChange}
          value={message}
          type="text"
          placeholder="Type in a city name"
          className="text-city"
        />

        <button
          onClick={async (e) => {
            await getWeatherData();
            setcity(message);
          }}
          className="button"
        >
          {" "}
          search
        </button>
      </div>

      <div className="main">
        <div className="cloud">



          
          <Headerimage id={headerid} />

          <h3>{description}</h3>
          <h2>
            Temperature{" "}
            <span>
              {" "}
              {tempmin} &deg; to {maxTemp} &deg; C
            </span>
          </h2>
          <p>
            Humidity <span> {humidity} % </span> Pressure
            <span> {Pressure}</span>
          </p>
        </div>

        <div className="comp">
          {weatherInfo?.list.map((hourFrame, index) => (
            <>
              <Footer
                io={hourFrame.weather[0].id}
                time={hourFrame.dt_txt.split(" ")[1].split(":")[0]}
                temp={ Math.floor(hourFrame.main.temp - 273.15)}
               
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
