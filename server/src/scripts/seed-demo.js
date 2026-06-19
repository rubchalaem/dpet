const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  { name: "วัด", icon: "landmark", description: "ศาสนสถานและวัดสำคัญ" },
  { name: "ธรรมชาติ", icon: "trees", description: "น้ำตก ภูเขา และอุทยาน" },
  { name: "ตลาด/ชุมชน", icon: "store", description: "ตลาดและชุมชนท้องถิ่น" },
  { name: "วัฒนธรรม", icon: "museum", description: "พิพิธภัณฑ์และวัฒนธรรม" },
  { name: "คาเฟ่/ฟาร์ม", icon: "grape", description: "คาเฟ่ ฟาร์ม และไร่องุ่น" },
  { name: "ร้านอาหาร", icon: "restaurant", description: "ร้านอาหารอร่อยและสตรีทฟู้ดห้ามพลาด" },
  { name: "ที่พัก/โฮมสเตย์", icon: "hotel", description: "โฮมสเตย์ โรงแรม และที่พักยอดนิยม" },
  { name: "แหล่งช้อปปิ้ง/ของฝาก", icon: "shopping-bag", description: "ห้างสรรพสินค้า ตลาดนัด และร้านค้าของฝาก" },
  { name: "กิจกรรมแอดเวนเจอร์", icon: "compass", description: "แคมป์ปิ้ง ล่องแก่ง และกิจกรรมท้าทาย" },
  { name: "จุดชมวิว/จุดถ่ายรูป", icon: "camera", description: "จุดชมวิวทิวทัศน์และมุมถ่ายรูปสวยงาม" },
];

const attractions = [
  ["วัดพระพุทธบาทราชวรมหาวิหาร", "วัดสำคัญคู่เมืองสระบุรี ประดิษฐานรอยพระพุทธบาทและเป็นจุดหมายยอดนิยมด้านศรัทธา", "08:00-17:00", "พระพุทธบาท", "ขุนโขลน", "วัด", true, "https://maps.google.com/?q=Wat+Phra+Phutthabat+Saraburi"],
  ["อุทยานแห่งชาติน้ำตกเจ็ดสาวน้อย", "น้ำตกชั้นเตี้ยหลายชั้น เหมาะกับการพักผ่อน เล่นน้ำ และเดินชมธรรมชาติ", "08:30-16:30", "มวกเหล็ก", "มวกเหล็ก", "ธรรมชาติ", true, "https://maps.google.com/?q=Namtok+Chet+Sao+Noi+National+Park"],
  ["วัดพระพุทธฉาย", "วัดเก่าแก่บนเขาที่มีรอยพระพุทธฉายและจุดชมวิวเมืองสระบุรี", "08:00-17:00", "เมืองสระบุรี", "หนองปลาไหล", "วัด", true, "https://maps.google.com/?q=Wat+Phra+Phutthachai+Saraburi"],
  ["วัดป่าสว่างบุญ", "วัดที่โดดเด่นด้วยเจดีย์สีทองจำนวนมาก บรรยากาศสงบและถ่ายรูปสวย", "08:00-17:00", "แก่งคอย", "ชะอม", "วัด", true, "https://maps.google.com/?q=Wat+Pa+Sawang+Bun+Saraburi"],
  ["ถ้ำดาวเขาแก้ว", "ถ้ำธรรมชาติในอำเภอมวกเหล็ก มีหินงอกหินย้อยและเส้นทางท่องเที่ยวเชิงธรรมชาติ", "08:00-17:00", "มวกเหล็ก", "ลำพญากลาง", "ธรรมชาติ", false, "https://maps.google.com/?q=Tham+Dao+Khao+Kaew+Saraburi"],
  ["ตลาดหัวปลี", "ตลาดชุมชนบรรยากาศอบอุ่น มีอาหาร ของฝาก และกิจกรรมท้องถิ่น", "09:00-18:00", "เฉลิมพระเกียรติ", "หน้าพระลาน", "ตลาด/ชุมชน", true, "https://maps.google.com/?q=Hua+Pli+Market+Saraburi"],
  ["ไร่องุ่นภูนวพันธุ์ / Prapassara Vineyard", "แหล่งท่องเที่ยวเชิงเกษตรและไร่องุ่น เหมาะกับครอบครัวและถ่ายภาพ", "09:00-17:00", "มวกเหล็ก", "มวกเหล็ก", "คาเฟ่/ฟาร์ม", false, "https://maps.google.com/?q=Prapassara+Vineyard+Saraburi"],
  ["หอวัฒนธรรมพื้นบ้านไทยวน สระบุรี", "แหล่งเรียนรู้วัฒนธรรมไทยวน วิถีชีวิต ผ้าทอ และประวัติชุมชน", "09:00-16:00", "เมืองสระบุรี", "ปากเพรียว", "วัฒนธรรม", false, "https://maps.google.com/?q=Thai+Yuan+Saraburi+Folk+Cultural+Hall"],
  ["น้ำตกมวกเหล็ก", "น้ำตกและลำธารใกล้ชุมชน เหมาะกับแวะพักระหว่างเส้นทางมวกเหล็ก", "08:00-17:00", "มวกเหล็ก", "มวกเหล็ก", "ธรรมชาติ", true, "https://maps.google.com/?q=Muak+Lek+Waterfall+Saraburi"],
  ["อุทยานแห่งชาติเขาสามหลั่น", "อุทยานใกล้เมืองสระบุรี มีเส้นทางธรรมชาติ น้ำตก และพื้นที่พักผ่อน", "08:00-17:00", "เมืองสระบุรี", "หนองปลาไหล", "ธรรมชาติ", false, "https://maps.google.com/?q=Khao+Sam+Lan+National+Park"],
  ["เขื่อนป่าสักชลสิทธิ์", "เขื่อนขนาดใหญ่ใกล้สระบุรี-ลพบุรี เหมาะกับเส้นทางท่องเที่ยว 1 วัน", "08:00-18:00", "วังม่วง", "คำพราน", "ธรรมชาติ", false, "https://maps.google.com/?q=Pasak+Chonlasit+Dam"],
  ["ครัวบ้านสวน สระบุรี", "จุดแวะพักและร้านอาหารบรรยากาศท้องถิ่น เหมาะกับใส่ในเส้นทางท่องเที่ยว", "10:00-20:00", "เมืองสระบุรี", "ปากเพรียว", "ตลาด/ชุมชน", false, "https://maps.google.com/?q=Saraburi+local+restaurant"],
];

