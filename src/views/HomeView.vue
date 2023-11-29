<template>
  <div class="navbar position-fixed d-flex justify-center">
    <nav>
      <ul class="d-flex nav-wrapper">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Quem sou</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
        <li>
          <a>Contato</a>
        </li>
      </ul>
    </nav>
  </div>

  <BannerDescription/>

  <AboutDescription/>
  
</template>

<script>
import { defineComponent } from 'vue';
import BannerDescription from '../components/BannerDescription.vue'
import AboutDescription from '../components/AboutDescription.vue'
// Components

export default defineComponent({
  name: 'HomeView',
  components: {
    BannerDescription,
    AboutDescription,
  }
});
</script>

<style>
  .navbar {
    z-index: 1;
    left: 0;
    right: 0;
  }

  .navbar nav {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 10px 10px;
  }

  .nav-wrapper {
    padding: 10px 10px;
  }

  .nav-wrapper li {
    color: #FFFFFF;
    list-style: none;
    margin: 0 10px;
    text-transform: uppercase;
    font-family: 'League Spartan';
    font-weight: 700;
  }
</style>
