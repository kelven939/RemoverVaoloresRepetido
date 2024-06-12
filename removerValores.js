function removerDuplicatas(array) {
    // array vazio para armazenar os valores nao repetidos
    const arraySemDuplicatas = [];
  
    // percorre cada elemento do array original
    for (let i = 0; i < array.length; i++) {
      let encontrado = false;
      // verifica se o elemento ja esta presente no arraySemDuplicatas = []
      for (let j = 0; j < arraySemDuplicatas.length; j++) {
        if (array[i] === arraySemDuplicatas[j]) {
          encontrado = true;
          break;
        }
      }
      // se o elemento nao foi encontrado no arraySemDuplicatas, ele sera adicionado
      if (!encontrado) {
        arraySemDuplicatas.push(array[i]);
      }
    }
  
    // retorna o array sem duplicatas
    return arraySemDuplicatas;
  }
  
  const arrayComDuplicatas = [1, 2, 3, 4, 4, 5, 6, 6, 7];
  const arraySemDuplicatas = removerDuplicatas(arrayComDuplicatas);
  
  console.log(arraySemDuplicatas); // saida: [1, 2, 3, 4, 5, 6, 7]
  