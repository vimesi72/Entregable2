import axios from "axios"
import { useEffect, useState } from "react"
import Loader from './components/Loader'
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  const gKelvin=273.15
  const gCelsius=32

  const [dataLocation, setDataLocation] = useState();

  const [cityOut, setCityOut] = useState("");

  function getDataApi(pos) {
    const apiKey = "3d4d4c76fb1582845f71adcd7204d89e";
    let api = "https://api.openweathermap.org/data/2.5/weather";
    (pos.coords === undefined ) ? api = `${api}?q=${pos}&appid=${apiKey}&lang=es`: 
    api = `${api}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}&lang=es`;
    axios.get(api)
         .then((res) => {
          setDataLocation({
          dataLocation: res.data,
          grades: {
            celsiu: res.data.main.temp - gKelvin,
            farenheit: 1.8 * (res.data.main.temp - gKelvin) + gCelsius,
                  },
                        });
                        })
         .catch((err) => console.error(err));
  }

  const getCoordinates = async (dataLocation = null) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    if (dataLocation) {
      getDataApi(dataLocation);
    } else {
      navigator.geolocation.getCurrentPosition(
        getDataApi,
        (err) => {
          console.error(err);
        },
        options
      );
    }
  };

  const getCityOut = (a) => {
    setCityOut(a);
  };

  useEffect(() => {
    getCoordinates(cityOut);
  }, [cityOut]);

  useEffect(() => {
    getCoordinates();
  }, []);
    
  return (
    <>
    {dataLocation ? (
        <div className="container">
          <Navbar valueOut={getCityOut} />
          <div>
            <Card dataLocation={dataLocation} />
          </div>
        </div>
      ) : (
        <Loader/>
      )}

    </>
  )
}

export default App
