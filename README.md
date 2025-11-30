# MobilePrimengAdapter

A modular Angular project optimized for mobile, featuring custom Primeng integrations and a scalable architecture.

## Features
- **Mobile-first UI**: Touch-friendly, adaptive design for small screens.
- **Custom Primeng Components**: Extended and styled Primeng UI elements for mobile use.
- **Modular Architecture**: Clear separation of core services, shared components, feature modules, and layout.
- **Reusable Components**: Shared library for buttons, modals, loaders, and more.
- **Singleton Services**: Centralized authentication, API, and storage services.
- **Guards & Interceptors**: Route protection and HTTP request/response handling.
- **Lazy-loaded Features**: Dashboard, products, and authentication modules for performance.
- **Global Styles & Themes**: SCSS-based theming and utility styles.
- **Internationalization**: Ready for multiple languages via `assets/i18n`.

## File Structure
```
src/
├── app/
│   ├── core/                          # Singleton services, guards, interceptors
│   ├── shared/                        # Reusable components, directives, pipes
│   ├── features/                      # Feature modules (lazy-loaded)
│   ├── layout/                        # Layout components
│   ├── app.component.ts               # Root component
│   ├── app.config.ts                  # App configuration
│   └── app.routes.ts                  # Main routing
├── assets/                            # Static assets (images, icons, fonts, i18n)
├── environments/                      # Environment configs
└── styles/                            # Global styles
```

## Usage
- **Select Component**: Allows users to choose options from a dropdown, optimized for mobile.
- **Stats Card**: Displays code snippets and tags, moved to dashboard for modularity.
- **Dialog & Modal**: Custom dialog components for mobile overlays.

## Development
- Start: `ng serve`
- Build: `ng build`
- Test: `ng test`
- Generate: `ng generate <schematic>`

## Important Behaviors
- All components use Angular Standalone API for easy import and modularity.
- Guards and interceptors are registered in `core` for global access.
- Feature modules are lazy-loaded for performance.
- Shared components are reusable across features.
- Theming and styles are managed via SCSS in `styles/`.
- Internationalization files are in `assets/i18n`.

## Contributing
1. Fork the repo and create a feature branch.
2. Follow the file structure for new modules/components.
3. Submit a pull request with a clear description.

## License
MIT

---

For more details, see the Angular CLI documentation and Primeng guides.
