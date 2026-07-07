<template>
  <section id="interests" class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ t.interests.title }}</h2>
      <div class="interests-grid">
        <div v-for="(item, index) in t.interests.items" :key="index" class="interest-item">
          {{ item }}
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

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.interest-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #2c3e50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.interest-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #0066cc;
  color: #0066cc;
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .interests-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .interest-item {
    padding: 1.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
