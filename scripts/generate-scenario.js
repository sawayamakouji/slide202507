const fs = require('fs');
const matter = require('gray-matter');

const scenarioFile = fs.readFileSync('scenario.md', 'utf-8');
const parsedMatter = matter(scenarioFile);

const allScenes = [];
let backgroundAudioPath = undefined;

// 1. Handle the initial front matter (the 'type: title' scene)
if (Object.keys(parsedMatter.data).length > 0) {
  if (parsedMatter.data.backgroundAudio) {
    backgroundAudioPath = parsedMatter.data.backgroundAudio;
    delete parsedMatter.data.backgroundAudio; // Remove from scene data
  }
  allScenes.push(parsedMatter.data);
}

// 2. Handle the rest of the content
// Split by '---' and filter out empty strings (from leading/trailing '---' or multiple '---')
const contentSections = parsedMatter.content.split('---').filter(s => s.trim());

contentSections.forEach((section) => {
  const lines = section.trim().split('\n');
  const sceneData = {};
  lines.forEach((line) => {
    const match = line.match(/^\s*([^:]+):\s*(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      sceneData[key] = value;
    }
  });
  if (Object.keys(sceneData).length > 0) {
    allScenes.push(sceneData);
  }
});

// Write the final scenario object to public/scenario.json
const finalOutput = { scenario: allScenes };
if (backgroundAudioPath) {
  finalOutput.backgroundAudio = backgroundAudioPath;
}
fs.writeFileSync('public/scenario.json', JSON.stringify(finalOutput, null, 2));

console.log('scenario.json generated successfully!');
