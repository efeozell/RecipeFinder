import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  console.log("RecipeList Componentine Gelen Prop:", recipes);
  //burdaki .map() metodu her gelen tarif için bir recipeCard render etmesine yarar.

  if (!recipes) {
    return <h3>Aradığınız tarif bulunamadı.</h3>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeList;
