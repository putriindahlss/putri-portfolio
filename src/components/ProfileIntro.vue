<template>
  <div>
    <!-- Video fullscreen -->
    <div class="hero" v-show="showVideo">
      <video
        ref="videoPlayer"
        autoplay
        muted
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
  </div>
</template>

<script>
export default {
  name: "ProfileIntro",
  data() {
    return {
      showVideo: true,
      showAbout: false,

      names: ["Putri Indah", "Putri", "Cybersecurity Enthusiast"],
      nameIndex: 0,
      displayedName: "",
      isDeletingName: false,
      nameCharIndex: 0,
      nameTypingSpeed: 100,

      typingLines: [
        "I’m a final year Information Systems student at Universitas Indonesia with a strong interest in cybersecurity.",
        "I’m passionate about learning how to protect digital systems and focused on building my skills and knowledge to effectively understand and solve cybersecurity challenges. I’m eager to take on new challenges and open to collaborations.",
      ],

      typedParagraphs: ["", ""],
      currentParagraph: 0,
      currentCharIndex: 0,
      isTyping: false,
      typingIntervalId: null,
      typingDelay: 1, // delay between paragraphs in seconds

      nameIntervalId: null,
    };
  },
  methods: {
    handleVideoEnded() {
      this.showVideo = false;
      this.showAbout = true;
      this.$nextTick(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        this.startNameTypingLoop();
        this.startTypingParagraph();
      });
    },

    startNameTypingLoop() {
      this.displayedName = "";
      this.nameIndex = 0;
      this.isDeletingName = false;
      this.nameCharIndex = 0;

      const type = () => {
        const fullName = this.names[this.nameIndex];
        if (!this.isDeletingName) {
          // typing
          if (this.nameCharIndex < fullName.length) {
            this.displayedName += fullName.charAt(this.nameCharIndex);
            this.nameCharIndex++;
            setTimeout(type, this.nameTypingSpeed);
          } else {
            // pause before delete
            setTimeout(() => {
              this.isDeletingName = true;
              setTimeout(type, this.nameTypingSpeed);
            }, 1500);
          }
        } else {
          // deleting
          if (this.nameCharIndex > 0) {
            this.displayedName = this.displayedName.slice(0, -1);
            this.nameCharIndex--;
            setTimeout(type, this.nameTypingSpeed / 2);
          } else {
            // move to next name
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
          setTimeout(() => {
            this.startTypingParagraph();
          }, this.typingDelay * 1000);
        }
      }, 35);
    },

    handleCvClick() {
      window.open("/cv-putri.pdf", "_blank");
    },
  },
  beforeUnmount() {
    if (this.nameIntervalId) clearInterval(this.nameIntervalId);
    if (this.typingIntervalId) clearInterval(this.typingIntervalId);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  background-color: #222;
  font-family: 'Poppins', sans-serif;
}

.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background: black;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.6);
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5rem 3rem;
  background: #222;
  color: #eee;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  gap: 4rem;
  animation: fadeSlideUp 1s ease forwards;
  opacity: 0;
  transform: translateY(30px);
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
  box-shadow:
    0 0 10px rgba(102, 194, 255, 0.6),
    0 0 30px rgba(102, 194, 255, 0.4),
    0 0 40px rgba(102, 194, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.profile-pic:hover {
  transform: scale(1.07);
  box-shadow:
    0 0 15px rgba(102, 194, 255, 0.8),
    0 0 40px rgba(102, 194, 255, 0.6),
    0 0 50px rgba(102, 194, 255, 0.5);
}

.text-container {
  flex: 1 1 600px;
  max-width: 650px;
  text-align: left;
  color: #eee;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.text-container h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #fff;
  text-shadow:
    0 0 6px rgba(102, 194, 255, 0.9),
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

/* Cursor effect */
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
  transition: background-color 0.35s ease, color 0.35s ease, box-shadow 0.3s ease;
  user-select: none;
  box-shadow: 0 0 15px rgba(102, 194, 255, 0.4);
}

button.contact-btn:hover {
  background-color: #66c2ff;
  color: #111;
  box-shadow:
    0 0 30px rgba(102, 194, 255, 0.8),
    0 0 40px rgba(102, 194, 255, 0.7);
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
}
</style>
