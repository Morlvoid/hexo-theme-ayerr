// 注册 {% asset_img %} 标签 
const { resolve, join } = require('path'); 

hexo.extend.tag.register('asset_img', function(args) { 
    // 解析参数，例如：{% asset_img demo.jpg "图片描述" %} 
    const img = args[0]; 
    const alt = args.slice(1).join(' ') || ''; // 支持带空格的描述文字 
    
    // 获取当前文章的路径上下文 
    const ctx = this; 
    let imgPath = img; 
    
    // 关键：如果文章有独立的资源目录，且图片路径不是绝对路径，则进行拼接 
    // Hexo 的 `post_asset_folder` 启用后，会在 `ctx` 中提供 `post_asset_dir` 属性 
    if (ctx.post && ctx.post.asset_dir && !/^(?:https?:\/\/|\/)/.test(img)) { 
        // 构建相对于文章源文件的资源路径 
        imgPath = join(ctx.post.asset_dir, img); 
    } 
    
    // 使用 Hexo 的 url_for 辅助函数生成最终链接，确保在任何页面路径下都正确 
    // 注意：在脚本中，我们需要通过 hexo.extend.helper.get('url_for').bind(ctx) 来调用辅助函数 
    const url_for = hexo.extend.helper.get('url_for').bind(ctx); 
    const src = url_for(imgPath); 
    
    // 返回标准的 img HTML 标签 
    return `<img src="${src}" alt="${alt}" class="article-img">`; 
}, {async: false, ends: false});