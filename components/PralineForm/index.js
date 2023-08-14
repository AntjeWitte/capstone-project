import React, { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import IngredientList from "./IngredientList";
import InputField from "./InputField";

export default function ProductForm() {
  const [zutaten, setZutaten] = useState([]);
  const [allergene, setAllergene] = useState([]);
  const [currentPraline, setCurrentPraline] = useState(null);
  const [nameField, setNameField] = useState("");
  const [versionField, setVersionField] = useState("");
  const [weightField, setWeightField] = useState("");
  const [imageId, setImageId] = useState(null);

  function handleAddIngredient(newIngredient) {
    setZutaten([...zutaten, { ...newIngredient, id: uid() }]);
  }

  function handleDeleteIngredient(id) {
    setZutaten(zutaten.filter((zutat) => zutat.id !== id));
  }

  function handleAddAllergen(allergeneMitMenge) {
    setAllergene([...allergene, { ...allergeneMitMenge, id: uid() }]);
  }

  function handleDeleteAllergen(id) {
    setAllergene(allergene.filter((allergen) => allergen.id !== id));
  }

  function cancel() {
    setZutaten([]);
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
      <InputField
        id="name"
        label="Name"
        value={nameField}
        onChange={(event) => {
          setNameField(event.target.value);
        }}
      />
      <br />
      <InputField
        id="version"
        label="Version"
        value={versionField}
        onChange={(event) => {
          setVersionField(event.target.value);
        }}
      />
      <br />
      <InputField
        id="weight"
        label="Gewicht"
        value={weightField}
        onChange={(event) => {
          setWeightField(event.target.value);
        }}
      />
      <br />
      <IngredientList
        label="Zutaten"
        id="ingredient"
        onAddIngredient={handleAddIngredient}
        zutaten={zutaten}
        onDeleteIngredient={handleDeleteIngredient}
      />
      <br />
      <IngredientList
        label="Allergenspuren"
        id="traces"
        placeholder="z.B. Schalenfrüchte"
        onAddIngredient={handleAddAllergen}
        zutaten={allergene}
        onDeleteIngredient={handleDeleteAllergen}
      />
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
          <li key={praline._id}>
            <p>{praline.name}</p>

            <Image
              width="100"
              height="100"
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
