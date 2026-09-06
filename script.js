// ===== YOUR FILES - ADD YOUR AFFILIATE LINKS HERE =====
const files = [
    {
        id: 1,
        icon: "🎵",
        title: "Music Production Pack",
        description: "300+ royalty-free loops and samples",
        size: "2.4 GB",
        downloads: 1520,
        link: "https://example.com/music-pack" // REPLACE THIS
    },
    {
        id: 2,
        icon: "🎨",
        title: "Design Templates Bundle",
        description: "200+ templates for Photoshop and Figma",
        size: "850 MB",
        downloads: 2340,
        link: "https://example.com/design-templates" // REPLACE THIS
    },
    {
        id: 3,
        icon: "💻",
        title: "Developer Toolkit Pro",
        description: "Essential tools for web developers",
        size: "1.2 GB",
        downloads: 1890,
        link: "https://example.com/dev-toolkit" // REPLACE THIS
    },
    {
        id: 4,
        icon: "📚",
        title: "E-Book Library Collection",
        description: "500+ business and tech e-books",
        size: "1.8 GB",
        downloads: 3210,
        link: "https://example.com/ebook-collection" // REPLACE THIS
    },
    {
        id: 5,
        icon: "🎬",
        title: "Video Editing Assets",
        description: "400+ transitions and effects",
        size: "3.1 GB",
        downloads: 980,
        link: "https://example.com/video-assets" // REPLACE THIS
    },
    {
        id: 6,
        icon: "📊",
        title: "Business Templates Pack",
        description: "Complete business plan templates",
        size: "450 MB",
        downloads: 2750,
        link: "https://example.com/business-templates" // REPLACE THIS
    }
];

// ===== RENDER FILES =====
function renderFiles(fileList) {
    const grid = document.getElementById('fileGrid');
    grid.innerHTML = '';
    
    fileList.forEach(file => {
        const card = document.createElement('div');
        card.className = 'file-card';
        card.innerHTML = `
            <div class="file-icon">${file.icon}</div>
            <h3>${file.title}</h3>
            <p>${file.description}</p>
            <div class="file-meta">
                <span>📦 ${file.size}</span>
                <span>⬇️ ${file.downloads}</span>
            </div>
            <a href="${file.link}" target="_blank" class="download-btn">
                📥 Download
            </a>
        `;
        grid.appendChild(card);
    });
}

// ===== SEARCH =====
function searchFiles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = files.filter(file => 
        file.title.toLowerCase().includes(query) ||
        file.description.toLowerCase().includes(query)
    );
    renderFiles(filtered);
}

// ===== INIT =====
renderFiles(files);
