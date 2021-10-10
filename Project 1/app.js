const closedHand = document.querySelector('.closed')
const openHand = document.querySelector('.open')

closedHand.addEventListener('click', () => {
    if (openHand.classList.contains('open')) {
        openHand.classList.add('active');
        closedHand.classList.remove('active');
    }
});

openHand.addEventListener('click', () => {
    if (closedHand.classList.contains('closed')) {
        closedHand.classList.add('active');
        openHand.classList.remove('active');
    }
});