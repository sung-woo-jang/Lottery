const li = document.querySelectorAll('.day-grid li');
let arr = [];

const selectBtn = document.querySelector('.select-all-btn');
const recommend = document.querySelector('.recommend-btn');

li.forEach((v) => {
    v.addEventListener('click', (e) => {
        const target = e.target.innerText;
        const bool = arr.includes(target);

        if (bool) {
            arr = arr.filter((el) => el !== target);
        } else {
            arr.push(target);
        }

        v.classList.toggle('selected');
    });
});

selectBtn.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < li.length; i++) {
        const target = li[i].innerText;
        const bool = arr.includes(target);

        if (bool) {
            arr = arr.filter((el) => el !== target);
        } else {
            arr.push(target);
        }
        li[i].classList.toggle('selected');
    }
});

recommend.addEventListener('click', (e) => {
    e.preventDefault();
    const lotto = document.querySelector('.lotto').value;

    for (let i = 0; i < lotto; i++) {
        shuffle();

        const slice = arr.slice(0, 6).sort((a, b) => a - b);
        recommend.insertAdjacentHTML(
            'afterend',
            `<div class="select-num">추천번호: ${slice.join(', ')}</div>`
        );
    }
});

const shuffle = () => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};
