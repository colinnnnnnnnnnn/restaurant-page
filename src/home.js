

export function generateHome() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const slogan = document.createElement('div');
    slogan.innerText = '"Overpriced mediocre food - this is Mamaliga Bar"';
    content.appendChild(slogan);

    const reviews = document.createElement('ul');
    const review1 = document.createElement('li');
    review1.innerText = 'Wow! This is truly a thing!';
    reviews.appendChild(review1);

    const review2 = document.createElement('li');
    review2.innerText = 'I have finally discovered the feeling of nothing! A marvel of mediocrity!';
    reviews.appendChild(review2);

    const review3 = document.createElement('li');
    review3.innerText = 'I have never been so whelmed in my entire life!';
    reviews.appendChild(review3);

    content.appendChild(reviews);
    

}