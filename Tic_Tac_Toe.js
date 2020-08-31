// This is the javascript file for the Tic Tac Toe game.

// Declaring the global variables.
var count = 0;
var arr = new Array(10);
arr = [0,1,2,3,4,5,6,7,8,9]; 
var is_over = false;
d_arr1 = document.getElementById('arr1');
d_arr2 = document.getElementById('arr2');
d_arr3 = document.getElementById('arr3');
d_arr4 = document.getElementById('arr4');
d_arr5 = document.getElementById('arr5');
d_arr6 = document.getElementById('arr6');
d_arr7 = document.getElementById('arr7');
d_arr8 = document.getElementById('arr8');
d_arr9 = document.getElementById('arr9');

function main(arr_num){
    // Main function of the game operation.
    if(is_over == false){
        if(turn(count) == 1){
            player(1,arr_num);
            num = check_win(1);
            display(is_over,num);
        }
        else{
            player(2,arr_num);
            num = check_win(2);
            display(is_over,num);
        }
    }
    else{
        document.getElementById('alert').innerHTML = "Reload to start a new game!"
    }
}

function turn(num){
    // This functions decides which player's turn is next.
    if(num % 2 == 0){
        return 1;
    }
    else{
        return 2;
    }
}

function player(num,arr_num){
    // This function onclick displays the player checkmark.
    if(num == 1){
        if(arr[arr_num] == 'O' || arr[arr_num] == 'X'){
            console.log("Tnvalid Move by player 1!");
        }
        else{
            document.getElementById('arr' + arr_num).innerHTML = "X";
            arr[arr_num] = 'X';
            count++;
        }
    }
    else if(num == 2){
        if(arr[arr_num] == 'O' || arr[arr_num] == 'X'){
            console.log("Tnvalid Move by player 2!");
        }
        else{
            document.getElementById('arr' + arr_num).innerHTML = "O";
            arr[arr_num] = 'O';
            count++;
        }
    }
    else{
        console.log("Invalid Player Assessment!");
    }
}

function check_win(num){
    // This function checks for the give player num if he has won or not.
    if(arr[1] == arr[2] && arr[2] == arr[3]){
        is_over = true;
        return num;
    }
    else if(arr[4] == arr[5] && arr[5] == arr[6]){
        is_over = true;
        return num;
    }
    else if(arr[7] == arr[8] && arr[8] == arr[9]){
        is_over = true;
        return num;
    }
    else if(arr[1] == arr[4] && arr[4] == arr[7]){
        is_over = true;
        return num;
    }
    else if(arr[2] == arr[5] && arr[5] == arr[8]){
        is_over = true;
        return num;
    }
    else if(arr[3] == arr[6] && arr[6] == arr[9]){
        is_over = true;
        return num;
    }
    else if(arr[1] == arr[5] && arr[5] == arr[9]){
        is_over = true;
        return num;
    }
    else if(arr[3] == arr[5] && arr[5] == arr[7]){
        is_over = true;
        return num;
    }
    else if(arr[1] != 1 && arr[2] != 2 && arr[3] != 3&& arr[4] != 4 && arr[5] != 5 && arr[6] != 6 && arr[7] != 7 && arr[8] != 8 && arr[9] != 9){
        is_over = true;
        return 3;
    }
    else{
        console.log("No winner at the moment!");
        return 4;
    }
}
function display(is_over,num){
    if(is_over == true){
        if(num == 1){
            alert("Player 1 Wins !");
        }
        else if(num == 2){
            alert("Player 2 Wins !");
        }
        else if(num == 3){
            alert("Its a Tie, I guess !");
        }
        console.log("Game's over buddy!")
    }
    else{
        console.log("Game is on!")
    }
}
