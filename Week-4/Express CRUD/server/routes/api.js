const express = require('express')
const router = express.Router()
router.get('/sanity', (req, res) => {
    console.log("hi")
    res.send('Server is up and running')
})
wordCounter = {
    a: 89,
    b: 7,
    c: 90,
    d: 8
}
router.get('/word/:word', (req, res) => {
    let word = req.params.word
    if (wordCounter[word]) {
        res.send({count: wordCounter[word]})
    } else {
        res.send({count: 0})
    }
    res.end()

})

router.post('/word', function (req, res) {
    let word = req.body.word
    wordCounter[word] == undefined ? wordCounter[word] = 1 : wordCounter[word]++
    res.send({text: `Add ${word}`, currentCount: wordCounter[word]})
})
router.post('/words', function (req, res) {
    let sentence = req.body.words.split(' ')
    let numNewWords = 0
    let numOldWords = 0
    sentence.forEach(e => {
        if (wordCounter[e]) {
            numOldWords++;
        } else {
            numNewWords++;
        }

    });
    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})
router.delete('/words',function(req,res){
    let word= req.params.name
    if(wordCounter.indexOf(word)){
        wordCounter[word]==undefined
    }
})

module.exports = router
