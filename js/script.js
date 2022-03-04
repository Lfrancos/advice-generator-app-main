// select the items that I need
const button = document.querySelector('.circle');
const id = document.querySelector('.id');
const advise = document.querySelector('.advice');

// conditional for the time the advise has nothing in it.
if (!advise.value) {
    getAdvice();
}


button.addEventListener('click', getAdvice)

// function to get the data and add it to the html
async function getAdvice() {
    const data = await fetch('	https://api.adviceslip.com/advice');
    const slip = await data.json();

    id.textContent = slip.slip.id;
    advise.textContent = slip.slip.advice;

}
