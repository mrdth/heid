<template>
  <div class="flex flex-col w-2/3 pb-36">
    <div
      id="album-meta"
      class="flex pb-8"
    >
      <img
        :src="coverPath"
        :alt="info.name"
        class="w-64 rounded-xl"
      >

      <div class="flex flex-col px-8">
        <span class="text-3xl">{{ info.name }}</span>
        <span class="text-xl text-gray-400">By {{ info.artist }}</span>
        <span class="mt-2 text-gray-400">Genres:
          <ul class="inline text-gray-100">
            <li
              v-for="genre in info.tags.tag"
              :key="genre.name"
              class="inline w-auto h-10 px-2 py-1 mx-1 transition duration-200 ease-in bg-green-600 rounded-full shadow cursor-pointer hover:bg-green-700 active:shadow-lg mouse focus:outline-none"
            >{{ genre.name }}</li>
          </ul>
        </span>
        <span class="mt-2 text-gray-400">Tracks: <span class="text-gray-100">{{ info.tracks.track.length }}</span></span>
        <span class="mt-2 text-gray-400">Duration: <span class="text-gray-100">{{ duration }}</span></span>

        <div class="flex">
          <span class="relative w-48 mt-4">
            <button
              class="flex px-4 py-2 font-medium tracking-wide text-white capitalize bg-green-600 rounded-full align-items-center hover:bg-green-700 focus:outline-none"
              @click="playlistDropdownOpen = false; playDropdownOpen = !playDropdownOpen"
            >
              <span class="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span class="pr-4 ml-2 leading-6 border-r">Play</span>
              <span class="w-6 h-6 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              v-if="playDropdownOpen"
              class="absolute right-0 z-20 overflow-hidden bg-green-700 rounded-md shadow-xl top-11 w-36"
            >
              <span
                class="block px-4 py-2 text-sm text-gray-200 border-b border-green-900 hover:bg-green-600"
              >Play now</span>
              <span
                class="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600"
              >Add to queue</span>
            </div>
          </span>

          <span class="relative w-64 mt-4">
            <button
              class="flex px-4 py-2 font-medium tracking-wide text-white capitalize bg-green-600 rounded-full align-items-center hover:bg-green-700 focus:outline-none"
              @click="playDropdownOpen = false; playlistDropdownOpen = !playlistDropdownOpen"
            >
              <span class="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span class="pr-4 ml-2 leading-6 border-r">Add to Playlist</span>
              <span class="w-6 h-6 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              v-if="playlistDropdownOpen"
              class="absolute right-0 z-20 overflow-hidden bg-green-700 rounded-md shadow-xl top-11 w-36"
            >
              <span
                class="block px-4 py-2 text-sm text-gray-200 border-b border-green-900 hover:bg-green-600"
              >New Playlist</span>
              <span
                class="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600"
              >Existing</span>
            </div>
          </span>
        </div>
      </div>
    </div>
    <table class="w-full table-auto">
      <thead>
        <tr class="h-12 bg-gray-700">
          <th>#</th>
          <th class="text-left">
            Song
          </th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(track, idx) in info.tracks.track"
          :key="track.name"
          class="h-12 border-b border-gray-700 hover:bg-gray-900"
        >
          <td class="text-center">
            {{ idx + 1 }}
          </td>
          <td>{{ track.name }}</td>
          <td class="text-center">
            {{ new Date(1000 * track.duration).toISOString().substr(14, 5) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import albums from '@/../data/album_details.json';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'AlbumDetail',
  setup () {
    const route = useRoute();
    const playDropdownOpen = ref(false);
    const playlistDropdownOpen = ref(false);
    const info = albums.filter(album => album.mbid === route.params.mbid)[0];

    const coverPath = computed(() => info.image.filter(image => image.size === 'extralarge')[0]['#text']);
    const duration = computed(() => {
      let total = 0;

      info.tracks.track.forEach(track => { total += parseInt(track.duration, 10); });
      return new Date(1000 * total).toISOString().substr(11, 8);
    });

    return { info, playDropdownOpen, playlistDropdownOpen, coverPath, duration };
  }
};
</script>
