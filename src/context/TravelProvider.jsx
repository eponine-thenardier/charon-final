import { useState, useEffect } from "react";
import TravelContext from "./TravelContext";
import { fetchAttractions, fetchWeatherTrends } from "../services/OpenAIService";


const TravelProvider = ({children}) => {
  const [city, setCity] = useState("")
  const [dates, setDates] = useState([])
  const [attractions, setAttractions] = useState("")
  const [weather, setWeather] = useState("")

  useEffect(() => {
    if (city) {
      const getAttractions = async () => {
        const result = await fetchAttractions(city)
        setAttractions(result)
      }
      getAttractions()
    }
  }, [city])
  
  useEffect(() => {
    if (city && dates.length === 2) {
      const getWeather = async () => {
        const result = await fetchWeatherTrends(city, dates)
        setWeather(result)
      }
      getWeather()
    }
  }, [city, dates])
  

  return (
    <TravelContext.Provider
      value={{
        city,
        setCity,
        dates,
        setDates,
        attractions,
        setAttractions,
        setWeather,
        weather,
      }}
    >
      {children}
    </TravelContext.Provider>
  )
};

export default TravelProvider;