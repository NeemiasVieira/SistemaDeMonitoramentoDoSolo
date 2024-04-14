export const numeroAleatorioNoIntervalo = (min: number, max: number) => {
  // Gera um número aleatório entre 0 e 1
  const numeroAleatorio = Math.random();
  // Calcula o número aleatório dentro do intervalo [min, max]
  const numeroNoIntervalo = min + Math.floor(numeroAleatorio * (max - min + 1));
  return numeroNoIntervalo;
}