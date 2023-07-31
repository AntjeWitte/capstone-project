//import { StyledForm, StyledLabel } from "./PralineForm.styled";
//import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";

export default function ProductForm() {
  const [zutatenfeld, setZutatenfeld] = useState("");
  const [mengenfeld, setMengenfeld] = useState("");
  const [zutaten, setZutaten] = useState([]);
  const [allergenfeld, setAllergenfeld] = useState("");
  const [allergenMenge, setAllergenMenge] = useState("");
  const [allergene, setAllergene] = useState([]);

  function handleAddIngredient(event) {
    console.log(zutaten);

    event.preventDefault();

    const zutatenMitMenge = { ingredient: zutatenfeld, amount: mengenfeld };
    setZutaten([...zutaten, { ...zutatenMitMenge, id: uid() }]);
    setZutatenfeld("");
    setMengenfeld("");
  }

  function handleDeleteIngredient(id) {
    setZutaten(zutaten.filter((zutat) => (zutat.id === id ? false : true)));
  }

  function handleAddAllergen(event) {
    console.log(allergene);

    event.preventDefault();

    const allergeneMitMenge = {
      ingredient: allergenfeld,
      amount: allergenMenge,
    };
    setAllergene([...allergene, { ...allergeneMitMenge, id: uid() }]);
    setAllergenfeld("");
    setAllergenMenge("");
  }

  function handleDeleteAllergen(id) {
    setAllergene(
      allergene.filter((allergen) => (allergen.id === id ? false : true))
    );
  }

  const { data, isLoading, mutate } = useSWR("/api/pralinen");
  //console.log("data", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("event", event);

    if (zutaten.length === 0) {
      return;
    }

    const formData = new FormData(event.target);
    const pralineData = Object.fromEntries(formData);

    const newPraline = {
      name: pralineData.name,
      version: pralineData.version,
      weight: pralineData.weight,
      ingredients: zutaten.map((zutat) => {
        return { ingredient: zutat.ingredient, amount: zutat.amount };
      }),
      allergyTraces: allergene.map((allergen) => {
        return { ingredient: allergen.ingredient, amount: allergen.amount };
      }),
    };

    console.log("newPraline", newPraline);

    console.log("pralineData", pralineData);

    const response = await fetch("/api/pralinen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPraline),
    });

    if (response.ok) {
      mutate();
    }

    event.target.reset();
    event.target.elements[0].focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pralinen bearbeiten</h2>
      <br></br>
      <button>Praline bearbeiten</button>
      <button>Praline löschen</button>
      <br></br>
      <label htmlFor="name">
        Name: <input type="text" id="name" name="name" required />
      </label>
      <br></br>
      <label htmlFor="version">
        Version: <input type="text" id="version" name="version" required />
      </label>
      <br></br>
      <label htmlFor="weight">
        Gewicht:{" "}
        <input type="number" id="weight" name="weight" min="0" required /> g
      </label>
      <br></br>
      <label htmlFor="ingredient">
        Zutaten:{" "}
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          value={zutatenfeld}
          onChange={(event) => {
            setZutatenfeld(event.target.value);
          }}
        />{" "}
        <input
          type="text"
          id="amount"
          name="amount"
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
            {zutat.ingredient} {zutat.amount} g{" "}
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
            {allergen.ingredient} {allergen.amount} g{" "}
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
        Bild hochladen: <input type="file" id="bild" name="bild" />
      </label>
      <br></br>
      <button type="submit">Abbrechen</button>
      <button type="submit">Speichern / hinzufügen</button>

      <ul>
        {data.map((praline) => (
          <li key={praline._id}>
            <p>{praline.name}</p>
          </li>
        ))}
      </ul>
    </form>
  );
}
