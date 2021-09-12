import React from 'react'


const Recipe = ({ title, ingredients, calories, img, url }) => {


    return (
        <div className="glass">
            <h2>{title}</h2>
            <img className="image" src={img} alt=""></img>
            <p className="calories">Calories in this dish:{calories.toFixed()}</p>
            <h3 className="ingredient-title">Ingredient List</h3>
            <ul>{ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</ul>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn url">Show More</a>

        </div>
    )
}
export default Recipe;