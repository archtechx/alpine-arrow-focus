# Alpine Arrow Focus

An Alpine package for building menu screens that can be navigated using arrows, by replicating the tab focus behavior.

## Usage

```
<div x-data="arrow_focus()">
    <button x-spread="item" class="p-8 focus:bg-gray-500">First item</button>
    <button x-spread="item" class="p-8 focus:bg-gray-500">Second item</button>
    <button x-spread="item" class="p-8 focus:bg-gray-500">Third item</button>
</div>
```

Pressing the up & down keys will now switch between items. When the down key is pressed on the last item, the first item will get selected. When the up key is pressed on the first item, the last key will get selected.

## Installation

### CDN module

```html
<script>
import { arrow_focus } from 'https://unpkg.com/@leanadmin/wire-replace@0.1.0';

window.arrow_focus = arrow_focus;
</script>
```

### Node.js

```
import { arrow_focus } from '@leanadmin/alpine-arrow-focus';

// If needed: window.arrow_focus = arrow_focus;
```
