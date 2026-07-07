<template>
  <footer class="footer">
    <div class="container">
      <p>{{ t.footer.copyright }}</p>
      <div class="footer-links">
        <a href="https://github.com/EdouardPradie" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/edouard-pradie-bb7121237/" target="_blank">LinkedIn</a>
        <a href="mailto:edouard.pradie@epitech.eu">Email</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { content } from '../data'

export default {
  props: {
    language: String
  },
  data() {
    return {
      t: content[this.language]
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
.footer {
  background: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.footer-links a:hover {
  color: #ff9500;
}

@media (max-width: 768px) {
  .container {
    gap: 0.5rem;
  }

  .footer-links {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>
