const letters = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 16,
    'p': 17,
    'q': 18,
    'r': 19,
    's': 20,
    't': 21,
    'u': 22,
    'v': 23,
    'w': 24,
    'x': 25,
    'y': 26,
    'z': 27
}
let sentence = 'b hi zzzz amongus l'
function findHieghstScoringWord(string) {
    let highestScoringWord='soo'
    let higehstScore = 0;
    let words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
        let score = 0;
        let currentWord = words[i];
            for(let z = 0 ; z < currentWord.length;z++){
               score +=letters[currentWord[z]]
            }
             if(higehstScore < score){
                highestScoringWord = currentWord
                higehstScore = score
           }
    }
    console.log(highestScoringWord)
}
findHieghstScoringWord(sentence)