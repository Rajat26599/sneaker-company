var itemCount = 0;
const count = document.getElementsByClassName('count')[0];
count.innerHTML = itemCount;

const increase = document.getElementsByClassName('increase')[0];
increase.addEventListener('click', () => {
    itemCount += 1;
    count.innerHTML = itemCount;
})

const decrease = document.getElementsByClassName('decrease')[0];
decrease.addEventListener('click', () => {
    if(itemCount>0) itemCount -= 1;
    count.innerHTML = itemCount;
})