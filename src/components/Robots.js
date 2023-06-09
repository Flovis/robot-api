import React, { useCallback, useMemo } from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Input } from "antd";



const Robots = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("").then("").catch();
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    const handleInput = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const searchedData = useMemo(() => {
        return search.length >= 3
            ? data.filter((a) =>
                  a.name.toLowerCase().includes(search.toLowerCase())
              )
            : data;
    }, [search, data]);
    // const searchedData =
    //     search.length >= 3
    //         ? data.filter((a) => {
    //               return a.name.toLowerCase().includes(search.toLowerCase());
    //           })
    //         : data; 

    return (
        <div>
            <div className="robot-container">
                <div className="input-container">
                    <Input
                        type="text"
                        value={search}
                        placeholder="Rechercher par nom"
                        onChange={handleInput}
                        className="input"
                    />
                </div>

                <div className="robot-list">
                    {searchedData.map((robot, index) => {
                        return <Card key={index} robot={robot} />;
                    })} 
                </div>
            </div>
        </div>
    );
};

export default Robots;
