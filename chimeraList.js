const limbList = ["eyes", "forelimbs", "head", "hindlimbs", "locomotion", "mouth", "natural weapons", "outer coat", "tail"]; //2-3
/*
const limbList2 = ["front limbs", "back limbs", "head", "tail", "chest"]; //4-7

const limbList3 = ["nose", "mouth", "eyes", "wings", "claws"]; //8-10
*/
const creatureList = {

  amphibians: ["african bullfrog", "african clawed frog", "alpine newt", "arboreal salamander", "axolotl", "chinese giant salamander", 
               "common toad", "dwarf siren", "ghost glass frog", "hairy frog", "hellbender", "italian crested newt", "midwife toad", 
               "mountain chicken", "marbled newt", "mudpuppy", "olm", "pebble toad", "poison dart frog", "purple frog", "surinam toad", 
               "tomato frog", "turtle frog", "vampire frog", "wallace's flying frog", "wood frong"],

  birds: ["african finfoot", "african jacana", "african swallow", "albatross", "amazonian royal flycater", "anhinga", "avocet", 
          "barn owl", "bald eagle", "bar-tailed godwit", "bearded barbet", "black-necked grebe", "blue-footed booby", "blue jay", 
          "blue-naped mousebird", "blue-winged kookaburra", "brolga", "california condor", "capuchinbird", "cape starling", "cardinal", 
          "cattle egret", "cockatiel", "cock-of-the-rock", "common hoopoe", "common ostrich", "common pheasant", "common potoo", 
          "cormorant", "crow", "crowned pidgeon", "dodo", "dove", "duck", "egret", "emu", "emperor penguin", "eurasian bittern", 
          "eurasian spoonbill", "european swallow", "fairy pitta", "falcon", "flamingo", "frigatebird", "giant cowbird", 
          "golden pheasant", "goose", "great curassow", "great horned owl", "great potoo", "greater praire chicken", "greater roadrunner", 
          "greater sage-grouse", "harpy eagle", "hawk", "helmeted hornbill", "heron", "hoatzin", "horned grebe", "hummingbird", "ibis", 
          "junco", "kakapo", "kestrel", "kingfisher", "king penguin", "king vulture", "kiwi", "lark", "loon", "lyrebird",  "magpie", 
          "mandarin duck", "marabou stork", "metallic starling", "osprey", "parrot", "peacock", "pelican", "pennant-winged nightjar", 
          "puffin", "purple swamphen", "quail", "quetzal", "raven", "red-crested turaco", "ribbon-tailed astrapia", "robin", "sandpiper", 
          "scarlet 'i'iwi", "secretary bird", "shoebill", "southern cassowary", "spectacled eidar", "stork", "swan", "swordbilled hummingbird", 
          "tern", "three-wattled bellbird", "turkey", "toucan", "umbrellabird", "vampire macaw", "violet-backed starling", "vulture", 
          "vulturine guineafowl", "western tragopan", "white bellbird", "woodpecker", "zebra finch"],

  fish: ["angelfish", "barracuda", "barreleye fish", "bichir", "black khuli loach", "clownfish", "coffinfish", "crocodile fish", "cuttlefish", 
         "dojo loach", "electric eel", "epaulette shark", "farlowella", "flowerhorn cichlid", "flying fish", "four-eyed fish", "giant kelpfish", 
         "giant moth catfish", "hairy frogfish", "hammerhead shark", "kelp greenling", "lamprey", "lionfish", "longfish pennantfish", 
         "longhorn cowfish", "lumpfish", "lungfish", "mexican tetra", "moray eel", "panamic fanged blenny", "piranha", "pufferfish", 
         "red-lipped batfish", "sarcastic fringehead", "scorpionfish", "seadragon", "seahorse", "snipe eel", "spotted gar",  "stargazer fish", 
         "stingray", "stonefish", "sturgeon", "sunfish", "wahoo", "whale shark", "zebra shark"], 

  invertebrates: ["annam walking stick", "ant", "antarctic scale worm", "antlion", "baphomet moth", "bee", "bobbit worm", "butterfly", "centipede", 
                  "clam", "cockroach", "coconut crab", "crab", "cricket", "dragonfly", "dung beetle", "earthworm", "fly", "grasshopper", "hornet", 
                  "japanese spider crab", "jellyfish", "ladybug", "leaf insect", "leech", "mosquito", "moth", "mountain stone weta", "octopus", 
                  "praying mantis", "scorpion", "scorpion fly", "sea cucumber", "sea star", "sea urchin", "shrimp", "slug", "snail", "spider", "squid", 
                  "tarantua hawk", "tardigrade", "tick", "thorn bug", "wasp", "weevil", "wheel bug"], 

  mammals: ["aardvark", "anteater", "armadillo", "aye-aye", "baboon", "beaver", "black bear", "blue whale", "bobcat", "brown bear", "capybara", 
            "caribou", "cheetah", "chimpanzee", "colugo", "coyote", "cow", "deer", "dingo", "dolphin", "domestic cat", "domestic dog", "echidna",
            "elephant", "elephant shrew", "elk", "ferret", "fossa", "fox", "fruit bat", "gerenuk", "gibbon", "giraffe", "groundhog", "hammerhead bat", 
            "hare", "harvest mouse", "hedgehog", "hippopotamus", "horse", "human", "impala", "jaguar", "kangaroo", "killer whale", "kinkajou", "koala", 
            "lemur", "leopard", "lion", "llama", "lowland streaked tenrec", "lynx", "manatee", "mandrill", "mole-rat", "mountain goat", "muntjac", 
            "musk-ox", "narwhal", "okapi", "opossum", "orangutan", "pangolin", "platypus", "polar bear", "porcupine", "pronghorn", "raccoon", "ram", 
            "rat", "reindeer", "rhino", "seal", "sea lion", "skunk", "sloth", "spider monkey", "spotted hyena", "squirrel", "star-nosed mole", "sun bear", 
            "tapir", "tasmanian devil", "tiger", "vampire bat", "walrus", "warthog", "water buffalo", "wolf", "wolverine", "zebra"],

  reptiles: ["american alligator", "armadillo girdled lizard", "asian giant softshell turtle", "black mamba", "blue-tounged skink", 
             "boa", "chameleon", "cobra", "common lizard", "crocodile", "fish-scaled gecko", "flying gecko", "frilled lizard", "gaboon viper", "gecko", 
             "gharial", "gila monster", "green basilisk", "horned lizard", "iguana", "inland taipan", "jackson's chameleon", 
             "komodo dragon", "malagasy leaf-nosed snake", "marine iguana", "mata mata", "ornate flying snake", "pig-nosed turtle", 
             "python", "satanic leaf-tailed gecko", "spiny bush viper", "tegu", "tentacled snake", "thorny devil", "tortoise", 
             "tuatara", "turtle", "viper"] 
};
 

