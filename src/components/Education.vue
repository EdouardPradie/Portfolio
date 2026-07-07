<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title">{{ t.education.title }}</h2>
      <div class="education-grid">
        <div v-for="(school, index) in t.education.schools" :key="index" class="education-card">
          <div class="education-icon">{{ school.icon }}</div>
          <h3>{{ school.name }}</h3>
          <p class="education-degree">{{ school.degree }}</p>
          <p class="education-date">{{ school.date }}</p>
          <ul>
            <li v-for="(detail, i) in school.details" :key="i">{{ detail }}</li>
          </ul>
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

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-card {
  background: white;
  border: 1px solid #ecf0f1;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.education-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: #0066cc;
}

.education-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.education-card h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.education-degree {
  color: #0066cc;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.education-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.education-card ul {
  list-style: none;
  text-align: left;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

.education-card ul li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.education-card ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #0066cc;
  font-weight: bold;
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>
