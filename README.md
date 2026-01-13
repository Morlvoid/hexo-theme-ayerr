<p align="center"><img width="100" src="logo.png" alt="ayerr logo"></p>

<h3 align="center">一个干净且优雅的 Hexo 主题</h3>

<p align="center">
  <a href="https://travis-ci.org/Shen-Yu/hexo-theme-ayer?branch=master" target="_blank" rel="noopener noreferrer">
    <img alt="travis-ci" src="https://travis-ci.org/Shen-Yu/hexo-theme-ayer.svg?branch=master">
  </a>
  <a href="http://standardjs.com" target="_blank" rel="noopener noreferrer">
    <img alt="js-standard-style" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  <br>  
  <a href="https://www.npmjs.com/package/hexo-theme-ayer" target="_blank" rel="noopener noreferrer">
  <img alt="npm" src="https://img.shields.io/npm/dt/hexo-theme-ayer">
  </a>
  <a href="https://shen-yu.gitee.io" target="_blank" rel="noopener noreferrer">
   <img alt="platform" src="https://img.shields.io/badge/platform-PC--ios--android-ff69b4.svg">
   </a>
  <a href="https://gitter.im/hexo-theme-ayer/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge" target="_blank" rel="noopener noreferrer">
    <img alt="Gitter" src="https://badges.gitter.im/Join%20Chat.svg">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/hexo-theme-ayer" target="_blank" rel="noopener noreferrer">
    <img alt="npm version" src="https://img.shields.io/npm/v/hexo-theme-ayer">
  </a> 
 <img alt="language" src="https://img.shields.io/badge/language-ejs--stylus-green.svg">
 <a href="https://github.com/Shen-Yu/hexo-theme-ayer/releases" target="_blank" rel="noopener noreferrer">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Shen-Yu/hexo-theme-ayer?color=b37feb">
  </a>
  <a href="https://github.com/Shen-Yu/hexo-theme-ayer/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img alt="LICENSE" src="https://img.shields.io/badge/LICENSE-SATA-6ccab8">
  </a>
</p>

---

:ocean: ayerr 是一个干净优雅的 Hexo 主题，基于原作者的 Ayer 主题更新并修复了图片显示问题。它包含许多出色的功能，同时支持 `{% asset_img %}` 标签和传统 Markdown 图片语法，非常适合你的博客。

<b>注：收藏本主题请点右上角 Star，谢谢~~ </b>
<b>如果你想给主题添砖加瓦，可以点右上角 Fork，然后给此仓库提交 PR</b>

## 本项目基于原作者的项目更新并加入了图片适配

## Morlvoid更新日志-2026.1.14

- 将英文介绍内容翻译为中文
- **修复了图片显示问题**：
  - 实现了 `{% asset_img %}` 标签支持，支持文章资源图片的正确引用
  - 修复了传统Markdown图片显示问题
  - 修复了图片URL生成逻辑，确保生成正确的绝对路径
  - 处理了外部链接和绝对路径的情况
  - 避免了使用有问题的 `url_for` 辅助函数
  - 为图片添加了合适的CSS类，优化显示样式
- 优化了文章图片的显示样式

![Screenshot](screenshots/hexo-theme-ayer.png)

# ayerr图片显示修复示例

本文详细介绍了 ayerr 主题中可用的图片显示方法，包括两种使用方式和详细的代码范例。

## 1.使用 `{% asset_img %}` 标签

### 语法格式

```markdown
{% asset_img 图片文件名 "图片描述" %}
```

### 代码范例

```
{% asset_img demo.png "这是使用 asset_img 标签的图片" %}
```

### 显示效果

{% asset_img demo.png "这是使用 asset_img 标签的图片" %}

#### 特点

- 专为文章资源文件夹设计
- 自动处理图片路径
- 生成带有 `article-img` 类的图片标签
- 支持带空格的描述文字
- 无需手动拼接图片路径

## 2.使用传统 Markdown 语法

### 语法格式

```
![图片描述](图片文件名)
```

### 代码范例

```
![这是使用传统 Markdown 语法的图片](demo.png)
```

### 显示效果

![这是使用传统 Markdown 语法的图片](E:\Bdowload\morlvoid\source\_posts\demo.png)

特点

- 标准 Markdown 语法，兼容性好
- 简洁易记
- 自动处理文章资源文件夹中的图片
- 支持描述文字

## 3.两种方法的区别

| 方法           | 语法                            | 特点                           | 适用场景             |
| -------------- | ------------------------------- | ------------------------------ | -------------------- |
| asset_img 标签 | `{% asset_img 图片名 "描述" %}` | 专为文章资源设计，自动处理路径 | 推荐使用，兼容性更好 |
| 传统 Markdown  | `![描述](图片名)`               | 标准语法，简洁易记             | 习惯传统语法的用户   |

## 4.注意事项

1. **启用文章资源文件夹**：确保在博客根目录的 `_config.yml` 中启用：

   ```yml
   post_asset_folder: true
   ```

2. **图片存放位置**：将图片放在与文章同名的资源文件夹中，例如：

