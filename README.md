# Angular Portfolio

This project is a modern, responsive portfolio web application built with Angular. It showcases personal information, skills, projects, and contact functionality, with a focus on clean design, accessibility, and maintainability. The project uses Tailwind CSS for styling (with dark/light theme support), SCSS for custom styles, and a .NET backend API for dynamic data.

## ✨ Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Dark/Light Theme Switch:** Toggle between dark and light modes using Tailwind CSS.
- **Dynamic Data:** Skills, projects, and other sections are fetched from a secure .NET API.
- **Contact Form:** Users can send messages via a validated form (with EmailJS integration).
- **Sectioned Layout:** Includes hero, about, skills, services, qualifications, projects, and contact sections.
- **SCSS Architecture:** Organized SCSS with variables, mixins, and responsive breakpoints.
- **ng-icons Integration:** Uses ng-icons for scalable, customizable icons.
- **Error Handling:** Graceful handling of API timeouts and errors with user feedback.
- **Accessibility:** Semantic HTML and ARIA-friendly components.

## 📁 Folder Structure

```
src/
│
├── app/
│   ├── core/
│   │   ├── interfaces/         # TypeScript interfaces (e.g., ISkills, IProjects)
│   │   └── services/           # Angular services for API communication
│   ├── layouts/
│   │   ├── header/             # Header component (theme switch, navigation)
│   │   └── footer/             # Footer component
│   ├── sections/
│   │   ├── about-section/      # About section
│   │   ├── contact-section/    # Contact form and logic
│   │   ├── hero-section/       # Hero/banner section
│   │   ├── projects-section/   # Projects showcase
│   │   ├── qualifications/     # Education & experience
│   │   ├── services-section/   # Services offered
│   │   └── skills-section/     # Skills display (frontend, backend, etc.)
│   └── app.component.*         # Main app shell
│
├── assets/
│   └── scss/
│       ├── global/             # Global SCSS (reset, base, helpers)
│       ├── variables/          # SCSS variables (colors, font sizes, z-index, etc.)
│       └── media.scss          # Media query breakpoints
│
├── environments/
│   └── environment.ts          # Environment variables (API URLs, keys)
│
├── styles.scss                 # Global styles entry (imports Tailwind and SCSS)
├── styles.css                  # (If using Tailwind in plain CSS)
└── index.html                  # Main HTML entry point
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm start
   ```

3. **Configure environment variables:**
   - Edit `src/environments/environment.ts` with your API endpoints and EmailJS keys.

4. **Backend API:**
   - The project expects a .NET backend with CORS enabled and endpoints for `/skills`, `/projects`, etc.

## Search and Analytics

- The production site is configured as `https://ihab-mahmoud.vercel.app/`.
- `robots.txt` and `sitemap.xml` are copied to the deployment root during `ng build`.
- Submit `https://ihab-mahmoud.vercel.app/sitemap.xml` in Google Search Console after deployment.
- Add the GA4 measurement ID (`G-XXXXXXXXXX`) to `googleAnalyticsId` in `src/environments/environment.ts` before deploying. The app then records meaningful link and button clicks.
- Search Console reports organic search performance after the property is verified; it does not collect arbitrary application events.

## 🛠️ Customization

- **Theme:** Easily customize colors and fonts in `assets/scss/variables/`.
- **Sections:** Add or remove sections in `app/sections/`.
- **API:** Update service files in `app/core/services/` to match your backend.

## 📦 Dependencies

- Angular
- Tailwind CSS
- SCSS
- ng-icons
- EmailJS (for contact form)
- .NET (backend API)

## 📝 License

This project is licensed under the MIT License.

---

> **Tip:** For sensitive data, ensure `environment.ts` is excluded from version control using `.gitignore`.
