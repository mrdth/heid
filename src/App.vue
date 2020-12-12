<template>
  <div class="flex flex-row h-full">
    <div class="flex-grow">
      <main-nav />
      <router-view class="flex-1 p-8 mx-auto" />
    </div>
    <queue />
  </div>
  <player />
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
