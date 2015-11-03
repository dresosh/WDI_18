var expect = require('chai').expect;
var word = require('./index');

describe('Sanitize', function(){
	it('returns lowercase of a string', function() {
		var inputWord = 'HELLO WORLD';
		var sanitizeWord = word.sanitize(inputWord);

		// expect('hello world').to.equal('hello world');
		expect(sanitizeWord).to.equal('hello world');
		expect(sanitizeWord).to.not.equal('hello earth');
		expect(sanitizeWord).to.be.a('string');
		expect(sanitizeWord).to.not.be.a('number');
		expect(sanitizeWord).to.contain('hello');

	});
		

	it('removes any hyphens', function() {
		var inputWord = 'HELLO-WORLD';
		var sanitizeWord = word.sanitize(inputWord);

		expect(sanitizeWord).to.equal('hello world');
	});

})

