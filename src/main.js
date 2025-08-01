/**
 * Punto de entrada principal de la aplicación Vue 3
 * 
 * Configuración:
 * - Vue 3 con Composition API
 * - Bootstrap 5.3.3 (importado via CDN en index.html)
 * - Bootstrap Icons para iconografía SVG
 * - Vue I18n para internacionalización (ES/EN)
 * 
 * Optimizaciones:
 * - Bootstrap CSS/JS via CDN para mejor caching
 * - Tree shaking automático con Vite
 * - Hot Module Replacement (HMR) en desarrollo
 */

import { createApp } from "vue"
import App from "./App.vue"

// Iconografía SVG optimizada de Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"

// Configuración de internacionalización (i18n)
import i18n from './i18n'

// Bootstrap 5.3.3 importado via CDN en index.html para:
// - Mejor rendimiento (caching de CDN)
// - Menor tamaño de bundle
// - Actualizaciones más fáciles

/**
 * Inicialización de la aplicación Vue
 * 
 * Plugins registrados:
 * - i18n: Soporte multiidioma (español/inglés)
 * 
 * El componente se monta en el elemento #app del DOM
 */
createApp(App)
  .use(i18n) // Habilitar internacionalización
  .mount("#app")
