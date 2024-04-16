"use client"
import React, {ChangeEvent, FormEvent, useState} from 'react';
import db from "@/utils/db";

function Button() {
    return (
        <button onclick={handleClick}>Click me</button>
    )
}

export default function Page() {
    // State hooks for each input field
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [location, setLocation] = useState<string>('');

    // Handle input change for each field
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>,
                               setState: React.Dispatch<React.SetStateAction<string>>) =>
        setState(e.target.value);


    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Form data compilation
        const formData = {name, description, date, time, location};
        console.log(formData);

        try {
            const response = await fetch('/api/events/create/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convert formData to JSON string
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Assuming the server responds with JSON
            console.log(data); // Process the response data as needed
        } catch (error) {
            console.error("Failed to submit form data:", error);
        }

        // Here you could send the formData to an API or do something else with it
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name}
                           onChange={(e) => handleInputChange(e, setName)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" value={description}
                           onChange={(e) => handleInputChange(e, setDescription)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" value={date}
                           onChange={(e) => handleInputChange(e, setDate)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" className="form-control" id="time" value={time}
                           onChange={(e) => handleInputChange(e, setTime)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" value={location}
                           onChange={(e) => handleInputChange(e, setLocation)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
