(() => {
    const menuBtnRef = document.querySelector('[mobile-menu-button]');
    const mobileMenuRef = document.querySelector('[menu-modal]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') == true || falce;
        
        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
    });
})();