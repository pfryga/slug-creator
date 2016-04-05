'use strict';

let Creator = require('../creator');

require('should');

describe('slug creator', function () {
    it('should return correct slug', function () {
        // given
        let creator = new Creator();
        let phrase = 'Zobacz wszystkie kategorie z polskimi znakami ę ó ą ś ł ż ź ć ń';

        // when
        let slug = creator.getSlug(phrase);

        // then
        slug.should.be.equal('zobacz-wszystkie-kategorie-z-polskimi-znakami-e-o-a-s-l-z-z-c-n');
    });
});
