import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  //inputta girilen şeyi setTerm ile term statine güncelledik ve handleFormSubmit fonksiyonunda onSubmit(term) fonksiyonuna parametre olarak gidecek ve ona göre axios isteğimizi atıcak.
  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <label>Tarif Ara</label>
      <input
        className="search-input"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="search-button">
        Tarif Bul
      </button>
    </form>
  );
};

export default SearchBar;
