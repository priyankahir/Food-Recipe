import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mealcard from './Component/Mealcard';
import Mealinfo from './Component/Mealinfo';

function App() {
  const [recipelist, setRecipelist] = useState([]);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  const fetchRecipe = async (searchString) => {
    if (searchString === '') {
      setMsg("Please Enter Something....");
      return;
    }
    setMsg('');
    
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
    const data = await response.json();
    
    if (data.meals) {
      setRecipelist(data.meals);
      if (data.meals.length === 0) {
        setMsg("No recipes found.");
      }
    } else {
      setRecipelist([]);
      setMsg("No recipes found.");
    }
  };

  const onTextChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className="foodcontainer">
            <div className="header">
              <div className="heading">
                <h1>Recipe Finder</h1>
              </div>
              <div className="searchfood">
                <input
                  type="search"
                  placeholder="Search Your Favourite Recipe"
                  onChange={onTextChange}
                />
                <button onClick={() => fetchRecipe(search)}>Search</button>
              </div>
            </div>
            <div className="foodbody">
              <div className="errormsg">
                <h1>{msg}</h1>
              </div>
              <Mealcard detail={recipelist} />
            </div>
          </div>
        }
      />
      <Route path='/:mealid' element={<Mealinfo />} />
    </Routes>
  );
}

export default App;
