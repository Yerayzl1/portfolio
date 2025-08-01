<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background: rgba(26, 26, 46, 0.95); backdrop-filter: blur(10px);">
    <div class="container d-flex align-items-center">
      <!-- Logo a la izquierda -->
      <a class="navbar-brand me-3" href="#" @click="scrollToTop" style="cursor: pointer;">
        <img src="https://via.placeholder.com/40x40/28a745/ffffff?text=YZ" alt="Logo Yeray Zafra" width="40" height="40" class="d-inline-block align-text-top rounded-circle">
      </a>

      <!-- Botón toggler para móvil -->
      <button
        class="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú centrado -->
      <div class="collapse navbar-collapse justify-content-center" id="navMenu">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item dropdown me-3">
            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarLanguageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="me-1" role="img" aria-label="Idioma actual">{{ currentLanguage.flag }}</span>
              <span class="d-none d-md-inline">{{ currentLanguage.name }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarLanguageDropdown">
              <li>
                <a class="dropdown-item d-flex align-items-center" href="#" @click="changeLanguage('es')">
                  <span role="img" aria-label="Español">🇪🇸</span>
                  <span class="ms-2">Español</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="#" @click="changeLanguage('en')">
                  <span role="img" aria-label="English">🇬🇧</span>
                  <span class="ms-2">English</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- Enlaces de navegación -->
          <li class="nav-item"><a class="nav-link px-3 smooth-scroll text-light" href="#skills">{{ $t('navbar.skills') }}</a></li>
          <li class="nav-item"><a class="nav-link px-3 smooth-scroll text-light" href="#projects">{{ $t('navbar.projects') }}</a></li>
          <li class="nav-item"><a class="nav-link px-3 smooth-scroll text-light" href="#timeline">{{ $t('navbar.experience') }}</a></li>
          <li class="nav-item"><a class="nav-link px-3 smooth-scroll text-light" href="#about">{{ $t('navbar.about') }}</a></li>
        </ul>
      </div>

      <!-- Social a la derecha -->
      <div class="d-flex align-items-center ms-auto">
        <a href="https://linkedin.com/in/yerayzafra" target="_blank" class="me-3 text-light social-icon" title="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/yerayzafra" target="_blank" class="me-3 text-light social-icon" title="GitHub">
          <i class="bi bi-github"></i>
        </a>
        <a href="mailto:management@yerayzafra.com" class="text-light social-icon" title="Email">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navbar',
  setup() {
    const { locale, t } = useI18n()
    
    // Configuración de idiomas disponibles
    const languages = {
      es: { name: 'Español', flag: '🇪🇸' },
      en: { name: 'English', flag: '🇬🇧' }
    }
    
    // Idioma actual reactivo
    const currentLanguage = computed(() => {
      return languages[locale.value] || languages.es
    })
    
    /**
     * Cambia el idioma de la aplicación
     * @param {string} lang - Código del idioma (es, en)
     */
    const changeLanguage = (lang) => {
       if (languages[lang]) {
         locale.value = lang
         // Guardar preferencia en localStorage
         localStorage.setItem('preferred-language', lang)
       }
     }
     
     /**
      * Scroll suave al inicio de la página
      */
     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       })
     }
     
     return {
       currentLanguage,
       changeLanguage,
       scrollToTop,
       t
     }
   },
   mounted() {
     // Smooth scrolling para los enlaces de navegación
     document.querySelectorAll('.smooth-scroll').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
         e.preventDefault()
         const target = document.querySelector(this.getAttribute('href'))
         if (target) {
           target.scrollIntoView({
             behavior: 'smooth',
             block: 'start'
           })
         }
       })
     })
   }
}
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link {
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.nav-link:hover {
  color: #28a745 !important;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background-color: #28a745;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.navbar-brand img {
  transition: transform 0.3s ease;
  border: 2px solid #28a745;
}

.navbar-brand:hover img {
  transform: scale(1.1) rotate(5deg);
}

.social-icon {
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
}

.social-icon:hover {
  color: #28a745 !important;
  background-color: rgba(40, 167, 69, 0.1);
  transform: translateY(-2px) scale(1.1);
}

.dropdown-menu {
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.dropdown-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 2px;
}

.dropdown-item:hover {
  background-color: #28a745;
  transform: translateX(5px);
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    padding: 1rem 0;
  }
  
  .social-icon {
    margin: 0 10px;
  }
}
</style>
