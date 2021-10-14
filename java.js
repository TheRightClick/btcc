//set global variable for amount
let  amount = 0  

//gets the amount field for retrieving value
let btcAmount = document.getElementById("inputAmount")

//listens for the button click to find value of BTC entered
document.getElementById("priceCheck").onclick = function() {getPrice()};

//does fetch to coinbase API
function getPrice() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };    

        
fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot", requestOptions)
//converts text response to json
.then(response => response.json())
//sends data to a function that calculates value
.then(data => setAmount(data))
.catch(error => console.log('error', error));
    }


function setAmount(data) {
    //converts the amount to an integer with 2 decimals
   amountInt = parseFloat(data.data.amount).toFixed(2)
   //multiplies the current BTC price by the amount of BTC entered
   calcAmount = parseFloat(amountInt * btcAmount.value).toFixed(2)
   //converts the calcAmount to curreny
   amountDollar = (calcAmount).toLocaleString('en-US', {
       style: 'currency', 
       currency: 'USD'
        })
        //gets and set the innerText of the modal with the value
   let priceDisplay = document.getElementById("priceDisplay")
   priceDisplay.innerText = '$' + amountDollar
   
    }


  

  

