const app = "I don't do much.";

var digitalClock = {
  time : Math.round(Date.now() / 1000),
  startTicking : function(){
    setInterval(() => this.time ++, 1000)
  }
}

function censor(word, sentence){
  return sentence.replace(new RegExp(word, 'g'), 'BLEEP')
}

var violenceCensor = censor.bind(null, 'violence');

var drugsCensor = censor.bind(null, 'drugs');