import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);
    const getInfo = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsondata = await response.json();
        if (jsondata.meals) {
            setInfo(jsondata.meals[0]);
        }
    };
    if (mealid) {
        getInfo();
    }
    return (
        <div>
            {info ? (
                <>
                    <div className="infocontainer">
                        <div className="mealinfo">
                            <img src={info.strMealThumb} alt={info.strMeal} />
                            <div className="recipedetails">
                                <h1>{info.strMeal}</h1>
                                <p>{info.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Mealinfo;
