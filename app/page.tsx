//7a60662b

"use client"

import MovieCard, {Movie} from "@/app/components/movieCard";
import {useEffect, useState} from "react";

const API_URL = "http://www.omdbapi.com?apikey=7a60662b"
const ex = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}



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

