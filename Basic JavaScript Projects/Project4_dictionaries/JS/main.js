function my_Dictionary () {            //A “dictionary” is “a key-value pair collection”.
    var Animal = {
        Species:"Dog",                 //Species is the KEY and Dog is the VALUE
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"        
    };
    delete Animal.Sound;               //As we covered earlier, most operators are written as symbols: +, -, /, etc. But some can be written as words. An example of this is the delete operator.
                                       //The output of this code would be: “undefined” since the value no longer exists in our “dictionary”.
    document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}