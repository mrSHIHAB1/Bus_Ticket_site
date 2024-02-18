function Scrolldown(){
    var foot=document.getElementById('navigate');
    foot.scrollIntoView({behavior:'smooth'});
}

let setc=0;
let totalsat=40;
function change(elementId) {
    var element = document.getElementById(elementId);
    var color=element.style.backgroundColor;

    if(color==='rgb(76, 175, 80)'){
       element.style.backgroundColor = " rgb(226 232 240)";
       element.style.color = "black";
       removePlaceItem(elementId);
       setc--;
       document.getElementById('seatcount').innerText=setc;
       totalsat++;
        document.getElementById('totalseat').innerText=totalsat;
    }
    else{
        element.style.backgroundColor = "#4CAF50";
        element.style.color = "white";
        addPlaceItem(elementId);
        calculate('add');
        setc++;
        document.getElementById('seatcount').innerText=setc;
        totalsat--;
        document.getElementById('totalseat').innerText=totalsat;
    }
   
}

function addPlaceItem(elementId) {
    var addPlaceDiv = document.getElementById('addplace');

    var newPlaceItem = document.createElement('div');
    var seatNumber = elementId; 
    newPlaceItem.id = 'addplaceitem';
    newPlaceItem.classList.add('flex', 'justify-between', 'p-1', 'text-gray-500');

    var seatNumber = elementId; 

    newPlaceItem.innerHTML = '<p id="' + seatNumber + '">' + seatNumber + '</p><p>Economy</p><p>550</p>';
    
    var hr = document.createElement('hr');
    addPlaceDiv.appendChild(newPlaceItem);
    addPlaceDiv.appendChild(hr);
}

function removePlaceItem(elementId) {
    
}
function coupon(){
    let inputField = document.getElementById('code');
    let couponCode = inputField.value;
    inputField.value= '';
     calculate(couponCode);
    
}
let total=0;
function calculate(con){
    if(con==='add'){
 total+=550;
 document.getElementById('toalprice').innerText=total;
 document.getElementById('grandtotal').innerText=total;
    }
    else{
 dis=total;

 
 if(con==='New15')
 {
   dis=total-(total*.15);

 }
 else if(con==='Couple 20'){
    dis=total-(total*.20);
 }
 document.getElementById('grandtotal').innerText=dis;
}
    
}
const inputField = document.getElementById('pphone');
const seatNumField = document.getElementById('seatcount');
const myButton = document.getElementById('mybtn');

// Add event listeners to the input field and the seat number field
inputField.addEventListener('input', checkConditions);
seatNumField.addEventListener('input', checkConditions); // Assuming you meant to add an event listener here

function checkConditions() {
    // Check if the input field and the seat number field are not empty
    if (inputField.value.trim() !== '' &&  parseInt(seatNumField.innerText )!== 0) {
        myButton.disabled = false; // Enable the button if conditions are met
    } else {
        myButton.disabled = true; // Otherwise, disable the button
    }
}

function go() {
    // Get reference to the hidden div
    const hiddenDiv = document.getElementById('next');
    const hiddenDiv1 = document.getElementById('main-1');
    const hiddenDiv2= document.getElementById('main-2');
    const hiddenDiv3= document.getElementById('main-3');

    // Toggle the visibility of the hidden div
    hiddenDiv.classList.toggle('hidden');
    hiddenDiv1.classList.toggle('hidden');
    hiddenDiv2.classList.toggle('hidden');
    hiddenDiv3.classList.toggle('hidden');
}
function back(){
    const hiddenDiv = document.getElementById('next');
    const hiddenDiv1 = document.getElementById('main-1');
    const hiddenDiv2= document.getElementById('main-2');
    const hiddenDiv3= document.getElementById('main-3');
    // Toggle the visibility of the hidden div
    hiddenDiv.classList.toggle('hidden');
    hiddenDiv1.classList.toggle('hidden');
    hiddenDiv2.classList.toggle('hidden');
    hiddenDiv3.classList.toggle('hidden');
}