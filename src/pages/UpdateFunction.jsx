import FormUpdateFunction from "../components/FormUpdate/FormUpdate";

const UpdateFunction = () => {
  const existingFunction = {
    movie: "Titanic",
    director: "James Cameron",
    date: new Date("2025-03-15T20:00:00"), 
    price: 100,
  };

  return (
    <>
      <FormUpdateFunction existingFunction={existingFunction} />
    </>
  );
};

export default UpdateFunction;
