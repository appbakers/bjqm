/* global describe, it */

(function() {
	'use strict';

	describe('Give it some context', function() {
		describe('maybe a bit more context here', function() {
			it('should run here few assertions', function() {

			});
			it('should fail run here few assertions', function() {
				var x = 'test';
				expect(x).to.be.a('string');
			});

			it('should equal run here few assertions', function() {
				var x = 'test';
				expect(x).to.be.a('string');
				x.should.equal('test');
			});

			it('should type equal run here few assertions', function() {
				var x = 'test';
				expect(x).to.be.a('string');
				x.should.be.a('string');
				x.should.equal('test');

			});
		});
	});
})();
