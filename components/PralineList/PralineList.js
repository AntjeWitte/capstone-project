import React from "react";
import useSWR from "swr";
import Image from "next/image";

export default function PralineList({ onSelectPraline }) {
  const { data, isLoading } = useSWR("/api/pralinen");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {data.map((praline) => (
        <li key={praline._id}>
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
          <button type="button" onClick={() => onSelectPraline(praline)}>
            bearbeiten
          </button>
        </li>
      ))}
    </ul>
  );
}
