import ErrorRepository from '../js/app';

const myErrors = new ErrorRepository({
	code: 1000,
	description: 'Internal Server Error'
}, {
	code: 4040,
	description: 'Access Denied'
}, {
	code: 3333,
	description: 'Invalid request'
});

test('Ошибка есть базе', () => {
	expect(myErrors.translate(1000)).toBe('Internal Server Error')
})

test('Ошибки нет в базе', () => {
	expect(myErrors.translate(2000)).toBe('Unknown error')
})