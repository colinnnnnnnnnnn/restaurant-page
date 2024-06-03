import './style.css';
import { generateHome } from './home';
import { generateMenu } from './menu';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

homeBtn.addEventListener('click', () => {
    homeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    homeBtn.style.color = 'white';
    menuBtn.style = '';
    aboutBtn.style = '';
});

menuBtn.addEventListener('click', () => {
    menuBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    menuBtn.style.color = 'white';
    homeBtn.style = '';
    aboutBtn.style = '';
});

aboutBtn.addEventListener('click', () => {
    aboutBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    aboutBtn.style.color = 'white';
    homeBtn.style = '';
    menuBtn.style = '';
});

homeBtn.addEventListener('click', () => {
    generateHome();
});

menuBtn.addEventListener('click', () => {
    generateMenu();
});