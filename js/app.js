/* ============================================================= INIZIO === */

/* ============================================================= VARIABILI === */
const dice_Min = 1;
const dice_Max = 6;
let button_start = document.getElementById('button-start');
let button_continue = document.getElementById('button-continue');
let field_nplayers = document.getElementById('field-nplayers');
let message = document.getElementById('message');
let container_button_continue = document.getElementById('container-button-continue');
let container_players = document.getElementById('container-players');
let input_container = document.querySelector('.input-container');
let random_Name;
let player_repo = [];
let dashboard_container = document.querySelector('.container-game-dashboard');
let dashboard_control = document.querySelector('.container-control-dashboard');
const player = {};
const player_eyes = ['eye-1', 'eye-2', 'eye-3', 'eye-4', 'eye-5', 'eye-6', 'eye-7', 'eye-8', 'eye-9', 'eye-10', 'eye-11', 'eye-12', 'eye-13', 'eye-14', 'eye-15', 'eye-16', 'eye-17'];
const player_mouths = ['mouth-1', 'mouth-2', 'mouth-3', 'mouth-4', 'mouth-5', 'mouth-6', 'mouth-7', 'mouth-8', 'mouth-9', 'mouth-10', 'mouth-11', 'mouth-12', 'mouth-13', 'mouth-14', 'mouth-15', 'mouth-16', 'mouth-17']
let button_new_player = document.getElementById('button-new-player');
let button_throw_dice = document.getElementById('button-throw-dice');

/* ============================================================= PULSANTE START === */
button_start.addEventListener('click', showButtons);
function showButtons() {
    let button_to_show = document.querySelectorAll('.field-container');
    for (i = 0; i < button_to_show.length; i++) {
        button_to_show[i].classList.toggle('hide');
        message.innerHTML = "Enter the number of players before you can continue! ";
    }
}

/* ============================================================= PULSANTE CONTINUA === */
button_continue.disabled = true;
field_nplayers.addEventListener('click', activateButton);
field_nplayers.addEventListener('keyup', activateButton);
function activateButton(e) {
    if (e.target.value == "") {
        button_continue.disabled = true;
    }
    else {
        button_continue.disabled = false;
    }
}

/* ============================================================= CREARE GIOCATORI === */
button_continue.addEventListener('click', createPlayers);
function sorting_random_name() {
    random_Name = italian_names[Math.floor(Math.random() * italian_names.length)];
    return random_Name;
}
function sorting_random_eye() {
    random_Eye = player_eyes[Math.floor(Math.random() * player_eyes.length)];
    return random_Eye;
}
function sorting_random_mouths() {
    random_Mouths = player_mouths[Math.floor(Math.random() * player_mouths.length)];
    return random_Mouths;
}
function createPlayers() {
    for (i = 0; i < field_nplayers.value; i++) {
        input_container.classList.add('hide');

    }
}

/* ============================================================= FUNZIONE DELLA VITTORIA === */
function winningChanges(winners_Match_Repo) {
    console.log(winners_Match_Repo[0].playerId);
    let match_winner_card = document.getElementById(winners_Match_Repo[0].playerId);
    match_winner_card.classList.add('winner-card');
}

/* ============================================================= CREARE UN GIOCATORE === */
function createPlayers() {
    for (i = 0; i < field_nplayers.value; i++) {
        input_container.classList.add('hide');
        dashboard_container.classList.remove('hide');
        dashboard_control.classList.remove('hide');
        sorting_random_name();
        sorting_random_eye();
        sorting_random_mouths();
        player[i] = {
            name: random_Name,
            eye: random_Eye,
            mouth: random_Mouths,
            score: 0,
            scoreImg: 'img/empty.png',
            playerId: '0'
        };
        player_repo.push(player[i]);
        let container_player = document.createElement("div");
        let player_name = document.createElement("h4");
        let player_image = document.createElement("div");
        let subcontainer = document.createElement("div");
        let player_single_eye = document.createElement("img");
        let player_single_mouth = document.createElement("img");
        let player_image_score = document.createElement("img");
        let player_single_eye_SRC = 'img/eye/' + player[i].eye + '.png';
        let player_single_mouth_SRC = 'img/mouth/' + player[i].mouth + '.png';
        let player_image_score_SRC = player[i].scoreImg;
        player_single_eye.src = player_single_eye_SRC;
        player_single_mouth.src = player_single_mouth_SRC;
        player_image_score.src = player_image_score_SRC;
        player_single_eye.classList.add('face-element');
        player_single_mouth.classList.add('face-element');
        player_image_score.classList.add('score-image');
        let player_dice_container = document.createElement("div");
        player_name.innerText = player[i].name;
        container_player.setAttribute('id', 'player-' + [i]);
        player[i].playerId = 'player-' + [i];
        player_image.classList.add('player-' + [i] + '-image', 'player-image');
        player_dice_container.classList.add('player-' + [i] + '-dice-container', 'dice-container');
        container_player.classList.add('player-' + [i], 'player-container');
        subcontainer.classList.add('subcontainer');
        player_name.classList.add('player-' + [i] + '-name', 'player-name');
        container_player.appendChild(subcontainer);
        subcontainer.appendChild(player_image);
        player_image.appendChild(player_single_eye);
        player_image.appendChild(player_single_mouth);
        subcontainer.appendChild(player_name);
        subcontainer.appendChild(player_dice_container);
        player_dice_container.appendChild(player_image_score);
        container_players.appendChild(container_player);
    }
}

