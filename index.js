const li = document.querySelectorAll('.day-grid li');
let arr = [];

const button = document.querySelector('.button');
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

button.addEventListener('click', (e) => {
    e.preventDefault();
    const lotto = document.querySelector('.lotto').value;

    for (let i = 0; i < lotto; i++) {
        shuffle();

        const slice = arr.slice(0, 5).sort((a, b) => a - b);
        button.insertAdjacentHTML(
            'afterend',
            `<div class="select-num">추천번호: ${slice.join(', ')} + ${arr[5]}</div>`
        );
    }
});

const shuffle = () => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};
