<template>
  <div class="flex flex-col mb-4 mr-4 text-center bg-gray-700 rounded-xl">
    <img
      :src="coverPath"
      class="w-64 h-64 rounded-t-xl"
    >
    <div class="flex flex-col py-1">
      <span class="w-64">{{ title }}</span>
      <span class="flex-grow-0">{{ artist }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'Album',
  props: {
    cover: {
      type: String,
      default: 'unknown.png'
    },
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const coverPath = computed(() => `/img/${props.cover}`);
    return { coverPath };
  }
};
</script>
