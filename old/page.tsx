//7a60662b

"use client"

import MovieCard, {Movie} from "@/old/movieCard";
import {useEffect, useState} from "react";

const API_URL = "http://www.omdbapi.com?apikey=7a60662b"

function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState("");
    const searchMovies = async (title: String) => {
        const res = await fetch(API_URL + "&s=" + title)
        const data = await res.json();

        const movies: Movie[] = data.Search.map((item: any) => ({
            name: item.Title,
            id: item.imdbID
        }));

        setMovies(movies)
    };

    useEffect(() => {
        searchMovies("spiderman");
    }, []);

    return (
        <>
            <div className="container mt-5">
                <h1>Movies</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control search" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           value={search} onChange={(e) => {
                               setSearch(e.target.value)
                    }}
                    />
                    <button className={"btn btn-primary"} onClick={(e) => {
                        searchMovies(search)
                    }}>search</button>
                </div>
            </div>
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} id={movie.id} name={movie.name}></MovieCard>
                ))}

            </div>
        </>
    );
}

export default Home;

