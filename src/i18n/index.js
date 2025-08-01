/**
 * Configuración de Vue I18n para internacionalización
 * 
 * Idiomas soportados:
 * - 🇪🇸 Español (es) - Idioma por defecto
 * - 🇬🇧 Inglés (en) - Idioma de respaldo
 * 
 * Características:
 * - Composition API habilitada (legacy: false)
 * - Fallback automático a inglés si falta traducción
 * - Traducciones organizadas por secciones (navbar, header, skills, etc.)
 * - Soporte para interpolación de variables
 * 
 * Uso en componentes:
 * ```javascript
 * import { useI18n } from 'vue-i18n'
 * const { t, locale } = useI18n()
 * 
 * // En template: {{ $t('header.greeting') }}
 * // En script: t('header.greeting')
 * ```
 */

import { createI18n } from 'vue-i18n'

// Importar archivos de traducción
import es from './locales/es.json' // Traducciones en español
import en from './locales/en.json' // Traducciones en inglés

/**
 * Objeto de mensajes organizados por idioma
 * Cada idioma contiene las mismas claves para consistencia
 */
const messages = {
  es, // Español - Idioma principal del portfolio
  en  // English - Para audiencia internacional
}

/**
 * Instancia de Vue I18n configurada
 * 
 * Configuración:
 * - legacy: false -> Habilita Composition API
 * - locale: 'es' -> Idioma por defecto (español)
 * - fallbackLocale: 'en' -> Si falta traducción, usar inglés
 * - messages -> Objeto con todas las traducciones
 */
const i18n = createI18n({
  legacy: false,        // Usar Composition API en lugar de Options API
  locale: 'es',         // Idioma por defecto: español
  fallbackLocale: 'en', // Idioma de respaldo: inglés
  messages              // Traducciones importadas
})

export default i18n