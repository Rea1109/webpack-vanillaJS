export default function navbar() {
    const $navbar = document.createElement('nav');
    $navbar.className = 'navbar';

    const $logo = document.createElement('div');

    $navbar.append($logo);

    return $navbar;
}
