const container = document.getElementById('intro');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const tech = document.getElementById('tech');
const contact = document.getElementById('contact');
const svgList = document.querySelectorAll('.tech svg');
const DELAY = 0.4;
const propList = {
    el: ".intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    wingSpan: 23.00,
    separation: 50.00,
    alignment: 38.00,
    cohesion: 29.00,
    quantity: 3.00,
    backgroundColor: '#f6f5f1'
  };
window.onload = function () {
    const text = container.querySelector('.content h1');
    const btn = container.querySelector('.content .my-btn');
    text.classList.add('ani-left');
    btn.classList.add('ani-right');


window.addEventListener('scroll', function() {
    if (window.scrollY > container.clientHeight - 500) {
        const title = about.querySelector('.title');
        const hr = about.querySelector('hr');
        const img = about.querySelector('.about-img');
        const text = about.querySelectorAll('.text p');
        title.classList.add('ani-right');
        hr.classList.add('ani-right');
        text[0].classList.add('appear');
        text[1].classList.add('appear');
        img.classList.add('ani-left');
        setTimeout(() => {
            img.classList.add('float');
        }, 3000);
    }
    if (window.scrollY > (about.offsetTop + about.offsetTop / 4)) {
        const title = projects.querySelector('.title');
        const hr = projects.querySelector('hr');
        const items = projects.querySelectorAll('.card-wrapper');
        items.forEach((item, i) => {
            item.style.animationDelay = `${DELAY * i}s`;
            item.classList.add('ani-up');
        });
        title.classList.add('ani-left');
        hr.classList.add('ani-left');
    }
    if (window.scrollY > (projects.offsetTop + projects.offsetTop / 4)) {
        const title = tech.querySelector('.title');
        const hr = tech.querySelector('hr');
        title.classList.add('ani-right');
        hr.classList.add('ani-right');
        svgList.forEach((svg, i) => {
            svg.style.animationDelay = `${DELAY * i}s`;
            svg.classList.add('ani-up');
        });
    }
    if (window.scrollY > tech.offsetTop + 500) {
        const title = contact.querySelector('.title');
        const hr = contact.querySelector('hr');
        title.classList.add('ani-left');
        hr.classList.add('ani-left');
    }
});

svgList.forEach(svg => {
    svg.addEventListener('mouseover', (el) => {
        el.currentTarget.style.bottom = '10px';
})
    svg.addEventListener('mouseout', (el) => {
        el.currentTarget.style.bottom = '0px';
})
}); 

    // dark/light mode
    const modeBtn = document.getElementById('mode-btn');
    let dark = false;
    modeBtn.addEventListener('click', () => {
        dark = !dark;
        if (dark) {
            document.body.style.backgroundColor = '#1d2644';
            document.body.style.color = '#FFF';
            modeBtn.innerHTML = 'Light mode';
            modeBtn.classList.add('btn-outline-light');
            modeBtn.classList.remove('btn-outline-secondary');
            text.style.color = '#FFF';
            const btn = document.querySelector('a.my-btn');
            btn.removeAttribute('light');
            document.querySelector('canvas').remove();
            const props = {color1: '#ff681c', color2: '#FFF', backgroundColor: '#07192f'};
            changeBackground(props);
        } else {
            document.body.style.backgroundColor = '#FFF';
            document.body.style.color = '#1d2644';
            modeBtn.innerHTML = 'Dark mode';
            modeBtn.classList.add('btn-outline-secondary');
            modeBtn.classList.remove('btn-outline-light');
            const btn = document.querySelector('a.my-btn');
            btn.setAttribute('light','');
            document.querySelector('canvas').remove();
            text.style.color = '#1d2644';
            changeBackground();
        }
    }); 
    //* initial
    changeBackground();
}

function changeBackground(props) {
    if (props == undefined) {
        VANTA.BIRDS(propList);
    } else {
        VANTA.BIRDS({...propList, ...props});
    }
}
