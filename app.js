let friends = ['Tony', 'Shannon', 'Kim', 'Shelby', 'Lorenz'];

for (let i = 0; i < friends.length; i++) {
	console.log(`${friends[i].toUpperCase()}:`);
  for (let count = 99; count >= 1; count--) {
		if (count === 1) {
			console.log(`${count} line of code in the file, ${count} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
		} else {
			console.log(`${count} lines of code in the file, ${count} lines of code; ${friends[i]} strikes one out, clears it all out, ${count - 1} lines of code in the file`);
		}
	}
}