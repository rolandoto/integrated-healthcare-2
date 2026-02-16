# Integrated Health Care Group Website

Sitio web completo desarrollado con Next.js 16, TypeScript y Tailwind CSS para Integrated Health Care Group - una práctica de psiquiatría en Miami-Dade County.

## 🚀 Características

- ⚡ Next.js 16 con App Router
- 🎨 Tailwind CSS para estilos
- 📱 Diseño totalmente responsive
- ♿ Accesible y optimizado para SEO
- 🎭 Animaciones suaves con CSS
- 📧 Formularios de contacto integrados
- 🔒 Páginas de privacidad y términos legales
- 📱 Soporte para telemedicina

## 📋 Páginas Incluidas

1. **Home** - Página principal con hero section y secciones informativas
2. **Our Team** - Información sobre el equipo médico
3. **Services** - Servicios de salud mental ofrecidos
4. **TeleMedicine** - Información sobre servicios de telemedicina
5. **Insurance** - Planes de seguro aceptados
6. **Locations** - Ubicaciones de las oficinas
7. **Blog** - Artículos y recursos de salud mental
8. **Contact** - Formulario de contacto y información
9. **Privacy Policy** - Política de privacidad HIPAA
10. **Terms & Conditions** - Términos y condiciones

## 🛠️ Instalación

### Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

### Pasos de Instalación

1. Navega al directorio del proyecto:
```bash
cd integrated-healthcare
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 🏗️ Construir para Producción

```bash
npm run build
npm run start
```

## 📁 Estructura del Proyecto

```
integrated-healthcare/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Componente de navegación
│   │   └── Footer.tsx       # Componente de pie de página
│   ├── page.tsx             # Página principal
│   ├── our-team/
│   ├── services/
│   ├── telemedicine/
│   ├── insurance/
│   ├── locations/
│   ├── blog/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms-conditions/
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Estilos globales
├── public/
│   └── images/              # Imágenes estáticas
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Tonos de azul */ },
  accent: { /* Tonos de rojo */ },
}
```

### Tipografía

Las fuentes están configuradas en `app/layout.tsx` usando Google Fonts:
- Inter (sans-serif)
- Playfair Display (serif para títulos)

### Imágenes

Coloca las imágenes en la carpeta `public/images/` y actualiza las referencias en los componentes.

## 📞 Información de Contacto (en el sitio)

- **Teléfono Principal:** (786) 536-1701
- **WhatsApp:** (786) 893-4315
- **Fax:** (305) 847-2447
- **Email:** psychiatry@integratedhealthcare.group

## 🔒 Cumplimiento

Este sitio web está diseñado teniendo en cuenta:
- Cumplimiento HIPAA
- Políticas de privacidad de SMS
- Accesibilidad web (WCAG)
- Mejores prácticas de SEO

## 📝 Licencia

Copyright © 2023 Integrated Healthcare Services Group - Todos los derechos reservados.

## 🤝 Soporte

Para preguntas sobre el sitio web o para reportar problemas, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ usando Next.js 16
