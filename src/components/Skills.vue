<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ t.skills.title }}</h2>
      <div class="skills-grid">
        <div v-for="(category, index) in t.skills.categories" :key="index" class="skill-category">
          <h3>{{ category.name }}</h3>
          <div class="skill-tags">
            <span v-for="(skill, i) in category.skills" :key="i" class="skill-tag">{{ skill }}</span>
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

.section-alt {
  background: #f8f9fa;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: #0066cc;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #0066cc;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  display: inline-block;
  background: white;
  color: #0066cc;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #0066cc;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  background: #0066cc;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 102, 204, 0.2);
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
