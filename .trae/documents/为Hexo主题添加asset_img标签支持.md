## 实现计划

### 1. 创建自定义标签脚本
- **文件路径**：`themes/ayerr/scripts/asset-image.js`
- **功能**：注册 `{% asset_img %}` 标签，支持文章资源文件夹的图片路径处理
- **核心逻辑**：
  - 解析标签参数：图片路径和描述文字
  - 检查当前文章是否有独立资源目录
  - 构建正确的图片路径
  - 使用 `url_for()` 生成最终链接
  - 返回带 `article-img` 类的 `<img>` 标签

### 2. 添加图片样式
- **文件路径**：`themes/ayerr/source/css/custom.styl`
- **功能**：优化文章图片的显示样式
- **样式内容**：
  - 图片居中显示
  - 最大宽度100%
  - 自动高度
  - 适当的边距和阴影
  - 为 `article-img` 类添加放大光标提示

### 3. 配置说明
- 需要用户在**博客根目录**的 `_config.yml` 中启用：
  ```yaml
  post_asset_folder: true
  marked:
    prependRoot: true
    postAsset: true
  ```

## 预期效果
- 支持 `{% asset_img demo.jpg "图片描述" %}` 标签语法
- 自动处理文章资源文件夹中的图片路径
- 生成带有正确路径和样式的图片标签
- 与主题的图片查看器兼容

## 实施步骤
1. 创建 `asset-image.js` 脚本文件
2. 编辑 `custom.styl` 添加图片样式
3. 提供配置说明给用户

这个实现方案是规范且一劳永逸的，能够为主题添加原生的 `asset_img` 标签支持，优化本地图片路径处理。