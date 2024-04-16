"use client"

import {useEffect, useState} from "react";
import IEvents from "@/utils/IEvents";

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setData(await fetch("/api/mysql").then(res => res.json()));
        }
        fetchData();
    }, []);


    return (
        <div className="container">
            <h1>data:</h1>
            {data.map((item: IEvents, index) => (
                <div key={index}>
                    <p>id: {item.id}, with name: {item.name}</p>
                </div>
            ))}
        </div>
    )
}
