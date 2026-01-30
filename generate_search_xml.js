#!/usr/bin/env node

/**
 * 自动将 search.json 转换为 search.xml 的脚本
 * 用于确保博客同时拥有两种格式的搜索文件
 */

const fs = require('fs');
const path = require('path');

// 定义文件路径
const publicDir = path.join(__dirname, 'public');
const searchJsonPath = path.join(publicDir, 'search.json');
const searchXmlPath = path.join(publicDir, 'search.xml');

// 检查 search.json 文件是否存在
if (!fs.existsSync(searchJsonPath)) {
    console.error('❌ 错误: search.json 文件不存在');
    console.error('请先运行 hexo generate 生成搜索文件');
    process.exit(1);
}

try {
    // 读取 search.json 文件
    const searchData = JSON.parse(fs.readFileSync(searchJsonPath, 'utf8'));

    // 生成 XML 格式
    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<search>\n';

    searchData.forEach(item => {
        xmlContent += '  <entry>\n';
        xmlContent += `    <title>${escapeXml(item.title || 'Untitled')}</title>\n`;
        xmlContent += `    <content>${escapeXml(item.content || '')}</content>\n`;
        xmlContent += `    <url>${escapeXml(item.url || '')}</url>\n`;
        xmlContent += '  </entry>\n';
    });

    xmlContent += '</search>';

    // 写入 search.xml 文件
    fs.writeFileSync(searchXmlPath, xmlContent, 'utf8');

    console.log('✅ 成功: search.xml 文件已生成');
    console.log(`📁 输出路径: ${searchXmlPath}`);
    console.log(`📊 包含 ${searchData.length} 个条目`);

} catch (error) {
    console.error('❌ 错误: 生成 search.xml 时出现问题');
    console.error(error.message);
    process.exit(1);
}

/**
 * 转义 XML 特殊字符并过滤无效字符
 */
function escapeXml(unsafe) {
    if (!unsafe) return '';
    // 首先过滤掉所有无效的XML字符
    let safe = unsafe
        // 移除所有控制字符，只保留制表符、换行符和回车符
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
        // 转义XML特殊字符
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    return safe;
}