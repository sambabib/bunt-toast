[![npm version](https://img.shields.io/npm/v/bunt-toast.svg)](https://www.npmjs.com/package/bunt-toast)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/bunt-toast)](https://bundlephobia.com/package/bunt-toast)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, customizable toast notification library for React and Vue.

## Features

- **Framework Support**: Works with both React and Vue.
- **Customizable**: Position toasts, set durations, and choose themes (light, dark, auto).
- **Lightweight**: Minimal footprint with zero dependencies.
- **TypeScript Support**: Fully typed.
-  **Zero Runtime Dependencies** - No bloat, just what you need. React and Vue are peer dependencies (optional) and are not bundled.

## Size

- Bundle size (min+gzip): 11.3 kB — measured by [bundlejs](https://deno.bundlejs.com/?q=bunt-toast@2.0.2)
- Note: The “install size” shown by bundlejs includes peer dependencies (React/Vue). Your actual app bundle only includes what you import, and unused framework code is tree-shaken.

Tip: Import the framework-specific entry for best tree-shaking:

```ts
// React
import { toast } from 'bunt-toast/react';

// Vue
import { toast } from 'bunt-toast/vue';
```

## Demo

Check out the [live demo](https://sambabib.github.io/bunt-toast/) to see bunt-toast in action.

## Installation

```bash
npm install bunt-toast
```

## Usage

The simplest way to use Bunt Toast is with the `toast` function API. Here are examples for both React and Vue.

### React

```tsx
import { toast } from 'bunt-toast/react';

function App() {
  const showToast = () => {
    // Show a success toast with default options
    toast.success('Operation successful!');
    
    // Or show an error toast
    toast.error('Something went wrong!');
    
    // Or an info toast
    toast.info('This is an informational message');
  };

  return <button onClick={showToast}>Show Toast</button>;
}
```

### Vue

```vue
<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
import { toast } from 'bunt-toast/vue';

export default {
  methods: {
    showToast() {
      // Show a success toast with default options
      toast.success('Operation successful!');
      
      // Or show an error toast
      toast.error('Something went wrong!');
      
      // Or an info toast
      toast.info('This is an informational message');
    }
  }
}
</script>
```

## Customization

You can customize the toast by providing additional options.

### React

```tsx
import { toast } from 'bunt-toast/react';

function App() {
  const showCustomToast = () => {
    toast.success('Operation successful!', {
      position: 'top-right', // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
      duration: 5000, // Duration in milliseconds
      theme: 'dark', // 'light' or 'dark'
    });
  };

  return <button onClick={showCustomToast}>Show Custom Toast</button>;
}
```

### Vue

```vue
<template>
  <button @click="showCustomToast">Show Custom Toast</button>
</template>

<script>
import { toast } from 'bunt-toast/vue';

export default {
  methods: {
    showCustomToast() {
      toast.success('Operation successful!', {
        position: 'top-right', // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
        duration: 5000, // Duration in milliseconds
        theme: 'dark', // 'light' or 'dark'
      });
    }
  }
}
</script>
```

## Advanced Usage

For more control, you can use the `show` method directly.

### React

```tsx
import { toast } from 'bunt-toast/react';

function App() {
  const showAdvancedToast = () => {
    const id = toast.show({
      message: 'This is a fully customized toast',
      type: 'success', // 'success', 'error', or 'info'
      position: 'bottom-left',
      duration: 4000,
      theme: 'light',
      onHide: () => console.log('Toast was hidden')
    });
    
    // You can dismiss the toast programmatically
    // setTimeout(() => toast.dismiss(id), 2000);
  };
  
  const dismissAllToasts = () => {
    toast.dismissAll();
  };

  return (
    <div>
      <button onClick={showAdvancedToast}>Show Advanced Toast</button>
      <button onClick={dismissAllToasts}>Dismiss All Toasts</button>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <button @click="showAdvancedToast">Show Advanced Toast</button>
    <button @click="dismissAllToasts">Dismiss All Toasts</button>
  </div>
</template>

<script>
import { toast } from 'bunt-toast/vue';

export default {
  methods: {
    showAdvancedToast() {
      const id = toast.show({
        message: 'This is a fully customized toast',
        type: 'success',             // 'success', 'error', or 'info'
        position: 'bottom-left',
        duration: 4000,
        theme: 'light',
        onHide: () => console.log('Toast was hidden')
      });
      // You can dismiss the toast programmatically
      // setTimeout(() => toast.dismiss(id), 2000);
    },
    dismissAllToasts() {
      toast.dismissAll();
    }
  }
}
</script>
```

## Using the Component Directly (Alternative)

If you need more control over the rendering process, you can use the component directly. This is useful for integrating with UI libraries or complex state management.

### React

```tsx
import { ReactToast } from 'bunt-toast/react';
import { createRoot } from 'react-dom/client';

function App() {
  const showToast = () => {
    // Create a mount element
    const toastElement = document.createElement('div');
    document.body.appendChild(toastElement);
    
    // Render the toast component
    const root = createRoot(toastElement);
    root.render(
      <ReactToast
        message="Operation successful!"
        type="success"
        position="top-right"
        theme="light"
        duration={3000}
        onHide={() => {
          root.unmount();
          toastElement.remove();
        }}
      />
    );
  };

  return <button onClick={showToast}>Show Toast</button>;
}
```

### Vue

```vue
<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
import { createApp, h } from 'vue';
import { VueToast } from 'bunt-toast/vue';

export default {
  methods: {
    showToast() {
      // Create a mount element
      const toastElement = document.createElement('div');
      document.body.appendChild(toastElement);

      // Create and mount the toast component
      const app = createApp({
        render() {
          return h(VueToast, {
            message: "Operation successful!",
            type: "success",
            position: "top-right",
            theme: "light",
            duration: 3000,
            onHide: () => {
              app.unmount();
              toastElement.remove();
            },
          });
        },
      });
      app.mount(toastElement);
    },
  },
};
</script>
```
```

## License

MIT
