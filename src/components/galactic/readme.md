# Galactic Bar

*Part of communication design system*

This component replaces the vertical navbar for sites and applications that use the communication design system

```html
<wcs-galactic text="NomSuperApp est un site SNCF">
    <wcs-galactic-menu text="TOUT SNCF">
        <div style="margin-bottom: 8px"><a href="#" style="text-decoration: none; color: var(--wcs-white)">CGU</a></div>
        <div style="margin-bottom: 8px"><a href="#" style="text-decoration: none; color: var(--wcs-white)">À Propos</a></div>
        <div style="margin-bottom: 8px"><a href="#" style="text-decoration: none; color: var(--wcs-white)">Un autre lien</a></div>
        <wcs-button shape="small">Un bouton</wcs-button>
    </wcs-galactic-menu>
</wcs-galactic>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                | Type     | Default     |
| -------- | --------- | -------------------------- | -------- | ----------- |
| `text`   | `text`    | Text to display in the bar | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*