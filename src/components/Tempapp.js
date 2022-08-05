import React, { useEffect, useState } from "react";
import "./css/style.css"

// import "../hello"
const Tempapp = () => {

    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + https://w.wallhaven.cc/full/4d/wallhaven-4dwrom.jpg + ')',
    // };
    const [city, setcity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=98e8773de906301db846f0ba58a405ef`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setcity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (

        <div >
            <div className="box">
                <div className="inputData">
                    <input type="search"  className="inputField" id="" onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>
                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <div className="location">
                                    <i className="fas fa-street-view" ></i>{search}
                                </div>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Tempapp;