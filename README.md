<a href="https://mobalytics.gg/">
    <img src="https://fastcdn.mobalytics.gg/assets/common/icons/mobalytics-logo/logo-mobalytics-collapsed.svg" alt="Mobalytics logo" title="Mobalytics" align="right" height="60" />
</a>

# Mobalytics Widgets

Mobalytics Widgets allow you to install useful widgets with data insights for [League of Legends](https://app.mobalytics.gg/) to your website.

:star: Star us on GitHub — it motivates us a lot!

## Getting Started

#### Installation
  
Add Mobalytics Widgets script section right before closing `<body/>` tag
```
<script async src="https://cdn.jsdelivr.net/gh/mobalyticshq/mobalytics-widgets/build/mobalytics-widgets.js"></script>
```

#### Widget Host Node
  
Add host node for the widget (LoL Amumu [Champion Build](#) example)
```
<div data-moba-widget="lol-champion-build" data-moba-champion="amumu"></div>
```

#### Result
  
Done! Here is a minimal code snippet
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div data-moba-widget="lol-champion-build" data-moba-champion="amumu"></div>
<script async src="https://cdn.jsdelivr.net/gh/mobalyticshq/mobalytics-widgets/build/mobalytics-widgets.js"></script>
</body>
</html>
```

## Widgets

### LoL Champion Build Widget

<img src="https://cdn.mobalytics.gg/assets/common/images/mobalytics-widgets-repo/readme-lol-champion-build-widget.png" align="right"
     alt="LoL Champion Build Widget" width="230" height="305">
     
LoL Champion Build Widgets display the most popular champion build on automatically choosen or specified role.

#### Host Node Settings

| Attribute | Description |
| --- | --- |
| `data-moba-widget` | Widget ID `lol-champion-build` |
| `data-moba-champion` | Slug of the champion, follow [instructions](#)<br/>to see full slugs list. |
| `data-moba-champion-role` | Role of the champion, possible values are<br/>`adc`, `jungle`, `mid`, `support`, `top`. |

**Example**
```
<div data-moba-widget="lol-champion-build"
     data-moba-champion="amumu"
     data-moba-champion-role="jungle"></div>
```

### LoL Champion Build Compact Widget

<img src="https://cdn.mobalytics.gg/assets/common/images/mobalytics-widgets-repo/readme-lol-champion-build-compact-widget.png?1" align="right"
     alt="LoL Champion Build Compact Widget" width="230" height="143">
     
LoL Champion Build Compact Widgets display the most popular champion build on automatically chosen or specified role in a compact way.

#### Host Node Settings

| Attribute | Description |
| --- | --- |
| `data-moba-widget` | Widget ID `lol-champion-build-compact` |
| `data-moba-champion` | Slug of the champion, follow [instructions](#)<br/>to see full slugs list. |
| `data-moba-champion-role` | Role of the champion, possible values are<br/>`adc`, `jungle`, `mid`, `support`, `top`. |

**Example**
```
<div data-moba-widget="lol-champion-build-compact"
     data-moba-champion="amumu"
     data-moba-champion-role="jungle"></div>
```

### LoL Champion Tooltip Widget

<img src="https://cdn.mobalytics.gg/assets/common/images/mobalytics-widgets-repo/readme-lol-champion-tooltip-widget.png" align="right"
     alt="LoL Champion Tooltip Widget" width="230" height="143">
     
LoL Champion Tooltip Widget uses links to Mobalytics champion build pages as a host node to show tooltip on hover over these links.

#### Host Node Settings

| Attribute | Description |
| --- | --- |
| `data-moba-tooltip` | Tooltip ID `lol-champion-tooltip` |

**Example**
```
<a target="_blank"
   href="https://app.mobalytics.gg/lol/champions/khazix/build"
   data-moba-tooltip="lol-champion-tooltip">Khazix link with tooltip</a>
```

## FAQ

### How to find champion slug to use in a widget?
1. Open Mobalytics [Champions Page](https://app.mobalytics.gg/lol/champions)
2. Navigate to specific champion page e.g "ahri"
3. Copy champion slug from the page URL
  
<img src="https://cdn.mobalytics.gg/assets/common/images/mobalytics-widgets-repo/readme-how-to-find-lol-champion-slug.jpg"
     alt="How to find LoL Champion Slug"  height="200">

## License
[MIT License](https://github.com/mobalyticshq/mobalytics-widgets/blob/main/LICENSE)
