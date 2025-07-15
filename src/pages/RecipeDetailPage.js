import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/TheMealDB";
import "./RecipeDetailPage.css";

const RecipeDetailPage = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams(); //Burada app.js'de url path kısmına yazdığımız recipeId'yi obje olarak alıp kullanıcaz.

  useEffect(() => {
    //Bileşenler ilk yüklendiğinde kısmıs useEffect ile alakalı apiden veri çekmek için async fonks. oluşturduk ve içine TheMealDB.js dosyasından import ettiğimiz fonksiyonu kullandık useParams ile aldıgımız id'ki buna parametre olarak verdik ki id'yi alsın api'de yerine koysun ve bize tarif detaylarını getirsin
    //Sonra bunun data değişkeninde saklayıp setRecipe ile statemizi güncelledik bu sayede state güncellenince verimiz ekranda gözükücek (state güncellenince neyi tetikliyordu ve ekrana nasıl yansıyordu?) galiba useEffect'in bağımlılık dizisine yazdığımız recipeId sayesinde oluyor bu, her id değiştiğinde farklı tarif sayfasına gidildiğinde çalışıyor.
    const fetchRecipeDetails = async () => {
      try {
        const data = await getRecipeById(recipeId);
        setRecipe(data);
      } catch (err) {
        console.log("ReiceDetailPage useEffect Hata:", err);
      }
    };
    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipe) {
    return <div>Yükleniyor...</div>;
  }

  const ingredients = [];

  for (let i = 1; i < 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredients) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="recipe-detail">
      <h1 className="recipe-title">{recipe.strMeal}</h1>
      <img
        className="recipe-detail-image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <h2>Yapılışı</h2>
      <div className="instructions">
        <p>{recipe.strInstructions}</p>
      </div>
      <h2>Malzemeler</h2>
      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetailPage;
