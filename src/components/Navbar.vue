<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }" role="banner">
    <div
      class="logo-container"
      @mouseenter="logoHovered = true"
      @mouseleave="logoHovered = false"
      tabindex="0"
      aria-label="Putri Indah Logo and Name"
    >
      <img src="/logo.png" alt="Logo" class="logo" :class="{ hovered: logoHovered }" />
      <span class="name">Putri Indah</span>
    </div>
    <ul v-if="!isMobile">
      <li><a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('about')">About Me</a></li>
      <li><a href="#skills" :class="{ active: activeSection === 'skills' }" @click.prevent="scrollToSection('skills')">Skills</a></li>
      <li><a href="#projects" :class="{ active: activeSection === 'projects' }" @click.prevent="scrollToSection('projects')">Projects</a></li>
      <li><a href="#contact" :class="{ active: activeSection === 'contact' }" @click.prevent="scrollToSection('contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeSection: null,
      isScrolled: false,
      logoHovered: false,
      isMobile: false,
    };
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 700;
    },
    onScroll() {
      this.isScrolled = window.scrollY > 10;
      if (this.isMobile) {
        this.activeSection = null; // no highlight on mobile
        return;
      }
      // logic to set activeSection on desktop
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");
      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (about && scrollPos >= about.offsetTop && scrollPos < (skills ? skills.offsetTop : Infinity)) {
        this.activeSection = "about";
      } else if (skills && scrollPos >= skills.offsetTop && scrollPos < (projects ? projects.offsetTop : Infinity)) {
        this.activeSection = "skills";
      } else if (projects && scrollPos >= projects.offsetTop && scrollPos < (contact ? contact.offsetTop : Infinity)) {
        this.activeSection = "projects";
      } else if (contact && scrollPos >= contact.offsetTop) {
        this.activeSection = "contact";
      } else {
        this.activeSection = null;
      }
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
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

/* Desktop menu */
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

/* Hide desktop menu on mobile */
@media (max-width: 700px) {
  .navbar ul {
    display: none;
  }
}
</style>
