function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toLowerCase);
}

// logWhisper

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

