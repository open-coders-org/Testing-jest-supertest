function fibo (n){
	if (n === 0) return 0
	else if(n === 1) return 1
	else return fibo(n -1) + fibo( n - 2 )
}

function countWords(string){
	const words = string.split(' ')
	const count = words.reduce((counter, word) => {
		counter[word] = !counter[word] ? 1 : counter[word] + 1
		return counter
	},{})
	return count
}

module.exports = {
	fibo,
	countWords
}
