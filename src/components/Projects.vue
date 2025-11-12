<template>
  <!-- 
    Componente Projects: Sección de proyectos del portfolio
    - Sistema de filtrado por tags tecnológicos
    - Cards de proyectos con videos embebidos de Vimeo
    - Efectos hover en cards y videos
    - Botón "Ver más proyectos" funcional
    - Diseño responsive con grid de Bootstrap
  -->
  <section id="projects" class="py-5 container">
    <h2 class="mb-5 text-center">{{ $t('projects.title') }}</h2>
    
    <!-- Sistema de filtros por tecnologías -->
    <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
      <span 
        class="badge rounded-pill tag-filter"
        :class="selectedTags.length === 0 ? 'bg-primary text-white' : 'bg-light text-dark border'"
        @click="clearFilter()"
        role="button"
        style="cursor: pointer;"
      >
        {{ $t('projects.all') }}
      </span>
      <span 
        v-for="tag in availableTags" 
        :key="tag"
        class="badge rounded-pill tag-filter"
        :class="selectedTags.includes(tag) ? 'bg-success text-white' : 'bg-secondary text-light border-light'"
        @click="toggleTag(tag)"
        role="button"
        style="cursor: pointer;"
      >
        {{ tag }}
        <i v-if="selectedTags.includes(tag)" class="bi bi-check-circle-fill ms-1"></i>
      </span>
    </div>
    
    <!-- Grid responsive de proyectos -->
    <div class="row gy-4">
      <div 
        class="col-lg-4 col-md-6" 
        v-for="project in displayedProjects" 
        :key="project.id"
      >
        <div class="card h-100 project-card bg-dark text-light border-secondary">
          <!-- Contenedor de video embebido de Vimeo -->
          <div class="video-container position-relative overflow-hidden">
            <iframe
              :src="project.videoUrl"
              class="card-img-top video-iframe"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              :title="project.title"
            ></iframe>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
          <!-- Tags de tecnologías utilizadas -->
          <div class="card-footer bg-dark border-secondary">
            <div class="d-flex flex-wrap gap-1">
              <small 
                v-for="tag in project.tags" 
                :key="tag"
                class="badge bg-success"
              >
                #{{ tag }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Botón para mostrar más proyectos -->
    <div class="text-center mt-5" v-if="!showAll && filteredProjects.length > 6">
      <button class="btn btn-outline-success btn-lg" @click="showAll = true">
        {{ $t('projects.viewMore') }}
      </button>
    </div>
  </section>
</template>

<script>
import { inject, ref, computed } from 'vue'

/**
 * Componente Projects
 * 
 * Muestra una galería de proyectos con las siguientes funcionalidades:
 * - Sistema de filtrado por tecnologías/tags
 * - Cards de proyectos con videos embebidos de Vimeo
 * - Efectos hover en cards y videos para mejor interacción
 * - Paginación con botón "Ver más proyectos"
 * - Diseño responsive adaptable a diferentes pantallas
 * - Diseño oscuro fijo
 * 
 * Características técnicas:
 * - Filtrado reactivo de proyectos
 * - Lazy loading de contenido
 * - Efectos CSS para mejorar UX
 */
