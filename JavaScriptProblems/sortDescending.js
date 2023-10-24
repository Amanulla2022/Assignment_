//Original random array
const originalArray = [5, 7, 8, 9, 50, -6, 0, 6, 1, 99];

//sorting array in descending order using lamda function
const descendingOrder = originalArray.sort((a, b) => b - a);

//printing the output array
console.log(descendingOrder);