const futureDate = (offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  d.setHours(0, 0, 0, 0);
  return d;
};

async function findOrCreateCategory(category) {
  const existing = await prisma.categories.findFirst({ where: { name: category.name } });
  if (existing) {
    return prisma.categories.update({ where: { category_id: existing.category_id }, data: category });
  }
  return prisma.categories.create({ data: category });
}

async function findOrCreateAttraction(data) {
  const existing = await prisma.tourist_attractions.findFirst({ where: { attraction_name: data.attraction_name } });
  if (existing) {
    return prisma.tourist_attractions.update({ where: { attraction_id: existing.attraction_id }, data });
  }
  return prisma.tourist_attractions.create({ data });
}

async function main() {
  const categoryMap = {};
  for (const category of categories) {
    const item = await findOrCreateCategory(category);
    categoryMap[item.name] = item.category_id;
  }

  for (const [name, description, opening_time, district, subdistrict, categoryName, is_popular, map_url] of attractions) {
    const attraction = await findOrCreateAttraction({
      attraction_name: name,
      description,
      opening_time,
      district,
      subdistrict,
      category_id: categoryMap[categoryName],
      is_popular,
      map_url,
      location: `${subdistrict}, ${district}, สระบุรี`,
      address: `${subdistrict} ${district} สระบุรี`,
    });

    const existingImage = await prisma.attraction_images.findFirst({ where: { attraction_id: attraction.attraction_id } });
    if (!existingImage) {
      const imageIndex = ((attraction.attraction_id - 1) % 15) + 1;
      await prisma.attraction_images.create({
        data: {
          attraction_id: attraction.attraction_id,
          image_url: `/S${imageIndex}.jpg`,
          is_cover: true,
          sort_order: 0,
        },
      });
    }

    let pkg = await prisma.tour_packages.findFirst({ where: { attraction_id: attraction.attraction_id } });
    if (!pkg) {
      pkg = await prisma.tour_packages.create({
        data: {
          package_name: `ทริป${name}`,
          description: `แพ็กเกจเที่ยว ${name} พร้อมไกด์และแผนเดินทาง`,
          price: new Prisma.Decimal(1200 + attraction.attraction_id * 150),
          duration: "1 วัน",
          attraction_id: attraction.attraction_id,
        },
      });
    }

    for (const offset of [5, 10]) {
      const date = futureDate(offset + (attraction.attraction_id % 3));
      const existingSchedule = await prisma.package_schedules.findFirst({ where: { package_id: pkg.package_id, date } });
      if (!existingSchedule) {
        await prisma.package_schedules.create({
          data: { package_id: pkg.package_id, date, capacity: 20, booked_seats: 0 },
        });
      }
    }
  }

  console.log(JSON.stringify({
    categories: await prisma.categories.count(),
    attractions: await prisma.tourist_attractions.count(),
    packages: await prisma.tour_packages.count(),
    schedules: await prisma.package_schedules.count(),
  }, null, 2));
}

main().finally(() => prisma.$disconnect());
