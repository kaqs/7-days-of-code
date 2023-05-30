alert("Let's go shopping!");
let addList;
let addAgain;

do {
    let shoppingList = [];
    let continueAdding = true;

    while (continueAdding) {
        addList = prompt("What would you like to add to your shopping list?");
        shoppingList.push(addList);
        
        addAgain = prompt("Would you like to add more items to your list? 1-Yes or 2-No");
        

        if (addAgain === "2") {
            alert("Let's see your list then");
            continueAdding = false;
        }
    }



} while (addAgain === "1")





//let categories = prompt ("What category would you like to add this item? \n Choose by the number:\n 1-Fruits & Veggies \n 2-Dairy & Meat \n 3-Frozen Food \n 4-Snacks & Sweets \n 5-Shelflife Food");

