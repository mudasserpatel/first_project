//Creating the variables
var rounds;
var num_rounds;
var comp_pick;
var user_pick;
var win_points = 0;
var loss_points = 0;
var tied_points = 0;
var user_play;
var comp_play;

//Prompting the user for the number of rounds they want to play
rounds = prompt("How many rounds do you want to play?");
num_rounds = parseInt(rounds,10);


//User picks for rock, paper or scissor
for(let i = 1; i <=num_rounds; i++){
    user_play = prompt("What will you pick? (Enter r for rock, p for paper, s for scissor)");
    //Assigning string values to a number
    if(user_play == "r"){
        user_pick = 0;
    }
    else if(user_play == "p"){
        user_pick = 1;
    }
    else if(user_play == "s"){
        user_pick = 2;
    }
    else{
        user_pick = 3;
    };
    //Computer picks for rock, paper or scissor
    comp_pick = Math.floor(Math.random()*3);
    if(comp_pick == 0){
        comp_play = "r";
    }
    else if(comp_pick == 1){
        comp_play = "p";
    }
    else{
        comp_play = "s";
    };
    //Conditional statements to determine if the user wins, lose, or ties.
    if((user_pick == 0 && comp_pick == 2)||(user_pick == 1 && comp_pick == 0)||(user_pick == 2 && comp_pick == 1)){
        win_points++;
        alert("You win! You picked "+user_play+" which beats "+comp_play);
    }
    else if ((user_pick == 0 && comp_pick == 1)||(user_pick == 1 && comp_pick == 2)||(user_pick == 2 && comp_pick == 0)||user_pick == 3){
        loss_points++;
        if(user_pick ==3){
            alert("You lose! You entered an invalid input!");
        }
        else{
            alert("You lose! The computer picked "+comp_play+" which beats "+user_play);
        };
    }
    else{
        tied_points++;
        alert("It's a tie! Both you and the computer picked "+user_play);
    };
    //Showing the results of all matches to the user
    if(i == num_rounds){
        alert("You won "+win_points+" times, you tied "+tied_points+" times, and you lost "+loss_points+" times.");
    };
};

