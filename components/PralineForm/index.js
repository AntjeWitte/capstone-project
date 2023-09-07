import React, { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";
import { CldUploadButton } from "next-cloudinary";

import IngredientList from "./IngredientList";
import InputField from "./InputField";
import Modal from "../Modal/Modal";
import PralineList from "../PralineList/PralineList";
import { StyledButton, StyledLink } from "./PralineForm.styled";
import { StyledDiv, StyledH1 } from "../PralineBox/box.styled";

export default function ProductForm() {
  const [ingredients, setIngredients] = useState([]);
  const [allergyTraces, setAllergyTraces] = useState([]);
  // eslint-disable-next-line operator-linebreak
  const [pralineSelectedForEditing, setPralineSelectedForEditing] =
    useState(null);
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
    setPralineSelectedForEditing(null);
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

  async function handleEdit(event) {
    event.preventDefault();

    if (ingredients.length === 0) {
      console.warn("No ingredient selected");
      return;
    }

    const formData = new FormData(event.target);
    const pralineData = Object.fromEntries(formData);

    const editedPraline = {
      name: pralineData.name,
      version: pralineData.version,
      weight: pralineData.weight,
      imageId: imageId,
      ingredients: ingredients,
      allergyTraces: allergyTraces,
    };

    const response = await fetch(
      `/api/pralinen/${pralineSelectedForEditing._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPraline),
      }
    );

    if (response.ok) {
      mutate();

      setIngredients([]);
      setAllergyTraces([]);
      setNameField("");
      setVersionField("");
      setWeightField("");
      setPralineSelectedForEditing(null);
    }
  }

  async function handleDelete() {
    await fetch(`/api/pralinen/${pralineSelectedForEditing._id}`, {
      method: "DELETE",
    });

    mutate();

    setIngredients([]);
    setAllergyTraces([]);
    setNameField("");
    setVersionField("");
    setWeightField("");
    setPralineSelectedForEditing(null);
  }

  return (
    <>
      <StyledH1>
        {pralineSelectedForEditing
          ? "Praline bearbeiten"
          : "Pralinen erstellen"}
      </StyledH1>
      <br />
      <StyledButton type="button" onClick={() => setIsModalVisible(true)}>
        Praline bearbeiten
      </StyledButton>
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)} title="Pralinenauswahl">
          <PralineList
            onSelectPraline={(praline) => {
              setPralineSelectedForEditing(praline);
              setNameField(praline.name);
              setVersionField(praline.version);
              setWeightField(praline.weight);
              setImageId(praline.imageId);
              setIngredients(praline.ingredients);
              setAllergyTraces(praline.allergyTraces);
            }}
          >
            bearbeiten
          </PralineList>
        </Modal>
      )}
      <StyledButton
        type="button"
        disabled={!pralineSelectedForEditing}
        onClick={handleDelete}
      >
        Praline löschen
      </StyledButton>
      <br />
      <form onSubmit={pralineSelectedForEditing ? handleEdit : handleSubmit}>
        <InputField
          type="text"
          id="name"
          label="Name"
          value={nameField}
          onChange={(event) => {
            setNameField(event.target.value);
          }}
        />
        <br />
        <InputField
          type="number"
          id="version"
          label="Version"
          value={versionField}
          onChange={(event) => {
            const { value } = event.target;

            const fixedValue = Math.max(0, Math.min(25, value));

            setVersionField(value > 0 ? fixedValue : " ");
          }}
        />
        <br />
        <InputField
          id="weight"
          label="Gewicht"
          type="number"
          step="0.1"
          value={weightField}
          onChange={(event) => {
            const { value } = event.target;

            const fixedValue = Math.max(5, Math.min(20, value));

            setWeightField(value > 0 ? fixedValue : " ");
          }}
        />
        <br />
        <IngredientList
          label="Zutaten"
          id="ingredient"
          placeholder="z.B. Kakaobutter"
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
        <StyledDiv>
          Bild hochladen:{" "}
          <CldUploadButton
            uploadPreset="lyzzky1u"
            onUpload={({ info }) => setImageId(info.public_id)}
          />
        </StyledDiv>
        <br />
        <StyledButton type="button" onClick={cancel}>
          Zurücksetzen
        </StyledButton>
        <StyledButton type="submit">
          {" "}
          {pralineSelectedForEditing ? "Speichern" : "Hinzufügen"}{" "}
        </StyledButton>
        <br />
      </form>
      <StyledLink href="/">Zurück zur Pralinenschachtel</StyledLink>
    </>
  );
}
