import { useState, useEffect } from "react";
import MealItem from "./MealItem";

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
            {loadedMeals.map((meal) => (
             <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}