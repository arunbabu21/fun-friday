# FunFriday

A fun interactive Angular application with a home page and 5 game pages.

## Project Features

- **Home Page**: Landing page with 5 navigation buttons
- **Game Pages**: 5 individual game pages (Game 1, Game 2, Game 3, Game 4, Game 5)
- **Navigation**: Easy navigation between home and game pages with back buttons
- **Responsive Design**: Beautiful gradient background and styled buttons

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Home component with navigation buttons
│   │   ├── game1/         # Game 1 component
│   │   ├── game2/         # Game 2 component
│   │   ├── game3/         # Game 3 component
│   │   ├── game4/         # Game 4 component
│   │   └── game5/         # Game 5 component
│   ├── app.routes.ts      # Application routing configuration
│   ├── app.config.ts      # Application configuration
│   ├── app.ts             # Root component
│   └── app.html           # Root template
└── main.ts               # Application entry point
```

## Development Server

To start the development server, run:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes.

## Building

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Getting Started

1. Click on any game button on the home page to navigate to that game
2. Use the "← Back to Home" button on any game page to return to the home page
3. Explore and enjoy the Fun Friday experience!

## Angular Version

This project was generated with Angular CLI version 20.1.3 and uses Angular 20.

## Further Help

For more information on the Angular CLI, use:

```bash
ng help
```

or visit the [Angular CLI Documentation](https://angular.dev/cli).


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
