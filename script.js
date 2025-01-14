let item1, seq = 1;
let itembox1;
let isanimate=false;
const em = document.getElementsByClassName("color");

em[0].textContent = 1;
em[1].textContent = 2;
em[2].textContent = 3;
em[3].textContent = 4;
em[4].textContent = 5;
em[5].textContent = 6;
em[6].textContent = 7;
em[7].textContent = 8;
em[8].textContent = 9;
em[9].textContent = 10;
em[10].textContent = 11;
em[11].textContent = 12;
em[12].textContent = 13;
em[13].textContent = 14;
em[14].textContent = 15;
em[15].textContent = 16;

console.log(em.length);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i].textContent, array[j].textContent] = [array[j].textContent, array[i].textContent];
    }
}
shuffleArray(em);

function ChangeColor(element) {
    if (element === itembox1 || element.firstElementChild.style.visibility === "visible" || isanimate) return;
    isanimate=true;
    element.firstElementChild.classList.add('rotate-animation');
    element.firstElementChild.addEventListener('animationend', () => {
        element.firstElementChild.classList.remove('rotate-animation');
    });
    element.firstElementChild.style.visibility = "visible";

    itembox1 = element;
    item1 = element.firstElementChild.textContent;
    if (item1 == seq) {
        seq++;
        resetChoices();
        isanimate=false;
    } else {
        setTimeout(() => {
            itembox1.firstElementChild.style.visibility = "hidden";
            resetChoices();
            isanimate=false;
        }, 1000); 
    }
    if (seq == 17) {
        window.alert("YOU WON");
    }
}

function resetChoices() {
    item1 = null;
    itembox1 = null;
}
