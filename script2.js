
// ========================
// قاعدة بيانات ديوي الكاملة
// ========================
const DEWEY_DB = {
  // 000 علوم الحاسوب والمعلومات
  "000": { name: "علوم الحاسوب، المعلومات والمعرفة العامة", icon: "💻", keywords: ["كمبيوتر","حاسوب","حاسب","معلومات","معرفة","موسوعة","معجم","بيانات","برمجة","ذكاء اصطناعي","إنترنت","شبكات","قواعد البيانات","نظم المعلومات","تكنولوجيا المعلومات","اتصالات رقمية","ويب","software","hardware"] },
  "010": { name: "الببليوغرافيا", icon: "📋", keywords: ["ببليوغرافيا","فهرسة","قائمة مراجع","دليل الكتب","المراجع","فهارس","كتالوج"] },
  "020": { name: "علم المكتبات والمعلومات", icon: "📚", keywords: ["مكتبة","مكتبات","أمناء المكتبات","إدارة المكتبات","خدمات المعلومات","فهرسة","تصنيف","علم المكتبات","المعلوماتية","مصادر التعلم","أمين مكتبة"] },
  "030": { name: "الموسوعات والمراجع العامة", icon: "📖", keywords: ["موسوعة","مراجع","مرجع عام","موسوعات","دائرة المعارف","موسوعة عربية"] },
  "050": { name: "المجلات والمسلسلات العامة", icon: "📰", keywords: ["مجلة","دورية","نشرة","جريدة","صحيفة","دوريات"] },
  "060": { name: "المنظمات والمؤسسات العامة", icon: "🏛️", keywords: ["منظمة","مؤسسة","جمعية","اتحاد","هيئة","تنظيمات"] },
  "070": { name: "الإعلام والصحافة والنشر", icon: "📡", keywords: ["إعلام","صحافة","نشر","وسائل الإعلام","تليفزيون","راديو","إذاعة","تلفزيون","صحفي","مراسل","صحافة إلكترونية","إعلام رقمي","صحافة استقصائية"] },
  "080": { name: "المجموعات العامة", icon: "📦", keywords: ["مجموعة","مختارات","أعمال مختارة"] },
  "090": { name: "المخطوطات والكتب النادرة", icon: "📜", keywords: ["مخطوطات","كتب نادرة","وثائق","مخطوط","مخطوطة","تراث","وثيقة تاريخية","مخطوطات عربية"] },

  // 100 الفلسفة
  "100": { name: "الفلسفة وعلم النفس", icon: "🧠", keywords: ["فلسفة","منطق","ميتافيزيقا","إيتيقا","علم النفس","نفس","وجود","معرفة","عقل","تفكير","فيلسوف","فكر","فلسفي","روح","وعي","إدراك"] },
  "110": { name: "الميتافيزيقا (ما وراء الطبيعة)", icon: "🌌", keywords: ["ميتافيزيقا","وجود","ماهية","حقيقة الوجود","ما وراء الطبيعة","الوجود","الكون"] },
  "120": { name: "نظرية المعرفة", icon: "💡", keywords: ["معرفة","إبستيمولوجيا","نظرية المعرفة","يقين","شك","حقيقة"] },
  "130": { name: "علم النفس التطبيقي وما وراء الطبيعة", icon: "🔮", keywords: ["باراسيكولوجي","ظواهر خارقة","أحلام","نوم","غيبيات نفسية","خرافات"] },
  "140": { name: "المدارس الفلسفية", icon: "🏫", keywords: ["مثالية","واقعية","براغماتية","وجودية","رواقية","أبيقورية","مدارس فلسفية","فلسفة حديثة"] },
  "150": { name: "علم النفس", icon: "🧬", keywords: ["علم النفس","نفسي","سلوك","سلوكية","شخصية","ذاكرة","تعلم","دوافع","انفعالات","مشاعر","اكتئاب","قلق","صحة نفسية","علاج نفسي","إرشاد نفسي","تطوير الذات","سيكولوجيا","ذكاء عاطفي","الأطفال النفسي"] },
  "160": { name: "المنطق الفلسفي", icon: "⚖️", keywords: ["منطق","قياس","استدلال","برهان","حجة","مغالطات"] },
  "170": { name: "الأخلاق (الإيتيقا)", icon: "✨", keywords: ["أخلاق","قيم","إيتيقا","فضيلة","مثال أخلاقي","سلوك أخلاقي","مبادئ","أخلاقيات المهنة"] },
  "180": { name: "الفلسفة القديمة والشرقية والإسلامية", icon: "🏺", keywords: ["فلسفة إسلامية","فلسفة يونانية","ابن رشد","ابن سينا","الفارابي","أفلاطون","أرسطو","سقراط","فلسفة شرقية","فلسفة قديمة"] },
  "190": { name: "الفلسفة الغربية الحديثة", icon: "🌍", keywords: ["فلسفة غربية","ديكارت","كانط","نيتشه","سارتر","هيغل","فلسفة حديثة","فلسفة معاصرة"] },

  // 200 الدين
  "200": { name: "الدين", icon: "☪️", keywords: ["دين","عقيدة","إيمان","روحانيات","عبادة","ديانات"] },
  "210": { name: "الفلسفة الدينية وعلم الكلام", icon: "🌙", keywords: ["فلسفة الدين","علم الكلام","وجود الله","عقيدة","لاهوت","الإلهيات"] },
  "220": { name: "الكتاب المقدس (الإنجيل والتوراة)", icon: "📖", keywords: ["إنجيل","توراة","كتاب مقدس","عهد قديم","عهد جديد","إنجيلية"] },
  "230": { name: "المسيحية واللاهوت", icon: "✝️", keywords: ["مسيحية","لاهوت مسيحي","مسيح","كنيسة","كاثوليك","بروتستانت","مسيحي"] },
  "240": { name: "الممارسة المسيحية والحياة الروحية", icon: "🕊️", keywords: ["تعبد مسيحي","صلاة مسيحية","حياة روحية مسيحية"] },
  "250": { name: "الكنيسة المحلية والأوامر الدينية", icon: "⛪", keywords: ["كنيسة محلية","قساوسة","رهبنة","أبرشية"] },
  "260": { name: "اللاهوت الاجتماعي والتطبيقي", icon: "👥", keywords: ["لاهوت اجتماعي","دور الكنيسة","المجتمع والدين"] },
  "270": { name: "تاريخ المسيحية والكنيسة", icon: "📅", keywords: ["تاريخ المسيحية","تاريخ الكنيسة","الإصلاح الديني"] },
  "280": { name: "الطوائف المسيحية", icon: "⛪", keywords: ["طوائف مسيحية","بروتستانت","أرثوذكس","كاثوليك"] },
  "290": { name: "الأديان الأخرى", icon: "☯️", keywords: ["يهودية","يهود","هندوسية","بوذية","بوذا","زرادشتية","أديان","وثنية","إسلام","الإسلام"] },
  "297": { name: "الإسلام", icon: "🌙", keywords: ["إسلام","مسلم","قرآن","سنة","حديث","فقه","شريعة","عقيدة إسلامية","تفسير","علوم قرآنية","الفقه الإسلامي","الحديث النبوي","السيرة النبوية","أصول الفقه","علم الكلام الإسلامي","الصوفية","التصوف","الزكاة","الصلاة","الحج","الصوم"] },

  // 300 العلوم الاجتماعية
  "300": { name: "العلوم الاجتماعية", icon: "👥", keywords: ["اجتماع","مجتمع","علوم اجتماعية","بشر","ثقافة","حضارة"] },
  "310": { name: "الإحصاء العام", icon: "📊", keywords: ["إحصاء","أرقام","بيانات إحصائية","تعداد","إحصاءات"] },
  "320": { name: "العلوم السياسية", icon: "🏛️", keywords: ["سياسة","سياسية","حكومة","دولة","نظام سياسي","ديمقراطية","برلمان","جمهورية","ملكية","الرئاسة","السلطة","الحزب","الانتخابات","القانون الدستوري","السياسة الخارجية","الحوكمة"] },
  "330": { name: "الاقتصاد", icon: "💰", keywords: ["اقتصاد","اقتصادي","مالية","بنوك","تجارة","استثمار","تضخم","بطالة","نمو اقتصادي","الاقتصاد الكلي","الاقتصاد الجزئي","السوق","التنمية الاقتصادية","التخطيط المالي","العولمة الاقتصادية"] },
  "340": { name: "القانون", icon: "⚖️", keywords: ["قانون","قانوني","تشريع","محكمة","قضاء","حقوق","تشريعات","عقوبات","المدني","الجنائي","الإجراءات","القانون الدولي","حقوق الإنسان","قانون الأسرة","القانون التجاري"] },
  "350": { name: "الإدارة العامة", icon: "🏢", keywords: ["إدارة عامة","حكومة","موظف","خدمة مدنية","إدارة حكومية","بيروقراطية","الخدمات الحكومية"] },
  "360": { name: "الخدمات الاجتماعية والرعاية", icon: "🤝", keywords: ["رعاية اجتماعية","خدمات اجتماعية","رفاه","إغاثة","خيرية","تطوع","مشكلات اجتماعية","الفقر","الإسكان","المسنون","ذوو الإعاقة","الأيتام"] },
  "370": { name: "التربية والتعليم", icon: "🎓", keywords: ["تعليم","تربية","مدرسة","تدريس","معلم","طالب","مناهج","تعليمي","تربوي","مدارس","جامعة","أساليب التدريس","التقييم التربوي","الإدارة المدرسية","المناهج الدراسية","التعلم الإلكتروني","التعليم الخاص","التعليم المبكر"] },
  "380": { name: "التجارة والاتصالات والنقل", icon: "🚢", keywords: ["تجارة","تسويق","نقل","مواصلات","اتصالات","بريد","شحن","تجارة دولية","لوجستيات"] },
  "390": { name: "العادات والتقاليد والفولكلور", icon: "🎭", keywords: ["عادات","تقاليد","فولكلور","تراث شعبي","مأكولات","ملبس","تقاليد شعبية","حكايات شعبية","أمثال"] },

  // 400 اللغات
  "400": { name: "اللغات", icon: "🗣️", keywords: ["لغة","لغات","لسانيات","لغويات","ترجمة","لهجة"] },
  "410": { name: "اللسانيات", icon: "📝", keywords: ["لسانيات","لغويات","فونولوجيا","تشكيل الكلمات","نحو","صرف","دلالة","معجمية","اللغة العامة"] },
  "420": { name: "اللغة الإنجليزية", icon: "🇬🇧", keywords: ["إنجليزي","إنجليزية","انجليزي","english","grammar","تعلم الإنجليزية","قاموس إنجليزي"] },
  "430": { name: "اللغة الألمانية", icon: "🇩🇪", keywords: ["ألماني","ألمانية","german","deutsch","تعلم الألمانية"] },
  "440": { name: "اللغة الفرنسية", icon: "🇫🇷", keywords: ["فرنسي","فرنسية","french","français","تعلم الفرنسية"] },
  "450": { name: "اللغة الإيطالية", icon: "🇮🇹", keywords: ["إيطالي","إيطالية","italiano","تعلم الإيطالية"] },
  "460": { name: "اللغة الإسبانية", icon: "🇪🇸", keywords: ["إسباني","إسبانية","español","تعلم الإسبانية"] },
  "470": { name: "اللغة اللاتينية", icon: "🏛️", keywords: ["لاتينية","latin","لغة روما","اللغة الرومانية"] },
  "480": { name: "اللغة اليونانية", icon: "🇬🇷", keywords: ["يونانية","greek","اليونانية القديمة","الإغريقية"] },
  "490": { name: "لغات أخرى", icon: "🌐", keywords: ["عربية","لغة عربية","نحو عربي","صرف عربي","بلاغة","علم اللغة العربية","معجم عربي","قاموس عربي","فصحى","لغة اليابانية","لغة الصينية","لغة الفارسية","لغة التركية","اللغات الأخرى"] },
  "492": { name: "اللغة العربية", icon: "🌙", keywords: ["عربي","عربية","نحو","صرف","بلاغة","لغة عربية","فصحى","قرآن كريم","معجم","قاموس","إعراب","اشتقاق","البلاغة العربية","أساليب العربية","الفصيح","العامية","اللهجات العربية"] },

  // 500 العلوم البحتة
  "500": { name: "العلوم الطبيعية والرياضيات", icon: "🔬", keywords: ["علوم","طبيعة","كيمياء","فيزياء","أحياء","رياضيات"] },
  "510": { name: "الرياضيات", icon: "➕", keywords: ["رياضيات","حساب","جبر","هندسة","إحصاء رياضي","مثلثات","تفاضل وتكامل","أعداد","معادلات","رياضيات بحتة","الحساب","الجبر","الهندسة الفراغية","الاحتمالات","المنطق الرياضي"] },
  "520": { name: "الفلك والعلوم الكونية", icon: "⭐", keywords: ["فلك","نجوم","كواكب","مجرات","كون","فضاء","شمس","قمر","علم الفلك","المجموعة الشمسية","أبراج فلكية","ثقب أسود","المد والجزر"] },
  "530": { name: "الفيزياء", icon: "⚛️", keywords: ["فيزياء","طاقة","قوة","حركة","ضوء","صوت","كهرباء","مغناطيس","ذرة","نووي","فيزياء نووية","الحرارة","الموجات","ميكانيكا","ديناميكا","الكم","النسبية"] },
  "540": { name: "الكيمياء", icon: "⚗️", keywords: ["كيمياء","عناصر","مركبات","تفاعلات","كيميائي","جدول دوري","مواد","أيونات","أحماض","قواعد","عضوية","لاعضوية","بوليمرات","الكيمياء الحيوية"] },
  "550": { name: "علوم الأرض والجيولوجيا", icon: "🌍", keywords: ["جيولوجيا","أرض","زلزال","بركان","طبقات الأرض","صخور","معادن","تربة","مياه جوفية","مناخ","طقس","أرصاد"] },
  "560": { name: "الحفريات والمتحجرات", icon: "🦕", keywords: ["حفريات","متحجرات","ديناصورات","ما قبل التاريخ","حفريات بحرية"] },
  "570": { name: "علم الأحياء", icon: "🧬", keywords: ["أحياء","بيولوجيا","خلية","وراثة","تطور","نباتات","حيوانات","جينات","جراثيم","فيروسات","بيئة","بكتيريا","DNA","خلايا جذعية"] },
  "580": { name: "النباتات", icon: "🌿", keywords: ["نباتات","أعشاب","أشجار","أزهار","نبات","زراعة النباتات","فسيولوجيا النبات","علم النبات","غابات","التمثيل الضوئي"] },
  "590": { name: "الحيوانات", icon: "🐾", keywords: ["حيوانات","طيور","أسماك","حشرات","زواحف","ثدييات","علم الحيوان","سلوك الحيوان","بيئة الحيوان","هجرة الطيور","المحيطات"] },

  // 600 التكنولوجيا والعلوم التطبيقية
  "600": { name: "التكنولوجيا والعلوم التطبيقية", icon: "⚙️", keywords: ["تكنولوجيا","تقنية","هندسة","تطبيقي","صناعة"] },
  "610": { name: "الطب وعلوم الصحة", icon: "⚕️", keywords: ["طب","صحة","أمراض","علاج","دواء","مستشفى","طبيب","جراحة","صيدلة","تمريض","طب بشري","طب أسنان","أمراض مزمنة","السرطان","القلب","الضغط","السكر","صحة عامة","وقاية","تغذية","رياضة طبية"] },
  "620": { name: "الهندسة", icon: "🔧", keywords: ["هندسة","ميكانيكا","كهرباء","كيميائية","مدنية","هندسة مدنية","هندسة ميكانيكية","هندسة كهربائية","هندسة كيميائية","انشاء","بناء","مواد","ميكانيك","روبوتات"] },
  "630": { name: "الزراعة", icon: "🌾", keywords: ["زراعة","زراعي","فلاحة","محاصيل","تربة","ري","حيوانات المزرعة","مبيدات","أسمدة","بستنة","زراعة عضوية","الأمن الغذائي"] },
  "640": { name: "الاقتصاد المنزلي وإدارة الأسرة", icon: "🏠", keywords: ["إدارة المنزل","طبخ","طهي","وصفات","ديكور","تنظيم المنزل","اقتصاد منزلي","المطبخ","الغذاء","الخياطة"] },
  "650": { name: "الإدارة والعلاقات العامة", icon: "💼", keywords: ["إدارة","إدارة أعمال","قيادة","تسويق","موارد بشرية","علاقات عامة","ريادة أعمال","مشروع","شركة","إدارة المشاريع","الاتصال المؤسسي","استراتيجية","مبيعات","خدمة العملاء"] },
  "660": { name: "الكيمياء الصناعية", icon: "🏭", keywords: ["كيمياء صناعية","بترول","بلاستيك","مواد كيميائية","صناعة كيميائية","نفط"] },
  "670": { name: "التصنيع", icon: "🔩", keywords: ["تصنيع","مصانع","صناعة","إنتاج","آلات"] },
  "680": { name: "صناعات محددة", icon: "🛠️", keywords: ["أثاث","ملابس","طباعة","نشر","صناعات يدوية"] },
  "690": { name: "البناء والإنشاء", icon: "🏗️", keywords: ["بناء","معمار","إنشاء","مقاولات","خرسانة","تصميم معماري","معماري","عمارة","فيلا","مبنى","بيت"] },

  // 700 الفنون
  "700": { name: "الفنون والترفيه", icon: "🎨", keywords: ["فنون","فن","ترفيه","جمال","إبداع","تصميم","ثقافة"] },
  "710": { name: "الفنون المدنية والمناظر الطبيعية", icon: "🌳", keywords: ["تخطيط مدن","تنسيق الحدائق","عمارة مناظر","تصميم مدن"] },
  "720": { name: "العمارة والتصميم المعماري", icon: "🏛️", keywords: ["عمارة","تصميم معماري","معماري","مباني","مخططات","تصميم مبانى"] },
  "730": { name: "الفنون التشكيلية والنحت", icon: "🗿", keywords: ["نحت","تشكيل","فنون تشكيلية","نحات","تمثال"] },
  "740": { name: "فنون الرسم والزخرفة", icon: "✏️", keywords: ["رسم","تصوير","رسم هندسي","زخرفة","خط","خطاط","ديكور","رسوم توضيحية","جرافيك","رسوم متحركة"] },
  "750": { name: "فن الرسم التصويري", icon: "🖼️", keywords:["رسم فني","لوحات","رسام","مشاهير الرسامين","لوفر","مونا ليزا"] },
  "760": { name: "الطباعة والحفر", icon: "🖨️", keywords: ["طباعة","حفر","طبع فني","الفن الطباعي"] },
  "770": { name: "التصوير الفوتوغرافي", icon: "📷", keywords: ["تصوير فوتوغرافي","كاميرا","فوتوغراف","صور","فوتوشوب","تحرير الصور"] },
  "780": { name: "الموسيقى", icon: "🎵", keywords: ["موسيقى","أغاني","ألحان","نوتة","موسيقار","أوركسترا","غناء","آلات موسيقية"] },
  "790": { name: "الترفيه والألعاب والرياضة", icon: "⚽", keywords: ["رياضة","كرة قدم","ألعاب","ترفيه","مسرح","سينما","أفلام","ألعاب إلكترونية","مسابقات","تمثيل","بطولة","أولمبياد"] },

  // 800 الأدب
  "800": { name: "الأدب والبلاغة", icon: "✍️", keywords: ["أدب","أدبي","كتابة إبداعية","نصوص","نقد أدبي"] },
  "810": { name: "الأدب الأمريكي (بالإنجليزية)", icon: "🇺🇸", keywords: ["أدب أمريكي","روايات أمريكية","شعر أمريكي"] },
  "820": { name: "الأدب الإنجليزي", icon: "🇬🇧", keywords: ["أدب إنجليزي","شكسبير","روايات إنجليزية"] },
  "830": { name: "الأدب الألماني", icon: "🇩🇪", keywords: ["أدب ألماني","جوته","شيلر"] },
  "840": { name: "الأدب الفرنسي", icon: "🇫🇷", keywords: ["أدب فرنسي","فيكتور هيغو","فرانسيس"] },
  "850": { name: "الأدب الإيطالي", icon: "🇮🇹", keywords: ["أدب إيطالي","دانتي"] },
  "860": { name: "الأدب الإسباني", icon: "🇪🇸", keywords: ["أدب إسباني","سيرفانتس","دون كيشوت"] },
  "870": { name: "الأدب اللاتيني", icon: "🏛️", keywords: ["أدب لاتيني","فيرجيل"] },
  "880": { name: "الأدب اليوناني", icon: "🇬🇷", keywords: ["أدب يوناني","هوميروس","الإلياذة","الأوديسة"] },
  "890": { name: "الأدب العربي وسائر الآداب", icon: "🌙", keywords: ["أدب عربي","شعر عربي","رواية عربية","قصة عربية","شعر","رواية","قصيدة","ديوان","مسرحية","أدب","أدبيات","نثر","قصة قصيرة","أمثال عربية","حكايات","1001 ليلة","ألف ليلة","طه حسين","نجيب محفوظ","العقاد","المنفلوطي","الجاحظ"] },

  // 900 التاريخ والجغرافيا
  "900": { name: "التاريخ والجغرافيا", icon: "🗺️", keywords: ["تاريخ","جغرافيا","حضارة","شعوب","أمم","تاريخي"] },
  "910": { name: "الجغرافيا والسفر والاستكشاف", icon: "🧭", keywords: ["جغرافيا","سفر","رحلات","استكشاف","قارات","دول","مناخ","خرائط","جغرافيا بشرية"] },
  "920": { name: "التراجم والسير الذاتية", icon: "👤", keywords: ["سيرة","تراجم","سيرة ذاتية","مذكرات","سير الأعلام","شخصية","سيرة فلانة","قصة حياة"] },
  "930": { name: "التاريخ القديم", icon: "🏺", keywords: ["تاريخ قديم","حضارات قديمة","فراعنة","روما","إغريق","بابل","سومر","آثار","حضارة مصر"] },
  "940": { name: "تاريخ أوروبا", icon: "🇪🇺", keywords: ["تاريخ أوروبا","حرب عالمية","نابليون","هتلر","الثورة الفرنسية","الإمبراطوريات الأوروبية"] },
  "950": { name: "تاريخ آسيا", icon: "🌏", keywords: ["تاريخ آسيا","الصين","اليابان","الهند","كوريا","الشرق الأقصى","آسيا الوسطى"] },
  "960": { name: "تاريخ أفريقيا", icon: "🌍", keywords: ["تاريخ أفريقيا","مصر","المغرب","الحبشة","إثيوبيا","أفريقيا جنوب الصحراء"] },
  "970": { name: "تاريخ أمريكا الشمالية", icon: "🇺🇸", keywords: ["تاريخ أمريكا","الولايات المتحدة","كندا","الحرب الأهلية الأمريكية"] },
  "980": { name: "تاريخ أمريكا الجنوبية", icon: "🌎", keywords: ["تاريخ أمريكا اللاتينية","البرازيل","المكسيك","بيرو","الأزتيك","المايا"] },
  "990": { name: "تاريخ المناطق الأخرى", icon: "🌊", keywords: ["أوقيانوسيا","أستراليا","نيوزيلندا","جزر المحيط الهادئ"] },
};

