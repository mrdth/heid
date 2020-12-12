<template>
  <div class="w-full pin-b">
    <div class="flex w-full text-xs bg-gray-500">
      <div class="w-1/3 pl-2 text-left bg-indigo-400">
        0:48
      </div>
      <div class="flex-grow pr-2 text-right">
        -1:37
      </div>
    </div>
    <div class="flex w-full">
      <div class="flex w-1/3">
        <img
          src="../assets/led-zeppelin-iii.jpg"
          alt=""
          class="w-16 h-16"
        >
        <figcaption class="pl-4">
          <div class="text-lg">
            Immigrant Song
          </div>
          <a
            href="#"
            class="text-sm text-blue-400"
          >Led Zeppelin</a>
        </figcaption>
      </div>
      <div class="flex flex-row items-center justify-center w-1/3 text-gray-300">
        <div class="w-8 cursor-pointer hover:text-indigo-400">
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
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </div>

        <div class="w-12 mx-4 cursor-pointer hover:text-indigo-400">
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
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div class="w-8 cursor-pointer hover:text-indigo-400">
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center justify-end w-1/3 ">
        <div class="w-8 cursor-pointer hover:text-indigo-400">
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
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </div>

        <div class="w-3/5 pl-4 pr-8">
          <div class="w-full h-2 bg-indigo-200 rounded-lg">
            <div class="w-3/4 h-2 bg-indigo-700 rounded-lg " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player'

};

</script>
