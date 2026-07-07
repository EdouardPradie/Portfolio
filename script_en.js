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

// Project descriptions in English
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
};

// Featured projects (show first)
const featuredProjects = [
    'Cellular-Automaton', 'Rugby_Simulator', 'DDScan', 'Zappy', 'Top14_ML_DCU_Project', 'RTX',
    'Gomoku', 'Lenia', 'ImageCompressor'
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
            const description = projectDescriptions[repo.name] || repo.description || 'Epitech Project';
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
                <h3>Unable to load projects</h3>
                <p>Visit <a href="https://github.com/EdouardPradie" target="_blank">my GitHub</a> to see my projects.</p>
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
