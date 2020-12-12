<template>
  <div
    id="nav"
    class="flex flex-row justify-center pt-4 border-b border-indigo-400"
  >
    <nav-item
      destination="/"
      text="library"
    />
    <nav-item
      destination="/playlists"
      text="playlists"
    />
  </div>
</template>

<script>
import NavItem from '@/components/NavItem.vue';
export default {
  name: 'MainNav',
  components: {
    NavItem
  }
};
</script>
