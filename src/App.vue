<template>
  <Navbar :activeSection="activeSection" :videoPlaying="videoPlaying" />
  <ProfileIntro
    @updateActiveSection="updateActiveSection"
    @updateVideoPlaying="updateVideoPlaying"
  />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProfileIntro from "./components/ProfileIntro.vue";

export default {
  components: { Navbar, ProfileIntro },
  data() {
    return {
      activeSection: null,
      videoPlaying: true,
    };
  },
  methods: {
    updateActiveSection(section) {
      this.activeSection = section;
    },
    updateVideoPlaying(isPlaying) {
      this.videoPlaying = isPlaying;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
