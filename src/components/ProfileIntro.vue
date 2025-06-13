<template>
  <div>
    <!-- Video fullscreen -->
    <div class="hero" v-show="showVideo">
      <video
        ref="videoPlayer"
        autoplay
        muted
        playsinline
        @ended="handleVideoEnded"
        class="background-video"
      >
        <source src="/cybersec-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- About Me -->
    <section v-if="showAbout" id="about" class="about-section">
      <img src="/foto-putri.jpg" alt="Foto Putri" class="profile-pic" />

      <div class="text-container">
        <h1>
          Hi! I’m
          <span class="highlight">{{ displayedName }}</span>
          <span class="cursor">|</span>
        </h1>

        <div class="description">
          <p
            v-for="(para, idx) in typingLines"
            :key="idx"
            class="typing-paragraph"
            :style="{ animationDelay: (idx * typingDelay) + 's' }"
          >
            {{ typedParagraphs[idx] }}
            <span v-if="idx === currentParagraph && isTyping" class="cursor">|</span>
          </p>
        </div>
        <button @click="handleCvClick" class="contact-btn">Peek My CV</button>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="skills-section" v-if="showAbout">
      <h2>My Skills</h2>
      <div class="cards-container">
        <div class="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li><span class="paw">🐾</span> <span class="skill-name">Python</span> <span class="level">Intermediate</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Java</span> <span class="level">Intermediate</span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li><span class="paw">🐾</span> <span class="skill-name">Spring Boot</span> <span class="level">Beginner</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Django</span> <span class="level">Beginner</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Vue.js</span> <span class="level">Beginner</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Canva</span> <span class="level">Proficient</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Nmap</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Wireshark</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">OpenSSL</span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li><span class="paw">🐾</span> <span class="skill-name">Adaptability</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Problem Solving</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Teamwork</span></li>
            <li><span class="paw">🐾</span> <span class="skill-name">Collaboration</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="projects-section" v-if="showAbout">
      <h2>Projects</h2>
      <p>+ little achievements that I’m excited to share!</p>
      <div class="projects-container">
        <div class="project-card">
          <h3>UI Mobile</h3>
          <img src="/ui-mobile.jpg" alt="UI Mobile Project Screenshot" class="project-image" />
          <div class="tools-used">Tools: <span class="tool-name">Figma</span></div>
          <p class="project-description">
            Designed the UI/UX for a mobile application aimed at improving accessibility to university academic services. Successfully delivered the project with an excellent grade (A).
          </p>
          <button class="demo-btn" @click="openFigmaDemo('https://www.figma.com/proto/uMowGDKkhJx5IqQTdoAjqa/Sister-in-sister?node-id=654-3489&p=f&t=eUW6QnYonnkUlzQD-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=654%3A3489')">Demo</button>
        </div>
        <div class="project-card">
          <h3>Network Analysis and System Implementation</h3>
          <img src="/jarkomdat.jpg" alt="Network Analysis Project Screenshot" class="project-image" />
          <div class="tools-used">Tools: <span class="tool-name">Cisco</span></div>
          <p class="project-description">
            Analyzed the network infrastructure and identified issues at SMA Islam Al Azhar 1. Conducted needs assessment, network mapping, and implemented solutions to improve connectivity and performance.
          </p>
        </div>
        <div class="project-card">
          <h3>Project Manager & Full-Stack Developer: Conference Information System Project</h3>
          <img src="/iapa.jpg" alt="IAPA Screenshot" class="project-image" />
          <div class="tools-used">Tools: Springboot, Vue.js</div>
          <p class="project-description">
            As the Project Manager and Full-Stack Developer, I led the creation of the Conference Information System (SISKO). I was responsible for managing the team and project timeline, while also working as a hands-on Full-Stack Developer, actively contributing to the application's code and features.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section" v-if="showAbout">
      <h2>Get in Touch</h2>
      <div class="contact-buttons">
        <button class="contact-btn" @click="goToEmail" aria-label="Email">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M2.01 6.4A2 2 0 014 5h16a2 2 0 011.99 1.4l-9 5.4-9-5.4zM20 8.25l-7.61 4.56a.75.75 0 01-.78 0L4 8.25V17a2 2 0 002 2h12a2 2 0 002-2V8.25z"
            />
          </svg>
          putriindah2004@gmail.com
        </button>
        <button class="contact-btn" @click="goToLinkedIn" aria-label="LinkedIn">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7.5 0h3.8v1.8h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.62 4.75 6v6.26h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4V9z"
            />
          </svg>
          LinkedIn
        </button>
        <button class="contact-btn" @click="goToGitHub" aria-label="GitHub">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.54c.5.09.68-.22.68-.48 0-.24-.01-1.04-.02-1.88-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 012.5-.34 9.58 9.58 0 012.5.34c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.69.92.69 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
          GitHub
        </button>
      </div>
      <br /><br /><br /><br /><br />
      <div>Copyright © 2025 Putri Indah. All Rights Reserved.</div>
    </section>

    <!-- Scroll Down Button -->
    <button
      v-if="showAbout"
      class="scroll-down-btn"
      @click="scrollToNextSection"
      aria-label="Scroll to next section"
    >
      ↓
    </button>
  </div>
