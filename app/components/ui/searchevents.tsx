"use client"
import { useState, Fragment } from 'react';
import { Combobox, ComboboxInput, ComboboxOptions, Transition } from '@headlessui/react';

const SearchEvents = ({ events, setEvents }: searchEventsProps) => { 
  const [query, setQuery] = useState('');
  return (
    <div className='search-events'>
        <Combobox>
            <div className='relative w-full mx-auto flex justify-center'>
                
                <ComboboxInput 
                className="search-events-input w-[1099px] h-[50px] rounded-2xl bg-gray-50 mx-auto mt-[15px] border-solid border-[1.17px] border-gray-300" 
                placeholder="  Buscar Eventos"
                displayValue={(events: string) => events}
                onChange={(e) => setQuery(e.target.value)} 
                />
            </div>
        </Combobox>



    </div>
  )
}

export default SearchEvents