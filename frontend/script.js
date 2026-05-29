const demoProducts = [
  {
    id: 1,
    category: "electronics",
    price: 129,
    rating: 4.8,
    reviews: 328,
    badge: "popular",
    stock: 24,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    name: { en: "Sony WH-CH720N Wireless Headphones", ru: "Беспроводные наушники Sony WH-CH720N" },
    description: {
      en: "Lightweight wireless headphones with active noise cancelling, rich bass, and all-day battery life.",
      ru: "Легкие беспроводные наушники с активным шумоподавлением, насыщенным басом и батареей на весь день."
    }
  },
  {
    id: 2,
    category: "electronics",
    price: 249,
    rating: 4.9,
    reviews: 214,
    badge: "new",
    stock: 18,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    name: { en: "Apple Watch Series Style Smart Watch", ru: "Смарт-часы в стиле Apple Watch Series" },
    description: {
      en: "A polished smartwatch with health tracking, notifications, water resistance, and a crisp always-on display.",
      ru: "Стильные смарт-часы с отслеживанием здоровья, уведомлениями, защитой от воды и четким постоянно активным экраном."
    }
  },
  {
    id: 3,
    category: "fashion",
    price: 96,
    rating: 4.7,
    reviews: 187,
    badge: "sale",
    stock: 31,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    name: { en: "Nike Air Zoom Running Shoes", ru: "Беговые кроссовки Nike Air Zoom" },
    description: {
      en: "Responsive running shoes with breathable mesh, cushioned soles, and a bright athletic profile.",
      ru: "Беговые кроссовки с отзывчивой амортизацией, дышащей сеткой и ярким спортивным силуэтом."
    }
  },
  {
    id: 4,
    category: "home",
    price: 74,
    rating: 4.6,
    reviews: 96,
    badge: "new",
    stock: 16,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    name: { en: "Oak Minimalist Lounge Chair", ru: "Минималистичное кресло из дуба" },
    description: {
      en: "A compact accent chair with a warm oak frame and soft textured seat for calm interiors.",
      ru: "Компактное акцентное кресло с теплым дубовым каркасом и мягким фактурным сиденьем для спокойных интерьеров."
    }
  },
  {
    id: 5,
    category: "beauty",
    price: 42,
    rating: 4.5,
    reviews: 143,
    badge: "popular",
    stock: 38,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    name: { en: "HydraGlow Skincare Set", ru: "Набор ухода HydraGlow" },
    description: {
      en: "A clean daily skincare trio with cleanser, serum, and cream for hydrated, fresh-looking skin.",
      ru: "Ежедневный набор ухода из очищающего средства, сыворотки и крема для увлажненной и свежей кожи."
    }
  },
  {
    id: 6,
    category: "electronics",
    price: 189,
    rating: 4.7,
    reviews: 174,
    badge: "sale",
    stock: 12,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    name: { en: "AirPods Pro Wireless Earbuds", ru: "Беспроводные наушники AirPods Pro" },
    description: {
      en: "Compact earbuds with immersive sound, comfortable tips, and adaptive noise control for travel and work.",
      ru: "Компактные наушники с объемным звуком, удобными амбушюрами и адаптивным шумоподавлением для поездок и работы."
    }
  },
  {
    id: 7,
    category: "fashion",
    price: 118,
    rating: 4.6,
    reviews: 119,
    badge: "popular",
    stock: 27,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    name: { en: "Classic Leather Biker Jacket", ru: "Классическая кожаная байкерская куртка" },
    description: {
      en: "A structured black leather jacket with clean hardware, sharp lines, and everyday durability.",
      ru: "Черная кожаная куртка с аккуратной фурнитурой, четкими линиями и прочностью на каждый день."
    }
  },
  {
    id: 8,
    category: "home",
    price: 58,
    rating: 4.4,
    reviews: 84,
    badge: "sale",
    stock: 42,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=80",
    name: { en: "Nordic Ceramic Table Lamp", ru: "Скандинавская керамическая настольная лампа" },
    description: {
      en: "A warm ceramic lamp with a soft shade that adds balanced light to bedrooms and workspaces.",
      ru: "Теплая керамическая лампа с мягким абажуром, добавляющая сбалансированный свет в спальню или рабочее место."
    }
  },
  {
    id: 9,
    category: "sports",
    price: 34,
    rating: 4.6,
    reviews: 202,
    badge: "new",
    stock: 55,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=80",
    name: { en: "EcoGrip Yoga Mat", ru: "Коврик для йоги EcoGrip" },
    description: {
      en: "A non-slip fitness mat with supportive cushioning for yoga, stretching, and home workouts.",
      ru: "Нескользящий коврик с комфортной амортизацией для йоги, растяжки и домашних тренировок."
    }
  },
  {
    id: 10,
    category: "electronics",
    price: 899,
    rating: 4.9,
    reviews: 91,
    badge: "popular",
    stock: 8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    name: { en: "MacBook Air 13-inch Laptop", ru: "Ноутбук MacBook Air 13 дюймов" },
    description: {
      en: "A thin and quiet laptop with a vivid display, long battery life, and fast performance for daily work.",
      ru: "Тонкий и тихий ноутбук с ярким экраном, долгой работой от батареи и высокой скоростью для повседневных задач."
    }
  },
  {
    id: 11,
    category: "fashion",
    price: 64,
    rating: 4.3,
    reviews: 77,
    badge: "new",
    stock: 23,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    name: { en: "Pebbled Leather Tote Bag", ru: "Сумка-тоут из зернистой кожи" },
    description: {
      en: "A refined everyday tote with roomy storage, comfortable handles, and a structured silhouette.",
      ru: "Элегантная повседневная сумка-тоут с вместительным отделением, удобными ручками и четкой формой."
    }
  },
  {
    id: 12,
    category: "home",
    price: 39,
    rating: 4.5,
    reviews: 132,
    badge: "popular",
    stock: 46,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    name: { en: "Soft Cotton Throw Blanket", ru: "Мягкий хлопковый плед" },
    description: {
      en: "A cozy cotton throw blanket with a textured weave for sofas, reading corners, and guest rooms.",
      ru: "Уютный хлопковый плед с фактурным плетением для дивана, уголка для чтения или гостевой комнаты."
    }
  },
  {
    id: 13,
    category: "beauty",
    price: 31,
    rating: 4.4,
    reviews: 68,
    badge: "sale",
    stock: 36,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    name: { en: "Velvet Matte Makeup Palette", ru: "Матовая палетка макияжа Velvet" },
    description: {
      en: "A versatile makeup palette with soft matte shades for natural, evening, and editorial looks.",
      ru: "Универсальная палетка с мягкими матовыми оттенками для естественного, вечернего и выразительного макияжа."
    }
  },
  {
    id: 14,
    category: "sports",
    price: 72,
    rating: 4.8,
    reviews: 155,
    badge: "popular",
    stock: 29,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    name: { en: "Adjustable Dumbbell Pair", ru: "Пара регулируемых гантелей" },
    description: {
      en: "Space-saving adjustable dumbbells for strength training, circuits, and progressive home workouts.",
      ru: "Компактные регулируемые гантели для силовых тренировок, круговых занятий и прогресса дома."
    }
  },
  {
    id: 15,
    category: "electronics",
    price: 79,
    rating: 4.6,
    reviews: 241,
    badge: "sale",
    stock: 34,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
    name: { en: "JBL Portable Bluetooth Speaker", ru: "Портативная Bluetooth-колонка JBL" },
    description: {
      en: "A rugged portable speaker with punchy sound, splash resistance, and easy wireless pairing.",
      ru: "Прочная портативная колонка с мощным звуком, защитой от брызг и простым беспроводным подключением."
    }
  },
  {
    id: 16,
    category: "sports",
    price: 54,
    rating: 4.5,
    reviews: 112,
    badge: "new",
    stock: 22,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
    name: { en: "Adidas Ultraboost Training Shoes", ru: "Тренировочные кроссовки Adidas Ultraboost" },
    description: {
      en: "Supportive training shoes with responsive cushioning for gym sessions, walking, and light runs.",
      ru: "Удобные тренировочные кроссовки с отзывчивой амортизацией для зала, прогулок и легкого бега."
    }
  },
  {
    id: 17,
    category: "beauty",
    price: 27,
    rating: 4.2,
    reviews: 59,
    badge: "new",
    stock: 44,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
    name: { en: "Rose Ritual Perfume Mist", ru: "Парфюмированный мист Rose Ritual" },
    description: {
      en: "A delicate fragrance mist with rose, pear, and musk notes for a fresh everyday finish.",
      ru: "Нежный ароматический мист с нотами розы, груши и мускуса для свежего ежедневного образа."
    }
  },
  {
    id: 18,
    category: "home",
    price: 148,
    rating: 4.7,
    reviews: 101,
    badge: "popular",
    stock: 14,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    name: { en: "Modern Fabric Sofa", ru: "Современный тканевый диван" },
    description: {
      en: "A clean-lined fabric sofa with supportive cushions and compact proportions for modern apartments.",
      ru: "Лаконичный тканевый диван с удобными подушками и компактными пропорциями для современных квартир."
    }
  }
];

