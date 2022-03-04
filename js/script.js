const button = document.querySelector('.circle');
const id = document.querySelector('.id');
const advise = document.querySelector('.advice');

button.addEventListener('click', getAdvice)

async function getAdvice() {
    const data = await fetch('	https://api.adviceslip.com/advice');
    const slip = await data.json();
    id.textContent = slip.slip.id;
    advise.textContent = slip.slip.advice;

    // console.log(slip.slip.id);
}

// getAdvice();