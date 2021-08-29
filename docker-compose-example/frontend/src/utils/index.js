export const setLocalStorage = (data) => {
  localStorage.setItem("DB", JSON.stringify(data));
};

export const getLocalStorage = () => {
  try {
    const dbVal = JSON.parse(localStorage.getItem("DB"));
    if (dbVal) {
      return dbVal;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
