alert("Let's go shopping!");
let firstTime = true;
let nextStepChoice;
const categoryShoppingList = [[], [], [], [], []];
const categoriesNames = ["1-Fruits & Veggies:", "2-Dairy & Meat:", "3-Frozen & Shelflife Food:", "4-Bakery, Drinks & Snacks:", "5-Cleaning & Misc:"];
const removedProducts = [];

do {
    if (firstTime == false) {
        nextStepChoice = Number.parseInt(prompt("What would you like to do now?\n\n1-Add\n2-Remove\n3-Show my list\n4-I'm done!"));
    }

    if (nextStepChoice === 1 || firstTime) {
        const productChoice = prompt("What would you like to add to your shopping list?");

        const categoryChoice = prompt("What category would you like to add this item?\nChoose by the number:\n\n" + categoriesNames.join("\n"));
        const categoryNumber = Number.parseInt(categoryChoice);
        categoryShoppingList[categoryNumber - 1].push(productChoice);

    } else if (nextStepChoice === 2) {
        const removeChoice = prompt("What item would you like to remove?");
        
        const categoryChoice = prompt("What category would you like to remove this item?\nChoose by the number:\n\n" + categoriesNames.join("\n"));
        const categoryNumber = Number.parseInt(categoryChoice);
        const productShoppingList = categoryShoppingList[categoryNumber - 1];
        const productIndex = productShoppingList.indexOf(removeChoice);

        if(productIndex === -1){
            alert ("404 - Item not found");
        } else {
            productShoppingList.splice(productIndex, 1);
            removedProducts.push(removeChoice);
        }        

    } else if (nextStepChoice === 3) {
        let showMyList = '';

        for (let i = 0; i < categoriesNames.length; i++) {
            showMyList = showMyList + categoriesNames[i] + "\n" + categoryShoppingList[i].join(", ") + "\n\n";
        }

        alert("Here's a preview of your shopping list!:\n\n" + showMyList + "Removed items:\n" + removedProducts.join("\n"));

    } else if (nextStepChoice === 4) {
        alert("Let's see your list then");

    } else if (nextStepChoice > 4) {
        alert("Please enter a valid number");
    }

    firstTime = false;

} while (nextStepChoice != 4)


let myShoppingList = '';

for (let i = 0; i < categoriesNames.length; i++) {
    myShoppingList = myShoppingList + categoriesNames[i] + "\n" + categoryShoppingList[i].join(", ") + "\n\n";
}

alert("Here's your shopping list!:\n\n" + myShoppingList + "Removed items:\n" + removedProducts.join("\n"));

    // different approach FOR statement
    // let str = '';
    // for (let i = 0; i < myCategories.length; i++) {


    //   let str2 = '';
    //   for (let j = 0; j < shoppingList[i].length; j++) {
    //     str2 = `${str2} \n\t ${shoppingList[i][j]}`;
    //   }


    //   str = `${str} \n ${myCategories[i]} ${str2}\n`;
    // }

    //alert(str);



