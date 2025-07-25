<template>
  <nav class="navbar navbar-expand-lg" :class="darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'">
    <div class="container">
      <a class="navbar-brand" href="#">Σ</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Proyectos</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Experiencia laboral</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Estudios</a></li>
        </ul>
        <button class="btn btn-outline-secondary" @click="$emit('toggle-theme')">
          <i v-if="darkMode" class="bi bi-sun-fill"></i>
          <i v-else class="bi bi-moon-stars-fill"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject } from 'vue'
export default {
    setup() {
        const darkMode = inject('darkMode')
        return { darkMode }
    }
}
</script>
