

export function generateHome() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const slogan = document.createElement('div');
    slogan.innerText = '"Overpriced mediocre food - this is Mamaliga Bar"';
    content.appendChild(slogan);

    const reviews = document.createElement('ul');
    const review1 = document.createElement('li')

}