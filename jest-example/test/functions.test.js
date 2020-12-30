const { fibo , countWords} = require('../functions')

test('fibo 8 is 21 ', () => {
	expect(fibo(8)).toBe(21)

})

test('counting words',() => {
	const words = 'test objects with with jest'
	expect(countWords(words)).toEqual({
		test:1,
		objects:1,
		with:2,
		jest:1
	})
})
