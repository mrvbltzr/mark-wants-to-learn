<%*
const toc = tp.app.plugins.plugins['obsidian-plugin-toc'];

if (toc) {
    toc.createTocForActiveFile()();
} else {
    tp.obsidian.Notice('Please install "obsidian-plugin-toc"!', 10000);
}
-%>