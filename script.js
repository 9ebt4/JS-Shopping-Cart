let drinks = [];
function AddDrink(drink, cost){
    let newDrink ={
        Drink:drink,
        Cost: cost
    };
    //Quantity
    let quantity = prompt("How many would you like to purchase?",1);
    for(let i =0; i<quantity; i++){
        drinks.push(newDrink);
           //dom manipulation
        document.querySelector(".cart").innerHTML += `<li>${newDrink.Drink} $${newDrink.Cost}</li>`;
    }
 
    
}
function DisplayDrinks(){
    let total = 0;
    drinks.forEach((d)=> {
        console.log(`Drink: ${d.Drink} Cost:$${d.Cost}`);
        total += d.Cost;
        
    })
    let tax = total * .06
    let grandTotal = total + tax;

    console.log(`Total = ${total.toFixed(2)}`);
    console.log(`Tax: ${tax.toFixed(2)}`)
    console.log(`Grand Total = ${grandTotal.toFixed(2)}`)
    Cart=[];
    console.log(`Cart Cleared`)
}


