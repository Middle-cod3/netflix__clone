import React, { useState, useEffect } from "react";
import axios from "./axios";

// Grab fetchUrl from requests.js and fetch url using axios and return the fetched data
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code which rusns based on a specific condition
  useEffect(() => {
    // If [] run once when the row laods, and dont run again.
    async function fetchData() {
      const headers = {
        "Content-Type": "application/json",
        "Accept-Language": "application/json",
        Authorization: "396bd0dab5c73b97d6826fb20954bf92",
        "Access-Control-Allow-Origin": "*",
      };

      const request=await axios
        .get(fetchUrl, { headers });
  setMovies(request.data.results);
        return request;

     
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}

export default Row;
