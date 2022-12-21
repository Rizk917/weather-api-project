import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import cloudyWeather from "./components/mostlycloudy.svg";
import cleaWeather from "./components/clear.svg";

//=========================
function App() {
  const [weatherInfo, setWeatherInfo] = useState();
  // const [city, setcity] = useState("Paris");

  const [cityValue, setcityValue] = useState("");

  // to get data from api using axios
  const apikey = "90a87f6525b6106c84e2a03b668a1bce";
  const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${"lena"}&cnt=8&units=metric&appid=${apikey}`;

  const getWeatherapi = async (cityValue) => {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    setWeatherInfo(data);
    console.log(weatherInfo?.list);
  };

  const handleChange = (event) => {
    setcityValue(event.target.value);
    console.log("value is:", event.target.value);
  };
  // ---------------------------------------------------------

  
  return (
    <div className="App">
      <form className="searchBox">
        <input
          type="text"
          onChange={handleChange}
          value={cityValue}
          placeholder="Type in a city name"
          className="text-city"
        />
        <button
          type="submit"
          onClick={async (e) => {
            await getWeatherapi(cityValue);
          }}
          className="button"
        >
          Get Weather{" "}
        </button>
      </form>

      <div className="cloud">
        <img src={cloudyWeather} alt="mostly-clouded" className="bigImage" />

        <h3>Overcast clouds</h3>
        <h2>
          Temperature <span> 10 &deg; to 11 &deg; C</span>
        </h2>
        <p>
          Humidity <span> 78% </span> Pressure
          <span> 1008.48</span>
        </p>
      </div>

      <div className="small">
        <div className="time">
          <div>
            <div>03:00</div>
            <div>
              <img
                src={cloudyWeather}
                alt="mostly-clouded"
                className="smallImage"
              />
            </div>

            <div>8&deg;C</div>
          </div>

          <div>
            <div>06:00</div>
            <div>
              <img
                src={cloudyWeather}
                alt="mostly-clouded"
                className="smallImage"
              />
            </div>

            <div>9&deg;C</div>
          </div>

          <div>
            <div>09:00</div>
            <div>
              <img src={cleaWeather} alt="clear" className="smallImage" />
            </div>

            <div>14 &deg; C</div>
          </div>

          <div>
            <div>12:00</div>
            <div>
              <img src={cleaWeather} alt="clear" className="smallImage" />
            </div>

            <div>17 &deg; C</div>
          </div>

          <div>
            <div>15:00</div>
            <div>
              <img src={cleaWeather} alt="clear" className="smallImage" />
            </div>

            <div>18 &deg; C</div>
          </div>
          <div>
            <div>18:00</div>

            <div>
              <img src={cleaWeather} alt="clear" className="smallImage" />
            </div>

            <div>16 &deg; C</div>
          </div>
          <div>
            <div>21:00</div>
            <div>
              <img
                src={cloudyWeather}
                alt="mostly-clouded"
                className="smallImage"
              />
            </div>

            <div>13 &deg; C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



