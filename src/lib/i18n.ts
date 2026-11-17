// Centralized UI text in Persian (fa-IR).
// Keep all user-facing strings here so they can be reviewed and updated
// without touching component logic.

export const ui = {
  locale: "fa-IR",
  dir: "rtl" as const,
  appName: "English Kids",
  appTagline: "یادگیری زبان انگلیسی برای کودکان و نوجوانان",
  nav: {
    home: "خانه",
    courses: "دوره‌ها",
    about: "درباره ما",
    contact: "تماس",
  },
  home: {
    status: "پروژه با موفقیت راه‌اندازی شد",
    welcomeTitle: "به English Kids خوش آمدید",
    welcomeBody:
      "این یک صفحه موقت است تا از اجرای صحیح پروژه اطمینان حاصل کنیم. طراحی نهایی و ویژگی‌ها به‌زودی اضافه خواهند شد.",
    footerNote: "فاز ۱ — زیرساخت پروژه",
  },
  footer: {
    rights: "© ۱۴۰۴ English Kids. تمامی حقوق محفوظ است.",
  },
} as const;
