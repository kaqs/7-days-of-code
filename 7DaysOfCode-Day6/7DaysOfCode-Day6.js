alert("Let's go shopping!");
let productChoice;
let continueAddingChoice;

do {
    let categoryShoppingList = [[], [], [], [], []];
    let categories = ["1-Fruits & Veggies:", "2-Dairy & Meat:", "3-Frozen & Shelflife Food:", "4-Bakery & Snacks:", "5-Cleaning:"];
    let continueAdding = true;

    while (continueAdding) {
        productChoice = prompt("What would you like to add to your shopping list?");

        let categoryChoice = prompt("What category would you like to add this item?\nChoose by the number:\n\n" + categories.join("\n"));
        const categoryNumber = Number.parseInt(categoryChoice);
        categoryShoppingList[categoryNumber - 1].push(productChoice);

        do {

            continueAddingChoice = prompt("Would you like to add more items to your list?\n\n1-Yes\n2-No");

            if (continueAddingChoice != "1" && continueAddingChoice != "2") {
                alert("Please enter a valid number");
            } else if (continueAddingChoice === "2") {
                alert("Let's see your list then");
                continueAdding = false;
            }
        } while (continueAddingChoice != "1" && continueAddingChoice != "2")
    }

    let myShoppingList = '';

    for (let i = 0; i < categories.length; i++) {
        myShoppingList = myShoppingList + categories[i] + "\n" + categoryShoppingList[i].join(", ") + "\n\n";
    }

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


    alert("Here's your shopping list!:\n\n" + myShoppingList);

} while (continueAddingChoice === "1")
