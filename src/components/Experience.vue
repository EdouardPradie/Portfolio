<template>
  <section id="experience" class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ t.experience.title }}</h2>
      <div class="timeline">
        <div v-for="(job, index) in t.experience.jobs" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3>{{ job.title }}</h3>
              <span class="timeline-company">{{ job.company }}</span>
            </div>
            <span class="timeline-date">{{ job.date }}</span>
            <ul class="timeline-details">
              <li v-for="(detail, i) in job.details" :key="i">{{ detail }}</li>
            </ul>
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

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #0066cc;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  margin-left: 0;
  padding-right: 3rem;
  text-align: right;
}

.timeline-item:nth-child(even) {
  margin-left: 50%;
  padding-left: 3rem;
  text-align: left;
}

.timeline-marker {
  position: absolute;
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid #0066cc;
  border-radius: 50%;
  top: 1rem;
  right: -32px;
}

.timeline-item:nth-child(even) .timeline-marker {
  right: auto;
  left: -32px;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.timeline-header h3 {
  color: #0066cc;
  font-size: 1.3rem;
  margin: 0;
}

.timeline-company {
  background: #0066cc;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.timeline-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
}

.timeline-details {
  list-style: none;
  color: #555;
  font-size: 0.95rem;
}

.timeline-details li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-details li::before {
  content: '▹';
  position: absolute;
  left: 0;
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

  .timeline::before {
    left: 0;
  }

  .timeline-item,
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 0 2rem;
    text-align: left;
  }

  .timeline-marker,
  .timeline-item:nth-child(even) .timeline-marker {
    left: -8px;
    right: auto;
    top: 1rem;
  }

  .timeline-header {
    flex-direction: column;
  }
}
</style>
