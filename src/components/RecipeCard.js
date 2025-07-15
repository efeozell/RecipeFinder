import "./RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  //burada suanlık sadece kartın resmini,başlıklarını vs kullandık onunn haricinde birşey yapmadık bunun basit ve aptalca bi görevi var.

  return (
    <Link className="recipe-card" to={`/recipe/${recipe.idMeal}`}>
      <img
        className="recipe-card-image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <h3 className="recipe-card-title">{recipe.strMeal}</h3>
    </Link>
  );
};

export default RecipeCard;
