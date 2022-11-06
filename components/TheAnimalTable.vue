<script lang="ts" setup>
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Animal } from '../types';
import { calculateAgeInYears } from '../composables/helpers';

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
});

const animalsSortedByName = props.animals.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Height(m)</th>
        <th>Favorite Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(
          {
            id,
            species,
            name,
            gender,
            birthdate,
            weight,
            height,
            favouriteFruit,
          },
          animalIndex
        ) in animalsSortedByName"
        :key="id"
        class="hover:bg-gray-200"
      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ calculateAgeInYears(new Date(birthdate.toString())) }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ favouriteFruit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply text-left;
}

td {
  @apply w-40;
}

tr {
  @apply border-b-2;
}
</style>
