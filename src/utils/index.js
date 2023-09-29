// export const getNumbers = () => {
//   const arr = [];

//   for (let i=0;i<10;i++) {
//     arr.push(Math.ceil(Math.random() * 100));
//   }

//   return arr;
// }

export const getFullSortedConfig = (arr) => {
  const arrConfig = [];
  const numbers = [...arr];

  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1];
        numbers[j - 1] = numbers[j];
        numbers[j] = temp;

        arrConfig.push({
          data: [...numbers],
          currentIndexBeingSwapped: j - 1,
          sortedUntil: i
        });
      }
    }
  }

  return arrConfig;
}