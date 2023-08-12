import React, { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";
import { useRouter } from "next/router";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export default function ProductForm() {
  const [zutatenfeld, setZutatenfeld] = useState("");
  const [mengenfeld, setMengenfeld] = useState("");
  const [zutaten, setZutaten] = useState([]);
  const [allergenfeld, setAllergenfeld] = useState("");
  const [allergenMenge, setAllergenMenge] = useState("");
  const [allergene, setAllergene] = useState([]);
  const [currentPraline, setCurrentPraline] = useState(null);
  const [nameField, setNameField] = useState("");
  const [versionField, setVersionField] = useState("");
  const [weightField, setWeightField] = useState("");
  const [imageId, setImageId] = useState(null);

  const router = useRouter();

  function handleAddIngredient(event) {
    console.log(zutaten);

    event.preventDefault();

    const zutatenMitMenge = { ingredient: zutatenfeld, amount: mengenfeld };
    setZutaten([...zutaten, { ...zutatenMitMenge, id: uid() }]);
    setZutatenfeld("");
    setMengenfeld("");
  }

  function handleDeleteIngredient(id) {
    setZutaten(zutaten.filter((zutat) => zutat.id !== id));
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
    setAllergene(allergene.filter((allergen) => allergen.id !== id));
  }

  function cancel() {
    setZutatenfeld("");
    setMengenfeld("");
    setZutaten([]);
    setAllergenfeld("");
    setAllergenMenge("");
    setAllergene([]);
    setCurrentPraline(null);
    setNameField("");
    setVersionField("");
    setWeightField("");
  }

  const { data, isLoading, mutate } = useSWR("/api/pralinen");
  // console.log("data", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
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
      imageId: imageId,
      ingredients: zutaten.map((zutat) => ({
        ingredient: zutat.ingredient,
        amount: zutat.amount,
      })),
      allergyTraces: allergene.map((allergen) => ({
        ingredient: allergen.ingredient,
        amount: allergen.amount,
      })),
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

    setZutaten([]);
    setAllergene([]);
    setNameField("");
    setVersionField("");
    setWeightField("");
    event.target.reset();
    event.target.elements[0].focus();
  }

  async function handleDelete() {
    await fetch(`/api/pralinen/${currentPraline._id}`, {
      method: "DELETE",
    });
    setZutaten([]);
    setAllergene([]);
    setNameField("");
    setVersionField("");
    setWeightField("");
    setCurrentPraline(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentPraline ? "Pralinen bearbeiten" : "Pralinen erstellen"}</h2>
      <br />
      <button type="button">Praline bearbeiten</button>
      <button type="button" disabled={!currentPraline} onClick={handleDelete}>
        Praline löschen
      </button>
      <br />
      <label htmlFor="name">
        Name:{" "}
        <input
          type="text"
          id="name"
          name="name"
          value={nameField}
          onChange={(event) => {
            setNameField(event.target.value);
          }}
          required
        />
      </label>
      <br />
      <label htmlFor="version">
        Version:{" "}
        <input
          type="text"
          id="version"
          name="version"
          value={versionField}
          onChange={(event) => {
            setVersionField(event.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="weight">
        Gewicht:{" "}
        <input
          type="text"
          id="weight"
          name="weight"
          min="0"
          value={weightField}
          onChange={(event) => {
            setWeightField(event.target.value);
          }}
        />{" "}
        g
      </label>
      <br />
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
        <button type="button" onClick={handleAddIngredient}>
          +
        </button>
      </label>
      <ul>
        {zutaten.map((zutat) => (
          <li key={zutat.id}>
            {zutat.ingredient} {zutat.amount} g{" "}
            <button
              type="button"
              onClick={() => handleDeleteIngredient(zutat.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <br />
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
        <button type="button" onClick={handleAddAllergen}>
          +
        </button>
      </label>
      <ul>
        {allergene.map((allergen) => (
          <li key={allergen.id}>
            {allergen.ingredient} {allergen.amount} g{" "}
            <button
              type="button"
              onClick={() => handleDeleteAllergen(allergen.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <br />
      Bild hochladen:{" "}
      <CldUploadButton
        uploadPreset="lyzzky1u"
        onUpload={({ info }) => setImageId(info.public_id)}
      />
      <br />
      <button type="button" onClick={cancel}>
        Zurücksetzen
      </button>
      <button type="submit">Speichern / hinzufügen</button>
      <br />
      <hr />
      <p>
        Hilfsweise Darstellung der Pralinen aus der Datenbank (nur zu
        Testzwecken):
      </p>
      <ul>
        {data.map((praline) => (
          <li key={praline.id}>
            <p>{praline.name}</p>
            {/* <CldImage */}
            <Image
              width="100"
              height="100"
              // src="https://res.cloudinary.com/dtz3vpjks/image/upload/v1691656636/Pralines/Test.png"
              //"https://res.cloudinary.com/dtz3vpjks/image/upload/v1691655286/Pralines/Marzipan.png"
              src={`https://res.cloudinary.com/dtz3vpjks/image/upload/v1691655286/${praline.imageId}.png`}
              sizes="50vw"
              alt={praline.name}
            />
            <button
              type="button"
              onClick={() => {
                setCurrentPraline(praline);
                setNameField(praline.name);
                setVersionField(praline.version);
                setWeightField(praline.weight);
                setZutaten(praline.ingredients);
                setAllergene(praline.allergyTraces);
              }}
            >
              bearbeiten
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
