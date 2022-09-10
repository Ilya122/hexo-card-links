const fs = require('hexo-fs');
const path = require('path');
const PostLink = require('hexo/lib/plugins/tag/post_link');

'use strict';

hexo.extend.tag.register('cardgroup', (args, insideContent) => {
    let repeat = args[0] === null ? '3' : args[0];
    return `<div style="display:grid;grid-template-columns: repeat(${repeat}, 1fr);grid-auto-rows: auto;grid-column-gap: 5px;grid-row-gap: 25px;">
            ${
                hexo.render.renderSync({
                    text: insideContent,
                    engine: "markdown"
                }) || "No content to show"
            }
            </div>`;
}, {
    ends: true
});


hexo.extend.tag.register('cardlink', (args) => {
    let header = args[0];
    let postLinkPath = PostLink(hexo.render.context)([args[1], 'true']);

    return `<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition: 0.3s;border-radius: 5px;">
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