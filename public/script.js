
// Function for naviagtion bar functionality
(function() {
    var burger = document.querySelector('.burger')
    var nav = document.querySelector('#'+burger.CDATA_SECTION_NODE.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');

    })
})(); 