```
   source/_posts/
   ├── ayerr图片显示修复示例.md
   └── ayerr图片显示修复示例/
       └── demo.png
```

3. **图片尺寸**：建议使用适当尺寸的图片，避免过大影响加载速度
4. **图片格式**：支持常见的图片格式，如 PNG、JPG、GIF 等



## 5.修复说明

本次修复解决了 ayerr 主题中的图片显示问题，主要包括：

- 实现了 `{% asset_img %}` 标签支持
- 修复了传统 Markdown 图片显示问题
- 修复了图片 URL 生成逻辑
- 优化了图片显示样式
- 确保两种图片使用方式都能正常工作

现在，您可以在 ayerr 主题中自由使用两种图片显示方法，轻松添加图片到您的博客文章中。



## 安装

直接从 GitHub 克隆源代码到 themes 目录：

```shell
git clone <your-github-repo-url> themes/ayerr
```

或者手动下载源代码，解压后放入 `themes/ayerr` 目录。

## 启用

修改 `_config.yml` 中的 `theme` 设置为 `ayerr`

```yml
theme: ayerr
```

## 更新

```bash
cd themes/ayerr
git pull
```

## 多语言支持

zh-CN（中文简体） en（English） zh-TW（中文繁体） ja（日本語） es（Español） de（Deutsch） fr（Français） ru（Русский） ko（한국어） vi（Tiếng Việt） nl（Nederlands） no（norsk） pt（Português）

默认语言为英语，如需更改，请修改 Hexo 博客根目录 `_config.yml` 文件中的 `language` 选项。

## 配置

如果您有任何问题，请告诉我。

```yml
# Menu-Sidebar
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  Gallery: http://shenyu-vip.lofter.com
  Travel: /tags/旅行/
  About: /2019/about

# Subtitle and Typing animation
# https://github.com/mattboldt/typed.js
subtitle:
  enable: true
  text: A clean and elegant theme
  text2: It's perfect for your hexo blog
  text3: Have fun! #Supports up to three lines of text
  startDelay: 0
  typeSpeed: 200
  loop: true
  backSpeed: 100
  showCursor: true

# Favicon and sidebar logo
favicon: /favicon.ico
logo: /images/ayer-side.svg

# Cover Setting
# enable: [true|false]；path: [background-image]；logo: [cover-logo-image]
cover:
  enable: true
  path: /images/cover1.jpg # there are some beautiful cover images in Ayer's directory: /source/images, choose your favorite image to replace it.
  logo: /images/ayer.svg

# ProgressBar
progressBar: true

# Boardcast
broadcast:
  enable: true
  type: 2 # 1：custom，2：hitokoto api(https://hitokoto.cn/)
  text: a clean and elegant theme, fast and responsive. # only work in custom mode

# Article Setting
# (Use this to excerpt if article is too long：<!--more-->)
excerpt_link: Read More...
excerpt_all: false

# Copy code button
copy_btn: true
# Share
share_enable: true
# If you are not in China, maybe you prefer to set:false
share_china: true
# share text
share_text: Share
# search text
search_text: Search
# nav text
nav_text:
  page_prev: Prev page
  page_next: Next page
  post_prev: Newer posts
  post_next: Older posts

# Catalog in article
toc: true

# images in the article support click to fullscreen
image_viewer: true

# https://github.com/willin/hexo-wordcount
word_count:
  enable: true
  # only display in article page(not in index page)
  only_article_visit: true

# Reward Setting
# type：0-close reward； 1-only open in article which you have configured reward:true； 2-open in all articles
reward_type: 2
# reward word
reward_wording: "Buy me a cup of coffee~"
# qrcode image path
alipay: /images/alipay.jpg
# qrcode image path
weixin: /images/wechat.jpg

# Copyright
# type：0-close all； 1-only display in article which you have configured copyright: true； 2-all articles
copyright_type: 2

# Search
# https://github.com/theme-next/hexo-generator-searchdb
search: true

# RSS
# leave it empty if you dont' need
rss: /atom.xml

# DarkMode
darkmode: true

# Canvas background style: 0-close，1-moveline
canvas_bg: 0

# Custom mouse pointer，replace /images/mouse.cur
mouse:
  enable: false
  path: /images/mouse.cur

# Click effect: 0-close，1-love，2-boom，3-particles
click_effect: 0

# articleWidth and sidebarWidth
layout:
  article_width: 80rem
  sidebar_width: 8rem

# GitHub Ribbons(https://github.blog/2008-12-19-github-ribbons/)
github:
  # (Set false if you don't need)
  enable: false
  url: <your-github-repo-url>

# pv&uv statistics
busuanzi:
  enable: true

# cnzz statistics
cnzz:
  enable: true
  url: #

# Google Analytics
google_analytics: ""
# Baidu Analytics
baidu_analytics: ""

# Mathjax Support
mathjax: true

# Katex Support
# note: need change the hexo-renderer，npm un hexo-renderer-marked -S && npm i hexo-renderer-markdown-it-katex -S
katex:
  enable: false # true
  allpost: true
  copy_tex: false

# since year
since: 2019

# only for chinese website
# ICP
icp:
  enable: false
  url: "http://www.beian.miit.gov.cn/"
  text: "浙ICP备88888888"
# gongan
gongan:
  enable: false
  img: /images/beian.png
  url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=01234567890123" #link
  text: "浙公网安备01234567890123号"

# friends link
friends_link:
  ayerr: #site name
    # site url
    url: <your-github-repo-url>
    # site icon(optional)
    img: /images/ayer.png
  Hexo:
    url: https://hexo.io
    img: https://i.loli.net/2020/09/07/UYGzjo7h68CRWny.png

# Comment：1、Valine (recommended)；2、Gitalk；3、Twikoo；4、MiniValine
# You can close the comment section on one of your posts by marking `comments: false` in front-matter.

# 1、Valine [A fast, simple & powerful comment system](https://github.com/xCss/Valine)
# You need create leancloud account first (https://console.leancloud.app), then put the id|key in below.
leancloud:
  enable: true
  app_id: #
  app_key: #
# Valine Setting
valine:
  enable: true
  avatar: mp # (https://valine.js.org/avatar.html)
  placeholder: Add some comments to my article~ # placeholder

# 2、Gitalk(https://github.com/gitalk/gitalk)
gitalk:
  enable: false # true
  clientID: # GitHub Application Client ID
  clientSecret: # Client Secret
  repo: # Repository name
  owner: # GitHub ID
  admin: # GitHub ID

# 3、Twikoo(https://github.com/imaegoo/twikoo)
twikoo:
  enable: false
  envId: #


# advertisement
# if there is an "ad" word in photo or url，it may blocked by adblock or any other browser extensions
ads:
  ad_1:
    title: vultr优惠vps
    img: https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/img/vultr.png
    url: https://www.vultr.com/?ref=8630075
    width: 300
  ad_2:
    title: 云服务器全球购低至2折
    img: https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/img/ten_2.jpg
    url: https://curl.qcloud.com/kvO7hb43
    width: 300

# encrypt settings
lock:
  enable: false
  password: 123456
```

