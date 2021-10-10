const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let costOfTicket = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event)=>{
    // console.log(event.target);
    // event.target.classList.toggle('active');
    if(!event.target.classList.contains('booked') && !event.target.classList.contains('active')){
        // console.log('Это место НЕ занято');
        event.target.classList.add('active');
        totalPrice += costOfTicket;
        // console.log(totalPrice);
        totalPriceTag.textContent = totalPrice;
    }
    else if(event.target.classList.contains('active') && (totalPrice != 0)){
        event.target.classList.remove('active');
        totalPrice -= costOfTicket;
        // console.log(totalPrice);
        totalPriceTag.textContent = totalPrice;
    }
})