addEventListener("DOMContentLoaded", (event) => {
  const header = `
<nav class="menu">
        <div class="menuLogo"></div>
        <div class="menuLinks">
          <a href="" class="menuLink"
            ><img
              src="assets/image/icons/homeIcon.png"
              class="menuIcon"
            />Home</a
          >
          <a href="resoucePack" class="menuLink"
            ><img
              src="assets/image/icons/packIcon.png"
              class="menuIcon"
            />Pack</a
          >
          <a href="" class="menuLink"
            ><img src="assets/image/icons/saveIcon.png" class="menuIcon" />Mini
            Game</a
          >
          <a href="" class="menuLink"
            ><img
              src="assets/image/icons/toolIcon.png"
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
          <a class="sideBarLink" href=""
            ><img
              class="sideBarIcon"
              src="assets/image/icons/homeIcon.png"
              alt=""
            />Home</a
          >

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="resoucePack"
            ><img
              class="sideBarIcon"
              src="assets/image/icons/packIcon.png"
              alt=""
            />Resource Packs</a
          >

          <a class="sideBarLink" href="">
            <img class="sideBarIcon" src="assets/image/icons/mapIcon.png" />
            Maps
          </a>

          <a class="sideBarLink" href=""
            ><img class="sideBarIcon" src="assets/image/icons/toolIcon.png" />
            Tool
          </a>

          <a class="sideBarLink" href=""
            ><img class="sideBarIcon" src="assets/image/icons/saveIcon.png" />
            Mini Game
          </a>

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="https://youtube.com/@kitomc">
            <img
              class="sideBarIcon"
              src="assets/image/icons/youtubeIcon.png"
            />YoutuBe
          </a>

          <a class="sideBarLink" href=""
            ><img
              class="sideBarIcon"
              src="assets/image/icons/discordIcon.png"
            />Discord</a
          >
        </div>
      </div>

`;

  const headerContainer = document.querySelector("#header");

  headerContainer.innerHTML = header;

  const menu = document.querySelector(".header");
  const menuButton = document.querySelector(".menuButtons");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menuOpen");
  });
});
