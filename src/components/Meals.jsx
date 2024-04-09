import { useState, useEffect } from "react";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
     useEffect(() => {
        async function fetchMeals() {





            const respons = await fetch('http://localhost:3000/meals')

            if (!respons.ok) {

            }

            const meals = await respons.json();
            setLoadedMeals(meals)
        }

        fetchMeals();
    }), [];



    return (
        <ul id='meals'>
            {loadedMeals.map(meal => <li key={meal.id}>{meal.name}</li>)}
        </ul>
    )
}