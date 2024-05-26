export const limparLocalStorage = () => {
  localStorage.removeItem("nome");
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
};