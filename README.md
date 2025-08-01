# 🚀 Portfolio Web - Yeray Zafra

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📋 Descripción

Portfolio web personal moderno y responsive desarrollado con **Vue 3** (Composition API), **Bootstrap 5.3** y **Vite**. Presenta de manera profesional y atractiva las habilidades, proyectos, experiencia y información personal de Yeray Zafra, desarrollador Full Stack.

### ✨ Características Destacadas
- 🎨 **Diseño moderno** con animaciones CSS y JavaScript
- 📱 **100% Responsive** - Optimizado para todos los dispositivos
- 🌙 **Modo oscuro/claro** con persistencia de preferencias
- ⚡ **Alto rendimiento** con Vite y optimizaciones avanzadas
- 🌐 **Internacionalización** (i18n) - Español e Inglés
- 🎬 **Animaciones avanzadas** con IntersectionObserver API
- 📊 **Métricas de rendimiento** optimizadas (Core Web Vitals)

## 🚀 Características Principales

### 🎨 Diseño y UX
- **Diseño responsive** que se adapta a todos los dispositivos
- **Modo oscuro/claro** con toggle dinámico
- **Animaciones suaves** y efectos de transición
- **Scroll suave** entre secciones
- **Scrollbar personalizada** con colores del tema

### 🧩 Componentes Principales

#### 1. **Navbar** (`src/components/Navbar.vue`)
- Navegación sticky que permanece visible al hacer scroll
- Enlaces de navegación con scroll suave a secciones específicas
- Toggle para cambiar entre modo oscuro y claro
- Efectos hover en enlaces y logo
- Diseño responsive con menú hamburguesa en móviles

#### 2. **Header** (`src/components/Header.vue`)
- **Efecto typewriter** para el texto de presentación
- **Contadores animados** para proyectos y años de experiencia
- Botones de acción con efectos hover
- Presentación personal dinámica y atractiva

#### 3. **Skills** (`src/components/Skills.vue`)
- **Barras de progreso animadas** para cada habilidad técnica
- **Animación activada por scroll** usando IntersectionObserver
- Incremento gradual de porcentajes para efecto visual
- Botón de contacto integrado
- Organización por categorías de tecnologías

#### 4. **Projects** (`src/components/Projects.vue`)
- **Sistema de filtrado por tags** para categorizar proyectos
- **Videos embebidos de Vimeo** en cada tarjeta de proyecto
- **Efectos hover** en tarjetas y videos
- Botón "Ver más proyectos" para expandir la vista
- Diseño de tarjetas responsive y moderno

#### 5. **Timeline** (`src/components/Timeline.vue`)
- **Línea de tiempo vertical animada** para experiencia y estudios
- **Animaciones activadas por scroll** para cada elemento
- Diseño responsive que se adapta a diferentes pantallas
- Integración completa con el sistema de modo oscuro/claro
- Separación clara entre experiencia laboral y estudios

#### 6. **AboutMe** (`src/components/AboutMe.vue`)
- Información personal predefinida y especialidades
- **Imagen interactiva** que actúa como botón de contacto
- Secciones de especialidades e intereses
- Botones para descargar CV y acceder a LinkedIn
- Efectos hover y overlays en la imagen

#### 7. **Footer** (`src/components/Footer.vue`)
- **Tres modales funcionales**:
  - Modal de descarga de CV (español/inglés)
  - Modal "Más sobre mí" con información personal
  - Enlace directo de email
- **Botón flotante de contacto** siempre visible
- Enlaces a redes sociales con efectos hover
- Navegación rápida a secciones del portfolio
- Copyright y información legal

## 🛠️ Stack Tecnológico

### 🎯 Frontend Core
```javascript
// Vue 3 con Composition API
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Ejemplo de componente reactivo
const setup = () => {
  const darkMode = ref(false)
  const toggleTheme = () => {
    darkMode.value = !darkMode.value
    document.body.classList.toggle('dark-mode', darkMode.value)
  }
  return { darkMode, toggleTheme }
}
```

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Vue 3** | `^3.3.0` | Framework JavaScript progresivo con Composition API |
| **Bootstrap** | `5.3.3` | Framework CSS responsive y componentes UI |
| **Vite** | `^4.4.0` | Build tool ultrarrápido con HMR |
| **Vue I18n** | `^9.2.0` | Internacionalización (ES/EN) |
| **Bootstrap Icons** | `^1.10.0` | Iconografía SVG optimizada |

