import { randomWord } from 'cross.words';

const _words = ['bait', 'cart', 'cast', 'daft', 'dart', 'east', 'fact', 'fast', 'gait', 'gast', 'halt', 'last', 'malt', 'mast', 'pact', 'pant', 'part', 'past', 'raft', 'rant', 'salt', 'tact', 'tart', 'vast', 'waft', 'wait', 'want', 'wart', 'watt', 'cats', 'bats', 'rats', 'bate', 'bath', 'bats', 'cats', 'data', 'date', 'eats', 'fate', 'fats', 'gate', 'hats', 'late', 'mate', 'math', 'oath', 'oats', 'rate', 'rats', 'baits', 'darts', 'attach', 'attack', 'attain', 'strata', 'tartan', 'tartar', 'tatars', 'aeronautics', 'alterations', 'astronautic', 'automations', 'devastation', 'evacuations', 'evaluations', 'salutations', 'situational', 'accusation', 'aeronautic', 'agitations', 'alteration', 'automating', 'automation', 'gelatinous', 'hesitation', 'infatuated', 'passionate', 'poinsettia', 'quotations', 'restaurant', 'valuations', 'adult', 'basil', 'bones', 'doses', 'early', 'heads'];

defineModule(
  'cross.words',
  {
    randomSpace: pickRandom(_words).split('').map(i=>pickRandom([i,'-'])).join(''),
    randomWord: pickRandom(_words)
  }
);


function check(space, word) {
  if (space.length !== word.length) {
    return false;
  }
  for (let i = 0; i < space.length; i++) {
    if (space[i] !== '-' && space[i] !== word[i]) {
      return false;
    }
  }
  return true;
};
console.log('-a-t');
console.log(randomWord);
console.log(check('-a-t', randomWord));