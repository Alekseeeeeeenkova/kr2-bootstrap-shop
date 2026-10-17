# Volley.Point — Bootstrap

## Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap».

## Описание

Учебный многостраничный сайт интернет-магазина товаров для волейбола,
разработанный с использованием Bootstrap 5.

## Практическая работа 9

Выполнено:

- создан проект `kr2-bootstrap-shop`;
- подключён Bootstrap через CDN;
- подключён `css/custom.css`;
- создана главная страница `index.html`;
- шапка с Bootstrap-навигацией (`navbar`);
- hero-блок на Bootstrap-сетке;
- блок преимуществ на сетке;
- сетка популярных товаров;
- подвал страницы.

## Используемые технологии

- HTML;
- Bootstrap 5.3;
- CSS;
- Git;
- GitHub.

## Структура проекта
kr2-bootstrap-shop/
├── index.html
├── css/
│ └── custom.css
├── images/
├── README.md
└── .gitignore

## Практическая работа 10

Выполнено:

- созданы страницы `catalog.html`, `product.html`, `order.html`;
- единая Bootstrap-навигация (`navbar`) на всех страницах;
- компонент `card` для карточек товаров;
- кнопки `btn`, `btn-primary`, `btn-outline-primary`;
- значки `badge` для меток («Новинка», «Хит», «Скидка»);
- сообщения `alert`;
- модальное окно `modal` для быстрой заявки;
- форма заявки с `form-control`, `form-select`, `input-group`, `form-check`;
- компонент `accordion` на странице товара.

## Структура проекта
kr2-bootstrap-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── css/
│ └── custom.css
├── images/
├── README.md
└── .gitignore

## Практическая работа 11

Проект подготовлен к сдаче КР №2.

**Самостоятельные доработки:**
- Добавлен дополнительный Bootstrap-компонент `carousel` (карусель) на главную страницу.
- Добавлены 4 страницы (`index`, `catalog`, `product`, `order`).
- Улучшена визуальная целостность за счёт utility-классов Bootstrap (`shadow-sm`, `bg-light`, `fw-bold`, `text-muted` и др.).
- Адаптивность проверена через DevTools (ширины 375px, 768px, 1024px).

**Использованные Bootstrap-компоненты:**
- `navbar` (навигация)
- `card` (карточки товаров)
- `btn` (кнопки)
- `badge` (метки «Новинка», «Хит», «Скидка»)
- `alert` (сообщения)
- `modal` (модальное окно заявки)
- `accordion` (частые вопросы)
- `carousel` (карусель на главной)
- `form-control`, `form-select`, `input-group`, `form-check` (форма)
- `breadcrumb` (хлебные крошки)
- `table` (характеристики)

**Способ подключения Bootstrap:** CDN (jsDelivr).