alert("Let's go shopping!");
let productChoice;
let nextStepChoice;
let questionRemove;
let removedProduct;
let listRemoved;
let showMyList;


do {
    let categoryShoppingList = [[], [], [], [], []];
    let categories = ["1-Fruits & Veggies:", "2-Dairy & Meat:", "3-Frozen & Shelflife Food:", "4-Bakery & Snacks:", "5-Cleaning & Misc:"];
    let continueAdding = true;

    while (continueAdding) {
        productChoice = prompt("What would you like to add to your shopping list?");

        let categoryChoice = prompt("What category would you like to add this item?\nChoose by the number:\n\n" + categories.join("\n"));
        const categoryNumber = Number.parseInt(categoryChoice);
        categoryShoppingList[categoryNumber - 1].push(productChoice);

        do {

            nextStepChoice = Number.parseInt(prompt("What would you like to do now?\n\n1-Add\n2-Remove\n3-Show my list\n4-I'm done!"));

            if (nextStepChoice > 4) {
                alert("Please enter a valid number");
            } else if (nextStepChoice === 2) {
                questionRemove = prompt("What item would you like to remove?");

                let categoryChoice = prompt("What category would you like to remove this item?\nChoose by the number:\n\n" + categories.join("\n"));
                const categoryNumber = Number.parseInt(categoryChoice);
                categoryShoppingList[categoryNumber - 1].splice(categories.indexOf(questionRemove), 1);

                console.log(categoryShoppingList);
            } else if (nextStepChoice === 4) {
                alert("Let's see your list then");
                continueAdding = false;
            }


        } while (nextStepChoice > 4)
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

} while (nextStepChoice === "1")
