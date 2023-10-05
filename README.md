# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## To run docker instance for production build

### 1. Build the image using Dockerfile in the root folder.

in the root folder

`docker build . --tag "my-portfolio-production-build"`

here "my-portfolio-production-build" is the tag for your image, you can set it to anything you want.

and "." points to the folder containing your <mark>Dockerfile</mark> (which is in root folder here).

### 2. Run the built image.

`docker run "my-portfolio-production-build" -p 8080:8080`

here "my-portfolio-production-build" is the tag you specified during building, to identify and run your image, please use whatever tag you used during building.

and "-p" tag defines which port to expose to and map in localhost of the host (here port 8080 od container is exposed, where nginx is serving our static app, and it to mapped to our system's port 8080, you can change it to whatever, without need to change your Dockerfile)

That's it, now open http://localhost:\<your-mapped-port>, which is by default, [http://localhost:8080](http://localhost:8080)