const demoCategories = [
  { id: "all", icon: "All", name: { en: "All products", ru: "Все товары" }, text: { en: "Full collection", ru: "Вся коллекция" } },
  { id: "electronics", icon: "Tech", name: { en: "Electronics", ru: "Электроника" }, text: { en: "Audio, watches, laptops", ru: "Аудио, часы, ноутбуки" } },
  { id: "fashion", icon: "Wear", name: { en: "Fashion", ru: "Мода" }, text: { en: "Shoes, bags, jackets", ru: "Обувь, сумки, куртки" } },
  { id: "home", icon: "Home", name: { en: "Home", ru: "Дом" }, text: { en: "Furniture and decor", ru: "Мебель и декор" } },
  { id: "beauty", icon: "Care", name: { en: "Beauty", ru: "Красота" }, text: { en: "Care and makeup", ru: "Уход и макияж" } },
  { id: "sports", icon: "Fit", name: { en: "Sports", ru: "Спорт" }, text: { en: "Training essentials", ru: "Все для тренировок" } }
];

let products = [...demoProducts];
let categories = [...demoCategories];
let backendCategories = [];
let backendProducts = [];

const API_BASE = "http://localhost:8080";
const FILE_API_BASE = "http://localhost:8081";
const defaultImage = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80";

const translations = {
  en: {
    nav: { home: "Home", categories: "Categories", products: "Products", admin: "Admin", support: "Support", cart: "Cart", signIn: "Sign in", account: "Account" },
    hero: {
      eyebrow: "Smart shopping, better living",
      title: "NOVA MARKET for premium tech-led shopping.",
      subtitle: "Discover a futuristic marketplace for electronics, fashion, home, sport, and beauty essentials with a clean startup-grade experience.",
      shop: "Shop NOVA deals",
      explore: "Explore categories",
      rating: "Average rating",
      delivery: "Fast dispatch",
      products: "Demo products",
      cardOne: "Audio deals",
      cardTwo: "Smart tech",
      cardThree: "Active style"
    },
    categories: { eyebrow: "Browse faster", title: "Shop by category" },
    products: { eyebrow: "Popular now", title: "Featured products", count: "{count} products shown" },
    filters: {
      searchLabel: "Search",
      searchPlaceholder: "Search products",
      categoryLabel: "Category",
      sortLabel: "Sort",
      all: "All categories",
      featured: "Featured",
      priceAsc: "Price: low to high",
      priceDesc: "Price: high to low",
      ratingDesc: "Highest rating"
    },
    buttons: { addToCart: "Add to cart", details: "Details", viewSimilar: "View similar", saveProduct: "Add product", updateProduct: "Save changes", clearForm: "Clear", uploadPhoto: "Upload photo" },
    badges: { new: "New", sale: "Sale", popular: "Popular", top: "Top sales", hot: "Trending" },
    cart: { eyebrow: "Your selection", title: "Shopping cart", subtotal: "Subtotal", checkout: "Checkout", remove: "Remove" },
    empty: {
      productsTitle: "No products found",
      productsText: "Try another search, category, or sorting option.",
      cartTitle: "Your cart is empty",
      cartText: "Add products to see them here."
    },
    modal: { inStock: "{count} in stock", reviews: "{count} reviews" },
    toast: {
      added: "{name} added to cart",
      removed: "{name} removed from cart",
      checkout: "Checkout is ready. Cart total: {total}",
      similar: "Showing similar products in {category}",
      login: "Welcome back, {name}",
      register: "Account created for {name}",
      logout: "You are signed out",
      apiOnline: "Backend connected",
      apiOffline: "Backend is offline, demo products shown",
      productCreated: "Product added to backend",
      uploadReady: "Photo uploaded to file-service",
      adminOnly: "Sign in as ADMIN to manage products",
      fileOffline: "File service is not running. Start market-file-service on port 8081."
    },
    auth: { title: "Welcome to NOVA", subtitle: "Use email and password from the backend", login: "Login", register: "Register", fullName: "Full name", email: "Email", password: "Password", logout: "Logout" },
    admin: {
      eyebrow: "Admin workspace",
      title: "Product control",
      welcome: "Welcome back, {name}",
      hint: "A focused control room for products, stock, media and storefront publishing.",
      marketStatus: "Market API",
      filesStatus: "File service",
      quickCreate: "Create product",
      quickCreateText: "Add a new item with photo and stock.",
      quickCatalog: "Manage catalog",
      quickCatalogText: "Edit price, stock, category or delete items.",
      quickOverview: "Overview",
      quickOverviewText: "Users, products and stock summary.",
      metricUsers: "Users",
      metricProducts: "Products",
      metricStock: "Total stock",
      metricCategories: "Categories",
      productDetails: "Product details",
      inventory: "Inventory",
      media: "Media",
      name: "Product name",
      description: "Description",
      price: "Price",
      stock: "Stock",
      badge: "Product label",
      category: "Category",
      photo: "Photo",
      uploadTitle: "Choose product image",
      uploadHint: "JPG, PNG or WebP up to 20MB",
      previewCategory: "Category",
      previewTitle: "Product preview",
      previewEmpty: "Fill the form to see how the product will look in the catalog.",
      previewStock: "Stock: 0",
      catalogEyebrow: "Catalog",
      catalogTitle: "Products in system",
      refresh: "Refresh",
      tableProduct: "Product",
      tableCategory: "Category",
      tablePrice: "Price",
      tableStock: "Stock",
      tableBadge: "Label",
      tableStatus: "Status",
      tableActions: "Actions",
      edit: "Edit",
      delete: "Delete",
      active: "Active",
      lowStock: "Low stock",
      noProducts: "No products yet"
    },
    status: { online: "Backend online", offline: "Demo mode" },
    footer: {
      text: "NOVA MARKET is a premium static marketplace experience inspired by smart shopping, better living.",
      shop: "Shop",
      featured: "Featured",
      categories: "Categories",
      deals: "Daily deals",
      help: "Help",
      shipping: "Shipping",
      returns: "Returns",
      contact: "Contact",
      newsletter: "Newsletter",
      newsletterText: "Get updates about new drops and seasonal offers.",
      emailPlaceholder: "Email address",
      join: "Join"
    }
  },
  ru: {
    nav: { home: "Главная", categories: "Категории", products: "Товары", admin: "Админка", support: "Поддержка", cart: "Корзина", signIn: "Войти", account: "Аккаунт" },
    hero: {
      eyebrow: "Умный шопинг, лучшая жизнь",
      title: "NOVA MARKET для премиального технологичного шопинга.",
      subtitle: "Откройте футуристичный маркетплейс электроники, моды, товаров для дома, спорта и красоты с чистым startup-level интерфейсом.",
      shop: "Смотреть NOVA-предложения",
      explore: "Открыть категории",
      rating: "Средняя оценка",
      delivery: "Быстрая отправка",
      products: "Демо-товаров",
      cardOne: "Предложения аудио",
      cardTwo: "Умная техника",
      cardThree: "Активный стиль"
    },
    categories: { eyebrow: "Быстрый обзор", title: "Покупайте по категориям" },
    products: { eyebrow: "Популярно сейчас", title: "Избранные товары", count: "Показано товаров: {count}" },
    filters: {
      searchLabel: "Поиск",
      searchPlaceholder: "Искать товары",
      categoryLabel: "Категория",
      sortLabel: "Сортировка",
      all: "Все категории",
      featured: "Избранное",
      priceAsc: "Цена: по возрастанию",
      priceDesc: "Цена: по убыванию",
      ratingDesc: "Самый высокий рейтинг"
    },
    buttons: { addToCart: "В корзину", details: "Подробнее", viewSimilar: "Похожие товары", saveProduct: "Добавить товар", updateProduct: "Сохранить", clearForm: "Очистить", uploadPhoto: "Загрузить фото" },
    badges: { new: "Новинка", sale: "Скидка", popular: "Популярно", top: "Топ продаж", hot: "Актуально" },
    cart: { eyebrow: "Ваш выбор", title: "Корзина", subtotal: "Итого", checkout: "Оформить", remove: "Удалить" },
    empty: {
      productsTitle: "Товары не найдены",
      productsText: "Попробуйте изменить поиск, категорию или сортировку.",
      cartTitle: "Ваша корзина пуста",
      cartText: "Добавьте товары, чтобы увидеть их здесь."
    },
    modal: { inStock: "В наличии: {count}", reviews: "Отзывов: {count}" },
    toast: {
      added: "{name} добавлен в корзину",
      removed: "{name} удален из корзины",
      checkout: "Оформление готово. Сумма корзины: {total}",
      similar: "Показаны похожие товары в категории «{category}»",
      login: "С возвращением, {name}",
      register: "Аккаунт создан: {name}",
      logout: "Вы вышли из аккаунта",
      apiOnline: "Backend подключен",
      apiOffline: "Backend выключен, показаны демо-товары",
      productCreated: "Товар добавлен в backend",
      uploadReady: "Фото загружено в file-service",
      adminOnly: "Войдите как ADMIN, чтобы управлять товарами",
      fileOffline: "File-service не запущен. Запустите market-file-service на порту 8081."
    },
    auth: { title: "Добро пожаловать в NOVA", subtitle: "Email и пароль работают через backend", login: "Войти", register: "Регистрация", fullName: "Полное имя", email: "Email", password: "Пароль", logout: "Выйти" },
    admin: {
      eyebrow: "Админ-панель",
      title: "Управление товарами",
      welcome: "Добро пожаловать, {name}",
      hint: "Отдельная рабочая зона для товаров, остатков, медиа и публикации на витрину.",
      marketStatus: "Market API",
      filesStatus: "File service",
      quickCreate: "Создать товар",
      quickCreateText: "Добавить товар с фото и остатком.",
      quickCatalog: "Управлять каталогом",
      quickCatalogText: "Менять цену, остаток, категорию или удалять.",
      quickOverview: "Обзор",
      quickOverviewText: "Пользователи, товары и остатки.",
      metricUsers: "Пользователи",
      metricProducts: "Товары",
      metricStock: "Остатки",
      metricCategories: "Категории",
      productDetails: "Описание товара",
      inventory: "Цена и остаток",
      media: "Медиа",
      name: "Название товара",
      description: "Описание",
      price: "Цена",
      stock: "Остаток",
      badge: "Метка товара",
      category: "Категория",
      photo: "Фото",
      uploadTitle: "Выберите изображение товара",
      uploadHint: "JPG, PNG или WebP до 20MB",
      previewCategory: "Категория",
      previewTitle: "Превью товара",
      previewEmpty: "Заполните форму, чтобы увидеть карточку товара перед публикацией.",
      previewStock: "Остаток: 0",
      catalogEyebrow: "Каталог",
      catalogTitle: "Товары в системе",
      refresh: "Обновить",
      tableProduct: "Товар",
      tableCategory: "Категория",
      tablePrice: "Цена",
      tableStock: "Остаток",
      tableBadge: "Метка",
      tableStatus: "Статус",
      tableActions: "Действия",
      edit: "Изменить",
      delete: "Удалить",
      active: "Активен",
      lowStock: "Мало",
      noProducts: "Товаров пока нет"
    },
    status: { online: "Backend online", offline: "Демо-режим" },
    footer: {
      text: "NOVA MARKET — премиальный статический маркетплейс в стиле умного шопинга и лучшей жизни.",
      shop: "Магазин",
      featured: "Избранное",
      categories: "Категории",
      deals: "Предложения дня",
      help: "Помощь",
      shipping: "Доставка",
      returns: "Возврат",
      contact: "Контакты",
      newsletter: "Рассылка",
      newsletterText: "Получайте новости о новинках и сезонных предложениях.",
      emailPlaceholder: "Email адрес",
      join: "Вступить"
    }
  }
};

