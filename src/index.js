import './style.css';
import { generateHome } from './home';
import { generateMenu } from './menu';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

homeBtn.addEventListener('click', () => {
    generateHome();
});

menuBtn.addEventListener('click', () => {
    generateMenu();
});