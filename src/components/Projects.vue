<template>
  <section class="py-5 container">
    <h2 class="mb-4">Proyectos</h2>
    <div class="d-flex gap-2 mb-3">
      <button class="btn btn-sm btn-outline-primary">All</button>
      <button class="btn btn-sm btn-outline-secondary">Vue</button>
      <button class="btn btn-sm btn-outline-success">React</button>
    </div>
    <div class="row gy-4">
      <div class="col-md-4" v-for="n in 6" :key="n">
        <div class="card h-100">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Proyecto placeholder">
          <div class="card-body">
            <h5 class="card-title">Proyecto {{ n }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">#Vue #Bootstrap</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
