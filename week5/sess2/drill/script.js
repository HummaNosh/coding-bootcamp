function firstNonRepeatingCharacter(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        const character = phrase.charAt(i);
        const restOfPhrase = phrase.substring(i + 1);
        if (!restOfPhrase.indexOf(character) >= 0) {
            return character
        }
    }
}