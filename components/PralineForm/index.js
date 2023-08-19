import React, { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";
import { CldUploadButton } from "next-cloudinary";

import IngredientList from "./IngredientList";
import InputField from "./InputField";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";

export default function ProductForm() {
  const [ingredients, setIngredients] = useState([]);
  const [allergyTraces, setAllergyTraces] = useState([]);
  const [currentPraline, setCurrentPraline] = useState(null);
  const [nameField, setNameField] = useState("");
  const [versionField, setVersionField] = useState("");
  const [weightField, setWeightField] = useState("");
  const [imageId, setImageId] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleAddIngredient(newIngredient) {
    setIngredients([...ingredients, { ...newIngredient, id: uid() }]);
  }

  function handleDeleteIngredient(id) {
    setIngredients(ingredients.filter((zutat) => zutat.id !== id));
  }

  function handleAddAllergyTraces(allergyTraceWithAmount) {
    setAllergyTraces([
      ...allergyTraces,
      { ...allergyTraceWithAmount, id: uid() },
    ]);
  }

  function handleDeleteAllergyTrace(id) {
    setAllergyTraces(
      allergyTraces.filter((allergyTrace) => allergyTrace.id !== id)
    );
  }

  function cancel() {
    setIngredients([]);
    setAllergyTraces([]);
    setCurrentPraline(null);
    setNameField("");
    setVersionField("");
    setWeightField("");
  }

  const { data, isLoading, mutate } = useSWR("/api/pralinen");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (ingredients.length === 0) {
      return;
    }

    const formData = new FormData(event.target);
    const pralineData = Object.fromEntries(formData);

    const newPraline = {
      name: pralineData.name,
      version: pralineData.version,
      weight: pralineData.weight,
      imageId: imageId,
      ingredients: ingredients,
      allergyTraces: allergyTraces,
    };

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

    setIngredients([]);
    setAllergyTraces([]);
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

    mutate();

    setIngredients([]);
    setAllergyTraces([]);
    setNameField("");
    setVersionField("");
    setWeightField("");
    setCurrentPraline(null);
  }

  return (
    <>
      <h2>{currentPraline ? "Pralinen bearbeiten" : "Pralinen erstellen"}</h2>
      <br />
      <button type="button" onClick={() => setIsModalVisible(true)}>
        Praline bearbeiten
      </button>
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)} title="Pralinenauswahl">
          <PralineList
            onSelectPraline={(praline) => {
              setCurrentPraline(praline);
              setNameField(praline.name);
              setVersionField(praline.version);
              setWeightField(praline.weight);
              setIngredients(praline.ingredients);
              setAllergyTraces(praline.allergyTraces);
            }}
          />
        </Modal>
      )}
      <button type="button" disabled={!currentPraline} onClick={handleDelete}>
        Praline löschen
      </button>
      <br />
      <form onSubmit={handleSubmit}>
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
          ingredients={ingredients}
          onDeleteIngredient={handleDeleteIngredient}
        />
        <br />
        <IngredientList
          label="Allergenspuren"
          id="traces"
          placeholder="z.B. Schalenfrüchte"
          onAddIngredient={handleAddAllergyTraces}
          ingredients={allergyTraces}
          onDeleteIngredient={handleDeleteAllergyTrace}
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
      </form>
    </>
  );
}
