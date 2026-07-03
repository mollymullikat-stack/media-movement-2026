/* =============================================================
   Media Movement — Data file
   อัปเดตรายเดือน: แก้ไฟล์นี้ไฟล์เดียว (เพิ่มการ์ด/เดือน/หนัง/หมวดคู่แข่ง)
   cat: soc = กระแสสังคม | tec = เทคโนโลยี & สื่อ | mkt = การตลาด
   ============================================================= */
window.MM_DATA = {

  /* ---------- สถิติเด่นบนหน้าภาพรวม ---------- */
  stats: [
    { v: "424M", l: "Engagement สงกรานต์ 2026 สถิติใหม่ของโซเชียลไทย", s: "Wisesight (Zocial Eye)" },
    { v: "3.70%", l: "Engagement Rate ของ TikTok สูงสุดทุกแพลตฟอร์ม", s: "Socialinsider" },
    { v: "−0.3%", l: "คาดการณ์งบดิจิทัลไทยปี 2026 ติดลบครั้งแรกใน 14 ปี", s: "DAAT" },
    { v: "$45.6B", l: "GMV ของ TikTok Shop อาเซียนปี 2025 — 71% ของทั้งโลก", s: "TikTok / ContentGrip" },
    { v: "25%", l: "ของ Search แบบเดิมจะย้ายไปหา AI ภายในสิ้นปี 2026", s: "Gartner" }
  ],

  /* ---------- 6 แรงขับเคลื่อนใหญ่ ---------- */
  shifts: [
    { t: "AI กลายเป็นโครงสร้างพื้นฐาน — ไม่ใช่จุดขาย",
      d: "Agentic AI วางแผน–ซื้อ–ปรับสื่อได้เองครบวงจร (Meta, TikTok, Google) แต่โฆษณาที่ 'ขาย AI' ใน Super Bowl ได้เสียงลบราวครึ่งหนึ่ง",
      a: "ใช้ AI หลังบ้านเพื่อความเร็วและต้นทุน แต่หน้าบ้านต้องเล่าเรื่องแบบมนุษย์" },
    { t: "ความจริงใจคือสกุลเงินใหม่",
      d: "กระแส '2026 is the new 2016' คอนเทนต์ดิบยุคเก่ากลับมา ผู้ชมไทยจับผิด 'ความจริงที่จัดฉาก' — UGC ชนะโปรดักชันเนี้ยบ",
      a: "ลดความเนี้ยบ เพิ่มความจริง ให้ลูกค้าตัวจริง/พนักงานเป็นผู้เล่า" },
    { t: "ไวรัลเกาะปฏิทินวัฒนธรรม",
      d: "กระแสใหญ่สุดของทุกเดือนคืออีเวนต์ตามปฏิทิน — Super Bowl, สงกรานต์, Met Gala, World Cup — และแบรนด์ที่ชนะคือแบรนด์ที่ตอบสนองเร็วที่สุด",
      a: "ทำ Cultural Calendar ล่วงหน้า + ทีม war room ตอบกระแสภายใน 48 ชม." },
    { t: "เศรษฐกิจแฟนด้อมและ Character IP",
      d: "POLCASAN กวาด engagement 100 ล้านครั้งขึ้นแท่นพรีเซนเตอร์หลายแบรนด์, T-Pop แซง K-Pop บนสตรีมมิ่งไทย — ความรักของแฟนด้อมคือสื่อที่แรงที่สุด",
      a: "'ยืมความรัก' จาก IP/ศิลปินที่มีแฟนด้อมแข็งแรง แทนการสร้างกระแสจากศูนย์" },
    { t: "ทุกสื่อกลายเป็นร้านค้า",
      d: "ครีเอเตอร์รายได้สูงสุดของไทย 9 ใน 10 คนคือ 'นักขาย' (KOS), CTV และ Retail Media ผูกโฆษณากับยอดขายที่วัดได้จริง",
      a: "แยกงบ Influencer (awareness) กับ KOS (ปิดการขาย) และวัดคนละ KPI" },
    { t: "งบตึง → Insight ต้องคม",
      d: "งบโฆษณาไทย 4 เดือนแรกติดลบ 4.6% — แคมเปญที่ชนะใช้เงินน้อยแต่ insight แม่น เช่น KFC×นันยางแก้ปัญหา 'รองเท้ากินขา'",
      a: "เปลี่ยนสินค้า/แพ็กเกจให้เป็นสื่อ (Product as Media) และ collab ข้ามหมวด" }
  ],

  /* ---------- กราฟหน้าภาพรวม ---------- */
  charts: {
    adspend: {
      title: "งบโฆษณาไทยรายเดือน 2026 (ล้านบาท)",
      note: "สะสม 4 เดือน 26,056 ลบ. ติดลบ 4.6% จากปีก่อน",
      src: "Nielsen ปรับปรุงโดย MI Learn Lab · อินเทอร์เน็ตจาก DAAT",
      bars: [
        { l: "ม.ค.", v: 6357 }, { l: "ก.พ.", v: 6107 },
        { l: "มี.ค.", v: 7018 }, { l: "เม.ย.", v: 6574 }
      ]
    },
    mix: {
      title: "ส่วนแบ่งเม็ดเงินตามสื่อ (4 เดือนแรก 2026)",
      src: "Nielsen / MI Learn Lab · DAAT",
      slices: [
        { l: "อินเทอร์เน็ต", v: 41 }, { l: "ทีวี", v: 36 },
        { l: "สื่อนอกบ้าน", v: 17 }, { l: "อื่นๆ", v: 6 }
      ]
    },
    er: {
      title: "Engagement Rate เฉลี่ยต่อโพสต์ ปี 2025 (%)",
      src: "Socialinsider",
      bars: [
        { l: "TikTok", v: 3.70 }, { l: "Instagram", v: 0.48 },
        { l: "Facebook", v: 0.15 }, { l: "X", v: 0.12 }
      ]
    },
    digicat: {
      title: "Top 5 หมวดสินค้าที่ใช้งบดิจิทัลสูงสุด 2025 (ล้านบาท)",
      src: "DAAT",
      bars: [
        { l: "สกินแคร์", v: 5323 }, { l: "สื่อสาร", v: 2604 },
        { l: "ยานยนต์", v: 2568 }, { l: "เครื่องดื่ม", v: 2261 },
        { l: "ผลิตภัณฑ์นม", v: 2131 }
      ]
    }
  },

  /* ---------- ไทม์ไลน์รายเดือน ---------- */
  months: [
    {
      id: "m01", short: "ม.ค.", name: "มกราคม 2026",
      theme: "AI เปิดสนามโฆษณาใหม่ · ผู้บริโภคถวิลหาความจริงและความเชื่อ",
      cards: [
        { cat: "tec", title: "โฆษณาใน ChatGPT เริ่มแล้ว — สื่อใหม่ที่ใหญ่ที่สุดของปี",
          desc: "OpenAI เริ่มแสดงโฆษณาให้ผู้ใช้กลุ่มฟรีในสหรัฐฯ แยกโซนชัดเจนไม่ปนกับคำตอบ ราคาราว $60 CPM งบขั้นต่ำ $200,000 ขณะที่ Perplexity ถอนตัวจากโฆษณาเพราะกลัวกระทบความน่าเชื่อถือ",
          stat: { v: "800M", l: "ผู้ใช้ ChatGPT ต่อสัปดาห์ — ใหญ่กว่าทีวีทุกช่องรวมกัน" },
          apply: "เริ่มวัดว่าแบรนด์ 'ถูก AI พูดถึง' อย่างไร (Answer-Engine Visibility) และเตรียมข้อมูลสินค้าให้ AI อ่านเข้าใจ",
          src: "OpenAI · MarketingProfs · MacRumors" },
        { cat: "tec", title: "CES 2026: AI Agent ซื้อสื่อเองได้แล้วจริงๆ",
          desc: "PubMatic เปิดตัว AgenticOS สั่งซื้อสื่อด้วยภาษาพูด ลดเวลาตั้งแคมเปญ 87% ส่วน Google เปิดมาตรฐาน UCP ให้ AI ซื้อของแทนผู้บริโภค ร่วมกับ Walmart, Shopify, Visa",
          stat: { v: "25%", l: "ของ search จะย้ายสู่ AI ภายในสิ้นปี 2026 (Gartner)" },
          apply: "ทำ product feed ให้สมบูรณ์และ machine-readable — ต่อไป 'ลูกค้า' ที่เข้ามาดูสินค้าอาจเป็น AI",
          src: "Digiday · Google · Gartner" },
        { cat: "soc", title: "\"2026 is the new 2016\" — Gen Z ปลุกอินเทอร์เน็ตยุคเก่า",
          desc: "Bottle Flip, Mannequin Challenge และคลิปดิบๆ ยุค 2016 กลับมาครองฟีด เป็นปฏิกิริยาต่อต้านคอนเทนต์ AI ที่เนี้ยบเกินจริง — เทรนด์ลากยาวตลอดครึ่งปีแรก",
          apply: "แบรนด์ที่มี asset ยุคนั้น (เพลงโฆษณา แพ็กเกจเก่า แคมเปญดัง) หยิบมารีมิกซ์ได้ engagement สูงด้วยต้นทุนต่ำ",
          src: "TikTok trend reports · Wikipedia" },
        { cat: "soc", th: 1, title: "\"Muketing\" — ตลาดสายมูไม่ใช่ niche อีกแล้ว",
          desc: "ตลาดมูเตลูไทยมูลค่า 10,800–15,000 ล้านบาท โตปีละ 10–20% และ 73.2% ของ Gen Z นิยามตัวเองว่าสายมู — ความเชื่อขยายจากวัดเข้าสู่ไลฟ์สไตล์และโซเชียล",
          stat: { v: "฿15,000M", l: "มูลค่าตลาดมูเตลูไทย — ทุกเจน ทุกระดับรายได้" },
          apply: "ผูกสินค้ากับ 'กำลังใจ' ที่จับต้องได้ — limited edition เสริมดวง หรือของแถมที่เป็นของมงคล",
          src: "Marketeer · Marketing Oops · FEFL Media Movement" },
        { cat: "mkt", th: 1, title: "KFC \"กระเป๋าบักเก็ตโชคดี\" — Muketing แบบทำพิธีจริง",
          desc: "ชุดบักเก็ต 199 บาทแถมกระเป๋าลายมงคล 4 แบบ ผ่านพิธีบวงสรวง–เบิกเนตรจริงโดยอาจารย์ดัง เปลี่ยนของแถมให้เป็น 'ของมงคล' ที่คนตั้งใจไปตามหา",
          apply: "จะเล่นกับความเชื่อต้องจริงจังถึงขั้น 'มีเรื่องเล่า' — Authentic Faith สร้างทั้งไวรัลและยอดขายต้นปี",
          src: "KFC Thailand · FEFL Media Movement" },
        { cat: "mkt", title: "Product-as-PR: ของเล็กๆ ที่สื่อทั้งโลกช่วยพูดให้",
          desc: "Coors Light ออกกัวซาหน้ารูปกระป๋องเบียร์รับวันจันทร์เศร้าๆ กวาด 12.6 พันล้าน impressions ส่วน Heinz รีดีไซน์กล่องเฟรนช์ฟรายส์ครั้งแรกในรอบ 75 ปีให้มีที่ใส่ซอส",
          stat: { v: "12.6B", l: "impressions จาก gimmick ชิ้นเดียว — ขายหมดในไม่กี่นาที" },
          apply: "สินค้าจริงชิ้นเล็กที่ 'ให้อินเทอร์เน็ตมีเรื่องเล่น' มักคุ้มกว่างบสื่อก้อนใหญ่",
          src: "Famous Campaigns · Campaign" }
      ]
    },
    {
      id: "m02", short: "ก.พ.", name: "กุมภาพันธ์ 2026",
      theme: "Super Bowl กลายเป็น \"AI Bowl\" · คนดูมากขึ้นแต่คอมเมนต์น้อยลง",
      cards: [
        { cat: "soc", title: "Super Bowl LX: ฮาล์ฟไทม์ภาษาสเปนครั้งแรกในประวัติศาสตร์",
          desc: "Bad Bunny โชว์ฮาล์ฟไทม์ด้วยเพลงภาษาสเปนเป็นหลัก ครองบทสนทนาโซเชียลทั่วโลก — คอนเทนต์ไม่ต้องเป็นภาษาอังกฤษก็ครองเวทีใหญ่สุดของอเมริกาได้",
          apply: "ความเป็น local ที่ภูมิใจในตัวเอง (ภาษา วัฒนธรรม ดนตรี) คือแต้มต่อ ไม่ใช่ข้อจำกัด",
          src: "NBCUniversal · Britannica" },
        { cat: "tec", title: "\"AI Bowl\" — บทเรียนราคาแพงของโฆษณาที่ขาย AI",
          desc: "โฆษณา Super Bowl เกือบ 1 ใน 4 เป็นธีม AI (สปอตละ ~$8M) แต่เสียงตอบรับราว 50% เป็นลบ — ที่ชนะใจคนคือ Lay's \"Last Harvest\" เรื่องครอบครัวชาวไร่ คะแนน 93.2/100 และ 71% บอกอยากซื้อ",
          stat: { v: "~50%", l: "ของเสียงพูดถึงโฆษณา AI เป็นเชิงลบ — AI fatigue ชัดเจน" },
          apply: "สินค้า AI ให้เล่าผ่าน 'ผลลัพธ์ต่อชีวิตคน' ไม่ใช่ฟีเจอร์ — อารมณ์ยังชนะเทคโนโลยี",
          src: "iSpot · Meltwater · HarrisX · CNBC" },
        { cat: "tec", title: "TikTok ครองแชมป์ Engagement — แต่คนทั้งโลก \"ดูเงียบ\" ขึ้น",
          desc: "Benchmark ปี 2025: TikTok ER 3.70% (โตจาก 2.50%) ทิ้งห่าง Instagram (0.48%) และ Facebook (0.15%) แต่คอมเมนต์ลดทุกแพลตฟอร์ม (TikTok −24%, IG −16%) — พฤติกรรมกลายเป็น Passive Engagement",
          stat: { v: "7.7×", l: "ER ของ TikTok เทียบ Instagram" },
          apply: "วัดความสำเร็จจาก watch time / saves / shares แทนคอมเมนต์ และจัดงบ TikTok-first สำหรับ mass",
          src: "Socialinsider" },
        { cat: "soc", th: 1, title: "เลือกตั้ง 2569 ครองฟีดไทย — หน้าต่างเสี่ยงของแบรนด์",
          desc: "การเลือกตั้ง การนับคะแนนใหม่ ราคาทอง ครองบทสนทนาไทยทุกแพลตฟอร์ม — คอนเทนต์แบรนด์มี share of voice ต่ำผิดปกติ",
          apply: "ช่วงการเมืองเดือด เลี่ยง real-time ประเด็นอ่อนไหว และอย่าเพิ่งเผา big campaign — เสียงแบรนด์จะจมข่าว",
          src: "Dataxet Social Trends" },
        { cat: "mkt", th: 1, title: "Solo Economy — คนโสดคือโครงสร้างหลักใหม่ของตลาดไทย",
          desc: "คนไทย 1 ใน 5 เป็นโสด และช่วงอายุ 15–49 ปีสูงถึง 40.5% — กลุ่มที่ตัดสินใจเร็ว ใช้เงินซื้อความสุขโดยไม่รู้สึกผิด และมองหาประสบการณ์เติมเต็มชีวิต",
          stat: { v: "40.5%", l: "ของคนไทยวัย 15–49 ปีโสด (สำนักงานสถิติแห่งชาติ)" },
          apply: "ออกแบบ SKU/แพ็กเกจ 'สำหรับหนึ่งคน' — ชาบูหม้อเดี่ยว, subscription บัญชีเดียว, ที่พัก 1 ห้องนอน",
          src: "สำนักงานสถิติแห่งชาติ · AdAddict" },
        { cat: "tec", th: 1, title: "4 ยักษ์แพลตฟอร์มตั้งสมาคม TDPA",
          desc: "Shopee, Lazada, Grab และ LINE MAN Wongnai ตั้งสมาคมการค้าแพลตฟอร์มดิจิทัลไทย เป็นกระบอกเสียงเจรจานโยบายกับรัฐ — กติกา platform economy ไทยกำลังถูกจัดระเบียบใหม่",
          apply: "แบรนด์ที่พึ่งยอดขายบนแพลตฟอร์ม ควรติดตามกติกาใหม่ (ค่าธรรมเนียม/ข้อมูล) ในครึ่งปีหลัง",
          src: "Brand Buffet" }
      ]
    },
    {
      id: "m03", short: "มี.ค.", name: "มีนาคม 2026",
      theme: "มาสคอตครองใจคนไทย · งบตึง ครีเอทีฟต้อง \"earn\" ไม่ใช่ \"buy\"",
      cards: [
        { cat: "mkt", th: 1, title: "POLCASAN — มาสคอตที่เกิด 6 มี.ค. แล้วครองครึ่งปี",
          desc: "มาสคอตหมีขั้วโลก×ออร์กาของ GMMTV (ผูกกับคู่ Tay–New) ดังข้ามคืน ออกซิงเกิลเอง ขึ้นแท่นพรีเซนเตอร์ The Mall, Grab, Siam Paragon, FWD — สานต่อสูตร Butterbear",
          stat: { v: "102.8M", l: "engagement รวม — อันดับ 1 มาสคอตไทย แซง Butterbear" },
          apply: "Character IP + แฟนด้อมที่มีอยู่แล้ว = ทางลัดสร้าง love brand — จอง collab ก่อนคู่แข่ง",
          src: "Zanroo · Marketing Oops" },
        { cat: "mkt", th: 1, title: "Converse × ระเบียบวาทะศิลป์ — แบรนด์โลกที่เข้าไปอยู่ในหมอลำจริง",
          desc: "Converse ไม่ได้หยิบหมอลำมา 'ประดับ' แต่ขึ้นเวทีจริงของคณะหมอลำชื่อดัง ใช้การแสดงสดสื่อสาร ขยายจาก niche streetwear สู่ mass culture อีสาน",
          apply: "เกาะวัฒนธรรมท้องถิ่นต้อง 'Blend in' ไม่ใช่ 'Borrow' — ให้เจ้าของวัฒนธรรมเป็นพระเอก",
          src: "FEFL Media Movement" },
        { cat: "mkt", th: 1, title: "DAAT ชี้งบดิจิทัลไทยปี 2026 ติดลบครั้งแรกใน 14 ปี",
          desc: "งบดิจิทัลปี 2025 ปิดที่ 32,145 ลบ. (+2% ต่ำกว่าคาด) คาดการณ์ปี 2026 ที่ −0.3% — Skincare ใช้งบสูงสุด (5,323 ลบ.) ตามด้วยสื่อสาร ยานยนต์ เครื่องดื่ม นม",
          stat: { v: "−0.3%", l: "คาดการณ์ 2026 — ติดลบครั้งแรกตั้งแต่เก็บข้อมูล" },
          apply: "ทุกบาทต้องพิสูจน์ผล — เพิ่มน้ำหนัก earned media และแคมเปญที่วัด conversion ตรง",
          src: "DAAT" },
        { cat: "tec", title: "Google แจก Veo ฟรีในเครื่องมือโฆษณา — AI Video ย้ายเข้าแพลตฟอร์ม",
          desc: "ผู้ลงโฆษณาใช้ Veo สร้างวิดีโอ YouTube จากภาพนิ่งได้ฟรีทั่วโลก ขณะที่ OpenAI ปิดแอป Sora — อนาคต AI video อยู่ 'ในเครื่องมือโฆษณา' ไม่ใช่แอปเดี่ยว",
          apply: "อย่าผูก workflow กับแอป AI เดี่ยว — ใช้เครื่องมือที่ฝังในแพลตฟอร์มที่ซื้อสื่ออยู่แล้ว",
          src: "Google · Search Engine Land" },
        { cat: "tec", title: "TikTok เปิดสื่อใหม่: Logo Takeover ยึดวินาทีแรกที่เปิดแอป",
          desc: "จาก NewFronts '26 — แบรนด์ขึ้นคู่โลโก้ TikTok ตั้งแต่วินาทีแรก, TopReach สร้าง mass awareness ในวันเดียว, \"Prime Time\" ยิงโฆษณา 3 ตัวใน 15 นาที, Pulse วางคู่คอนเทนต์ไวรัลแม่นขึ้น",
          apply: "เหมาะกับ launch ที่ต้อง 'ระเบิดวันเดียว' — จองก่อนช่วงเทศกาลเต็ม",
          src: "TikTok NewFronts · FEFL Media Movement" },
        { cat: "soc", th: 1, title: "ฟีดไทยเครียด: สงคราม–พลังงาน–ค่าครองชีพครองบทสนทนา",
          desc: "ความขัดแย้งตะวันออกกลาง ราคาน้ำมัน ค่าครองชีพ ครอง 10 อันดับบทสนทนาไทย ผู้บริโภคอยู่ในโหมดกังวลและมองหาความคุ้มค่า",
          apply: "ข้อความ 'คุ้มค่า ช่วยคุณได้' ชนะ aspirational — และคอนเทนต์ escapism ทำหน้าที่เป็นที่พักใจ",
          src: "Dataxet Social Trends" }
      ]
    },
    {
      id: "m04", short: "เม.ย.", name: "เมษายน 2026",
      theme: "สงกรานต์กลายเป็น Global Moment ของไทย · AI creative เข้าสู่กระแสหลัก",
      cards: [
        { cat: "soc", th: 1, title: "สงกรานต์ 2026 — สถิติใหม่ของโซเชียลไทย และ Soft Power จับต้องได้",
          desc: "สงกรานต์ปีแรกในฐานะมรดกโลก UNESCO ผู้ร่วมงานทั่วประเทศ ~15 ล้านคน TikTok ดันเพลง–ท่าเต้น T-Pop ไปทั่วโลก — แม้แต่ Loewe ยังทำแคมเปญสงกรานต์ครั้งแรกพร้อมสินค้า exclusive สำหรับไทย",
          stat: { v: "424M", l: "engagement ช่วงเทศกาล — สูงสุดเป็นประวัติการณ์" },
          apply: "วางแผน full journey — ก่อน (anticipation) ระหว่าง (experience+UGC) หลัง (advocacy) และให้นักท่องเที่ยวช่วยเล่าต่อ",
          src: "Wisesight · Dataxet · WWD" },
        { cat: "mkt", th: 1, title: "KFC × นันยาง \"ผู้พันขี่ช้าง\" — insight เล็กที่กลายเป็นไอเท็มแห่งเทศกาล",
          desc: "รองเท้าแตะช้างดาวลาย KFC แลกซื้อ 99 บาท แก้ pain point 'รองเท้ากินขา–ลื่น–หลุด' ตอนเล่นน้ำ พร้อมผู้พันเป่าลมยักษ์บนตึกช้าง — สินค้าที่ใช้จริงกลายเป็นสื่อเคลื่อนที่",
          apply: "หา pain point เล็กๆ เฉพาะเทศกาลของลูกค้าคุณ แล้วเปลี่ยนเป็นสินค้า/ของแถมที่ใช้ได้จริง (Product as Media)",
          src: "MARKETECH APAC · FEFL Media Movement" },
        { cat: "mkt", th: 1, title: "April Fools' ยุคใหม่: จากมุกตลก สู่สินค้าขายจริง",
          desc: "MAMA × One Touch ออกของจริงแจกจริงหน้าลิโด้, Souri ปล่อยมุก 'Burger Macaron' แล้วต่อยอดขายจริงแบบ limited time — สูตรคือ tease ให้คนเถียงว่าจริงไหม แล้วเฉลยด้วยการขาย",
          apply: "มุก 1 เม.ย. ที่ดีต้อง 'เกือบจริง' และเตรียม production ต่อยอดเป็นสินค้า limited ถ้ากระแสมา",
          src: "FEFL Media Movement" },
        { cat: "mkt", title: "The Great KitKat Heist — วิชาเปลี่ยนวิกฤตเป็นคอนเทนต์",
          desc: "หลังช็อกโกแลต 12 ตันถูกขโมยจริง KitKat ตอบในไม่กี่วันด้วยมุก 'โจรคง have a break จริงจังไป' พร้อมเว็บ Stolen KitKat Tracker ให้เช็กว่าแท่งในมือเป็นของโจรไหม — สื่อทั่วโลกเล่นข่าวให้ฟรี",
          apply: "เหตุไม่คาดฝัน + ความเร็ว + ขำตัวเองอย่างจริงใจ = earned media ที่ซื้อไม่ได้",
          src: "Campaign · TIME" },
        { cat: "tec", th: 1, title: "\"AI ผลไม้นอกใจกัน\" — AI สร้างคอนเทนต์ แต่ Insight สร้างไวรัล",
          desc: "ซีรีส์ดราม่ารักซ้อนของเหล่าผลไม้ที่สร้างด้วย AI ครองฟีดไทย — ความสำเร็จมาจากเรื่องรัก หึง นอกใจ ที่คนอิน และการปล่อยเป็นตอนให้ตามลุ้น ไม่ใช่ตัวเทคโนโลยี",
          apply: "ใช้ AI เพื่อความเร็วการผลิต แต่จุดที่ทำให้คนแชร์คือ insight อารมณ์มนุษย์ + เล่าแบบมีปมต่อเนื่อง",
          src: "FEFL Media Movement" },
        { cat: "tec", title: "Google AI Max ทั่วโลก + Meta ผู้ใช้ลดครั้งแรกแต่รายได้พุ่ง",
          desc: "AI Max ให้ AI เขียน/ปรับ search ads อัตโนมัติ conversion +14% ด้าน Meta DAU ลดครั้งแรกในประวัติศาสตร์ (3,560 ล้านคน) แต่รายได้ +33% จาก impressions +19% และราคาโฆษณา +12%",
          stat: { v: "+14%", l: "conversion เฉลี่ยเมื่อเปิด AI Max (Google)" },
          apply: "AI-generated ads คือค่าเริ่มต้นใหม่ — งานของแบรนด์คือคุม guideline และจับตา CPM ที่แพงขึ้นบน Meta",
          src: "Google · Meta (Q1 2026 Earnings) · Social Media Today" }
      ]
    },
    {
      id: "m05", short: "พ.ค.", name: "พฤษภาคม 2026",
      theme: "T-Pop ผงาดแซง K-Pop · สื่อทุกจอกลายเป็นหน้าร้าน",
      cards: [
        { cat: "soc", th: 1, title: "T-Pop แซง K-Pop ขึ้นอันดับ 1 ของไทยครั้งแรก",
          desc: "ข้อมูล Spotify ชี้ T-Pop คือแนวเพลงที่คนไทยฟังมากที่สุด แรงหนุนจากซีรีส์วาย/ยูริ หมอลำฟิวชัน และ TikTok ส่วนจอสตรีมมิ่ง ซีรีส์จีนครอง 30% ของการรับชม ('ล่าหยก' คือปรากฏการณ์)",
          stat: { v: "#1", l: "T-Pop แนวเพลงอันดับ 1 บนสตรีมมิ่งไทย — จุดเปลี่ยนวงการพรีเซนเตอร์" },
          apply: "ทบทวนพอร์ตพรีเซนเตอร์ — ศิลปิน T-Pop และคู่จิ้นให้ engagement ต่อบาทสูงกว่า และแฟนด้อมไทยซัพพอร์ตแบรนด์จริง",
          src: "Spotify · SCB EIC · FEFL Media Movement" },
        { cat: "soc", title: "Met Gala + Devil Wears Prada 2 — หน้าต่างมีมของสายแฟชั่น",
          desc: "ลุค 'นักบินอวกาศ' ของ Katy Perry กลายเป็น reaction meme ทั่วโลก ส่วนกระแสหนัง DWP2 จุดฟอร์แมต transformation (ธรรมดา→หรู) และ lip-sync ประโยคเด็ดทั่ว TikTok",
          apply: "เตรียม reactive content รอ tentpole ระดับโลก — ฟอร์แมต transformation เหมาะกับแฟชั่น บิวตี้ workwear",
          src: "Forbes · Rolling Stone" },
        { cat: "tec", th: 1, title: "ยุค KOS: นักขายไลฟ์แซงอินฟลูเอนเซอร์",
          desc: "TikTok Shop อาเซียน GMV $45.6B (71% ของโลก) และครีเอเตอร์รายได้สูงสุดของไทย 9 ใน 10 คนคือ Key Opinion Seller — live shopping แปลง conversion 9–30% เทียบ 2–3% ของ e-commerce ปกติ",
          stat: { v: "9/10", l: "ครีเอเตอร์รายได้สูงสุดของไทยเป็น 'นักขาย'" },
          apply: "แบ่งงบครีเอเตอร์ 2 ก้อน — awareness (อินฟลูฯ) กับ conversion (KOS + live) และให้ KOS มีดีลเฉพาะช่อง",
          src: "TikTok · ContentGrip · Impact.com · eMarketer" },
        { cat: "tec", title: "CTV + Retail Media — เงินย้ายไปหาสื่อที่พิสูจน์ยอดขายได้",
          desc: "CTV สหรัฐฯ มุ่งสู่ ~$38B (+14%) Retail Media ~$70B โดย 52% ของนักการตลาดย้ายงบจาก DSP ทั่วไปเข้า Retail Media — โฆษณาหน้าจอแรกของสมาร์ททีวีเพิ่มการจดจำ 2.5 เท่า พร้อม QR ปิดการขาย",
          stat: { v: "2.5×", l: "brand recall ของ CTV home screen เทียบทีวีปกติ (Amazon Ads)" },
          apply: "มองทีวีที่บ้านลูกค้าเป็น 'บิลบอร์ด + ชั้นวางสินค้า' — เลือกแพ็กเกจที่วัดถึงการซื้อได้",
          src: "eMarketer · Skai · Amazon Ads" },
        { cat: "mkt", th: 1, title: "Virtual Market @ MRT จตุจักร — ป้ายโฆษณาที่กดสั่งซื้อได้",
          desc: "ผู้โดยสาร 3.5 ล้านคน/เดือน สแกน QR จากป้ายเข้าสู่ LINE MyShop ซื้อสินค้าราคาพิเศษ ส่งถึงบ้านใน 3–7 วัน — เชื่อม Offline สู่ Online ในจังหวะรอรถ",
          apply: "ทุกป้าย OOH ควรมี 'ทางไปต่อ' — QR สู่การซื้อ/สะสมพ้อยท์ เปลี่ยนงบ awareness ให้แถมยอดขายที่วัดได้",
          src: "BMN · FEFL Media Movement" },
        { cat: "tec", title: "TV Upfronts 2026: ทีวีพรีเมียมขาย \"ผลลัพธ์ + แฟนด้อม\"",
          desc: "งานขายสื่อทีวีสหรัฐฯ ชูครีเอเตอร์ กีฬาสด และ AI เป็นแกน — AI คือเรื่อง 'ต้องมี' ไม่ใช่จุดต่าง และผู้ซื้อเริ่มเรียกร้อง outcome guarantee จากสตรีมมิ่งได้",
          apply: "เจรจาซื้อสื่อวิดีโอพรีเมียมด้วยเงื่อนไข outcome (การจดจำ/ยอดขาย) แทน CPM เปล่าๆ",
          src: "The Hollywood Reporter · The Current" }
      ]
    },
    {
      id: "m06", short: "มิ.ย.", name: "มิถุนายน 2026",
      theme: "World Cup เปิดฉาก + Cannes Lions — ยุคการตลาดแบบ \"มีส่วนร่วม\" เต็มตัว",
      cards: [
        { cat: "soc", title: "FIFA World Cup 2026 เปิดฉาก — มหกรรมความสนใจใหญ่สุดของปี",
          desc: "ฟุตบอลโลก 3 เจ้าภาพเริ่ม 11 มิ.ย. เม็ดเงินโฆษณาโลกคาด $10.5B+ Fan Festival ทะลุ 2 ล้านคนในเดือนแรก และหนัง LEGO ทำ 314 ล้านวิวใน 24 ชม. ผ่านบัญชี IG ของนักเตะเอง",
          stat: { v: "314M", l: "วิวใน 24 ชม. ของ LEGO — เพราะปล่อยผ่านช่องนักเตะ ไม่ใช่ช่องแบรนด์" },
          apply: "ช่องของ 'คน' ชนะช่องของแบรนด์ — วาง distribution ผ่านนักกีฬา/ครีเอเตอร์ตั้งแต่ต้น",
          src: "Forbes · Event Marketer · The Drum" },
        { cat: "mkt", title: "สูตรชนะ World Cup: Participation > Visibility",
          desc: "Lay's เปิด WhatsApp watch party กับ Messi–Beckham, Uber Eats ให้ Gordon Ramsay 'ห้ามทำอาหาร' ตอนบอลเตะ, Heinz × Heineken ออกแพ็ก 'Five Lagers & a Substitute' เกาะกระแสโดยไม่ต้องเป็นสปอนเซอร์ FIFA",
          apply: "ถามว่าแฟนบอล 'ทำอะไรอยู่' ระหว่างดูบอล แล้วเข้าไปอยู่ในโมเมนต์นั้น — ไม่จำเป็นต้องมีโลโก้ในสนาม",
          src: "The Drum · Event Marketer · FEFL Media Movement" },
        { cat: "mkt", th: 1, title: "Nike \"Goal-Dang\" ทรงวาด — ฟุตบอล × แฟชั่น × ศิลปะแบบไทย",
          desc: "Nike เปลี่ยนย่านทรงวาดเป็นพื้นที่วัฒนธรรม แสดงเสื้อบอลโลกคัสตอมโดยศิลปินไทย พร้อม Mercurial Dress ที่ LISA เคยใส่ — ทุกจุดออกแบบให้ถ่ายรูปแชร์ต่อ (social currency)",
          apply: "งานเปิดตัว = ประสบการณ์วัฒนธรรม — location มีเรื่องเล่า + ศิลปินท้องถิ่น + ไอเท็มระดับไอคอน",
          src: "FEFL Media Movement" },
        { cat: "mkt", title: "Cannes Lions 2026: AI ชนะรางวัลหนัง และคำเตือนเรื่อง \"ความกลางๆ\"",
          desc: "Anthropic คว้า Film Grand Prix, Heineken กวาดหลายรางวัลจาก 'The Pub That Refused to Die', adidas ชนะ Innovation ด้วยรองเท้าที่ออกแบบร่วมกับผู้มีดาวน์ซินโดรม — ธีมใหญ่คือความกลัว 'mediocrity at scale' เมื่อทุกคนใช้ AI เดียวกัน",
          apply: "เมื่อ AI ทำให้งาน 'ระดับใช้ได้' เท่ากันหมด ความต่างอยู่ที่ craft + มุมมองวัฒนธรรม — Grey Thailand ('Fertilizer 2.5' แก้ PM2.5) เข้ารอบโลกด้วย insight ท้องถิ่น",
          src: "Cannes Lions · Creative Review · Adweek · adobo Magazine" },
        { cat: "tec", title: "Meta \"Brand Memory\" + TikTok \"Symphony Agent\" — จาก brief สู่แคมเปญอัตโนมัติ",
          desc: "Meta ให้ AI เรียนตัวตนแบรนด์จากคลังโฆษณาเก่าแล้วผลิตงานใหม่ให้ตรง DNA ส่วน TikTok รับ brief แล้วสร้างแคมเปญให้ทั้งชุด — สองแพลตฟอร์มใหญ่สุดเดินหน้า automation เต็มตัว",
          apply: "จัดระเบียบ brand asset (โลโก้ โทน งานที่ดี/ไม่เอา) ให้พร้อมเป็น 'ตำราสอน AI'",
          src: "Meta · TikTok · Digiday" },
        { cat: "tec", title: "โฆษณาเรียลไทม์ตามจังหวะเกม (DCO) — ห้องทดลองใหญ่ใน World Cup",
          desc: "Dynamic Creative Optimization ดึงข้อมูลสดจากสนามมาเปลี่ยนโฆษณาแบบนาทีต่อนาที ทั้งมือถือและจอ DOOH — เข้าถึงคนดูตรง emotional peak",
          stat: { v: "+30%", l: "ROAS เทียบแคมเปญปกติ เมื่อโฆษณาปรับตามเกมสด" },
          apply: "FMCG/delivery ลองดีลตามสกอร์ — 'ทีมโปรดยิงได้ ลด 10%' เปลี่ยนความตื่นเต้นเป็นยอดขายทันที",
          src: "FEFL Media Movement (World Media)" },
        { cat: "soc", th: 1, title: "Bangkok Pride 2026 — ผู้ชมจับตา \"ของจริงหรือแค่สีรุ้ง\"",
          desc: "ไทยยังเป็นศูนย์กลาง Pride ของอาเซียน แต่บทสนทนาเข้มขึ้น — ผู้ชมแยก allyship จริงกับการตลาดฉาบฉวย และเรียกร้องแอคชันมากกว่าโลโก้เปลี่ยนสี",
          apply: "จะลง Pride ต้องมี commitment ตรวจสอบได้ (นโยบายพนักงาน พาร์ทเนอร์ชุมชน) — ไม่พร้อมอย่าฝืน",
          src: "Dataxet Insights" }
      ]
    }
  ],

  /* ---------- Category Watch: จับตาคู่แข่งรายหมวด ----------
     เพิ่มหมวดใหม่ = เพิ่ม key ใหม่ใน object นี้ (จะขึ้นใน dropdown อัตโนมัติ) */
  categories: {
    "auto-lube": {
      name: "Automotive Lubricants — น้ำมันเครื่อง/สารหล่อลื่น",
      updated: "3 กรกฎาคม 2026 · ไทม์ไลน์ข่าว ม.ค.–มิ.ย. + Social buzz จาก TikTok & Google (ผ่าน Apify)",
      context: [
        { v: "10.4M", l: "Castrol — ผู้นำเสียงของหมวดบน TikTok นำโดยคลิปครีเอเตอร์สายท่องเที่ยว 8M วิว + insight \"ผู้หญิงเอารถเข้าอู่คนเดียว\"", s: "TikTok ผ่าน Apify (สำรวจ ก.ค. 2026)" },
        { v: "2.3M", l: "ENEOS — สูงสุดในกลุ่มโฟกัส จากแคมเปญครีเอเตอร์ #มุ่งมั่นในคุณภาพเพื่อคนรักรถ เจาะ insight ผู้หญิง + สายรถซิ่ง", s: "TikTok ผ่าน Apify (สำรวจ ก.ค. 2026)" },
        { v: "1.5M", l: "PULZAR — ช่องทางการแข็งแรงผิดคาด (คลิปสิงห์บรรทุก 818K + ลำไย 595K) รับแรงส่งรีแบรนด์ พ.ค.", s: "TikTok ผ่าน Apify (สำรวจ ก.ค. 2026)" },
        { v: "~390K", l: "TRANE — เสียงหลักมาจากช่างและสนามแข่ง (Thailand Super Series) หลังตัดคลิปไม่เกี่ยวข้องออก", s: "TikTok ผ่าน Apify (สำรวจ ก.ค. 2026)" },
        { v: "22K", l: "PTT Lubricants — เงียบสุดบน TikTok สวนทางสถานะเบอร์ 1 ตลาด 14 ปี = ช่องว่างใหญ่ของผู้นำ", s: "TikTok ผ่าน Apify (สำรวจ ก.ค. 2026)" }
      ],
      clips: [
        { brand: "Castrol", views: "8M", likes: "22.6K",
          title: "ครีเอเตอร์สายเที่ยว \"ลดา ไปเที่ยว\" รีวิวสมรรถนะทางไกล",
          note: "Tie-in เนียนไปกับคอนเทนต์ท่องเที่ยว — คลิปดังสุดของหมวด",
          url: "https://www.tiktok.com/@ldaa41/video/7592579397304044807" },
        { brand: "Castrol", views: "1.9M", likes: "9K",
          title: "\"ผู้หญิงเอารถเข้าอู่คนเดียว\" — ช่องทางการเล่น insight ผู้หญิง",
          note: "ขยายกลุ่มเป้าหมายเกินผู้ชายสายเครื่อง",
          url: "https://www.tiktok.com/@castrol.thailand/video/7512044311215688968" },
        { brand: "อู่/ช่าง (เอฟออโต้)", views: "1.3M", likes: "17.3K",
          title: "How-to: ถ่ายน้ำมันเครื่องต้องเช็คอะไรบ้าง",
          note: "คอนเทนต์ความรู้จากช่างคือพื้นที่ค้นหาหลักของผู้บริโภค",
          url: "https://www.tiktok.com/@f_parinya1/video/7631558060749933845" },
        { brand: "Shell Helix × PROXIE", views: "90.9K", likes: "15.8K",
          title: "ชิ้นงาน PR กับวง T-Pop PROXIE (#ShellHelixxPROXIE)",
          note: "Likes/Views สูงถึง 17% — พลังแฟนด้อม T-Pop ในหมวดสินค้าเทคนิค",
          url: "https://www.tiktok.com/@ongleegboyy/video/7622663233840647432" },
        { brand: "ร้านค้า (Auto Monster)", views: "236K", likes: "3.6K",
          title: "3 อันดับน้ำมันเครื่องขายดี — คอนเทนต์จัดอันดับจากผู้ขาย",
          note: "ผู้ขายรายย่อยมีอิทธิพลต่อการเลือกแบรนด์",
          url: "https://www.tiktok.com/@auto.monster/video/7556569620203719943" },
        { brand: "อู่/ช่าง (RAYONG 2 CAR)", views: "177K", likes: "2.6K",
          title: "วิธีเช็คน้ำมันเครื่องด้วยตัวเอง #รู้ก่อนรถพัง",
          note: "ฟอร์แมต \"รู้ก่อนพัง\" ดึงคนดูวงกว้าง",
          url: "https://www.tiktok.com/@rayong2car/video/7550968958912843016" },
        { brand: "Castrol", views: "87K", likes: "3.3K",
          title: "เกมทายเสียงรับของขวัญ — gamification บนช่องแบรนด์",
          note: "กิจกรรมร่วมสนุกง่ายๆ ปั้น engagement ต่อเนื่อง",
          url: "https://www.tiktok.com/@castrol.thailand/video/7550187577354095879" },
        { brand: "บางจาก (เค บางจาก)", views: "42.2K", likes: "1.8K",
          title: "พนักงานเป็นครีเอเตอร์ — ตอบคำถามน้ำมัน B20 แบบบ้านๆ",
          note: "Employee-generated content สร้างความใกล้ชิดแบรนด์",
          url: "https://www.tiktok.com/@k.bangchak/video/7641932686956793096" },
        { brand: "ENEOS × ครีเอเตอร์", views: "1.1M", likes: "—",
          title: "\"ผู้หญิงไม่ค่อยดูแลรถจริงไหม?\" — แคมเปญ #มุ่งมั่นในคุณภาพเพื่อคนรักรถ",
          note: "เจาะ insight ผู้หญิงเหมือน Castrol — สนามแข่งใหม่ของหมวดนี้",
          url: "https://www.tiktok.com/@stamaimsumang/video/7622151771095403794" },
        { brand: "ENEOS × route22", views: "963K", likes: "—",
          title: "อัพเดตรถ AE92 ฉบับปี 2026 — tie-in คอนเทนต์ car culture",
          note: "เข้าถึงสายรถคลาสสิก/รถซิ่งผ่านครีเอเตอร์ตัวจริง",
          url: "https://www.tiktok.com/@route22_/video/7615250524971060488" },
        { brand: "PULZAR (ช่องทางการ)", views: "818K", likes: "—",
          title: "\"สิงห์บรรทุก...เร่งแรง แซงอึด!\" — คอนเทนต์เจาะกลุ่มรถบรรทุก",
          note: "segment บรรทุก/กระบะคือฐานหลักของ PULZAR หลังรีแบรนด์",
          url: "https://www.tiktok.com/@pulzarlubricants/video/7641131706958777620" },
        { brand: "PULZAR × ลำไย", views: "595K", likes: "—",
          title: "\"ลำไย ขอเป็นผู้สาว PULZAR\" — พรีเซนเตอร์สายหมอลำลงสนามโซเชียล",
          note: "ใช้พลังแฟนด้อมลำไย ไหทองคำ เข้าถึงตลาด mass/ต่างจังหวัด",
          url: "https://www.tiktok.com/@pulzarlubricants/video/7644785699199323413" },
        { brand: "TRANE (ช่างต๊อบ)", views: "348K", likes: "—",
          title: "เทสระบบน้ำมันเครื่อง — คอนเทนต์สาธิตจากช่างตัวจริง",
          note: "TRANE พึ่งเสียงช่างมากกว่าสื่อแบรนด์เอง",
          url: "https://www.tiktok.com/@tob.thanakrit/video/7632664487098584338" }
      ],
      months: [
        {
          m: "มกราคม 2026",
          items: [
            { brand: "PTT Lubricants",
              title: "CSR ปีใหม่ \"อาชีวะ–ขนส่ง อาสาช่วยประชาชน\"",
              desc: "หนุนจุดบริการตรวจเช็ครถฟรีช่วงเดินทางปีใหม่ ตอกย้ำบทบาทแบรนด์เบอร์ 1 ที่อยู่เคียงข้างการเดินทางของคนไทย",
              apply: "ช่วงเทศกาลเดินทาง = โอกาสของแบรนด์ยานยนต์ทำ service marketing ที่จับต้องได้จริง",
              src: "PTT OR Newsroom" },
            { brand: "PT Maxnitron (PTG)",
              title: "โปรแรงกับ Autobacs — ลดสูงสุดเกินครึ่ง",
              desc: "แคมเปญ SERVICE CLEAN UP ลด MAX G เหลือ 495 บาท (จาก 980) ถึงสิ้นเดือน ม.ค. — ใช้ราคาบุกช่องทางศูนย์บริการพันธมิตร",
              apply: "หมวดนี้ผู้บริโภคอ่อนไหวต่อราคา — ดีลกับ chain service center ช่วยเปิดลูกค้าใหม่",
              src: "FM91" }
          ]
        },
        {
          m: "กุมภาพันธ์ 2026",
          items: [
            { brand: "PTT Lubricants",
              title: "หนังแบรนด์แนว Mockumentary \"รถคือคนในครอบครัว\" (Yell Bangkok)",
              desc: "ฉีกขนบหมวดที่พูดแต่สเปกเครื่องยนต์ มาเล่าเรื่องความรัก-ความผูกพันกับรถแบบครอบครัว — วางรากอารมณ์ก่อน relaunch ใหญ่เดือนถัดไป",
              apply: "หมวดสินค้าเทคนิคยิ่งต้องเล่าเรื่องด้วยอารมณ์ — สเปกไว้ปิดการขาย แต่ความรู้สึกสร้างแบรนด์",
              src: "Campaign Brief Asia · MARKETECH APAC" },
            { brand: "ENEOS",
              title: "MotoGP เปิดฤดูกาลที่บุรีรัมย์ — Team ENEOS ขึ้นจอทั่วไทย",
              desc: "ทีมที่ ENEOS สนับสนุน (Quartararo/Rins) แข่งสนามเปิดฤดูกาลที่ Chang International Circuit — ได้ visibility ในไทยผ่าน global sponsorship แม้ไม่มี activation ท้องถิ่น",
              apply: "อีเวนต์กีฬาระดับโลกที่จัดในไทย = สื่อฟรีของสปอนเซอร์ global — แบรนด์ไทยควรหา moment เกาะกระแสในพื้นที่",
              src: "ENEOS Global" }
          ]
        },
        {
          m: "มีนาคม 2026",
          items: [
            { brand: "PTT Lubricants",
              title: "Relaunch ใหญ่ \"POWER TO LAST LONGER\" (26 มี.ค.)",
              desc: "ยกเครื่องพอร์ตพรีเมียมด้วยเทคโนโลยี EVOTEC เปิดตัว 3 สินค้าใหม่ครบทั้งเบนซิน (Performa 0W-30) ดีเซล (Dynamic Commonrail 5W-30) และมอเตอร์ไซค์ AT (Challenger 4T-AT) พร้อมแพ็กเกจโฉมใหม่ทั้งไลน์",
              apply: "ผู้นำตลาดขยับ = ทั้งหมวดต้องขยับตาม จับตาสงครามพรีเมียมครึ่งปีหลัง",
              src: "Siam Turakij · Autospinn · PTT OR Newsroom" },
            { brand: "ภาพรวมตลาด",
              title: "ตลาดหล่อลื่นไทยปี 2026 คาดโต ~2% แตะ 694 ล้านลิตร",
              desc: "โครงสร้างตลาด: กลุ่มเมเจอร์ (PTT OR, Shell, Bangchak, Esso/Chevron) ครองส่วนใหญ่ โดยมี ENEOS, Idemitsu, Castrol, Valvoline และแบรนด์ไทยอย่าง TRANE เจาะเซกเมนต์เฉพาะ",
              apply: "ตลาดโตช้า = การแย่งแชร์มาจากแบรนด์ดิ้งและช่องทาง ไม่ใช่การรอตลาดขยาย",
              src: "Mordor Intelligence" }
          ]
        },
        {
          m: "พฤษภาคม 2026 — เดือนที่ตลาดสั่นสะเทือน",
          items: [
            { brand: "PULZAR",
              title: "รีแบรนด์ใหญ่สุดในรอบ 15 ปี งบ 150 ล้านบาท (13 พ.ค.)",
              desc: "เปิดตัวที่ Park Hyatt พร้อมพรีเซนเตอร์คู่ระดับประเทศ \"หนุ่ม กรรชัย\" (ความน่าเชื่อถือ) + \"ลำไย ไหทองคำ\" (ตลาดกระบะ/แมส) คอนเซปต์ LONG LIFE TECH, LONG LIFE ENGINE โลโก้เหลือง-ดำใหม่ มาสคอต Captain PULZAR และโรดโชว์ทั่วประเทศ (ตัวเลข/คำอ้างเป็นของแบรนด์ — ข่าวชุดเดียวกันกระจายหลายสำนัก)",
              apply: "สูตรรีแบรนด์ที่ครบเครื่อง: พรีเซนเตอร์คู่คนละหน้าที่ + ตัวตนใหม่ชัด + ลุยช่องทางดีลเลอร์ — เหมาะศึกษาสำหรับแบรนด์ไทยที่อยากขยับขึ้น",
              src: "Bangkok Post · Dailynews · Autolife Thailand" },
            { brand: "ENEOS",
              title: "ทุ่ม $2.17B ซื้อธุรกิจ Caltex ทั่ว SEA (ไม่รวมไทย)",
              desc: "ENEOS Holdings ซื้อธุรกิจน้ำมันเชื้อเพลิง-หล่อลื่นของ Chevron ในสิงคโปร์ มาเลเซีย ฟิลิปปินส์ ออสเตรเลีย เวียดนาม อินโดนีเซีย ปิดดีลปี 2027 — สัญญาณรุก SEA ล้อมตลาดไทยไว้",
              apply: "จับตา ENEOS ไทยหลังดีลปิด — ทรัพยากรระดับภูมิภาคจะหนุนการตลาดในไทยแรงขึ้น",
              src: "S&P Global" },
            { brand: "IPONE (ผู้เล่นใหม่)",
              title: "แบรนด์น้ำมันมอเตอร์ไซค์พรีเมียมจากฝรั่งเศสเข้าไทย",
              desc: "เปิดตัวไลน์ Katana (full synthetic) และ R4000 พร้อมคอนเซปต์เทียร์แบบ \"สายคาราเต้\" เจาะตั้งแต่รถ commuter ถึงสายซิ่ง",
              apply: "เซกเมนต์มอเตอร์ไซค์พรีเมียมกำลังมีผู้เล่นใหม่ — แบรนด์เดิมต้องรีบล็อกฐานลูกค้า 2 ล้อ",
              src: "Autospinn" }
          ]
        },
        {
          m: "มิถุนายน 2026",
          items: [
            { brand: "TRANE (Siam Pan Group)",
              title: "Title Sponsor สนามแข่ง — \"TRANE TITANIUM\" Thailand Super Series 2026",
              desc: "แบรนด์ไทยเลือกยุทธศาสตร์มอเตอร์สปอร์ตเต็มตัว เป็นสปอนเซอร์หลัก TSS 2026 Event 1 และกิจกรรม PTRS 2026 — สร้างความน่าเชื่อถือด้านสมรรถนะผ่านสนามจริง แทนการยิงโฆษณาแมส",
              apply: "Sport marketing เฉพาะทางสร้าง credibility ให้แบรนด์ราคากลางได้โดยไม่ต้องชนงบยักษ์",
              src: "Thailand Super Series · TRANE Facebook" },
            { brand: "Valvoline",
              title: "แคมเปญ FIFA World Cup 2026 ระดับโลก",
              desc: "Valvoline Global เกาะกระแสฟุตบอลโลกด้วยแนวคิด \"ปกป้องเส้นทางสู่เกมของแฟนบอล\" (ยังไม่พบ activation เฉพาะตลาดไทย) ขณะที่ MD ไทยประกาศเป้าดันแบรนด์สู่ Top 3 โลกภายใต้ Aramco",
              apply: "World Cup เป็นสนามของทุกหมวด — แม้แต่น้ำมันเครื่องยังหา angle \"การเดินทางไปดูบอล\" ได้",
              src: "Valvoline Global Newsroom" }
          ]
        },
        {
          m: "สรุปสัญญาณจากโซเชียล (สำรวจ ก.ค. 2026)",
          items: [
            { brand: "Castrol",
              title: "ชนะเกม TikTok ด้วยครีเอเตอร์นอกหมวดรถ + insight ผู้หญิง",
              desc: "คลิปที่ดังที่สุดของหมวดมาจากครีเอเตอร์สายท่องเที่ยว (8M วิว) ไม่ใช่เพจรถ และช่องทางการเล่นเรื่อง 'ผู้หญิงเอารถเข้าอู่คนเดียว' — ขยายกลุ่มเป้าหมายเกินผู้ชายสายเครื่อง",
              apply: "หมวดสินค้าเทคนิคไม่จำเป็นต้องพูดกับคนสายเทคนิค — จับ insight ไลฟ์สไตล์และกลุ่มที่ตลาดมองข้าม",
              src: "TikTok ผ่าน Apify" },
            { brand: "ภาพรวมหมวด",
              title: "คอนเทนต์ how-to จากอู่/ช่างคือพื้นที่ค้นหาหลักของผู้บริโภค",
              desc: "คลิปแมส ('เช็คน้ำมันเครื่องเอง' 1.3M วิว, 'ทำไมรถพัง') มาจากอู่และช่างอิสระ ไม่ใช่แบรนด์ — คนหาความรู้ก่อนตัดสินใจซื้อ",
              apply: "ทำ partnership กับอู่/ช่าง TikTok ที่มีฐานคนดู แทนที่จะยิงเฉพาะ ads แบรนด์เอง",
              src: "TikTok ผ่าน Apify" }
          ]
        }
      ]
    }
  },

  /* ---------- Film & TVC Watch ----------
     yt = YouTube video id (11 ตัว) ถ้ามี — ระบบจะดึง thumbnail อัตโนมัติ */
  films: [
    { brand: "KFC Thailand", title: "กระเป๋าบักเก็ตโชคดี", month: "ม.ค.", th: 1,
      tag: "TVC", why: "Muketing แบบทำพิธีจริง — เอ็ม หัตถ์เทพ 'ส่องพระ' เพิ่มดีกรี Authentic Faith",
      yt: "dNaLf8dgwWM", url: "https://www.youtube.com/watch?v=dNaLf8dgwWM", src: "FEFL Media Movement" },
    { brand: "DNA", title: "DNA Muketing — พื้นที่สายมูใน MRT", month: "ม.ค.", th: 1,
      tag: "Case Study", why: "เปลี่ยนสถานีรถไฟฟ้าเป็น interactive experience สายมู พร้อมหมอช้างและ QR เซียมซี",
      yt: "nBcAGvfQnts", url: "https://youtu.be/nBcAGvfQnts", src: "FEFL Media Movement" },
    { brand: "Lay's", title: "Last Harvest — Super Bowl LX", month: "ก.พ.",
      tag: "TVC", why: "โฆษณาอันดับ 1 ของ Super Bowl LX (คะแนน 93.2/100) — เรื่องส่งต่อไร่มันฝรั่งจากพ่อสู่ลูกสาว พิสูจน์ว่าอารมณ์ชนะดารา",
      yt: "EBnLXlvrNng", url: "https://www.youtube.com/watch?v=EBnLXlvrNng", src: "Lay's · HarrisX" },
    { brand: "Anthropic", title: "Can I Get a Six Pack Quickly? — Claude", month: "ก.พ.",
      tag: "Cannes Winner", why: "หนังที่คว้า Film Grand Prix ที่ Cannes 2026 — ขำจากความซื่อสัตย์ของ AI ที่ตอบตามจริง",
      yt: "kQRu7DdTTVA", url: "https://www.youtube.com/watch?v=kQRu7DdTTVA", src: "Anthropic · Cannes Lions" },
    { brand: "Google Gemini", title: "New Home — Super Bowl LX", month: "ก.พ.",
      tag: "TVC", why: "ขาย AI ผ่านโมเมนต์แม่ช่วยลูกจินตนาการบ้านใหม่ — Kellogg จัดให้เป็นโฆษณาที่ effective ที่สุดของปี",
      yt: "Z1yGy9fELtE", url: "https://www.youtube.com/watch?v=Z1yGy9fELtE", src: "Google · Northwestern Kellogg" },
    { brand: "e.l.f. Cosmetics", title: "Melisa — Telenovela Super Bowl Spot", month: "ก.พ.",
      tag: "TVC", why: "แบรนด์ challenger ชนะโหวต YouTube AdBlitz ด้วยความบันเทิงล้วนๆ ไม่ขายของตรงๆ",
      yt: "h3NyuErfdJk", url: "https://www.youtube.com/watch?v=h3NyuErfdJk", src: "YouTube AdBlitz" },
    { brand: "Coinbase", title: "Your Way Out — Oscars 2026", month: "มี.ค.",
      tag: "Online Film", why: "NPC ในเกมหลุดจากลูปที่ถูกโปรแกรม — เปรียบการออกจากระบบการเงินเดิม งาน craft ระดับรางวัล",
      yt: "7OfvpSbIDeU", url: "https://www.youtube.com/watch?v=7OfvpSbIDeU", src: "Isle of Any" },
    { brand: "McDonald's UK", title: "Camera Rolls", month: "มี.ค.",
      tag: "TVC", why: "ใช้รูปจากกล้องจริงของแฟนๆ ทั้งเรื่อง — ทุกค่ำคืนจบที่ McDonald's ตัวอย่าง UGC-as-advertising",
      yt: "JSNBtIacOgg", url: "https://www.youtube.com/watch?v=JSNBtIacOgg", src: "McDonald's UK" },
    { brand: "Heineken", title: "The Pub That Refused to Die", month: "มี.ค.",
      tag: "Cannes Winner", why: "เรื่องจริงของคน 26 คนที่ไม่ยอมให้ผับสุดท้ายของหมู่บ้านตาย — กวาดหลายรางวัลที่ Cannes 2026",
      yt: "U0FNEVBwVi0", url: "https://www.youtube.com/watch?v=U0FNEVBwVi0", src: "Heineken · Cannes Lions" },
    { brand: "On × Zendaya", title: "Shape of Dreams — dir. Spike Jonze", month: "เม.ย.",
      tag: "Online Film", why: "หนัง 3 นาทีจากผู้กำกับระดับ auteur — co-creation กับดาราแทน endorsement ธรรมดา ~10M วิวใน 6 วัน",
      yt: "6NVAzWEgTXo", url: "https://www.youtube.com/watch?v=6NVAzWEgTXo", src: "On" },
    { brand: "KitKat", title: "ขบวนรถหุ้มเกราะคุ้มกัน KitKat", month: "เม.ย.",
      tag: "Reactive", why: "หลังโดนขโมย 12 ตัน — ตอบกระแสด้วยขบวน security convoy สุดจริงจัง สื่อทั่วโลกเล่นข่าวให้ฟรี",
      yt: "M-pgKlEjiVk", url: "https://www.youtube.com/watch?v=M-pgKlEjiVk", src: "Campaign · TIME" },
    { brand: "KFC × นันยาง", title: "รองเท้าแตะ \"ผู้พันขี่ช้าง\" สงกรานต์", month: "เม.ย.", th: 1,
      tag: "Social Video", why: "แคมเปญเกิดบนโซเชียลเป็นหลัก — คลิปข่าวสรุปกระแสรองเท้าแตะลิมิเต็ดที่แลกซื้อ 99 บาท",
      yt: "MudHtBmwPLY", url: "https://www.youtube.com/shorts/MudHtBmwPLY", src: "MARKETECH APAC (คลิปข่าว)" },
    { brand: "MAMA × ONETOUCH", title: "April Fools ที่แจกจริงหน้าลิโด้", month: "เม.ย.", th: 1,
      tag: "Social Video", why: "collab ข้ามหมวดสุดคาดไม่ถึงที่ต่อยอดจากมุกเป็นของจริง — คลิปรีวิวกระแส",
      yt: "UJ-rmqHBo2U", url: "https://www.youtube.com/shorts/UJ-rmqHBo2U", src: "FEFL Media Movement (คลิปรีวิว)" },
    { brand: "AXE (Greece)", title: "Grab the Sweet — ป้ายรถเมล์เกมคีบตุ๊กตา", month: "เม.ย.",
      tag: "Innovative Media", why: "เปลี่ยน OOH เป็นเกมเล่นผ่านมือถือ คีบสำเร็จได้ tester กลิ่นใหม่ทันที",
      yt: "dELvH_1aKAs", url: "https://www.youtube.com/watch?v=dELvH_1aKAs", src: "FEFL Media Movement" },
    { brand: "adidas", title: "Backyard Legends — World Cup 2026", month: "พ.ค.",
      tag: "TVC", why: "ถูกยกให้เป็นหนัง World Cup ที่ดีที่สุดของรอบนี้ — ฟุตบอลสนามหลังบ้านสู่ตำนาน",
      yt: "mJJY53qhJe0", url: "https://www.youtube.com/watch?v=mJJY53qhJe0", src: "adidas · The Drum" },
    { brand: "Uber Eats", title: "Who Could Cook at a Time Like This?", month: "มิ.ย.",
      tag: "TVC", why: "Gordon Ramsay ออกมา 'ห้ามทำอาหาร' ตอนบอลเตะ — celebrity fit + creative contradiction",
      yt: "84Tq3DJS0Ws", url: "https://www.youtube.com/watch?v=84Tq3DJS0Ws", src: "Uber Eats" },
    { brand: "Nike Thailand", title: "Goal-Dang ทรงวาด — Football × Fashion × Art", month: "มิ.ย.", th: 1,
      tag: "Event Recap", why: "งานเปิดตัวที่เป็น cultural experience — Mercurial Dress ของ LISA + ศิลปินไทย (คลิปอยู่บน FB/IG — ลิงก์นี้เป็นบทความรีแคป)",
      yt: null, url: "https://thestandard.co/nike-goal-dang-world-cup-song-wat/", src: "The Standard · FEFL Media Movement" }
  ]
};
