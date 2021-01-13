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
            source: "Slagmark - Theme.mp3",
            startTime: 0, 
            volume: 0.1
        }
    },
    {
        story: "You now start to approach the orc that still has its club stuck in between the two boulders, janking it as hard as it can. You now see a chance.-SPACE-You now see a chance.",
        choices: [
            {description: "Attack orc", agility: 0, strength: 0.9, win: "You charge towards the ginormous orc with your sword held high. He sees you covered with rage and might, and tries to punch you with his own curled up fists. His attack is nothing compared with yours. You then swing your sword with a fatal swift, and decapitate the orc.", loss: "You try to attack the orc, but as you go for the final blow, he suddenly gets his club loose and knocks you down. He then rises his mighty club up above his wart covered face and crushes you."},
            {description: "Sneak around orc", agility: 0.9, strength: 0, win: "You try to make a break for it while the orc is not paying attention to you. You crouch down behind some rocks and slowly but swiftly make your way around the orc. You then start to run away when you're far enough away from the orc.", loss: "You try to seize the opportunity as the orc is not paying attention. You crouch down to make yourself as tiny and unnoticeable as possible. You then slowly make your way around the orc, when suddenly you step on a tiny stick. You don’t even get the chance to react as the orc with a grunt smashes your skull with his mighty club."}
        ],
        background: "krig.jpg",
        audio: {
            source: "continue",
            startTime: 0,
            volume: 0.1
        }
    },
    {
        story: "You finally manage to escape the battlefield in order to find the map that leads to the enemy's leader. You take one last glance towards the battlefield before you run into what seems like an endless forest.-SPACE-As you travel along the path, you stumble across a split of the path that goes both left and right.-SPACE-Which path do you choose?",
        choices: [
            {description: "Left", agility: 1, strength: 0, win: "You travel along the new path you chose. As you travel along, you stumble upon an abandoned wagon, inside you find nothing.", loss: "You got lost."},
            {description: "Right", agility: 1, strength: 0, win: "You travel along the new path you chose. As you travel along, you find a camp, but there is no one there, it seems abandoned. You take your time to search the camp for supplies or something handy to use, when you eventually find some old rugs. They are no use, so you leave them.", loss: "Somehow you got lost."}
        ],
        background: "skog.jfif",
        audio: {
            source: "Forest%20Theme.mp3",
            startTime: 0,
            volume: 0.7
        }
    },
     
    {
        story: "You eventually find your way out of the forest, and you can now see an entrance to a cave further down the path. As you approach the entrance, you can feel a shiver down your spine, and you feel cold as the darkness of the cave starts to consume both you and all of the light around you. You follow some narrow stairs, you proceed cautiously as the ground is covered in some kind of goo that smells of dried blood.-SPACE-As you make yourself even further into the cave you hear a huge growl, but as you hear the growl you also make out some words at the same time. “I sense the smell of -pronoun---race-”, you hear as the sound of heavy footsteps approaching you keeps getting louder. “Show yourself!” You slide into the shadows while being as quiet as you can. You now see a glimt of the creature that you now see is a huge mountain troll. You also spot the map your fellow comrade was talking about, hanging off his homesewn belt.",
        choices: [
            {description: "Pickpocket", agility: 0.3, strength: 0, win: "You trail the troll as soon as he turns around. You then manage to get a grip on the map, that's hanging from some sort of hook on the troll’s belt. You slowly slide your hand towards the hook, and yank it off, without ripping the map itself.", loss: "You trail the troll as soon as he turns around. You then slowly make your way up behind it. As you’re almost up behind it, you suddenly slip on a wet rock and fall backwards, ripping the map off the hook as you fall. The troll then turns around, fumbling and confused on what just made that banging sound. The troll then spots you laying on the ground with your face facing it. It only takes the troll a second before it lets out a huge roar, and then clubs your whole body with one blow."},
            {description: "Kill", agility: 0, strength: 0.7, win: "You run towards the troll as fast as you possibly manage. You then leap up on a boulder that stands beside it. You then let out a cry as you jump off the boulder sword drawn. The troll tries to face you, but it’s too late as you decapitate it.", loss: "You run towards the troll sword drawn as you let out your battlecry. The troll then turns towards you and starts to run towards you aswell. You’re both about to clash, but suddenly the troll trips on some rocks falling towards you. You try to leap out of its way, but it’s too late, crushing your body as it lands on you."}
        ],
        background: "cave.jpg",
        audio: {
            source: "Cave - Theme.mp3",
            startTime: 0,
            volume: 0.6
        }
    },
    {
        story: "After marching for e few miles, you can feel the air around you become hotter, and a weird salty taste in the air gets stronger as you approach a huge volcano looking mountain. You then start the climb toward the top.-SPACE-As you manage to get over the edge on the top of the mountain, you can see a throne surrounded by geysers spewing out some sort of yellow lava. You then spot some kind of lord sitting on a throne that’s made of this solidified lava.-SPACE-“I can see that you admire my sulfur geysers -race-”. You gaze upon the geysers constantly spewing out its gue all around you. You don’t have time listening to the sulfur lord's words as you raise your sword ready for the final battle.",
        choices: [
            {description: "Act", agility: 0, strength: 0, win: "", loss: "You lower your sword. You then try to convince him that the world has seen enough wars, and the correct answer to live in harmony and peace, is to end this madness that’s been raging between races for thousands of years. You then told him to let you show him how beautiful the world can be, and that it should be your mission to change the world as you reach out your hand towards him. You then get blasted in the face by fierce and hot sulfur, melting your face ending your journey instantly."},
            {description: "Go for the head", agility: 0, strength: 0.8, win: "You start to run towards the lord, sword held high. You approach the Lord at lightning speed as he tosses burning sulfur nodes towards you. You evade all of his attacks, but just before you seem to reach the lord, he sends one final ball straight towards your head. There is no time to evade, so you slice the ball in half with your sword. You then leap towards him, and slice his entire head off with one clean sweep.", loss: "You instantly start to sprint towards the Lord. While running towards him, you start to ready your final blow. You’re just about to slice his head off when the Lord sends off a huge sulfur ball headed straight for you. You try to evade, but you lose your footing, letting the Sulfur devour you."},
            {description: "Go for the ankles", agility: 0.4, strength: 0.4, win: "You seize your moment leaping towards the Lord as he starts throwing huge chunks of sulfur towards you. He then finally sends one huge chunk towards you. You act quickly, sliding underneath it. When the ball passes over you, you sight the Lord standing only a few feet in front of you. You keep sliding towards the lord sliding your sword to your side, slicing off his ankles making him fall to the ground. You take advantage of the moment, stabbing him in the back also finishing him.", loss: "You try to seize the opportunity sprinting towards the Lord, but as you start to leap, he sends one big sulfur chunk towards you, which then plummets you to the ground, also melting your body, killing you. "},
            {description: "Evade attack", agility: 0.8, strength: 0, win: "You were just about to attack the lord, when you spot a pit filled with razor sharp rocks shaped from all the sulfur flowing through. You then start to taunt the lord, making gestures for him to come at you. The Lord seems to be humiliated by your taunting, and leaps towards. You quickly roll to the side, as he’s fully charging you, and sends him down the pit, impaling him.", loss: "You’re just about to attack the lord when you see a pit full of sulfur. You then start to taunt the lord making him charge towards you. Just before he grabs you, you roll to the side, but the Lord was able to grab a hold of your foot, dragging you into the pit killing you."}
        ],
        background: "Fire_effect_Energy_Animation_Background_Video_,_No_Copyright____Stock_Footage.gif",
        audio: {
            source: "Slipknot - Sulfur [OFFICIAL VIDEO].mp3",
            startTime: 11, 
            volume: 1
        }
    },
    {
        story: "You did it -NAME-, you managed to kill the Sulfur Lord, also letting your fellow army and comrades defeat the Lord’s goons. Your actions have finally brought peace to this realm.-SPACE-Thanks for playing!",
        choices: [
            {description: "", agility: 0, strength: 0.9, win: "", loss: ""},
            {description: "", agility: 0.9, strength: 0, win: "", loss: ""}
        ],
        background: "rainbow.jpg",
        audio: {
            source: "",
            startTime: 0,
            volume: 1
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
    background.style.backgroundImage = "url("+ scenes[lvl].background +")";
    
    if(scenes[lvl].audio.source !== "continue"){
        bgAudioSrc.setAttribute("src", scenes[lvl].audio.source);
        bgAudio.load();
        bgAudio.currentTime = scenes[lvl].audio.startTime;
        bgAudio.volume = scenes[lvl].audio.volume;
    };
    
    let content = personalize(scenes[lvl].story);
    let contentArr = content.split("-SPACE-");
    
    subScene(lvl, 0);
};

const subScene = function(lvl, num) {
    let contentArr = personalize(scenes[lvl].story).split("-SPACE-");
    
    btnCont.innerHTML = "";
    if (num + 1 === contentArr.length) {
        for (i = 0; i < scenes[lvl].choices.length; i++) {
            const iData = scenes[lvl].choices[i];
            if (iData.description) {
                let btn = document.createElement("button");
                btn.innerHTML = iData.description;
                btn.setAttribute("data-location", "scenes["+ lvl +"].choices["+ i +"]");
                btnCont.appendChild(btn);

                btn.addEventListener("click", function(){makeChoice(this, lvl)});
            };
        };    
    } else {
        let nxt = document.createElement("button");
        nxt.innerHTML = "Continue.";
        btnCont.appendChild(nxt);
        let newNum = num + 1;
        nxt.addEventListener("click", function(){subScene(lvl, newNum)});
    };
    fadeInText(contentArr[num]);
};



const makeChoice = function(btn, lvl) {
    let iData = eval(btn.getAttribute("data-location"));
    let agility = +character.agility * +iData.agility;
    let strength = +character.strength * +iData.strength;
    
    btnCont.innerHTML = "";
    if ((agility + strength) > Math.random()*100) {
        fadeInText(personalize(iData.win));
        
        let nxt = document.createElement("button");
        nxt.innerHTML = "Continue.";
        btnCont.appendChild(nxt);
        nxt.addEventListener("click", function(){scene(lvl+1)});
    } else {
        fadeInText(personalize(iData.loss));
        
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


const fadeInText = function(text) {
    storyCont.style.transition = "opacity 0s";
    storyCont.style.opacity = 0;
    storyCont.innerHTML = text;
    setTimeout(function(){
        storyCont.style.transition = "opacity 1.5s";
        storyCont.style.opacity = 1;
    }, 10);
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
