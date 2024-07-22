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

const reviewItems = document.querySelectorAll('.review-item')
const btnNext = document.querySelector('.review__control-right')
const btnBack = document.querySelector('.review__control-left')
const reviewDots = document.querySelectorAll('.review__dot')
let currentIndex = 0;
btnNext.addEventListener('click', (e) => {
    if (currentIndex < reviewItems.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = currentIndex;
    }
    reviewItems.forEach((item) => {
        item.style.transform = `translateX(${-(currentIndex) * 100}%)`;
    });
    const currentReviewDot = document.querySelector(`.review__dot[data-index="${currentIndex}"]`);
    const preReviewDot = document.querySelector(`.review__dot[data-index="${currentIndex - 1}"]`);
    preReviewDot.classList.remove('review__dot--active')
    currentReviewDot.classList.add('review__dot--active')

})

btnBack.addEventListener('click', () => {
    if (0 < currentIndex && currentIndex <= reviewItems.length - 1) {
        currentIndex--;
    }
    else {
        currentIndex = 0
    }
    reviewItems.forEach(item => {
        item.style.transform = `translateX(${-currentIndex * 100}%)`
    })
    const currentReviewDot = document.querySelector(`.review__dot[data-index="${currentIndex}"]`);
    const preReviewDot = document.querySelector(`.review__dot[data-index="${currentIndex + 1}"]`);
    preReviewDot.classList.remove('review__dot--active')
    currentReviewDot.classList.add('review__dot--active')
})


reviewDots.forEach(reviewDot => {
    reviewDot.addEventListener('click', (e) => {
        reviewDots.forEach(reviewDot => {
            reviewDot.classList.remove('review__dot--active')
        })
        index = e.target.dataset.index;
           reviewItems.forEach(item => {
        item.style.transform = `translateX(${-index * 100}%)`
           })
        e.target.classList.add('review__dot--active')
    })
}) 
