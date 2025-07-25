<template>
  <section class="py-5 bg-light" :class="darkMode ? 'bg-dark text-light' : ''">
    <div class="container">
      <h2 class="mb-4">Experiencia laboral</h2>
      <div class="position-relative ps-4">
        <!-- Línea vertical -->
        <div class="position-absolute top-0 bottom-0 start-0" style="width:2px; background:#6c757d;"></div>

        <!-- Item 1 -->
        <div class="mb-5 position-relative">
          <div
            class="position-absolute"
            style="left:-8px; top:0; width:16px; height:16px; background:#0d6efd; border-radius:50%;"
          ></div>
          <h5>Desarrollador Web</h5>
          <p class="mb-1"><small>Empresa XYZ — 2022 - Presente</small></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <!-- Item 2 -->
        <div class="mb-5 position-relative">
          <div
            class="position-absolute"
            style="left:-8px; top:0; width:16px; height:16px; background:#0d6efd; border-radius:50%;"
          ></div>
          <h5>Becario de TI</h5>
          <p class="mb-1"><small>Compañía ABC — 2021 - 2022</small></p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
        </div>
      </div>
    </div>
  </section>
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
