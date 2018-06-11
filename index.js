function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy=string
  console.log(string.toLowerCase);
}

// logWhisper

function sayHiToGrandma(string) {
  var lowercase= "hello"
  var answer
  if (string === lowercase){
    answer= "I can't hear you!";
  }
  return (answer);
}

function sayHiToGrandma(string) {
  var uppercase= "HELLO"
  var answer
  if (string === uppercase){
    answer="YES INDEED!";
  }
  return(answer);
}