### 🔧 Características Técnicas Avanzadas
- 🏗️ **Arquitectura modular** - Componentes reutilizables y mantenibles
- ⚡ **Reactividad optimizada** - Vue 3 Composition API con `ref()` y `computed()`
- 🎭 **Animaciones performantes** - IntersectionObserver + RequestAnimationFrame
- 🎨 **CSS moderno** - Variables CSS, Grid, Flexbox y animaciones hardware-accelerated
- ♿ **Accesibilidad** - Semantic HTML5, ARIA labels y navegación por teclado
- 🚀 **Optimización de rendimiento** - Code splitting, lazy loading y tree shaking

## 📁 Arquitectura del Proyecto

```bash
my-portfolio/
├── 📁 public/                    # Archivos estáticos
│   ├── 🖼️ vite.svg              # Logo de Vite
│   ├── 📄 cv-yeray-zafra-es.pdf # CV en español
│   └── 📄 cv-yeray-zafra-en.pdf # CV en inglés
├── 📁 src/                       # Código fuente
│   ├── 📁 components/            # Componentes Vue reutilizables
│   │   ├── 🧭 Navbar.vue         # Navegación sticky + toggle tema
│   │   ├── 🏠 Header.vue         # Hero section + typewriter effect
│   │   ├── 💻 Skills.vue         # Barras progreso animadas
│   │   ├── 🚀 Projects.vue       # Filtrado proyectos + videos
│   │   ├── 📈 Timeline.vue       # Línea tiempo experiencia
│   │   ├── 👤 AboutMe.vue        # Información personal
│   │   └── 📞 Footer.vue         # Contacto + modales
│   ├── 📁 i18n/                  # Internacionalización
│   │   ├── 📄 index.js           # Configuración i18n
│   │   └── 📁 locales/           # Traducciones
│   │       ├── 🇪🇸 es.json       # Español
│   │       └── 🇬🇧 en.json       # Inglés
│   ├── 📁 assets/                # Recursos estáticos
│   │   └── 🖼️ vue.svg            # Logo Vue
│   ├── 🎯 App.vue               # Componente raíz + estado global
│   ├── 🚀 main.js               # Entry point + configuración
│   └── 🎨 style.css             # Estilos globales + variables CSS
├── 📄 package.json              # Dependencias + scripts npm
├── ⚙️ vite.config.js            # Configuración Vite + optimizaciones
├── 📚 README.md                 # Documentación principal
├── 📖 DOCUMENTATION.md          # Documentación técnica detallada
└── 🔧 .gitignore               # Archivos ignorados por Git
```

### 🏗️ Patrón de Arquitectura

**Component-Based Architecture** con Vue 3 Composition API:

```javascript
// Flujo de datos unidireccional
App.vue (Estado Global)
├── darkMode: ref(false)          // Estado reactivo del tema
├── toggleTheme()                 // Método para cambiar tema
└── Props hacia componentes hijos
    ├── Navbar.vue    ← { darkMode }
    ├── Header.vue    ← { darkMode }
    ├── Skills.vue    ← { darkMode }
    └── ...resto de componentes
```

## 💻 Ejemplos de Código Técnico

### 🎬 Efecto Typewriter (Header.vue)
```javascript
/**
 * Implementación del efecto typewriter con Vue 3 Composition API
 * Escribe y borra palabras de forma cíclica con velocidades diferentes
 */
const typeWriter = () => {
  const currentWord = words.value[currentWordIndex]
  
  if (isDeleting) {
    // Modo borrado: elimina caracteres
    displayedText.value = currentWord.substring(0, currentCharIndex - 1)
    currentCharIndex--
  } else {
    // Modo escritura: añade caracteres
    displayedText.value = currentWord.substring(0, currentCharIndex + 1)
    currentCharIndex++
  }
  
  // Velocidades dinámicas: borrado más rápido que escritura
  let typeSpeed = isDeleting ? 50 : 100
  
  // Lógica de cambio de estado
  if (!isDeleting && currentCharIndex === currentWord.length) {
    typeSpeed = 2000 // Pausa al completar palabra
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentWordIndex = (currentWordIndex + 1) % words.value.length
  }
  
  setTimeout(typeWriter, typeSpeed)
}
```