// الفئات الرئيسية
const MAIN_CLASSES = [
  {num:"000", name:"الحاسوب والمعلومات", icon:"💻"},
  {num:"100", name:"الفلسفة وعلم النفس", icon:"🧠"},
  {num:"200", name:"الدين", icon:"☪️"},
  {num:"300", name:"العلوم الاجتماعية", icon:"👥"},
  {num:"400", name:"اللغات", icon:"🗣️"},
  {num:"500", name:"العلوم البحتة", icon:"🔬"},
  {num:"600", name:"التكنولوجيا", icon:"⚙️"},
  {num:"700", name:"الفنون", icon:"🎨"},
  {num:"800", name:"الأدب", icon:"✍️"},
  {num:"900", name:"التاريخ والجغرافيا", icon:"🗺️"},
];

// تصنيف ديوي الفرعي المفصل
const DETAILED_SUB = {
  "297.1": "القرآن الكريم وعلومه",
  "297.2": "عقيدة إسلامية",
  "297.3": "العبادات والشعائر",
  "297.4": "الفقه الإسلامي",
  "297.5": "الأخلاق الإسلامية",
  "297.6": "الحديث النبوي الشريف",
  "297.7": "الدعوة الإسلامية",
  "297.8": "الطوائف والمذاهب الإسلامية",
  "370.1": "فلسفة التعليم",
  "370.7": "إعداد المعلمين وتدريبهم",
  "371": "المدارس والتدريس",
  "372": "التعليم الابتدائي",
  "373": "التعليم الثانوي",
  "374": "التعليم الكبار",
  "375": "المناهج الدراسية",
  "376": "التعليم النسائي",
  "378": "التعليم الجامعي",
  "379": "الإدارة التعليمية",
  "510.1": "الحساب والأرقام",
  "512": "الجبر",
  "513": "الحساب الأرثيميتيكي",
  "514": "طوبولوجيا",
  "515": "التفاضل والتكامل",
  "516": "الهندسة",
  "519": "الاحتمالات والإحصاء الرياضي",
  "892.7": "الشعر العربي",
  "892.73": "الرواية العربية",
  "892.74": "القصة القصيرة العربية",
  "892.75": "المسرح العربي",
};

let classificationHistory = JSON.parse(localStorage.getItem('deweyHistory') || '[]');
let currentResult = null;

// ===== بناء واجهة الفئات =====
function buildDeweyBar() {
  const bar = document.getElementById('deweyBar');
  bar.innerHTML = MAIN_CLASSES.map(c =>
    `<div class="dewey-chip" onclick="filterByClass('${c.num}', event)">${c.icon} ${c.num}s — ${c.name}</div>`
  ).join('');
}

function buildBrowseGrid() {
  const grid = document.getElementById('browseGrid');
  grid.innerHTML = MAIN_CLASSES.map(c =>
    `<div class="browse-card" onclick="showSubclass('${c.num}','${c.name}')">
      <span class="browse-num">${c.icon}<br>${c.num}</span>
      <div class="browse-name">${c.name}</div>
    </div>`
  ).join('');
}

function showSubclass(mainNum, mainName) {
  const card = document.getElementById('subclassCard');
  const grid = document.getElementById('subclassGrid');
  const title = document.getElementById('subclassTitle');
  title.textContent = mainNum + ' — ' + mainName;

  const base = parseInt(mainNum);
  const subs = [];
  for (let i = base; i < base + 100; i += 10) {
    const key = String(i).padStart(3,'0');
    if (DEWEY_DB[key]) {
      subs.push({num: key, ...DEWEY_DB[key]});
    }
  }

  grid.innerHTML = subs.map(s =>
    `<div class="browse-card" onclick="fillFromBrowse('${s.num}')">
      <span class="browse-num">${s.icon}<br>${s.num}</span>
      <div class="browse-name">${s.name}</div>
    </div>`
  ).join('');

  card.style.display = 'block';
  card.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function fillFromBrowse(num) {
  switchTab('classify');
  setTimeout(() => {
    document.getElementById('bookSubject').focus();
    showToast(`📌 رقم ديوي المرجعي: ${num}`);
  }, 300);
}

function filterByClass(num, ev) {
  document.querySelectorAll('.dewey-chip').forEach(c => c.classList.remove('active'));
  const target = ev && ev.currentTarget ? ev.currentTarget : (ev && ev.target ? ev.target : null);
  if (target && target.classList) target.classList.add('active');
  showToast(`🔍 عرض الفئة ${num}`);
}


// ===================================================
// ===== وحدة الكاميرا الذكية — getUserMedia =====
// ===================================================

let _liveStream = null;    // stream لتبويب التصنيف
let _scanStream = null;    // stream لتبويب التصوير
let _capturedBlobs = [];   // الصور الملتقطة

// --- تبويب التصنيف: كاميرا مباشرة ---
async function openLiveCamera() {
  const wrap = document.getElementById('liveCameraWrap');
  const video = document.getElementById('liveCameraVideo');
  const btnAnalyze = document.getElementById('btnAnalyze');
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    // fallback: input file
    document.getElementById('bookImages').click();
    showToast('📁 الكاميرا المباشرة غير مدعومة — اختر صورة من المعرض');
    return;
  }
  try {
    showToast('⏳ جارٍ تشغيل الكاميرا...');
    _liveStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 854 }, height: { ideal: 640 } },
      audio: false
    });
    video.srcObject = _liveStream;
    wrap.style.display = 'block';
    btnAnalyze.style.display = 'none';
    showToast('✅ الكاميرا جاهزة — وجّه الكاميرا للصفحة واضغط التقاط');
  } catch (err) {
    _liveStream = null;
    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
      showToast('⚠️ يرجى السماح بالوصول إلى الكاميرا من إعدادات المتصفح');
    } else {
      document.getElementById('bookImages').click();
      showToast('📁 استخدم اختيار الصورة من المعرض بدلاً من ذلك');
    }
  }
}

function captureFromLiveCamera() {
  const video = document.getElementById('liveCameraVideo');
  const canvas = document.getElementById('captureCanvas');
  if (!video || !video.videoWidth) { showToast('⚠️ الكاميرا غير جاهزة'); return; }
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  canvas.toBlob(blob => {
    if (!blob) { showToast('⚠️ تعذر التقاط الصورة'); return; }
    // نسخة v17: تخزين صور مضغوطة أخف لتسريع OCR على الموبايل
    _capturedBlobs = [..._capturedBlobs, blob].slice(0, 2);
    stopLiveCamera();
    _showImgPreview('imgPreviewRow', _capturedBlobs);
    document.getElementById('btnAnalyze').style.display = 'flex';
    showToast(`✅ تم التقاط الصورة (${_capturedBlobs.length})`);
  }, 'image/jpeg', 0.62);
}

function stopLiveCamera() {
  const wrap = document.getElementById('liveCameraWrap');
  const video = document.getElementById('liveCameraVideo');
  if (_liveStream) { _liveStream.getTracks().forEach(t => t.stop()); _liveStream = null; }
  if (video) { video.srcObject = null; }
  if (wrap) wrap.style.display = 'none';
}

// --- تبويب التصوير: كاميرا مباشرة ---
async function openScanCamera() {
  const video = document.getElementById('scanLiveCameraVideo');
  const placeholder = document.getElementById('scanCameraPlaceholder');
  const overlay = document.getElementById('scanCaptureOverlay');
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    document.getElementById('scanImages').click();
    showToast('📁 الكاميرا المباشرة غير مدعومة — اختر صورة من المعرض');
    return;
  }
  try {
    showToast('⏳ جارٍ تشغيل الكاميرا...');
    _scanStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 854 }, height: { ideal: 640 } },
      audio: false
    });
    video.srcObject = _scanStream;
    video.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
    if (overlay) overlay.style.display = 'flex';
    showToast('✅ الكاميرا جاهزة — وجّه للصفحة واضغط التقاط');
  } catch (err) {
    _scanStream = null;
    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
      showToast('⚠️ يرجى السماح بالوصول إلى الكاميرا من إعدادات المتصفح');
    } else {
      document.getElementById('scanImages').click();
      showToast('📁 استخدم اختيار الصورة من المعرض');
    }
  }
}

function captureFromScanCamera() {
  const video = document.getElementById('scanLiveCameraVideo');
  const canvas = document.getElementById('scanCaptureCanvas');
  if (!video || !video.videoWidth) { showToast('⚠️ الكاميرا غير جاهزة'); return; }
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  canvas.toBlob(blob => {
    if (!blob) { showToast('⚠️ تعذر التقاط الصورة'); return; }
    // نسخة v17: تخزين صور مضغوطة أخف لتسريع OCR على الموبايل
    _capturedBlobs = [..._capturedBlobs, blob].slice(0, 2);
    stopScanCamera();
    _showImgPreview('scanImgPreviewRow', _capturedBlobs);
    document.getElementById('btnScanAnalyze').style.display = 'flex';
    showToast(`✅ تم التقاط الصورة (${_capturedBlobs.length}) — يمكنك التقاط أخرى أو الضغط تحليل`);
  }, 'image/jpeg', 0.62);
}

function stopScanCamera() {
  const video = document.getElementById('scanLiveCameraVideo');
  const placeholder = document.getElementById('scanCameraPlaceholder');
  const overlay = document.getElementById('scanCaptureOverlay');
  if (_scanStream) { _scanStream.getTracks().forEach(t => t.stop()); _scanStream = null; }
  if (video) { video.srcObject = null; video.style.display = 'none'; }
  if (placeholder) placeholder.style.display = 'flex';
  if (overlay) overlay.style.display = 'none';
}

// رفع الصور من المعرض (تبويب التصنيف)
function handleImageSelection(event) {
  const files = Array.from((event && event.target && event.target.files) ? event.target.files : []);
  if (!files.length) return;
  _capturedBlobs = [..._capturedBlobs, ...files].slice(0, 2);
  _showImgPreview('imgPreviewRow', _capturedBlobs);
  document.getElementById('btnAnalyze').style.display = 'flex';
  showToast(`✅ تم اختيار ${files.length} صورة`);
  _updateOCRStatus('ocrStatus', `تم اختيار ${_capturedBlobs.length} صورة — اضغط تحليل واستخراج التصنيف`);
  document.getElementById('ocrStatus').style.display = 'block';
}

// رفع الصور من المعرض (تبويب التصوير)
function handleScanImages(event) {
  const files = Array.from((event && event.target && event.target.files) ? event.target.files : []);
  if (!files.length) return;
  _capturedBlobs = [..._capturedBlobs, ...files].slice(0, 2);
  _showImgPreview('scanImgPreviewRow', _capturedBlobs);
  document.getElementById('btnScanAnalyze').style.display = 'flex';
  showToast(`✅ تم اختيار ${files.length} صورة`);
}

// عرض معاينة مصغرة للصور
function _showImgPreview(rowId, blobs) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.style.display = 'flex';
  row.innerHTML = blobs.map((b, i) => {
    const url = URL.createObjectURL(b);
    return `<div style="position:relative;border-radius:10px;overflow:hidden;border:2px solid rgba(26,117,110,.3);">
      <img src="${url}" style="height:80px;width:80px;object-fit:cover;display:block;" alt="صورة ${i+1}">
      <div style="position:absolute;top:2px;right:3px;background:#14796f;color:#fff;font-size:.65rem;font-weight:800;padding:2px 5px;border-radius:6px;">${i+1}</div>
    </div>`;
  }).join('');
}

