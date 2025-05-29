<template>
  <nav class="navbar">
    <ul>
      <li><a href="#about">About Me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #222222;
  padding: 1rem 2rem;
  position: fixed;    /* fixed supaya selalu di atas */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;       /* z-index tinggi supaya di depan video */
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #66c2ff;
}

/* Responsive untuk layar kecil */
@media (max-width: 600px) {
  .navbar ul {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
