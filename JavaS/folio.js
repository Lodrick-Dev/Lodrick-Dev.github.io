////timeNow
const horaire = document.querySelector('.head-div-time > span');
window.addEventListener('load', async () => {
    const dataCountVisitor = await fetch('https://api.countapi.xyz/hit/portfolioweblod/countervisitoruplod');
    const count = await dataCountVisitor.json();
    horaire.textContent = count.value;
});

////menu
const btn_menu = document.querySelector(".btn-menu");
const span01 = document.querySelector(".btn-menu > span:nth-child(1)");
const span02 = document.querySelector(".btn-menu > span:nth-child(2)");
const span03 = document.querySelector(".btn-menu > span:nth-child(3)");
const navi = document.querySelector("nav");
const ball1 = document.querySelector('.ball-dance')
const ball2 = document.querySelector('.ball-dance-yellow')
const ball3 = document.querySelector('.ball-dance-other')
btn_menu.addEventListener('click', ()=>{
    ball1.classList.toggle("ball-paused");
    ball2.classList.toggle("ball-paused");
    ball3.classList.toggle("ball-paused");
    btn_menu.classList.toggle("btn-menu-actif");
    navi.classList.toggle("nav-actif")
    span01.classList.toggle("first-span")
    span02.classList.toggle("second-span")
    span03.classList.toggle("last-span")
})
//////////////////section intérêt
//bull left
const enf03 = document.querySelector(".box-bulle01 span:nth-child(3)");
const enf02 = document.querySelector(".box-bulle01 span:nth-child(2)");
const enf01 = document.querySelector(".box-bulle01 span:nth-child(1)");
//bull right
const enf04 = document.getElementById("spa-right-1");
const enf05 = document.getElementById("spa-right-2");
const enf06 = document.getElementById("spa-right-3");

const frec01 = document.querySelector(".freq-music span:nth-child(1)");
const frec02 = document.querySelector(".freq-music span:nth-child(2)");
const frec03 = document.querySelector(".freq-music span:nth-child(3)");
const frec04 = document.querySelector(".freq-music span:nth-child(4)");
const frec05 = document.querySelector(".freq-music span:nth-child(5)");

//box lancement fusée
let box_energy_rocket = document.querySelector('.box-anim-propo');

//les skills
const svg_skill_html = document.querySelector('#svg-html > circle:nth-child(2)');
const svg_skill_javascript = document.querySelector('#svg-js > circle:nth-child(2)');
const svg_skill_css = document.querySelector('#svg-css > circle:nth-child(2)');

window.onload = funcToWel;
function funcToWel(){
    animLeft();
    animRight();
}

function runAnim() {
    frec01.classList.add("frec01");
    frec02.classList.add("frec02");
    frec03.classList.add("frec03");
    frec04.classList.add("frec02");
    frec05.classList.add("frec01");
    setTimeout(() => { 
        frec01.classList.remove("frec01");
        frec02.classList.remove("frec02");
        frec03.classList.remove("frec03");
        frec04.classList.remove("frec02");
        frec05.classList.remove("frec01");
        funcToWel();
    }, 3000);
}

function animRight(){
    enf04.classList.add("floppy-anime06");
    setTimeout(() => {
        enf05.classList.add("floppy-anime05");
        setTimeout(() => {
            enf06.classList.add("floppy-anime04");
            setTimeout(() => {
                enf06.classList.remove('floppy-anime04');
                enf05.classList.remove('floppy-anime05');
                enf04.classList.remove('floppy-anime06');
                runAnim();
            }, 1000);
        }, 1000);
    }, 1000);
}

function animLeft(){
    enf03.classList.add("floppy-anime03");
        setTimeout(() => {
            enf02.classList.add("floppy-anime02");
            setTimeout(() => {
                enf01.classList.add("floppy-anime01")
                setTimeout(() => {
                    enf01.classList.remove('floppy-anime01');
                    enf02.classList.remove('floppy-anime02');
                    enf03.classList.remove('floppy-anime03');
                }, 1000);
            }, 1000);
        }, 1000);
}
////////////////////////////////a propos
const box_img_rocket = document.querySelector('.box-img-rocket');
const box_after = document.querySelector('.sous-box-img-rocket');
const regl_ico1 = document.querySelector(".box-anim-propo i:nth-child(1)");
const regl_ico2 = document.querySelector(".box-anim-propo i:nth-child(2)");
const regl_ico3 = document.querySelector(".box-anim-propo i:nth-child(3)");
const regl_ico4 = document.querySelector(".box-anim-propo i:nth-child(4)");
const enrg_rocket = document.getElementById('paf');
enrg_rocket.style.animationPlayState = "paused";

box_img_rocket.addEventListener('click', ()=>{
window.scrollTo({
    top: 657,
    left:0,
    behavior: "smooth"
})
});

