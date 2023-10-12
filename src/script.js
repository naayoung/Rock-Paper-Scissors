const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');

choices.forEach(choice => {
    choice.addEventListener('click', play);
});

function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return 'It\'s a draw!';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function showResult(player, computer, winner) {
    result.textContent = `You chose ${player}. Computer chose ${computer}. ${winner}`;
}
