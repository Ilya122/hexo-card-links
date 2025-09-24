let PostLink = null;

try {
    // Try requiring the module from the first path.
    PostLink = require('hexo/lib/plugins/tag/post_link');
} catch (error) {
    // If requiring the module from the first path fails, then require it from the second path.
    if (error.code === 'MODULE_NOT_FOUND') {
        PostLink = require('hexo/dist/plugins/tag/post_link');
    } else {
        // If there's any other error, re-throw it.
        throw error;
    }
}

'use strict';

hexo.extend.tag.register('cardgroup', (args, insideContent) => {
    const repeat = (args && args[0]) ? parseInt(args[0], 10) || 3 : 3;
    const uid = 'cg-' + Math.random().toString(36).slice(2, 8); // unique class per instance

    const styleBlock = `
<style>
.${uid} {
  display: grid;
  grid-template-columns: repeat(${repeat}, 1fr);
  grid-auto-rows: auto;
  gap: 25px 5px;
}
@media (max-width: 768px) {
  .${uid} { grid-template-columns: 1fr !important; }
}
</style>`;

    const content = hexo.render.renderSync({
        text: insideContent,
        engine: "markdown"
    }) || "No content to show";

    return `${styleBlock}
<div class="content-card-container ${uid}">
  ${content}
</div>`;
}, { ends: true });


hexo.extend.tag.register('cardlink', (args) => {
    let header = args[0];
    let postLinkPath = PostLink(hexo.render.context)([args[1], 'true']);

    return `<div class="content-card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition: 0.3s;border-radius: 5px;">
                <h4>${header}</h4>
                    <div style="margin-bottom: 1em;">
                    ${
                         hexo.render.renderSync({
                                 text: postLinkPath,
                                 render:'markdown'
                            }) 
                    }
                </div>
            </div>`;
});