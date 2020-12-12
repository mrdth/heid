<template>
  <router-link
    v-slot="{ href, navigate, isActive }"
    :to="destination"
    class="flex flex-col items-center uppercase"
  >
    <div
      class="self-center h-12 px-4"
      :class="[isActive && 'border-b-2 border-indigo-400 text-gray-50 font-bold', !isActive && 'text-gray-300 font-normal']"
    >
      <a
        :href="href"
        @click="navigate"
      >{{ text }}</a>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    destination: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
