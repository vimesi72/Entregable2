import { useState} from "react";

const Card = ({ dataLocation }) => {

  console.log(dataLocation)
  // Estado para cambiar de grados celcius a farenheit
  const [change, setChange] = useState(false);
 
  // fcuntion para setear el estado change
  function handleClick  () {
    setChange(!change);
  } 

  return (
    <>
      <div className="card">
        <div className="card-primary">
          <h1>
            {
              change ? dataLocation.grades.farenheit.toFixed() +"ºF" : dataLocation.grades.celsiu.toFixed() +"ºC" 
            }
          </h1>
          <p>Humedad: {dataLocation.dataLocation?.main.humidity}%</p>
          <p>Viento: {dataLocation.dataLocation?.wind.speed} m/s</p>
          <h2>{dataLocation.dataLocation?.name}, {dataLocation.dataLocation?.sys.country}</h2>
        </div>
        <div>
          <img
            src={dataLocation.dataLocation.weather?.map((item) =>
               item.icon === "01d"
                ? "01d.svg"
                : item.icon === "01n" 
                ? "01n.png"
                : item.icon === "02d" 
                ? "2.svg"
                : item.icon === "02n" 
                ? "02n.png"
                : item.icon === "03d" || item.icon === "03n"
                ? "3.svg"
                : item.icon === "04d" || item.icon === "04n"
                ? "4.svg"
                : item.icon === "09d" || item.icon === "09n"
                ? "6.svg"
                : item.icon === "10d" || item.icon === "10n"
                ? "5.svg"
                : item.icon === "11d" || item.icon === "11n"
                ? "9.svg"
                : item.icon === "13d" || item.icon === "13n"
                ? "7.svg"
                : "8.svg"
            )}
            alt={dataLocation.dataLocation.weather?.map((item) => item.description)}
          />
          <h3>{dataLocation.dataLocation.weather?.map((item) => item.description)}</h3>
        </div>
      </div>
      <div className="card-btn">
        <button onClick={handleClick}>
          {change ? "Cambiar a °C" : "Cambiar a °F"}
        </button>
      </div>
    </>
  );
};

export default Card;