### 📊 Animaciones con IntersectionObserver (Skills.vue)
```javascript
/**
 * Animación de barras de progreso activada por scroll
 * Utiliza IntersectionObserver para detectar visibilidad
 */
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animar cada skill con retraso escalonado
          skills.value.forEach((skill, index) => {
            animateSkill(skill, index * 200)
          })
          observer.unobserve(entry.target) // Optimización: desconectar
        }
      })
    },
    { threshold: 0.5 } // Activar al 50% de visibilidad
  )
  
  const skillsSection = document.getElementById('skills')
  if (skillsSection) observer.observe(skillsSection)
})

/**
 * Animación suave de contador con RequestAnimationFrame
 */
const animateSkill = (skill, delay = 0) => {
  setTimeout(() => {
    const duration = 2000
    const increment = skill.percent / (duration / 16) // 60fps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= skill.percent) {
        skill.animatedPercent = skill.percent
        clearInterval(timer)
      } else {
        skill.animatedPercent = Math.floor(current)
      }
    }, 16) // 60fps para animación suave
  }, delay)
}
```

### 🌙 Sistema de Temas (App.vue)
```javascript
/**
 * Gestión global del modo oscuro con persistencia
 */
import { ref, onMounted } from 'vue'

const setup = () => {
  const darkMode = ref(false)
  
  // Toggle con persistencia en localStorage
  const toggleTheme = () => {
    darkMode.value = !darkMode.value
    document.body.classList.toggle('dark-mode', darkMode.value)
    localStorage.setItem('darkMode', darkMode.value.toString())
  }
  
  // Cargar preferencia guardada
  onMounted(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme === 'true') {
      darkMode.value = true
      document.body.classList.add('dark-mode')
    }
  })
  
  return { darkMode, toggleTheme }
}
```

### 🎨 CSS Variables y Animaciones
```css
/* Variables CSS para temas dinámicos */
:root {
  --primary-color: #28a745;
  --dark-bg: #0a0e1a;
  --light-bg: #ffffff;
  --transition-speed: 0.3s;
  --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-dark: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Animación de cursor parpadeante */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor {
  animation: blink 1s infinite;
  color: var(--primary-color);
}

/* Efectos hover con transform y box-shadow */
.hover-effect {
  transition: all var(--transition-speed) ease;
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-dark);
}

/* Animación de entrada con fade-in */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

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
```

## 🚀 Instalación y Uso

### 📋 Prerrequisitos

| Herramienta | Versión Mínima | Recomendada | Verificación |
|-------------|----------------|-------------|-------------|
| **Node.js** | `16.0.0` | `18.x LTS` | `node --version` |
| **npm** | `8.0.0` | `9.x` | `npm --version` |
| **Git** | `2.20.0` | `Latest` | `git --version` |

### 🚀 Instalación Rápida

```bash
# 1. Clonar repositorio
git clone https://github.com/yerayzafra/my-portfolio.git
cd my-portfolio

# 2. Instalar dependencias (con cache limpio)
npm ci

# 3. Ejecutar en desarrollo
npm run dev

# ✅ Abrir http://localhost:5173
```

### 🛠️ Scripts Disponibles

```bash
# 🔥 Desarrollo con Hot Module Replacement
npm run dev
# → Servidor local en http://localhost:5173
# → Recarga automática al guardar cambios
# → Vue DevTools habilitado

# 🏗️ Build optimizado para producción
npm run build
# → Genera carpeta /dist con archivos minificados
# → Tree shaking automático
# → Code splitting por rutas

# 👀 Preview del build de producción
npm run preview
# → Servidor local del build en http://localhost:4173
# → Simula entorno de producción

# 🧹 Limpiar cache y node_modules
npm run clean
npm ci

# 📊 Analizar bundle size
npm run build -- --analyze
```

### 🔧 Configuración de Desarrollo

#### VS Code (Recomendado)
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "vue": "html"
  }
}
```

#### Extensiones Recomendadas
- **Vetur** o **Vue Language Features (Volar)**
- **Vue 3 Snippets**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**

### 🐛 Troubleshooting

#### Error: "Cannot resolve dependency"
```bash
# Limpiar cache de npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### Error: "Port 5173 already in use"
```bash
# Cambiar puerto en vite.config.js
export default defineConfig({
  server: {
    port: 3000
  }
})
```

#### Error: "Module not found"
```bash
# Verificar imports relativos
# ❌ import Component from './Component'
# ✅ import Component from './Component.vue'
```

## 🎯 Funcionalidades Destacadas

