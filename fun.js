function Scrolldown(){
    var foot=document.getElementById('navigate');
    foot.scrollIntoView({behavior:'smooth'});
}

let setc=0;
let totalsat=40;

let ch=[];
function change(elementId) {
    var element = document.getElementById(elementId);
    var color=element.style.backgroundColor;

    
        if(setc>=4){
            window.alert("You have selected maximum");
        }
        else{
        
        element.style.backgroundColor = "#4CAF50";
        element.style.color = "white";
        
        
        const index = ch.indexOf(elementId);
        if (index === -1) {
            addPlaceItem(elementId);
        calculate('add');
        setc++;
        document.getElementById('seatcount').innerText=setc;
        totalsat--;
        document.getElementById('totalseat').innerText=totalsat;
        ch.push(elementId);
        } else {
            window.alert('added');
        }
        
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
    if(setc==4){
    let inputField = document.getElementById('code');
    let couponCode = inputField.value;
    inputField.value= '';
     calculate(couponCode);
    }
    else{
        window.alert("You nedd to select 4 seat");
    }
    
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


inputField.addEventListener('input', checkConditions);
seatNumField.addEventListener('input', checkConditions); 

function checkConditions() {

    if (inputField.value.trim() !== '' &&  parseInt(seatNumField.innerText )!== 0) {
        myButton.disabled = false;
    } else {
        myButton.disabled = true; 
    }
}

function go() {
    
    const hiddenDiv = document.getElementById('next');
    const hiddenDiv1 = document.getElementById('main-1');
    const hiddenDiv2= document.getElementById('main-2');
    const hiddenDiv3= document.getElementById('main-3');


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
   
    hiddenDiv.classList.toggle('hidden');
    hiddenDiv1.classList.toggle('hidden');
    hiddenDiv2.classList.toggle('hidden');
    hiddenDiv3.classList.toggle('hidden');
}




