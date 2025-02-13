# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

for new features.

### Changed

for changes in existing functionality.

### Deprecated

for soon-to-be removed features.

### Removed

for now removed features.

### Fixed

for any bug fixes.

### Security

in case of vulnerabilities.

## [2.12.1] - 2022-04-13

### Added

- **wcs-angular**: Add missing proxies for WcsAccordion, WcsAccordionContent, WcsAccordionHeader, WcsAccordionPanel,
  WcsDropdownDivider, WcsDropdownHeader and WcsGridCustomCell web components

### Changed

- **ci**: Parallelization of publish jobs for npm to be able to restart them in case of error
- **ci**: Build and publish angular libraries with production configuration

## [2.12.0] - 2022-04-12

### Added

- **input**: Add support for file type

### Changed

- **com-nav**: Add mobile styles for communication nav bar.
- **core**: Remove tslint and migrate to eslint

## [2.11.0] - 2022-03-22

### Added

- **accordion**: Add components related to accordions (`wcs-accordion`, `wcs-accordion-panel`, `wcs-accordion-header`
  , `wcs-accordion-content`)
- **tooltip**: Add the "content" property to make integration easier with non-immutable APIs
- **modal**: Add `hideActions` property which is false by default (useful when you want to hide the action slot and the
  associated margin)
- **button**: Add css variables `--wcs-button-min-width` and `--wcs-button-min-height` that can be used to specify any
  width or height for buttons
- **modal**: Add css variable `--wcs-modal-max-height` that can be used to specify a max-height for the modal (default
  is 80%)

### Changed

- **versioning**: migrate Angular dependencies to superior or equals selector and fix peerDependencies of angular-formly
  package

### Fixed

- **modal**: Use `wcs-mat-icon` component instead of material class for button close
- **horizontal-stepper**: Add a check to ignore a function if the component is not initialized
- **docs**: add current-step property binding to horizontal-stepper story
- **dropdown**: fix error in console when noArrow flag is true
- **mat-icon**: fix icon to be verticaly centered in mat-icon (especially when a wcs-mat-icon is in a wcs-button)
- **modal**: update css and template to set a max-height and a scroll bar when the modal content takes too much space

## [2.10.0] - 2022-02-04

### Added

- **formly**: add styling support for `form-field` child elements

### Fixed

- **form-field**: fix random infinite loop when wcs-label is considered as form field input

## [2.9.0] - 2022-02-03

### Added

- **modal**: add size param

### Changed

- **radio-group**: change radio group height to 40px to fit button size when attribute `mode="option"`
- **formly**: change `formlySelectOptions` pipe to `wcsFormlyOptions` pipe in `select` and `radio` formly component in
  order to add any options in templateOptions. In this case we add the `class` option to add css class for select option
  and radio.

### Fixed

- **grid-column**: event `wcsSortChange` was trigger twice
- **stenciljs**: upgrade compiler version to 2.13.0

## [2.8.0] - 2022-01-27

### Added

- **radio-group**: add `horizontal` mode
- **wcs-formly**: add the `tooltip` property in templateOptions, it adds a tooltip to the corresponding field's label
- **form-field**: add a tooltip example in documentation using `wcs-mat-icon` and `wcs-tooltip`

### Changed

- **tooltip:** redesign of the tooltip and migrate to tippy.js library. the API of the previous versions remain
  compatible with the new API which has only added new attributes / methods.
- ⚠ **modal:** change `backdrop` property in `withoutBackdrop` which is false by default (inversion of the condition)

## [2.7.0] - 2021-12-14

### Added

- **dropdown**: add overlay placement attribute
- **dropdown**: add no-arrow attribute to hide the arrow in dropdown button
- **angular/formly**: add disabled attribute support for field template options
- **switch**: add disabled attribute
- **input**: add `prefixLabel` and `suffixLabel` attributes

### Changed

- **dropdown**: use PopperJS for dropdown overlay positioning
- **form-field**: change `display: inline-flex` to `display: flex`

### Fixed

