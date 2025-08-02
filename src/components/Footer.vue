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
          <p class="mb-3">{{ $t('footer.description') }}</p>
          <div class="d-flex gap-3">
            <a href="https://linkedin.com/in/yerayzafra" target="_blank" class="text-success">
              <i class="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://github.com/Yerayzl1" target="_blank" class="text-success">
              <i class="bi bi-github fs-4"></i>
            </a>
            <a href="mailto:management@yerayzafra.com" class="text-success">
              <i class="bi bi-envelope fs-4"></i>
            </a>
          </div>
        </div>
        
        <!-- Sección de acciones y contacto -->
        <div class="col-lg-6">
          <h5 class="mb-3">{{ $t('footer.contact') }}</h5>
          <div class="d-flex flex-column gap-2">
            <!-- Botón para enviar email directo -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="sendEmail"
            >
              <i class="bi bi-envelope me-2"></i>{{ $t('footer.sendEmail') }}
            </button>
            <!-- Botón para modal de descarga de CV -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="showCurriculumModal = true"
            >
              <i class="bi bi-file-earmark-pdf me-2"></i>{{ $t('footer.downloadCV') }}
            </button>
            <!-- Botón para modal con información adicional -->
            <button 
              class="btn btn-outline-success text-start" 
              @click="showAboutModal = true"
            >
              <i class="bi bi-info-circle me-2"></i>{{ $t('footer.moreInfo') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Línea divisoria y copyright -->
      <hr class="my-4">
      
      <div class="text-center">
        <p class="mb-0">{{ $t('footer.copyright') }}</p>
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
            <h5 class="modal-title">
              <i class="bi bi-file-earmark-text me-2"></i>{{ $t('footer.cvModal.title') }}
            </h5>
            <div class="d-flex align-items-center gap-2">
              <button 
                  type="button" 
                  class="btn-close btn-close-white"
                  @click="showCurriculumModal = false"
                ></button>
            </div>
          </div>
          <div class="modal-body text-center">
            <div class="mb-4">
              <i class="bi bi-file-earmark-pdf text-success" style="font-size: 4rem;"></i>
            </div>
            <h6 class="mb-3">{{ $t('footer.cvModal.selectLanguage') }}</h6>
            <div class="d-flex justify-content-center gap-3">
              <a 
                href="#" 
                class="btn btn-success"
                download="CV_Yeray_Zafra_ES.pdf"
              >
                <span class="me-2">🇪🇸</span>{{ $t('footer.cvModal.spanish') }}
              </a>
              <a 
                href="#" 
                class="btn btn-outline-success"
                download="CV_Yeray_Zafra_EN.pdf"
              >
                <span class="me-2">🇬🇧</span>{{ $t('footer.cvModal.english') }}
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
            <h5 class="modal-title">
              <i class="bi bi-person-circle me-2"></i>{{ $t('footer.aboutModal.title') }}
            </h5>
            <div class="d-flex align-items-center gap-2">
              <button 
                type="button" 
                class="btn-close btn-close-white" 
                @click="showAboutModal = false"
              ></button>
            </div>
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
                <h6 class="text-success mb-3">{{ $t('footer.aboutModal.myStory') }}</h6>
                <p class="mb-3">
                  {{ $t('footer.aboutModal.storyText') }}
                </p>
                
                <h6 class="text-success mb-3">{{ $t('footer.aboutModal.workPhilosophy') }}</h6>
                <p class="mb-3">
                  {{ $t('footer.aboutModal.philosophyText') }}
                </p>
                
                <h6 class="text-success mb-3">{{ $t('footer.aboutModal.goals') }}</h6>
                <p class="mb-0">
                  {{ $t('footer.aboutModal.goalsText') }}
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
import { useI18n } from 'vue-i18n'
import { saveLocale } from '../i18n/index.js'

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
    const darkMode = inject('darkMode')
    const { t, locale } = useI18n()
    const showCurriculumModal = ref(false)
    const showAboutModal = ref(false)
    
    const downloadCV = (language) => {
      // Placeholder para descarga de CV en el idioma seleccionado
      const languageName = language === 'es' ? t('footer.cvModal.spanish') : t('footer.cvModal.english')
      alert(t('footer.cvModal.downloadAlert', { language: languageName }))
      
      // Cerrar modal
      showCurriculumModal.value = false
    }
    
    const sendEmail = () => {
      window.location.href = 'mailto:management@yerayzafra.com?subject=Contacto desde Portfolio&body=Hola Yeray,%0D%0A%0D%0AMe gustaría ponerme en contacto contigo...'
    }
    
    const changeLanguage = (newLocale) => {
      locale.value = newLocale
      saveLocale(newLocale)
    }
    
    return {
      showCurriculumModal,
      showAboutModal,
      sendEmail,
      downloadCV,
      changeLanguage,
      locale
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
