const Header = document.createElement('header');
Header.innerHTML = `
<div class="header switchers"><div class="header_wrapper header">
<div class="header_buttons">
    <button class="button header__button button-additional buttonGarage switcher" id="garage-switcher">TO GARAGE</button>
    <button class="button header__button button-additional buttonWinners switcher" id="winners-switcher">TO WINNERS</button>
</div>
<div class="header__logo logo"><h1 class="logo__title">AS<span>YN</span>C RAC<span>E</span></h1></div>
</div>
</div>`;

export default Header;