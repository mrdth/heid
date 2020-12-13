<template>
  <figure class="md:flex md:p-2 hover:bg-indigo-800">
    <img
      class="w-12 h-12 rounded-full"
      :src="coverPath"
      :alt="album"
    >
    <div class="flex-grow px-4 text-sm md:text-left">
      <figcaption class="font-bold">
        <div>
          {{ title }}
        </div>
        <div class="font-light">
          {{ artist }}
        </div>
      </figcaption>
    </div>
    <span class="text-xs">{{ duration }}</span>
  </figure>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'QueueItem',
  props: {
    artist: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      default: 'unknown.png'
    },
    duration: {
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