const state = {
  language: localStorage.getItem("novamart-language") || "en",
  theme: localStorage.getItem("novamart-theme") || "light",
  cart: JSON.parse(localStorage.getItem("novamart-cart") || "[]"),
  search: "",
  category: "all",
  sort: "featured",
  activeModalId: null,
  editingProductId: null,
  adminStats: { users: 0, products: 0, categories: 0, orders: 0, stock: 0 },
  user: JSON.parse(localStorage.getItem("novamart-user") || "null"),
  apiOnline: false
};

const els = {
  loader: document.getElementById("pageLoader"),
  navLinks: document.getElementById("navLinks"),
  menuToggle: document.getElementById("menuToggle"),
  themeToggle: document.getElementById("themeToggle"),
  languageToggle: document.getElementById("languageToggle"),
  categoryGrid: document.getElementById("categoryGrid"),
  productGrid: document.getElementById("productGrid"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  sortSelect: document.getElementById("sortSelect"),
  resultCount: document.getElementById("resultCount"),
  noProducts: document.getElementById("noProducts"),
  cartOpen: document.getElementById("cartOpen"),
  cartClose: document.getElementById("cartClose"),
  cartOverlay: document.getElementById("cartOverlay"),
  cartPanel: document.getElementById("cartPanel"),
  cartItems: document.getElementById("cartItems"),
  emptyCart: document.getElementById("emptyCart"),
  cartCount: document.getElementById("cartCount"),
  cartTotal: document.getElementById("cartTotal"),
  checkoutButton: document.getElementById("checkoutButton"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  productModal: document.getElementById("productModal"),
  modalClose: document.getElementById("modalClose"),
  modalImage: document.getElementById("modalImage"),
  modalBadge: document.getElementById("modalBadge"),
  modalCategory: document.getElementById("modalCategory"),
  modalName: document.getElementById("modalName"),
  modalRating: document.getElementById("modalRating"),
  modalDescription: document.getElementById("modalDescription"),
  modalPrice: document.getElementById("modalPrice"),
  modalStock: document.getElementById("modalStock"),
  modalAdd: document.getElementById("modalAdd"),
  modalSimilar: document.getElementById("modalSimilar"),
  toastStack: document.getElementById("toastStack"),
  adminNav: document.getElementById("adminNav"),
  authOpen: document.getElementById("authOpen"),
  authModal: document.getElementById("authModal"),
  authBackdrop: document.getElementById("authBackdrop"),
  authClose: document.getElementById("authClose"),
  authTabs: document.getElementById("authTabs"),
  loginForm: document.getElementById("loginForm"),
  registerForm: document.getElementById("registerForm"),
  logoutButton: document.getElementById("logoutButton"),
  profileCard: document.getElementById("profileCard"),
  profileAvatar: document.getElementById("profileAvatar"),
  profileName: document.getElementById("profileName"),
  profileEmail: document.getElementById("profileEmail"),
  profileRole: document.getElementById("profileRole"),
  userBadge: document.getElementById("userBadge"),
  backendStatus: document.getElementById("backendStatus"),
  manageSection: document.getElementById("manage"),
  adminWelcomeTitle: document.getElementById("adminWelcomeTitle"),
  adminRolePill: document.getElementById("adminRolePill"),
  productForm: document.getElementById("productForm"),
  productNameInput: document.getElementById("productNameInput"),
  productDescriptionInput: document.getElementById("productDescriptionInput"),
  productPriceInput: document.getElementById("productPriceInput"),
  productStockInput: document.getElementById("productStockInput"),
  productCategoryInput: document.getElementById("productCategoryInput"),
  productBadgeInput: document.getElementById("productBadgeInput"),
  productPhotoInput: document.getElementById("productPhotoInput"),
  productSubmitButton: document.getElementById("productSubmitButton"),
  productResetButton: document.getElementById("productResetButton"),
  photoFileName: document.getElementById("photoFileName"),
  adminPreviewImage: document.getElementById("adminPreviewImage"),
  adminPreviewCategory: document.getElementById("adminPreviewCategory"),
  adminPreviewName: document.getElementById("adminPreviewName"),
  adminPreviewDescription: document.getElementById("adminPreviewDescription"),
  adminPreviewPrice: document.getElementById("adminPreviewPrice"),
  adminPreviewStock: document.getElementById("adminPreviewStock"),
  metricUsers: document.getElementById("metricUsers"),
  metricProducts: document.getElementById("metricProducts"),
  metricStock: document.getElementById("metricStock"),
  metricCategories: document.getElementById("metricCategories"),
  adminProductRows: document.getElementById("adminProductRows"),
  refreshAdminButton: document.getElementById("refreshAdminButton")
};

function t(path, params = {}) {
  const value = path.split(".").reduce((acc, key) => acc?.[key], translations[state.language]) || path;
  return Object.entries(params).reduce((text, [key, val]) => text.replaceAll(`{${key}}`, val), value);
}

function money(value) {
  return new Intl.NumberFormat(state.language === "ru" ? "ru-RU" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.name[state.language] || id;
}

function isAdmin() {
  return state.user?.role === "ADMIN";
}

function adminHeaders() {
  return {
    "X-User-Role": state.user?.role || "",
    "X-User-Email": state.user?.email || ""
  };
}

function friendlyError(error) {
  const message = String(error?.message || error || "");
  if (message === "Failed to fetch" || message === "Load failed") return t("toast.fileOffline");
  if (message.includes("Admin account is required") || message.includes("403")) return t("toast.adminOnly");
  return message || "Request failed";
}

function persist() {
  localStorage.setItem("novamart-language", state.language);
  localStorage.setItem("novamart-theme", state.theme);
  localStorage.setItem("novamart-cart", JSON.stringify(state.cart));
  if (state.user) localStorage.setItem("novamart-user", JSON.stringify(state.user));
  else localStorage.removeItem("novamart-user");
}

function translateStaticText() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  els.languageToggle.textContent = state.language.toUpperCase();
}


function localText(value) {
  return typeof value === "string" ? { en: value, ru: value } : value;
}

function mapBackendProduct(product) {
  const firstPhoto = product.photos?.[0];
  const categorySlug = product.category?.slug || "electronics";
  return {
    id: product.id,
    category: categorySlug,
    price: Number(product.price),
    rating: 4.8,
    reviews: Math.max(24, product.id * 17),
    stock: product.stock,
    badge: product.badge || "new",
    image: firstPhoto?.url || defaultImage,
    name: localText(product.name),
    description: localText(product.description)
  };
}

function toProductRequest(product, overrides = {}) {
  return {
    name: overrides.name ?? (typeof product.name === "string" ? product.name : product.name.en),
    description: overrides.description ?? (typeof product.description === "string" ? product.description : product.description.en),
    price: Number(overrides.price ?? product.price),
    stock: Number(overrides.stock ?? product.stock),
    badge: overrides.badge ?? product.badge ?? "new",
    categoryId: Number(overrides.categoryId ?? product.category?.id ?? product.categoryId),
    photos: overrides.photos ?? (product.photos || []).map((photo) => ({
      fileId: photo.fileId,
      url: photo.url,
      sortOrder: photo.sortOrder || 0
    }))
  };
}

function mapBackendCategory(category) {
  const labels = {
    electronics: ["Tech", "Audio, watches, laptops", "Аудио, часы, ноутбуки"],
    fashion: ["Wear", "Shoes, bags, jackets", "Обувь, сумки, куртки"],
    home: ["Home", "Furniture and decor", "Мебель и декор"],
    beauty: ["Care", "Care and makeup", "Уход и макияж"],
    sports: ["Fit", "Training essentials", "Все для тренировок"]
  };
  const meta = labels[category.slug] || ["Shop", "Marketplace category", "Категория маркетплейса"];
  return {
    id: category.slug,
    backendId: category.id,
    icon: meta[0],
    name: { en: category.name, ru: category.name },
    text: { en: meta[1], ru: meta[2] }
  };
}

async function apiJson(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }
  return response.status === 204 ? null : response.json();
}

async function loadBackendData({ silent = false } = {}) {
  try {
    const [categoryData, productData] = await Promise.all([
      apiJson("/api/categories"),
      apiJson("/api/products")
    ]);
    backendCategories = categoryData;
    backendProducts = productData;
    categories = [demoCategories[0], ...categoryData.map(mapBackendCategory)];
    products = productData.map(mapBackendProduct);
    state.apiOnline = true;
    if (isAdmin()) await loadAdminStats();
    if (!silent) showToast(t("toast.apiOnline"));
  } catch (error) {
    backendProducts = [];
    categories = [...demoCategories];
    products = [...demoProducts];
    state.apiOnline = false;
    if (!silent) showToast(t("toast.apiOffline"));
  }
  renderAll();
}

async function loadAdminStats() {
  if (!isAdmin()) return;
  try {
    state.adminStats = await apiJson("/api/admin/stats", { headers: adminHeaders() });
  } catch (error) {
    state.adminStats = {
      users: 0,
      products: backendProducts.length,
      categories: backendCategories.length,
      orders: 0,
      stock: backendProducts.reduce((total, product) => total + Number(product.stock || 0), 0)
    };
  }
}

function renderAccount() {
  if (els.authOpen) {
    els.authOpen.textContent = state.user ? (state.user.fullName || state.user.email) : t("nav.signIn");
    els.authOpen.title = state.user ? state.user.email : "";
  }
  if (els.userBadge) {
    els.userBadge.hidden = !state.user;
    els.userBadge.textContent = state.user ? `${state.user.email} · ${state.user.role}` : "";
  }
  if (els.profileCard) els.profileCard.hidden = !state.user;
  if (els.profileAvatar) els.profileAvatar.textContent = (state.user?.fullName || state.user?.email || "A").slice(0, 1).toUpperCase();
  if (els.profileName) els.profileName.textContent = state.user?.fullName || "";
  if (els.profileEmail) els.profileEmail.textContent = state.user?.email || "";
  if (els.profileRole) els.profileRole.textContent = state.user?.role || "";
  if (els.authTabs) els.authTabs.hidden = !!state.user;
  if (els.loginForm) els.loginForm.hidden = !!state.user;
  if (els.registerForm) els.registerForm.hidden = true;
  if (els.adminNav) els.adminNav.hidden = !isAdmin();
  if (els.manageSection) els.manageSection.hidden = !isAdmin();
  if (els.adminWelcomeTitle) els.adminWelcomeTitle.textContent = t("admin.welcome", { name: state.user?.fullName || "admin" });
  if (els.adminRolePill) els.adminRolePill.textContent = state.user?.role || "ADMIN";
  if (els.logoutButton) els.logoutButton.hidden = !state.user;
  if (els.backendStatus) {
    els.backendStatus.textContent = state.apiOnline ? t("status.online") : t("status.offline");
    els.backendStatus.classList.toggle("is-online", state.apiOnline);
  }
  syncAdminRoute();
}

function syncAdminRoute() {
  const inAdmin = isAdmin() && window.location.hash === "#manage";
  document.body.classList.toggle("admin-route", inAdmin);
}

function renderAdminPreview() {
  if (!els.adminPreviewName) return;
  const selectedCategory = backendCategories.find((item) => String(item.id) === String(els.productCategoryInput?.value));
  const name = els.productNameInput?.value.trim();
  const description = els.productDescriptionInput?.value.trim();
  const price = Number(els.productPriceInput?.value || 0);
  const stock = Number(els.productStockInput?.value || 0);
  const badge = els.productBadgeInput?.value || "new";
  els.adminPreviewName.textContent = name || t("admin.previewTitle");
  els.adminPreviewDescription.textContent = description || t("admin.previewEmpty");
  els.adminPreviewPrice.textContent = money(price);
  els.adminPreviewStock.textContent = state.language === "ru" ? `Остаток: ${stock}` : `Stock: ${stock}`;
  els.adminPreviewCategory.textContent = selectedCategory?.name || t("admin.previewCategory");
  els.adminPreviewCategory.className = `preview-kicker badge ${badge}`;
  els.adminPreviewCategory.textContent = t(`badges.${badge}`);
}

function renderAdminDashboard() {
  if (!els.metricUsers) return;
  els.metricUsers.textContent = state.adminStats.users;
  els.metricProducts.textContent = state.adminStats.products || backendProducts.length;
  els.metricStock.textContent = state.adminStats.stock || backendProducts.reduce((total, product) => total + Number(product.stock || 0), 0);
  els.metricCategories.textContent = state.adminStats.categories || backendCategories.length;
  if (els.productSubmitButton) {
    els.productSubmitButton.textContent = state.editingProductId ? t("buttons.updateProduct") : t("buttons.saveProduct");
  }
  if (!els.adminProductRows) return;
  if (!backendProducts.length) {
    els.adminProductRows.innerHTML = `<tr><td colspan="6" class="admin-empty-row">${t("admin.noProducts")}</td></tr>`;
    return;
  }
  els.adminProductRows.innerHTML = backendProducts.map((product) => {
    const photo = product.photos?.[0]?.url || defaultImage;
    const isLow = Number(product.stock) <= 5;
    return `
      <tr>
        <td>
          <div class="admin-product-cell">
            <img src="${photo}" alt="">
            <div>
              <strong>${product.name}</strong>
              <span>#${product.id}</span>
            </div>
          </div>
        </td>
        <td>${product.category?.name || "-"}</td>
        <td>${money(Number(product.price))}</td>
        <td><strong>${product.stock}</strong></td>
        <td><span class="badge ${product.badge || "new"}">${t(`badges.${product.badge || "new"}`)}</span></td>
        <td><span class="table-status ${isLow ? "is-low" : "is-active"}">${isLow ? t("admin.lowStock") : t("admin.active")}</span></td>
        <td>
          <div class="table-actions">
            <button type="button" data-admin-edit="${product.id}">${t("admin.edit")}</button>
            <button type="button" data-admin-delete="${product.id}">${t("admin.delete")}</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function openAuth() {
  renderAccount();
  els.authBackdrop.hidden = false;
  els.authModal.classList.add("is-open");
  els.authModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeAuth() {
  els.authBackdrop.hidden = true;
  els.authModal.classList.remove("is-open");
  els.authModal.setAttribute("aria-hidden", "true");
  if (!els.cartPanel.classList.contains("is-open") && !els.productModal.classList.contains("is-open")) {
    document.body.classList.remove("no-scroll");
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const user = await apiJson("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: data.email, password: data.password })
  });
  state.user = user;
  persist();
  renderAccount();
  closeAuth();
  if (user.role === "ADMIN") {
    window.location.hash = "manage";
    syncAdminRoute();
    document.getElementById("manage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  showToast(t("toast.login", { name: user.fullName }));
}

async function handleRegister(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const user = await apiJson("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ fullName: data.fullName, email: data.email, password: data.password })
  });
  state.user = user;
  persist();
  renderAccount();
  closeAuth();
  showToast(t("toast.register", { name: user.fullName }));
}

async function uploadProductPhoto(file) {
  if (!file) return null;
  const body = new FormData();
  body.append("file", file);
  const response = await fetch(`${FILE_API_BASE}/api/files`, { method: "POST", body });
  if (!response.ok) throw new Error(await response.text());
  const uploaded = await response.json();
  showToast(t("toast.uploadReady"));
  return uploaded;
}

async function handleProductCreate(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!isAdmin()) throw new Error(t("toast.adminOnly"));
  if (!state.apiOnline) await loadBackendData({ silent: true });
  const data = Object.fromEntries(new FormData(form));
  const category = backendCategories.find((item) => String(item.id) === String(data.categoryId));
  if (!category) throw new Error("Category not loaded from backend");
  const uploaded = await uploadProductPhoto(els.productPhotoInput.files[0]);
  const existing = backendProducts.find((item) => item.id === state.editingProductId);
  const existingPhotos = existing?.photos || [];
  const payload = {
    name: data.name,
    description: data.description,
    price: Number(data.price),
    stock: Number(data.stock),
    badge: data.badge || "new",
    categoryId: Number(data.categoryId),
    photos: uploaded ? [{ fileId: uploaded.id, url: uploaded.url, sortOrder: 0 }] : existingPhotos.map((photo) => ({
      fileId: photo.fileId,
      url: photo.url,
      sortOrder: photo.sortOrder || 0
    }))
  };
  const saved = await apiJson(state.editingProductId ? `/api/products/${state.editingProductId}` : "/api/products", {
    method: state.editingProductId ? "PUT" : "POST",
    headers: adminHeaders(),
    body: JSON.stringify(payload)
  });
  form.reset();
  state.editingProductId = null;
  if (els.photoFileName) els.photoFileName.textContent = t("admin.uploadHint");
  if (els.adminPreviewImage) els.adminPreviewImage.src = defaultImage;
  backendProducts = [saved, ...backendProducts.filter((item) => item.id !== saved.id)];
  products = backendProducts.map(mapBackendProduct);
  await loadAdminStats();
  state.category = category.slug;
  renderAll();
  document.getElementById("manage").scrollIntoView({ behavior: "smooth" });
  showToast(t("toast.productCreated"));
}

function resetAdminForm() {
  state.editingProductId = null;
  if (els.productForm) els.productForm.reset();
  if (els.photoFileName) els.photoFileName.textContent = t("admin.uploadHint");
  if (els.adminPreviewImage) els.adminPreviewImage.src = defaultImage;
  renderAdminPreview();
  renderAdminDashboard();
}

function editAdminProduct(id) {
  const product = backendProducts.find((item) => item.id === id);
  if (!product || !els.productForm) return;
  state.editingProductId = id;
  els.productNameInput.value = product.name;
  els.productDescriptionInput.value = product.description;
  els.productPriceInput.value = product.price;
  els.productStockInput.value = product.stock;
  els.productCategoryInput.value = String(product.category.id);
  els.productBadgeInput.value = product.badge || "new";
  if (els.photoFileName) els.photoFileName.textContent = product.photos?.[0]?.url ? "Current product photo" : t("admin.uploadHint");
  if (els.adminPreviewImage) els.adminPreviewImage.src = product.photos?.[0]?.url || defaultImage;
  renderAdminPreview();
  renderAdminDashboard();
  els.productForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteAdminProduct(id) {
  await apiJson(`/api/products/${id}`, { method: "DELETE", headers: adminHeaders() });
  backendProducts = backendProducts.filter((item) => item.id !== id);
  products = backendProducts.map(mapBackendProduct);
  state.cart = state.cart.filter((item) => item.id !== id);
  if (state.editingProductId === id) resetAdminForm();
  await loadAdminStats();
  renderAll();
  showToast(state.language === "ru" ? "Товар удален" : "Product deleted");
}

function renderCategories() {
  els.categoryGrid.innerHTML = categories.map((category) => `
    <button class="category-card ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
      <span class="category-icon">${category.icon}</span>
      <span>
        <span class="category-title">${category.name[state.language]}</span>
        <span class="category-text">${category.text[state.language]}</span>
      </span>
    </button>
  `).join("");
}

function renderCategoryFilter() {
  els.categoryFilter.innerHTML = categories.map((category) => `
    <option value="${category.id}">${category.id === "all" ? t("filters.all") : category.name[state.language]}</option>
  `).join("");
  els.categoryFilter.value = state.category;
  if (els.productCategoryInput) {
    els.productCategoryInput.innerHTML = backendCategories.map((category) => `
      <option value="${category.id}">${category.name}</option>
    `).join("");
    renderAdminPreview();
  }
}

function getFilteredProducts() {
  const search = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const searchableText = `${product.name.en} ${product.name.ru} ${product.description.en} ${product.description.ru}`.toLowerCase();
    return matchesCategory && searchableText.includes(search);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "priceAsc") return a.price - b.price;
    if (state.sort === "priceDesc") return b.price - a.price;
    if (state.sort === "ratingDesc") return b.rating - a.rating;
    return a.id - b.id;
  });
}

function stars(rating) {
  const full = Math.floor(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  els.resultCount.textContent = t("products.count", { count: visibleProducts.length });
  els.noProducts.hidden = visibleProducts.length > 0;
  els.productGrid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 28}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name[state.language]}" loading="lazy">
        <span class="badge ${product.badge}">${t(`badges.${product.badge}`)}</span>
      </div>
      <div class="product-info">
        <p class="product-category">${categoryName(product.category)}</p>
        <h3 class="product-name">${product.name[state.language]}</h3>
        <div class="rating-line">
          <span class="stars">${stars(product.rating)}</span>
          <span>${product.rating} · ${product.reviews}</span>
        </div>
        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
        </div>
        <div class="card-actions">
          <button class="small-button add" type="button" data-add="${product.id}">${t("buttons.addToCart")}</button>
          <button class="small-button" type="button" data-details="${product.id}">${t("buttons.details")}</button>
        </div>
      </div>
    </article>
  `).join("");
}

function cartQuantity() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCart() {
  els.cartCount.textContent = cartQuantity();
  els.cartTotal.textContent = money(cartTotal());
  els.emptyCart.hidden = state.cart.length > 0;
  els.cartItems.innerHTML = state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name[state.language]}">
        <div>
          <h3>${product.name[state.language]}</h3>
          <p>${money(product.price)} · ${categoryName(product.category)}</p>
          <div class="cart-item-controls">
            <div class="qty-control" aria-label="Quantity">
              <button type="button" data-decrease="${product.id}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-increase="${product.id}">+</button>
            </div>
            <button class="remove-item" type="button" data-remove="${product.id}">${t("cart.remove")}</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
  persist();
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id, quantity: 1 });
  }
  renderCart();
  const product = products.find((item) => item.id === id);
  showToast(t("toast.added", { name: product.name[state.language] }));
}

