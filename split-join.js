//toUpperCase
var lyrics = 'expecto peTronum';

var search = 'PETRONUM';
var valid = lyrics.toUpperCase().includes(search.toUpperCase());
console.log(valid);


//split
var sentence = 'four little monkey jumping in the bed, one fell down and bump his head. mama called the doctor, doctor said, no more mo keys jumping in the bed';

var word = sentence.split(',');
var char = sentence.split(' ');
var words = sentence.split('.');
console.log(char);

//slice
var sliceSentence = sentence.slice(6,9);
console.log(sliceSentence);

//join
var arr = [
  'four',    'little', 'monkey',
  'jumping', 'in',     'the',
  'bed,',    'one',    'fell',
  'down',    'and',    'bump',
  'his',     'head.',  'mama',
  'called',  'the',    'doctor,',
  'doctor',  'said,',  'no',
  'more',    'mo',     'keys',
  'jumping', 'in',     'the',
  'bed'
]
var newRhythm = arr.join(' ');
console.log(newRhythm);