

# Waterbird Population Estimates

The Waterbird Population Estimates (WPE) online database provides current and historic estimates, trends and 1% thresholds for over 800 waterbird species and 2300 biogeographic populations worldwide. This project has been developed by Wetlands International with the support of Environment Canada and the Ramsar Convention on Wetlands.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Before start you have to create an env file called `.env` follow `.env.sample`.
2. Install node dependencies:
```
yarn install
```

3. Init server for development:
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Icons management

This project makes use of [IcoMoon](https://icomoon.io/#docs) to manage its library of icons.

If you wish to add new icons, please follow these steps:

1. Open the IcoMoon app: https://icomoon.io/app/#/select
2. Click the “Manage project” (or “Untitled Project”) button of the header
3. Click “Import Project”
4. Select the file `components/icons/selection.json`
5. Click “Load” next to the “Untitled Project” that appeared
6. Drag your icons to the existing set
7. Select _all_ the icons and click “Generate SVG & More” at the bottom of the screen
8. Click the “Download” button

Once you have downloaded the folder, you need to update the `Icons` component:

1. Replace `components/icons/selection.json` by the new one
2. For each new icon, make sure to copy its `symbol` element from `symbol-defs.svg` and to add it to `components/icons/index.js`

In order to use any of the icons in a component, import the `Icon` component and pass the icon's name to the `name` prop. You can find the name of an icon by looking at the second part of their `symbol`'s `id`.

If you desire to update or remove any icon, please follow the same steps, but update or remove them in IcoMoon.


## Testing

Use ```yarn test``` to launch the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Deployment

This project is deployed through [ZEIT Now](https://zeit.co/docs).

Using a now.json configuration file, placed at the root of a project, you can provide a list of options that changes the default behavior of the ZEIT Now platform.

Every push to a branch will provide you with a preview deployment to view your changes.

When merging to develop, a staging deployment will be made.
When merging to master, a production deployment will be made.

### Env variables Management

Intall now ```yarn global add now``` and log into your account

To add your variables to production:

```now secrets add <secret-name> <secret-value>``` 

click here for [more info](https://zeit.co/docs/v2/build-step#adding-secrets)

Add the variables to your env build in your now.json file, in this format:

```VARIABLE_NAME=@variable_value```  (important: the value should always be prefixed with @)

Example:

```{
  "version": 2,
  "name": "waterbird-population",
  "build": {
    "env": {
      "NODE_PATH": "@waterbird-population-node_path",
      "SASS_PATH": "@waterbird-population-sass_path",
      "REACT_APP_MAPBOX_ACCESS_TOKEN": "@waterbird-population-react_app_mapbox_access_token",
      "REACT_APP_TRANSIFEX_API_KEY": "@waterbird-population-react_app_transifex_api_key"
    }
  },
  "env": {
    "NODE_PATH": "@waterbird-population-node_path",
    "SASS_PATH": "@waterbird-population-sass_path",
    "REACT_APP_MAPBOX_ACCESS_TOKEN": "@waterbird-population-react_app_mapbox_access_token"
  }
}```
