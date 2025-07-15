import { useEffect, useState } from "react";
import { searchRecipes } from "./api/TheMealDB";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//1.2 Daha sonra app.js'e gelip burada recipes diye bir state tanımladık ve fonksiyonumuzu burda import ettik
//1.3 Ardından onSearchSubmit diye async fonksiyon oluşturduk bunu şu yüzden yapıyoruz. Veri cekme işlemi asenkron olan bir olaydır sayfamızın bundan haberi olması içib async ve await kullanıyoruz.
//1.4 Bu fonksiyonun içine results değişkeni oluşturup içinde api isteğimizi yapan fonks. çağırıp parametre olarak aldıgımız term'i veriyoruz
//1.5 Ve bunu setRecipes ile recipes stateimizi çektiğimiz veriyle güncelliyoruz.
//1.6 Baya sorun yaşadım. useEffect Kullanarak onSearchSubmit fonks. çağırdık ve içine chicken verdik TheMealDB'de response.datadayı return etmeden önce console.log koydum ve içine response.data.meals yazdım fonksiyona verdiğimiz chicken parametresine göre geliyormuş. Ben app.js'den konsole bir şey basılacak sanıyorum onu bekliyorum baya kurcaladım sonra farkettim.
//BU adımda kısaca apiden veri geliyor mu bunu kontrol ettik
function App() {
  const [recipes, setRecipes] = useState([]);

  const onSearchSumbit = async (term) => {
    try {
      const results = await searchRecipes(term);
      setRecipes(results);
      console.log("Veri onSearch:", results);
    } catch (err) {
      console.log("onSearchSubmit Error:", err);
    }
  };

  return (
    <div className="container">
      <SearchBar onSubmit={onSearchSumbit} />
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
