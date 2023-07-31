//import { StyledForm, StyledLabel } from "./PralineForm.styled";
//import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";
import { uid } from "uid";

export default function ProductForm() {
  const [zutatenfeld, setZutatenfeld] = useState("");
  const [mengenfeld, setMengenfeld] = useState("");
  const [zutaten, setZutaten] = useState([]);
  const [allergenfeld, setAllergenfeld] = useState("");
  const [allergenMenge, setAllergenMenge] = useState("");
  const [allergene, setAllergene] = useState([]);

  function handleAddIngredient(event) {
    console.log(zutatenfeld, mengenfeld, zutaten);

    event.preventDefault();

    const zutatenMitMenge = { Zutat: zutatenfeld, Menge: mengenfeld };
    setZutaten([...zutaten, { ...zutatenMitMenge, id: uid() }]);
    setZutatenfeld("");
    setMengenfeld("");
  }

  function handleDeleteIngredient(id) {
    setZutaten(zutaten.filter((zutat) => (zutat.id === id ? false : true)));
  }

  function handleAddAllergen(event) {
    console.log(allergenfeld, allergenMenge, allergene);

    event.preventDefault();

    const allergeneMitMenge = { Allergen: allergenfeld, Menge: allergenMenge };
    setAllergene([...allergene, { ...allergeneMitMenge, id: uid() }]);
    setAllergenfeld("");
    setAllergenMenge("");
  }

  function handleDeleteAllergen(id) {
    setAllergene(
      allergene.filter((allergen) => (allergen.id === id ? false : true))
    );
  }

  return (
    <form>
      <heading>Pralinen bearbeiten</heading>
      <br></br>
      <button>Praline bearbeiten</button>
      <button>Praline löschen</button>
      <br></br>
      <label htmlFor="name">
        Name: <input type="text" id="name" name="name" required />
      </label>
      <br></br>
      <label htmlFor="version">
        Version: <input type="text" id="version" name="version" />
      </label>
      <br></br>
      <label htmlFor="gewicht">
        Gewicht: <input type="number" id="gewicht" name="gewicht" min="0" /> g
      </label>
      <br></br>
      <label htmlFor="zutaten">
        Zutaten:{" "}
        <input
          type="text"
          id="zutaten"
          name="zutaten"
          value={zutatenfeld}
          onChange={(event) => {
            setZutatenfeld(event.target.value);
          }}
        />{" "}
        <input
          type="text"
          id="zutatenmenge"
          name="zutatenmenge"
          value={mengenfeld}
          onChange={(event) => {
            setMengenfeld(event.target.value);
          }}
        />{" "}
        g{" "}
        <button type="submit" onClick={handleAddIngredient}>
          +
        </button>
      </label>
      <ul>
        {zutaten.map((zutat) => (
          <li key={zutat.id}>
            {zutat.Zutat} {zutat.Menge} g{" "}
            <button
              type="submit"
              onClick={() => handleDeleteIngredient(zutat.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <br></br>
      <label htmlFor="spuren">
        Allergenspuren:{" "}
        <input
          type="text"
          id="spuren"
          name="spuren"
          placeholder="z.B. Schalenfrüchte"
          value={allergenfeld}
          onChange={(event) => {
            setAllergenfeld(event.target.value);
          }}
        />{" "}
        <input
          type="text"
          id="allergenmenge"
          name="allergenmenge"
          value={allergenMenge}
          onChange={(event) => {
            setAllergenMenge(event.target.value);
          }}
        />{" "}
        g{" "}
        <button type="submit" onClick={handleAddAllergen}>
          +
        </button>
      </label>
      <ul>
        {allergene.map((allergen) => (
          <li key={allergen.id}>
            {allergen.Allergen} {allergen.Menge} g{" "}
            <button
              type="submit"
              onClick={() => handleDeleteAllergen(allergen.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <br></br>
      <label htmlFor="bild">
        Bild hochladen: <input type="text" id="bild" name="bild" />
      </label>
      <br></br>
      <button type="submit">Abbrechen</button>
      <button type="submit">Speichern / hinzufügen</button>
    </form>
  );
}
