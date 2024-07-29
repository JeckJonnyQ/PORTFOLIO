Для создания проекта с нуля со стартовым шаблоном сборщика Vite на React + TS необходимо прописать следующие команды в терминале:

```json
1. npm create vite@latest name-you-project -- --template react-ts
Дальше в терминале в предложенных меню выбрать нужные параметры.
2. npm install
Устанавливаем зависимости.
3. npm run dev
Запуск сервера Vite
```

4. npm install eslint-plugin-react-compiler --save-dev
5. npm install --save-dev --save-exact prettier
   Создаем файл prettierrc.cjs и добавляем в него настройки рпеттира
   module.exports = {
   semi: true,
   singleQuote: true,
   tabWidth: 2,
   trailingComma: "es5",
   printWidth: 120,
   arrowParens: "always",
   };
   Также создаем файл приттир игнор в который добавляем папки, которые приттир не должен просматривать /dist
   node_modules

6. npm i -D prettier eslint-config-prettier eslint-plugin-prettier
   команда что бы преттир отключал настройки еслинта если они противоречат его настройкам.

7. "react-router-dom": "^6.24.1" добавил зависимост для роутинга
8. "sass": "^1.77.6",
   "sass-loader": "^14.2.1",
   добавил в зависимости сасс и сасс-лоудер для работы с препроцессорами
   после чего npm i для установки в проект данных зависимостей

9. Устанавливаю хаски npm install husky --save-dev
   в зависимости и создаю для него папку хаски, в которой файл пре-коммит с командой

# PORTFOLIO/.husky/pre-commit

cd PORTFOLIO
npm run lint для входа в папку хаски а запуска скрипта проверки.

также в скриптах добавляю строку
"prepare": "cd .. && husky PORTFOLIO/.husky"
