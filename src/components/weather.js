import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { lightBlue } from "@mui/material/colors";

import { get_sun_and_moon } from "@/axios/get_sun_and_moon";
import { get_reverse_geolocation } from "@/axios/get_reverse_geolocation";
import Link from "next/link";
import { get_weather_data } from "@/axios/get_weather_data";
import translateDatetime from "@/utils/translate_date-time";
import remove_suffix from "@/utils/remove_suffix";
import weatherDescription from "@/utils/fetch_weather_description";

export default function Weather() {
  const [sunrise, setSunrise] = useState({});
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [sunriseLoading, setSunriseLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getUserCoordinates = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const ipGeolocation = await response.json();

        if (ipGeolocation) {
          const locationInfo = {
            city: ipGeolocation.city,
            country: ipGeolocation.country,
            postCode: ipGeolocation.zip,
            lat: ipGeolocation.lat,
            lon: ipGeolocation.lon,
          };
          setLocation(locationInfo);
          setLocationLoading(false);
        }
      } catch (error) {
        setHasError(true);
      }
    };
    getUserCoordinates();

    if (!locationLoading) {
      const getWeather = async () => {
        if (location) {
          const lat = location.lat;
          const lon = location.lon;

          const weatherResponse = await get_weather_data(lat, lon);
          if (weatherResponse) {
            // console.log(weatherResponse);
            const weatherDetails = {
              weatherUpdated: translateDatetime(
                weatherResponse.data.properties.meta.updated_at
              ),
              currentTemp:
                weatherResponse.data.properties.timeseries[0].data.instant
                  .details.air_temperature,
              forecast:
                weatherResponse.data.properties.timeseries[0].data.next_12_hours
                  .summary,
              symbol_code:
                weatherResponse.data.properties.timeseries[0].data.next_12_hours
                  .summary.symbol_code,
            };
            setWeather(weatherDetails);
            setWeatherLoading(false);
          }
        }
      };
      getWeather();
    }
    if (!locationLoading) {
      const getSunrise = async () => {
        const lat = location.lat;
        const lon = location.lon;
        const response = await get_sun_and_moon(lat, lon);
        if (response) {
          const sunriseData = {
            sunrise: response.data.location.time[0].sunrise.time.substr(11, 8),
            sunset: response.data.location.time[0].sunset.time.substr(11, 8),
          };
          setSunrise(sunriseData);
        }
        setSunriseLoading(false);
      };
      getSunrise();
    }
  }, [locationLoading, location]);

  const sky = lightBlue[50];
  if (sunriseLoading || weatherLoading || locationLoading)
    return (
      <Typography variant="caption">... Weather data is loading ...</Typography>
    );

  //   weather
  const code_no_suffix = remove_suffix(weather.symbol_code);
  const weatherIcon = require(`../assets/images/weathericon/png/${weather.symbol_code}.png`);
  const description = weatherDescription(code_no_suffix);

  const containerBoxStyles = {
    width: "100%",
    border: `1px solid ${sky} `,
    padding: ".5rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    borderRadius: "12px",
    color: "gray",
    bgcolor: "white",
  };
  return (
    <Grid
      container
      xs={12}
      md={6}
      justifyContent={"center"}
      sx={containerBoxStyles}
    >
      <Grid sm={2}>
        <Image src={weatherIcon} width={50} height={50} alt="weather icon" />
      </Grid>

      <Grid sm={5}>
        <Typography variant="h6">
          <span>{description}, </span>
          {weather.currentTemp}°C
        </Typography>
        <Typography variant="body2">
          {location.city}, {location.postCode}, {location.country}
        </Typography>
      </Grid>

      <Grid sm={5}>
        <Typography variant="body2" sm={5}>
          sunrise: {sunrise.sunrise}
        </Typography>
        <Typography variant="body2" sm={5}>
          sunset: {sunrise.sunset}
        </Typography>
      </Grid>

      <Grid sm={12} sx={{ textAlign: "center", marginTop: ".5rem" }}>
        <Typography variant="caption">
          updated at: {weather.weatherUpdated}
        </Typography>
        <br />{" "}
        <Typography variant="caption">
          <Link href="https://api.met.no/license_data.html">
            Based on data from MET Norway
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
