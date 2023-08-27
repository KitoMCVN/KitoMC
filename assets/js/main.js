addEventListener('DOMContentLoaded', (event) => {
    const header = `
<nav class="menu">
        <div class="menuLogo"><h1>KitoMC!</h1></div>
        <div class="menuLinks">
          <a href="https://kitomcvn.github.io/KitoMC" class="menuLink"
            ><img
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/homeIcon.png"
              class="menuIcon"
            />Home</a
          >
          <a href="https://kitomcvn.github.io/KitoMC/resoucePack" class="menuLink"
            ><img
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/packIcon.png"
              class="menuIcon"
            />Pack</a
          >
          <a href="https://kitomcvn.github.io/KitoMC/miniGame" class="menuLink"
            ><img src="https://kitomcvn.github.io/KitoMC/assets/image/icons/saveIcon.png" class="menuIcon" />Mini
            Game</a
          >

          <a href="https://kitomcvn.github.io/KitoMC/tool" class="menuLink"
            ><img
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/toolIcon.png"
              class="menuIcon"
            />Tool</a
          >
        </div>
        <div class="menuButtons">
          <div class="menuButton"></div>
        </div>
      </nav>
      <div class="sideBar">
        <div class="sideBarBox">
          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC"
            ><img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/homeIcon.png"
              alt=""
            />Home</a
          >

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC/resoucePack"
            ><img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/packIcon.png"
              alt=""
            />Resource Packs</a
          >

          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC/maps">
            <img class="sideBarIcon" src="https://kitomcvn.github.io/KitoMC/assets/image/icons/mapIcon.png" />
            Maps
          </a>

          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC/tool"
            ><img class="sideBarIcon" src="https://kitomcvn.github.io/KitoMC/assets/image/icons/toolIcon.png" />
            Tool
          </a>

          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC/miniGame"
            ><img class="sideBarIcon" src="https://kitomcvn.github.io/KitoMC/assets/image/icons/saveIcon.png" />
            Mini Game
          </a>

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="https://youtube.com/@kitomc">
            <img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/youtubeIcon.png"
            />YoutuBe
          </a>

          <a class="sideBarLink" href=""
            ><img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/discordIcon.png"
            />Discord</a
          >
        </div>
      </div>

      <div class="overlay"></div>

`;

    const headerContainer = document.querySelector('#header');

    headerContainer.innerHTML = header;

    const menu = document.querySelector('.header');
    const menuButton = document.querySelector('.menuButtons');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menuOpen');
    });
});

addEventListener('DOMContentLoaded', (event) => {
    const footer = `
              <div class="footerTop">
                    <div class="container">
                        <p>© KitoMC 2023</p>
                        <p>Make by KitoMC & ChatGPT</p>
                    </div>
                </div>
  `;

    const footerContainer = document.querySelector('#footer');

    footerContainer.innerHTML = footer;
});
