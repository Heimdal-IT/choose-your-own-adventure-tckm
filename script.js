const startButton = document.getElementById("startButton");
const form = document.getElementById("form");
const inpName = document.getElementById("inpName");

const storyCont = document.getElementById("story");
const btnCont = document.getElementById("choice");
const background = document.getElementById("div1");
const bgAudio = document.getElementById("bgAudio");
const bgAudioSrc = document.getElementById("bgAudioSrc");

let scenes = [
    {
        story: "“Get up -RACE-!” you hear a fainted shout in the distance. You find yourself all curled up in the mud. Your vision is completely foggy, and you can barely point out the things around you, when suddenly a big dwarf trembles in front of you and slaps you quite hard and bold on your cheek. “I said get up! This is no place to end the tale soldier!” That's when you finally snap back to reality.-SPACE-“Alright soldier, get ye bum up and keep fighting!” You stumble up on your feet, but you can’t seem to find your sword. “Ye need to find their leader soldier, run into the forest and find an abandoned cave, there it should be a clue to where their leader is located!”.-SPACE-You were just about to leave when suddenly you see an enormous orc charge towards you. You start to tremble as you try to avoid all of his attacks. The orc isn’t quite an experienced fighter, so he manages to swing his club in between two boulders. You then see a sword in the ground and pick it up. You can now make out some kind of path behind the orc that should lead to the cave your fellow comrade was talking about.-SPACE-You then spot a set of shiny chainmail down on the ground. ",
        choices: [
            {description: "Pick up chainmail", agility: 0, strength: 0.9, win: "Picked up chainmail", loss: "Too heavy"},
            {description: "Not pick up chainmail", agility: 1, strength: 1, win: "Didn't pick up chainmail", loss: ""}
        ],
        background: "krig.jpg",
        audio: {
            source: "",
            startTime: 0
        }
    },
    {
        story: "You now start to approach the orc that still has its club stuck in between the two boulders, janking it as hard as it can. You now see a chance.-SPACE-You now see a chance.",
        choices: [
            {description: "Attack orc", agility: 0, strength: 0.9, win: "You charge towards the ginormous orc with your sword held high. He sees you covered with rage and might, and tries to punch you with his own curled up fists. His attack is nothing compared with yours. You then swing your sword with a fatal swift, and decapitate the orc.", loss: "You try to attack the orc, but as you go for the final blow, he suddenly gets his club loose and knocks you down. He then rises his mighty club up above his wart covered face and crushes you."},
            {description: "Sneak around orc", agility: 0.9, strength: 0, win: "You try to make a break for it while the orc is not paying attention to you. You crouch down behind some rocks and slowly but swiftly make your way around the orc. You then start to run away when you're far enough away from the orc.", loss: "You try to seize the opportunity as the orc is not paying attention. You crouch down to make yourself as tiny and unnoticeable as possible. You then slowly make your way around the orc, when suddenly you step on a tiny stick. You don’t even get the chance to react as the orc with a grunt smashes your skull with his mighty club."}
        ],
        background: "Fire_effect_Energy_Animation_Background_Video_,_No_Copyright____Stock_Footage.gif",
        audio: {
            source: "",
            startTime: 0
        }
    },
    {
        story: "You finally manage to escape the battlefield in order to find the map that leads to the enemy's leader. You take one last glance towards the battlefield before you run into what seems like an endless forest.-SPACE-As you travel along the path, you stumble across a split of the path that goes both left and right.-SPACE-Which path do you choose?",
        choices: [
            {description: "Left", agility: 1, strength: 1, win: "You travel along the new path you chose. As you travel along, you stumble upon an abandoned wagon, inside you find …………….", loss: ""},
            {description: "Right", agility: 1, strength: 1, win: "You travel along the new path you chose. As you travel along, you find a camp, but there is no one there, it seems abandoned. You take your time to search the camp for supplies or something handy to use, when you eventually find …………….", loss: ""}
        ],
        background: "",
        audio: {
            source: "",
            startTime: 0
        }
    },
     
    {
        story: "You eventually find your way out of the forest, and you can now see an entrance to a cave further down the path. As you approach the entrance, you can feel a shiver down your spine, and you feel cold as the darkness of the cave starts to consume both you and all of the light around you. You follow some narrow stairs, you proceed cautiously as the ground is covered in some kind of goo that smells of dried blood.-SPACE-As you make yourself even further into the cave you hear a huge growl, but as you hear the growl you also make out some words at the same time. “I sense the smell of -pronoun---race-”, you hear as the sound of heavy footsteps approaching you keeps getting louder. “Show yourself -race-!” You slide into the shadows while being as quiet as you can. You now see a glimt of the creature that you now see is a huge mountain troll. You also spot the map your fellow comrade was talking about, hanging off his homesewn belt.",
        choices: [
            {description: "", agility: 0, strength: 0.9, win: "", loss: ""},
            {description: "Sneak around orc", agility: 0.9, strength: 0, win: "", loss: ""}
        ],
        background: "",
        audio: {
            source: "",
            startTime: 0
        }
    },
    {
        story: "",
        choices: [
            {description: "", agility: 0, strength: 0.9, win: "", loss: ""},
            {description: "Sneak around orc", agility: 0.9, strength: 0, win: "", loss: ""}
        ],
        background: "",
        audio: {
            source: "",
            startTime: 0
        }
    },
    {
        story: "",
        choices: [
            {description: "", agility: 0, strength: 0.9, win: "", loss: ""},
            {description: "Sneak around orc", agility: 0.9, strength: 0, win: "", loss: ""}
        ],
        background: "",
        audio: {
            source: "",
            startTime: 0
        }
    },
    
];


