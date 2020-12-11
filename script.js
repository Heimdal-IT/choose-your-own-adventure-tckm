

const container = document.querySelector("#div2 p");
const btnCont = document.getElementById("valgknapp");


let data = [
    {
        story: "You wake up.",
        choices: [
            {description: "Leave", agility: 0.9, strength: 0, win: "you left", loss: "you got lost"},
            {description: "Fight", agility: 0, strength: 0.9, win: "he dead now", loss: "you got clobberd"}
        ] 
    },
    {
        story: "You see a tree",
        choices: [
            {description: "Climb", agility: 0.6, strength: 0.1, win: "you on top of tree", loss: "you fell down"},
            {description: "Punch", agility: 0.1, strength: 0.6, win: "you punched the tree", loss: "tree punched back"}
        ]
    },
    {
        story: "",
        choices: []
    }
];

let character = {
    name: "Brynjolf",
    sex: "male",
    race: "viking",
    agility: 100,
    strength: 100,
    inventory: ["chainmail", "potion"]
};


const personalize = function(content) {
    let result = content;
    result = result
        .replace("-NAME-", character.name)
        .replace("-RACE-", character.race)
        .replace("-SEX-", character.sex)
    ;
    return result;
};


const scene = function(lvl) {
    let content = data[lvl].story;
    btnCont.innerHTML = "";
    
    for (i = 0; i < data[lvl].choices.length; i++) {
        const iData = data[lvl].choices[i];
        
        let btn = document.createElement("button");
        btn.innerHTML = iData.description;
        btn.setAttribute("data-location", "data["+ lvl +"].choices["+ i +"]");
        btnCont.appendChild(btn);
        
        btn.addEventListener("click", makeChoice);
    };

    container.innerHTML = content;
};


const makeChoice = function() {
    let iData = eval(this.getAttribute("data-location"));
    let agility = +character.agility * +iData.agility;
    let strength = +character.strength * +iData.strength;
    
    let content = "";
    
    if ((agility + strength) > Math.random()*100) {
        console.log("win");
        content = iData.win;
    } else {
        console.log("lose");
        content = iData.loss;
    };
    
    container.innerHTML = personalize(content);
    
    let nxt = document.createElement("button");
    nxt.innerHTML = "Continue.";
    
    
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




