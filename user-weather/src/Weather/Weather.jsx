import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import { useEffect, useState } from "react";

const weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );
      const json = await response.json();
      setData(json);
    };

    fetchWeather();
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="search" />
        <img src={search_icon} alt="" />
      </div>

      <img src={clear_icon} alt="" className="weather-icon" />
      <div>
        {!data ? (
          <p>loding ....</p>
        ) : (
          <div className="info-columns">
            <p>
              <strong>Latitude:</strong> {data.latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {data.longitude}
            </p>
            <p>
              <strong>Timezone:</strong> {data.timezone}
            </p>

            <h3 style={{ marginTop: "10px" }}>Next Hours</h3>
            <div className="column-list">
              {data.hourly.time.slice(0, 5).map((time, i) => (
                <div key={i} className="column-item">
                  <p>
                    <strong>Time:</strong> {time}
                  </p>
                  <p>
                    <strong>Temp:</strong> {data.hourly.temperature_2m[i]}°C
                  </p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default weather;
