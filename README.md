# Web Components SNCF 

This project is the web component implementation of the [SNCF design system](https://designmetier-bootstrap.sncf.fr/).  
It is built using [stencil](https://github.com/ionic-team/stencil).

If you read this documentation on Github, only the development branch is updated at the moment. We use a GitLab project for WCS development and releases.

## Packages

Here is the list of published npm packages and their goal :

- `wcs-core` contains the web components compiled with StencilJS [![npm version](https://badge.fury.io/js/wcs-core.svg)](https://badge.fury.io/js/wcs-core)
- `wcs-angular` angular integrations (value accessors, ...)[![npm version](https://badge.fury.io/js/wcs-angular.svg)](https://badge.fury.io/js/wcs-angular)
- `wcs-formly` Angular Formly integration for WCS [![npm version](https://badge.fury.io/js/wcs-formly.svg)](https://badge.fury.io/js/wcs-formly)

## Roadmap

This project is still under heavy development therefore it is not yet released. It is being used internally as of now.

We plan to release first version in **december 2020**.

## Known issues

Select and select options size behavior, especially with multiple select. As of now we recommend setting a fixed width on the select to prevent resizing from happening. A stale branch `fix-select-options-size` contains some work to fix it, but it is abandonned for now.

## Documentation

There is documentation available at https://sncf.gitlab.io/wcs/master/. It is only available for the develop branch though as the project remains unreleased.

For a specific component you can also look under src/components/<the-component-you-want-the-doc-for>/README.md.
    
### Example usage

There is an example projects under `example` folder for angular.

Step to start the example project :
```shell
# wcs-core build
npm install
npm run build
# angular build (use --watch option to watch files)
cd angular
npm install
ng build --project wcs-angular
ng build --project wcs-formly
# start example
cd ../example
npm install
ng serve
```

If you have any question, don't hesitate to fill an issue !

### Install in your project

StencilJS offers many integrations with different JS frameworks.

You can refer to their official documentation to add WCS to your project : https://stenciljs.com/docs/overview

After added wcs dependencies, you must add Avenir and icons font faces like so :

```css
@font-face {
    font-family: Avenir;
    src: url("your-custom-path/avenir-lighter.woff");
    font-weight: 300;
}

@font-face {
    font-family: Avenir;
    src: url("your-custom-path/avenir-book.woff");
    font-weight: 400;
}

@font-face {
    font-family: Avenir;
    src: url("your-custom-path/avenir-medium.woff");
    font-weight: 500;
}

@font-face {
    font-family: Avenir;
    src: url("your-custom-path/avenir-black.woff");
    font-weight: 900;
}
@font-face {
    font-family: "icons";
    src: url("your-custom-path/icons.eot?#iefix") format("embedded-opentype"),
    url("your-custom-path/icons.woff2") format("woff2"),
    url("your-custom-path/icons.woff") format("woff"),
    url("your-custom-path/icons.ttf") format("truetype"),
    url("your-custom-path/icons.svg#icons") format("svg");
}
```

#### Example with Angular

Install `wcs-core` and `wcs-angular` packages.

```
npm install wcs-core wcs-angular
```

Include wcs-core refering to this documentation : https://stenciljs.com/docs/angular

Add the `WcsAngular` module to your App module.

```ts
@NgModule({
  ...
  imports: [
    ...
    WcsAngularModule // add the module
  ],
  ...
})
export class AppModule { }
```

Import the wcs stylesheet (for example in the styles.scss), if you don't use scss, you can include it in the `angular.json` file (in the architect build config, key: `styles`)

```scss
@import "~wcs-core/dist/wcs/wcs.css";
```

We provide a base stylesheet in [/doc/base.scss](./doc/base.scss)

You're ready! (Don't forget to add font-faces 😉)

## Contributing

### Bug, Feature request, etc...

Don't hesitate to fill in an issue and we'll discuss about it. If you want to contribute code, please fill in an issue first so we can synchronize.

### Dev requirements

- Minimum node version : 10.16

### Starting the project

```sh
git clone https://github.com/SNCFdevelopers/wcs.git
cd wcs
npm install
# To see all components
npm start
# To see only the component you're working on
npm start -- --filter select
```

### Test

The project uses stencil built-in facility for testing : https://stenciljs.com/docs/testing-overview.

We encourage doing TDD on functional components. To launch the tests suite simply launch :

```sh
npm run test:watch
# Or if you simply want to run them once
npm test
```

### Doing a release

Don't forget to update the changelog.

```sh
# Make sure you're on develop branch
git checkout develop
# Pull latest changes
git pull
# Go on master
git checkout master
# Merge latest changes
git merge develop
# Do the release, we use semantic versioning for choosing release number
npm run update-version -- --version <major|minor|patch>
# Go on develop
git checkout develop
# Merge the release
git merge master
# Push the changes
git push
```
