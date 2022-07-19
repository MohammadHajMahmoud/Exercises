function countVowels(text) {
    let vowels = [
        "e",
        "a",
        "i",
        "o",
        "u"
    ]
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if ((text[i] == vowels[j]) && i != j) {
                count++
            }
        }
    }
    return count;
}