export default {
  name: 'Projects',
  setup() {
    const selectedTags = ref([]) // Array de tags seleccionados para filtrar
    const showAll = ref(false) // Flag para mostrar todos los proyectos o solo los primeros 6
    
    // Array de proyectos con datos placeholder
    const projects = ref([
      {
        id: 1,
        title: 'Gestión de vehículos - Tunateca Balfegó Espai Gastronòmic',
        description: 'Primera versión de un panel de control de parking con entradas, salidas, grupos, usuarios, vehículos y restricciones varias...',
        videoUrl: 'https://www.youtube.com/watch?v=iKMr7KzWTqo',
        tags: ['Laravel', 'Vue.js', 'MySQL']
      },
      {
        id: 2,
        title: 'Plataforma de desvios - Top Doctors',
        description: 'Segunda versión de un panel de gestión de pacientes y doctores con gestión de teléfono, descansos, consultas, estadísticas...',
        videoUrl: 'https://www.youtube.com/watch?v=e4ZVUWszftI',
        tags: ['Laravel', 'Vue.js', 'MySQL']
      },
      {
        id: 3,
        title: 'Flowchart',
        description: 'Visualiza tus ideas con Vue Flow, un diagrama de flujo Vue3 altamente personalizable... El componente Vue 3 personalizable que aporta interactividad a los diagramas de flujo y gráficos.',
        videoUrl: 'https://www.youtube.com/watch?v=VU2SpM62Yns',
        tags: ['Vue.js', 'Bootstrap', 'CSS']
      },
      {
        id: 4,
        title: 'Chat Application - Daily.co',
        description: 'Aplicación de videochat en tiempo real con salas privadas y públicas.',
        videoUrl: 'https://www.youtube.com/watch?v=zqzoL0Xm-K4',
        tags: ['Node.js', 'Socket.io', 'Vue.js']
      },
      {
        id: 5,
        title: 'CRM Peluqueria - Byjesi',
        description: 'CRM para gestión de citas, clientes y más en peluquerías y centros de estética.',
        videoUrl: '',
        tags: ['Laravel', 'Vue.js', 'MySQL']
      },
      {
        id: 6,
        title: 'No disponible',
        description: 'Este proyecto no está disponible actualmente debido a que se encuentra en fase de desarrollo.',
        videoUrl: '',
        tags: ['Laravel', 'MySQL']
      },
      {
        id: 7,
        title: 'No disponible',
        description: 'Este proyecto no está disponible actualmente debido a que se encuentra en fase de desarrollo.',
        videoUrl: '',
        tags: ['Node.js', 'MongoDB']
      },
    ])
    
    /**
     * Obtiene todos los tags únicos disponibles de todos los proyectos
     * @returns {Array} Array de tags únicos
     */
    const availableTags = computed(() => {
      const tags = new Set()
      projects.value.forEach(project => {
        project.tags.forEach(tag => tags.add(tag))
      })
      return Array.from(tags)
    })
    
    /**
     * Filtra los proyectos basado en los tags seleccionados
     * @returns {Array} Array de proyectos filtrados
     */
    const filteredProjects = computed(() => {
      if (selectedTags.value.length === 0) {
        return projects.value
      }
      return projects.value.filter(project => 
        selectedTags.value.some(tag => project.tags.includes(tag))
      )
    })
    
    /**
     * Determina qué proyectos mostrar basado en el estado showAll
     * @returns {Array} Array de proyectos a mostrar (máximo 6 si showAll es false)
     */
    const displayedProjects = computed(() => {
      if (showAll.value) {
        return filteredProjects.value
      }
      return filteredProjects.value.slice(0, 6)
    })
    
    /**
     * Alterna la selección de un tag específico
     * @param {string} tag - Tag a alternar
     */
    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag)
      if (index > -1) {
        selectedTags.value.splice(index, 1)
      } else {
        selectedTags.value.push(tag)
      }
      showAll.value = false // Resetear la vista al filtrar
    }
    
    /**
     * Limpia todos los filtros y muestra todos los proyectos
     */
    const clearFilter = () => {
      selectedTags.value = []
      showAll.value = false // Resetear la vista al limpiar filtros
    }
    
    return {
      projects,
      selectedTags,
      showAll,
      availableTags,
      filteredProjects,
      displayedProjects,
      toggleTag,
      clearFilter
    }
  }
}
</script>

<style scoped>
.project-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.video-container {
  height: 200px;
  position: relative;
}

.video-iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.project-card:hover .video-iframe {
  transform: scale(1.05);
}

.tag-filter {
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 16px;
  font-size: 0.9rem;
}

.tag-filter:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
