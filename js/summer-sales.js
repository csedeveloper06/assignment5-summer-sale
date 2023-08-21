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