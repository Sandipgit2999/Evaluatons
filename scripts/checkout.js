// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let s2=JSON.parse(localStorage.getItem('amount'));

let h1=document.getElementById('wallet');
h1.innerText=s2;


document.getElementById('confirm').addEventListener('click',seedata);

function seedata(){

    let no_of_seats=document.getElementById('number_of_seats').value

    let totalamount=Number(no_of_seats)*100;

    if(totalamount>s2){
        alert('Insufficient balance');
    }else{
        alert('Booking successful');
    }
    s2=s2-totalamount;
    localStorage.setItem('amount',JSON.stringify(s2));
    h1.innerText=s2;
}
