function recognize(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/z5Z3ebIC8/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("sound").innerHTML= "I can hear- "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy- "+(results[0].confidence * 100).toFixed(2)+"%";

        picture= document.getElementById("image");

        if (results[0].label == "Bark"){
            picture.src="dog.png";
        }

        if (results[0].label == "Meow"){
            picture.src="catJi.gif";
        }

        if (results[0].label == "Moo"){
            picture.src="cow.png";
        }

        if (results[0].label == "Roar"){
            picture.src="lion-2.gif";
        }

        else{
              picture.src="ear.png";
        }
    }
}