button_new_player.addEventListener('click', createNewPlayers);
function createNewPlayers() {
    let lastPlayerPosition = player_repo.length;
    sorting_random_name();
    sorting_random_eye();
    sorting_random_mouths();
    player[lastPlayerPosition] = {
        name: random_Name,
        eye: random_Eye,
        mouth: random_Mouths,
        score: 0,
        scoreImg: 'img/empty.png',
        playerId: '0'
    };
    player_repo.push(player[lastPlayerPosition]);
    let container_player = document.createElement("div");
    let player_name = document.createElement("h4");
    let player_image = document.createElement("div");
    let subcontainer = document.createElement("div");
    let player_single_eye = document.createElement("img");
    let player_single_mouth = document.createElement("img");
    let player_image_score = document.createElement("img");
    let player_single_eye_SRC = 'img/eye/' + player[lastPlayerPosition].eye + '.png';
    let player_single_mouth_SRC = 'img/mouth/' + player[lastPlayerPosition].mouth + '.png';
    let player_image_score_SRC = player[i].scoreImg;
    player_single_eye.src = player_single_eye_SRC;
    player_single_mouth.src = player_single_mouth_SRC;
    player_image_score.src = player_image_score_SRC;
    player_single_eye.classList.add('face-element');
    player_single_mouth.classList.add('face-element');
    player_image_score.classList.add('score-image');
    let player_dice_container = document.createElement("div");
    player_name.innerText = player[lastPlayerPosition].name;
    container_player.setAttribute('id', 'player-' + [lastPlayerPosition]);
    player[lastPlayerPosition].playerId = 'player-' + [lastPlayerPosition];
    player_image.classList.add('player-' + [lastPlayerPosition] + '-image', 'player-image');
    player_dice_container.classList.add('player-' + [lastPlayerPosition] + '-dice-container', 'dice-container');
    container_player.classList.add('player-' + [lastPlayerPosition], 'player-container');
    subcontainer.classList.add('subcontainer');
    player_name.classList.add('player-' + [lastPlayerPosition] + '-name', 'player-name');
    container_player.appendChild(subcontainer);
    container_player.appendChild(subcontainer);
    subcontainer.appendChild(player_image);
    player_image.appendChild(player_single_eye);
    player_image.appendChild(player_single_mouth);
    container_player.appendChild(player_name);
    container_player.appendChild(player_dice_container);
    subcontainer.appendChild(player_name);
    subcontainer.appendChild(player_dice_container);
    player_dice_container.appendChild(player_image_score);
    container_players.appendChild(container_player);
}

button_throw_dice.addEventListener('click', launchesDice);
function launchesDice() {
    let match_player_repo = [];
    let winners_Match_Repo = [];
    let losers_Match_Repo = [];
    let dice_winner_result = 0;
    let game_buttons = document.querySelector('.container-game-action');
    game_buttons.classList.add('disable');
    for (i = 0; i < player_repo.length; i++) {
        player[i].score = Math.floor(Math.random() * (dice_Max - dice_Min + 1)) + dice_Min;
        let score_image_repo = document.querySelectorAll('.score-image');
        switch (player[i].score) {
            case 1:
                player[i].score = 1,
                    player[i].scoreImg = 'img/1.png';
                score_image_repo[i].src = 'img/1.png';
                break;
            case 2:
                player[i].score = 2,
                    player[i].scoreImg = 'img/2.png';
                score_image_repo[i].src = 'img/2.png';
                break;
            case 3:
                player[i].score = 3,
                    player[i].scoreImg = 'img/3.png';
                score_image_repo[i].src = 'img/3.png';
                break;
            case 4:
                player[i].score = 4,
                    player[i].scoreImg = 'img/4.png';
                score_image_repo[i].src = 'img/4.png';
                break;
            case 5:
                player[i].score = 5,
                    player[i].scoreImg = 'img/5.png';
                score_image_repo[i].src = 'img/5.png';
                break;
            case 6:
                player[i].score = 6,
                    player[i].scoreImg = 'img/6.png';
                score_image_repo[i].src = 'img/6.png';
                break;
            default:
                player[i].score = 0,
                    player[i].scoreImg = 'img/empty.png';
                score_image_repo[i].src = 'img/empty.png';
        }
        match_player_repo.push(player[i]);
    }

    for (i = 0; i < match_player_repo.length; i++) {
        if (match_player_repo[i].score > dice_winner_result) {
            dice_winner_result = match_player_repo[i].score;
            losers_Match_Repo.concat(winners_Match_Repo);
            winners_Match_Repo = [];
            winners_Match_Repo.push(match_player_repo[i]);
        }
        else if (match_player_repo[i].score == dice_winner_result) {
            winners_Match_Repo.push(match_player_repo[i]);
        }
        else {
            losers_Match_Repo.push(match_player_repo[i]);
        }
    }
    if (winners_Match_Repo.length == 1) {
        winningChanges(winners_Match_Repo);
        console.log(winners_Match_Repo[0].name + ' win');
    }
}





function bombammano(){
    console.log('il nome è: ' + newObject.name);
}

function ObjectCreation (name, age, test) {
    this.name = name;
    this.age = age;
    this.test = test;
    this.functionTest = function(){
        alert('prova? o non prova?');
        bombammano();
    }
}

let newObject = new ObjectCreation('bob', '72', 'drago');
newObject.functionTest();
console.log(newObject);

document.addEventListener('keydown', functionActivator);
function functionActivator(event){
console.log(event.key);
}