// stepWithTime();
function stepWithTime(){
    regl_ico1.classList.add("class-js-to-rotate1");
    setTimeout(() => {
        regl_ico2.classList.add("class-js-to-rotate2")
    }, 500);
    setTimeout(() => {
        regl_ico3.classList.add("class-js-to-rotate3")
    }, 1000);
    setTimeout(() => {
        regl_ico4.classList.add("class-js-to-rotate4")
        enrg_rocket.style.animationPlayState = "running";
        enrg_rocket.classList.add('color-to-paf');
        enrg_rocket.addEventListener('animationend', function(){
            box_img_rocket.classList.remove("box-img-rocket");
            box_img_rocket.classList.add('box-img-actif');
            box_after.classList.add('le-after-du-rocket');
            let p = document.createElement('p');
            p.classList.add("p-rocket")
            p.textContent = "toucher pour remonter"
            box_energy_rocket.appendChild(p);
            p.addEventListener('animationend', ()=>{
                p.remove();
            })
        })
    }, 1500);
}

//function les skills
function lesSkill(){
    svg_skill_html.classList.add('skill-svg-html');
    svg_skill_javascript.classList.add('skill-svg-javascript');
    svg_skill_css.classList.add('skill-svg-css')
}

//////////////////section projet
const box_img01 = document.querySelector(".box-img-des-proj")
let initDiv = 0;
let maxDiv = 1
function paque_run(){
    initDiv++;
    if(initDiv <= maxDiv){
        document.getElementById('img-listo').classList.add('opace');
        document.getElementById('img-listo').addEventListener('transitionend', function(){
            document.getElementById('img-listo').classList.add('none-dis');
           document.getElementById('el-list').classList.add('legend-over-actif')
        })
    }
}
const nm = 0
function paque_down(){
    document.getElementById('el-list').classList.remove('legend-over-actif');
    document.getElementById('el-list').classList.add('legend-over');

            document.getElementById('img-listo').classList.remove('opace');
            document.getElementById('img-listo').classList.remove('none-dis');
     initDiv = nm;
 };

 box_img01.addEventListener('mouseover', paque_run);
 box_img01.addEventListener('mouseleave', paque_down);

 //lecteur music
 document.getElementById('box-img-music-player').addEventListener('mouseover', ()=>{
    initDiv++;
    if(initDiv <= maxDiv){
        document.getElementById('img-music-play').classList.add('opace');
        document.getElementById('img-music-play').addEventListener('transitionend', function(){
            document.getElementById('img-music-play').classList.add('none-dis');
           document.getElementById('el-lector').classList.add('legend-over-actif')
        })
    }
});
document.getElementById('box-img-music-player').addEventListener('mouseleave', ()=>{
    document.getElementById('el-lector').classList.remove('legend-over-actif');
    document.getElementById('el-lector').classList.add('legend-over');

            document.getElementById('img-music-play').classList.remove('opace');
            document.getElementById('img-music-play').classList.remove('none-dis');
     initDiv = nm;
});

//generator joke
let box_img_gen = document.getElementById('box-img-generator-joke');
box_img_gen.addEventListener('mouseover', ()=>{
    initDiv++;
    if(initDiv <= maxDiv){
        document.getElementById('img-generator').classList.add('opace');
        document.getElementById('img-generator').addEventListener('transitionend', function(){
            document.getElementById('img-generator').classList.add('none-dis');
           document.getElementById('el').classList.add('legend-over-actif')
        })
    }
});
box_img_gen.addEventListener('mouseleave', ()=>{
    document.getElementById('el').classList.remove('legend-over-actif');
    document.getElementById('el').classList.add('legend-over');

            document.getElementById('img-generator').classList.remove('opace');
            document.getElementById('img-generator').classList.remove('none-dis');
     initDiv = nm;
});

const media1 = window.matchMedia("(max-width: 320px)");
const media2 = window.matchMedia("(max-width: 375px)");
const media3 = window.matchMedia("(max-width: 414px)");
const media4 = window.matchMedia("(max-width: 426px)");
const media5 = window.matchMedia("(min-width: 768px)");
const media6 = window.matchMedia("(min-width: 1024px)");
const media7 = window.matchMedia("(min-width: 1536px)");

