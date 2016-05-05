'use strict';

const specialChars = {
    //latin
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae',
    'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i',
    'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o',
    'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u',
    'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'ß': 'ss', 'ẞ': 'SS',
    //polish
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's',
    'ź': 'z', 'ż': 'z'
};

module.exports = class Creator {

    translitare(char) {
        var mapped = specialChars[char];
        return mapped || char;
    }

    getSlug(phrase) {
        let nameLowarcase = (phrase || '').toLowerCase().trim();
        let translitereted = nameLowarcase.split('').map(this.translitare).join('');

        return translitereted.replace(/[\s\W-]+/g, '-');
    }
};
