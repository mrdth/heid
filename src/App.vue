<template>
  <div class="flex flex-row flex-1 ">
    <div class="flex-grow w-full">
      <header>
        <main-nav />
      </header>
      <main>
        <router-view class="p-8 mx-auto overflow-y-auto" />
      </main>
    </div>
    <queue />
  </div>
  <footer class="fixed bottom-0 w-full bg-gray-800 pin-b">
    <player />
  </footer>
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
