"use client"
import { useState } from "react";
import SearchEvents from "./searchevents";


const SearchBar = () => {
  const [events, setEvents] = useState ('');

  const handleSearch = () => {} 

  return (
    <form className='searchbar' onSubmit=
    {handleSearch}>
        <div className="search-events">
            <SearchEvents 
            events={events}
            setEvents={setEvents}       
            />

        </div>

    </form>
  )
}

export default SearchBar