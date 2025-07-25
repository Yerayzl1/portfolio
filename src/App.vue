<template>
  <div :class="darkMode ? 'bg-dark text-light' : 'bg-light text-dark'">
    <Navbar @toggle-theme="darkMode = !darkMode" />
    <Header />
    <Projects />
    <ExperienceTimeline />
    <AboutMe />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Projects from './components/Projects.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  components: { Navbar, Header, Projects, ExperienceTimeline, AboutMe },
  setup() {
    const darkMode = ref(false)
    return { darkMode }
  }
}
</script>