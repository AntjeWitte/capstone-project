import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { StyledPralineListItem } from "./PralineList.styled";
import { StyledButtonOrange } from "../PralineForm/PralineForm.styled";

export default function PralineList({ onSelectPraline, children }) {
  const { data, isLoading } = useSWR("/api/pralinen");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {data.map((praline) => (
        <StyledPralineListItem key={praline._id}>
          <p>{praline.name}</p>

          {praline.imageId && (
            <Image
              width="100"
              height="100"
              src={`https://res.cloudinary.com/dtz3vpjks/image/upload/v1691655286/${praline.imageId}.png`}
              sizes="50vw"
              alt={praline.name}
            />
          )}
          <StyledButtonOrange
            type="button"
            onClick={() => onSelectPraline(praline)}
          >
            {children}
          </StyledButtonOrange>
        </StyledPralineListItem>
      ))}
    </ul>
  );
}
