const fs = require('fs');

async function run() {
    try {
        const content = "Hello World";
        let readmeContent = fs.readFileSync('README.md', 'utf8');
        readmeContent += `\n\n${content}\n`;

        fs.writeFileSync('README.md', readmeContent);
    } catch (error) {
        console.error('Error updating README:', error.message);
        process.exit(1);
    }
}

run();