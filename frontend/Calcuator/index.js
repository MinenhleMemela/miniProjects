var newLine = true;  //Bolean variable, determining if teh next thing a user type should be in a new line.
var value1;
var currentOperator;



/**
 * Even handler for when any button is clicked
 */
function digitBtnClicked(button)
{

    //if this is the new request then display only what the user gas clecked, but if not then display the current and the new buttons.
    if(newLine)
    {
        document.getElementById(`inputBox`).value = button;
        newLine = false;
    }
    else
    {
        //Storing the current value in order to make sure that ll values that are dded shows on the screen.
        var currentValue = document.getElementById(`inputBox`).value;
        //Displaying the buttons that are clicked in tbhe calculator screen.
        document.getElementById(`inputBox`).value = currentValue + button;

    }


}


/**
 * Even handler for when AC button is clicked
 */
function acButton()
{
    //Once AC is clicked empty everything and put a ZERO there.
    document.getElementById(`inputBox`).value = 0;

    //This is the flag that means start afresh, so after you have clicked AC, it will then override the ZEro that is displayed and display whatever button you want to display.
    newLine= true;

}

/**
 * Store the on-screen value
 * Remember the operator
 * Clear screen when next gigit is tyoed
 */

/**
 * Even handler for operator button
 */
function operatorButton(operator)
{
    currentOperator = operator;
    value1 = parseInt(document.getElementById(`inputBox`).value);  //parseInt - Convert into an integer
    newLine = true;

}


/**
 * Even handler for equals button
 */
function equalsBtn()
{
    var value2 = parseInt(document.getElementById(`inputBox`).value);
    var finalTotal;

    switch(currentOperator)
    {
        case `+`:
            finalTotal = value1 + value2;
            break;
        
        case `-`:
            finalTotal = value1 - value2;
            break;

        case `x`:
            finalTotal = value1 * value2;
            break;

        case `/`:
            finalTotal = value1 / value2;
            break;
    }
    
    document.getElementById(`inputBox`).value = finalTotal;
}
