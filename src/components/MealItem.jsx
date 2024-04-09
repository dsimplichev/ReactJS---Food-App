export default function MealItem({ meal }) {
    return (
        <li className="meal-item">
           <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
             <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className="meal-item-desctiption">{meal.discription}</p>
             </div>
             <p className="meal-item-actions"></p>
               <button>Add to Cart</button>
           </article>
        </li>
    )
}