function funcMedia(){
    let valuScroll =  (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
    const valto1536 = valuScroll > 0.58;
    const valto1024 = valuScroll > 0.59;
    const valto768 = valuScroll > 0.59;
    const valto425 = valuScroll > 0.53;
    const valto414 = valuScroll > 0.53;
    const valto375 = valuScroll > 0.56;

    //toskill
    const skil1536 = valuScroll > 0.71;
    // stepWithTime();
    if(media7.matches && valto1536){
        regl_ico1.classList.add("class-js-to-rotate1");
        setTimeout(() => {
        regl_ico2.classList.add("class-js-to-rotate2")
        }, 500);
        setTimeout(() => {
        regl_ico3.classList.add("class-js-to-rotate3")
        }, 1000);
        setTimeout(() => {
        regl_ico4.classList.add("class-js-to-rotate4")
        enrg_rocket.style.animationPlayState = "running";
        enrg_rocket.classList.add('color-to-paf');
        enrg_rocket.addEventListener('animationend', function(){
            box_img_rocket.classList.remove("box-img-rocket");
            box_img_rocket.classList.add('box-img-actif');
            box_after.classList.add('le-after-du-rocket');
            let p = document.createElement('p');
            p.classList.add("p-rocket")
            p.textContent = "toucher pour remonter"
            box_energy_rocket.appendChild(p);
            p.addEventListener('animationend', ()=>{
                p.remove();
            })
        })
        }, 1500);
    }
    else if(media6.matches && valto1024){
        regl_ico1.classList.add("class-js-to-rotate1");
        setTimeout(() => {
        regl_ico2.classList.add("class-js-to-rotate2")
        }, 500);
        setTimeout(() => {
        regl_ico3.classList.add("class-js-to-rotate3")
        }, 1000);
        setTimeout(() => {
        regl_ico4.classList.add("class-js-to-rotate4")
        enrg_rocket.style.animationPlayState = "running";
        enrg_rocket.classList.add('color-to-paf-1024');
        enrg_rocket.addEventListener('animationend', function(){
            box_img_rocket.classList.remove("box-img-rocket");
            box_img_rocket.classList.add('box-img-actif');
            box_after.classList.add('le-after-du-rocket');
            let p = document.createElement('p');
            p.classList.add("p-rocket")
            p.textContent = "toucher pour remonter"
            box_energy_rocket.appendChild(p);
            p.addEventListener('animationend', ()=>{
                p.remove();
            })
        })
        }, 1500);
    }
    else if(media5.matches && valto768){
        regl_ico1.classList.add("class-js-to-rotate1");
        setTimeout(() => {
        regl_ico2.classList.add("class-js-to-rotate2")
        }, 500);
        setTimeout(() => {
        regl_ico3.classList.add("class-js-to-rotate3")
        }, 1000);
        setTimeout(() => {
        regl_ico4.classList.add("class-js-to-rotate4")
        enrg_rocket.style.animationPlayState = "running";
        enrg_rocket.classList.add('color-to-paf-768');
        enrg_rocket.addEventListener('animationend', function(){
            box_img_rocket.classList.remove("box-img-rocket");
            box_img_rocket.classList.add('box-img-actif');
            box_after.classList.add('le-after-du-rocket');
            let p = document.createElement('p');
            p.classList.add("p-rocket")
            p.textContent = "toucher pour remonter"
            box_energy_rocket.appendChild(p);
            p.addEventListener('animationend', ()=>{
                p.remove();
            })
        })
        }, 1500);
    }
    else if(media4.matches && valto425){
        regl_ico1.classList.add("class-js-to-rotate1");
        setTimeout(() => {
        regl_ico2.classList.add("class-js-to-rotate2")
        }, 500);
        setTimeout(() => {
        regl_ico3.classList.add("class-js-to-rotate3")
        }, 1000);
        setTimeout(() => {
        regl_ico4.classList.add("class-js-to-rotate4")
        enrg_rocket.style.animationPlayState = "running";
        enrg_rocket.classList.add('color-to-paf-425');
        enrg_rocket.addEventListener('animationend', function(){
            box_img_rocket.classList.remove("box-img-rocket");
            box_img_rocket.classList.add('box-img-actif');
            box_after.classList.add('le-after-du-rocket');
            let p = document.createElement('p');
            p.classList.add("p-rocket")
            p.textContent = "toucher pour remonter"
            box_energy_rocket.appendChild(p);
            p.addEventListener('animationend', ()=>{
                p.remove();
            })
        })
        }, 1500);
    }
}
// funcMedia();
function skillScrolling(){
    //toskill
    let valuScroll =  (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
    const skil1536 = valuScroll > 0.66;
    const skil1024 = valuScroll > 0.67;
    const skil768 = valuScroll > 0.67;
    const skil425 = valuScroll > 0.57;
    if(media7.matches && skil1536){
        svg_skill_html.classList.add('skill-svg-html');
            svg_skill_javascript.classList.add('skill-svg-javascript');
            svg_skill_css.classList.add('skill-svg-css')
    }
    else if(media6.matches && skil1024){
        svg_skill_html.classList.add('skill-svg-html');
            svg_skill_javascript.classList.add('skill-svg-javascript');
            svg_skill_css.classList.add('skill-svg-css')
    }
    else if(media5.matches && skil768){
        svg_skill_html.classList.add('skill-svg-html');
            svg_skill_javascript.classList.add('skill-svg-javascript');
            svg_skill_css.classList.add('skill-svg-css')
    }
    else if(media4.matches && skil425){
        svg_skill_html.classList.add('skill-svg-html');
            svg_skill_javascript.classList.add('skill-svg-javascript');
            svg_skill_css.classList.add('skill-svg-css')
    }
}
function closeFunc(){
    funcMedia();
    skillScrolling();
}
window.addEventListener('scroll',closeFunc);

const btn_inst = document.querySelector(".sociaux-cont > ul > li:nth-child(1)");
const btn_discord = document.querySelector(".sociaux-cont > ul > li:nth-child(2)");
btn_inst.addEventListener("click", ()=>{
    alert("Lol c'est juste pour l'esthétique, uniquement le lien de LinkedIn fonctionne")
})
btn_discord.addEventListener("click", ()=>{
    alert("Lol c'est juste pour l'esthétique, uniquement le lien de LinkedIn fonctionne")
})