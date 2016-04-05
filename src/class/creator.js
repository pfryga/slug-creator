'use strict';

module.exports = class Creator {
    constructor() {
    }

    translitare(char) {
        var mapped = {'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'}[char];
        return mapped || char;
    }

    getSlug(phrase) {
        let nameLowarcase = (phrase || '').toLowerCase().trim();
        let translitereted = nameLowarcase.split('').map(this.translitare).join('');

        return translitereted.replace(/[\s\W-]+/g, '-');
    }
};
