const navarLink = document.querySelectorAll('.navbar__link')
navarLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navarLink.forEach(link => {
            link.classList.remove('navbar__link--active')
        })
        e.target.classList.add('navbar__link--active')
    })
})

const tabItems = document.querySelectorAll('.tab-item')
const tabContents = document.querySelectorAll('.tab__content-item');
tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabItems.forEach(tab => {
            tab.classList.remove('tab-item--active');
        })
        e.target.parentNode.classList.add('tab-item--active')

        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        const tabId = e.target.parentNode.dataset.tab;
        console.log(tabId);
                document.querySelector(`.tab__content-item[data-tab="${tabId}"]`).classList.add('active');

    })
})