### 🌙 Sistema de Temas
- **Toggle dinámico** entre modo oscuro y claro
- **Persistencia visual** en todos los componentes
- **Transiciones suaves** entre temas
- **Colores optimizados** para cada modo

### 🎬 Animaciones y Efectos
- **Efecto typewriter** en el texto de presentación
- **Contadores animados** con incremento gradual
- **Barras de progreso** que se animan al entrar en viewport
- **Línea de tiempo** con animaciones por scroll
- **Efectos hover** en botones, enlaces y tarjetas

### 📱 Responsive Design
- **Diseño mobile-first** con Bootstrap
- **Breakpoints optimizados** para todos los dispositivos
- **Navegación adaptativa** con menú hamburguesa
- **Imágenes y videos responsive**

### 🔗 Interactividad
- **Navegación suave** entre secciones
- **Filtrado dinámico** de proyectos por categorías
- **Modales funcionales** para diferentes acciones
- **Botones de acción** con enlaces reales

## 📊 Secciones del Portfolio

### 🏠 Inicio (Header)
- Presentación personal con efecto typewriter
- Contadores de proyectos y experiencia
- Botones de acción principales

### 💻 Habilidades (Skills)
- **Frontend**: Vue.js, React, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Python, PHP
- **Bases de Datos**: MySQL, MongoDB
- **Herramientas**: Git, Docker, VS Code

### 🚀 Proyectos (Projects)
- Filtrado por categorías: Web, Mobile, Backend
- Videos demostrativos embebidos
- Descripciones detalladas de cada proyecto
- Enlaces a repositorios y demos

### 📈 Experiencia (Timeline)
- **Experiencia Laboral**:
  - Desarrollador Full Stack (2022-presente)
  - Desarrollador Frontend Junior (2021-2022)
- **Estudios**:
  - Desarrollo de aplicaciones web
  - Administración de sistemas

### 👤 Sobre Mí (AboutMe)
- Información personal y filosofía de trabajo
- Especialidades técnicas
- Intereses y hobbies
- Enlaces a CV y redes sociales

### 📞 Contacto (Footer)
- Múltiples formas de contacto
- Descarga de CV en diferentes idiomas
- Enlaces a redes sociales profesionales
- Información adicional en modales

## 🎨 Personalización

