<script setup>
import Logo from './components/Logo.vue';
import AboutUs from '@/components/AboutUs.vue';
import Research from '@/components/Research.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <header>
    <Logo />
    <h1>Tézis Kutatóközpont</h1>
  </header>
  <main>
    <AboutUs />
    <Research />
  </main>
  <footer>
    <nav>
      <a href="https://www.facebook.com/teziskutatokozpont" target="_blank">
        <FontAwesomeIcon :icon="faFacebook" title="Facebook" />
      </a>
      <a href="mailto:info@tezis.hu" target="_blank">
        <FontAwesomeIcon :icon="faEnvelope" title="E-mail cím" />
        info@tezis.hu
      </a>
    </nav>
    <small>
      <FontAwesomeIcon :icon="faCopyright" title="Copyright" />
      2020-2025 GazMag Tudományos és Ismeretterjesztő Egyesület
    </small>
  </footer>
</template>

<style scoped>
header {
  background: #06a7;
  display: grid;
  place-content: center;
  height: 75vh;
  padding: 1rem;
  position: relative;
  z-index: 0;

  &::before {
    background: url(./assets/knowledge-book-library-glasses.jpg) center center no-repeat;
    background-size: cover;
    content: "";
    filter: grayscale(100%) blur(0.25rem);
    opacity: 0.25;
    position: absolute;
    inset: 0;
  }

  svg {
    display: inline-block;
    height: 25vh;
    max-width: 100%;
    z-index: 1;
  }

  h1 {
    color: transparent;
    font-size: 0;
    opacity: 0;
    visibility: hidden;
  }
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  a {
    color: var(--secondary);
    display: inline-block;
    font-weight: 300;
    padding: 0.5em;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover, &:active, &:focus {
      opacity: 0.5;
    }
  }

  small {
    font-weight: 200;
    opacity: 0.75;
  }

  @media screen and (max-width: 40rem) {
    flex-direction: column;
  }
}
</style>
