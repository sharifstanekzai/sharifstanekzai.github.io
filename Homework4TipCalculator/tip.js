function calcTip() {

    let subTotal = parseFloat(document.getElementById("subtotal").value);
    let tip = parseFloat(document.getElementById("tip").value);
    if (!isNaN(subTotal) && !isNaN(tip)) {
        let total = subTotal + (subTotal * tip / 100);
        document.getElementById("total").innerHTML = "$" + total;
    }
    else
    {
        document.getElementById("subtotal").value="";
        document.getElementById("tip").value="";
        document.getElementById("total").innerHTML = "$0.00";
    }
}