### Colores del Tema
- **Color principal**: Verde (#28a745)
- **Modo claro**: Fondo blanco, texto oscuro
- **Modo oscuro**: Fondo oscuro (#0a0e1a), texto claro

### Tipografía
- **Fuente principal**: Segoe UI, Tahoma, Geneva, Verdana
- **Tamaños responsivos** con Bootstrap utilities
- **Peso de fuente** optimizado para legibilidad

## 🔧 Configuración Avanzada

### Variables CSS Personalizadas
El proyecto utiliza variables CSS para facilitar la personalización:

```css
:root {
  --primary-color: #28a745;
  --dark-bg: #0a0e1a;
  --light-bg: #ffffff;
  --transition-speed: 0.3s;
}
```

### Configuración de Vite
Optimizaciones incluidas en `vite.config.js`:
- Alias de rutas
- Optimización de dependencias
- Configuración de build para producción

## 📈 Rendimiento

- **Lazy loading** de componentes
- **Optimización de imágenes** y videos
- **Minificación** de CSS y JavaScript
- **Tree shaking** para reducir el bundle size
- **Caching** optimizado para recursos estáticos

## 🌐 Compatibilidad

- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos móviles**: iOS Safari, Chrome Mobile
- **Resoluciones**: Desde 320px hasta 4K
- **Accesibilidad**: Cumple con estándares WCAG

## 👨‍💻 Guía de Desarrollo

### 🏗️ Arquitectura y Patrones

#### Estructura de Componentes Vue
```vue
<template>
  <!-- 
    Comentarios descriptivos del componente
    - Funcionalidad principal
    - Props esperadas
    - Eventos emitidos
  -->
  <section :class="darkMode ? 'dark-theme' : 'light-theme'">
    <!-- Contenido del componente -->
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Documentación JSDoc del componente
 * 
 * @component ComponentName
 * @description Descripción detallada del componente
 * @example
 * <ComponentName :darkMode="true" @event="handler" />
 */
export default {
  name: 'ComponentName',
  props: {
    darkMode: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  emits: ['event-name'],
  setup(props, { emit }) {
    // Lógica del componente con comentarios
    const { t } = useI18n()
    
    return {
      // Variables y métodos expuestos
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
```

#### Convenciones de Naming
```javascript
// ✅ Componentes: PascalCase
Navbar.vue, Header.vue, Skills.vue

// ✅ Props y variables: camelCase
const darkMode = ref(false)
const isVisible = computed(() => ...)

// ✅ Eventos: kebab-case
emit('toggle-theme')
emit('item-selected')

// ✅ CSS Classes: kebab-case
.nav-item, .btn-primary, .dark-theme

// ✅ Archivos: kebab-case
my-component.vue, user-profile.js
```

### 🎨 Estándares de CSS

```css
/* Variables CSS organizadas */
:root {
  /* Colores principales */
  --primary-color: #28a745;
  --secondary-color: #6c757d;
  
  /* Temas */
  --dark-bg: #0a0e1a;
  --light-bg: #ffffff;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Transiciones */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Clases utilitarias */
.fade-in {
  animation: fadeIn var(--transition-normal);
}

.hover-lift {
  transition: transform var(--transition-fast);
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

### 🔧 Configuración de Herramientas

#### ESLint + Prettier
```json
// .eslintrc.js
module.exports = {
  extends: [
    '@vue/eslint-config-prettier',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'no-console': 'warn'
  }
}
```

#### Git Hooks con Husky
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js,vue}": ["eslint --fix", "git add"],
    "*.{css,scss}": ["prettier --write", "git add"]
  }
}
```

### 📝 Convenciones de Commits

```bash
# Formato: tipo(scope): descripción

# Tipos permitidos:
feat:     # Nueva funcionalidad
fix:      # Corrección de bug
docs:     # Documentación
style:    # Cambios de formato (no afectan lógica)
refactor: # Refactorización de código
test:     # Añadir o modificar tests
chore:    # Tareas de mantenimiento

# Ejemplos:
feat(header): agregar efecto typewriter
fix(skills): corregir animación en móviles
docs(readme): actualizar guía de instalación
style(navbar): mejorar espaciado en botones
refactor(utils): extraer función de animación
```

### 🧪 Testing (Futuro)

```javascript
// Ejemplo de test unitario con Vitest
import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('should render typewriter effect', async () => {
    const wrapper = mount(Header, {
      props: { darkMode: false }
    })
    
    expect(wrapper.find('.typewriter').exists()).toBe(true)
  })
  
  it('should animate counters on mount', async () => {
    const wrapper = mount(Header)
    await wrapper.vm.$nextTick()
    
    expect(wrapper.vm.projectsCount).toBeGreaterThan(0)
  })
})
```

## 🤝 Contribución

### 🚀 Proceso de Contribución

```bash
# 1. Fork y clonar
git clone https://github.com/tu-usuario/my-portfolio.git
cd my-portfolio

# 2. Crear rama feature
git checkout -b feature/nueva-funcionalidad

# 3. Desarrollar con commits descriptivos
git add .
git commit -m "feat(component): agregar nueva funcionalidad"

# 4. Push y crear PR
git push origin feature/nueva-funcionalidad
# Crear Pull Request en GitHub
```

### ✅ Checklist antes de PR

- [ ] **Código**: Sigue las convenciones de naming
- [ ] **Comentarios**: JSDoc en funciones complejas
- [ ] **Responsive**: Funciona en móviles y desktop
- [ ] **Accesibilidad**: ARIA labels donde sea necesario
- [ ] **Performance**: No introduce memory leaks
- [ ] **i18n**: Textos externalizados a archivos de traducción
- [ ] **Testing**: Funcionalidad probada manualmente

### 🎯 Áreas de Mejora

- 🧪 **Testing**: Implementar tests unitarios con Vitest
- 📊 **Analytics**: Integrar Google Analytics o similar
- 🔍 **SEO**: Mejorar meta tags y structured data
- ♿ **A11y**: Auditoría completa de accesibilidad
- 🚀 **PWA**: Convertir en Progressive Web App
- 🌐 **CMS**: Integrar headless CMS para contenido dinámico

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Yeray Zafra** - Desarrollador Full Stack

- 📧 Email: [management@yerayzafra.com](mailto:management@yerayzafra.com)
- 💼 LinkedIn: [Perfil de LinkedIn]
- 🐙 GitHub: [Perfil de GitHub]
- 🌐 Portfolio: [URL del portfolio]

---

⭐ **¡No olvides dar una estrella al proyecto si te ha gustado!** ⭐
