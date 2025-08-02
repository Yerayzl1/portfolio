<!-- 
  Componente Skills: Sección de habilidades técnicas
  - Barras de progreso animadas
  - Animación activada por scroll (IntersectionObserver)
  - Porcentajes que se incrementan gradualmente
  - Botón de contacto con efecto hover
  - Diseño oscuro fijo
-->
<template>
  <section id="skills" class="py-5 container">
    <h2 class="mb-5 text-center">{{ $t('skills.title') }}</h2>
    <h4 class="text-center mb-4 text-muted">{{ $t('skills.subtitle') }}</h4>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Lista de habilidades con barras de progreso animadas -->
        <div v-for="(skill, index) in skills" :key="skill.name" class="mb-4">
          <div class="d-flex justify-content-between mb-2">
            <span class="fw-bold">{{ skill.name }}</span>
            <span class="fw-bold skill-percent">{{ skill.animatedPercent }}%</span>
          </div>
          <div class="progress dark-progress" style="height: 10px;">
            <div
              class="progress-bar dark-progress-bar"
              role="progressbar"
              :style="{ width: skill.animatedPercent + '%' }"
              :aria-valuenow="skill.animatedPercent"
              :aria-valuemin="0"
              :aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Componente Skills
 * 
 * Muestra las habilidades técnicas del desarrollador con:
 * - Barras de progreso animadas que se activan al hacer scroll
 * - Porcentajes que se incrementan gradualmente
 * - IntersectionObserver para detectar cuando la sección es visible
 * - Botón de contacto con efectos hover
 * - Diseño oscuro fijo
 * - Soporte para internacionalización (i18n)
 * 
 * Funcionalidades:
 * - Animación de barras de progreso
 * - Detección de visibilidad para activar animaciones
 * - Incremento gradual de porcentajes
 */
export default {
  name: 'Skills',
  setup() {
    const { t } = useI18n()
    
    // Lista de habilidades ordenadas de mayor a menor porcentaje
    const skills = ref([
      { name: 'Vue.js', percent: 85, animatedPercent: 0 },
      { name: 'Laravel', percent: 80, animatedPercent: 0 },
      { name: 'Node.js', percent: 75, animatedPercent: 0 },
      { name: 'MySQL/MariaDB', percent: 70, animatedPercent: 0 },
      { name: 'MongoDB', percent: 65, animatedPercent: 0 }
    ])
    
    /**
     * Anima una habilidad específica incrementando gradualmente su porcentaje
     * @param {Object} skill - Objeto de habilidad con propiedades percent y animatedPercent
     * @param {number} delay - Retraso antes de iniciar la animación
     */
    const animateSkill = (skill, delay = 0) => {
      setTimeout(() => {
        const duration = 2000 // Duración de la animación en ms
        const increment = skill.percent / (duration / 16) // Incremento cada 16ms
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= skill.percent) {
            skill.animatedPercent = skill.percent
            clearInterval(timer)
          } else {
            skill.animatedPercent = Math.floor(current)
          }
        }, 16) // Actualizar cada 16ms para animación suave
      }, delay)
    }
    
    /**
     * Inicia la animación de todas las habilidades con retraso escalonado
     */
    const startAnimation = () => {
      skills.value.forEach((skill, index) => {
        animateSkill(skill, index * 200) // 200ms de retraso entre cada animación
      })
    }
    
    onMounted(() => {
      // Configurar observer para detectar cuando la sección es visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation()
              observer.unobserve(entry.target) // Desconectar después de animar
            }
          })
        },
        { threshold: 0.5 } // Activar cuando el 50% de la sección sea visible
      )
      
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        observer.observe(skillsSection)
      }
    })
    
    return { 
      skills, 
      t
    }
  }
}
</script>

<style scoped>
.progress {
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  transition: width 0.1s ease;
  border-radius: 10px;
}

/* Estilos para diseño oscuro fijo */
.dark-progress {
  background: rgba(73, 80, 87, 0.3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.dark-progress-bar {
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
}

.skill-percent {
  transition: color 0.3s ease;
}
</style>