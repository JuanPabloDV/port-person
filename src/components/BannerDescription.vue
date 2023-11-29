<template>
    <div class="banner d-flex justify-center align-center">
      <v-container class="banner-content">
        <v-row>
          <v-col cols="6">
            <h3>Olá, meu nome é</h3>
            <h2>Juan Pablo</h2>
            <h4>Sou desenvolvedor Front-end</h4>
            <div class="d-flex icon-wrapper">
              <a href="https://github.com/JuanPabloDV" target="_blank">
                <div class="icon gitHub"></div>
              </a>

              <a href="https://www.instagram.com/juan_pablopqp/" target="_blank">
                <div class="icon instagram"></div>
              </a>

              <a href="https://www.linkedin.com/in/juan-pablo-83261a236/" target="_blank">
                <div class="icon linkedin"></div>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<style>
  .banner {
    background-image: url('../img/banner.jpg');
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .banner::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    widows: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .banner-content {
    z-index: 1;
  }

  .banner h2, .banner h3, .banner h4 {
    color: #FFFFFF;
  }

  .banner h2 {
    font-size: 70px;
    margin: 0;
    line-height: 50px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
  }

  .banner h3 {
    font-size: 40px;
    line-height: 40px;
  }

  .banner h4 {
    font-weight: 100;
    font-size: 30px;
  }

  .icon-wrapper {
    gap: 10px;
  }

  .icon {
    height: 42px;
    width: 42px;
    transition: .3s;
  }

  .icon:hover {
    filter: brightness(150%);
  }

  .icon.gitHub {
    background-image: urL('../img/github.png');
  }

  .icon.instagram {
    background-image: urL('../img/instagram.png');
  }

  .icon.linkedin {
    background-image: urL('../img/linkedin.png');
  }

</style>