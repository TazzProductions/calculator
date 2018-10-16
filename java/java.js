function again() {
    var y = "yes";
    var n = "no";
    var pets = ["spider","parrot", "snake","fish","hamster","rabbit","dog","cat"];
    var answer1 = prompt("do you like incescts?");
    // YES Answers ____----------------------____--
    if (answer1 == y){
        delete pets[1];
        delete pets[2];
        delete pets[3];
        delete pets[4];
        delete pets[5];
        delete pets[6];
        delete pets[7];
        alert("Cool so your pet of interest is a " + pets);
    }
    // NO Answers______-----------------------------______
    if (answer1 == n){
        delete pets[0];
        answer2 = prompt("would you prefer marine animals?");
        if (answer2 == n){
            delete pets[2];
            delete pets[3];
            answer4 = prompt("do you have allergies?");
            if (answer4 == n){
                answer5 = prompt("Do you like to cage innocent beings and deprive them of a natural life");
                if (answer5 == n){
                    delete pets[1];
                    delete pets[4];
                    delete pets[5];
                    return answer6;
                if (answer5 == y){
                    delete pets[6];
                    delete pets[7];
                    answer7 = prompt("would you like a small animal?");
                    if (answer7 == y){
                        delete pets[5];
                        delete pets[1];
                        alert("your animal of choice is a " + pets);
                    if (answer7 == n){
                        delete pets[4];
                        alert("your pet of choice is a " + pets);
                    }
                    }
                }
                    answer6 = prompt("would you prefer to excercise?");
                    if (answer6 == n){
                        delete pets[7];
                        alert("your animal of choice is a " + pets);
                    }
                    if (answer6 == y){
                        delete pets[6];
                        alert("your animal of chice is a " + pets);
                    }
                }
            }
            // ANSWER4 YES_--
            if (answer4 == y){
                delete pets[1];
                delete pets[5];
                delete pets[6];
                delete pets[7];
                alert("Cool so i depict that a " + pets + " is just for you.");
            }
        }
        // YES Answer
        if (answer2 == y){
            delete pets[1];
            delete pets[4];
            delete pets[5];
            delete pets[6];
            delete pets[7];
            answer3 = prompt("Do you smile in the face of danger?");
            if (answer3 == y){
                delete pets[3];
                alert("your pet of intrest is " + pets);
            if (answer3 == n){
                delete pets[2];
                alert("your pet of intrest is " + pets[3])
            }
            }
        }
    }
}
again();
