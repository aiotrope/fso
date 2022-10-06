import { useEffect, useState } from "react";
import axios from "axios";
export const WeatherInfo = ({ countryCapital }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&appid=${api_key}&units=metric`;

  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      let tempData = response.data.main; 
      let windData = response.data.wind; 
      let iconData = response.data.weather;
      console.log(response);
      setTemperature(tempData);
      setWind(windData);
      setIcon(iconData);
    });
  }, []);

  return (
    <section>
      <h3>Weather in {countryCapital}</h3>
      <div>
        temperature {temperature.temp} °Celcius
        <br />
        {icon.map((e, i) => {
          return (
            <div key={i}>
              <img
                src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`}
                alt={`${e.description} weather in ${countryCapital}`}
              />
            </div>
          );
        })}
        <br />
        wind {wind.speed} m/s
      </div>

      
    </section>
  );
};