- **dropdown**: Fix disabled attribute that did not work
- **dropdown**: Dropdown overlay closes when click on another dropdown instance
- **grid**: initial sort order attribute
- **input**: add disabled styles
- **switch**: display label if present
- **radio** **checkbox**: fix disabled attribute

## [2.6.0] - 2021-11-24

### Added

- **grid**: add support for custom cell rendering with slot (`wcs-grid-custom-cell`)
- **grid**: add support to hide columns
- **doc**: migrate existing documentation to storybook

### Changed

- **stencil**: migrate to v2.10.x

### Fixed

- **Communication Navbar**: close navbar when user click on a link (`a`) slotted element in submenu and category

### Removed

- **angular schematics**: remove Angular schematics support (`ng add wcs` is no longer supported)

## [2.5.1]

### Fixed

- `wcs-angular`: update component proxies to support angular v12 strict
  template (https://github.com/ionic-team/stencil-ds-output-targets/issues/155)

## [2.5.0]

### Added

- `action-bar`: add support for tabs
- `wcs-angular`: add automatic generation of proxy components

### Changed

- `tabs`: match SNCF Design System specifications and add support for headers only mode, add support for gutter

### Fixed

- `textarea`: rename component class to match component selector

## [2.4.0]

### Added

- `horizontal-stepper`: Add horizontal stepper component
- `progress-bar`: Add a CSS variable to change the duration of animations and the border radius
- `galactic`: Add galactic navigation bar
- `galactic-menu`: Add menu component for the galactic navigation bar
- `com-nav` : Add communication navbar and subcomponents (`submenu`, `category`)
- `footer`: Add footer component

### Fixed

-`mat-icon`: change display block to flex for host element

## [2.3.0]

### Added

- `select`: Added method to compare options with selected options (by default : deep comparison between object)

### Fixed

- `editable-field`: fix the display of null values, array values (for multiple select) and error states on input and
  textarea

## [2.2.0]

### Added

- `wcs-select`: Added support for the chips attribute to display multi selected values in chips mode
- `textarea`: Added a method to force the textarea to adopt the content size

### Fixed

- `editable-field`: Fix bad display in fields with several lines of text.
- `editable-field`: Fix textarea autogrow behaviour
- `wcs-tooltip`: Id starting by a number is not a valid CCS selector (it has to be escaped). It's a problem if an
  application use a tooltip on an element with an id starting by a number. We fix this without using CSS selector to
  find the element.

## [2.1.0]

### Added

- `wcs-editable-field`: Added support for the readonly attribute

## [2.0.1]

### Fixed

- `wcs-form-field`: Following the update of the form field, an error was thrown if the slotted component was not in a
  fixed list of supported components. This was a problem for some applications that wrapped the components or created
  components on their side. This error has been removed, and a warning has been added.

## [2.0.0]

### Breaking changes

- if you use form-field, the native components "input" and "textarea" are no longer supported. You have to migrate to
  the new components `wcs-input` and `wcs-textarea` (they share the same API as the native ones).
- `wcs-field-header` component has been renamed to `wcs-field-label`.

### Added

- wcs-editable-field : new component for inline data editing. for the moment the component supports the following
  components
    - wcs-input
    - wcs-text-area
    - wcs-select
- wcs-input
- wcs-textarea

## [0.0.3 - 0.0.6]

### Fixed

- Compatibility for firefox < 63
    - Tab
    - Select

## [0.0.2]

### Changed

- Upgraded to stencil 1.0

## [0.0.1]

### Added

- Components
    - App shell
        - Header
        - Sidebar
    - Badge
    - Button
    - Card
        - Card body
    - Checkbox
    - Icon
    - Progress bar
    - Progress radial
    - Select
    - Tabs
    - Tooltip
- Styling
    - A few CSS variables
- Examples
    - Angular
    - React (Not yet working)
    - Vue

## Changelog template

### Added

for new features.

### Changed

for changes in existing functionality.

### Deprecated

for soon-to-be removed features.

### Removed

for now removed features.

### Fixed

for any bug fixes.

### Security

in case of vulnerabilities.