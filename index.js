function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var word="hello"
  console.log(word.toUpperCase);
}


function sayHiToGrandma(string) {
  var lowercase= "hello"
  var answer
  var uppercase= "HELLO"
  if (string === lowercase){
    answer= "I can't hear you!";
  }else if (string===uppercase){
    answer= "YES INDEED!"
  }else if (string==="I love you, Grandma."){
    answer= "I love you, too."
  }
  return (answer);
}

