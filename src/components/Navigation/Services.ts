
export const formarIniciais = (nome: string): string => {
  let nomes: string[];
  if(nome){
    nome = nome.toUpperCase();
    nomes = nome.split(" ");
  }
  if (nomes?.length >= 2) return nomes[0][0] + nomes[1][0];
  if (nomes) return nomes[0][0];
  return "";
};

export const limparLocalStorage = () => {
  localStorage.removeItem("nome");
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
};