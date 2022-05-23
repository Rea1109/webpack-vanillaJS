import navbar from './js/component/common/navbar';
import './style/index.css';

function app() {
    const $root = document.createElement('div');
    $root.setAttribute('id', 'root');

    $root.append(navbar());

    return $root;
}

document.body.appendChild(app());

document.body.addEventListener('click', (event) => {
    if (event.target.href) {
        event.preventDefault();
        console.log('body click');
    }
});

window.addEventListener('popstate', () => {
    console.log('popevent');
});
