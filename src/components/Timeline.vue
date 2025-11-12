<template>
  <!-- 
    Componente Timeline: Sección de experiencia laboral y estudios
    - Timeline vertical animada que se activa con scroll
    - Alternancia de posiciones (izquierda/derecha) para mejor visualización
    - Animaciones CSS para entrada progresiva de elementos
    - Diseño responsive que se adapta a móviles
    - Integración completa con modo oscuro/claro
  -->
  <section class="py-5 container">
    <!-- Sección de Experiencia Laboral -->
    <div id="experience" class="mb-5">
      <h2 class="mb-5 text-center">{{ $t('timeline.experience') }}</h2>
      <div class="timeline-container position-relative">
        <div class="timeline-line position-absolute" ref="experienceLine"></div>
        <div class="timeline-progress timeline-progress-experience position-absolute" ref="experienceProgress"></div>
        
        <div
          v-for="(item, i) in exp"
          :key="i"
          class="timeline-item position-relative mb-5"
          :ref="el => experienceItems[i] = el"
        >
          <div class="timeline-dot position-absolute" :class="{ 'active': experienceItemsActive[i] }">
            <i class="bi bi-briefcase"></i>
          </div>
          <div class="timeline-content ms-5">
            <div 
              class="card timeline-card" 
              :class="[
                'bg-dark text-light border-secondary',
                { 'timeline-item-animate': experienceItemsActive[i] }
              ]"
              @click="openExperienceModal(item)"
              style="cursor: pointer;"
            >
              <div class="card-body">
                <h5 class="card-title text-success">{{ item.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ item.company }}</h6>
                <p class="card-text"><small class="text-muted">{{ item.period }}</small></p>
                <p class="card-text">{{ item.desc }}</p>
                <small class="text-muted">
                  <i class="bi bi-eye me-1"></i>{{ $t('timeline.clickToSeeMore') }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Estudios -->
    <div id="studies">
      <h2 class="mb-5 text-center">{{ $t('timeline.education') }}</h2>
      <div class="timeline-container position-relative">
        <div class="timeline-line position-absolute" ref="studiesLine"></div>
        <div class="timeline-progress timeline-progress-studies position-absolute" ref="studiesProgress"></div>
        
        <div
          v-for="(item, i) in studies"
          :key="i"
          class="timeline-item position-relative mb-5"
          :ref="el => studiesItems[i] = el"
        >
          <div class="timeline-dot position-absolute" :class="{ 'active': studiesItemsActive[i] }">
            <i class="bi bi-mortarboard"></i>
          </div>
          <div class="timeline-content ms-5">
            <div 
              class="card timeline-card" 
              :class="[
                'bg-dark text-light border-secondary',
                { 'timeline-item-animate': studiesItemsActive[i] }
              ]"
              @click="openStudiesModal(item)"
              style="cursor: pointer;"
            >
              <div class="card-body">
                <h5 class="card-title text-primary">{{ item.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ item.institution }}</h6>
                <p class="card-text"><small class="text-muted">{{ item.period }}</small></p>
                <p class="card-text">{{ item.desc }}</p>
                <small class="text-muted">
                  <i class="bi bi-eye me-1"></i>{{ $t('timeline.clickToSeeMore') }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Modal para Experiencia Laboral -->
  <div class="modal fade" id="experienceModal" tabindex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark text-light">
        <div class="modal-header border-secondary">
          <h5 class="modal-title" id="experienceModalLabel">
            <i class="bi bi-briefcase me-2"></i>{{ selectedExperience?.title }}
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="selectedExperience">
            <h6 class="text-success mb-3">{{ selectedExperience.company }}</h6>
            <p class="text-muted mb-3">{{ selectedExperience.period }}</p>
            <p class="mb-4">{{ selectedExperience.desc }}</p>
            
            <h6 class="mb-3">{{ $t('timeline.learnings') }}:</h6>
            <ul class="list-unstyled">
              <li v-for="learning in selectedExperience.learnings" :key="learning" class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>{{ learning }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal para Estudios -->
  <div class="modal fade" id="studiesModal" tabindex="-1" aria-labelledby="studiesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark text-light">
        <div class="modal-header border-secondary">
          <h5 class="modal-title" id="studiesModalLabel">
            <i class="bi bi-mortarboard me-2"></i>{{ selectedStudy?.title }}
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="selectedStudy">
            <h6 class="text-primary mb-3">{{ selectedStudy.institution }}</h6>
            <p class="text-muted mb-3">{{ selectedStudy.period }}</p>
            <p class="mb-4">{{ selectedStudy.desc }}</p>
            
            <h6 class="mb-3">{{ $t('timeline.learnings') }}:</h6>
            <ul class="list-unstyled">
              <li v-for="learning in selectedStudy.learnings" :key="learning" class="mb-2">
                <i class="bi bi-check-circle-fill text-primary me-2"></i>{{ learning }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted, onUnmounted } from 'vue'

/**
 * Componente Timeline
 * 
 * Muestra la experiencia laboral y educación en formato de línea de tiempo:
 * - Timeline vertical con elementos alternados (izquierda/derecha)
 * - Animaciones CSS que se activan al hacer scroll
 * - Diseño responsive que se adapta a dispositivos móviles
 * - Puntos de conexión y líneas que conectan los elementos
 * - Diseño oscuro fijo
 * 
 * Estructura:
 * - Experiencia laboral: posiciones, empresas, períodos y descripciones
 * - Estudios: títulos, instituciones, períodos y descripciones
 * 
 * Características visuales:
 * - Alternancia de posiciones para mejor legibilidad
 * - Efectos hover en las tarjetas
 * - Animaciones de entrada progresiva
 */
export default {
  name: 'Timeline',
  setup() {
    
    const experienceItems = ref([])
    const studiesItems = ref([])
    const experienceItemsActive = ref([])
    const studiesItemsActive = ref([])
    const experienceLine = ref(null)
    const experienceProgress = ref(null)
    const studiesLine = ref(null)
    const studiesProgress = ref(null)
    const selectedExperience = ref(null)
    const selectedStudy = ref(null)
    
    // Datos de experiencia laboral con información placeholder
    const exp = [
      {
        title: 'Desarrollador Web',
        company: 'Netcom Comunicaciones S.L.',
        period: '2023 - 2025',
        desc: 'Desarrollador web dedicado a crear aplicaciones desde cero para clientes. Desarrollando diagramas, wireframes, documentación interna y externa, la parte frontal y la parte trasera de cada aplicación.',
        learnings: [
          'HTML5',
          'TypeScript',
          'MySQL',
          'Node.js',
          'Express.js',
          'MongoDB',
          'JavaScript',
          'Vue.js',
          'Git'
        ]
      },
      {
        title: 'Técnico especialista en Sistemas Microinformáticos y Redes/TI Helpdesk',
        company: 'Silgan Dispensing Systems Covit Europe S.L',
        period: '2022 - 2023',
        desc: 'Mantenimiento y ayudante de operaciones sobre Sistemas Microinformáticos y Redes como Centro de Atención al Usuario (20 horas/semana).',
        learnings: [
          'Linux',
          'Servicio de soporte técnico',
          'Internet Information Services (IIS)',
          'Windows',
          'Resolución de incidencias',
          'Destreza tecnológica',
          'Resolución de problemas'
        ]
      }
    ]
    
    // Datos de educación con información placeholder
    const studies = [
      {
        title: 'Desarrollo de Aplicaciones Web',
        institution: 'Institut Cirviànum de Torelló',
        period: '2023 - 2025',
        desc: 'El Grado Superior en Desarrollo de Aplicaciones Web (DAW) es un ciclo formativo de Formación Profesional que capacita a los estudiantes para desarrollar, implantar y mantener aplicaciones informáticas en entornos web.',
        learnings: [
          'Programación con JavaScript ES6+',
          'Desarrollo con frameworks (Vue.js, React)',
          'Bases de datos relacionales y NoSQL',
          'Desarrollo de APIs REST',
          'Metodologías ágiles de desarrollo',
          'Testing y calidad de software'
        ]
      },
      {
        title: 'Sistemas Microinformáticos y Redes',
        institution: 'Institut Cirviànum de Torelló',
        period: '2021 - 2023',
        desc: 'El Grado Medio en Sistemas Microinformáticos y Redes (SMX) es un ciclo formativo de Formación Profesional que prepara a los estudiantes para instalar, configurar y mantener sistemas informáticos y redes locales en entornos pequeños.',
        learnings: [
          'Administración de sistemas Windows/Linux',
          'Configuración de redes TCP/IP',
          'Fundamentos de programación',
          'Hardware y arquitectura de computadores',
          'Seguridad informática básica',
          'Resolución de incidencias técnicas'
        ]
      }
    ]
    
    /**
     * Actualiza el estado de la timeline basado en la posición del scroll
     * @param {Array} items - Referencias a los elementos de la timeline
     * @param {Object} progress - Referencia a la barra de progreso
     * @param {Array} itemsActive - Array reactivo que controla qué elementos están activos
     */
    const updateTimeline = (items, progress, itemsActive) => {
      if (!items.value.length || !progress.value) return
      
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      
      let activeCount = 0
      
      items.value.forEach((item, index) => {
        if (!item) return
        
        const itemTop = item.offsetTop
        const itemHeight = item.offsetHeight
        const triggerPoint = scrollTop + windowHeight * 0.7
        
        if (triggerPoint >= itemTop) {
          if (!itemsActive.value[index]) {
            // Añadir delay progresivo para animación escalonada
            setTimeout(() => {
              itemsActive.value[index] = true
            }, index * 200)
          }
          activeCount = index + 1
        } else {
          itemsActive.value[index] = false
        }
      })
      
      // Actualizar la barra de progreso basada en elementos activos
      const totalItems = items.value.length
      const progressPercentage = (activeCount / totalItems) * 100
      progress.value.style.height = `${progressPercentage}%`
    }
    
    /**
     * Manejador del evento scroll que actualiza ambas timelines
     */
    const handleScroll = () => {
      updateTimeline(experienceItems, experienceProgress, experienceItemsActive)
      updateTimeline(studiesItems, studiesProgress, studiesItemsActive)
    }
    
    onMounted(() => {
      // Inicializar arrays reactivos
      experienceItemsActive.value = new Array(exp.length).fill(false)
      studiesItemsActive.value = new Array(studies.length).fill(false)
      
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Ejecutar una vez al montar
    })
    
    /**
     * Abre el modal de experiencia laboral con los detalles seleccionados
     */
    const openExperienceModal = (experience) => {
      selectedExperience.value = experience
      const modal = new bootstrap.Modal(document.getElementById('experienceModal'))
      modal.show()
    }
    
    /**
     * Abre el modal de estudios con los detalles seleccionados
     */
    const openStudiesModal = (study) => {
      selectedStudy.value = study
      const modal = new bootstrap.Modal(document.getElementById('studiesModal'))
      modal.show()
    }
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      exp,
      studies,
      experienceItems,
      studiesItems,
      experienceItemsActive,
      studiesItemsActive,
      experienceLine,
      experienceProgress,
      studiesLine,
      studiesProgress,
      selectedExperience,
      selectedStudy,
      openExperienceModal,
      openStudiesModal
    }
  }
}
</script>

<style scoped>
.timeline-container {
  padding-left: 3rem;
}

.timeline-line {
  left: 1.5rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #6c757d;
  z-index: 1;
}

.timeline-progress {
  left: 1.5rem;
  top: 0;
  width: 3px;
  transition: height 0.3s ease;
  z-index: 2;
}

.timeline-progress-experience {
  background: linear-gradient(to bottom, #28a745, #20c997);
}

.timeline-progress-studies {
  background: linear-gradient(to bottom, #007bff, #6610f2);
}

.timeline-item {
  padding-left: 1rem;
}

.timeline-dot {
  left: 0.75rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #6c757d;
  border: 3px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 1rem;
}

.timeline-dot.active {
  background: #28a745;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(40, 167, 69, 0.5);
}

.timeline-content {
  margin-left: 1rem;
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.timeline-item:hover .card {
  transform: translateX(10px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.timeline-item-animate {
  animation: slideInFromLeft 0.6s ease-out;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .timeline-container {
    padding-left: 2rem;
  }
  
  .timeline-line,
  .timeline-progress {
    left: 1rem;
  }
  
  .timeline-dot {
    left: 0.25rem;
    width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
  }
}
</style>