## 插件

- [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)（用于本地搜索）

  ```yml
  $ npm install hexo-generator-searchdb --save
  ```

  然后在 Hexo 的配置文件 `_config.yml` 中添加插件配置（注意：不是主题的配置文件）：

  ```yml
  # Hexo-generator-search
  search:
    path: search.xml
    field: post
    format: html
  ```

- [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)（用于 RSS）

  ```yml
  $ npm install hexo-generator-feed --save
  ```

  然后在 Hexo 的配置文件 `_config.yml` 中添加插件配置（注意：不是主题的配置文件）：

  ```yml
  feed:m
      type: atom
      path: atom.xml
      limit: 20
      hub:
      content:
      content_limit: 140
      content_limit_delim: ' '
      order_by: -date
  ```

- [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)（用于文章置顶）

  ```bash
  $ npm uninstall hexo-generator-index --save
  $ npm install hexo-generator-index-pin-top --save
  ```

## 分类页

```bash
  hexo new page categories
```

然后将以下代码粘贴到文件：/source/categories/index.md

```md
---
title: categories
type: categories
layout: "categories"
---
```

## 标签页

与分类页操作相同。

## 友链页

```bash
hexo new page friends
```

然后将以下代码粘贴到文件：/source/friends/index.md

```md
---
title: friends
type: friends
layout: "friends"
---
```

然后在 `_config.yml` 中编辑 `friends_link` 配置。

## 图片使用

### 1. 使用 `{% asset_img %}` 标签

```md
{% asset_img demo.png "图片描述" %}
```

### 2. 使用传统 Markdown 语法

```md
![图片描述](demo.png)
```

### 修复说明

修复后，两种方式都会生成正确的图片 URL，确保图片正常显示。修复内容包括：

- 修复了 `{% asset_img %}` 标签支持
- 修复了传统 Markdown 图片显示问题
- 修复了图片 URL 生成逻辑
- 优化了图片显示样式

## 相册

需要在 Markdown 文件的头部写入，这不是一个很好的写法，希望能在 GitHub 上找到更好的写法。

```md
---
title: Gallery

albums: [["img_url", "img_caption"], ["img_url", "img_caption"]]
---
```

## 文章目录

使用 Tocbot 解析内容中的标题标签（h1~h6）并插入目录。

- ayerr/\_config.yml

  ```bash
  # 文章目录
  toc: true
  ```

- 如果在 ayerr/\_config.yml 中开启了 Toc，那么 Tocbot 会在每个博客解析内容的标题标签中生成 Toc 文章目录，但并非所有博客都需要 Toc，因此可以在 markdown 的 Front-matter 部分关闭：

  ```md
  ---
  no_toc: true
  ---
  ```

---

<br/>

## 许可证

ayerr 主题基于原作者的 Ayer 主题，采用 <a rel="license" href="LICENSE">SATA-License</a> 许可证。

SATA 许可证的基本理念是，当使用采用 SATA 许可证的项目时，人们应该给该项目点赞/加星，并感谢作者。
