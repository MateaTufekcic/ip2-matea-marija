// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Kreiraj Vuetify instancu
const vuetify = createVuetify({
  components,
  directives,
});

// Kreiraj Vue aplikaciju
const app = createApp(App);

// Registruj Vuetify i druge plugine
app.use(vuetify);
registerPlugins(app);

// Montiraj aplikaciju
app.mount('#app');
