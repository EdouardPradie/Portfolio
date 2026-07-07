<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">{{ t.about.title }}</h2>
      <div class="about-content">
        <p>{{ t.about.description1 }}</p>
        <p>{{ t.about.description2 }}</p>
        <div class="about-details">
          <div class="detail-item">
            <span class="detail-label">{{ t.about.location }}</span>
            <span class="detail-value">{{ t.about.locationValue }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ t.about.email }}</span>
            <span class="detail-value">{{ t.about.emailValue }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ t.about.license }}</span>
            <span class="detail-value">{{ t.about.licenseValue }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { content } from '../data'

export default {
  props: {
    language: String
  },
  setup(props) {
    return {
      t: content[props.language]
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
.section {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

.about-content p {
  margin-bottom: 1.5rem;
}

.about-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.detail-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.detail-label {
  display: block;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.detail-value {
  display: block;
  font-size: 1.1rem;
  color: #666;
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .about-content {
    font-size: 1rem;
  }
}
</style>
