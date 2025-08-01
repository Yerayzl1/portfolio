<template>
  <!-- 
    Componente Footer: Pie de página del portfolio
    - Información personal y enlaces de contacto
    - Tres modales funcionales (email, CV, más sobre mí)
    - Botón flotante de contacto
    - Enlaces a redes sociales
    - Diseño responsive y adaptable al modo oscuro
    - Copyright y información adicional
  -->
  <footer class="py-5 mt-5 bg-dark">
    <div class="container">
      <div class="row">
        <!-- Sección de información personal -->
        <div class="col-lg-6 mb-4">
          <h5 class="text-success mb-3">Yeray Zafra</h5>
          <p class="mb-3">Desarrollador Full Stack especializado en Vue.js y Laravel. Creando experiencias web excepcionales desde Barcelona.</p>
          <div class="d-flex gap-3">
            <a href="https://linkedin.com" target="_blank" class="text-success">
              <i class="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://github.com" target="_blank" class="text-success">
              <i class="bi bi-github fs-4"></i>
            </a>
            <a href="mailto:management@yerayzafra.com" class="text-success">
              <i class="bi bi-envelope fs-4"></i>
            </a>
          </div>
        </div>
        
        <!-- Sección de acciones y contacto -->
        <div class="col-lg-6">
          <h5 class="mb-3">Contacto</h5>
          <div class="d-flex flex-column gap-2">
            <!-- Botón para enviar email directo -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="sendEmail"
            >
              <i class="bi bi-envelope me-2"></i>Enviar un mail
            </button>
            <!-- Botón para modal de descarga de CV -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="showCurriculumModal = true"
            >
              <i class="bi bi-file-earmark-pdf me-2"></i>Currículum
            </button>
            <!-- Botón para modal con información adicional -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="showAboutModal = true"
            >
              <i class="bi bi-info-circle me-2"></i>+ sobre mí
            </button>
          </div>
        </div>
      </div>
      
      <!-- Línea divisoria y copyright -->
      <hr class="my-4">
      
      <div class="text-center">
        <p class="mb-0">&copy; 2024 Yeray Zafra. Todos los derechos reservados.</p>
      </div>
    </div>
    
    <!-- Modal para descarga de CV en diferentes idiomas -->
    <div 
      class="modal fade" 
      :class="{ 'show d-block': showCurriculumModal }"
      tabindex="-1" 
      v-if="showCurriculumModal"
      @click.self="showCurriculumModal = false"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h5 class="modal-title">Currículum - Yeray Zafra</h5>
            <button 
                type="button" 
                class="btn-close btn-close-white"
                @click="showCurriculumModal = false"
              ></button>
          </div>
          <div class="modal-body text-center">
            <div class="mb-4">
              <i class="bi bi-file-earmark-pdf text-success" style="font-size: 4rem;"></i>
            </div>
            <h6 class="mb-3">Descargar Currículum</h6>
            <p class="mb-4">Selecciona el idioma de tu preferencia:</p>
            <div class="d-flex justify-content-center gap-3">
              <a 
                href="#" 
                class="btn btn-success"
                download="CV_Yeray_Zafra_ES.pdf"
              >
                <span class="me-2">🇪🇸</span>Español
              </a>
              <a 
                href="#" 
                class="btn btn-outline-success"
                download="CV_Yeray_Zafra_EN.pdf"
              >
                <span class="me-2">🇬🇧</span>English
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal con información personal adicional -->
    <div 
      class="modal fade" 
      :class="{ 'show d-block': showAboutModal }"
      tabindex="-1" 
      v-if="showAboutModal"
      @click.self="showAboutModal = false"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h5 class="modal-title">Más sobre mí</h5>
            <button 
              type="button" 
              class="btn-close btn-close-white" 
              @click="showAboutModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4 text-center mb-4">
                <img 
                  src="https://via.placeholder.com/200x200/28a745/ffffff?text=YZ" 
                  alt="Yeray Zafra" 
                  class="img-fluid rounded-circle mb-3"
                  style="width: 150px; height: 150px; object-fit: cover;"
                />
                <h6 class="text-success">Yeray Zafra Lora</h6>
                <p class="text-muted">Full Stack Developer</p>
              </div>
              
              <div class="col-md-8">
                <h6 class="text-success mb-3">Mi Historia</h6>
                <p class="mb-3">
                  Comencé mi viaje en el desarrollo web hace más de 2 años, motivado por la 
                  pasión de crear soluciones digitales que impacten positivamente en la vida 
                  de las personas.
                </p>
                
                <h6 class="text-success mb-3">Filosofía de Trabajo</h6>
                <p class="mb-3">
                  Creo firmemente en el código limpio, las buenas prácticas y el aprendizaje 
                  continuo. Cada proyecto es una oportunidad para crecer y aportar valor.
                </p>
                
                <h6 class="text-success mb-3">Cuando no estoy programando...</h6>
                <p class="mb-0">
                  Me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto, 
                  y mantenerme al día con las últimas tendencias en desarrollo web. También 
                  disfruto de la fotografía y los viajes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Backdrop para modales -->
    <div 
      v-if="showCurriculumModal || showAboutModal" 
      class="modal-backdrop fade show"
    ></div>
  </footer>
</template>

<script>
import { inject, ref } from 'vue'

/**
 * Componente Footer
 * 
 * Pie de página completo del portfolio que incluye:
 * - Información personal y enlaces de contacto
 * - Tres modales funcionales para diferentes acciones
 * - Botón flotante de contacto siempre visible
 * - Enlaces a redes sociales con efectos hover
 * - Navegación rápida a secciones del portfolio
 * - Copyright y información legal
 * 
 * Modales incluidos:
 * 1. Modal CV: Permite descargar el currículum en español o inglés
 * 2. Modal "Más sobre mí": Información personal adicional y filosofía de trabajo
 * 3. Email directo: Enlace mailto para contacto inmediato
 * 
 * Características técnicas:
 * - Diseño responsive que se adapta a todos los dispositivos
 * - Integración completa con el sistema de modo oscuro/claro
 * - Efectos hover y transiciones suaves
 * - Botón flotante con posición fija
 * - Modales de Bootstrap con contenido dinámico
 */
export default {
  name: 'Footer',
  setup() {
    const showCurriculumModal = ref(false)
    const showAboutModal = ref(false)
    
    const sendEmail = () => {
      window.location.href = 'mailto:management@yerayzafra.com?subject=Contacto desde Portfolio&body=Hola Yeray,%0D%0A%0D%0AMe gustaría ponerme en contacto contigo...'
    }
    
    return {
      showCurriculumModal,
      showAboutModal,
      sendEmail
    }
  }
}
</script>

<style scoped>
.contact-float {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.contact-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.modal {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.social-links a {
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
}
</style>