</template>

<script>
export default {
  name: "ProfileIntro",
  data() {
    return {
      showVideo: true,
      showAbout: false,
      displayedName: "",
      typingLines: [
        "A final year Information Systems student at Universitas Indonesia with a strong interest in cybersecurity.",
        "I’m passionate about learning how to protect digital systems and focused on building my skills and knowledge to effectively understand and solve cybersecurity challenges. I’m eager to take on new challenges and open to collaborations.",
      ],
      typedParagraphs: ["", ""],
      currentParagraph: 0,
      isTyping: false,
      typingDelay: 1,
      typingIntervalId: null,
      names: ["Putri Indah", "Putri", "Cybersecurity Enthusiast"],
      nameIndex: 0,
      isDeletingName: false,
      nameCharIndex: 0,
      nameTypingSpeed: 100,
      activeSection: null,
      videoPlaying: true,
    };
  },
  methods: {
    handleVideoEnded() {
      this.showVideo = false;
      this.showAbout = true;
      this.videoPlaying = false;
      this.activeSection = "about"; // highlight about setelah video
      this.$nextTick(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        this.startNameTypingLoop();
        this.startTypingParagraph();
        this.$emit("updateActiveSection", this.activeSection);
        this.$emit("updateVideoPlaying", this.videoPlaying);
      });
    },
    onScroll() {
      if (this.videoPlaying) return; // skip highlight saat video jalan
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (contact && scrollPos >= contact.offsetTop) {
        this.setActive("contact");
      } else if (projects && scrollPos >= projects.offsetTop) {
        this.setActive("projects");
      } else if (skills && scrollPos >= skills.offsetTop) {
        this.setActive("skills");
      } else if (about && scrollPos >= about.offsetTop) {
        this.setActive("about");
      }
    },
    setActive(section) {
      if (this.activeSection !== section) {
        this.activeSection = section;
        this.$emit("updateActiveSection", section);
      }
    },
    startNameTypingLoop() {
      this.displayedName = "";
      this.nameIndex = 0;
      this.isDeletingName = false;
      this.nameCharIndex = 0;
      const type = () => {
        const fullName = this.names[this.nameIndex];
        if (!this.isDeletingName) {
          if (this.nameCharIndex < fullName.length) {
            this.displayedName += fullName.charAt(this.nameCharIndex);
            this.nameCharIndex++;
            setTimeout(type, this.nameTypingSpeed);
          } else {
            setTimeout(() => {
              this.isDeletingName = true;
              setTimeout(type, this.nameTypingSpeed);
            }, 1500);
          }
        } else {
          if (this.nameCharIndex > 0) {
            this.displayedName = this.displayedName.slice(0, -1);
            this.nameCharIndex--;
            setTimeout(type, this.nameTypingSpeed / 2);
          } else {
            this.isDeletingName = false;
            this.nameIndex = (this.nameIndex + 1) % this.names.length;
            setTimeout(type, this.nameTypingSpeed);
          }
        }
      };
      type();
    },
    startTypingParagraph() {
      if (this.currentParagraph >= this.typingLines.length) return;
      this.isTyping = true;
      this.typedParagraphs.splice(this.currentParagraph, 1, "");
      let currentText = this.typingLines[this.currentParagraph];
      let idx = 0;
      this.typingIntervalId = setInterval(() => {
        if (idx < currentText.length) {
          this.typedParagraphs.splice(
            this.currentParagraph,
            1,
            this.typedParagraphs[this.currentParagraph] + currentText.charAt(idx)
          );
          idx++;
        } else {
          clearInterval(this.typingIntervalId);
          this.isTyping = false;
          this.currentParagraph++;
          setTimeout(() => this.startTypingParagraph(), this.typingDelay * 1000);
        }
      }, 35);
    },
    scrollToNextSection() {
      const sectionsOrder = ["about", "skills", "projects", "contact"];
      let currentIndex = this.activeSection
        ? sectionsOrder.indexOf(this.activeSection)
        : 0;
      let nextIndex = (currentIndex + 1) % sectionsOrder.length;
      const nextSectionId = sectionsOrder[nextIndex];
      const el = document.getElementById(nextSectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleCvClick() {
      window.open("/cv-putri.pdf", "_blank");
    },
    goToEmail() {
      window.location.href = "mailto:putriindah2004@gmail.com";
    },
    goToLinkedIn() {
      window.open("https://linkedin.com/in/putri-indah-lestari-a4769a246", "_blank");
    },
    goToGitHub() {
      window.open("https://github.com/putriindahlss", "_blank");
    },
    openFigmaDemo(url) {
      window.open(url, '_blank');
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.activeSection = null;
    this.videoPlaying = true;
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #222;
  font-family: "Poppins", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Video fullscreen */
.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background: black;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.6);
}

/* About Me */
.about-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 5rem 3rem;
  background: #222;
  color: #eee;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  animation: fadeSlideUp 1s ease forwards;
  opacity: 0;
  transform: translateY(30px);
  animation-fill-mode: forwards;
}

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-pic {
  flex: 0 0 320px;
  width: 320px;
  height: 400px;
  border-radius: 25px;
  object-fit: cover;
  border: 5px solid rgba(102, 194, 255, 0.5);
  box-shadow: 0 0 10px rgba(102, 194, 255, 0.6),
    0 0 30px rgba(102, 194, 255, 0.4),
    0 0 40px rgba(102, 194, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.profile-pic:hover {
  transform: scale(1.07);
  box-shadow: 0 0 15px rgba(102, 194, 255, 0.8),
    0 0 40px rgba(102, 194, 255, 0.6),
    0 0 50px rgba(102, 194, 255, 0.5);
}

.text-container {
  flex: 1 1 600px;
  max-width: 650px;
  text-align: left;
  color: #eee;
  font-family: "Poppins", sans-serif;
  position: relative;
}

.text-container h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 6px rgba(102, 194, 255, 0.9),
    0 0 12px rgba(102, 194, 255, 0.7);
}

.highlight {
  color: #66c2ff;
  transition: opacity 0.5s ease;
}

.description {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-top: 1rem;
  overflow: visible;
  border-right: none;
  animation: none;
}

.typing-paragraph {
  white-space: pre-wrap;
  word-wrap: break-word;
  min-height: 1.5em;
  position: relative;
}

.cursor {
  display: inline-block;
  width: 1px;
  background-color: #66c2ff;
  animation: blink 1s step-start infinite;
  margin-left: 2px;
  vertical-align: bottom;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

button.contact-btn {
  margin-top: 0.5rem;
  padding: 0.85rem 2.5rem;
  font-weight: 700;
  font-size: 1.15rem;
  color: #66c2ff;
  background-color: transparent;
  border: 3px solid #66c2ff;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color 0.35s ease,
    color 0.35s ease,
    box-shadow 0.3s ease;
  user-select: none;
  box-shadow: 0 0 15px rgba(102, 194, 255, 0.4);
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

button.contact-btn:hover {
  background-color: #66c2ff;
  color: #222;
  box-shadow: 0 0 30px rgba(102, 194, 255, 0.8),
    0 0 40px rgba(102, 194, 255, 0.7);
}

/* Skills */
.skills-section {
  padding: 5rem 3rem 8rem;
  background: #222;
  color: #66c2ff;
  width: 100%;
  max-width: 100vw;
  font-family: "Poppins", sans-serif;
  text-align: center;
  box-sizing: border-box;
}

.skills-section h2 {
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-weight: 700;
  color: #66c2ff;
  text-shadow: 0 0 8px rgba(102, 194, 255, 0.8),
    0 0 16px rgba(102, 194, 255, 0.6);
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: nowrap;
  user-select: none;
  box-sizing: border-box;
}

.skill-card {
  background: transparent;
  border: 2px solid #66c2ff;
  border-radius: 20px;
  padding: 2rem 2.5rem;
  flex: 1 1 320px;
  box-shadow: 0 0 15px #66c2ff80, 0 0 30px #66c2ff40;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  box-sizing: border-box;
}

.skill-card:hover {
  box-shadow: 0 0 30px #66c2ffcc, 0 0 60px #66c2ff99;
}

.skill-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
  color: #99ccff;
  border-bottom: 2px solid #66c2ff;
  padding-bottom: 0.4rem;
  width: 100%;
  user-select: text;
}

.skill-card ul {
  list-style: none;
  padding: 0;
  width: 100%;
  color: #cce6ff;
}

.skill-card ul li {
  font-size: 1.15rem;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: text;
  cursor: default;
  transition: color 0.3s ease;
}

.skill-card ul li:hover {
  color: #a0d2ff;
}

.paw {
  position: absolute;
  left: 0;
  font-size: 1.3rem;
  color: #66c2ff;
  user-select: none;
}

.skill-name {
  flex: 1;
  text-align: left;
  padding-left: 0.3rem;
}

.level {
  font-style: italic;
  font-size: 0.9rem;
  color: #aaccee;
  white-space: nowrap;
  margin-left: 1rem;
  user-select: none;
}

/* Projects */
.projects-section {
  padding: 5rem 3rem 8rem;
  background: #222;
  color: #66c2ff;
  width: 100%;
  max-width: 100vw;
  font-family: "Poppins", sans-serif;
  text-align: center;
  box-sizing: border-box;
}

.projects-section h2 {
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-weight: 700;
  color: #66c2ff;
  text-shadow: 0 0 8px rgba(102, 194, 255, 0.8),
    0 0 16px rgba(102, 194, 255, 0.6);
}

.projects-section p {
  margin-top: 0.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  font-size: 1.15rem;
  color: #cce6ff;
}

.projects-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  user-select: none;
  box-sizing: border-box;
}

.project-card {
  background: transparent;
  border: 2px solid #66c2ff;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  flex: 1 1 320px;
  box-shadow: 0 0 15px #66c2ff80, 0 0 30px #66c2ff40;
  transition: box-shadow 0.3s ease;
  user-select: none;
  box-sizing: border-box;
  min-width: 260px;
  max-width: 900px;
}

.project-card:hover {
  box-shadow: 0 0 30px #66c2ffcc, 0 0 60px #66c2ff99;
}

.project-card h3 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: #99ccff;
}

.project-card p {
  font-size: 1.1rem;
  color: #cce6ff;
}

.project-image {
  width: 100%;
  height: 140px;
  border-radius: 15px;
  margin-bottom: 0.8rem;
  object-fit: cover;
  box-shadow: 0 0 10px #66c2ff88;
}

.tools-used {
  font-weight: 600;
  color: #66c2ff;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

.tool-name {
  font-style: italic;
  color: #aaccee;
}

.projects-section .project-card .project-description {
  font-size: 0.85rem;
  color: #cce6ff;
  line-height: 1.3;
  margin-top: 0;
  max-height: 90px;
  overflow: auto;
  text-align: justify;
}

.demo-btn {
  margin-top: 0.5px;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #66c2ff;
  background-color: transparent;
  border: 2px solid #66c2ff;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.demo-btn:hover {
  background-color: #66c2ff;
  color: #222;
}

/* Contact */
.contact-section {
  padding: 5rem 3rem 8rem;
  background: #222;
  color: #66c2ff;
  width: 100%;
  max-width: 100vw;
  font-family: "Poppins", sans-serif;
  text-align: center;
  box-sizing: border-box;
}

.contact-section h2 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #66c2ff;
  text-shadow: 0 0 8px rgba(102, 194, 255, 0.8),
    0 0 16px rgba(102, 194, 255, 0.6);
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  box-sizing: border-box;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 2.5rem;
  font-weight: 700;
  font-size: 1.15rem;
  color: #66c2ff;
  background-color: transparent;
  border: 3px solid #66c2ff;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color 0.35s ease,
    color 0.35s ease,
    box-shadow 0.3s ease;
  user-select: none;
  box-shadow: 0 0 15px rgba(102, 194, 255, 0.4);
}

.contact-btn:hover {
  background-color: #66c2ff;
  color: #222;
  box-shadow: 0 0 30px rgba(102, 194, 255, 0.8),
    0 0 40px rgba(102, 194, 255, 0.7);
}

.icon {
  width: 22px;
  height: 22px;
  fill: currentColor;
  user-select: none;
}

/* Scroll Down Button */
.scroll-down-btn {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: transparent;
  border: none;
  color: #66c2ff;
  font-size: 3rem;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
  transition: color 0.3s ease;
  padding: 0;
  line-height: 1;
}

.scroll-down-btn:hover {
  color: #4499ff;
  transform: translateY(4px);
}

/* Responsive */
@media (max-width: 1000px) {
  .cards-container,
  .projects-container {
    flex-wrap: wrap;
  }
  .skill-card,
  .project-card {
    flex: 1 1 100%;
  }
}

@media (max-width: 700px) {
  .about-section {
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 2rem;
  }
  .profile-pic {
    width: 250px;
    height: 250px;
    flex: none;
    margin-bottom: 1rem;
  }
  .text-container {
    max-width: 100%;
  }
  .description {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  button.contact-btn {
    width: 100%;
    padding: 1.25rem 0;
  }
  .background-video {
    height: 40vh; /* buat video di mobile ga terlalu tinggi */
    object-fit: contain;
  }
}
</style>
