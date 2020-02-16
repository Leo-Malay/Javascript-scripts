/* This Javascript is for the purpose of displaying the currency exchange with predefined prices. */

function USD(currency_type){
    switch(currency_type){
        case 'USD':
            return 1; // USD price w.r.t. USD
        case 'INR':
            return 71.53; // INR price w.r.t. USD
        case 'AUSD':
            return 1.49; // AUSD price w.r.t. USD
        case 'YEN':
            return 109.76; // YEN price w.r.t. USD
        case 'EURO':
            return 0.92; // EURO price w.r.t. USD
        case 'CAND':
            return 1.33; // CAND price w.r.t. USD
        default:
            return 1;    
    }
}

function revert(){
    currency_1 = document.getElementById('cur1').value;
    currency_2 = document.getElementById('cur2').value;
    document.getElementById('cur1').value = currency_2;
    document.getElementById('cur2').value = currency_1;
}

function convert(){
    currency_1 = document.getElementById('cur1').value;
    currency_2 = document.getElementById('cur2').value;
    cur_value = document.getElementById('curr_val_1').value;
    value_usd = cur_value / USD(currency_1);
    value_display = value_usd * USD(currency_2);
    document.getElementById('curr_val_2').value = value_display;
    setTimeout(function(){convert();},1);
}

convert();