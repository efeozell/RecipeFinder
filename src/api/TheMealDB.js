import axios from "axios";

// 1.1 İlk olarak api dosyamızı oluşturup async olarak bir fonks tanımladık ve bunun içinde axios ile istek attık ve gelen cevabı döndürdük bu sayede bu fonksiyonu çağırıldığı yerde kullanabilmemizi sağlar.
export const searchRecipes = async (term) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    console.log("Veri Axios:", response.data.meals);
    return response.data.meals;
  } catch (err) {
    console.log("Axios Error:", err);
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  } catch (err) {
    console.log("2.Axios Error:", err);
  }
};