function removeFromCart(id) {
  const product = products.find((item) => item.id === id);
  state.cart = state.cart.filter((item) => item.id !== id);
  renderCart();
  if (product) showToast(t("toast.removed", { name: product.name[state.language] }));
}

function changeQuantity(id, change) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    renderCart();
  }
}

function openCart() {
  els.cartOverlay.hidden = false;
  els.cartPanel.classList.add("is-open");
  els.cartPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  els.cartOverlay.hidden = true;
  els.cartPanel.classList.remove("is-open");
  els.cartPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function openModal(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.activeModalId = id;
  els.modalImage.src = product.image;
  els.modalImage.alt = product.name[state.language];
  els.modalBadge.textContent = t(`badges.${product.badge}`);
  els.modalBadge.className = `badge ${product.badge}`;
  els.modalCategory.textContent = categoryName(product.category);
  els.modalName.textContent = product.name[state.language];
  els.modalRating.innerHTML = `<span class="stars">${stars(product.rating)}</span><span>${product.rating} · ${t("modal.reviews", { count: product.reviews })}</span>`;
  els.modalDescription.textContent = product.description[state.language];
  els.modalPrice.textContent = money(product.price);
  els.modalStock.textContent = t("modal.inStock", { count: product.stock });
  els.modalBackdrop.hidden = false;
  els.productModal.classList.add("is-open");
  els.productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  els.modalBackdrop.hidden = true;
  els.productModal.classList.remove("is-open");
  els.productModal.setAttribute("aria-hidden", "true");
  state.activeModalId = null;
  if (!els.cartPanel.classList.contains("is-open")) {
    document.body.classList.remove("no-scroll");
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  els.toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    window.setTimeout(() => toast.remove(), 180);
  }, 2400);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
}

