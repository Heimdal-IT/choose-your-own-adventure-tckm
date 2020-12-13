
const storyCont = document.getElementById("story");
const btnCont = document.getElementById("choice");
const background = document.getElementById("div1");
const bgAudio = document.getElementById("bgAudio");
const bgAudioSrc = document.getElementById("bgAudioSrc");

let scenes = [
    {
        story: "You wake up.",
        choices: [
            {description: "Leave", agility: 0.9, strength: 0, win: "you left", loss: "you got lost"},
            {description: "Fight", agility: 0, strength: 0.9, win: "he dead now", loss: "you got clobberd"}
        ],
        background: "krig.jpg",
        audio: {
            source: "",
            startTime: 0
        }
    },
    {
        story: "You see a tree",
        choices: [
            {description: "Climb", agility: 0.6, strength: 0.1, win: "you on top of tree", loss: "you fell down"},
            {description: "Punch", agility: 0.1, strength: 0.6, win: "you punched the tree", loss: "tree punched back"}
        ],
        background: "Fire_effect_Energy_Animation_Background_Video_,_No_Copyright____Stock_Footage.gif",
        audio: {
            source: "Slipknot%20-%20Sulfur%20[OFFICIAL%20VIDEO].mp3",
            startTime: 11
        }
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

const capitalize = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const personalize = function(string) {
    let pronoun;
    if (character.sex === "male") {
        pronoun = "he"
    } else if (character.sex === "female") {
        pronoun = "she"
    } else {
        pronoun = "they"
    };
    return string
        .replace("-NAME-", character.name)
        .replace("-race-", character.race)
        .replace("-RACE-", capitalize(character.sex))
        .replace("-sex-", character.race)
        .replace("-SEX-", capitalize(character.sex))
        .replace("-pronoun-", pronoun)
        .replace("-PRONOUN-", capitalize(pronoun))
    ;
};


const scene = function(lvl) {
    let content = scenes[lvl].story;
    btnCont.innerHTML = "";
    
    for (i = 0; i < scenes[lvl].choices.length; i++) {
        const iData = scenes[lvl].choices[i];
        
        let btn = document.createElement("button");
        btn.innerHTML = iData.description;
        btn.setAttribute("data-location", "scenes["+ lvl +"].choices["+ i +"]");
        btnCont.appendChild(btn);
        
        btn.addEventListener("click", function(){makeChoice(this, lvl)});
    };

    storyCont.innerHTML = content;
    background.style.backgroundImage = "url("+ scenes[lvl].background +")";
    bgAudioSrc.setAttribute("src", scenes[lvl].audio.source);
    bgAudio.load();
    bgAudio.currentTime = scenes[lvl].audio.startTime;
};


const makeChoice = function(btn, lvl) {
    let iData = eval(btn.getAttribute("data-location"));
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
    storyCont.innerHTML = personalize(content);
    
    let nxt = document.createElement("button");
    nxt.innerHTML = "Continue.";
    btnCont.innerHTML = "";
    btnCont.appendChild(nxt);
    nxt.addEventListener("click", function(){scene(lvl+1)});
};





