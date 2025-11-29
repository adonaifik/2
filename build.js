// Build script to inject API URL into static files and prepare for Netlify
// This is a Node.js script - no Python needed!
const fs = require('fs');
const path = require('path');

// Get API URL from environment variable or use null for quiz-only mode
const API_URL = process.env.API_BASE_URL || null; // null = quiz-only mode (no backend)

// Read the app.js file
const appJsPath = path.join(__dirname, 'static', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Replace the API_BASE_URL configuration
// Match the pattern: return null; or return 'URL';
const apiUrlPattern = /return null;|return '[^']+';/;
const newApiUrl = API_URL ? `return '${API_URL}';` : `return null;`;

if (apiUrlPattern.test(appJsContent)) {
    appJsContent = appJsContent.replace(apiUrlPattern, newApiUrl);
    fs.writeFileSync(appJsPath, appJsContent, 'utf8');
    if (API_URL) {
        console.log(`✅ Updated API_BASE_URL to: ${API_URL}`);
    } else {
        console.log(`✅ Set to quiz-only mode (no backend)`);
    }
} else {
    console.log('⚠️  Could not find API_BASE_URL pattern in app.js');
    console.log('   This is okay - quiz will work in standalone mode');
}

// Copy static files to templates directory for Netlify
const templatesDir = path.join(__dirname, 'templates');
const staticDir = path.join(__dirname, 'static');

// Create static directory in templates if it doesn't exist
const templatesStaticDir = path.join(templatesDir, 'static');
if (!fs.existsSync(templatesStaticDir)) {
    fs.mkdirSync(templatesStaticDir, { recursive: true });
    console.log('✅ Created templates/static/ directory');
}

// Copy static files
const filesToCopy = ['app.js', 'styles.css'];
filesToCopy.forEach(file => {
    const src = path.join(staticDir, file);
    const dest = path.join(templatesStaticDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied ${file} to templates/static/`);
    } else {
        console.log(`⚠️  Warning: ${file} not found in static/ directory`);
    }
});

console.log('✅ Build complete!');

