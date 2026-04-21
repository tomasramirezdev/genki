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
    
    // Clean pills string
    const string1 = "text-[#0083FE] bg-[#0083FE]/10 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold inline-block";
    const string2 = "text-[#0083FE] bg-[#0083FE]/10 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold inline-block";
    
    if (content.includes(string1) || content.includes(string2) || content.includes('bg-[#CEF657]') || content.includes('liquid-glass rounded-full px-5 py-2')) {
        
        if (content.includes(string1)) {
            content = content.replaceAll(string1, "liquid-glass rounded-full inline-block px-3 py-1 text-white/60 text-[10px] tracking-widest uppercase");
            changed = true;
        }
        
        if (content.includes(string2)) {
            content = content.replaceAll(string2, "liquid-glass rounded-full inline-block px-3 py-1 text-white/60 text-xs tracking-widest uppercase");
            changed = true;
        }

        if (f.endsWith('Hero.js')) {
            content = content.replace(/bg-\[\#CEF657\]/g, "bg-[#0083FE]/80");
            changed = true;
        }
        
        if (f.endsWith('Navbar.js')) {
             // ensure Navbar has proper hover!
             content = content.replace(/hover:text-white transition-colors border border-white\/10/, "hover:text-white hover:bg-[#0083FE]/20 hover:border-[#0083FE]/50 transition-colors border border-white/10");
             changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed', f);
    }
});
