<template>
  <!-- 
    Componente Header: Sección principal del portfolio
    - Efecto typewriter para el texto principal
    - Contadores animados para proyectos y experiencia
    - Botones de acción (LinkedIn y Currículum)
    - Diseño centrado y responsive
  -->
  <header id="header" class="py-5 text-center min-vh-100 d-flex flex-column justify-content-center">
    <div class="container">
      <!-- Texto principal con efecto typewriter -->
      <h1 class="mb-4 display-4">
        {{ $t('header.greeting') }} <span class="typewriter">{{ displayedText }}</span><span class="cursor">|</span>
      </h1>
      
      <!-- Botones de acción principales -->
      <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
        <button 
           class="btn btn-outline-light btn-lg"
           data-bs-toggle="modal" 
           data-bs-target="#cvModal"
         >
           <i class="bi bi-file-earmark-text me-2"></i>{{ $t('header.cvButton') }}
         </button>
        <a 
          href="https://www.linkedin.com/in/yerayzafra/" 
          target="_blank" 
          class="btn btn-lg"
          style="background-color: #0077B5; border-color: #0077B5; color: white;"
        >
          <i class="bi bi-linkedin me-2"></i>LinkedIn
        </a>
      </div>
      
      <!-- Contadores animados de estadísticas -->
      <div class="row justify-content-center">
        <div class="col-md-3 col-6 mb-3">
          <h2 class="display-4 text-success mb-0">+{{ projectsCount }}</h2>
          <p class="lead">{{ $t('header.soloProjects') }}</p>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <h2 class="display-4 text-success mb-0">{{ yearsCount }}</h2>
          <p class="lead">{{ $t('header.yearsProgramming') }}</p>
        </div>
      </div>
      
      <!-- Botón EMPEZAR -->
      <div class="text-center mb-4">
        <button 
           class="btn btn-warning btn-lg px-4 py-2 fw-bold"
           @click="scrollToSkills"
           style="border-radius: 25px; box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);"
         >
           {{ $t('header.startButton') }}
         </button>
      </div>
    </div>
  </header>
  
  <!-- Modal para mostrar CV -->
  <div class="modal fade" id="cvModal" tabindex="-1" aria-labelledby="cvModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content bg-dark text-light">
        <div class="modal-header border-secondary">
           <h5 class="modal-title" id="cvModalLabel">
             <i class="bi bi-file-earmark-text me-2"></i>{{ $t('header.cvButton') }}
           </h5>
           <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body text-center py-5">
           <div class="mb-4">
             <i class="bi bi-file-earmark-pdf text-success" style="font-size: 4rem;"></i>
           </div>
           <h4 class="mb-3">{{ $t('footer.cvModal.title') }}</h4>
           <p class="text-muted mb-4">{{ $t('footer.cvModal.description') }}</p>
           <div class="d-flex justify-content-center gap-3">
             <a 
               href="#" 
               class="btn btn-success btn-lg"
               @click="downloadCV('es')"
             >
               <span class="me-2">🇪🇸</span>{{ $t('footer.cvModal.downloadSpanish') }}
             </a>
             <a 
               href="#" 
               class="btn btn-outline-success btn-lg"
               @click="downloadCV('en')"
             >
               <span class="me-2">🇬🇧</span>{{ $t('footer.cvModal.downloadEnglish') }}
             </a>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Componente Header
 * 
 * Sección principal del portfolio que incluye:
 * - Efecto typewriter para mostrar texto de forma animada
 * - Contadores animados que incrementan gradualmente
 * - Botones de acción para currículum y LinkedIn
 * - Diseño responsive y adaptable al modo oscuro
 * 
 * Funcionalidades:
 * - Animación de escritura carácter por carácter
 * - Contadores que se animan al cargar el componente
 * - Efectos hover en botones
 */
export default {
  name: 'Header',
  setup() {
    const { locale } = useI18n()
    
    // Configuración del efecto typewriter
    const displayedText = ref('')
    
    // Contadores animados
    const projectsCount = ref(0)
    const yearsCount = ref(0)
    
    // Palabras del typewriter según el idioma
    const words = computed(() => {
      return locale.value === 'es' 
        ? ['desarrollador web.', ' web developer.', 'programador.']
        : ['web developer.', 'web developer.', 'programmer.']
    })
    
    let currentWordIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    
    /**
     * Efecto typewriter: escribe y borra palabras de forma cíclica
     */
    const typeWriter = () => {
      const currentWord = words.value[currentWordIndex]
      
      if (isDeleting) {
        displayedText.value = currentWord.substring(0, currentCharIndex - 1)
        currentCharIndex--
      } else {
        displayedText.value = currentWord.substring(0, currentCharIndex + 1)
        currentCharIndex++
      }
      
      let typeSpeed = isDeleting ? 50 : 100 // Velocidad de borrado vs escritura
      
      if (!isDeleting && currentCharIndex === currentWord.length) {
        typeSpeed = 2000 // Pausa al completar la palabra
        isDeleting = true
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentWordIndex = (currentWordIndex + 1) % words.value.length
      }
      
      setTimeout(typeWriter, typeSpeed)
    }
    
    /**
     * Anima un contador desde 0 hasta el valor objetivo
     * @param {number} target - Valor objetivo
     * @param {number} duration - Duración de la animación en ms
     * @param {function} callback - Función que recibe el valor actual
     */
    const animateCounter = (target, duration, callback) => {
      let start = 0
      const increment = target / (duration / 16) // Incremento cada 16ms (60fps)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          callback(target)
          clearInterval(timer)
        } else {
          callback(Math.floor(start))
        }
      }, 16)
    }
    
    /**
     * Scroll suave a la sección de habilidades
     */
    const scrollToSkills = () => {
      const element = document.getElementById('skills')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    
    /**
     * Descarga el CV en el idioma especificado
     * @param {string} language - Idioma del CV ('es' o 'en')
     */
    const downloadCV = (language) => {
      const cvUrl = language === 'es' ? '/cv-yeray-zafra-es.pdf' : '/cv-yeray-zafra-en.pdf'
      
      // Crear un enlace temporal para descargar
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = `CV-Yeray-Zafra-${language.toUpperCase()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Cerrar el modal
      const modal = document.getElementById('cvModal')
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal)
        if (bootstrapModal) {
          bootstrapModal.hide()
        }
      }
    }
    
    onMounted(() => {
      // Iniciar animaciones al montar el componente
      setTimeout(() => {
        typeWriter()
      }, 1000)
      
      setTimeout(() => {
        animateCounter(10, 2000, (value) => {
          projectsCount.value = value
        })
      }, 2000) // 10 proyectos en 2 segundos
      
      setTimeout(() => {
        animateCounter(2, 1500, (value) => {
          yearsCount.value = value
        })
      }, 2500) // 2 años en 1.5 segundos
    })
    
    return {
      displayedText,
      projectsCount,
      yearsCount,
      scrollToSkills,
      downloadCV,
      locale
    }
  }
}
</script>

<style scoped>
.typewriter {
  color: #28a745;
  font-weight: bold;
}

.cursor {
  animation: blink 1s infinite;
  color: #28a745;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>