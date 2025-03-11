export const validatePrice = (price) => {
  if (isNaN(price) || price <= 0) {
    return "El precio debe ser un número positivo.";
  }
  return null;
};

export const validateDate = (date) => {
  if (date < new Date()) {
    return "La fecha debe ser en el futuro.";
  }
  return null;
};

export const validateDirectorFunctions = (
  selectedDirector,
  date,
  existingFunctions
) => {
  const directorFunctions = existingFunctions.filter(
    (func) =>
      func.director === selectedDirector &&
      func.date.toDateString() === date.toDateString()
  );
  if (directorFunctions.length >= 10) {
    return "Un director solo puede tener un máximo de 10 funciones por día.";
  }
  return null;
};

export const validateInternationalMovieFunctions = (
  selectedMovie,
  existingFunctions,
  movies
) => {
  const movie = movies.find((m) => m.title === selectedMovie);
  if (movie?.isInternational) {
    const movieFunctions = existingFunctions.filter(
      (func) => func.director === movie.director
    );
    if (movieFunctions.length >= 8) {
      return "Las películas internacionales tienen un límite de 8 funciones.";
    }
  }
  return null;
};
