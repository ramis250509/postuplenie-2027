// Собирает index.html для локального открытия (app.html + doctype).
// app.html — источник; он же публикуется как артефакт на claude.ai.
// Запуск: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const app = readFileSync(new URL('./app.html', import.meta.url), 'utf8');
const doc = '<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n</head>\n<body>\n' + app + '\n</body>\n</html>\n';
writeFileSync(new URL('./index.html', import.meta.url), doc);
console.log('index.html обновлён');