function renderAll() {
  translateStaticText();
  renderCategories();
  renderCategoryFilter();
  renderProducts();
  renderCart();
  renderAccount();
  renderAdminDashboard();
  if (state.activeModalId) openModal(state.activeModalId);
}

function bindEvents() {
  els.menuToggle.addEventListener("click", () => els.navLinks.classList.toggle("is-open"));
  els.navLinks.addEventListener("click", () => els.navLinks.classList.remove("is-open"));
  window.addEventListener("hashchange", syncAdminRoute);

  els.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
    persist();
  });

  els.languageToggle.addEventListener("click", () => {
    state.language = state.language === "en" ? "ru" : "en";
    renderAll();
  });

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  els.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderCategories();
    renderProducts();
  });

  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  els.categoryGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-category]");
    if (!card) return;
    state.category = card.dataset.category;
    renderCategoryFilter();
    renderCategories();
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  els.productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    const detailsButton = event.target.closest("[data-details]");
    if (addButton) addToCart(Number(addButton.dataset.add));
    if (detailsButton) openModal(Number(detailsButton.dataset.details));
  });

  els.cartOpen.addEventListener("click", openCart);
  els.cartClose.addEventListener("click", closeCart);
  els.cartOverlay.addEventListener("click", closeCart);

  els.cartItems.addEventListener("click", (event) => {
    const increase = event.target.closest("[data-increase]");
    const decrease = event.target.closest("[data-decrease]");
    const remove = event.target.closest("[data-remove]");
    if (increase) changeQuantity(Number(increase.dataset.increase), 1);
    if (decrease) changeQuantity(Number(decrease.dataset.decrease), -1);
    if (remove) removeFromCart(Number(remove.dataset.remove));
  });

  els.checkoutButton.addEventListener("click", () => {
    showToast(t("toast.checkout", { total: money(cartTotal()) }));
  });

  els.modalClose.addEventListener("click", closeModal);
  els.modalBackdrop.addEventListener("click", closeModal);
  els.modalAdd.addEventListener("click", () => {
    if (state.activeModalId) addToCart(state.activeModalId);
  });
  els.modalSimilar.addEventListener("click", () => {
    const product = products.find((item) => item.id === state.activeModalId);
    if (!product) return;
    state.category = product.category;
    closeModal();
    renderCategoryFilter();
    renderCategories();
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    showToast(t("toast.similar", { category: categoryName(product.category) }));
  });

  if (els.authOpen) els.authOpen.addEventListener("click", openAuth);
  if (els.authClose) els.authClose.addEventListener("click", closeAuth);
  if (els.authBackdrop) els.authBackdrop.addEventListener("click", closeAuth);
  if (els.loginForm) els.loginForm.addEventListener("submit", (event) => handleLogin(event).catch((error) => showToast(friendlyError(error))));
  if (els.registerForm) els.registerForm.addEventListener("submit", (event) => handleRegister(event).catch((error) => showToast(friendlyError(error))));
  if (els.logoutButton) els.logoutButton.addEventListener("click", () => {
    state.user = null;
    persist();
    renderAccount();
    closeAuth();
    showToast(t("toast.logout"));
  });
  if (els.authTabs) els.authTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-auth-tab]");
    if (!tab) return;
    const mode = tab.dataset.authTab;
    els.authTabs.querySelectorAll("button").forEach((button) => button.classList.toggle("is-active", button === tab));
    if (!state.user) {
      els.loginForm.hidden = mode !== "login";
      els.registerForm.hidden = mode !== "register";
    }
  });
  if (els.productForm) els.productForm.addEventListener("submit", (event) => handleProductCreate(event).catch((error) => showToast(friendlyError(error))));
  if (els.productForm) els.productForm.addEventListener("input", renderAdminPreview);
  if (els.productCategoryInput) els.productCategoryInput.addEventListener("change", renderAdminPreview);
  if (els.productResetButton) els.productResetButton.addEventListener("click", resetAdminForm);
  if (els.refreshAdminButton) els.refreshAdminButton.addEventListener("click", () => loadBackendData().catch((error) => showToast(friendlyError(error))));
  document.querySelectorAll("[data-admin-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.adminJump)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  if (els.adminProductRows) els.adminProductRows.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-admin-edit]");
    const deleteButton = event.target.closest("[data-admin-delete]");
    if (editButton) editAdminProduct(Number(editButton.dataset.adminEdit));
    if (deleteButton) deleteAdminProduct(Number(deleteButton.dataset.adminDelete)).catch((error) => showToast(friendlyError(error)));
  });
  if (els.productPhotoInput) els.productPhotoInput.addEventListener("change", () => {
    const file = els.productPhotoInput.files[0];
    if (els.photoFileName) els.photoFileName.textContent = file ? file.name : t("admin.uploadHint");
    if (file && els.adminPreviewImage) els.adminPreviewImage.src = URL.createObjectURL(file);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeCart();
      els.navLinks.classList.remove("is-open");
    }
  });
}

function init() {
  applyTheme();
  bindEvents();
  renderAll();
  loadBackendData({ silent: true });
  window.setTimeout(() => els.loader.classList.add("is-hidden"), 450);
}

init();
