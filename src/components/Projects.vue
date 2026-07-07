<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">{{ t.projects.title }}</h2>
      <div class="projects-grid" id="projects-grid">
        <div v-if="loading" class="loading">Loading projects...</div>
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h3><a :href="project.html_url" target="_blank">{{ formatName(project.name) }}</a></h3>
          <p>{{ project.description }}</p>
          <div class="project-meta">
            <span v-if="project.language" class="project-lang">
              <span class="lang-dot" :style="{ background: getLanguageColor(project.language) }"></span>
              {{ project.language }}
            </span>
            <span v-if="project.stargazers_count > 0" class="project-stars">⭐ {{ project.stargazers_count }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { content } from '../data'

const projectDescriptions = {
  'Cellular-Automaton': 'CAMI - Capstone Project (Cellular Automata)',
  'Zappy': 'Game played by AI with network capabilities (Server: C, Graphics: C++, AI: Python)',
  'Rugby_Simulator': 'Rugby simulator with match modeling and statistics',
  'Top14_ML_DCU_Project': 'Introduction to Machine Learning with Top14 dataset (DCU Project)',
  'Soundvibe_DCU_Project': 'Music web application (DCU Project)',
  'DDScan': 'Mobile/web scan reading application',
  'Gomoku': 'Artificial intelligence for the Gomoku game (Epitech Project)',
  'RTX': 'Ray tracing engine in C++',
  'Lenia': 'Implementation of Lenia game of life in Rust',
  'NTS': 'Logic circuit simulator in C++',
  'ImageCompressor': 'Image compressor using K-means algorithm (Haskell)',
  'Robot_arm': 'Arduino system for controlling a mechanical arm',
  'Cryptographie': 'Implementation of cryptography algorithms in Python',
  'Lemin': 'Optimal path finding algorithm (Epitech Project)',
  'myTeams': 'Network messaging application in C',
  'NI_elixir': 'Functional programming project in Elixir',
  'Wolfram': 'Wolfram cellular automaton in Haskell',
  'myMarvin': 'CI/CD bot with Jenkins (Groovy)',
  'infin_add': 'Addition of infinitely large numbers in C'
}

const featuredProjects = [
  'Cellular-Automaton', 'Rugby_Simulator', 'DDScan', 'Zappy', 'Top14_ML_DCU_Project', 'RTX',
  'Gomoku', 'Lenia', 'ImageCompressor'
]

const langColors = {
  'Python': '#3572A5',
  'C': '#555555',
  'C++': '#f34b7d',
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489',
  'Haskell': '#5e5086',
  'Elixir': '#6e4a7e',
  'Swift': '#ffac45',
  'Rust': '#dea584',
  'HTML': '#e34c26',
  'Groovy': '#4298b8',
  'Jupyter Notebook': '#DA5B0B',
  'Just': '#384d54'
}

export default {
  props: {
    language: String
  },
  data() {
    return {
      projects: [],
      loading: true,
      t: content[this.language]
    }
  },
  methods: {
    async loadProjects() {
      try {
        const response = await fetch('https://api.github.com/users/EdouardPradie/repos?per_page=30&sort=updated')
        const repos = await response.json()

        const filteredRepos = repos.filter(repo =>
          !repo.fork && repo.name !== 'EdouardPradie' && repo.name !== 'Portfolio'
        )

        // Sort: featured first, then by updated
        filteredRepos.sort((a, b) => {
          const aFeatured = featuredProjects.indexOf(a.name)
          const bFeatured = featuredProjects.indexOf(b.name)
          if (aFeatured !== -1 && bFeatured !== -1) return aFeatured - bFeatured
          if (aFeatured !== -1) return -1
          if (bFeatured !== -1) return 1
          return new Date(b.updated_at) - new Date(a.updated_at)
        })

        // Enhance with descriptions
        this.projects = filteredRepos.map(repo => ({
          ...repo,
          description: projectDescriptions[repo.name] || repo.description || 'Epitech Project'
        }))
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        this.loading = false
      }
    },
    formatName(name) {
      return name.replace(/_/g, ' ')
    },
    getLanguageColor(language) {
      return langColors[language] || '#858585'
    }
  },
  mounted() {
    this.loadProjects()
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.loading {
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
}

.project-card {
  background: white;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #0066cc;
}

.project-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.project-card h3 a {
  text-decoration: none;
  color: #0066cc;
  transition: color 0.3s ease;
}

.project-card h3 a:hover {
  color: #ff9500;
}

.project-card p {
  color: #555;
  font-size: 0.95rem;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.5;
}

.project-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.85rem;
  color: #7f8c8d;
}

.project-lang {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.project-stars {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
