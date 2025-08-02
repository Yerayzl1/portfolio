<template>
  <!-- 
    Aplicación principal del portfolio
    - Estructura completa del sitio web
    - Diseño oscuro fijo
    - Organización de componentes en orden lógico
    - Navegación fluida entre secciones
  -->
  <div class="dark-theme min-vh-100">
    <!-- Barra de navegación superior -->
    <Navbar />
    
    <!-- Contenido principal del portfolio -->
    <main>
      <!-- Sección de presentación con efecto typewriter -->
      <Header />
      
      <!-- Sección de habilidades con barras animadas -->
      <Skills />
      
      <!-- Sección de proyectos con filtros y videos -->
      <Projects />
      
      <!-- Línea de tiempo de experiencia y estudios -->
      <Timeline />
      
      <!-- Información personal y especialidades -->
      <AboutMe />
    </main>
    
    <!-- Pie de página con modales y contacto -->
    <Footer />
    
    <!-- Botón flotante de WhatsApp -->
    <div class="whatsapp-float">
      <a 
        href="http://wa.me/34656835255?text=Hola" 
        target="_blank" 
        class="whatsapp-btn"
        :title="$t('whatsapp.contactMe')"
      >
        <i class="bi bi-whatsapp"></i>
        <span class="whatsapp-text">{{ $t('whatsapp.contactMe') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
// Importación de todos los componentes del portfolio
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'
import AboutMe from './components/AboutMe.vue'
import Footer from './components/Footer.vue'

/**
 * Componente principal de la aplicación (App.vue)
 * 
 * Este es el componente raíz que:
 * - Organiza la estructura completa del portfolio
 * - Aplica un diseño oscuro fijo
 * - Coordina la comunicación entre componentes
 * 
 * Estructura del portfolio:
 * 1. Navbar - Navegación superior
 * 2. Header - Presentación personal con efectos typewriter
 * 3. Skills - Habilidades técnicas con barras de progreso animadas
 * 4. Projects - Proyectos con filtros y videos embebidos
 * 5. Timeline - Experiencia laboral y estudios en línea de tiempo
 * 6. AboutMe - Información personal y especialidades
 * 7. Footer - Contacto, modales y enlaces sociales
 */
export default {
  name: 'App',
  components: { Navbar, Header, Skills, Projects, Timeline, AboutMe, Footer }
}
</script>

<style>
/* ===== ESTILOS GLOBALES ===== */
/* Configuración de scroll suave para toda la página */
html {
  scroll-behavior: smooth;
}

/* Configuración del cuerpo principal con tema oscuro fijo */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #f8f9fa;
  min-height: 100vh;
}

/* Personalización del scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2d3748;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

/* ===== ANIMACIONES GLOBALES ===== */
/* Animación fade-in para elementos que aparecen */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

/* Keyframes para la animación fade-in con movimiento vertical */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== TEMA OSCURO FIJO ===== */
.dark-theme {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #f8f9fa;
  min-height: 100vh;
}

.bg-light {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%) !important;
  color: #f8f9fa !important;
}

.text-dark {
  color: #f8f9fa !important;
}

.text-light {
  color: #f8f9fa !important;
}

.border {
  border-color: #4a5568 !important;
}

.card {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  border-color: #4a5568;
  color: #f8f9fa;
}

.btn-outline-secondary {
  border-color: #6c757d;
  color: #f8f9fa;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #f8f9fa;
}

.navbar.sticky {
  backdrop-filter: blur(10px);
}

.text-muted {
  color: #a0aec0 !important;
}

.bg-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.bg-success {
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%) !important;
}

.bg-dark {
  background-color: #0a0e1a !important;
}

/* ===== BOTÓN FLOTANTE DE WHATSAPP ===== */
/* Botón flotante de WhatsApp */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-btn {
  display: flex;
  align-items: center;
  background: #25D366;
  color: white;
  padding: 12px 16px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  font-weight: 500;
}

.whatsapp-btn:hover {
  background: #128C7E;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.whatsapp-btn i {
  font-size: 1.5rem;
  margin-right: 8px;
}

.whatsapp-text {
  font-size: 0.9rem;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .whatsapp-btn {
    padding: 10px 12px;
  }
  
  .whatsapp-text {
    display: none;
  }
  
  .whatsapp-btn i {
    margin-right: 0;
  }
}
</style>