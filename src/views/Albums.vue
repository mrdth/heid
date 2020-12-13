<template>
  <div class="flex justify-center py-4">
    <search />
  </div>
  <div class="flex flex-wrap justify-center pb-24">
    <album
      v-for="(album) in albums"
      :key="album.cover"
      :cover="album.cover"
      :title="album.title"
      :artist="album.albumartist"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import albumList from '@/../data/albums.json';
import Album from '@/components/Album.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Albums',
  components: {
    Album,
    Search
  },
  setup () {
    const albums = albumList;
    return { albums };
  }
};
</script>
