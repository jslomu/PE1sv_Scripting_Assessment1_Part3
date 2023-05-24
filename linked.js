

/**
 * Declare the cost of promotional pizza packages
 * 
 * @date 5/23/2023 - 10:53:47 PM
 *  
 * @param {number} orderThreeCost The cost of 3 pizzas
 * @param {number} orderTwoCost The cost of 2 pizzas
 * @param {number} orderOneCost The cost of a single pizza
 */

const orderThreeCost = parseFloat(14.00)
const orderTwoCost = parseFloat(12.00)
const orderOneCost = parseFloat(6.45)


/**
 * This function will accept a whole number of pizzas
 * and calculate the best possible price and combination.
 */

function checkQuantity() {
    
    /**
     * Retrieve user input and validate the data.
     * 
     * @param {number} totalPizzas The total number of pizzas for an order
     */
    
    document.getElementById("message").innerHTML = ""
    const totalPizzas = document.getElementById("quantity").value;

    
    if (totalPizzas <= 0 ) {
        document.getElementById("message").innerHTML = "Validation error: Input must be greater than 0!";
        return;
    }

    if (totalPizzas % 1 != 0) {
        document.getElementById("message").innerHTML = "Validation error: Input must be a whole number!";
        return;
    }

    /**
     * Process the number of pizzas ordered.
     * Determine how many "lots" of pizza make up the entire order.
     * Process pizza order until there are no more left to process.
     * 
     * @param {number} remainingPizzas The number of pizzas yet to be calculated
     * @param {number} orderThree The number of "3 pizzas" to be ordered
     * @param {number} orderTwo The number of "2 pizzas" to be ordered
     * @param {number} orderOne The number of "individual pizzas" to be ordered
     */
    
    let remainingPizzas = totalPizzas;
    let orderThree = 0;
    let orderTwo = 0;
    let orderOne = 0;
    console.log("1 - " + remainingPizzas);

    do {
        if (remainingPizzas >= 3) {
            remainingPizzas -= 3;
            orderThree += 1;
            console.log("2 - " + remainingPizzas);
        }
        if (remainingPizzas == 2) {
            remainingPizzas -= 2;
            orderTwo += 1;
            console.log("3 - " + remainingPizzas);
        }
        if (remainingPizzas == 1) {
            remainingPizzas -= 1;
            orderOne += 1;
            console.log("4 - " + remainingPizzas);
        }
    } while (remainingPizzas != 0)

    /**
     * Calculate the total cost of pizzas by multiplying the values processed above with their relevant prices.
     * Add the sums together for the total cost.
     * Print the total cost and the combination of "lots" to make the full order.
     * 
     * @param {number} totalCost The total cost for the order
     */

    const totalCost = (orderThree * orderThreeCost) + (orderTwo * orderTwoCost) + (orderOne * orderOneCost)
    document.getElementById("message").innerHTML = "Total Cost is $" + totalCost.toFixed(2)
    document.getElementById("message").innerHTML += "<br><br>"
    document.getElementById("message").innerHTML += "Consisting of the following order combination: <br>"
    document.getElementById("message").innerHTML += orderThree + " lot(s) of Three Pizzas @ $" + orderThreeCost.toFixed(2) + " per lot. <br>"
    document.getElementById("message").innerHTML += orderTwo + " lot(s) of Two Pizzas @ $" + orderTwoCost.toFixed(2) + " per lot. <br>"
    document.getElementById("message").innerHTML += orderOne + " individual Pizzas @ $" + orderOneCost.toFixed(2) + " per pizza. <br>"
}
