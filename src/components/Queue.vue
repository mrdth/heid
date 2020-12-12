<template>
  <div
    id="queue"
    class="w-12 py-2 border-l-2 border-gray-900"
    :class="[isOpen && 'w-1/6']"
  >
    <div class="pt-2 pb-4 pl-2 border-b border-indigo-800">
      <div
        class="flex items-center justify-center w-8 h-8 text-indigo-100 rounded-lg hover:bg-indigo-700"
        @click="isOpen = !isOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="svgPath"
          />
        </svg>
      </div>
    </div>
    <div
      v-show="isOpen"
      class="mt-4"
    >
      <queue-item
        v-for="(item, idx) in items"
        :key="item.id"
        :artist="item.artist"
        :title="item.title"
        :album="item.album"
        :cover="item.cover"
        :duration="item.duration"
        :class="[idx ==0 && 'bg-green-600']"
      />
    </div>
  </div>
</template>

<script>
import queueItems from '../../data/queue.json';
import { computed, ref } from 'vue';
import QueueItem from '@/components/QueueItem.vue';
console.log(queueItems);
export default {
  name: 'Queue',
  components: { QueueItem },
  setup () {
    const isOpen = ref(false);
    const items = queueItems;
    const svgPath = computed(() => isOpen.value ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7');
    return { isOpen, items, svgPath };
  }
};
</script>
