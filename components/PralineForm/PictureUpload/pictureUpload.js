import { useState } from "react";

export default function PralinePictures() {
  const [image, setImage] = useState();

  const handleImageUpload = (event) => {
    if (event.event === "success") {
      setImage({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
    } else {
      //Upload war nicht erfolgreich
    }
  };
  return image;
}
