// Language colors for GitHub
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
};

// Project descriptions in French
const projectDescriptions = {
    'Zappy': 'Jeu joué par des intelligences artificielles en réseau (Serveur: C, Graphique: C++, IA: Python)',
    'Rugby_Simulator': 'Simulateur de rugby avec modélisation de matchs et statistiques',
    'Top14_ML_DCU_Project': 'Découverte du Machine Learning avec un dataset du Top14 (Projet DCU)',
    'Soundvibe_DCU_Project': 'Application web de musique (Projet DCU)',
    'DDScan': 'Application mobile/web de lecture de scans',
    'Gomoku': 'Intelligence artificielle pour le jeu Gomoku (Projet Epitech)',
    'RTX': 'Moteur de ray tracing en C++',
    'Lenia': 'Implémentation du jeu de la vie Lenia en Rust',
    'NTS': 'Simulateur de circuits logiques en C++',
    'ImageCompressor': 'Compresseur d\'images utilisant l\'algorithme K-means (Haskell)',
    'Robot_arm': 'Système Arduino pour contrôler un bras mécanique',
    'Cryptographie': 'Implémentation d\'algorithmes de cryptographie en Python',
    'Lemin': 'Algorithme de recherche de chemin optimal (Projet Epitech)',
    'myTeams': 'Application de messagerie en réseau en C',
    'NI_elixir': 'Projet de programmation fonctionnelle en Elixir',
    'Wolfram': 'Automate cellulaire de Wolfram en Haskell',
    'myMarvin': 'Bot CI/CD avec Jenkins (Groovy)',
    'infin_add': 'Addition de nombres infiniment grands en C'
};

// Featured projects (show first)
const featuredProjects = [
    'Zappy', 'Rugby_Simulator', 'Top14_ML_DCU_Project', 'RTX',
    'Gomoku', 'DDScan', 'Lenia', 'ImageCompressor'
];

async function loadProjects() {
    const grid = document.getElementById('projects-grid');

    try {
        const response = await fetch('https://api.github.com/users/EdouardPradie/repos?per_page=30&sort=updated');
        const repos = await response.json();

        const filteredRepos = repos.filter(repo =>
            !repo.fork && repo.name !== 'EdouardPradie' && repo.name !== 'Portfolio'
        );

        // Sort: featured first, then by updated
        filteredRepos.sort((a, b) => {
            const aFeatured = featuredProjects.indexOf(a.name);
            const bFeatured = featuredProjects.indexOf(b.name);
            if (aFeatured !== -1 && bFeatured !== -1) return aFeatured - bFeatured;
            if (aFeatured !== -1) return -1;
            if (bFeatured !== -1) return 1;
            return new Date(b.updated_at) - new Date(a.updated_at);
        });

        grid.innerHTML = filteredRepos.map(repo => {
            const description = projectDescriptions[repo.name] || repo.description || 'Projet Epitech';
            const langColor = langColors[repo.language] || '#858585';

            return `
                <div class="project-card">
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name.replace(/_/g, ' ')}</a></h3>
                    <p>${description}</p>
                    <div class="project-meta">
                        ${repo.language ? `
                            <span class="project-lang">
                                <span class="lang-dot" style="background: ${langColor}"></span>
                                ${repo.language}
                            </span>
                        ` : ''}
                        ${repo.stargazers_count > 0 ? `
                            <span class="project-stars">⭐ ${repo.stargazers_count}</span>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        grid.innerHTML = `
            <div class="project-card">
                <h3>Impossible de charger les projets</h3>
                <p>Visitez <a href="https://github.com/EdouardPradie" target="_blank">mon GitHub</a> pour voir mes projets.</p>
            </div>
        `;
    }
}

// Mobile navigation
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);
