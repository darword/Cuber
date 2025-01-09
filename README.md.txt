Here's an English version of the README file for your GitHub repository:

---

# Web Cuber

Web Cuber is a 3D Rubik's Cube game built using TypeScript and Vue.js. This project allows users to interact with a digital Rubik's Cube directly in their browser, offering a realistic 3D experience with smooth and intuitive controls.

## Features

- **3D View**: Utilizes WebGL rendering technology to display a realistic 3D Rubik's Cube.
- **Interactive Controls**: Users can rotate the cube using mouse or touchpad gestures.
- **Real-time Rendering**: Cube rotations are displayed instantly with no delay.
- **Cross-browser Support**: Runs smoothly on all modern browsers without the need for additional plugins.

## Tech Stack

- **TypeScript**: Used for type-safe JavaScript, improving code maintainability and readability.
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Three.js**: A 3D graphics library to render the cube and handle 3D scenes.
- **WebGL**: Enables 3D rendering directly in the browser with hardware acceleration.

## Project Structure

```
/cuber
├── /resourse       # Static files
├── /src            # Source code
│   ├── /common     # Images and models
│   ├── /cuber		# Vue components
│   ├── /solver     # Vuex state management
│   ├── /vue	    # Page views
│   └── main.ts     # Project entry point
├── /dist           # Build output
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Installation and Running

### Clone the repository


### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run serve
```

After running the server, open your browser and visit [http://localhost:8080](http://localhost:8080) to start playing with the Rubik's Cube.

## Usage

1. Upon loading the page, you will see a 3D Rubik's Cube.
2. You can rotate the cube by clicking and dragging with your mouse (or use touchpad gestures on a mobile device).
3. Try solving the Rubik's Cube, or use the randomization algorithm to generate a new puzzle layout.
4. Any rotation will immediately reflect on the screen.

## Development and Contribution

If you want to contribute to the project, feel free to:

1. **Fork the repository** and clone it to your local machine.
2. Create a **Pull Request** with a description of your changes or bug fixes.
3. Open an **Issue** to report any bugs or suggest new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- Project Maintainer: Your Name
- Email: [your-email@example.com](mailto:your-email@example.com)

---

This README file provides an overview of your project, installation instructions, and guidelines for contributing. You can adjust the content to fit any specific needs or changes you make to the project.