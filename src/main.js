import HMR from '@sveltech/routify/hmr'
import App from './App.svelte'

const app = HMR(App, { target: document.querySelector('#app') }, 'elysium-app')

export default app
