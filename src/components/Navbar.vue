<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">EP</a>
      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li><a href="#about" @click="closeMobileMenu">{{ t.nav.about }}</a></li>
        <li><a href="#experience" @click="closeMobileMenu">{{ t.nav.experience }}</a></li>
        <li><a href="#education" @click="closeMobileMenu">{{ t.nav.education }}</a></li>
        <li><a href="#skills" @click="closeMobileMenu">{{ t.nav.skills }}</a></li>
        <li><a href="#projects" @click="closeMobileMenu">{{ t.nav.projects }}</a></li>
        <li><a href="#cami" @click="closeMobileMenu">{{ t.nav.cami }}</a></li>
        <li><a href="cv.html" class="nav-btn" @click="closeMobileMenu">{{ t.nav.cv }}</a></li>
        <li><a href="#" class="nav-btn" @click="toggleLanguage">{{ t.nav.fr }}</a></li>
      </ul>
      <button class="nav-toggle" @click="toggleMobileMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { content } from '../data'

export default {
  props: {
    language: String
  },
  emits: ['toggle-language'],
  data() {
    return {
      mobileMenuOpen: false,
      t: content[this.language]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    toggleLanguage(e) {
      e.preventDefault()
      this.$emit('toggle-language', this.language === 'en' ? 'fr' : 'en')
      this.closeMobileMenu()
    }
  },
  watch: {
    language(newLang) {
      this.t = content[newLang]
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid #ecf0f1;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0066cc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-logo:hover {
  color: #ff9500;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #0066cc;
}

.nav-btn {
  background: #0066cc;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #004499;
  color: white;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 5px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  transition: all 0.3s ease;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-bottom: 1px solid #ecf0f1;
  }

  .nav-links.active {
    max-height: 500px;
  }

  .nav-container {
    padding: 0 1rem;
  }
}
</style>
