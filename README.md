# Тестовое задание на вакансию `Junior frontend developer` в `Lesta Games`
 Ссылка на задание: https://gist.github.com/nonamenix/fc7609de3ebe2642db6324bc962295b2

## Описание проекта
Веб страница, на которой можно посмотреть все корабли игры «Мир Кораблей» с возможностью сортировки, поиска и фильтрации. 

На главной странице можно выбрать категорию кораблей для просмотра или установить подробные фильтры. 
Также присутствует поиск по имени корабля. 
Список выбранных кораблей можно посмотреть в двух режимах - в виде таблицы и в виде сетки с карточками кораблей. 
Отфильтрованные корабли можно дополнительно отсортировать по параметрам кораблей. 
Клик по карточке корабля или по строке таблицы показывает всплывающее окно с подробным описанием выбранного корабля. 

## Использованные технологии
- [Vue 3](https://vuejs.org/) - реактивный фреймворк, основа проекта
- [Vue Apollo](https://apollo.vuejs.org/) - библиотека интеграции Apollo, GraphQL во Vue
- [Pinia](https://pinia.vuejs.org/) - стандартный менеджер состояния для Vue 3
- [Oh, Vue Icons!](https://oh-vue-icons.js.org/) - библиотека иконок
- [Vite](https://vitejs.dev/) - инструментарий автоматизации рабочих процессов внутри проекта
- [Typescript](https://www.typescriptlang.org/) - типизированный JavaScript

## Что можно улучшить и дополнить
- Ленивая загрузка
Можно реализовать ленивую загрузку или отображение по страницам. Но в текущем виде сетевым запросом можно получить только данные сразу по всем кораблям и поэтому полезность ленивой загрузки уже полученных данных небольшая. Текущее количество данных не нагружает страницу радикально, при этом в большинстве сценариев использования отображаются только отфильтрованная часть данных.

- Адаптив
Улучшить адаптивный дизайн для небольших экранов. В текущем виде страница доступна для мобильных устройств, но остаются шероховатости. Не помешало бы добавить использование медиа-запросов. 

- Смена темы оформления
В проекте использована стандартная тёмная минималистская тема шаблона Vite для Vue. Можно добавить переключение на светлую тему.

## Установка
```sh
npm install
```

```sh
npm run dev
```