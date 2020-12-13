<template>
  <div class="flex flex-row flex-1 ">
    <div class="flex-grow w-full">
      <main-nav />
      <router-view class="p-8 mx-auto overflow-y-auto" />
    </div>
    <queue />
  </div>
  <player class="fixed bottom-0" />
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import Player from '@/components/Player.vue';
import Queue from '@/components/Queue.vue';
export default {
  name: 'App',
  components: {
    MainNav,
    Player,
    Queue
  }
};
</script>
