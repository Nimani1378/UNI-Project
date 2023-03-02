// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "برگر مرغ",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "در تهیه همبرگر مرغ سوخاری به جای گوشت از مرغ گریل شده یا سوخاری استفاده می شود. مواد لازم در تهیه این نوع همبرگر شامل سینه مرغ، کاهو، گوجه فرنگی، خیار شور، پودر سیر، پودر پیاز، فلفل سیاه، آرد سفید، زردچوبه، تخم مرغ، سس فرانسوی و آرد سوخاری می شود. ",
  },

  {
    id: "02",
    title: "پیتزای سبزیجات",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "ترکیبات: ترکیب مواد تاپینگ پیتزای سبزیجات بسته به آب و هوا و سبزیجات قابل دسترسی در هر کشوری متفاوت است. برای مثال در ایتالیا استفاده از سبزیجاتی مانند مارچوبه، آرتیشو و کلم بروکلی رایج است.",
  },

  {
    id: "03",
    title: "مارگاریتا",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "ترکیبات: مارگاریتا پیتزایی ساده شامل پنیر، گوجه و ریحان است که در کنار هم، رنگ های پرچم ایتالیا را تشکیل می دهد. در حال حاضر به پیتزایی که فقط از سس گوجه فرنگی و پنیر موزارلا تشکیل شده است هم مارگاریتا می گویند.",
  },

  {
    id: "04",
    title: "پیتزا مکزیکی",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "یکی دیگر از پیتزاهای تند که به پیتزا پپرونی شباهت زیادی دارد، پیتزا مکزیکی یا در بعضی منوها «مکزیکانا» ست. تاپینگ آن شامل گوشت چرخ کرده سرخ شده به همراه زیره سبز و فلفل تازه تند است.",
  },

  {
    id: "05",
    title: "برگر مخصوص",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "همبرگر مخصوص را از ترکیب گوشت چرخ کرده با 20 درصد چربی، آرد سوخاری، تخم مرغ، پیاز، سیر و نمک و فلفل تهیه می کنند.",
  },
  {
    id: "06",
    title: "برگر رویال",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "مواد تشکیل دهنده همبرگر سبزیجات سوئیسی جو، عدس و قارچ می باشد که آن را به همراه پنیر ورقه ای خوشمزه و قارچ سرخ شده سرو می کنند.",
  },

  {
    id: "07",
    title: "پیتزای ایتالیایی",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "روی خمیر را با یک ورقه نازک از سس گوجه فرنگی می پوشانند و بعد گوجه پوست و دانه گرفته شده روی ان اضافه میکنند و در آخر پنیر زیادی روی آن میریزند و اگر پیتزای قارچ بخواهید به آن چند برش بسیار کم قارچ اضافه میکنند .",
  },

  {
    id: "08",
    title: "پیتزا آمریکایی",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "بنا به سلایق آمریکایی ها در پیتزای ایتالیایی تغییراتی ایجاد شد و تعداد بسیاری با سبک هاو مواد تشکیل دهنده مختلف به ان اضافه شد . خمیر این پیتزا ضخیم تر از پیتزای ایتالیایی هست بعد از پهن کردن این خمیر از یک لایه سس گوجه فرنگی استفاده میکنند روی آن را با کالباس های ورقه شده یا خرد شده میپوشانند و بعد سوسیس را روی آن میریزند مقدار زیادی هم قارچ به آن اضافه نموده از فلفل دلمه ای، ذرت و زیتون برای طعم به مقدار لازم روی آن اضافه میکنند و در آخر از پنیر پیتزای زیاد استفاده میکنند.",
  },

  {
    id: "09",
    title: "پیتزا پپرونی",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "ترکیبات: پپرونی نوعی کالباس تند از گوشت گوساله است که معمولا قطر کمی دارد و به صورت حلقه حلقه در تاپینگ پیتزا استفاده می شود. در بعضی پیتزافروشی ها به جای استفاده از پپرونی از کالباس معمولی استفاده شده و پیتزا با فلفل، تند می شود. سالامی هم نوع دیگری از کالباس گوشت گوساله است که تند نیست، اما چربی بالاتری دارد. بهتر است برای تهیه پیتزای سالامی و پپرونی، کالباس ها روی بقیه تاپینگ ها قرار بگیرند تا کاملا در معرض حرارت قرار گرفته و برشته شوند.",
  },

  {
    id: "10",
    title: "برگر کلاسیک",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "در تهیه همبرگر گوشت گوساله از گوشت گوساله، مغز نان همبرگر، شیر، پیاز، سیر، سبزیجات معطر و نمک و فلفل استفاده می کنند.",
  },

  {
    id: "11",
    title: "نان گریسینی",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "نان گریسینی یک نان ترد و بیسکویتی ایتالیایی است که به شکل لوله ای و بلند تهیه می شود. ",
  },

  {
    id: "12",
    title: "نان باگت",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "باگت به معنای چوب‌دستی یا باتون است. این نان کلاسیک فرانسوی در ابتدا، گرد با پوسته‌ای خوش طعم و درون آن حجیم و متراکم بود. به تدریج که مردم سطح ترد بیرونی را به درون آن ترجیح دادند، نان باگت رفته‌رفته به شکل بیضوی و کشیده‌ی امروزی درآمد.",
  },

  {
    id: "13",
    title: "نان بریوش",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "نان غنی و نازک بریوش (Brioche) به خاطر دارا بودن میزان زیاد کره و تخم‌مرغ در ترکیباتش سبک، پفی و ترد است. قدمت این نان فرانسوی به چندین قرن‌ می‌رسد و تا به حدی غنی و خوشمزه است که میتوان آن را به‌سادگی با کره میل کرد.",
  },
];

export default products;
