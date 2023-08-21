let total = 0;
function handleClick(target){
    const selectedItemsContainer = document.getElementById('itemsId');
    const elementName = target.parentElement.parentElement.nextSibling.nextSibling.childNodes[3].innerText; 
    console.log(elementName);
    const li = document.createElement("li");
    li.innerText = elementName;
    selectedItemsContainer.appendChild(li);
    const price = target.parentElement.parentElement.nextSibling.nextSibling.childNodes[5].innerText.split(' ')[0];
    console.log(price);
    total = parseFloat(total) + parseFloat(price);
    total = total.toFixed(2);
    console.log(total);
    document.getElementById('totalPriceId').innerText = total;
    if(total > 0){
        document.getElementById("purchaseId").disabled = false;
    }

    if(total>= 200){
        document.getElementById("applyBtnId").disabled = false;
    }

}

function goHome() {
    window.location.href="index.html";
}

function calculateDiscountPrice(){
    const couponFieldValue = document.getElementById('couponInputId').value;
    if("SELL200" === couponFieldValue){
        const totalPrice = document.getElementById('totalPriceId').innerText;
        const discountPrice = parseFloat(totalPrice) * 0.2;
        console.log(discountPrice);
        discountPrice = discountPrice.toFixed(2);
        document.getElementById('discountPriceId').innerText = discountPrice.toString;
    }
    return;
}