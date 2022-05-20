import './style/index.css';
import navbar from './js/navbar';
import main from './js/main';
import footer from './js/footer';

function app() {
    const $root = document.createElement('div');
    $root.setAttribute('id', 'root');

    $root.appendChild(navbar());
    $root.appendChild(main());
    $root.appendChild(footer());

    return $root;
}

document.body.appendChild(app());
