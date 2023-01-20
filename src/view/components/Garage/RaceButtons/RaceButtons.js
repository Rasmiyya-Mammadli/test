const RaceButtons = document.createElement('div');
RaceButtons.classList.add('garage-page__race-buttons');
RaceButtons.innerHTML = `
    <button class="race-btn">Race</button>
    <button class="reset-btn">Reset</button>
    <button class="generate-btn">Generate</button>
`;

export default RaceButtons;