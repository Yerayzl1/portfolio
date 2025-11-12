<template>
  <!-- 
    Componente AboutMe: Sección "Sobre mí" del portfolio
    - Información personal predefinida
    - Imagen de perfil que actúa como botón de contacto
    - Secciones de especialidades e intereses
    - Botones de acción (CV y LinkedIn)
    - Efectos hover en la imagen con overlay
    - Diseño responsive y adaptable al modo oscuro
  -->
  <section id="about" class="py-5">
    <div class="container">
      <h2 class="mb-5 text-center">{{ $t('aboutMe.greeting') }} <span class="highlight-name">Yeray Zafra</span></h2>
      
      <div class="row align-items-center">
        <!-- Imagen de perfil con efecto hover y overlay -->
        <div class="col-lg-4 text-center mb-4 mb-lg-0">
          <div class="profile-image-container position-relative">
            <img 
              src="../../public/fotoyeray.png" 
              alt="Yeray Zafra" 
              class="profile-image img-fluid rounded-circle"
              @click="openContactModal"
            />
            <div class="contact-overlay">
              <i class="bi bi-envelope-fill"></i>
              <span>{{ $t('aboutMe.contactMe') }}</span>
            </div>
          </div>
        </div>
        
        <!-- Contenido principal con información personal -->
        <div class="col-lg-8">
          <div class="about-content">
            <p class="lead mb-4">
              {{ $t('aboutMe.description1') }}
            </p>
            
            <p class="mb-4">
              {{ $t('aboutMe.description2') }}
            </p>
            
            <!-- Lista de especialidades técnicas -->
            <div class="row">
              <div class="col-md-6 mb-3">
                <h5 class="text-success"><i class="bi bi-code-slash me-2"></i>{{ $t('aboutMe.specialties.title') }}</h5>
                <ul class="list-unstyled">
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.specialties.frontend') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.specialties.backend') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.specialties.apis') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.specialties.databases') }}</li>
                </ul>
              </div>
              
              <!-- Lista de intereses profesionales -->
              <div class="col-md-6 mb-3">
                <h5 class="text-success"><i class="bi bi-heart-fill me-2"></i>{{ $t('aboutMe.interests.title') }}</h5>
                <ul class="list-unstyled">
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.interests.newTech') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.interests.openSource') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.interests.agile') }}</li>
                  <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('aboutMe.interests.optimization') }}</li>
                </ul>
              </div>
            </div>
            
            <!-- Botones de acción principales -->
            <div class="mt-4">
              <a href="#" @click="downloadCV" class="btn btn-success btn-lg me-3">
                <i class="bi bi-download me-2"></i>{{ $t('aboutMe.downloadCV') }}
              </a>
              <a href="https://www.linkedin.com/in/yerayzafra/" target="_blank" class="btn btn-linkedin btn-lg">
                <i class="bi bi-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

/**
 * Componente AboutMe
 * 
 * Sección "Sobre mí" del portfolio que incluye:
 * - Información personal predefinida del desarrollador
 * - Imagen de perfil interactiva que actúa como botón de contacto
 * - Listas de especialidades técnicas e intereses profesionales
 * - Botones de acción para descargar CV y acceder a LinkedIn
 * - Efectos hover en la imagen con overlay animado
 * - Diseño responsive que se adapta a diferentes pantallas
 * 
 * Características visuales:
 * - Imagen con efecto hover y overlay
 * - Listas con iconos personalizados
 * - Botones con efectos de transición
 * - Adaptación completa al modo oscuro/claro
 * 
 * Funcionalidades:
 * - Imagen clickeable para contacto
 * - Enlaces a recursos externos (CV, LinkedIn)
 * - Información estructurada y fácil de leer
 */
export default {
  name: 'AboutMe',
  setup() {
    const { locale } = useI18n()
    
    return {
      locale
    }
  },
  methods: {
    openContactModal() {
      // Por ahora, redirigir a mailto
      window.location.href = 'mailto:management@yerayzafra.com?subject=Contacto desde Portfolio'
    },
    downloadCV() {
      // Descargar CV según el idioma seleccionado
      const language = this.locale
      const cvUrl = language === 'es' ? '/cv-yeray-zafra-es.pdf' : '/cv-yeray-zafra-en.pdf'
      
      // Crear un enlace temporal para descargar
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = `CV-Yeray-Zafra-${language.toUpperCase()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style scoped>
.profile-image-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.profile-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  transition: all 0.3s ease;
  border: 4px solid #28a745;
}

.contact-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(40, 167, 69, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
}

.contact-overlay i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.profile-image-container:hover .profile-image {
  transform: scale(1.05);
  filter: brightness(0.8);
}

.profile-image-container:hover .contact-overlay {
  opacity: 1;
}

.about-content {
  padding-left: 2rem;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-linkedin {
  background-color: #0077B5;
  border-color: #0077B5;
  color: white;
}

.btn-linkedin:hover {
  background-color: #005885;
  border-color: #005885;
  color: white;
}

.highlight-name {
  background: linear-gradient(45deg, #28a745, #20c997);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  font-size: 1.1em;
}

@media (max-width: 991px) {
  .about-content {
    padding-left: 0;
    text-align: center;
  }
  
  .profile-image {
    width: 200px;
    height: 200px;
  }
}
</style>
