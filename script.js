

const container = document.querySelector("#div2 p");
const btnCont = document.getElementById("valgknapp");


let data = [
    {
        story: "You wake up.",
        choices: [
            {description: "Leave", agility: 0.9, strength: 0, win: "you left", fail: "you got lost"},
            {description: "Fight", agility: 0, strength: 0.9, win: "he dead now", fail: "you got clobberd"}
        ] 
    },
    {
        story: "",
        choices: []
    },
    {
        story: "",
        choices: []
    }
];

const scene = function(lvl) {
    let content = data[lvl].story;

    for (i = 0; i < data[lvl].choices.length; i++) {
        const iData = data[lvl].choices[i];

        let btn = document.createElement("button");
        //btn.setAttribute("id", );
        btn.setAttribute("value", iData.description);

        btnCont.appendChild(btn);


        btn.addEventListener("click", makeChoice);
    };

    container.innerHTML = content;
};

const makeChoice = function() {

};




let navn = "Brynjolf"
let yess = `Hallo jeg er xxNavnxx, og jeg er her.`;

function yes() {
    navn = "Tobias";

    yess = yess.replace("xxNavnxx", navn);

    container.innerHTML = yess;
};


const choice = function(num, content, newInpsArr) {
    container.innerHTML = content;

    let inps = document.querySelectorAll("button")


    for (i = 0; i < newInpsArr.length; i++) {
        let btn = document.createElement("button");
        btn.addEventListener("click", choice(stage++, e));
    };


};


//let cycle = 0;
function tester(cycle) {

    console.log("mats e kul" + cycle);

    let btn = document.createElement("button");
    container.innerHTML = "";
    container.appendChild(btn);

    btn.addEventListener("click", tester(cycle++));
    //btn.addEventListener("click", function(){console.log("what");});
    //btn.addEventListener("click", tester(cycle));

};
//tester(0);




