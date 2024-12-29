import { NavLink } from "react-router-dom";

const Mealcard = ({ detail }) => {
    console.log(detail);
    return <>
        {!detail ? "" : detail.map((curitem) => {
            return (
                <div className="recipecontainer">
                    <img src={curitem.strMealThumb} alt="" />
                    <p>{curitem.strMeal}</p>
                    <NavLink to={`/${curitem.idMeal}`}><button className='Ingredients' >Recipe</button></NavLink>
                    {/* here we can pass the id as a link or url for perticular item so we can furthe r use this id for the more details  */}
                </div>
            )
        })

        }

    </>
}
export default Mealcard;

