const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn);
    const $selectores = d.querySelectorAll("[data-dark]");

    //console.log($selectores);

    let luna = "🌙";
    let sol = "☀️";

    const darkMode = () => {
        $selectores.forEach( el => el.classList.add(classDark));
        $themeBtn.textContent = sol;
        ls.setItem("theme", "dark");
    }

    const lightMode = () => {
        $selectores.forEach( el => el.classList.remove(classDark))
        $themeBtn.textContent = luna;
        ls.setItem("theme", "light");
    }

    d.addEventListener("click", (e)  =>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent === luna){
                darkMode();
            }else{
                lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", e => {
        //console.log(ls.getItem("theme"));
        if(ls.getItem("theme") === null ) ls.setItem("theme", "light");
        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
    })
}