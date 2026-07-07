<template>
  <div id="app">
    <Navbar :language="language" @toggle-language="language = $event" />
    <Hero :language="language" />
    <About :language="language" />
    <Experience :language="language" />
    <Education :language="language" />
    <Skills :language="language" />
    <Projects :language="language" />
    <CAMI :language="language" />
    <Interests :language="language" />
    <Footer :language="language" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import CAMI from './components/CAMI.vue'
import Interests from './components/Interests.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    CAMI,
    Interests,
    Footer
  },
  setup() {
    const language = ref('en')

    return {
      language
    }
  }
}
</script>

<style scoped>
#app {
  width: 100%;
}
</style>
