const container = document.querySelector('#container');
container.style.cssText = `grid-template-columns: repeat(16, 1fr)`;
for (let i = 0; i < 256; i++){
    const grid = document.createElement('div')
    container.style
    grid.classList.add('grid');
    grid.addEventListener("mouseover", (e) => {
        grid.classList.add('hover');
    });
    container.appendChild(grid);
}

const btn = document.querySelector('#btn');
let ans = null;
btn.addEventListener("click", (e) => {
    const divs = document.querySelectorAll('.grid');
    divs.forEach(obj => obj.remove());
    ans = prompt('How many squares per side? (Up to 100)')
    while (ans > 100)
    {
        alert('Greater than 100');
        ans = prompt('How many squares per side? (Up to 100)');
    }
    container.style.cssText = `grid-template-columns: repeat(${ans}, 1fr)`;
    for (let i = 0; i < Math.pow(ans,2); i++){
        const grid = document.createElement('div')
        grid.classList.add('grid');
        grid.addEventListener("mouseover", (e) => {
            grid.classList.add('hover');
        });
        container.appendChild(grid);
    }
});