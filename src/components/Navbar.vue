<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div
      class="logo-container"
      @mouseenter="logoHovered = true"
      @mouseleave="logoHovered = false"
      role="banner"
    >
      <img src="/logo.png" alt="Logo" class="logo" :class="{ hovered: logoHovered }" />
      <span class="name">Putri Indah</span>
    </div>
    <ul>
      <li>
        <a
          href="#about"
          :class="{ active: activeSection === 'about' }"
          @click.prevent="handleClick('about')"
          >About Me</a
        >
      </li>
      <li>
        <a
          href="#skills"
          :class="{ active: activeSection === 'skills' }"
          @click.prevent="handleClick('skills')"
          >Skills</a
        >
      </li>
      <li>
        <a
          href="#projects"
          :class="{ active: activeSection === 'projects' }"
          @click.prevent="handleClick('projects')"
          >Projects</a
        >
      </li>
      <li>
        <a
          href="#contact"
          :class="{ active: activeSection === 'contact' }"
          @click.prevent="handleClick('contact')"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    activeSection: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isScrolled: false,
      logoHovered: false,
    };
  },
  methods: {
    handleClick(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      this.$emit("update:activeSection", id);
    },
    onScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
/* Styles sama seperti yang kamu kasih */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

.navbar {
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-sizing: border-box;

  background: rgba(34, 34, 34, 0.4);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-radius: 0 0 15px 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.navbar.scrolled {
  background: rgba(34, 34, 34, 0.9);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.logo {
  height: 48px;
  width: 48px;
  object-fit: contain;
  transition: transform 0.4s ease;
  user-select: none;
}

.logo.hovered {
  transform: rotate(15deg) scale(1.15);
}

.name {
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  user-select: none;
  letter-spacing: 0.05em;
  text-shadow:
    0 0 4px rgba(102, 194, 255, 0.8),
    0 0 8px rgba(102, 194, 255, 0.6);
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 2.8rem;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.15rem;
  cursor: pointer;
  transition: color 0.3s ease, font-weight 0.3s ease, text-shadow 0.3s ease;
  position: relative;
}

.navbar a.active {
  font-weight: 700;
  color: #66c2ff;
  text-shadow:
    0 0 8px rgba(102, 194, 255, 0.7),
    0 0 20px rgba(102, 194, 255, 0.5),
    0 0 30px rgba(102, 194, 255, 0.3);
}

.navbar a.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 3px;
  background: #66c2ff;
  border-radius: 4px;
}

.navbar a:hover {
  color: #66c2ff;
  text-shadow: 0 0 8px #66c2ff, 0 0 14px #66c2ff;
}

/* Responsive untuk layar kecil */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .navbar ul {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  .navbar a {
    font-size: 1.25rem;
  }
}
</style>
