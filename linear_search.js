const array = [1,4,5,8,5,6,9,7]

function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		if (array[i]) === item {
			return i;
		}
	}
	return null
}

console.log(linearSearch(array, item 8))