// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr1 = [];
  for (var i = 0; i < musicians.length; i++) {
    arr1.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr1;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

let hardFacts = [];

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    hardFacts.push(facts[i] + "!!!");
    i++;
  }
  Object.assign(hardFacts, facts)
  return hardFacts;
}
