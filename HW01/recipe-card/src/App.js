import './components/RecipeCard.css'
// this is how we import a img file data as a js variable   
import {RECIPE} from "./components/recipe-data"
import RECIPE_IMG from "./assets/pancake.png"

const App = () => {
    return (
        <div className="card">

            <div class="photo">
            <img src={RECIPE_IMG} alt="yummy pancake" />
            </div>

        <div class="title"><h2>{RECIPE.title}</h2>
        <p>Recipe Description</p>
        </div>

        <div class="ingredients"><h3>Ingredients</h3>
        <ul>
        <ul>{RECIPE.ingredients.map((item, index) => {
            return <li key={index}>{item}</li>
        })}</ul>
        </ul>
        </div>

        <div class="instructions"><h3>Instructions</h3>
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