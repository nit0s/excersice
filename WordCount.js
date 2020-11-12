const { time } = require("console");

var originalString ='Hola mundo Hola mundo';
var counter;
var boxSaver = []
var times = []

function countWords(word){
    word = word.split(" ");
for(i= 0; i < word.length; i++){
    counter = 0  
    for(x=0; x < word.length; x++){
              
        if(word[i] == word[x] && (boxSaver.includes(word[i]) == false)){
            counter+=1;
            boxSaver.push(word[i])
        }else{
            if(word[i] == word[x]){ counter+=1 }

        }
    }
   times.push(counter);
}

}//end of countWords

function printResults(){
    console.log('original String: '+originalString)
    console.log('results: ')

    for(i in boxSaver){
        console.log(boxSaver[i]+": "+times[i]);
    }

}

countWords(originalString);
printResults();