let character = {
    name: "Brynjolf",
    sex: "male",
    race: "viking",
    agility: 100,
    strength: 100,
    inventory: []
};

const getCharacter = function() {
    let name = inpName.value;
    let sex = getRadio("sex").value;
    let race = getRadio("race").value;
    let strength;
    let agility;

    if (race === "elf") {
        strength = 75;
        agility = 150;
    } else if (race === "dwarf") {
        strength = 150;
        agility = 75;
    } else {
        strength = 100;
        agility = 100;
    };

    character = {
        name: name,
        sex: sex, 
        race: race,
        agility: agility,
        strength: strength,
        inventory: []
    };

};

const getRadio = function(group) {
    let radios = document.querySelectorAll("input[type=\"radio\"][name=" + group + "]");
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i];
        };
    };
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
        .replace("-RACE-", capitalize(character.race))
        .replace("-sex-", character.sex)
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

    storyCont.innerHTML = personalize(content);
    background.style.backgroundImage = "url("+ scenes[lvl].background +")";
    
    bgAudioSrc.setAttribute("src", scenes[lvl].audio.source);
    bgAudio.load();
    bgAudio.currentTime = scenes[lvl].audio.startTime;
};


const makeChoice = function(btn, lvl) {
    let iData = eval(btn.getAttribute("data-location"));
    let agility = +character.agility * +iData.agility;
    let strength = +character.strength * +iData.strength;
    
    btnCont.innerHTML = "";
    if ((agility + strength) > Math.random()*100) {
        storyCont.innerHTML = personalize(iData.win);
        
        let nxt = document.createElement("button");
        nxt.innerHTML = "Continue.";
        btnCont.appendChild(nxt);
        nxt.addEventListener("click", function(){scene(lvl+1)});
    } else {
        storyCont.innerHTML = personalize(iData.loss);
        
        let restart = document.createElement("button");
        restart.innerHTML = "Restart game.";
        btnCont.appendChild(restart);
        restart.addEventListener("click", function(){scene(0)});
        
        let checkpoint = document.createElement("button");
        checkpoint.innerHTML = "Try again from Checkpoint."
        btnCont.appendChild(checkpoint);
        checkpoint.addEventListener("click", function(){scene(lvl)});
    };
    
};


const startGame = function() {
    if (inpName.value && getRadio("sex") !== undefined && getRadio("race") !== undefined) {
        getCharacter();
        form.style.display = "none";
        scene(0);
    } else {
        alert("Choose character");
    };
};



startButton.addEventListener("click", startGame);