/* 
const plantList = ["", ""]; //CURRENTLY UNUSED
const fungusList = ["", ""]; 
const monsterList = ["dragon", "hydra", "landshark"]; 
*/

let userNum = 0;

function generate() {
    if (userNum < 2 || userNum > 8) {
      document.getElementById("chimeraResult").textContent = "Please enter a valid number first.";
      return;
    }

    let result = "";

    for (let count = 0; count < userNum; count++) {
        const randomAnimal = pickRandomAnimal();
        const randomLimb = pickRandomLimb();

        if (!randomAnimal) {
            document.getElementById("chimeraResult").textContent = "Please select at least one animal group.";
            return;
        }

        if (count+1 == userNum){
            result += `and the ${randomLimb} of a ${randomAnimal}.<br>`;
            break;
        }

        if (count == 0){
            result += `This creature has the body of a ${randomAnimal},<br>`;
        }else{
            result += `the ${randomLimb} of a ${randomAnimal},<br>`;

        }



        
    }

    document.getElementById("chimeraResult").innerHTML = result;
}




/*
function saveNumber() { 
  numCheck = document.getElementById("numberInput").value;
    if (numCheck > 8 || numCheck < 2) {
        numSelected.textContent = "Select a number between 2 and 8."
        return;
    }else{
        userNum = document.getElementById("numberInput").value;
        document.getElementById("numSelected").innerText = "You entered: " + userNum;
    }
}

*/

function saveNumber() { //NUMBER OF CREATURES COMBINED (2-8)
    const numCheck = document.getElementById("numberInput").value;
    const output = document.getElementById("numSelected");

    if (numCheck < 2 || numCheck > 8) {
      output.textContent = "Select a number between 2 and 8.";
      return;
    }

    userNum = parseInt(numCheck);
    output.textContent = "Combining " + userNum + " creatures!";
}



function pickRandomLimb(){ //GIVES A RANDOM LIMB
    const randomLimb = Math.floor(Math.random() * limbList.length);
    return limbList[randomLimb];
    //document.getElementById("pickRandomLimb").textContent = "Random Limb: " + creatureLimbs;
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function pickRandomAnimal() { //RANDOMIZES BETWEEN ANIMALS IN CHECKED GROUPS
    const checkboxes = document.querySelectorAll(".animal");
    let selectedAnimals = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedAnimals = selectedAnimals.concat(creatureList[checkbox.value]);
      }
    });

    if (selectedAnimals.length === 0) {
      return null; 
    }

    const randomIndex = Math.floor(Math.random() * selectedAnimals.length);
    return selectedAnimals[randomIndex];
  }



/*
function chimeraBody() {
    const randomCreature = Math.floor(Math.random() * creatureList.length);
    const creatureBody = creatureList[randomCreature];
    document.getElementById("chimeraBody").textContent = "The creature has the body of a " + creatureBody;
}

function chimeraHead() {
    const randomCreature = Math.floor(Math.random() * creatureList.length);
    const creatureHead = creatureList[randomCreature];
    document.getElementById("chimeraHead").textContent = "The creature has the head of a " + creatureHead;
}

function chimeraLimbs() {
    const randomCreature = Math.floor(Math.random() * creatureList.length);
    const creatureLimbs = creatureList[randomCreature];
    document.getElementById("chimeraLimbs").textContent = "The creature has the limbs of a " + creatureLimbs;
}
    */
