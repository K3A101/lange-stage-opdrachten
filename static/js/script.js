document.addEventListener("DOMContentLoaded", function () {
const submitButton = document.querySelector('form button');
const subMenu = document.querySelector('.header-nav .has-submenu ');
const subMenuBtn = document.querySelector('.menu-button ');
const subMenuContainer = document.querySelector('.header-nav .has-submenu ul');
const hamburgerMobile = document.querySelector('.nav-toggle');

const mobileHeader = document.querySelector('.off-canvas-nav .has-submenu');

submitButton.addEventListener('click', e =>{
    e.preventDefault()
})
    /*
     * Header:
     * Sticky add class on scroll
     */

    function headerSticky() {

        let header = document.getElementById('top');

        if( window.pageYOffset > 20  ) {
            header.classList.add('top-scrolled');
        } else {
            header.classList.remove('top-scrolled');
        }
    }

    headerSticky();

    window.onscroll = headerSticky;
    window.onresize = headerSticky;

    /*
   * Navigation menu
   * Open the navigation Menu when the button is clicked
   */
subMenu.addEventListener('click', toggleMenu);
hamburgerMobile.addEventListener('click', mobileToggleMenu)
    function toggleMenu() {
        subMenuBtn.classList.toggle('active');
        subMenuContainer.classList.toggle('open');
    }

    function mobileToggleMenu() {
        this.classList.toggle('active');
        document.querySelector('nav.off-canvas-nav').classList.toggle('active');
        mobileHeader.classList.toggle('active');
    }

    if(mobileHeader.classList.contains('active')){
        subMenuContainer.classList.toggle('close');

    }

    /*
     * Table
     * Make the table responsive, by setting a class, and wrapping it in a container
     */

    function wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }

    let tables = document.querySelectorAll('table');
    tables.forEach((table) => {

        // Add class
        table.classList.add('table');

        // Wrap table with a div.table-responsive
        let tableWrapper = document.createElement('div')
        tableWrapper.classList.add('table-responsive')

        wrap(table, tableWrapper);
    });

});
//if swiper.js don't exist add the swiper-deactivated class
if(document.querySelector('.swiper-initialized')){
    document.querySelector('.swiper-wrapper').classList.remove('.swiper-deactivated');
}else{
    document.querySelector('.swiper-wrapper').classList.add('swiper-deactivated');
}


