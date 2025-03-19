export const validatePrice = (price) => {
  if (isNaN(price) || price <= 0 || price > 1000) {
    return "El precio debe ser entre 1 y 1000.";
  }
  return null;
};

export const validateDate = (date) => {
  if (date < new Date()) {
    return "La fecha debe ser en el futuro.";
  }
  return null;
};

