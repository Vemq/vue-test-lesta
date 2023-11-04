<script setup lang="ts">
import { watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import MainPage from './components/MainPage.vue';
import ErrorPage from './components/ErrorPage.vue';

import { useAllShipsStore } from './stores/allShips';

const allShipsStore = useAllShipsStore();

const SHIPS_DATA_QUERY = gql`
  query getData {
    vehicles {
      id
      title
      description
      icons {
        small
        large
        contour
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        icons {
          tiny
          large
        }
      }
    }

    vehicleTypes {
      name
      title
      icons {
        default
      }
    }

    nations {
      name
      title
      color
      icons {
        tiny
        small
      }
    }
  }
`;

const { result, error, loading } = useQuery(SHIPS_DATA_QUERY);

watch(loading, () => {
  if (result.value) {
    allShipsStore.setDataToStore(result)
  };
});
</script>

<template>
  <ErrorPage v-if="error" :errorData="error" />
  <MainPage v-if="!error" />
</template>
