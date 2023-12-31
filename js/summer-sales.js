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
       const discountResult = parseFloat(totalPrice) * parseFloat(0.2);
       const fixedDiscountResult = discountResult.toFixed(2);
       document.getElementById('discountPriceId').innerText = fixedDiscountResult.toString();
       const discountPrice = document.getElementById('discountPriceId').innerText;
       const discountWithTotalPrice = parseFloat(totalPrice) - parseFloat(discountPrice); 
       const fixedDiscountWithTotalPrice = discountWithTotalPrice.toFixed(2); 
       document.getElementById('discountTotalPriceId').innerText = fixedDiscountWithTotalPrice.toString();
    }
    else{
        return alert("please provide valid input");
    }
   
}