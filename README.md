## Solved!

Take a look here https://finch-assignment-frontend.vercel.app/

## What's inside?

- [ReactJS](https://reactjs.org) The Framework of choice
- [Vite](https://vitejs.dev) for bundling the code
- [TypeScript](https://www.typescriptlang.org) for type checking
- [React-query](https://react-query.tanstack.com/) for server state and api fetching
- [Emotion](https://emotion.sh/docs/introduction) for styling
- [NextUI](https://nextui.org/) as a component library
- [three.js](https://threejs.org/) and [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) to handle 3D
- [ESLint](https://eslint.org) for code analysis
- [Prettier](https://prettier.io) for code style

# Frontend Assignment

## Overview

An architect wants to change some of the attributes of a building, e.g. height, width and roof angle. In association with this they want to see the meta data of the buildings, e.g. name, height and floor area.

The sample setup is a project that loads building data from a file locally and renders it in a 3D canvas. Some other sample data is also rendered.

### Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 3D Rendering

The 3D rendering is handled with [three.js](https://threejs.org/) and a wrapper library [react-three-fiber](https://github.com/react-spring/react-three-fiber).

### Building Data API

NOTE: This api a prototype we used to evaluate JavaScript performance and data formats. We do not know of any bugs, but they may still exist. :)

To generate new building data, make a POST request to `https://cchvf3mkzi.execute-api.eu-west-1.amazonaws.com/dev/build`.

The payload should be a json array where each item is a dictionary with params corresponding to a building that index. The params for each building can contain `height`, `width` and `roofAngle`. If any parameter is missing or null, then default values is used by the api:

```
{
  "width": 10000,
  "height": 10000,
  "roofAngle": 30
}
```

The following example request will generate buildings where the first building uses the default value, the second is 30000 mm high, and the rest use the default values.

```
curl -X POST -d '[null,{"height":30000}]' https://cchvf3mkzi.execute-api.eu-west-1.amazonaws.com/dev/build
```

The project already contains a local file with pre-generated building data, [buildings.json](./data/buildings.json), which is loaded and rendered at startup in the demo application.

## Assignment

Do your changes in a fork of this repo, and then send a link to that repo when you are done.

### Main Tasks

- Generate building data with params via an endpoint (instead of loading locally).
- Add user controls to edit individual building height, and re-generate new building data.

### Bonus Tasks (if you have the time)

- Add display of building meta data, i.e. `name`, `height` and `area`.
- Add display of floor meta data, i.e. `level` and `area`, in HTML or 3D canvas.
- Add functionality to edit of building `width` and `roofAngle`.
