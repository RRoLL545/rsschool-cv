const switchMenu = () => {
  const navigationList = document.querySelector('.navigation-list');
  navigationList.classList.toggle('burger-menu-open');

  const burgerMenuIcon = document.querySelector('.burger-icon');
  burgerMenuIcon.classList.toggle('burger-icon-close');
}

const burgerMenu = document.querySelector('.burger-icon');
burgerMenu.addEventListener('click', switchMenu );

const selfEstimation = 
`
Hello %USER_NAME%!

Please find below my self estimation of CV task. Happy checking! =)
Self estimation:
CV has been deployed in gh-pages (done)         +10;
Validated layout (done)                         +10;
Semantic layout (done)                          +20;
Footer has hyperlinks (done)                    +10;
CSS styles has been used (done)                 +10;
Layout is in center in any resolution (done)    +10;
Avatar photo has been used in CV (done)         +10;
Navigation has been done as ul > li > a (done)  +10;
All recommended data is in CV (done)            +30;
CV is in English (done)                         +10;

total is                                        130?

Thank you in advance!
`


window.onload = console.log(selfEstimation);