import './components/RecipeCard.css'
// this is how we import a img file data as a js variable   
import {RECIPE} from "./components/recipe-data"
import RECIPE_IMG from "./assets/pancake.png"

const App = () => {
    return (
        <div className="card">

            <div className="photo">
            <img src={RECIPE_IMG} alt="yummy pancake" />
            </div>

        <div className="title"><h2>{RECIPE.title}</h2>
        <p>{RECIPE.description}</p>
        </div>

        <div className="ingredients"><h3>Ingredients</h3>
        <ul>{RECIPE.ingredients.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
        </ul>
        </div>

        <div className="instructions"><h3>Instructions</h3>
        <ol>
            {RECIPE.instructions.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ol>
        </div>
    </div>
    )
}

export default App 