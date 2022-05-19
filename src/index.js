import { text } from './js/home';
import './style/style.css';
import Logo from './public/image/logo.png';
import print from './print';

function component() {
    const root = document.createElement('div');
    const button = document.createElement('button');

    root.innerHTML = text;
    root.classList.add('hello');

    button.innerHTML = 'click me';
    button.onclick = print;

    const logo = new Image();
    logo.src = Logo;

    root.appendChild(button);
    root.appendChild(logo);

    return root;
}

document.body.appendChild(component());
