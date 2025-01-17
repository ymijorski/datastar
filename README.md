![Version](https://img.shields.io/github/package-json/v/starfederation/datastar?filename=library/package.json)
![License](https://img.shields.io/github/license/starfederation/datastar)
![Stars](https://img.shields.io/github/stars/starfederation/datastar?style=flat)

<p align="center"><img width="200" src="https://data-star.dev/static/images/rocket.webp"></p>

# Datastar

### The hypermedia framework.

Datastar helps you build reactive web applications with the simplicity of server-side rendering and the power of a full-stack SPA framework.

Getting started is as easy as adding a single 12KiB script tag to your HTML.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar/bundles/datastar.js"></script>
```

Then start adding frontend reactivity using declarative <code>data-*</code> attributes.

```html
<input data-bind-title type="text">
<div data-text="title.value.toUpperCase()"></div>
<button data-on-click="sse('/endpoint', {method: 'post'})">Save</button>
```

Visit the [Datastar Website »](https://data-star.dev/)

Join the [Discord Server »](https://discord.com/channels/1296224603642925098/1296224603642925102)

## Getting Started

Read the [Getting Started Guide »](https://data-star.dev/guide/getting_started)

## Contributing

Read the [Contribution Guidelines »](https://github.com/starfederation/datastar/blob/develop/CONTRIBUTING.md)

## Custom Plugins

You can manually add your own plugins to the core:

```html
<script type="importmap">
{
    "imports": {
      "datastar": "https://cdn.jsdelivr.net/gh/starfederation/datastar/bundles/datastar-core.js"
    }
}
</script>
<script type="module">
    import { Datastar } from 'datastar'

    Datastar.load(
        // I can make my own plugins!
    )
    </script>
```