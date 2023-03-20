import React, { useCallback } from "react";
import { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import { Input } from "antd";

const Robots = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    const handleInput = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const searchedData = data.filter((a) => {
        return a.name.toLowerCase().includes(search.toLowerCase());
    });

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