function _updateOCRStatus(elId, msg) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = msg;
  el.style.display = msg ? 'block' : 'none';
}

// دالة openCameraInput للتوافق مع الكود القديم
function openCameraInput() { openLiveCamera(); }
function openImagePicker(id) { document.getElementById(id) && document.getElementById(id).click(); }
function previewScanImage() {}  // تم استبدالها

async 

function guessTitleFromOcr(text) {
  return text.split(/\n+/).map(x => x.trim()).filter(x => x.length > 5 && x.length < 90 && !/^(صفحة|الفهرس|المحتويات|إعداد|تأليف)$/i.test(x))[0] || '';
}

function useOcrTextForForm(autoClassify=false) {
  const text = document.getElementById('ocrText').value.trim();
  if (!text) { showToast('⚠️ لا يوجد نص مستخرج لنقله'); return; }
  const title = guessTitleFromOcr(text);
  if (title && !document.getElementById('bookTitle').value.trim()) document.getElementById('bookTitle').value = title;
  document.getElementById('bookSubject').value = text;
  const kws = extractKeywordsFromText(text).slice(0, 18).join('، ');
  document.getElementById('bookKeywords').value = kws;
  if (autoClassify) { switchTab('classify'); setTimeout(classifyBook, 250); }
  else showToast('✅ تم نقل النص إلى بيانات الكتاب');
}

