export function generateMenu() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    
    const lasang = document.createElement('div');
    lasang.innerText = 'lasang';
    content.appendChild(lasang);
}