// 注册 {% asset_img %} 标签 
const { join } = require('path'); 

hexo.extend.tag.register('asset_img', function(args) { 
    // 解析参数，例如：{% asset_img demo.jpg "图片描述" %} 
    const img = args[0]; 
    const alt = args.slice(1).join(' ') || ''; // 支持带空格的描述文字 
    
    // 获取当前上下文 
    const ctx = this; 
    let imgPath = img; 
    
    // 如果是绝对路径或外部链接，直接返回 
    if (/^(?:https?:\/\/|\/)/.test(img)) { 
        return `<img src="${img}" alt="${alt}" class="article-img">`; 
    } 
    
    // 构建正确的图片路径 
    // 对于文章资源，使用相对路径 
    const post = ctx.post || ctx.page; 
    if (post && post.asset_dir) { 
        // 对于文章内的资源，直接使用文件名即可，Hexo 会自动处理路径 
        imgPath = img; 
    } 
    
    // 手动构建图片 URL，避免使用可能出现问题的 url_for 辅助函数 
    // 直接使用根路径 + 资源路径 
    const src = hexo.config.root + imgPath; 
    
    // 返回标准的 img HTML 标签 
    return `<img src="${src}" alt="${alt}" class="article-img">`; 
}, {async: false, ends: false});