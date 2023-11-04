import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFilter,
  BiGrid3X3GapFill,
  FaThList,
  HiSolidSearch,
  CoArrowBottom,
  CoArrowTop
} from "oh-vue-icons/icons";

const httpLink = createHttpLink({
  uri: 'https://vortex.korabli.su/api/graphql/glossary/',
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

addIcons(
  FaFilter,
  BiGrid3X3GapFill,
  CoArrowBottom,
  CoArrowTop,
  FaThList,
  HiSolidSearch);

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.use(createPinia());
app.component("v-icon", OhVueIcon);
app.mount('#app');
