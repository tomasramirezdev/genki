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
    
    // 1. Primary Solid Buttons (bg-[#CEF657] text-black --> bg-[#0083FE]/80 text-white)
    if (content.includes('bg-[#CEF657]')) {
        content = content.replace(/bg-\[#CEF657\]\s+text-black/g, 'bg-[#0083FE]/80 text-white');
        
        // Solid hover updates
        content = content.replace(/hover:bg-\[#CEF657\]\s+hover:text-black/g, 'hover:bg-[#0083FE]/60 hover:text-white');
        content = content.replace(/hover:bg-\[#CEF657\]\s+hover:text-white/g, 'hover:bg-[#0083FE]/60 hover:text-white'); // Just in case
        
        // Also if they had liquid-glass hardcoded:
        content = content.replace(/hover:bg-\[#CEF657\]\s+hover:border-\[#CEF657\]/g, 'hover:bg-[#0083FE]/20 hover:border-[#0083FE]/50');
        content = content.replace(/hover:bg-\[#CEF657\]/g, 'hover:bg-[#0083FE]/60');

        changed = true;
    }

    // 2. Fix the hover text returning to white for liquid-glass buttons
    if (content.includes('hover:text-black')) {
        content = content.replace(/hover:text-black/g, 'hover:text-white');
        changed = true;
    }

    // 3. Update the global liquid-glass hover in CSS
    if (f.endsWith('globals.css')) {
        // Change from green to celeste for liquid-glass hover
        // Wait, liquid-glass was .liquid-glass:hover { background: rgba(206, 246, 87, 0.15); box-shadow: ... rgba(206, 246, 87, 0.5); }
        content = content.replace(/rgba\(206,\s*246,\s*87,\s*0\.15\)/g, 'rgba(0, 131, 254, 0.2)');
        content = content.replace(/rgba\(206,\s*246,\s*87,\s*0\.5\)/g, 'rgba(0, 131, 254, 0.5)');
        changed = true;
    }

    // 4. "Pills" / "Spills". Make tags look like pills.
    // Example: tracking-widest uppercase text-white/40
    // Let's replace the tag spans to have light blue background and text:
    // text-white/40 text-xs tracking-widest uppercase
    // -> text-[#0083FE] bg-[#0083FE]/10 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold
    if (content.includes('tracking-widest uppercase')) {
        content = content.replace(/text-white\/40 text-xs tracking-widest uppercase/g, 'text-[#0083FE] bg-[#0083FE]/10 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold inline-block');
        content = content.replace(/text-white\/40 text-sm tracking-widest uppercase/g, 'text-[#0083FE] bg-[#0083FE]/10 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold inline-block');
        // Service layout step numbers:
        // text-[#CEF657] text-xs font-mono w-8 flex-shrink-0 pt-1 -> keep as is unless specified
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed', f);
    }
});
