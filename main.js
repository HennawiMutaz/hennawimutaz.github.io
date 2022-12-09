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
    separation: 40.00,
    alignment: 38.00,
    cohesion: 29.00,
    quantity: 4.00,
    backgroundColor: '#f6f5f1'
  };

window.onload = function () {
    const text = document.querySelector('.intro .content h1');
    const projectSection = document.querySelector('.projects');
    const infos = projectSection.querySelectorAll('.card-wrapper .info');



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
            document.querySelector('.express').style.filter='invert(1)';
            for (let i = 0; i < infos.length; i++) {
                const info = infos[i];
                info.style.backgroundColor = '#07192f';
                info.querySelector('h2').style.color = '#FFFFFF';
                info.querySelector('p').style.color = '#FFFFFF';
            }
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
            document.querySelector('.express').style.filter='invert(0)';
            text.style.color = '#1d2644';
            for (let i = 0; i < infos.length; i++) {
                const info = infos[i];
                info.style.backgroundColor = '#FFF';
                info.querySelector('h2').style.color = '#000';
                info.querySelector('p').style.color = '#000';
            }
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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.content, .about, .projects, .tech, .certificates, .navbar',{}); 
sr.reveal('.about-img, .card-wrapper, .items div, .cert',{delay: 200}); 
