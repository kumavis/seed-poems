const fs = require('fs')

const nouns = loadNouns()
const verbs = loadVerbs()

testOutput()

function testOutput () {
  Array(5).fill().map(() => {
    const poem = generatePoem()
    console.log(poem)
    console.log('\n')
  })
}

function generatePoem () {
  const poem = Array(4).fill().map(() => generateSentence()).join('\n')
  return poem
}

function generateSentence () {
  const subject = selectRandom(nouns)
  const verb = selectRandom(verbs)
  const object = selectRandom(nouns)
  
  const sentence = `The ${subject} ${verb}(s) the ${object}`
  return sentence
}

function loadNouns () {
  const rawNouns = fs.readFileSync('./nouns_dq.txt', 'utf8')
  const nouns = rawNouns.split('\n').slice(0, 2048)
  return nouns
}

function loadVerbs () {
  const rawVerbs = fs.readFileSync('./verbs_pbw.txt', 'utf8')
  const verbs = rawVerbs.split('\n').slice(0, 2048).map(entry => entry.split(' ')[0])
  return verbs
}

function selectRandom (list) {
  const index = Math.floor(list.length * Math.random())
  return list[index]
}