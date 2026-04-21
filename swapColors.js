const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Seba/genki/solar-cordoba/app';

function walk(d) {
    let files = [];
    fs.readdirSync(d).forEach(file => {
        const p = path.join(d, file);
        if (fs.statSync(p).isDirectory()) {
            files = files.concat(walk(p));
        } else if (p.endsWith('.js') || p.endsWith('.css')) {
            files.push(p);
        }
    });
    return files;
}

const files = walk(dir);

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    if (content.includes('#0083FE') || content.includes('#CEF657') || content.includes('131, 254') || content.includes('border-\\[\\#0083FE\\]')) {
        changed = true;
        
        // Swap hex
        content = content.replace(/#0083FE/g, '___TEMP_GREEN___');
        content = content.replace(/#CEF657/g, '#0083FE');
        content = content.replace(/___TEMP_GREEN___/g, '#CEF657');

        // Swap rgb in CSS
        content = content.replace(/0,\s*131,\s*254/g, '___TEMP_RGB___');
        content = content.replace(/206,\s*246,\s*87/g, '0, 131, 254');
        content = content.replace(/___TEMP_RGB___/g, '206, 246, 87');
        
        // Fix contrast for solid neon green buttons
        content = content.replace(/bg-\[\#CEF657\]\s+text-white/g, 'bg-[#CEF657] text-black');
        
        // Ensure glassmorphism hovers that just swapped remain correct
        // The script just swapped the arbitrary Tailwind classes. 
        // e.g. hover:border-[#CEF657] hover:bg-[#CEF657] will now be neon green.
        
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed', f);
    }
});
