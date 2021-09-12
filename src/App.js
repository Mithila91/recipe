import React, { useState, useEffect } from 'react'
import Recipe from './components/recipe'
import Header from './components/header'
import Footer from './components/footer'
import Style from './style.css'

const App = () => {
  const APP_ID = 'd28f32ca';
  const APP_KEY = '15314d9618a7df93f5d2261b8fde7fee'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Main course')

  useEffect(() => {
    getMeal()
    //update on submit button
  }, [query])

  const getMeal = async () => {
    const res = await fetch(`http://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)

  }

  // add this to form
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <Header />
      <form
        onSubmit={getSearch}
        className="form-search">
        <input
          value={search}
          onChange={updateSearch}
          className="bar-search"
          type="text" />
        <button
          className="btn"
          type="submit">Search</button>
      </form>

      {/*map through Array to get object */}
      <div className="recipe-container">
        {recipes.map(recipe => (
          <Recipe
            /*Get unique key*/
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
        <Footer />
      </div>
    </div>

  );
}

export default App;
