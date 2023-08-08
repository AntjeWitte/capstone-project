// export default async function handlePralineSubmit({
//   event,
//   zutaten,
//   allergene,
//   mutate,
// }) {
//   event.preventDefault();
//   console.log("event", event);

//   if (zutaten.length === 0) {
//     return;
//   }

//   const formData = new FormData(event.target);
//   const pralineData = Object.fromEntries(formData);

//   const newPraline = {
//     name: pralineData.name,
//     version: pralineData.version,
//     weight: pralineData.weight,
//     ingredients: zutaten.map((zutat) => {
//       return { ingredient: zutat.ingredient, amount: zutat.amount };
//     }),
//     allergyTraces: allergene.map((allergen) => {
//       return { ingredient: allergen.ingredient, amount: allergen.amount };
//     }),
//   };

//   const response = await fetch("/api/pralinen", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newPraline),
//   });

//   if (response.ok) {
//     mutate();
//   }

//   event.target.reset();
//   event.target.elements[0].focus();
// }
