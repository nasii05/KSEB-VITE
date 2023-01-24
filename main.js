import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <div class="container">
  <div class="user-input">
      <div class="userinput">
      <img src="./public/kseb.png" alt="" id="kseb"> 
          <input type="text" id="username" class="input" placeholder="username">
          <input type="number" class="input" id="consumerno" name="" placeholder="consumer no">
          <h1>Consumer address</h1>
          <textarea name="" id="address" cols="30" rows="10" placeholder="consumer address"></textarea>
          <h1 id="cu">Current Unit</h1>
          <input type="number" class="input" id="currentunit">
          <h1 id="pu">Previous Unit</h1>
          <input type="number" class="input" id="previousunit">
          <input type="submit" value="Submit" id="btn">
      </div>




  </div>
  <div class="user-out">
      <h1 class="newfont">Bill invoice</h1>
      <hr>
      <h1 id="out1"  class="newfont">consumer name: </h1>
      <h1 id="ot1" class="out"></h1>
      <hr>
      <h1 id="out2"  class="newfont">consumer no: </h1>
      <h1 id="ot2" class="out"></h1>
      <hr>
      <h1 id="out3"  class="newfont">consumer address:</h1>
      <h1 id="ot3" class="out"></h1>
      <hr>
      <h1 id="out4"  class="newfont">Current Unit:</h1>
      <h1 id="ot4" class="out"></h1>
      <hr>
      <h1 id="out5"  class="newfont">Previous Unit:</h1>
      <h1 id="ot5" class="out"></h1>
      <hr>
      <h1 id="out6"  class="newfont">total bill:</h1>
      <h1 id="ot6" class="out"></h1> 
      <hr>
  </div>
</div>
  </div>
`



//user details
let input1 = document.querySelector('#username')
let input2 = document.querySelector('#consumerno')
let input3 = document.querySelector('#address')
let currentunit = document.querySelector('#currentunit')
let previousunit = document.querySelector('#previousunit')

//output fields
let ot1 = document.querySelector('#ot1')
let ot2 = document.querySelector('#ot2')
let ot3 = document.querySelector('#ot3')
let ot4 = document.querySelector('#ot4')
let ot5 = document.querySelector('#ot5')
let ot6 = document.querySelector('#ot6')

//button
let submit = document.querySelector('#btn')


//submit button events
submit.addEventListener('click',(e)=>{  
    e.preventDefault()

    let flag = 1
  if(flag==1){
    ot1.innerHTML = obj1.consumername.value
    ot2.innerHTML = obj1.consumerno.value
    ot3.innerHTML = obj1.consumeraddress.value
    ot4.innerHTML = obj1.currentunit.value
    ot5.innerHTML = obj1.previousunit.value
     ot6.innerHTML = obj1.previousunit.value
        
   

 //meter reading function     
function calculate(){
    let electricitybill;
    let currentbill = currentunit.value - previousunit.value;
    const surcharge = 3;
    const deposit = 5;
    if(currentbill <= 350){
        electricitybill = currentbill*6.60+surcharge+deposit;
    }else if(currentbill >= 350 && currentbill < 400){
        electricitybill = currentbill*6.90+surcharge+deposit;
    }else if(currentbill >= 400 && currentbill < 500){
        electricitybill = currentbill*7.10+surcharge+deposit;
    }
    else if(currentbill >= 500){
        electricitybill = currentbill*7.90+surcharge+deposit;
    }

    
    if(currentunit.value&&previousunit.value){
    ot6.innerHTML = electricitybill 
    }  

    console.log('calculations are done!!!')

    
}
calculate()
flag=0;



}
if(flag==0){
    input1.value=''
    input2.value=''
    input3.value=''
    currentunit.value=''
    previousunit.value=''
}
   
})  


//consumer class
class consumer{
    constructor(consumername, consumerno, consumeraddress){
        this.consumername=consumername
        this.consumerno=consumerno
        this.consumeraddress=consumeraddress
    }
}
//inheriting the consumer class
class usage extends consumer{
    constructor(consumername, consumerno, consumeraddress,currentunit,previousunit){
        super(consumername,consumerno,consumeraddress)
        this.currentunit=currentunit
        this.previousunit=previousunit
    }
}


//creating object
let obj1 = new usage()
obj1.consumername = input1
obj1.consumerno = input2
obj1.consumeraddress = input3
obj1.currentunit = currentunit
obj1.previousunit = previousunit








