arrayOne = ['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!']; // The array is being defined.

console.log(yourFunction(arrayOne, 3)); // I'm calling the function and passing in the array parameter and the number parameter.

function yourFunction (array, number) { // I'm creating the function on lines 5 & 6.
return array[number] + array[(number + 1)];
}
// So, you can see that I did not fully solve the problem.
//I got stuck on how to "return a string that combines all of the values starting at the index of the number passed in through the end of the array."
//Since I got stuck, I decided to solve the first example provided in the assignment. I know this is not the correct answer for the entire assignment.