function extractKeywordsFromText(text) {
  const clean = text.replace(/[٠-٩0-9ـ،؛:()\[\]{}.!?"'“”]/g,' ').toLowerCase();
  const stop = new Set('من إلى عن على في مع هذا هذه ذلك التي الذي كتاب صفحة المحتويات الفصل الباب الجزء مدخل مقدمة خاتمة تأليف إعداد دار نشر طبعة'.split(' '));
  const words = clean.split(/\s+/).filter(w => w.length > 3 && !stop.has(w));
  const freq = {};
  words.forEach(w => freq[w]=(freq[w]||0)+1);
  return Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(([w])=>w);
}

// ===== خوارزمية التصنيف =====
function classifyBook() {
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();
  const publisher = document.getElementById('bookPublisher').value.trim();
  const year = document.getElementById('bookYear').value.trim();
  const lang = document.getElementById('bookLang').value;
  const subject = document.getElementById('bookSubject').value.trim();
  const keywords = document.getElementById('bookKeywords').value.trim();
  const isbn = document.getElementById('bookISBN') ? document.getElementById('bookISBN').value.trim() : '';

  if (!title && !subject && !keywords) {
    showToast('⚠️ يرجى إدخال عنوان الكتاب أو الموضوع على الأقل');
    return;
  }

  showLoading(true);

  setTimeout(() => {
    const result = performClassification(title, subject, keywords, lang, author);
    currentResult = {...result, title, author, publisher, year, lang, isbn, subjectHeadings: result.subjectHeadings || []};
    displayResult(result, title, author, year);
    saveToHistory(currentResult);
    showLoading(false);
    document.getElementById('resultCard').scrollIntoView({behavior:'smooth', block:'nearest'});
  }, 800);
}


// ========================
// محرك تصنيف احترافي متعدد المراحل — بدون API
// ========================
const ENHANCED_DEWEY_DB = (typeof DEWEY_DB !== 'undefined') ? Object.assign({}, DEWEY_DB, {
  "004": { name: "علوم الحاسب", icon: "💻", keywords: ["حاسب","حاسوب","كمبيوتر","تكنولوجيا المعلومات","نظم المعلومات","معالجة البيانات"] },
  "005": { name: "البرمجة", icon: "⌨️", keywords: ["برمجة","برنامج","برامج","خوارزميات","جافاسكريبت","بايثون","تطوير تطبيقات","كود"] },
  "297.122": { name: "القرآن الكريم وعلومه", icon: "📖", keywords: ["قران","القران","القران الكريم","قرآن","المصحف","مصحف","علوم القران","تجويد","ترتيل","قراءات","سور القران"] },
  "297.1226": { name: "تفسير القرآن", icon: "📘", keywords: ["تفسير","تفسير القران","تفسير القرآن","معاني القران","الطبري","القرطبي","ابن كثير"] },
  "297.124": { name: "الحديث النبوي الشريف", icon: "📚", keywords: ["حديث","احاديث","الأحاديث","السنة","السنه","صحيح البخاري","صحيح مسلم","رياض الصالحين","الأربعون النووية"] },
  "297.14": { name: "الفقه الإسلامي", icon: "⚖️", keywords: ["فقه","الفقه","احكام","حلال","حرام","فتاوى","أصول الفقه","اصول الفقه","شريعة","المعاملات","العبادات"] }
}) : {};

const PRIORITY_RULES = [
  { test: ["القران الكريم","قران كريم","المصحف","مصحف"], result: {mainNum:"297", detailedNum:"297.122", className:"القرآن الكريم وعلومه", icon:"📖", confidence:98, subjectHeadings:["القرآن الكريم","علوم القرآن","المصاحف"]}},
  { test: ["تفسير القران","تفسير القرآن","تفسير"], result: {mainNum:"297", detailedNum:"297.1226", className:"تفسير القرآن", icon:"📘", confidence:96, subjectHeadings:["تفسير القرآن","علوم القرآن"]}},
  { test: ["حديث","احاديث","صحيح البخاري","صحيح مسلم","السنه النبويه","السنة النبوية"], result: {mainNum:"297", detailedNum:"297.124", className:"الحديث النبوي الشريف", icon:"📚", confidence:95, subjectHeadings:["الحديث النبوي","السنة النبوية"]}},
  { test: ["فقه","الفقه","احكام","فتاوى","اصول الفقه"], result: {mainNum:"297", detailedNum:"297.14", className:"الفقه الإسلامي", icon:"⚖️", confidence:94, subjectHeadings:["الفقه الإسلامي","الشريعة الإسلامية"]}},
  { test: ["برمجه","برمجة","خوارزميات","جافاسكريبت","بايثون"], result: {mainNum:"005", detailedNum:"005", className:"البرمجة", icon:"⌨️", confidence:93, subjectHeadings:["البرمجة","علوم الحاسب"]}},
  { test: ["حاسب","حاسوب","كمبيوتر","تكنولوجيا المعلومات"], result: {mainNum:"004", detailedNum:"004", className:"علوم الحاسب", icon:"💻", confidence:91, subjectHeadings:["الحاسبات","تكنولوجيا المعلومات"]}},
  { test: ["زراعه","زراعة","محاصيل","ري","اسمده","أسمدة"], result: {mainNum:"630", detailedNum:"630", className:"الزراعة", icon:"🌾", confidence:90, subjectHeadings:["الزراعة","المحاصيل"]}}
];

function normalizeArabic(text) {
  return String(text || "")
    .replace(/[أإآٱا]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[^\u0600-\u06FFa-zA-Z0-9\s.]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function keywordHit(text, kw) {
  const n = normalizeArabic(kw);
  if (!n) return false;
  return text.includes(n);
}

function extractSmartKeywords(text) {
  const normalized = normalizeArabic(text);
  const stop = new Set("من الى عن علي على في مع هذا هذه ذلك التي الذي كتاب كتب صفحه صفحة المحتويات الفصل الباب الجزء مدخل مقدمه مقدمة خاتمه خاتمة تاليف تأليف اعداد إعداد دار نشر طبعه طبعة".split(" "));
  const words = normalized.split(/\s+/).filter(w => w.length > 2 && !stop.has(w));
  const freq = {};
  words.forEach(w => freq[w] = (freq[w] || 0) + 1);
  return Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,30).map(([w])=>w);
}

function priorityClassify(text) {
  const n = normalizeArabic(text);
  for (const rule of PRIORITY_RULES) {
    if (rule.test.some(k => keywordHit(n, k))) {
      return Object.assign({}, rule.result, {
        alternatives: [],
        explanation: "✅ تم التصنيف عبر قاعدة أولوية موثوقة لمنع النتائج الخاطئة. تم تحليل العنوان والكلمات المفتاحية ثم تثبيت التصنيف المناسب."
      });
    }
  }
  return null;
}

function buildCandidates(text) {
  const n = normalizeArabic(text);
  const candidates = [];
  for (const [num, data] of Object.entries(ENHANCED_DEWEY_DB)) {
    if (!data || !data.keywords) continue;
    let score = 0;
    const matched = [];
    for (const kw of data.keywords) {
      const nk = normalizeArabic(kw);
      if (nk && n.includes(nk)) {
        const weight = nk.length >= 8 ? 7 : nk.length >= 5 ? 5 : 3;
        score += weight;
        matched.push(kw);
      }
    }
    // تعزيز العنوان إذا وردت الكلمة في أول النص
    if (matched.length && n.slice(0, 80).split(/\s+/).some(w => matched.map(normalizeArabic).includes(w))) score += 4;
    if (score > 0) candidates.push({num, data, score, matched});
  }
  return candidates.sort((a,b)=>b.score-a.score);
}

function validateClassification(best, text, candidates) {
  const n = normalizeArabic(text);
  // منع خطأ مشهور: القرآن لا يمكن أن يذهب للزراعة
  if ((n.includes("قران") || n.includes("مصحف")) && String(best.num).startsWith("630")) return false;
  // لو الدقة ضعيفة جدًا نطلب مراجعة بشرية بدل قرار خاطئ
  if (!best || best.score < 3) return false;
  return true;
}

function suggestSubjectHeadings(num, text) {
  const n = normalizeArabic(text);
  if (String(num).startsWith("297.1226")) return ["تفسير القرآن", "علوم القرآن"];
  if (String(num).startsWith("297.122")) return ["القرآن الكريم", "علوم القرآن", "المصاحف"];
  if (String(num).startsWith("297.124")) return ["الحديث النبوي", "السنة النبوية"];
  if (String(num).startsWith("297.14")) return ["الفقه الإسلامي", "الشريعة الإسلامية"];
  if (String(num).startsWith("004") || String(num).startsWith("005")) return ["علوم الحاسب", "تكنولوجيا المعلومات"];
  if (String(num).startsWith("370")) return ["التربية والتعليم", "المناهج"];
  if (String(num).startsWith("630")) return ["الزراعة", "المحاصيل"];
  if (String(num).startsWith("89")) return ["الأدب العربي"];
  return extractSmartKeywords(text).slice(0, 3);
}


// ========================
// قاعدة ديوي موسعة للمكتبات المدرسية العربية
// ========================
const DEEP_DEWEY_DB = {
  "000": {
    "name": "المعارف العامة وعلوم المعلومات",
    "icon": "📚",
    "keywords": [
      "معارف عامة",
      "موسوعة",
      "دائرة المعارف",
      "مراجع عامة",
      "معلومات عامة"
    ]
  },
  "001": {
    "name": "المعرفة والبحث",
    "icon": "🔎",
    "keywords": [
      "معرفة",
      "بحث علمي",
      "منهج البحث",
      "بحوث",
      "تفكير علمي"
    ]
  },
  "003": {
    "name": "النظم",
    "icon": "🧩",
    "keywords": [
      "نظم",
      "نظرية النظم",
      "أنظمة"
    ]
  },
  "004": {
    "name": "علوم الحاسب",
    "icon": "💻",
    "keywords": [
      "حاسب",
      "حاسوب",
      "كمبيوتر",
      "تكنولوجيا المعلومات",
      "نظم المعلومات",
      "معالجة البيانات",
      "أمن المعلومات",
      "شبكات"
    ]
  },
  "005": {
    "name": "البرمجة وبرامج الحاسب",
    "icon": "⌨️",
    "keywords": [
      "برمجة",
      "خوارزميات",
      "برنامج",
      "برامج",
      "بايثون",
      "جافاسكريبت",
      "تطبيقات",
      "تطوير برمجيات",
      "قواعد بيانات"
    ]
  },
  "006": {
    "name": "الذكاء الاصطناعي والوسائط",
    "icon": "🤖",
    "keywords": [
      "ذكاء اصطناعي",
      "تعلم آلي",
      "روبوت",
      "وسائط متعددة",
      "رؤية حاسوبية",
      "انترنت الاشياء"
    ]
  },
  "020": {
    "name": "علم المكتبات والمعلومات",
    "icon": "📚",
    "keywords": [
      "مكتبات",
      "مكتبة",
      "فهرسة",
      "تصنيف",
      "ديوي",
      "خدمات معلومات",
      "مصادر التعلم",
      "أخصائي مكتبات",
      "اخصائي مكتبات"
    ]
  },
  "025": {
    "name": "عمليات المكتبات والفهرسة",
    "icon": "🗂️",
    "keywords": [
      "فهرسة",
      "تصنيف الكتب",
      "بطاقة فهرسة",
      "إعارة",
      "جرد المكتبة",
      "تنظيم المكتبات"
    ]
  },
  "070": {
    "name": "الإعلام والصحافة والنشر",
    "icon": "📰",
    "keywords": [
      "إعلام",
      "صحافة",
      "نشر",
      "صحيفة",
      "مجلة",
      "إذاعة",
      "تلفزيون",
      "اعلام رقمي"
    ]
  },
  "100": {
    "name": "الفلسفة وعلم النفس",
    "icon": "🧠",
    "keywords": [
      "فلسفة",
      "فكر",
      "منطق",
      "علم النفس",
      "نفس",
      "تفكير"
    ]
  },
  "150": {
    "name": "علم النفس",
    "icon": "🧠",
    "keywords": [
      "علم النفس",
      "نمو نفسي",
      "صحة نفسية",
      "سلوك",
      "ذاكرة",
      "تعلم",
      "شخصية",
      "ذكاء عاطفي"
    ]
  },
  "155": {
    "name": "علم نفس النمو",
    "icon": "👶",
    "keywords": [
      "نمو الطفل",
      "المراهقة",
      "طفولة",
      "نمو نفسي",
      "مراحل النمو"
    ]
  },
  "158": {
    "name": "تطوير الذات",
    "icon": "🌱",
    "keywords": [
      "تطوير الذات",
      "تنمية بشرية",
      "ثقة بالنفس",
      "نجاح",
      "مهارات الحياة",
      "إدارة الوقت"
    ]
  },
  "160": {
    "name": "المنطق",
    "icon": "⚖️",
    "keywords": [
      "منطق",
      "استدلال",
      "برهان",
      "تفكير منطقي",
      "مغالطات"
    ]
  },
  "170": {
    "name": "الأخلاق",
    "icon": "✨",
    "keywords": [
      "أخلاق",
      "قيم",
      "فضائل",
      "سلوك أخلاقي",
      "أخلاقيات"
    ]
  },
  "200": {
    "name": "الدين",
    "icon": "☪️",
    "keywords": [
      "دين",
      "إيمان",
      "عبادة",
      "عقيدة",
      "أديان"
    ]
  },
  "220": {
    "name": "الكتاب المقدس",
    "icon": "📖",
    "keywords": [
      "إنجيل",
      "توراة",
      "كتاب مقدس",
      "عهد قديم",
      "عهد جديد"
    ]
  },
  "230": {
    "name": "المسيحية",
    "icon": "✝️",
    "keywords": [
      "مسيحية",
      "كنيسة",
      "مسيح",
      "لاهوت مسيحي"
    ]
  },
  "290": {
    "name": "الأديان الأخرى",
    "icon": "🕊️",
    "keywords": [
      "يهودية",
      "بوذية",
      "هندوسية",
      "أديان أخرى"
    ]
  },
  "297": {
    "name": "الإسلام",
    "icon": "☪️",
    "keywords": [
      "إسلام",
      "اسلام",
      "مسلم",
      "دين إسلامي",
      "شريعة",
      "عقيدة إسلامية"
    ]
  },
  "297.1": {
    "name": "مصادر الإسلام العامة",
    "icon": "☪️",
    "keywords": [
      "مصادر الإسلام",
      "الإسلام عام",
      "مدخل إلى الإسلام"
    ]
  },
  "297.122": {
    "name": "القرآن الكريم وعلومه",
    "icon": "📖",
    "keywords": [
      "قرآن",
      "قران",
      "القرآن الكريم",
      "القران الكريم",
      "مصحف",
      "المصحف",
      "علوم القرآن",
      "علوم القران",
      "سور القرآن",
      "سور القران",
      "تجويد",
      "ترتيل",
      "قراءات"
    ]
  },
  "297.1226": {
    "name": "تفسير القرآن",
    "icon": "📘",
    "keywords": [
      "تفسير",
      "تفسير القرآن",
      "تفسير القران",
      "معاني القرآن",
      "معاني القران",
      "ابن كثير",
      "الطبري",
      "القرطبي",
      "تفسير السعدي"
    ]
  },
  "297.124": {
    "name": "الحديث النبوي الشريف",
    "icon": "📚",
    "keywords": [
      "حديث",
      "أحاديث",
      "احاديث",
      "السنة النبوية",
      "السنه النبويه",
      "صحيح البخاري",
      "صحيح مسلم",
      "رياض الصالحين",
      "الأربعون النووية",
      "الاربعون النووية"
    ]
  },
  "297.14": {
    "name": "الفقه الإسلامي وأصوله",
    "icon": "⚖️",
    "keywords": [
      "فقه",
      "الفقه",
      "أصول الفقه",
      "اصول الفقه",
      "أحكام",
      "احكام",
      "حلال",
      "حرام",
      "فتاوى",
      "العبادات",
      "المعاملات",
      "الشريعة الإسلامية"
    ]
  },
  "297.2": {
    "name": "العقيدة الإسلامية",
    "icon": "🌙",
    "keywords": [
      "عقيدة",
      "توحيد",
      "إيمان",
      "الايمان",
      "أسماء الله الحسنى",
      "اسماء الله الحسنى"
    ]
  },
  "297.3": {
    "name": "العبادات الإسلامية",
    "icon": "🕋",
    "keywords": [
      "صلاة",
      "زكاة",
      "صوم",
      "صيام",
      "حج",
      "عمرة",
      "طهارة",
      "عبادات"
    ]
  },
  "297.5": {
    "name": "الأخلاق الإسلامية",
    "icon": "✨",
    "keywords": [
      "أخلاق إسلامية",
      "اداب اسلامية",
      "آداب إسلامية",
      "تزكية",
      "سلوك إسلامي"
    ]
  },
  "297.6": {
    "name": "السيرة النبوية",
    "icon": "🕌",
    "keywords": [
      "سيرة نبوية",
      "السيرة النبوية",
      "حياة الرسول",
      "محمد صلى الله عليه وسلم",
      "غزوات",
      "الهجرة النبوية"
    ]
  },
  "297.7": {
    "name": "الدعوة والإرشاد الإسلامي",
    "icon": "📣",
    "keywords": [
      "دعوة",
      "دعاة",
      "إرشاد ديني",
      "اصلاح ديني",
      "الدعوة الإسلامية"
    ]
  },
  "297.8": {
    "name": "المذاهب والفرق الإسلامية",
    "icon": "🏛️",
    "keywords": [
      "مذاهب إسلامية",
      "فرق إسلامية",
      "أهل السنة",
      "الشيعة",
      "تصوف",
      "صوفية"
    ]
  },
  "297.9": {
    "name": "تاريخ الإسلام والحضارة الإسلامية",
    "icon": "🏺",
    "keywords": [
      "تاريخ الإسلام",
      "حضارة إسلامية",
      "خلافة",
      "خلفاء",
      "أمويين",
      "عباسيين",
      "فتوحات إسلامية"
    ]
  },
  "300": {
    "name": "العلوم الاجتماعية",
    "icon": "👥",
    "keywords": [
      "علوم اجتماعية",
      "مجتمع",
      "اجتماع",
      "ثقافة"
    ]
  },
  "305": {
    "name": "الفئات الاجتماعية",
    "icon": "👪",
    "keywords": [
      "طفل",
      "أطفال",
      "مرأة",
      "نساء",
      "شباب",
      "مسنين",
      "فئات اجتماعية"
    ]
  },
  "310": {
    "name": "الإحصاء",
    "icon": "📊",
    "keywords": [
      "إحصاء",
      "إحصائيات",
      "تعداد",
      "بيانات إحصائية"
    ]
  },
  "320": {
    "name": "العلوم السياسية",
    "icon": "🏛️",
    "keywords": [
      "سياسة",
      "حكومة",
      "دولة",
      "ديمقراطية",
      "انتخابات",
      "برلمان",
      "دستور"
    ]
  },
  "330": {
    "name": "الاقتصاد",
    "icon": "💰",
    "keywords": [
      "اقتصاد",
      "مال",
      "بنوك",
      "استثمار",
      "تجارة",
      "سوق",
      "تنمية اقتصادية"
    ]
  },
  "340": {
    "name": "القانون",
    "icon": "⚖️",
    "keywords": [
      "قانون",
      "تشريع",
      "محكمة",
      "حقوق",
      "قضاء",
      "دستور",
      "عقوبات"
    ]
  },
  "350": {
    "name": "الإدارة العامة",
    "icon": "🏢",
    "keywords": [
      "إدارة عامة",
      "حكومة",
      "خدمة مدنية",
      "إدارة حكومية"
    ]
  },
  "360": {
    "name": "الخدمات والمشكلات الاجتماعية",
    "icon": "🤝",
    "keywords": [
      "خدمات اجتماعية",
      "رعاية",
      "فقر",
      "بطالة",
      "إعاقة",
      "أيتام",
      "مشكلات اجتماعية"
    ]
  },
  "370": {
    "name": "التربية والتعليم",
    "icon": "🎓",
    "keywords": [
      "تعليم",
      "تربية",
      "مدرسة",
      "مدارس",
      "مناهج",
      "تدريس",
      "معلم",
      "طالب",
      "تعلم",
      "إدارة مدرسية"
    ]
  },
  "371": {
    "name": "المدارس وإدارة التعليم",
    "icon": "🏫",
    "keywords": [
      "مدرسة",
      "إدارة مدرسية",
      "إدارة الصف",
      "انضباط",
      "نشاط مدرسي",
      "تعليم خاص"
    ]
  },
  "372": {
    "name": "التعليم الابتدائي",
    "icon": "🎒",
    "keywords": [
      "تعليم ابتدائي",
      "ابتدائي",
      "مرحلة ابتدائية",
      "تلاميذ",
      "أطفال المدرسة"
    ]
  },
  "373": {
    "name": "التعليم الثانوي",
    "icon": "🏫",
    "keywords": [
      "تعليم ثانوي",
      "ثانوي",
      "إعدادي",
      "مرحلة ثانوية"
    ]
  },
  "374": {
    "name": "تعليم الكبار",
    "icon": "👥",
    "keywords": [
      "تعليم الكبار",
      "محو الأمية",
      "تعليم مستمر"
    ]
  },
  "375": {
    "name": "المناهج الدراسية",
    "icon": "📘",
    "keywords": [
      "مناهج",
      "منهج",
      "كتاب مدرسي",
      "تطوير المناهج",
      "المقررات الدراسية"
    ]
  },
  "378": {
    "name": "التعليم العالي",
    "icon": "🎓",
    "keywords": [
      "جامعة",
      "تعليم جامعي",
      "تعليم عالي",
      "كلية",
      "دراسات عليا"
    ]
  },
  "379": {
    "name": "السياسات التعليمية",
    "icon": "📋",
    "keywords": [
      "سياسة تعليمية",
      "نظام التعليم",
      "تخطيط تعليمي",
      "إصلاح التعليم"
    ]
  },
  "390": {
    "name": "العادات والتقاليد والفولكلور",
    "icon": "🎭",
    "keywords": [
      "عادات",
      "تقاليد",
      "فولكلور",
      "تراث شعبي",
      "أمثال شعبية",
      "حكايات شعبية"
    ]
  },
  "400": {
    "name": "اللغات",
    "icon": "🗣️",
    "keywords": [
      "لغة",
      "لغات",
      "لغويات",
      "لسانيات",
      "ترجمة"
    ]
  },
  "410": {
    "name": "اللسانيات",
    "icon": "📝",
    "keywords": [
      "لسانيات",
      "لغويات",
      "علم اللغة",
      "دلالة",
      "أصوات",
      "صرف",
      "نحو عام"
    ]
  },
  "420": {
    "name": "اللغة الإنجليزية",
    "icon": "🇬🇧",
    "keywords": [
      "إنجليزي",
      "انجليزي",
      "إنجليزية",
      "english",
      "تعلم الإنجليزية",
      "قواعد إنجليزية"
    ]
  },
  "440": {
    "name": "اللغة الفرنسية",
    "icon": "🇫🇷",
    "keywords": [
      "فرنسي",
      "فرنسية",
      "french",
      "تعلم الفرنسية"
    ]
  },
  "492.7": {
    "name": "اللغة العربية",
    "icon": "🌙",
    "keywords": [
      "لغة عربية",
      "العربية",
      "عربي",
      "نحو",
      "صرف",
      "بلاغة",
      "إعراب",
      "معجم عربي",
      "قاموس عربي",
      "خط عربي"
    ]
  },
  "492.71": {
    "name": "النحو العربي",
    "icon": "📝",
    "keywords": [
      "نحو",
      "النحو",
      "إعراب",
      "اعراب",
      "الجملة العربية",
      "قواعد النحو"
    ]
  },
  "492.78": {
    "name": "البلاغة العربية",
    "icon": "✒️",
    "keywords": [
      "بلاغة",
      "البلاغة",
      "بيان",
      "بديع",
      "معاني",
      "استعارة",
      "تشبيه"
    ]
  },
  "500": {
    "name": "العلوم الطبيعية والرياضيات",
    "icon": "🔬",
    "keywords": [
      "علوم",
      "علوم طبيعية",
      "رياضيات",
      "فيزياء",
      "كيمياء",
      "أحياء"
    ]
  },
  "510": {
    "name": "الرياضيات",
    "icon": "➕",
    "keywords": [
      "رياضيات",
      "حساب",
      "جبر",
      "هندسة",
      "تفاضل",
      "تكامل",
      "إحصاء رياضي",
      "معادلات"
    ]
  },
  "512": {
    "name": "الجبر",
    "icon": "𝑥",
    "keywords": [
      "جبر",
      "معادلات",
      "متباينات",
      "كثيرات الحدود",
      "دوال جبرية"
    ]
  },
  "513": {
    "name": "الحساب",
    "icon": "🔢",
    "keywords": [
      "حساب",
      "جمع",
      "طرح",
      "ضرب",
      "قسمة",
      "أعداد",
      "كسور"
    ]
  },
  "515": {
    "name": "التحليل والتفاضل والتكامل",
    "icon": "∫",
    "keywords": [
      "تفاضل",
      "تكامل",
      "نهايات",
      "دوال",
      "تحليل رياضي"
    ]
  },
  "516": {
    "name": "الهندسة",
    "icon": "📐",
    "keywords": [
      "هندسة",
      "مثلث",
      "دائرة",
      "مساحة",
      "حجم",
      "زوايا",
      "هندسة فراغية"
    ]
  },
  "519": {
    "name": "الاحتمالات والإحصاء الرياضي",
    "icon": "🎲",
    "keywords": [
      "احتمالات",
      "إحصاء رياضي",
      "توزيع",
      "متوسط",
      "انحراف معياري"
    ]
  },
  "520": {
    "name": "الفلك",
    "icon": "⭐",
    "keywords": [
      "فلك",
      "نجوم",
      "كواكب",
      "فضاء",
      "مجرات",
      "كون",
      "الشمس",
      "القمر"
    ]
  },
  "530": {
    "name": "الفيزياء",
    "icon": "⚛️",
    "keywords": [
      "فيزياء",
      "حركة",
      "قوة",
      "طاقة",
      "كهرباء",
      "مغناطيس",
      "ضوء",
      "صوت",
      "حرارة"
    ]
  },
  "540": {
    "name": "الكيمياء",
    "icon": "⚗️",
    "keywords": [
      "كيمياء",
      "عناصر",
      "مركبات",
      "تفاعلات",
      "أحماض",
      "قواعد",
      "كيمياء عضوية",
      "كيمياء حيوية"
    ]
  },
  "550": {
    "name": "علوم الأرض والجيولوجيا",
    "icon": "🌍",
    "keywords": [
      "جيولوجيا",
      "أرض",
      "صخور",
      "معادن",
      "زلازل",
      "براكين",
      "مناخ",
      "طقس"
    ]
  },
  "570": {
    "name": "علم الأحياء",
    "icon": "🧬",
    "keywords": [
      "أحياء",
      "بيولوجيا",
      "خلية",
      "وراثة",
      "جينات",
      "كائنات حية",
      "بيئة",
      "فيروسات",
      "بكتيريا"
    ]
  },
  "580": {
    "name": "النباتات",
    "icon": "🌿",
    "keywords": [
      "نبات",
      "نباتات",
      "أشجار",
      "أزهار",
      "علم النبات",
      "أعشاب"
    ]
  },
  "590": {
    "name": "الحيوانات",
    "icon": "🐾",
    "keywords": [
      "حيوانات",
      "طيور",
      "أسماك",
      "حشرات",
      "زواحف",
      "ثدييات",
      "علم الحيوان"
    ]
  },
  "600": {
    "name": "التكنولوجيا والعلوم التطبيقية",
    "icon": "⚙️",
    "keywords": [
      "تكنولوجيا",
      "تقنية",
      "علوم تطبيقية",
      "هندسة",
      "صناعة"
    ]
  },
  "610": {
    "name": "الطب وعلوم الصحة",
    "icon": "⚕️",
    "keywords": [
      "طب",
      "صحة",
      "مرض",
      "أمراض",
      "علاج",
      "دواء",
      "جراحة",
      "تمريض",
      "صيدلة",
      "تغذية"
    ]
  },
  "611": {
    "name": "تشريح الإنسان",
    "icon": "🫀",
    "keywords": [
      "تشريح",
      "جسم الإنسان",
      "اعضاء الجسم",
      "أعضاء الجسم"
    ]
  },
  "612": {
    "name": "فسيولوجيا الإنسان",
    "icon": "🫁",
    "keywords": [
      "فسيولوجيا",
      "وظائف الأعضاء",
      "الدورة الدموية",
      "تنفس",
      "هضم"
    ]
  },
  "613": {
    "name": "الصحة العامة",
    "icon": "🏃",
    "keywords": [
      "صحة عامة",
      "وقاية",
      "نظافة",
      "تغذية صحية",
      "لياقة",
      "رياضة صحية"
    ]
  },
  "615": {
    "name": "الأدوية والعلاج",
    "icon": "💊",
    "keywords": [
      "دواء",
      "أدوية",
      "علاج",
      "صيدلة",
      "عقاقير",
      "مضاد حيوي"
    ]
  },
  "616": {
    "name": "الأمراض",
    "icon": "🩺",
    "keywords": [
      "أمراض",
      "مرض",
      "عدوى",
      "سرطان",
      "سكر",
      "ضغط",
      "قلب",
      "فيروس"
    ]
  },
  "620": {
    "name": "الهندسة",
    "icon": "🔧",
    "keywords": [
      "هندسة",
      "هندسة مدنية",
      "هندسة كهربائية",
      "هندسة ميكانيكية",
      "بناء",
      "إنشاء"
    ]
  },
  "621": {
    "name": "الهندسة الميكانيكية والكهربائية",
    "icon": "⚙️",
    "keywords": [
      "ميكانيكا",
      "كهرباء",
      "محركات",
      "آلات",
      "إلكترونيات"
    ]
  },
  "624": {
    "name": "الهندسة المدنية",
    "icon": "🏗️",
    "keywords": [
      "هندسة مدنية",
      "طرق",
      "كباري",
      "خرسانة",
      "مباني"
    ]
  },
  "630": {
    "name": "الزراعة",
    "icon": "🌾",
    "keywords": [
      "زراعة",
      "زراعي",
      "محاصيل",
      "ري",
      "تربة",
      "أسمدة",
      "اسمدة",
      "مبيدات",
      "فلاحة"
    ]
  },
  "635": {
    "name": "البستنة والخضروات",
    "icon": "🥕",
    "keywords": [
      "بستنة",
      "خضروات",
      "حدائق",
      "زراعة منزلية"
    ]
  },
  "636": {
    "name": "تربية الحيوان",
    "icon": "🐄",
    "keywords": [
      "تربية الحيوان",
      "ماشية",
      "أبقار",
      "أغنام",
      "دواجن"
    ]
  },
  "640": {
    "name": "الاقتصاد المنزلي",
    "icon": "🏠",
    "keywords": [
      "اقتصاد منزلي",
      "طبخ",
      "طهي",
      "منزل",
      "خياطة",
      "تغذية منزلية"
    ]
  },
  "650": {
    "name": "الإدارة والأعمال",
    "icon": "💼",
    "keywords": [
      "إدارة أعمال",
      "إدارة",
      "تسويق",
      "موارد بشرية",
      "مشروعات",
      "ريادة أعمال"
    ]
  },
  "690": {
    "name": "البناء",
    "icon": "🏗️",
    "keywords": [
      "بناء",
      "تشييد",
      "مقاولات",
      "خرسانة",
      "عمارة مباني"
    ]
  },
  "700": {
    "name": "الفنون والترفيه",
    "icon": "🎨",
    "keywords": [
      "فن",
      "فنون",
      "ترفيه",
      "رسم",
      "موسيقى",
      "رياضة"
    ]
  },
  "720": {
    "name": "العمارة",
    "icon": "🏛️",
    "keywords": [
      "عمارة",
      "تصميم معماري",
      "مباني",
      "معماري"
    ]
  },
  "740": {
    "name": "الرسم والزخرفة",
    "icon": "✏️",
    "keywords": [
      "رسم",
      "زخرفة",
      "خط",
      "تصميم",
      "جرافيك"
    ]
  },
  "770": {
    "name": "التصوير الفوتوغرافي",
    "icon": "📷",
    "keywords": [
      "تصوير",
      "فوتوغرافيا",
      "كاميرا",
      "صور"
    ]
  },
  "780": {
    "name": "الموسيقى",
    "icon": "🎵",
    "keywords": [
      "موسيقى",
      "غناء",
      "ألحان",
      "آلات موسيقية"
    ]
  },
  "790": {
    "name": "الرياضة والألعاب",
    "icon": "⚽",
    "keywords": [
      "رياضة",
      "كرة قدم",
      "ألعاب",
      "مسابقات",
      "أولمبياد",
      "شطرنج"
    ]
  },
  "800": {
    "name": "الأدب",
    "icon": "✍️",
    "keywords": [
      "أدب",
      "أدبي",
      "نصوص",
      "نقد أدبي"
    ]
  },
  "808": {
    "name": "الكتابة والبلاغة العامة",
    "icon": "🖋️",
    "keywords": [
      "كتابة",
      "تعبير",
      "إنشاء",
      "مهارات الكتابة",
      "بلاغة عامة"
    ]
  },
  "810": {
    "name": "الأدب الأمريكي",
    "icon": "🇺🇸",
    "keywords": [
      "أدب أمريكي",
      "رواية أمريكية",
      "شعر أمريكي"
    ]
  },
  "820": {
    "name": "الأدب الإنجليزي",
    "icon": "🇬🇧",
    "keywords": [
      "أدب إنجليزي",
      "شكسبير",
      "روايات إنجليزية"
    ]
  },
  "840": {
    "name": "الأدب الفرنسي",
    "icon": "🇫🇷",
    "keywords": [
      "أدب فرنسي",
      "رواية فرنسية",
      "فيكتور هوجو"
    ]
  },
  "890": {
    "name": "آداب اللغات الأخرى",
    "icon": "🌍",
    "keywords": [
      "آداب أخرى",
      "أدب عالمي مترجم"
    ]
  },
  "892.7": {
    "name": "الأدب العربي",
    "icon": "🌙",
    "keywords": [
      "أدب عربي",
      "الأدب العربي",
      "شعر",
      "ديوان",
      "قصيدة",
      "رواية",
      "قصة",
      "مسرحية",
      "نثر",
      "طه حسين",
      "نجيب محفوظ",
      "العقاد",
      "المنفلوطي",
      "الجاحظ"
    ]
  },
  "892.71": {
    "name": "الشعر العربي",
    "icon": "🎙️",
    "keywords": [
      "شعر عربي",
      "قصيدة",
      "ديوان",
      "شاعر",
      "قافية",
      "بحور الشعر"
    ]
  },
  "892.73": {
    "name": "الرواية العربية",
    "icon": "📖",
    "keywords": [
      "رواية عربية",
      "رواية",
      "سرد",
      "روائي",
      "نجيب محفوظ"
    ]
  },
  "892.74": {
    "name": "القصة العربية",
    "icon": "📘",
    "keywords": [
      "قصة",
      "قصة قصيرة",
      "قصص عربية",
      "حكايات"
    ]
  },
  "892.75": {
    "name": "المسرح العربي",
    "icon": "🎭",
    "keywords": [
      "مسرحية",
      "مسرح عربي",
      "نص مسرحي"
    ]
  },
  "900": {
    "name": "التاريخ والجغرافيا",
    "icon": "🗺️",
    "keywords": [
      "تاريخ",
      "جغرافيا",
      "حضارة",
      "خرائط",
      "سفر"
    ]
  },
  "910": {
    "name": "الجغرافيا والرحلات",
    "icon": "🧭",
    "keywords": [
      "جغرافيا",
      "خرائط",
      "رحلات",
      "سفر",
      "استكشاف",
      "بلدان"
    ]
  },
  "912": {
    "name": "الخرائط والأطالس",
    "icon": "🗺️",
    "keywords": [
      "خريطة",
      "خرائط",
      "أطلس",
      "اطلس"
    ]
  },
  "920": {
    "name": "التراجم والسير",
    "icon": "👤",
    "keywords": [
      "سيرة",
      "سير",
      "ترجمة",
      "تراجم",
      "مذكرات",
      "حياة",
      "أعلام"
    ]
  },
  "930": {
    "name": "التاريخ القديم",
    "icon": "🏺",
    "keywords": [
      "تاريخ قديم",
      "حضارات قديمة",
      "فراعنة",
      "آثار",
      "رومان",
      "إغريق"
    ]
  },
  "932": {
    "name": "تاريخ مصر القديمة",
    "icon": "🏺",
    "keywords": [
      "مصر القديمة",
      "الفراعنة",
      "فرعون",
      "حضارة مصر القديمة",
      "آثار مصرية"
    ]
  },
  "940": {
    "name": "تاريخ أوروبا",
    "icon": "🇪🇺",
    "keywords": [
      "تاريخ أوروبا",
      "حرب عالمية",
      "نابليون",
      "الثورة الفرنسية"
    ]
  },
  "950": {
    "name": "تاريخ آسيا",
    "icon": "🌏",
    "keywords": [
      "تاريخ آسيا",
      "الصين",
      "اليابان",
      "الهند",
      "آسيا"
    ]
  },
  "960": {
    "name": "تاريخ أفريقيا",
    "icon": "🌍",
    "keywords": [
      "تاريخ أفريقيا",
      "افريقيا",
      "إفريقيا"
    ]
  },
  "962": {
    "name": "تاريخ مصر الحديث",
    "icon": "🇪🇬",
    "keywords": [
      "تاريخ مصر",
      "مصر الحديثة",
      "محمد علي",
      "ثورة يوليو",
      "ثورة 1919",
      "تاريخ مصر الحديث"
    ]
  },
  "970": {
    "name": "تاريخ أمريكا الشمالية",
    "icon": "🇺🇸",
    "keywords": [
      "تاريخ أمريكا",
      "الولايات المتحدة",
      "كندا"
    ]
  },
  "980": {
    "name": "تاريخ أمريكا الجنوبية",
    "icon": "🌎",
    "keywords": [
      "أمريكا الجنوبية",
      "البرازيل",
      "الأرجنتين"
    ]
  }
};

const DEEP_PRIORITY_RULES = [
  {patterns:["القران الكريم","قران كريم","المصحف","مصحف","سور القران","سور القرآن"], num:"297.122"},
  {patterns:["تفسير القران","تفسير القرآن","ابن كثير","الطبري","القرطبي"], num:"297.1226"},
  {patterns:["صحيح البخاري","صحيح مسلم","رياض الصالحين","الاربعون النووية","الأربعون النووية","حديث","احاديث"], num:"297.124"},
  {patterns:["اصول الفقه","أصول الفقه","فقه","فتاوى","حلال","حرام"], num:"297.14"},
  {patterns:["سيرة نبوية","السيره النبويه","السيرة النبوية","حياة الرسول","غزوات"], num:"297.6"},
  {patterns:["توحيد","عقيدة","اسماء الله الحسنى","أسماء الله الحسنى"], num:"297.2"},
  {patterns:["صلاة","زكاة","صوم","صيام","حج","عمرة"], num:"297.3"},
  {patterns:["برمجة","برمجه","خوارزميات","بايثون","جافاسكريبت"], num:"005"},
  {patterns:["ذكاء اصطناعي","تعلم آلي","روبوت"], num:"006"},
  {patterns:["فهرسة","تصنيف ديوي","بطاقة فهرسة","علم المكتبات"], num:"020"},
  {patterns:["نحو","اعراب","إعراب","قواعد النحو"], num:"492.71"},
  {patterns:["بلاغة","البلاغه","البلاغة","استعارة","تشبيه"], num:"492.78"},
  {patterns:["شعر عربي","ديوان","قصيدة"], num:"892.71"},
  {patterns:["رواية عربية","رواية","روائي"], num:"892.73"},
  {patterns:["قصة قصيرة","قصص عربية"], num:"892.74"},
  {patterns:["مصر القديمة","الفراعنة","فرعون"], num:"932"},
  {patterns:["تاريخ مصر الحديث","ثورة يوليو","ثورة 1919","محمد علي"], num:"962"},
  {patterns:["زراعة","زراعه","محاصيل","ري","أسمدة","اسمده"], num:"630"}
];

function normalizeArabicDeep(text) {
  return String(text || "")
    .replace(/[أإآٱا]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[^؀-ۿa-zA-Z0-9\s.]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getDeweyRecord(num) {
  return DEEP_DEWEY_DB[num] || (typeof ENHANCED_DEWEY_DB !== 'undefined' ? ENHANCED_DEWEY_DB[num] : null) || (typeof DEWEY_DB !== 'undefined' ? DEWEY_DB[num] : null);
}

function deepPriorityClassify(rawText) {
  const text = normalizeArabicDeep(rawText);
  for (const rule of DEEP_PRIORITY_RULES) {
    for (const p of rule.patterns) {
      if (text.includes(normalizeArabicDeep(p))) {
        const rec = getDeweyRecord(rule.num);
        if (!rec) continue;
        return {
          mainNum: String(rule.num).split(".")[0],
          detailedNum: rule.num,
          className: rec.name,
          icon: rec.icon || "📌",
          confidence: 98,
          alternatives: [],
          subjectHeadings: suggestDeepSubjectHeadings(rule.num, rawText),
          explanation: "✅ تم التصنيف عبر قاعدة أولوية دقيقة من خطة ديوي الموسعة لمنع النتائج الخاطئة."
        };
      }
    }
  }
  return null;
}

function scoreDeepDewey(rawText) {
  const text = normalizeArabicDeep(rawText);
  const candidates = [];
  for (const [num, rec] of Object.entries(DEEP_DEWEY_DB)) {
    let score = 0;
    const matched = [];
    for (const kw of (rec.keywords || [])) {
      const k = normalizeArabicDeep(kw);
      if (!k) continue;
      if (text.includes(k)) {
        const weight = k.length >= 10 ? 10 : k.length >= 6 ? 7 : 4;
        score += weight;
        matched.push(kw);
      }
    }
    // ترجيح الأقسام الدقيقة على الرئيسية عند التعادل
    if (score > 0 && String(num).includes(".")) score += 3;
    if (score > 0) candidates.push({num, rec, score, matched});
  }
  return candidates.sort((a,b) => b.score - a.score);
}

// alias للتوافق مع الكود القديم
function updateOCRStatus(msg) { _updateOCRStatus('ocrStatus', msg); }

// ===================================================
// ===== قاموس رؤوس الموضوعات المعيارية الشاملة =====
// ===================================================
const SUBJECT_HEADINGS_MAP = {
  // القرآن الكريم وعلومه
  "297.122":  ["القرآن الكريم", "علوم القرآن", "المصاحف الشريفة", "التجويد والترتيل"],
  "297.1226": ["تفسير القرآن الكريم", "علوم القرآن", "التأويل القرآني"],
  "297.1227": ["ترجمات معاني القرآن", "القرآن الكريم — ترجمة"],
  "297.124":  ["الحديث النبوي الشريف", "السنة النبوية", "علم الحديث", "مصطلح الحديث"],
  "297.1245": ["الأحاديث الصحيحة", "صحيح البخاري", "صحيح مسلم"],
  "297.125":  ["الفقه الحديثي", "رجال الحديث", "الجرح والتعديل"],
  "297.14":   ["الفقه الإسلامي", "الشريعة الإسلامية", "أصول الفقه", "الأحكام الشرعية"],
  "297.141":  ["العبادات الإسلامية", "الصلاة", "الزكاة", "الصوم", "الحج"],
  "297.142":  ["المعاملات الإسلامية", "البيع والشراء", "العقود الإسلامية"],
  "297.2":    ["العقيدة الإسلامية", "التوحيد", "أسماء الله الحسنى وصفاته", "الإيمان"],
  "297.3":    ["العبادات الإسلامية", "الشعائر الدينية", "الصلاة", "الحج والعمرة"],
  "297.5":    ["الأخلاق الإسلامية", "آداب إسلامية", "تزكية النفس", "السلوك الإسلامي"],
  "297.6":    ["السيرة النبوية", "حياة النبي محمد ﷺ", "الغزوات والسرايا", "الهجرة النبوية"],
  "297.7":    ["الدعوة الإسلامية", "الإرشاد الديني", "الدعاة والمرشدون"],
  "297.8":    ["المذاهب الإسلامية", "الفرق الإسلامية", "أهل السنة والجماعة"],
  "297.9":    ["تاريخ الإسلام", "الحضارة الإسلامية", "الخلافة الإسلامية", "الفتوحات الإسلامية"],
  "297":      ["الإسلام", "الدين الإسلامي"],
  // الفلسفة وعلم النفس
  "100":  ["الفلسفة", "الفكر الفلسفي"],
  "150":  ["علم النفس", "السلوك الإنساني", "الصحة النفسية"],
  "155":  ["علم نفس النمو", "نمو الطفل", "علم النفس التطوري"],
  "158":  ["تطوير الذات", "تنمية المهارات الشخصية", "إدارة الوقت والإنتاجية"],
  "170":  ["الأخلاق", "الفلسفة الأخلاقية", "القيم والمبادئ"],
  "180":  ["الفلسفة الإسلامية", "الفلسفة الشرقية", "فلاسفة العرب والمسلمين"],
  // علم المكتبات
  "020":  ["علم المكتبات والمعلومات", "إدارة المكتبات", "أخصائيو المكتبات"],
  "025":  ["خدمات المكتبات", "الفهرسة والتصنيف", "تنظيم المعلومات", "إعارة الكتب"],
  "025.3":["الفهرسة الوصفية", "قواعد الفهرسة", "البيانات الببليوغرافية"],
  "025.4":["التصنيف", "تصنيف ديوي العشري", "التصنيف العشري العالمي"],
  "028":  ["تشجيع القراءة", "اختيار المواد المكتبية", "القراءة والاطلاع"],
  "028.5":["أدب الأطفال", "مكتبات الأطفال", "القراءة للناشئة"],
  // التربية والتعليم
  "370":  ["التربية والتعليم", "الفكر التربوي", "فلسفة التعليم"],
  "371":  ["إدارة المدارس", "إدارة الفصل الدراسي", "النشاط المدرسي", "التعليم الخاص"],
  "372":  ["التعليم الابتدائي", "مرحلة التعليم الأساسي", "تعليم الأطفال"],
  "373":  ["التعليم الإعدادي والثانوي", "مرحلة الإعداد والتوجيه"],
  "374":  ["تعليم الكبار", "محو الأمية", "التعليم المستمر"],
  "375":  ["المناهج الدراسية", "تطوير المناهج", "الكتب المدرسية"],
  "378":  ["التعليم الجامعي", "التعليم العالي", "الدراسات العليا"],
  // اللغة العربية
  "492":  ["اللغة العربية", "علوم اللغة العربية"],
  "492.7":["اللغة العربية — قواعد وأساليب", "النحو العربي", "الصرف العربي"],
  "492.71":["النحو العربي", "قواعد اللغة العربية", "الإعراب"],
  "492.72":["الصرف العربي", "بناء الكلمة العربية", "الاشتقاق"],
  "492.73":["المعجمات العربية", "قواميس اللغة العربية", "علم المعجم"],
  "492.75":["علم الدلالة العربية", "فقه اللغة العربية"],
  "492.78":["البلاغة العربية", "علوم البيان والبديع والمعاني", "الأساليب البلاغية"],
  // الأدب العربي
  "892":  ["الأدب العربي", "الآداب العربية"],
  "892.7":["الأدب العربي الكلاسيكي", "الأدب العربي القديم والحديث"],
  "892.71":["الشعر العربي", "الشعراء العرب", "دواوين الشعر العربي", "قصائد عربية"],
  "892.73":["الرواية العربية", "الروائيون العرب", "القصص العربية الطويلة"],
  "892.74":["القصة القصيرة العربية", "قصاصون عرب"],
  "892.75":["المسرح العربي", "النصوص المسرحية العربية"],
  "892.78":["النثر العربي", "المقالات العربية", "الأدب العربي النثري"],
  // العلوم البحتة
  "510":  ["الرياضيات", "العلوم الرياضية"],
  "512":  ["الجبر", "المعادلات الجبرية", "نظرية الأعداد"],
  "513":  ["الحساب", "العمليات الحسابية", "الأعداد والنسب"],
  "515":  ["التفاضل والتكامل", "التحليل الرياضي", "نظرية الدوال"],
  "516":  ["الهندسة الرياضية", "الهندسة المستوية والفراغية"],
  "519":  ["الإحصاء والاحتمالات", "الإحصاء التطبيقي"],
  "520":  ["الفلك", "علم الفلك", "الكون والمجرات", "المجموعة الشمسية"],
  "530":  ["الفيزياء", "قوانين الفيزياء", "الكهرباء والمغناطيسية"],
  "540":  ["الكيمياء", "التفاعلات الكيميائية", "الكيمياء العضوية"],
  "550":  ["علوم الأرض", "الجيولوجيا", "علم الأرصاد الجوية"],
  "570":  ["علم الأحياء", "البيولوجيا", "علم الوراثة", "علم البيئة"],
  "580":  ["علم النباتات", "النباتات الوعائية", "الأشجار والأعشاب"],
  "590":  ["علم الحيوان", "تصنيف الحيوانات", "سلوك الحيوانات"],
  // التكنولوجيا
  "004":  ["علوم الحاسب", "نظم المعلومات", "تكنولوجيا المعلومات والاتصالات"],
  "005":  ["برمجيات الحاسب", "البرمجة", "خوارزميات وبنية البيانات"],
  "006":  ["الذكاء الاصطناعي", "تعلم الآلة", "الروبوتات والأتمتة"],
  "610":  ["الطب وعلوم الصحة", "الرعاية الصحية", "الأمراض والعلاج"],
  "613":  ["الصحة العامة", "الوقاية والتغذية", "اللياقة البدنية"],
  "620":  ["الهندسة", "الهندسة التطبيقية", "الهندسة الميكانيكية والكهربائية"],
  "630":  ["الزراعة", "العلوم الزراعية", "المحاصيل الزراعية", "الإنتاج النباتي والحيواني"],
  "640":  ["الاقتصاد المنزلي", "إدارة الأسرة", "الطهي والتغذية المنزلية"],
  "650":  ["الإدارة والأعمال", "إدارة المنظمات", "التسويق وإدارة الموارد البشرية"],
  // التاريخ والجغرافيا
  "900":  ["التاريخ والجغرافيا", "الدراسات التاريخية"],
  "909":  ["التاريخ العالمي", "الحضارات الإنسانية"],
  "910":  ["الجغرافيا", "الجغرافيا البشرية والطبيعية", "الرحلات والاستكشافات"],
  "920":  ["التراجم والسير الذاتية", "أعلام وشخصيات"],
  "930":  ["التاريخ القديم", "الحضارات القديمة", "آثار وحفريات"],
  "932":  ["تاريخ مصر الفرعونية", "الحضارة المصرية القديمة", "الفراعنة"],
  "953":  ["تاريخ شبه الجزيرة العربية", "الخليج العربي"],
  "962":  ["تاريخ مصر الحديث والمعاصر", "مصر — تاريخ سياسي واجتماعي"],
  "963":  ["تاريخ إثيوبيا وشرق أفريقيا"],
  "940":  ["تاريخ أوروبا", "الحربان العالميتان الأولى والثانية"],
  "950":  ["تاريخ آسيا", "تاريخ الشرق الأقصى"],
  // الفنون
  "700":  ["الفنون الجميلة", "تاريخ الفنون", "الإبداع الفني"],
  "790":  ["الرياضة والألعاب", "الألعاب الأولمبية", "الترفيه"],
};

function suggestDeepSubjectHeadings(num, rawText) {
  const n = String(num || '');
  // بحث من الأدق إلى الأعم
  const keys = Object.keys(SUBJECT_HEADINGS_MAP).sort((a,b) => b.length - a.length);
  for (const key of keys) {
    if (n.startsWith(key)) {
      return [...SUBJECT_HEADINGS_MAP[key]];
    }
  }
  // fallback: استخراج كلمات مفتاحية ذكية من النص
  if (rawText && rawText.length > 3) {
    return extractSmartKeywords(rawText).slice(0, 4);
  }
  return [];
}



function validateDeepDewey(num, rawText) {
  const text = normalizeArabicDeep(rawText);
  // قيود منع الخلط
  if ((text.includes("قران") || text.includes("مصحف")) && String(num).startsWith("63")) return false;
  if ((text.includes("حديث") || text.includes("بخاري") || text.includes("مسلم")) && !String(num).startsWith("297")) return false;
  if ((text.includes("نحو") || text.includes("بلاغه") || text.includes("بلاغة")) && String(num).startsWith("63")) return false;
  return true;
}

function performClassification(title, subject, keywords, lang, author) {
  // بناء النص الموحد — العنوان بوزن ×3 لرفع الدقة
  const titleWeight = [title, title, title].filter(Boolean).join(' ');
  const rawText = [titleWeight, subject, keywords, author].filter(Boolean).join(' ');

  // المرحلة 1: أولويات محددة مسبقاً
  const priority = deepPriorityClassify(rawText);
  if (priority) return priority;

  // المرحلة 2: تسجيل نقاط موسّع
  const candidates = scoreDeepDewey(rawText);
  if (!candidates.length) {
    const fallback = getDefaultByLang(lang, normalizeArabicDeep(rawText));
    fallback.confidence = 40;
    fallback.subjectHeadings = suggestDeepSubjectHeadings(fallback.detailedNum || fallback.mainNum, rawText);
    fallback.explanation = '⚠️ لم تكفِ البيانات لاختيار تصنيف دقيق. أضف وصفاً للموضوع أو كلمات مفتاحية لرفع الدقة.';
    return fallback;
  }

  // المرحلة 3: التحقق من صحة التصنيف
  let best = candidates[0];
  if (!validateDeepDewey(best.num, rawText)) {
    const valid = candidates.find(c => validateDeepDewey(c.num, rawText));
    if (valid) best = valid;
  }

  // حساب الدقة بمعادلة محسّنة
  const rawConf = 50 + Math.min(best.score * 3.5, 46);
  const confidence = Math.max(55, Math.min(98, Math.round(rawConf)));

  const alternatives = candidates
    .filter(c => c.num !== best.num && validateDeepDewey(c.num, rawText))
    .slice(0, 4)
    .map(c => ({ num: c.num, name: c.rec.name, icon: c.rec.icon || '📌' }));

  const sh = suggestDeepSubjectHeadings(best.num, rawText);
  const matchedKw = best.matched.slice(0, 8).join('، ') || '—';

  return {
    mainNum: String(best.num).split('.')[0],
    detailedNum: best.num,
    className: best.rec.name,
    icon: best.rec.icon || '📌',
    confidence,
    alternatives,
    subjectHeadings: sh,
    explanation: `✅ تم التصنيف وفق خطة ديوي الموسعة<br>
      <strong>الكلمات المطابقة:</strong> ${matchedKw}<br>
      <strong>رؤوس الموضوعات:</strong> ${sh.join('، ') || '—'}<br>
      <small style="color:#667">📌 يُنصح بمراجعة الرقم مع جداول ديوي الرسمية للتأكد من الدقة القصوى</small>`
  };
}



function generateDetailedNumber(mainNum, text) {
  const base = parseInt(mainNum);

  // قواعد فرعية مخصصة
  if (mainNum === "297") {
    if (text.match(/قرآن|تفسير|تجويد|ترتيل|قراءات/)) return "297.1";
    if (text.match(/عقيدة|توحيد|إيمان|أسماء الله/)) return "297.2";
    if (text.match(/صلاة|زكاة|صوم|حج|عبادة/)) return "297.3";
    if (text.match(/فقه|حلال|حرام|شريعة|أحكام|فتوى/)) return "297.4";
    if (text.match(/أخلاق إسلامية|تزكية|سلوك/)) return "297.5";
    if (text.match(/حديث|سنة|نبوي|محدثين/)) return "297.6";
    if (text.match(/دعوة|إصلاح|دعاة/)) return "297.7";
    return "297";
  }
  if (mainNum === "370") {
    if (text.match(/ابتدائي|أطفال صغار|تأسيس|المرحلة الأولى/)) return "372";
    if (text.match(/ثانوي|إعدادي|المرحلة الثانوية/)) return "373";
    if (text.match(/جامعة|كلية|عالي/)) return "378";
    if (text.match(/منهج|مناهج|كتاب مدرسي/)) return "375";
    if (text.match(/معلم|مدرس|تدريب|إعداد/)) return "370.7";
    if (text.match(/مدرسة|تعليم|إدارة مدرسية/)) return "371";
    return "370";
  }
  if (mainNum === "510") {
    if (text.match(/جبر|معادلة|متعددة الحدود/)) return "512";
    if (text.match(/هندسة فراغية|مستوى|زاوية|مثلث|دائرة/)) return "516";
    if (text.match(/تفاضل|تكامل|دوال/)) return "515";
    if (text.match(/إحصاء|احتمال|توزيع/)) return "519";
    if (text.match(/حساب|ضرب|قسمة|جمع|طرح/)) return "513";
    return "510";
  }
  if (mainNum === "890") {
    if (text.match(/شعر|قصيدة|ديوان|قافية|شاعر/)) return "892.7";
    if (text.match(/رواية|قص|سرد|ذاكرة|راوي/)) return "892.73";
    if (text.match(/قصة قصيرة/)) return "892.74";
    if (text.match(/مسرح|مسرحية|مسرحي/)) return "892.75";
    return "892";
  }
  if (mainNum === "492") return "492.7"; // نحو/لغة عربية

  // الرقم الفرعي العام (آخر رقمين)
  const tenBase = Math.floor(base / 10) * 10;
  for (let i = tenBase; i < tenBase + 10; i++) {
    const key = String(i).padStart(3,'0');
    if (key !== mainNum && DEWEY_DB[key]) {
      // تحقق إذا كانت الكلمات المفتاحية تطابق
      const subScore = DEWEY_DB[key].keywords.filter(kw => text.includes(kw)).length;
      if (subScore > 0 && key > mainNum) return key;
    }
  }

  return mainNum;
}

function getDefaultByLang(lang, text) {
  let num = "400"; let name = "اللغات والآداب";
  if (lang === "ar") { num = "492.7"; name = "اللغة العربية"; }
  else if (lang === "en") { num = "420"; name = "اللغة الإنجليزية"; }
  else if (lang === "fr") { num = "440"; name = "اللغة الفرنسية"; }
  return {
    mainNum: num.split('.')[0],
    detailedNum: num,
    className: name,
    icon: "📖",
    confidence: 45,
    alternatives: [],
    explanation: "⚠️ لم يتمكن النظام من التعرف على موضوع محدد. تم التصنيف بناءً على لغة الكتاب. يُنصح بمراجعة التصنيف يدوياً."
  };
}

function generateExplanation(num, text, detailedNum) {
  const data = DEWEY_DB[num];
  const matchedKws = data.keywords.filter(kw => text.includes(kw.toLowerCase())).slice(0, 5);
  
  let exp = `<strong>الفئة الرئيسية:</strong> ${num} — ${data.name}<br>`;
  exp += `<strong>الرقم المقترح:</strong> ${detailedNum}<br>`;
  if (matchedKws.length) {
    exp += `<strong>الكلمات المطابقة:</strong> "${matchedKws.join('، ')}"<br>`;
  }
  if (DETAILED_SUB[detailedNum]) {
    exp += `<strong>التخصص الدقيق:</strong> ${DETAILED_SUB[detailedNum]}<br>`;
  }
  exp += `<strong>ملاحظة:</strong> يُنصح بمراجعة الرقم مع جداول ديوي الرسمية للتأكد من الدقة القصوى.`;
  return exp;
}

// ===== عرض النتيجة =====
function displayResult(result, title, author, year) {
  const card = document.getElementById('resultCard');
  card.classList.add('visible');

  document.getElementById('mainDeweyNum').textContent = result.detailedNum;
  document.getElementById('mainClassName').textContent = result.icon + ' ' + result.className;

  // شريط الدقة
  setTimeout(() => {
    document.getElementById('confFill').style.width = result.confidence + '%';
    document.getElementById('confPct').textContent = result.confidence + '%';
  }, 100);

  // بيانات الكتاب
  const grid = document.getElementById('resultGrid');
  grid.innerHTML = `
    <div class="result-item">
      <div class="result-item-label">📕 عنوان الكتاب</div>
      <div class="result-item-value">${title || '—'}</div>
    </div>
    <div class="result-item">
      <div class="result-item-label">✍️ المؤلف</div>
      <div class="result-item-value">${author || '—'}</div>
    </div>
    <div class="result-item">
      <div class="result-item-label">🏷️ رقم ديوي</div>
      <div class="result-item-value" style="color:var(--gold);font-size:1.1rem;">${result.detailedNum}</div>
    </div>
    <div class="result-item">
      <div class="result-item-label">📅 سنة النشر</div>
      <div class="result-item-value">${year || '—'}</div>
    </div>
    <div class="result-item">
      <div class="result-item-label">🏷️ رؤوس الموضوعات</div>
      <div class="result-item-value">${(result.subjectHeadings || []).join('، ') || '—'}</div>
    </div>
  `;

  document.getElementById('explanationBox').innerHTML = result.explanation;

  // البدائل
  const altChips = document.getElementById('altChips');
  if (result.alternatives && result.alternatives.length) {
    altChips.innerHTML = result.alternatives.map(a =>
      `<div class="alt-chip" onclick="showAltDetail('${a.num}','${a.name}')">${a.icon} ${a.num} — ${a.name}</div>`
    ).join('');
    document.getElementById('altSection').style.display = 'block';
  } else {
    document.getElementById('altSection').style.display = 'none';
  }
}

function showAltDetail(num, name) {
  showToast(`📌 البديل: ${num} — ${name}`);
}

// ===== السجل =====
function saveToHistory(data) {
  const cutter = data.cutter || getCutterNumber(data.author || '');
  const entry = {
    id: Date.now(),
    num: data.detailedNum || data.num,
    title: data.title || 'بدون عنوان',
    author: data.author || '—',
    className: data.className || '—',
    confidence: data.confidence || 0,
    cutter,
    date: new Date().toLocaleDateString('ar-EG')
  };
  classificationHistory.unshift(entry);
  if (classificationHistory.length > 200) classificationHistory.pop();
  try { localStorage.setItem('deweyHistory', JSON.stringify(classificationHistory)); } catch {}
  renderHistory();
}

function deleteHistory(id) {
  classificationHistory = classificationHistory.filter(h => h.id !== id);
  try { localStorage.setItem('deweyHistory', JSON.stringify(classificationHistory)); } catch {}
  renderHistory();
}

function clearHistory() {
  if (confirm('هل تريد مسح سجل التصنيفات كاملاً؟')) {
    classificationHistory = [];
    try { localStorage.setItem('deweyHistory', JSON.stringify([])); } catch {}
    renderHistory();
    showToast('🗑️ تم مسح السجل');
  }
}


function printCatalogCard() {
  if (!currentResult) { showToast('⚠️ لا توجد نتيجة لطباعة البطاقة'); return; }
  const sh = (currentResult.subjectHeadings || []).join('، ') || '—';
  // رقم كاتر مبسط: أول حرف من اسم المؤلف + رقم
  const authorFirst = (currentResult.author || '').trim().replace(/^ال/, '').charAt(0).toUpperCase() || 'X';
  const cutterNum = authorFirst + (currentResult.year ? currentResult.year.toString().slice(-2) : '00');

  const cardHtml = `<!DOCTYPE html>
<html dir="rtl" lang="ar"><head><meta charset="utf-8">
<title>بطاقة تصنيف — ${currentResult.title || ''}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Cairo',Arial,sans-serif;background:#f5f5f5;padding:20px;color:#111;direction:rtl;}
  .card{border:2px solid #14796f;border-radius:16px;padding:24px 28px;max-width:560px;margin:0 auto;background:#fff;box-shadow:0 4px 20px rgba(0,0,0,.12);}
  .card-header{text-align:center;border-bottom:2px solid #14796f;padding-bottom:14px;margin-bottom:16px;}
  .badge{display:inline-block;background:#14796f;color:#fff;font-size:.72rem;font-weight:800;padding:3px 10px;border-radius:20px;margin-bottom:8px;}
  .dewey-num{font-size:52px;font-weight:800;color:#14796f;line-height:1;margin:6px 0;}
  .cutter{font-size:1.1rem;font-weight:700;color:#555;margin-top:4px;}
  .row{padding:9px 0;border-bottom:1px solid #eee;display:flex;gap:10px;align-items:baseline;}
  .row:last-child{border-bottom:none;}
  .lbl{font-weight:800;color:#14796f;font-size:.88rem;min-width:100px;flex-shrink:0;}
  .val{font-size:.95rem;color:#1f2933;line-height:1.5;}
  .footer-line{text-align:center;margin-top:16px;font-size:.78rem;color:#999;border-top:1px solid #eee;padding-top:10px;}
  @media print{body{background:#fff;padding:0;}@page{margin:1cm;}}
</style></head><body>
<div class="card">
  <div class="card-header">
    <div class="badge">نظام الهيثم — تصنيف ديوي العشري</div>
    <div class="dewey-num">${currentResult.detailedNum || '---'}</div>
    <div class="cutter">${cutterNum}</div>
  </div>
  <div class="row"><span class="lbl">عنوان الكتاب</span><span class="val">${currentResult.title || '—'}</span></div>
  <div class="row"><span class="lbl">المؤلف</span><span class="val">${currentResult.author || '—'}</span></div>
  <div class="row"><span class="lbl">الناشر</span><span class="val">${currentResult.publisher || '—'}</span></div>
  <div class="row"><span class="lbl">سنة النشر</span><span class="val">${currentResult.year || '—'}</span></div>
  <div class="row"><span class="lbl">ISBN</span><span class="val">${currentResult.isbn || '—'}</span></div>
  <div class="row"><span class="lbl">الفئة</span><span class="val">${currentResult.icon || ''} ${currentResult.className || '—'}</span></div>
  <div class="row"><span class="lbl">رؤوس الموضوعات</span><span class="val">${sh}</span></div>
  <div class="row"><span class="lbl">درجة الدقة</span><span class="val">${currentResult.confidence || '—'}%</span></div>
  <div class="footer-line">إدارة السنطة التعليمية — توجيه المكتبات — إعداد: أ/ عبدالفتاح خميس</div>
</div>
<div style="text-align:center;margin-top:18px"><button onclick="window.print()" style="font-family:Cairo,Arial,sans-serif;font-weight:800;background:#14796f;color:white;border:0;border-radius:12px;padding:12px 24px;cursor:pointer">🖨️ طباعة الآن</button></div>
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) { showToast('⚠️ اسمح بالنوافذ المنبثقة لطباعة البطاقة'); return; }
  win.document.write(cardHtml);
  win.document.close();
}

function startVoiceTitle() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showToast('⚠️ الإملاء الصوتي غير مدعوم في هذا المتصفح'); return; }
  const rec = new SpeechRecognition();
  rec.lang = 'ar-EG';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onstart = () => showToast('🎙️ تحدث بعنوان الكتاب الآن...');
  rec.onerror = () => showToast('⚠️ تعذر تشغيل الإملاء الصوتي');
  rec.onresult = e => {
    const text = e.results[0][0].transcript || '';
    document.getElementById('bookTitle').value = text;
    showToast('✅ تم إدخال العنوان صوتيًا');
  };
  rec.start();
}

// ===== السجل: تصدير واستيراد =====
function exportHistory() {
  if (!classificationHistory.length) { showToast('⚠️ لا يوجد سجل للتصدير'); return; }
  const blob = new Blob([JSON.stringify(classificationHistory, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `dewey-history-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('✅ تم تصدير السجل');
}

function importHistory(event) {
  const file = event && event.target && event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) throw new Error('صيغة غير صحيحة');
      classificationHistory = data.concat(classificationHistory).slice(0, 200);
      localStorage.setItem('deweyHistory', JSON.stringify(classificationHistory));
      renderHistory();
      showToast(`✅ تم استيراد ${data.length} تصنيف`);
    } catch { showToast('⚠️ ملف غير صحيح'); }
  };
  reader.readAsText(file);
}

function exportHistoryCsv() {
  if (!classificationHistory.length) { showToast('⚠️ لا يوجد سجل للتصدير'); return; }
  const header = 'رقم ديوي,عنوان الكتاب,المؤلف,الفئة,التاريخ,الدقة%\n';
  const rows = classificationHistory.map(h =>
    `"${h.num}","${(h.title||'').replace(/"/g,'""')}","${(h.author||'').replace(/"/g,'""')}","${(h.className||'').replace(/"/g,'""')}","${h.date||''}","${h.confidence||''}"`
  ).join('\n');
  const blob = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `dewey-history-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('✅ تم التصدير CSV');
}

// ===== حفظ تلقائي ومسودة =====
let _autoSaveTimer = null;
function restoreDraft() {
  try {
    const draft = JSON.parse(localStorage.getItem('deweyDraft') || 'null');
    if (!draft) return;
    ['bookTitle','bookAuthor','bookPublisher','bookYear','bookSubject','bookKeywords','bookISBN'].forEach(id => {
      const el = document.getElementById(id);
      if (el && draft[id]) el.value = draft[id];
    });
    if (draft.lang) {
      const langEl = document.getElementById('bookLang');
      if (langEl) langEl.value = draft.lang;
    }
  } catch { localStorage.removeItem('deweyDraft'); }
}

function bindAutoSave() {
  const ids = ['bookTitle','bookAuthor','bookPublisher','bookYear','bookSubject','bookKeywords','bookISBN','bookLang'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      clearTimeout(_autoSaveTimer);
      _autoSaveTimer = setTimeout(() => {
        const draft = {};
        ids.forEach(k => { const e = document.getElementById(k); if (e) draft[k] = e.value; });
        try { localStorage.setItem('deweyDraft', JSON.stringify(draft)); } catch {}
      }, 1200);
    });
  });
}

// ===== PWA: تثبيت وفحص الجاهزية =====
let _deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstallPrompt = e;
  const btn = document.getElementById('installAppBtn');
  if (btn) btn.style.display = 'inline-flex';
});

function installApp() {
  if (_deferredInstallPrompt) {
    _deferredInstallPrompt.prompt();
    _deferredInstallPrompt.userChoice.then(r => {
      if (r.outcome === 'accepted') showToast('✅ جارٍ تثبيت التطبيق...');
      _deferredInstallPrompt = null;
    });
  } else {
    showToast('📲 افتح القائمة واختر "إضافة إلى الشاشة الرئيسية"');
  }
}

function checkOfflineReady() {
  if ('caches' in window) {
    caches.keys().then(keys => {
      if (keys.length > 0) {
        showToast('✅ التطبيق جاهز للعمل بدون إنترنت');
      } else {
        showToast('⚠️ الكاش فارغ — تأكد من الاتصال بالإنترنت أول مرة');
      }
    }).catch(() => showToast('⚠️ تعذر فحص الكاش'));
  } else {
    showToast('ℹ️ المتصفح لا يدعم الكاش');
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => { /* تم التسجيل */ })
      .catch(err => console.warn('SW error:', err));
  }
}


function handleImageSelection(event) {
  const input = event && event.target ? event.target : document.getElementById("bookImages");
  const files = Array.from(input && input.files ? input.files : []);
  if (!files.length) return;
  _capturedBlobs = [..._capturedBlobs, ...files].slice(0, 2);
  _showImgPreview('imgPreviewRow', _capturedBlobs);
  const btn = document.getElementById('btnAnalyze');
  if (btn) btn.style.display = 'flex';
  _updateOCRStatus('ocrStatus', `تم اختيار ${_capturedBlobs.length} صورة من 2 — صفحة العنوان + صفحة المحتويات/الملخص`);
  const st = document.getElementById('ocrStatus');
  if (st) st.style.display = 'block';
  showToast(`✅ تم اختيار ${_capturedBlobs.length} صورة من 2`);
}

function openCameraInput() {
  const input = document.getElementById("bookImages");
  if (!input) {
    showToast("⚠️ لم يتم العثور على مدخل الصور");
    return;
  }
  input.click();
}

function updateOCRStatus(message) {
  const el = document.getElementById("ocrStatus");
  if (el) el.textContent = message || "";
}

function ensureTesseractAvailable() {
  if (typeof Tesseract !== "undefined") return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const old = document.getElementById("tesseract-js");
    if (old) old.remove();
    const s = document.createElement("script");
    s.id = "tesseract-js";
    s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => reject(new Error("تعذر تحميل مكتبة OCR. تأكد من الاتصال بالإنترنت أول مرة."));
    document.head.appendChild(s);
  });
}

function withTimeout(promise, ms, message) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message || "انتهت مهلة العملية")), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

async function preprocessImageForOCR(file, maxSide = 720) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith("image/")) {
      reject(new Error("الملف المختار ليس صورة"));
      return;
    }
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      try {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "medium";
        ctx.drawImage(img, 0, 0, w, h);

        // تحسين سرعة وجودة OCR: تحويل لتدرج رمادي + تباين ذكي
        const image = ctx.getImageData(0, 0, w, h);
        const d = image.data;
        let sum = 0;
        for (let i = 0; i < d.length; i += 4) {
          const gray = 0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2];
          sum += gray;
        }
        const avg = sum / (d.length / 4);
        for (let i = 0; i < d.length; i += 4) {
          let gray = 0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2];
          // زيادة التباين بدون إفراط
          gray = (gray - avg) * 1.35 + avg;
          // تنظيف الخلفية البيضاء والحبر الداكن
          if (gray > 210) gray = 255;
          if (gray < 70) gray = 0;
          const v = Math.max(0, Math.min(255, gray));
          d[i] = d[i+1] = d[i+2] = v;
        }
        ctx.putImageData(image, 0, 0);

        canvas.toBlob(blob => {
          URL.revokeObjectURL(url);
          if (!blob) {
            reject(new Error("تعذر ضغط الصورة"));
            return;
          }
          resolve(blob);
        }, "image/jpeg", 0.55);
      } catch (e) {
        URL.revokeObjectURL(url);
        reject(e);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("تعذر قراءة الصورة"));
    };
    img.src = url;
  });
}

let _ocrAbortRequested = false;

function cancelOcrAnalysis() {
  _ocrAbortRequested = true;
  showLoading(false);
  ['btnCancelAnalyze','btnScanCancelAnalyze'].forEach(id => { const b = document.getElementById(id); if (b) b.style.display = 'none'; });
  _updateOCRStatus('ocrStatus', '⛔ تم إيقاف التحليل. يمكنك كتابة العنوان يدويًا ثم الضغط على تصنيف الكتاب.');
  _updateOCRStatus('scanOcrStatus', '⛔ تم إيقاف التحليل. يمكنك كتابة العنوان يدويًا ثم الضغط على تصنيف الكتاب.');
  showToast('⛔ تم إيقاف التحليل');
}

function _setAnalyzeButtonsBusy(isBusy) {
  ['btnAnalyze','btnScanAnalyze'].forEach(id => {
    const b = document.getElementById(id);
    if (b) { b.disabled = !!isBusy; b.style.opacity = isBusy ? '.55' : '1'; }
  });
  ['btnCancelAnalyze','btnScanCancelAnalyze'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.style.display = isBusy ? 'flex' : 'none';
  });
}

function _fillFormFromOcrText(cleanText) {
  const titleEl = document.getElementById('bookTitle');
  const subjectEl = document.getElementById('bookSubject');
  const kwEl = document.getElementById('bookKeywords');
  const ocrTextEl = document.getElementById('ocrText');
  if (ocrTextEl) ocrTextEl.value = cleanText.slice(0, 2000);
  if (subjectEl) subjectEl.value = cleanText.slice(0, 1400);
  const lines = String(cleanText).split(/[\n\r]+|[.!؟]/).map(x => x.trim()).filter(x =>
    x.length >= 4 && x.length <= 80 &&
    !/^(صفحة|الفهرس|المحتويات|إعداد|تأليف|الجزء|الباب|الفصل|دار|نشر|طبعة|---)/i.test(x)
  );
  const bestTitle = lines.find(x => /[\u0600-\u06FFa-zA-Z]/.test(x)) || '';
  if (titleEl && !titleEl.value.trim() && bestTitle) titleEl.value = bestTitle;
  if (kwEl && !kwEl.value.trim()) kwEl.value = extractSmartKeywords(cleanText).slice(0, 8).join('، ');
}

async function analyzeBookImages() {
  // v15: تحليل سريع لا يظل عالقًا. قاعدة ديوي المحلية تعمل فورًا، و OCR له مهلة قصيرة.
  _ocrAbortRequested = false;

  const currentTitle = (document.getElementById('bookTitle')?.value || '').trim();
  const currentSubject = (document.getElementById('bookSubject')?.value || '').trim();
  const currentKeywords = (document.getElementById('bookKeywords')?.value || '').trim();
  if (currentTitle || currentSubject || currentKeywords) {
    showToast('✅ سيتم التصنيف فورًا من البيانات المكتوبة');
    classifyBook();
    return;
  }

  let files = [..._capturedBlobs];
  const fallbackInput = document.getElementById('bookImages');
  if (!files.length && fallbackInput && fallbackInput.files && fallbackInput.files.length) files = Array.from(fallbackInput.files);
  const scanInput = document.getElementById('scanImages');
  if (!files.length && scanInput && scanInput.files && scanInput.files.length) files = Array.from(scanInput.files);

  if (!files.length) {
    showToast('⚠️ صوّر الكتاب أو اختر صورة أو اكتب العنوان يدويًا');
    return;
  }

  if (files.length < 2) {
    showToast('⚠️ للحصول على رقم ديوي أدق يجب اختيار صورتين: العنوان + المحتويات/الملخص');
    _updateOCRStatus('ocrStatus', '⚠️ اختر صورتين: الأولى صفحة العنوان، والثانية صفحة المحتويات أو ملخص الكتاب.');
    _updateOCRStatus('scanOcrStatus', '⚠️ اختر صورتين: الأولى صفحة العنوان، والثانية صفحة المحتويات أو ملخص الكتاب.');
    return;
  }

  const filesToProcess = files.slice(0, 2); // v17: تحليل صورتين إلزاميًا: العنوان + المحتويات/الملخص
  _setAnalyzeButtonsBusy(true);
  showLoading(false); // لا نغطي الشاشة حتى لا يبدو التطبيق متجمدًا
  _updateOCRStatus('ocrStatus', `⚡ جارٍ تحليل ${filesToProcess.length} صورة: العنوان + المحتويات/الملخص...`);
  _updateOCRStatus('scanOcrStatus', `⚡ جارٍ تحليل ${filesToProcess.length} صورة: العنوان + المحتويات/الملخص...`);

  try {
    await withTimeout(ensureTesseractAvailable(), 12000, 'تعذر تحميل محرك OCR سريعًا. اكتب العنوان يدويًا للتصنيف الفوري.');
    if (_ocrAbortRequested) return;

    let allText = '';
    for (let i = 0; i < filesToProcess.length; i++) {
      _updateOCRStatus('ocrStatus', '🖼️ ضغط الصورة لتسريع القراءة...');
      _updateOCRStatus('scanOcrStatus', '🖼️ ضغط الصورة لتسريع القراءة...');
      const processedImage = await preprocessImageForOCR(filesToProcess[i], 640);
      if (_ocrAbortRequested) return;

      _updateOCRStatus('ocrStatus', `🔎 قراءة الصورة ${i+1} من ${filesToProcess.length} — مهلة أقصاها 20 ثانية لكل صورة...`);
      _updateOCRStatus('scanOcrStatus', `🔎 قراءة الصورة ${i+1} من ${filesToProcess.length} — مهلة أقصاها 20 ثانية لكل صورة...`);
      const res = await withTimeout(
        Tesseract.recognize(processedImage, 'ara', {
          logger: m => {
            if (_ocrAbortRequested) return;
            if (m && m.status && m.progress !== undefined) {
              const pct = Math.round(m.progress * 100);
              _updateOCRStatus('ocrStatus', `OCR: ${pct}% — ${m.status}`);
              _updateOCRStatus('scanOcrStatus', `OCR: ${pct}% — ${m.status}`);
            }
          }
        }),
        20000,
        'انتهت مهلة OCR لإحدى الصور. اكتب العنوان والموضوع يدويًا أو أعد تصوير الصفحة بإضاءة أوضح.'
      );
      allText += `\n--- صورة ${i+1} ---\n` + ((res.data && res.data.text) ? res.data.text : '');
    }

    const cleanText = allText.replace(/[\t ]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
    if (_ocrAbortRequested) return;
    if (!cleanText || cleanText.length < 4) throw new Error('لم يتم استخراج نص واضح. جرّب صورة أقرب أو اكتب العنوان يدويًا.');

    _fillFormFromOcrText(cleanText);
    _updateOCRStatus('ocrStatus', '✅ تم استخراج نص الصورتين — جارٍ التصنيف الآن...');
    _updateOCRStatus('scanOcrStatus', '✅ تم استخراج نص الصورتين — جارٍ التصنيف الآن...');
    showToast('✅ تم استخراج نص الصورتين');
    switchTab('classify');
    setTimeout(classifyBook, 120);
  } catch (err) {
    console.error(err);
    const msg = '⚠️ ' + (err.message || 'تعذر تحليل الصورة');
    _updateOCRStatus('ocrStatus', msg + ' — استخدم الإدخال اليدوي، فهو يعمل فورًا.');
    _updateOCRStatus('scanOcrStatus', msg + ' — استخدم الإدخال اليدوي، فهو يعمل فورًا.');
    showToast(msg);
  } finally {
    _setAnalyzeButtonsBusy(false);
    showLoading(false);
  }
}



// ===== أدوات مساعدة =====
function clearForm() {
  ['bookTitle','bookAuthor','bookPublisher','bookYear','bookSubject','bookKeywords','bookISBN'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('resultCard').classList.remove('visible');
  currentResult = null;
  _capturedBlobs = [];
  const pr1 = document.getElementById('imgPreviewRow');
  const pr2 = document.getElementById('scanImgPreviewRow');
  if (pr1) { pr1.innerHTML = ''; pr1.style.display = 'none'; }
  if (pr2) { pr2.innerHTML = ''; pr2.style.display = 'none'; }
  const ba = document.getElementById('btnAnalyze');
  const bs = document.getElementById('btnScanAnalyze');
  const bc = document.getElementById('btnCancelAnalyze');
  const bsc = document.getElementById('btnScanCancelAnalyze');
  if (ba) ba.style.display = 'none';
  if (bs) bs.style.display = 'none';
  if (bc) bc.style.display = 'none';
  if (bsc) bsc.style.display = 'none';
  showToast('🔄 تم مسح البيانات');
}

function copyResult() {
  if (!currentResult) return;
  const sh = (currentResult.subjectHeadings || []).join('، ') || '—';
  const text = `📚 نتيجة تصنيف ديوي العشري\n━━━━━━━━━━━━━━\nالكتاب: ${currentResult.title || '—'}\nالمؤلف: ${currentResult.author || '—'}\nالناشر: ${currentResult.publisher || '—'}\nالسنة: ${currentResult.year || '—'}\nرقم ديوي: ${currentResult.detailedNum}\nالفئة: ${currentResult.className}\nرؤوس الموضوعات: ${sh}\nدرجة الدقة: ${currentResult.confidence}%\n━━━━━━━━━━━━━━\nنظام الهيثم | إدارة السنطة التعليمية | توجيه المكتبات`;
  navigator.clipboard.writeText(text).then(() => showToast('✅ تم النسخ إلى الحافظة'))
    .catch(() => showToast('⚠️ تعذر النسخ التلقائي'));
}


function printResult() {
  if (typeof haithamAllowPrint === "function") haithamAllowPrint();
  setTimeout(function(){ window.print(); }, 50);
}

function showLoading(show) {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.toggle('active', !!show);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const pane = document.getElementById('tab-' + tab);
  if (pane) pane.classList.add('active');
  document.querySelectorAll('.tab').forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + tab + "'"))
      btn.classList.add('active');
  });
  if (tab === 'history') renderHistory();
  if (tab === 'quick') setTimeout(() => { const el = document.getElementById('quickTitle'); if(el) el.focus(); }, 100);
}

// ===== اختصارات لوحة المفاتيح =====
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.ctrlKey) classifyBook();
  if (e.key === 'k' && e.ctrlKey) { e.preventDefault(); switchTab('quick'); }
  if (e.key === 'p' && e.ctrlKey && currentResult) { e.preventDefault(); printCatalogCard(); }
});

// ===== تهيئة =====
// ===================================================
// ===== جدول كاتر-سانبورن العربي المبسّط =====
// ===================================================
const CUTTER_ARABIC = {
  // الألف
  'ا':'11','أ':'12','إ':'13','آ':'14',
  'اب':'112','ابر':'113','ابن':'115','ابه':'116',
  'ابي':'117','ابو':'118','ابى':'119',
  'اح':'121','اخ':'122','اد':'123','ار':'124',
  'از':'125','اس':'126','اش':'127','اص':'128',
  'اع':'129','اف':'131','اق':'132','اك':'133',
  'ال':'134','الا':'135','الب':'136','الت':'137',
  'الج':'138','الح':'139','الد':'141','الر':'142',
  'الز':'143','الس':'144','الش':'145','الص':'146',
  'الط':'147','الع':'148','الف':'149','الق':'151',
  'الك':'152','الل':'153','الم':'154','الن':'155',
  'اله':'156','الو':'157','الي':'158','الى':'159',
  'ام':'161','ان':'162','اه':'163','او':'164',
  'اي':'165',
  // الباء
  'ب':'2','با':'21','بد':'22','بر':'23',
  'بس':'24','بش':'25','بع':'26','بك':'27',
  'بل':'28','بم':'29','بن':'31','به':'32',
  'بو':'33','بي':'34',
  // التاء
  'ت':'35','تا':'36','تح':'37','تخ':'38',
  'تر':'39','تع':'41','تف':'42','تق':'43',
  'تك':'44','تم':'45','تن':'46',
  // الثاء
  'ث':'47',
  // الجيم
  'ج':'48','جا':'49','جب':'51','جر':'52',
  'جع':'53','جم':'54','جن':'55','جو':'56',
  // الحاء
  'ح':'57','حا':'58','حب':'59','حج':'61',
  'حر':'62','حس':'63','حش':'64','حص':'65',
  'حق':'66','حك':'67','حل':'68','حم':'69',
  'حن':'71','حو':'72','حي':'73',
  // الخاء
  'خ':'74','خا':'75','خر':'76','خل':'77',
  'خو':'78',
  // الدال
  'د':'79','دا':'81','در':'82','دع':'83',
  'دق':'84','دو':'85',
  // الذال
  'ذ':'86',
  // الراء
  'ر':'87','را':'88','رب':'89','رج':'91',
  'رح':'92','رش':'93','رض':'94','رف':'95',
  'رق':'96','رم':'97','رو':'98',
  // الزاي
  'ز':'99',
  // السين
  'س':'111','سا':'112','سب':'113','سح':'114',
  'سر':'115','سع':'116','سف':'117','سق':'118',
  'سك':'119','سل':'121','سم':'122','سن':'123',
  'سو':'124','سي':'125',
  // الشين
  'ش':'126','شا':'127','شر':'128','شع':'129',
  'شك':'131','شم':'132','شو':'133',
  // الصاد
  'ص':'134','صا':'135','صب':'136','صح':'137',
  'صر':'138','صع':'139','صف':'141','صل':'142',
  'صو':'143',
  // الضاد
  'ض':'144',
  // الطاء
  'ط':'145','طا':'146','طب':'147','طر':'148',
  'طل':'149','طه':'151',
  // الظاء
  'ظ':'152',
  // العين
  'ع':'153','عا':'154','عب':'155','عث':'156',
  'عج':'157','عد':'158','عر':'159','عز':'161',
  'عس':'162','عش':'163','عص':'164','عط':'165',
  'عظ':'166','عق':'167','عك':'168','عل':'169',
  'عم':'171','عن':'172','عو':'173','عي':'174',
  // الغين
  'غ':'175','غا':'176','غر':'177','غز':'178',
  // الفاء
  'ف':'179','فا':'181','فت':'182','فر':'183',
  'فق':'184','فك':'185','فل':'186','فو':'187',
  'في':'188',
  // القاف
  'ق':'189','قا':'191','قب':'192','قر':'193',
  'قس':'194','قش':'195','قص':'196','قض':'197',
  'قط':'198','قع':'199','قل':'211','قم':'212',
  'قو':'213','قي':'214',
  // الكاف
  'ك':'215','كا':'216','كب':'217','كر':'218',
  'كس':'219','كش':'221','كل':'222','كم':'223',
  'كو':'224','كي':'225',
  // اللام
  'ل':'226','لا':'227','لب':'228','لت':'229',
  'لج':'231','لح':'232','لر':'233','لس':'234',
  'لط':'235','لع':'236','لف':'237','لق':'238',
  'لك':'239','لم':'241','لن':'242','لو':'243',
  'لي':'244',
  // الميم
  'م':'245','ما':'246','مب':'247','مت':'248',
  'مث':'249','مج':'251','محا':'252','محب':'253',
  'محر':'254','محس':'255','محم':'256','محن':'257',
  'محو':'258','مخ':'259','مد':'261','مذ':'262',
  'مر':'263','مز':'264','مس':'265','مش':'266',
  'مص':'267','مض':'268','مط':'269','مع':'271',
  'مف':'272','مق':'273','مك':'274','مل':'275',
  'مم':'276','من':'277','مه':'278','مو':'279',
  'مي':'281',
  // النون
  'ن':'282','نا':'283','نب':'284','نج':'285',
  'نح':'286','نخ':'287','ند':'288','نر':'289',
  'نز':'291','نس':'292','نش':'293','نص':'294',
  'نظ':'295','نع':'296','نف':'297','نق':'298',
  'نك':'299','نم':'311','نو':'312','ني':'313',
  // الهاء
  'ه':'314','ها':'315','هج':'316','هر':'317',
  'هش':'318','هل':'319','هم':'321','هن':'322',
  'هو':'323','هي':'324',
  // الواو
  'و':'325','وا':'326','وج':'327','ور':'328',
  'وز':'329','وس':'331','وش':'332','وص':'333',
  'وط':'334','وع':'335','وف':'336','وق':'337',
  'وك':'338','ول':'339','وم':'341','ون':'342',
  'وه':'343',
  // الياء
  'ي':'344','يا':'345','يح':'346','ير':'347',
  'يس':'348','يع':'349','يق':'351','يو':'352',
};

function getCutterNumber(authorName) {
  if (!authorName || !authorName.trim()) return 'X00';
  // إزالة الألقاب الشائعة
  let name = authorName.trim()
    .replace(/^(د\.|أ\.|أ\/|دكتور|أستاذ|الشيخ|الإمام|الدكتور)\s*/gi, '')
    .replace(/^(ال)/, '')
    .trim();

  // استخراج أول كلمة ذات معنى
  const firstWord = name.split(/\s+/)[0] || name;
  const clean = firstWord.replace(/[^\u0600-\u06ff]/g, '');
  if (!clean) return 'X00';

  // البحث من الأطول للأقصر
  for (let len = Math.min(4, clean.length); len >= 1; len--) {
    const key = clean.substring(0, len);
    if (CUTTER_ARABIC[key]) return clean.charAt(0).toUpperCase() + CUTTER_ARABIC[key];
  }
  // fallback: أول حرف + 100
  return clean.charAt(0) + '100';
}

// ===================================================
// ===== وظائف الوضع السريع =====
// ===================================================
let _quickResult = null;

function quickClassify() {
  const title = (document.getElementById('quickTitle').value || '').trim();
  const author = (document.getElementById('quickAuthor').value || '').trim();
  if (!title) { showToast('⚠️ أدخل عنوان الكتاب'); document.getElementById('quickTitle').focus(); return; }

  showLoading(true);
  setTimeout(() => {
    const res = performClassification(title, '', '', 'ar', author);
    const cutter = getCutterNumber(author || title);
    const sh = (res.subjectHeadings || []);

    _quickResult = { ...res, title, author, cutter, subjectHeadings: sh };

    document.getElementById('quickDeweyNum').textContent = res.detailedNum || '---';
    document.getElementById('quickClassName').textContent = (res.icon||'') + ' ' + (res.className||'');
    document.getElementById('quickCutter').textContent = cutter;
    document.getElementById('quickSubjectHeadings').textContent = sh.join(' | ') || '—';
    document.getElementById('quickResult').style.display = 'block';
    document.getElementById('quickResult').scrollIntoView({ behavior:'smooth', block:'nearest' });

    // حفظ في السجل
    saveToHistory({ ...res, title, author, cutter });
    showLoading(false);
    showToast('✅ تم التصنيف');
  }, 500);
}

function quickReset() {
  document.getElementById('quickTitle').value = '';
  document.getElementById('quickAuthor').value = '';
  document.getElementById('quickResult').style.display = 'none';
  _quickResult = null;
  document.getElementById('quickTitle').focus();
}

function quickCopy() {
  if (!_quickResult) return;
  const sh = (_quickResult.subjectHeadings||[]).join('، ') || '—';
  const text = `📚 تصنيف ديوي\nالكتاب: ${_quickResult.title}\nالمؤلف: ${_quickResult.author||'—'}\nرقم ديوي: ${_quickResult.detailedNum}\nرقم كاتر: ${_quickResult.cutter}\nرؤوس الموضوعات: ${sh}\n— نظام الهيثم | السنطة التعليمية`;
  navigator.clipboard.writeText(text)
    .then(() => showToast('✅ تم النسخ'))
    .catch(() => showToast('⚠️ تعذر النسخ'));
}

function quickWhatsapp() {
  if (!_quickResult) return;
  const sh = (_quickResult.subjectHeadings||[]).join('، ') || '—';
  const text = encodeURIComponent(
    `📚 *نتيجة تصنيف ديوي العشري*\n` +
    `━━━━━━━━━━━━━━\n` +
    `📕 *الكتاب:* ${_quickResult.title}\n` +
    `✍️ *المؤلف:* ${_quickResult.author||'—'}\n` +
    `🔢 *رقم ديوي:* ${_quickResult.detailedNum}\n` +
    `🏷️ *رقم كاتر:* ${_quickResult.cutter}\n` +
    `📌 *رؤوس الموضوعات:* ${sh}\n` +
    `━━━━━━━━━━━━━━\n` +
    `_نظام الهيثم | إدارة السنطة التعليمية_`
  );
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function quickPrintCard() {
  if (!_quickResult) return;
  currentResult = { ..._quickResult, publisher: '', year: '', isbn: '', confidence: _quickResult.confidence||85 };
  printCatalogCard();
}

function quickSendToClassify() {
  if (!_quickResult) return;
  document.getElementById('bookTitle').value = _quickResult.title || '';
  document.getElementById('bookAuthor').value = _quickResult.author || '';
  switchTab('classify');
  showToast('✅ تم نقل البيانات — يمكنك إضافة تفاصيل أكثر');
}

// ===================================================
// ===== بحث في السجل =====
// ===================================================
function searchHistory(query) {
  const q = (query || '').trim().toLowerCase();
  const countEl = document.getElementById('historySearchCount');
  if (!q) {
    renderHistory();
    if (countEl) countEl.textContent = '';
    return;
  }
  const filtered = classificationHistory.filter(h =>
    (h.title||'').toLowerCase().includes(q) ||
    (h.author||'').toLowerCase().includes(q) ||
    (h.num||'').includes(q) ||
    (h.className||'').includes(q)
  );
  renderHistoryItems(filtered);
  if (countEl) countEl.textContent = filtered.length ? `${filtered.length} نتيجة` : 'لا توجد نتائج';
}

function renderHistory() {
  const q = (document.getElementById('historySearch') && document.getElementById('historySearch').value || '').trim();
  if (q) { searchHistory(q); return; }
  renderHistoryItems(classificationHistory);
  renderHistoryStats();
}

function renderHistoryStats() {
  const statsEl = document.getElementById('historyStats');
  if (!statsEl || !classificationHistory.length) { if(statsEl) statsEl.innerHTML=''; return; }
  // توزيع على الفئات العشر
  const cats = {};
  classificationHistory.forEach(h => {
    const cat = String(h.num||'0')[0] + '00';
    cats[cat] = (cats[cat]||0) + 1;
  });
  const catNames = {'000':'حاسوب','100':'فلسفة','200':'دين','300':'اجتماع','400':'لغات','500':'علوم','600':'تكنولوجيا','700':'فنون','800':'أدب','900':'تاريخ'};
  const sorted = Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,5);
  statsEl.innerHTML = `
    <div style="font-size:.78rem;color:var(--text-dim);width:100%;margin-bottom:4px;">📊 إجمالي: <strong>${classificationHistory.length}</strong> كتاب مصنّف</div>
    ${sorted.map(([cat,count])=>`
      <div style="background:rgba(20,121,111,.08);border:1px solid rgba(20,121,111,.15);border-radius:10px;padding:5px 10px;font-size:.78rem;font-weight:700;color:var(--teal);">
        ${catNames[cat]||cat}: ${count}
      </div>`).join('')}
  `;
}

function renderHistoryItems(items) {
  const list = document.getElementById('historyList');
  if (!items || !items.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">📭</div><div>لا توجد تصنيفات</div></div>`;
    return;
  }
  list.innerHTML = items.map(h => `
    <div class="history-item">
      <div class="history-num">${h.num||'---'}</div>
      <div class="history-info">
        <div class="history-book-title">${h.title||'بدون عنوان'}</div>
        <div class="history-meta">
          ${h.author||'—'} &nbsp;|&nbsp; ${h.className||'—'} &nbsp;|&nbsp; ${h.date||''}
          ${h.cutter ? `&nbsp;|&nbsp; <span style="color:var(--teal);font-weight:700;">كاتر: ${h.cutter}</span>` : ''}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;">
        <button style="background:rgba(20,121,111,.1);border:none;border-radius:8px;padding:5px 8px;cursor:pointer;font-size:.75rem;color:var(--teal);" onclick="reclassifyFromHistory(${h.id})">🔄 إعادة</button>
        <button class="history-del" onclick="deleteHistory(${h.id})">🗑️</button>
      </div>
    </div>
  `).join('');
}

function reclassifyFromHistory(id) {
  const entry = classificationHistory.find(h => h.id === id);
  if (!entry) return;
  document.getElementById('bookTitle').value = entry.title || '';
  document.getElementById('bookAuthor').value = entry.author || '';
  switchTab('classify');
  setTimeout(classifyBook, 300);
}

// ===================================================
// ===== طباعة قائمة الجرد =====
// ===================================================
function printInventoryList() {
  if (!classificationHistory.length) { showToast('⚠️ السجل فارغ'); return; }
  const q = (document.getElementById('historySearch') && document.getElementById('historySearch').value || '').trim();
  const items = q
    ? classificationHistory.filter(h =>
        (h.title||'').toLowerCase().includes(q.toLowerCase()) ||
        (h.author||'').toLowerCase().includes(q.toLowerCase()) ||
        (h.num||'').includes(q))
    : classificationHistory;

  const rows = items.map((h, i) => `
    <tr style="${i%2===0?'background:#f9fbfc':''}">
      <td style="text-align:center;font-weight:700;">${i+1}</td>
      <td style="font-weight:800;color:#14796f;text-align:center;">${h.num||'—'}</td>
      <td style="font-weight:800;text-align:center;">${h.cutter||'—'}</td>
      <td>${h.title||'—'}</td>
      <td>${h.author||'—'}</td>
      <td style="text-align:center;">${h.className||'—'}</td>
      <td style="text-align:center;">${h.date||'—'}</td>
    </tr>`).join('');

  const html = `<!DOCTYPE html>
<html dir="rtl" lang="ar"><head><meta charset="utf-8">
<title>قائمة جرد المكتبة — نظام الهيثم</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Cairo',Arial,sans-serif;padding:20px;color:#111;direction:rtl;}
  h1{text-align:center;font-size:20px;margin-bottom:4px;color:#14796f;}
  .meta{text-align:center;font-size:12px;color:#666;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:12px;}
  th{background:#14796f;color:#fff;padding:8px 6px;font-weight:800;text-align:center;}
  td{padding:7px 6px;border-bottom:1px solid #eee;vertical-align:middle;}
  .footer{text-align:center;margin-top:14px;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:10px;}
  @media print{body{padding:8px;}@page{margin:.8cm;}}
</style></head><body>
<h1>📚 قائمة جرد المكتبة المدرسية</h1>
<div class="meta">إدارة السنطة التعليمية — توجيه المكتبات — إعداد: أ/ عبدالفتاح خميس | التاريخ: ${new Date().toLocaleDateString('ar-EG')} | الإجمالي: ${items.length} كتاب</div>
<table>
  <thead>
    <tr>
      <th>#</th><th>رقم ديوي</th><th>رقم كاتر</th><th>عنوان الكتاب</th><th>المؤلف</th><th>الفئة</th><th>تاريخ التصنيف</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>
<div class="footer">نظام الهيثم لتصنيف ديوي العشري — إدارة السنطة التعليمية</div>
<div style="text-align:center;margin-top:18px"><button onclick="window.print()" style="font-family:Cairo,Arial,sans-serif;font-weight:800;background:#14796f;color:white;border:0;border-radius:12px;padding:12px 24px;cursor:pointer">🖨️ طباعة الآن</button></div>
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) { showToast('⚠️ اسمح بالنوافذ المنبثقة للطباعة'); return; }
  win.document.write(html);
  win.document.close();
}


buildDeweyBar();
buildBrowseGrid();
restoreDraft();
bindAutoSave();
registerServiceWorker();
renderHistory();
console.log('Al-Haitham build: v15-fast-ocr-timeout-20260515');

