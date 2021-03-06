# gatsby-plugin-cmz

This plugin checks which [`cmz`](https://github.com/joshwnj/cmz) classnames have been used in gatsby's SSR, and inlines them in a `<style>` tag, to avoid a FOUC.

## Instructions

- `npm install -S gatsby-plugin-cmz`
- add to the `plugins` section of your `gatsby-config.js`:

```
plugins: [
  // ...
  // other plugins
  // ...
  
  {
    resolve: 'gatsby-plugin-cmz',
  }
]
```

**Note:** This is intended for use with `cmz >= 3.13.0`

## Acknowledgenments

Inspired by [gatsby-plugin-glamor](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-glamor)
