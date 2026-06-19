export type ThaiSubdistrict = {
  name: string;
  zipcodes: string[];
};

export type ThaiDistrict = {
  name: string;
  subdistricts: ThaiSubdistrict[];
};

export type ThaiProvince = {
  name: string;
  districts: ThaiDistrict[];
};

export const thaiAddress: ThaiProvince[] = [
  {
    "name": "กรุงเทพมหานคร",
    "districts": [
      {
        "name": "พระนคร",
        "subdistricts": [
          {
            "name": "พระบรมมหาราชวัง",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "วังบูรพาภิรมย์",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "วัดราชบพิธ",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "สำราญราษฎร์",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "ศาลเจ้าพ่อเสือ",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "เสาชิงช้า",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "บวรนิเวศ",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "ตลาดยอด",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "ชนะสงคราม",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "บ้านพานถม",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "บางขุนพรหม",
            "zipcodes": [
              "10200"
            ]
          },
          {
            "name": "วัดสามพระยา",
            "zipcodes": [
              "10200"
            ]
          }
        ]
      },
      {
        "name": "ดุสิต",
        "subdistricts": [
          {
            "name": "ดุสิต",
            "zipcodes": [
              "10300"
            ]
          },
          {
            "name": "วชิรพยาบาล",
            "zipcodes": [
              "10300"
            ]
          },
          {
            "name": "สวนจิตรลดา",
            "zipcodes": [
              "10300"
            ]
          },
          {
            "name": "สี่แยกมหานาค",
            "zipcodes": [
              "10300"
            ]
          },
          {
            "name": "ถนนนครไชยศรี",
            "zipcodes": [
              "10300"
            ]
          }
        ]
      },
      {
        "name": "หนองจอก",
        "subdistricts": [
          {
            "name": "กระทุ่มราย",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "หนองจอก",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "คลองสิบ",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "คลองสิบสอง",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "โคกแฝด",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "คู้ฝั่งเหนือ",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "ลำผักชี",
            "zipcodes": [
              "10530"
            ]
          },
          {
            "name": "ลำต้อยติ่ง",
            "zipcodes": [
              "10530"
            ]
          }
        ]
      },
      {
        "name": "บางรัก",
        "subdistricts": [
          {
            "name": "มหาพฤฒาราม",
            "zipcodes": [
              "10500"
            ]
          },
          {
            "name": "สีลม",
            "zipcodes": [
              "10500"
            ]
          },
          {
            "name": "สุริยวงศ์",
            "zipcodes": [
              "10500"
            ]
          },
          {
            "name": "บางรัก",
            "zipcodes": [
              "10500"
            ]
          },
          {
            "name": "สี่พระยา",
            "zipcodes": [
              "10500"
            ]
          }
        ]
      },
      {
        "name": "บางเขน",
        "subdistricts": [
          {
            "name": "อนุสาวรีย์",
            "zipcodes": [
              "10220"
            ]
          },
          {
            "name": "ท่าแร้ง",
            "zipcodes": [
              "10220"
            ]
          }
        ]
      },
      {
        "name": "บางกะปิ",
        "subdistricts": [
          {
            "name": "คลองจั่น",
            "zipcodes": [
              "10240"
            ]
          },
          {
            "name": "หัวหมาก",
            "zipcodes": [
              "10240"
            ]
          }
        ]
      },
      {
        "name": "ปทุมวัน",
        "subdistricts": [
          {
            "name": "รองเมือง",
            "zipcodes": [
              "10330"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "10330"
            ]
          },
          {
            "name": "ปทุมวัน",
            "zipcodes": [
              "10330"
            ]
          },
          {
            "name": "ลุมพินี",
            "zipcodes": [
              "10330"
            ]
          }
        ]
      },
      {
        "name": "ป้อมปราบศัตรูพ่าย",
        "subdistricts": [
          {
            "name": "ป้อมปราบ",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "วัดเทพศิรินทร์",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "คลองมหานาค",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "บ้านบาตร",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "วัดโสมนัส",
            "zipcodes": [
              "10100"
            ]
          }
        ]
      },
      {
        "name": "พระโขนง",
        "subdistricts": [
          {
            "name": "บางจาก",
            "zipcodes": [
              "10260"
            ]
          }
        ]
      },
      {
        "name": "มีนบุรี",
        "subdistricts": [
          {
            "name": "มีนบุรี",
            "zipcodes": [
              "10510"
            ]
          },
          {
            "name": "แสนแสบ",
            "zipcodes": [
              "10510"
            ]
          }
        ]
      },
      {
        "name": "ลาดกระบัง",
        "subdistricts": [
          {
            "name": "ลาดกระบัง",
            "zipcodes": [
              "10520"
            ]
          },
          {
            "name": "คลองสองต้นนุ่น",
            "zipcodes": [
              "10520"
            ]
          },
          {
            "name": "คลองสามประเวศ",
            "zipcodes": [
              "10520"
            ]
          },
          {
            "name": "ลำปลาทิว",
            "zipcodes": [
              "10520"
            ]
          },
          {
            "name": "ทับยาว",
            "zipcodes": [
              "10520"
            ]
          },
          {
            "name": "ขุมทอง",
            "zipcodes": [
              "10520"
            ]
          }
        ]
      },
      {
        "name": "ยานนาวา",
        "subdistricts": [
          {
            "name": "ช่องนนทรี",
            "zipcodes": [
              "10120"
            ]
          },
          {
            "name": "บางโพงพาง",
            "zipcodes": [
              "10120"
            ]
          }
        ]
      },
      {
        "name": "สัมพันธวงศ์",
        "subdistricts": [
          {
            "name": "จักรวรรดิ",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "สัมพันธวงศ์",
            "zipcodes": [
              "10100"
            ]
          },
          {
            "name": "ตลาดน้อย",
            "zipcodes": [
              "10100"
            ]
          }
        ]
      },
      {
        "name": "พญาไท",
        "subdistricts": [
          {
            "name": "สามเสนใน",
            "zipcodes": [
              "10400"
            ]
          }
        ]
      },
      {
        "name": "ธนบุรี",
        "subdistricts": [
          {
            "name": "วัดกัลยาณ์",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "หิรัญรูจี",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "บางยี่เรือ",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "บุคคโล",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "ตลาดพลู",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "ดาวคะนอง",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "สำเหร่",
            "zipcodes": [
              "10600"
            ]
          }
        ]
      },
      {
        "name": "บางกอกใหญ่",
        "subdistricts": [
          {
            "name": "วัดอรุณ",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "วัดท่าพระ",
            "zipcodes": [
              "10600"
            ]
          }
        ]
      },
      {
        "name": "ห้วยขวาง",
        "subdistricts": [
          {
            "name": "ห้วยขวาง",
            "zipcodes": [
              "10310"
            ]
          },
          {
            "name": "บางกะปิ",
            "zipcodes": [
              "10310"
            ]
          },
          {
            "name": "สามเสนนอก",
            "zipcodes": [
              "10310"
            ]
          }
        ]
      },
      {
        "name": "คลองสาน",
        "subdistricts": [
          {
            "name": "สมเด็จเจ้าพระยา",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "คลองสาน",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "บางลำภูล่าง",
            "zipcodes": [
              "10600"
            ]
          },
          {
            "name": "คลองต้นไทร",
            "zipcodes": [
              "10600"
            ]
          }
        ]
      },
      {
        "name": "ตลิ่งชัน",
        "subdistricts": [
          {
            "name": "คลองชักพระ",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "ฉิมพลี",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "บางพรม",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "บางระมาด",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "บางเชือกหนัง",
            "zipcodes": [
              "10170"
            ]
          }
        ]
      },
      {
        "name": "บางกอกน้อย",
        "subdistricts": [
          {
            "name": "ศิริราช",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บ้านช่างหล่อ",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บางขุนนนท์",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บางขุนศรี",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "อรุณอมรินทร์",
            "zipcodes": [
              "10700"
            ]
          }
        ]
      },
      {
        "name": "บางขุนเทียน",
        "subdistricts": [
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "10150"
            ]
          },
          {
            "name": "แสมดำ",
            "zipcodes": [
              "10150"
            ]
          }
        ]
      },
      {
        "name": "ภาษีเจริญ",
        "subdistricts": [
          {
            "name": "บางหว้า",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางด้วน",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางแค",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางแคเหนือ",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางไผ่",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางจาก",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางแวก",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "คลองขวาง",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "ปากคลองภาษีเจริญ",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "คูหาสวรรค์",
            "zipcodes": [
              "10160"
            ]
          }
        ]
      },
      {
        "name": "หนองแขม",
        "subdistricts": [
          {
            "name": "หนองแขม",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "หนองค้างพลู",
            "zipcodes": [
              "10160"
            ]
          }
        ]
      },
      {
        "name": "ราษฎร์บูรณะ",
        "subdistricts": [
          {
            "name": "ราษฎร์บูรณะ",
            "zipcodes": [
              "10140"
            ]
          },
          {
            "name": "บางปะกอก",
            "zipcodes": [
              "10140"
            ]
          }
        ]
      },
      {
        "name": "บางพลัด",
        "subdistricts": [
          {
            "name": "บางพลัด",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บางอ้อ",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บางบำหรุ",
            "zipcodes": [
              "10700"
            ]
          },
          {
            "name": "บางยี่ขัน",
            "zipcodes": [
              "10700"
            ]
          }
        ]
      },
      {
        "name": "ดินแดง",
        "subdistricts": [
          {
            "name": "ดินแดง",
            "zipcodes": [
              "10400"
            ]
          },
          {
            "name": "รัชดาภิเษก",
            "zipcodes": [
              "10400"
            ]
          }
        ]
      },
      {
        "name": "บึงกุ่ม",
        "subdistricts": [
          {
            "name": "คลองกุ่ม",
            "zipcodes": [
              "10240"
            ]
          },
          {
            "name": "สะพานสูง",
            "zipcodes": [
              "10240"
            ]
          },
          {
            "name": "คันนายาว",
            "zipcodes": [
              "10240"
            ]
          }
        ]
      },
      {
        "name": "สาทร",
        "subdistricts": [
          {
            "name": "ทุ่งวัดดอน",
            "zipcodes": [
              "10120"
            ]
          },
          {
            "name": "ยานนาวา",
            "zipcodes": [
              "10120"
            ]
          },
          {
            "name": "ทุ่งมหาเมฆ",
            "zipcodes": [
              "10120"
            ]
          }
        ]
      },
      {
        "name": "บางซื่อ",
        "subdistricts": [
          {
            "name": "บางซื่อ",
            "zipcodes": [
              "10800"
            ]
          }
        ]
      },
      {
        "name": "จตุจักร",
        "subdistricts": [
          {
            "name": "ลาดยาว",
            "zipcodes": [
              "10900"
            ]
          },
          {
            "name": "เสนานิคม",
            "zipcodes": [
              "10900"
            ]
          },
          {
            "name": "จันทรเกษม",
            "zipcodes": [
              "10900"
            ]
          },
          {
            "name": "จอมพล",
            "zipcodes": [
              "10900"
            ]
          },
          {
            "name": "จตุจักร",
            "zipcodes": [
              "10900"
            ]
          }
        ]
      },
      {
        "name": "บางคอแหลม",
        "subdistricts": [
          {
            "name": "บางคอแหลม",
            "zipcodes": [
              "10120"
            ]
          },
          {
            "name": "วัดพระยาไกร",
            "zipcodes": [
              "10120"
            ]
          },
          {
            "name": "บางโคล่",
            "zipcodes": [
              "10120"
            ]
          }
        ]
      },
      {
        "name": "ประเวศ",
        "subdistricts": [
          {
            "name": "ประเวศ",
            "zipcodes": [
              "10250"
            ]
          },
          {
            "name": "หนองบอน",
            "zipcodes": [
              "10250"
            ]
          },
          {
            "name": "ดอกไม้",
            "zipcodes": [
              "10250"
            ]
          },
          {
            "name": "สวนหลวง",
            "zipcodes": [
              "10250"
            ]
          }
        ]
      },
      {
        "name": "คลองเตย",
        "subdistricts": [
          {
            "name": "คลองเตย",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "คลองตัน",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "พระโขนง",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "คลองเตยเหนือ",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "คลองตันเหนือ",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "พระโขนงเหนือ",
            "zipcodes": [
              "10110"
            ]
          }
        ]
      },
      {
        "name": "สวนหลวง",
        "subdistricts": [
          {
            "name": "สวนหลวง",
            "zipcodes": [
              "10250"
            ]
          }
        ]
      },
      {
        "name": "จอมทอง",
        "subdistricts": [
          {
            "name": "บางขุนเทียน",
            "zipcodes": [
              "10150"
            ]
          },
          {
            "name": "บางค้อ",
            "zipcodes": [
              "10150"
            ]
          },
          {
            "name": "บางมด",
            "zipcodes": [
              "10150"
            ]
          },
          {
            "name": "จอมทอง",
            "zipcodes": [
              "10150"
            ]
          }
        ]
      },
      {
        "name": "ดอนเมือง",
        "subdistricts": [
          {
            "name": "สีกัน",
            "zipcodes": [
              "10210"
            ]
          }
        ]
      },
      {
        "name": "ราชเทวี",
        "subdistricts": [
          {
            "name": "ทุ่งพญาไท",
            "zipcodes": [
              "10400"
            ]
          },
          {
            "name": "ถนนพญาไท",
            "zipcodes": [
              "10400"
            ]
          },
          {
            "name": "ถนนเพชรบุรี",
            "zipcodes": [
              "10400"
            ]
          },
          {
            "name": "มักกะสัน",
            "zipcodes": [
              "10400"
            ]
          }
        ]
      },
      {
        "name": "ลาดพร้าว",
        "subdistricts": [
          {
            "name": "ลาดพร้าว",
            "zipcodes": [
              "10230"
            ]
          },
          {
            "name": "จรเข้บัว",
            "zipcodes": [
              "10230"
            ]
          }
        ]
      },
      {
        "name": "วัฒนา",
        "subdistricts": [
          {
            "name": "คลองเตยเหนือ",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "คลองตันเหนือ",
            "zipcodes": [
              "10110"
            ]
          },
          {
            "name": "พระโขนงเหนือ",
            "zipcodes": [
              "10110"
            ]
          }
        ]
      },
      {
        "name": "บางแค",
        "subdistricts": [
          {
            "name": "บางแค",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางแคเหนือ",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "บางไผ่",
            "zipcodes": [
              "10160"
            ]
          },
          {
            "name": "หลักสอง",
            "zipcodes": [
              "10160"
            ]
          }
        ]
      },
      {
        "name": "หลักสี่",
        "subdistricts": [
          {
            "name": "ทุ่งสองห้อง",
            "zipcodes": [
              "10210"
            ]
          },
          {
            "name": "ตลาดบางเขน",
            "zipcodes": [
              "10210"
            ]
          }
        ]
      },
      {
        "name": "สายไหม",
        "subdistricts": [
          {
            "name": "สายไหม",
            "zipcodes": [
              "10220"
            ]
          },
          {
            "name": "ออเงิน",
            "zipcodes": [
              "10220"
            ]
          },
          {
            "name": "คลองถนน",
            "zipcodes": [
              "10220"
            ]
          }
        ]
      },
      {
        "name": "คันนายาว",
        "subdistricts": [
          {
            "name": "คันนายาว",
            "zipcodes": [
              "10230"
            ]
          }
        ]
      },
      {
        "name": "สะพานสูง",
        "subdistricts": [
          {
            "name": "สะพานสูง",
            "zipcodes": [
              "10240"
            ]
          }
        ]
      },
      {
        "name": "วังทองหลาง",
        "subdistricts": [
          {
            "name": "วังทองหลาง",
            "zipcodes": [
              "10310"
            ]
          }
        ]
      },
      {
        "name": "คลองสามวา",
        "subdistricts": [
          {
            "name": "สามวาตะวันตก",
            "zipcodes": [
              "10510"
            ]
          },
          {
            "name": "สามวาตะวันออก",
            "zipcodes": [
              "10510"
            ]
          },
          {
            "name": "บางชัน",
            "zipcodes": [
              "10510"
            ]
          },
          {
            "name": "ทรายกองดิน",
            "zipcodes": [
              "10510"
            ]
          },
          {
            "name": "ทรายกองดินใต้",
            "zipcodes": [
              "10510"
            ]
          }
        ]
      },
      {
        "name": "บางนา",
        "subdistricts": [
          {
            "name": "บางนา",
            "zipcodes": [
              "10260"
            ]
          }
        ]
      },
      {
        "name": "ทวีวัฒนา",
        "subdistricts": [
          {
            "name": "ทวีวัฒนา",
            "zipcodes": [
              "10170"
            ]
          },
          {
            "name": "ศาลาธรรมสพน์",
            "zipcodes": [
              "10170"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งครุ",
        "subdistricts": [
          {
            "name": "บางมด",
            "zipcodes": [
              "10140"
            ]
          },
          {
            "name": "ทุ่งครุ",
            "zipcodes": [
              "10140"
            ]
          }
        ]
      },
      {
        "name": "บางบอน",
        "subdistricts": [
          {
            "name": "บางบอน",
            "zipcodes": [
              "10150"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สมุทรปราการ",
    "districts": [
      {
        "name": "เมืองสมุทรปราการ",
        "subdistricts": [
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "สำโรงเหนือ",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "บางเมือง",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "ท้ายบ้าน",
            "zipcodes": [
              "10280"
            ]
          },
          {
            "name": "บางปูใหม่",
            "zipcodes": [
              "10280"
            ]
          },
          {
            "name": "แพรกษา",
            "zipcodes": [
              "10280"
            ]
          },
          {
            "name": "บางโปรง",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "บางปู",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "บางด้วน",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "บางเมืองใหม่",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "เทพารักษ์",
            "zipcodes": [
              "10270"
            ]
          },
          {
            "name": "ท้ายบ้านใหม่",
            "zipcodes": [
              "10280"
            ]
          },
          {
            "name": "แพรกษาใหม่",
            "zipcodes": [
              "10280"
            ]
          }
        ]
      },
      {
        "name": "บางบ่อ",
        "subdistricts": [
          {
            "name": "บางบ่อ",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "บ้านระกาศ",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "บางพลีน้อย",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "บางเพรียง",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "คลองด่าน",
            "zipcodes": [
              "10550"
            ]
          },
          {
            "name": "คลองสวน",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "เปร็ง",
            "zipcodes": [
              "10560"
            ]
          },
          {
            "name": "คลองนิยมยาตรา",
            "zipcodes": [
              "10560"
            ]
          }
        ]
      },
      {
        "name": "บางพลี",
        "subdistricts": [
          {
            "name": "บางพลีใหญ่",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "บางปลา",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "บางโฉลง",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "ราชาเทวะ",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "หนองปรือ",
            "zipcodes": [
              "10540"
            ]
          }
        ]
      },
      {
        "name": "พระประแดง",
        "subdistricts": [
          {
            "name": "ตลาด",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางพึ่ง",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางจาก",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางครุ",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางหญ้าแพรก",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางหัวเสือ",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "สำโรงใต้",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางยอ",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางกะเจ้า",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางน้ำผึ้ง",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางกระสอบ",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "บางกอบัว",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "ทรงคนอง",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "10130"
            ]
          },
          {
            "name": "สำโรงกลาง",
            "zipcodes": [
              "10130"
            ]
          }
        ]
      },
      {
        "name": "พระสมุทรเจดีย์",
        "subdistricts": [
          {
            "name": "นาเกลือ",
            "zipcodes": [
              "10290"
            ]
          },
          {
            "name": "บ้านคลองสวน",
            "zipcodes": [
              "10290"
            ]
          },
          {
            "name": "แหลมฟ้าผ่า",
            "zipcodes": [
              "10290"
            ]
          },
          {
            "name": "ปากคลองบางปลากด",
            "zipcodes": [
              "10290"
            ]
          },
          {
            "name": "ในคลองบางปลากด",
            "zipcodes": [
              "10290"
            ]
          }
        ]
      },
      {
        "name": "บางเสาธง",
        "subdistricts": [
          {
            "name": "บางเสาธง",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "ศีรษะจรเข้น้อย",
            "zipcodes": [
              "10540"
            ]
          },
          {
            "name": "ศีรษะจรเข้ใหญ่",
            "zipcodes": [
              "10540"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นนทบุรี",
    "districts": [
      {
        "name": "เมืองนนทบุรี",
        "subdistricts": [
          {
            "name": "สวนใหญ่",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "ตลาดขวัญ",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางเขน",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางกระสอ",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "ท่าทราย",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางไผ่",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางศรีเมือง",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางกร่าง",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "ไทรม้า",
            "zipcodes": [
              "11000"
            ]
          },
          {
            "name": "บางรักน้อย",
            "zipcodes": [
              "11000"
            ]
          }
        ]
      },
      {
        "name": "บางกรวย",
        "subdistricts": [
          {
            "name": "วัดชลอ",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "บางกรวย",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "บางสีทอง",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "บางขนุน",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "บางขุนกอง",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "บางคูเวียง",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "มหาสวัสดิ์",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "ปลายบาง",
            "zipcodes": [
              "11130"
            ]
          },
          {
            "name": "ศาลากลาง",
            "zipcodes": [
              "11130"
            ]
          }
        ]
      },
      {
        "name": "บางใหญ่",
        "subdistricts": [
          {
            "name": "บางม่วง",
            "zipcodes": [
              "11140"
            ]
          },
          {
            "name": "บางแม่นาง",
            "zipcodes": [
              "11140"
            ]
          },
          {
            "name": "บางเลน",
            "zipcodes": [
              "11140"
            ]
          },
          {
            "name": "เสาธงหิน",
            "zipcodes": [
              "11140"
            ]
          },
          {
            "name": "บางใหญ่",
            "zipcodes": [
              "11140"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "11140"
            ]
          }
        ]
      },
      {
        "name": "บางบัวทอง",
        "subdistricts": [
          {
            "name": "โสนลอย",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "บางบัวทอง",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "บางรักใหญ่",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "บางคูรัด",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "ละหาร",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "ลำโพ",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "พิมลราช",
            "zipcodes": [
              "11110"
            ]
          },
          {
            "name": "บางรักพัฒนา",
            "zipcodes": [
              "11110"
            ]
          }
        ]
      },
      {
        "name": "ไทรน้อย",
        "subdistricts": [
          {
            "name": "ไทรน้อย",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "ราษฎร์นิยม",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "หนองเพรางาย",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "ไทรใหญ่",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "ขุนศรี",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "คลองขวาง",
            "zipcodes": [
              "11150"
            ]
          },
          {
            "name": "ทวีวัฒนา",
            "zipcodes": [
              "11150"
            ]
          }
        ]
      },
      {
        "name": "ปากเกร็ด",
        "subdistricts": [
          {
            "name": "ปากเกร็ด",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "บางตลาด",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "บางพูด",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "บางตะไนย์",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "คลองพระอุดม",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "ท่าอิฐ",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "เกาะเกร็ด",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "อ้อมเกร็ด",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "คลองข่อย",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "บางพลับ",
            "zipcodes": [
              "11120"
            ]
          },
          {
            "name": "คลองเกลือ",
            "zipcodes": [
              "11120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ปทุมธานี",
    "districts": [
      {
        "name": "เมืองปทุมธานี",
        "subdistricts": [
          {
            "name": "บางปรอก",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บ้านฉาง",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บ้านกระแชง",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางขะแยง",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางคูวัด",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางหลวง",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางเดื่อ",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางพูด",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางพูน",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "บางกะดี",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "สวนพริกไทย",
            "zipcodes": [
              "12000"
            ]
          },
          {
            "name": "หลักหก",
            "zipcodes": [
              "12000"
            ]
          }
        ]
      },
      {
        "name": "คลองหลวง",
        "subdistricts": [
          {
            "name": "คลองหนึ่ง",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองสอง",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองสาม",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองสี่",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองห้า",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองหก",
            "zipcodes": [
              "12120"
            ]
          },
          {
            "name": "คลองเจ็ด",
            "zipcodes": [
              "12120"
            ]
          }
        ]
      },
      {
        "name": "ธัญบุรี",
        "subdistricts": [
          {
            "name": "ประชาธิปัตย์",
            "zipcodes": [
              "12130"
            ]
          },
          {
            "name": "บึงยี่โถ",
            "zipcodes": [
              "12130"
            ]
          },
          {
            "name": "รังสิต",
            "zipcodes": [
              "12110"
            ]
          },
          {
            "name": "ลำผักกูด",
            "zipcodes": [
              "12110"
            ]
          },
          {
            "name": "บึงสนั่น",
            "zipcodes": [
              "12110"
            ]
          },
          {
            "name": "บึงน้ำรักษ์",
            "zipcodes": [
              "12110"
            ]
          }
        ]
      },
      {
        "name": "หนองเสือ",
        "subdistricts": [
          {
            "name": "บึงบา",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "บึงบอน",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "บึงกาสาม",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "บึงชำอ้อ",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "หนองสามวัง",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "ศาลาครุ",
            "zipcodes": [
              "12170"
            ]
          },
          {
            "name": "นพรัตน์",
            "zipcodes": [
              "12170"
            ]
          }
        ]
      },
      {
        "name": "ลาดหลุมแก้ว",
        "subdistricts": [
          {
            "name": "ระแหง",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "ลาดหลุมแก้ว",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "คูบางหลวง",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "คูขวาง",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "คลองพระอุดม",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "บ่อเงิน",
            "zipcodes": [
              "12140"
            ]
          },
          {
            "name": "หน้าไม้",
            "zipcodes": [
              "12140"
            ]
          }
        ]
      },
      {
        "name": "ลำลูกกา",
        "subdistricts": [
          {
            "name": "คูคต",
            "zipcodes": [
              "12130"
            ]
          },
          {
            "name": "ลาดสวาย",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "บึงคำพร้อย",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "ลำลูกกา",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "บึงทองหลาง",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "ลำไทร",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "บึงคอไห",
            "zipcodes": [
              "12150"
            ]
          },
          {
            "name": "พืชอุดม",
            "zipcodes": [
              "12150"
            ]
          }
        ]
      },
      {
        "name": "สามโคก",
        "subdistricts": [
          {
            "name": "บางเตย",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "คลองควาย",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "สามโคก",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "กระแชง",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "บางโพธิ์เหนือ",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "เชียงรากใหญ่",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "บ้านปทุม",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "บ้านงิ้ว",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "เชียงรากน้อย",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "บางกระบือ",
            "zipcodes": [
              "12160"
            ]
          },
          {
            "name": "ท้ายเกาะ",
            "zipcodes": [
              "12160"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พระนครศรีอยุธยา",
    "districts": [
      {
        "name": "พระนครศรีอยุธยา",
        "subdistricts": [
          {
            "name": "ประตูชัย",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "กะมัง",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "หอรัตนไชย",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "หัวรอ",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "ท่าวาสุกรี",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "ไผ่ลิง",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "ปากกราน",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "ภูเขาทอง",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "สำเภาล่ม",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "สวนพริก",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "คลองตะเคียน",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "วัดตูม",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "หันตรา",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "ลุมพลี",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "คลองสวนพลู",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "คลองสระบัว",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "เกาะเรียน",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "บ้านป้อม",
            "zipcodes": [
              "13000"
            ]
          },
          {
            "name": "บ้านรุน",
            "zipcodes": [
              "13000"
            ]
          }
        ]
      },
      {
        "name": "ท่าเรือ",
        "subdistricts": [
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "จำปา",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "บ้านร่อม",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "ศาลาลอย",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "วังแดง",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "โพธิ์เอน",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "ปากท่า",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "หนองขนาก",
            "zipcodes": [
              "13130"
            ]
          },
          {
            "name": "ท่าเจ้าสนุก",
            "zipcodes": [
              "13130"
            ]
          }
        ]
      },
      {
        "name": "นครหลวง",
        "subdistricts": [
          {
            "name": "นครหลวง",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "บ่อโพง",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "บ้านชุ้ง",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "ปากจั่น",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "บางระกำ",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "บางพระครู",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "แม่ลา",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "คลองสะแก",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "สามไถ",
            "zipcodes": [
              "13260"
            ]
          },
          {
            "name": "พระนอน",
            "zipcodes": [
              "13260"
            ]
          }
        ]
      },
      {
        "name": "บางไทร",
        "subdistricts": [
          {
            "name": "บางไทร",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บางพลี",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "สนามชัย",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บ้านแป้ง",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "หน้าไม้",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บางยี่โท",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "แคออก",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "แคตก",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ช่างเหล็ก",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "กระแชง",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บ้านกลึง",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ช้างน้อย",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ห่อหมก",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ไผ่พระ",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "กกแก้วบูรพา",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ไม้ตรา",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บ้านม้า",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "13190"
            ]
          },
          {
            "name": "ราชคราม",
            "zipcodes": [
              "13290"
            ]
          },
          {
            "name": "ช้างใหญ่",
            "zipcodes": [
              "13290"
            ]
          },
          {
            "name": "โพแตง",
            "zipcodes": [
              "13290"
            ]
          },
          {
            "name": "เชียงรากน้อย",
            "zipcodes": [
              "13290"
            ]
          },
          {
            "name": "โคกช้าง",
            "zipcodes": [
              "13190"
            ]
          }
        ]
      },
      {
        "name": "บางบาล",
        "subdistricts": [
          {
            "name": "บางบาล",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "วัดยม",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "ไทรน้อย",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "สะพานไทย",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "มหาพราหมณ์",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "กบเจา",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บ้านคลัง",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "พระขาว",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "น้ำเต้า",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "ทางช้าง",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "วัดตะกู",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บางหลวง",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บางหลวงโดด",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บางหัก",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บางชะนี",
            "zipcodes": [
              "13250"
            ]
          },
          {
            "name": "บ้านกุ่ม",
            "zipcodes": [
              "13250"
            ]
          }
        ]
      },
      {
        "name": "บางปะอิน",
        "subdistricts": [
          {
            "name": "บ้านเลน",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "เชียงรากน้อย",
            "zipcodes": [
              "13180"
            ]
          },
          {
            "name": "บ้านโพ",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บ้านกรด",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บางกระสั้น",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "คลองจิก",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บ้านหว้า",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "วัดยม",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บางประแดง",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "สามเรือน",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "เกาะเกิด",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บ้านพลับ",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บ้านแป้ง",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "คุ้งลาน",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "บ้านสร้าง",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "ตลาดเกรียบ",
            "zipcodes": [
              "13160"
            ]
          },
          {
            "name": "ขนอนหลวง",
            "zipcodes": [
              "13160"
            ]
          }
        ]
      },
      {
        "name": "บางปะหัน",
        "subdistricts": [
          {
            "name": "บางปะหัน",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ขยาย",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บางเดื่อ",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "เสาธง",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ทางกลาง",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บางเพลิง",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "หันสัง",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บางนางร้า",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ตานิม",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ทับน้ำ",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บ้านม้า",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ขวัญเมือง",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บ้านลี่",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "โพธิ์สามต้น",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "พุทเลา",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "ตาลเอน",
            "zipcodes": [
              "13220"
            ]
          },
          {
            "name": "บ้านขล้อ",
            "zipcodes": [
              "13220"
            ]
          }
        ]
      },
      {
        "name": "ผักไห่",
        "subdistricts": [
          {
            "name": "ผักไห่",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "อมฤต",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "บ้านแค",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "ลาดน้ำเค็ม",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "ตาลาน",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "ท่าดินแดง",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "ดอนลาน",
            "zipcodes": [
              "13280"
            ]
          },
          {
            "name": "นาคู",
            "zipcodes": [
              "13280"
            ]
          },
          {
            "name": "กุฎี",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "ลำตะเคียน",
            "zipcodes": [
              "13280"
            ]
          },
          {
            "name": "โคกช้าง",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "จักราช",
            "zipcodes": [
              "13280"
            ]
          },
          {
            "name": "หนองน้ำใหญ่",
            "zipcodes": [
              "13280"
            ]
          },
          {
            "name": "ลาดชิด",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "หน้าโคก",
            "zipcodes": [
              "13120"
            ]
          },
          {
            "name": "บ้านใหญ่",
            "zipcodes": [
              "13120"
            ]
          }
        ]
      },
      {
        "name": "ภาชี",
        "subdistricts": [
          {
            "name": "ภาชี",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "โคกม่วง",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "ระโสม",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "หนองน้ำใส",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "ดอนหญ้านาง",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "ไผ่ล้อม",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "กระจิว",
            "zipcodes": [
              "13140"
            ]
          },
          {
            "name": "พระแก้ว",
            "zipcodes": [
              "13140"
            ]
          }
        ]
      },
      {
        "name": "ลาดบัวหลวง",
        "subdistricts": [
          {
            "name": "ลาดบัวหลวง",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "หลักชัย",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "สามเมือง",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "พระยาบันลือ",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "สิงหนาท",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "คู้สลอด",
            "zipcodes": [
              "13230"
            ]
          },
          {
            "name": "คลองพระยาบันลือ",
            "zipcodes": [
              "13230"
            ]
          }
        ]
      },
      {
        "name": "วังน้อย",
        "subdistricts": [
          {
            "name": "ลำตาเสา",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "บ่อตาโล่",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "วังน้อย",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "ลำไทร",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "สนับทึบ",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "พยอม",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "หันตะเภา",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "วังจุฬา",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "ข้าวงาม",
            "zipcodes": [
              "13170"
            ]
          },
          {
            "name": "ชะแมบ",
            "zipcodes": [
              "13170"
            ]
          }
        ]
      },
      {
        "name": "เสนา",
        "subdistricts": [
          {
            "name": "เสนา",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บ้านแพน",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "เจ้าเจ็ด",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "สามกอ",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บางนมโค",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "หัวเวียง",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "มารวิชัย",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "รางจรเข้",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บ้านกระทุ่ม",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บ้านแถว",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "ชายนา",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "สามตุ่ม",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "ลาดงา",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "ดอนทอง",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "บ้านหลวง",
            "zipcodes": [
              "13110"
            ]
          },
          {
            "name": "เจ้าเสด็จ",
            "zipcodes": [
              "13110"
            ]
          }
        ]
      },
      {
        "name": "บางซ้าย",
        "subdistricts": [
          {
            "name": "บางซ้าย",
            "zipcodes": [
              "13270"
            ]
          },
          {
            "name": "แก้วฟ้า",
            "zipcodes": [
              "13270"
            ]
          },
          {
            "name": "เต่าเล่า",
            "zipcodes": [
              "13270"
            ]
          },
          {
            "name": "ปลายกลัด",
            "zipcodes": [
              "13270"
            ]
          },
          {
            "name": "เทพมงคล",
            "zipcodes": [
              "13270"
            ]
          },
          {
            "name": "วังพัฒนา",
            "zipcodes": [
              "13270"
            ]
          }
        ]
      },
      {
        "name": "อุทัย",
        "subdistricts": [
          {
            "name": "คานหาม",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "บ้านช้าง",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "สามบัณฑิต",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "บ้านหีบ",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "หนองไม้ซุง",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "อุทัย",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "เสนา",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "หนองน้ำส้ม",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "โพสาวหาญ",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "ธนู",
            "zipcodes": [
              "13210"
            ]
          },
          {
            "name": "ข้าวเม่า",
            "zipcodes": [
              "13210"
            ]
          }
        ]
      },
      {
        "name": "มหาราช",
        "subdistricts": [
          {
            "name": "หัวไผ่",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "กะทุ่ม",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "มหาราช",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "น้ำเต้า",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "บางนา",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "โรงช้าง",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "เจ้าปลุก",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "พิตเพียน",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "บ้านขวาง",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "ท่าตอ",
            "zipcodes": [
              "13150"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "13150"
            ]
          }
        ]
      },
      {
        "name": "บ้านแพรก",
        "subdistricts": [
          {
            "name": "บ้านแพรก",
            "zipcodes": [
              "13240"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "13240"
            ]
          },
          {
            "name": "สำพะเนียง",
            "zipcodes": [
              "13240"
            ]
          },
          {
            "name": "คลองน้อย",
            "zipcodes": [
              "13240"
            ]
          },
          {
            "name": "สองห้อง",
            "zipcodes": [
              "13240"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อ่างทอง",
    "districts": [
      {
        "name": "เมืองอ่างทอง",
        "subdistricts": [
          {
            "name": "ตลาดหลวง",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "ศาลาแดง",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "ป่างิ้ว",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "บ้านแห",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "ตลาดกรวด",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "มหาดไทย",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "บ้านอิฐ",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "หัวไผ่",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "จำปาหล่อ",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "โพสะ",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "บ้านรี",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "คลองวัว",
            "zipcodes": [
              "14000"
            ]
          },
          {
            "name": "ย่านซื่อ",
            "zipcodes": [
              "14000"
            ]
          }
        ]
      },
      {
        "name": "ไชโย",
        "subdistricts": [
          {
            "name": "จรเข้ร้อง",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ไชยภูมิ",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ชัยฤทธิ์",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "เทวราช",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ราชสถิตย์",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ไชโย",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "หลักฟ้า",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ชะไว",
            "zipcodes": [
              "14140"
            ]
          },
          {
            "name": "ตรีณรงค์",
            "zipcodes": [
              "14140"
            ]
          }
        ]
      },
      {
        "name": "ป่าโมก",
        "subdistricts": [
          {
            "name": "บางปลากด",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "ป่าโมก",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "สายทอง",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "โรงช้าง",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "บางเสด็จ",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "นรสิงห์",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "เอกราช",
            "zipcodes": [
              "14130"
            ]
          },
          {
            "name": "โผงเผง",
            "zipcodes": [
              "14130"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ทอง",
        "subdistricts": [
          {
            "name": "อ่างแก้ว",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "อินทประมูล",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "บางพลับ",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "หนองแม่ไก่",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "รำมะสัก",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "บางระกำ",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "โพธิ์รังนก",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "องครักษ์",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "โคกพุทรา",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "ยางช้าย",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "บ่อแร่",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "ทางพระ",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "สามง่าม",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "บางเจ้าฉ่า",
            "zipcodes": [
              "14120"
            ]
          },
          {
            "name": "คำหยาด",
            "zipcodes": [
              "14120"
            ]
          }
        ]
      },
      {
        "name": "แสวงหา",
        "subdistricts": [
          {
            "name": "แสวงหา",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "ศรีพราน",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "บ้านพราน",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "วังน้ำเย็น",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "สีบัวทอง",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "ห้วยไผ่",
            "zipcodes": [
              "14150"
            ]
          },
          {
            "name": "จำลอง",
            "zipcodes": [
              "14150"
            ]
          }
        ]
      },
      {
        "name": "วิเศษชัยชาญ",
        "subdistricts": [
          {
            "name": "ไผ่จำศิล",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ศาลเจ้าโรงทอง",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ไผ่ดำพัฒนา",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "สาวร้องไห้",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ยี่ล้น",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "บางจัก",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ห้วยคันแหลน",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "คลองขนาก",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ไผ่วง",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "สี่ร้อย",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ม่วงเตี้ย",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "หัวตะพาน",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "หลักแก้ว",
            "zipcodes": [
              "14110"
            ]
          },
          {
            "name": "ตลาดใหม่",
            "zipcodes": [
              "14110"
            ]
          }
        ]
      },
      {
        "name": "สามโก้",
        "subdistricts": [
          {
            "name": "สามโก้",
            "zipcodes": [
              "14160"
            ]
          },
          {
            "name": "ราษฎรพัฒนา",
            "zipcodes": [
              "14160"
            ]
          },
          {
            "name": "อบทม",
            "zipcodes": [
              "14160"
            ]
          },
          {
            "name": "โพธิ์ม่วงพันธ์",
            "zipcodes": [
              "14160"
            ]
          },
          {
            "name": "มงคลธรรมนิมิต",
            "zipcodes": [
              "14160"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ลพบุรี",
    "districts": [
      {
        "name": "เมืองลพบุรี",
        "subdistricts": [
          {
            "name": "ทะเลชุบศร",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ท่าหิน",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "กกโก",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โก่งธนู",
            "zipcodes": [
              "13240"
            ]
          },
          {
            "name": "เขาพระงาม",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "เขาสามยอด",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โคกกะเทียม",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โคกลำพาน",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โคกตูม",
            "zipcodes": [
              "15210"
            ]
          },
          {
            "name": "งิ้วราย",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ดอนโพธิ์",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ตะลุง",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ท่าแค",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ท่าศาลา",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "นิคมสร้างตนเอง",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "บางขันหมาก",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "บ้านข่อย",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ท้ายตลาด",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ป่าตาล",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "พรหมมาสตร์",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โพธิ์เก้าต้น",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "โพธิ์ตรุ",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "สี่คลอง",
            "zipcodes": [
              "15000"
            ]
          },
          {
            "name": "ถนนใหญ่",
            "zipcodes": [
              "15000"
            ]
          }
        ]
      },
      {
        "name": "พัฒนานิคม",
        "subdistricts": [
          {
            "name": "พัฒนานิคม",
            "zipcodes": [
              "15140"
            ]
          },
          {
            "name": "ช่องสาริกา",
            "zipcodes": [
              "15220"
            ]
          },
          {
            "name": "มะนาวหวาน",
            "zipcodes": [
              "15140"
            ]
          },
          {
            "name": "ดีลัง",
            "zipcodes": [
              "15220"
            ]
          },
          {
            "name": "โคกสลุง",
            "zipcodes": [
              "15140"
            ]
          },
          {
            "name": "ชอนน้อย",
            "zipcodes": [
              "15140"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "15140"
            ]
          },
          {
            "name": "ห้วยขุนราม",
            "zipcodes": [
              "18220"
            ]
          },
          {
            "name": "น้ำสุด",
            "zipcodes": [
              "15140"
            ]
          }
        ]
      },
      {
        "name": "โคกสำโรง",
        "subdistricts": [
          {
            "name": "โคกสำโรง",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "เกาะแก้ว",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "ถลุงเหล็ก",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "หลุมข้าว",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "ห้วยโป่ง",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "คลองเกตุ",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "สะแกราบ",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "เพนียด",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "วังเพลิง",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "ดงมะรุม",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "วังขอนขว้าง",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "วังจั่น",
            "zipcodes": [
              "15120"
            ]
          },
          {
            "name": "หนองแขม",
            "zipcodes": [
              "15120"
            ]
          }
        ]
      },
      {
        "name": "ชัยบาดาล",
        "subdistricts": [
          {
            "name": "ลำนารายณ์",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ชัยนารายณ์",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ศิลาทิพย์",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ห้วยหิน",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ม่วงค่อม",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "บัวชุม",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ท่าดินดำ",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "มะกอกหวาน",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "ซับตะเคียน",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "นาโสม",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "หนองยายโต๊ะ",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "เกาะรัง",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ท่ามะนาว",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "นิคมลำนารายณ์",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "ชัยบาดาล",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "บ้านใหม่สามัคคี",
            "zipcodes": [
              "15130"
            ]
          },
          {
            "name": "เขาแหลม",
            "zipcodes": [
              "15130"
            ]
          }
        ]
      },
      {
        "name": "ท่าวุ้ง",
        "subdistricts": [
          {
            "name": "ท่าวุ้ง",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "บางคู้",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "โพตลาดแก้ว",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "บางลี่",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "บางงา",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "โคกสลุด",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "เขาสมอคอน",
            "zipcodes": [
              "15180"
            ]
          },
          {
            "name": "หัวสำโรง",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "ลาดสาลี่",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "บ้านเบิก",
            "zipcodes": [
              "15150"
            ]
          },
          {
            "name": "มุจลินท์",
            "zipcodes": [
              "15150"
            ]
          }
        ]
      },
      {
        "name": "บ้านหมี่",
        "subdistricts": [
          {
            "name": "ไผ่ใหญ่",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บ้านทราย",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บ้านกล้วย",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "ดงพลับ",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บ้านชี",
            "zipcodes": [
              "15180"
            ]
          },
          {
            "name": "พุคา",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "หินปัก",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บางพึ่ง",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "หนองทรายขาว",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บางกะพี้",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "หนองเต่า",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บางขาม",
            "zipcodes": [
              "15180"
            ]
          },
          {
            "name": "ดอนดึง",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "ชอนม่วง",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "หนองกระเบียน",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "สายห้วยแก้ว",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "มหาสอน",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "บ้านหมี่",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "เชียงงา",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "หนองเมือง",
            "zipcodes": [
              "15110"
            ]
          },
          {
            "name": "สนามแจง",
            "zipcodes": [
              "15110"
            ]
          }
        ]
      },
      {
        "name": "ท่าหลวง",
        "subdistricts": [
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "แก่งผักกูด",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "ซับจำปา",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "หนองผักแว่น",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "ทะเลวังวัด",
            "zipcodes": [
              "15230"
            ]
          },
          {
            "name": "หัวลำ",
            "zipcodes": [
              "15230"
            ]
          }
        ]
      },
      {
        "name": "สระโบสถ์",
        "subdistricts": [
          {
            "name": "สระโบสถ์",
            "zipcodes": [
              "15240"
            ]
          },
          {
            "name": "มหาโพธิ",
            "zipcodes": [
              "15240"
            ]
          },
          {
            "name": "ทุ่งท่าช้าง",
            "zipcodes": [
              "15240"
            ]
          },
          {
            "name": "ห้วยใหญ่",
            "zipcodes": [
              "15240"
            ]
          },
          {
            "name": "นิยมชัย",
            "zipcodes": [
              "15240"
            ]
          }
        ]
      },
      {
        "name": "โคกเจริญ",
        "subdistricts": [
          {
            "name": "โคกเจริญ",
            "zipcodes": [
              "15250"
            ]
          },
          {
            "name": "ยางราก",
            "zipcodes": [
              "15250"
            ]
          },
          {
            "name": "หนองมะค่า",
            "zipcodes": [
              "15250"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "15250"
            ]
          },
          {
            "name": "โคกแสมสาร",
            "zipcodes": [
              "15250"
            ]
          }
        ]
      },
      {
        "name": "ลำสนธิ",
        "subdistricts": [
          {
            "name": "ลำสนธิ",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "ซับสมบูรณ์",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "หนองรี",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "กุดตาเพชร",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "เขารวก",
            "zipcodes": [
              "15190"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "15130"
            ]
          }
        ]
      },
      {
        "name": "หนองม่วง",
        "subdistricts": [
          {
            "name": "หนองม่วง",
            "zipcodes": [
              "15170"
            ]
          },
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "15170"
            ]
          },
          {
            "name": "ดงดินแดง",
            "zipcodes": [
              "15170"
            ]
          },
          {
            "name": "ชอนสมบูรณ์",
            "zipcodes": [
              "15170"
            ]
          },
          {
            "name": "ยางโทน",
            "zipcodes": [
              "15170"
            ]
          },
          {
            "name": "ชอนสารเดช",
            "zipcodes": [
              "15170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สิงห์บุรี",
    "districts": [
      {
        "name": "เมืองสิงห์บุรี",
        "subdistricts": [
          {
            "name": "บางพุทรา",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "บางมัญ",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "โพกรวม",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "ม่วงหมู่",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "หัวไผ่",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "ต้นโพธิ์",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "จักรสีห์",
            "zipcodes": [
              "16000"
            ]
          },
          {
            "name": "บางกระบือ",
            "zipcodes": [
              "16000"
            ]
          }
        ]
      },
      {
        "name": "บางระจัน",
        "subdistricts": [
          {
            "name": "สิงห์",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "ไม้ดัด",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "เชิงกลัด",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "โพชนไก่",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "แม่ลา",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "บ้านจ่า",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "พักทัน",
            "zipcodes": [
              "16130"
            ]
          },
          {
            "name": "สระแจง",
            "zipcodes": [
              "16130"
            ]
          }
        ]
      },
      {
        "name": "ค่ายบางระจัน",
        "subdistricts": [
          {
            "name": "โพทะเล",
            "zipcodes": [
              "16150"
            ]
          },
          {
            "name": "บางระจัน",
            "zipcodes": [
              "16150"
            ]
          },
          {
            "name": "โพสังโฆ",
            "zipcodes": [
              "16150"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "16150"
            ]
          },
          {
            "name": "คอทราย",
            "zipcodes": [
              "16150"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "16150"
            ]
          }
        ]
      },
      {
        "name": "พรหมบุรี",
        "subdistricts": [
          {
            "name": "พระงาม",
            "zipcodes": [
              "16120"
            ]
          },
          {
            "name": "พรหมบุรี",
            "zipcodes": [
              "16160"
            ]
          },
          {
            "name": "บางน้ำเชี่ยว",
            "zipcodes": [
              "16120"
            ]
          },
          {
            "name": "บ้านหม้อ",
            "zipcodes": [
              "16120"
            ]
          },
          {
            "name": "บ้านแป้ง",
            "zipcodes": [
              "16120"
            ]
          },
          {
            "name": "หัวป่า",
            "zipcodes": [
              "16120"
            ]
          },
          {
            "name": "โรงช้าง",
            "zipcodes": [
              "16120"
            ]
          }
        ]
      },
      {
        "name": "ท่าช้าง",
        "subdistricts": [
          {
            "name": "ถอนสมอ",
            "zipcodes": [
              "16140"
            ]
          },
          {
            "name": "โพประจักษ์",
            "zipcodes": [
              "16140"
            ]
          },
          {
            "name": "วิหารขาว",
            "zipcodes": [
              "16140"
            ]
          },
          {
            "name": "พิกุลทอง",
            "zipcodes": [
              "16140"
            ]
          }
        ]
      },
      {
        "name": "อินทร์บุรี",
        "subdistricts": [
          {
            "name": "อินทร์บุรี",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ประศุก",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ทับยา",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "งิ้วราย",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ชีน้ำร้าย",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ท่างาม",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "น้ำตาล",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ทองเอน",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "ห้วยชัน",
            "zipcodes": [
              "16110"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "16110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ชัยนาท",
    "districts": [
      {
        "name": "เมืองชัยนาท",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "บ้านกล้วย",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "ท่าชัย",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "ชัยนาท",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "เขาท่าพระ",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "หาดท่าเสา",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "ธรรมามูล",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "เสือโฮก",
            "zipcodes": [
              "17000"
            ]
          },
          {
            "name": "นางลือ",
            "zipcodes": [
              "17000"
            ]
          }
        ]
      },
      {
        "name": "มโนรมย์",
        "subdistricts": [
          {
            "name": "คุ้งสำเภา",
            "zipcodes": [
              "17110"
            ]
          },
          {
            "name": "วัดโคก",
            "zipcodes": [
              "17110"
            ]
          },
          {
            "name": "ศิลาดาน",
            "zipcodes": [
              "17110"
            ]
          },
          {
            "name": "ท่าฉนวน",
            "zipcodes": [
              "17110"
            ]
          },
          {
            "name": "หางน้ำสาคร",
            "zipcodes": [
              "17170"
            ]
          },
          {
            "name": "ไร่พัฒนา",
            "zipcodes": [
              "17170"
            ]
          },
          {
            "name": "อู่ตะเภา",
            "zipcodes": [
              "17170"
            ]
          }
        ]
      },
      {
        "name": "วัดสิงห์",
        "subdistricts": [
          {
            "name": "วัดสิงห์",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "มะขามเฒ่า",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "หนองน้อย",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "หนองขุ่น",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "บ่อแร่",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "วังหมัน",
            "zipcodes": [
              "17120"
            ]
          }
        ]
      },
      {
        "name": "สรรพยา",
        "subdistricts": [
          {
            "name": "สรรพยา",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "ตลุก",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "เขาแก้ว",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "โพนางดำตก",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "โพนางดำออก",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "บางหลวง",
            "zipcodes": [
              "17150"
            ]
          },
          {
            "name": "หาดอาษา",
            "zipcodes": [
              "17150"
            ]
          }
        ]
      },
      {
        "name": "สรรคบุรี",
        "subdistricts": [
          {
            "name": "แพรกศรีราชา",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "เที่ยงแท้",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "ห้วยกรด",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "โพงาม",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "บางขุด",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "ดงคอน",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "ดอนกำ",
            "zipcodes": [
              "17140"
            ]
          },
          {
            "name": "ห้วยกรดพัฒนา",
            "zipcodes": [
              "17140"
            ]
          }
        ]
      },
      {
        "name": "หันคา",
        "subdistricts": [
          {
            "name": "หันคา",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "บ้านเชี่ยน",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "ไพรนกยูง",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "หนองแซง",
            "zipcodes": [
              "17160"
            ]
          },
          {
            "name": "ห้วยงู",
            "zipcodes": [
              "17160"
            ]
          },
          {
            "name": "วังไก่เถื่อน",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "เด่นใหญ่",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "สามง่ามท่าโบสถ์",
            "zipcodes": [
              "17160"
            ]
          }
        ]
      },
      {
        "name": "หนองมะโมง",
        "subdistricts": [
          {
            "name": "หนองมะโมง",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "วังตะเคียน",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "สะพานหิน",
            "zipcodes": [
              "17120"
            ]
          },
          {
            "name": "กุดจอก",
            "zipcodes": [
              "17120"
            ]
          }
        ]
      },
      {
        "name": "เนินขาม",
        "subdistricts": [
          {
            "name": "เนินขาม",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "กะบกเตี้ย",
            "zipcodes": [
              "17130"
            ]
          },
          {
            "name": "สุขเดือนห้า",
            "zipcodes": [
              "17130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สระบุรี",
    "districts": [
      {
        "name": "เมืองสระบุรี",
        "subdistricts": [
          {
            "name": "ปากเพรียว",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "ดาวเรือง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "นาโฉง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "หนองโน",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "หนองยาว",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "ปากข้าวสาร",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "หนองปลาไหล",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "กุดนกเปล้า",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "ตะกุด",
            "zipcodes": [
              "18000"
            ]
          }
        ]
      },
      {
        "name": "แก่งคอย",
        "subdistricts": [
          {
            "name": "แก่งคอย",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ทับกวาง",
            "zipcodes": [
              "18260"
            ]
          },
          {
            "name": "ตาลเดี่ยว",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ห้วยแห้ง",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ท่าคล้อ",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "หินซ้อน",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "บ้านธาตุ",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "บ้านป่า",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ท่าตูม",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ชะอม",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "สองคอน",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "เตาปูน",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ชำผักแพว",
            "zipcodes": [
              "18110"
            ]
          },
          {
            "name": "ท่ามะปราง",
            "zipcodes": [
              "18110"
            ]
          }
        ]
      },
      {
        "name": "หนองแค",
        "subdistricts": [
          {
            "name": "หนองแค",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "กุ่มหัก",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "คชสิทธิ์",
            "zipcodes": [
              "18250"
            ]
          },
          {
            "name": "โคกตูม",
            "zipcodes": [
              "18250"
            ]
          },
          {
            "name": "โคกแย้",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "บัวลอย",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "ไผ่ต่ำ",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "18250"
            ]
          },
          {
            "name": "ห้วยขมิ้น",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "ห้วยทราย",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "หนองไข่น้ำ",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "หนองแขม",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "หนองจิก",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "หนองจรเข้",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "หนองนาก",
            "zipcodes": [
              "18230"
            ]
          },
          {
            "name": "หนองปลาหมอ",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "18140"
            ]
          },
          {
            "name": "หนองโรง",
            "zipcodes": [
              "18140"
            ]
          }
        ]
      },
      {
        "name": "วิหารแดง",
        "subdistricts": [
          {
            "name": "หนองหมู",
            "zipcodes": [
              "18150"
            ]
          },
          {
            "name": "บ้านลำ",
            "zipcodes": [
              "18150"
            ]
          },
          {
            "name": "คลองเรือ",
            "zipcodes": [
              "18150"
            ]
          },
          {
            "name": "วิหารแดง",
            "zipcodes": [
              "18150"
            ]
          },
          {
            "name": "หนองสรวง",
            "zipcodes": [
              "18150"
            ]
          },
          {
            "name": "เจริญธรรม",
            "zipcodes": [
              "18150"
            ]
          }
        ]
      },
      {
        "name": "หนองแซง",
        "subdistricts": [
          {
            "name": "หนองแซง",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "หนองควายโซ",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "หนองหัวโพ",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "หนองสีดา",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "หนองกบ",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "ไก่เส่า",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "ม่วงหวาน",
            "zipcodes": [
              "18170"
            ]
          },
          {
            "name": "เขาดิน",
            "zipcodes": [
              "18170"
            ]
          }
        ]
      },
      {
        "name": "บ้านหมอ",
        "subdistricts": [
          {
            "name": "บ้านหมอ",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "บางโขมด",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "สร่างโศก",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "ตลาดน้อย",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "หรเทพ",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "โคกใหญ่",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "ไผ่ขวาง",
            "zipcodes": [
              "18130"
            ]
          },
          {
            "name": "บ้านครัว",
            "zipcodes": [
              "18270"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "18130"
            ]
          }
        ]
      },
      {
        "name": "ดอนพุด",
        "subdistricts": [
          {
            "name": "ดอนพุด",
            "zipcodes": [
              "18210"
            ]
          },
          {
            "name": "ไผ่หลิ่ว",
            "zipcodes": [
              "18210"
            ]
          },
          {
            "name": "บ้านหลวง",
            "zipcodes": [
              "18210"
            ]
          },
          {
            "name": "ดงตะงาว",
            "zipcodes": [
              "18210"
            ]
          }
        ]
      },
      {
        "name": "หนองโดน",
        "subdistricts": [
          {
            "name": "หนองโดน",
            "zipcodes": [
              "18190"
            ]
          },
          {
            "name": "บ้านกลับ",
            "zipcodes": [
              "18190"
            ]
          },
          {
            "name": "ดอนทอง",
            "zipcodes": [
              "18190"
            ]
          },
          {
            "name": "บ้านโปร่ง",
            "zipcodes": [
              "18190"
            ]
          }
        ]
      },
      {
        "name": "พระพุทธบาท",
        "subdistricts": [
          {
            "name": "พระพุทธบาท",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "ขุนโขลน",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "ธารเกษม",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "นายาว",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "พุคำจาน",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "เขาวง",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "ห้วยป่าหวาย",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "พุกร่าง",
            "zipcodes": [
              "18120"
            ]
          },
          {
            "name": "หนองแก",
            "zipcodes": [
              "18120"
            ]
          }
        ]
      },
      {
        "name": "เสาไห้",
        "subdistricts": [
          {
            "name": "เสาไห้",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "หัวปลวก",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "งิ้วงาม",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "ศาลารีไทย",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "ต้นตาล",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "พระยาทด",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "ม่วงงาม",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "เริงราง",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "18160"
            ]
          },
          {
            "name": "สวนดอกไม้",
            "zipcodes": [
              "18160"
            ]
          }
        ]
      },
      {
        "name": "มวกเหล็ก",
        "subdistricts": [
          {
            "name": "มวกเหล็ก",
            "zipcodes": [
              "18180"
            ]
          },
          {
            "name": "มิตรภาพ",
            "zipcodes": [
              "18180"
            ]
          },
          {
            "name": "หนองย่างเสือ",
            "zipcodes": [
              "18180"
            ]
          },
          {
            "name": "ลำสมพุง",
            "zipcodes": [
              "18180"
            ]
          },
          {
            "name": "ลำพญากลาง",
            "zipcodes": [
              "18180"
            ]
          },
          {
            "name": "ซับสนุ่น",
            "zipcodes": [
              "18220"
            ]
          }
        ]
      },
      {
        "name": "วังม่วง",
        "subdistricts": [
          {
            "name": "แสลงพัน",
            "zipcodes": [
              "18220"
            ]
          },
          {
            "name": "คำพราน",
            "zipcodes": [
              "18220"
            ]
          },
          {
            "name": "วังม่วง",
            "zipcodes": [
              "18220"
            ]
          }
        ]
      },
      {
        "name": "เฉลิมพระเกียรติ",
        "subdistricts": [
          {
            "name": "เขาดินพัฒนา",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "ผึ้งรวง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "พุแค",
            "zipcodes": [
              "18240"
            ]
          },
          {
            "name": "ห้วยบง",
            "zipcodes": [
              "18000"
            ]
          },
          {
            "name": "หน้าพระลาน",
            "zipcodes": [
              "18240"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ชลบุรี",
    "districts": [
      {
        "name": "เมืองชลบุรี",
        "subdistricts": [
          {
            "name": "บางปลาสร้อย",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "มะขามหย่ง",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "บ้านโขด",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "แสนสุข",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "บ้านสวน",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "หนองรี",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "นาป่า",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "หนองข้างคอก",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "ดอนหัวฬ่อ",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "หนองไม้แดง",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "บางทราย",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "คลองตำหรุ",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "เหมือง",
            "zipcodes": [
              "20130"
            ]
          },
          {
            "name": "บ้านปึก",
            "zipcodes": [
              "20130"
            ]
          },
          {
            "name": "ห้วยกะปิ",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "เสม็ด",
            "zipcodes": [
              "20130"
            ]
          },
          {
            "name": "อ่างศิลา",
            "zipcodes": [
              "20000"
            ]
          },
          {
            "name": "สำนักบก",
            "zipcodes": [
              "20000"
            ]
          }
        ]
      },
      {
        "name": "บ้านบึง",
        "subdistricts": [
          {
            "name": "บ้านบึง",
            "zipcodes": [
              "20170"
            ]
          },
          {
            "name": "คลองกิ่ว",
            "zipcodes": [
              "20220"
            ]
          },
          {
            "name": "มาบไผ่",
            "zipcodes": [
              "20170"
            ]
          },
          {
            "name": "หนองซ้ำซาก",
            "zipcodes": [
              "20170"
            ]
          },
          {
            "name": "หนองบอนแดง",
            "zipcodes": [
              "20170"
            ]
          },
          {
            "name": "หนองชาก",
            "zipcodes": [
              "20170"
            ]
          },
          {
            "name": "หนองอิรุณ",
            "zipcodes": [
              "20220"
            ]
          },
          {
            "name": "หนองไผ่แก้ว",
            "zipcodes": [
              "20220"
            ]
          }
        ]
      },
      {
        "name": "หนองใหญ่",
        "subdistricts": [
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "20190"
            ]
          },
          {
            "name": "คลองพลู",
            "zipcodes": [
              "20190"
            ]
          },
          {
            "name": "หนองเสือช้าง",
            "zipcodes": [
              "20190"
            ]
          },
          {
            "name": "ห้างสูง",
            "zipcodes": [
              "20190"
            ]
          },
          {
            "name": "เขาซก",
            "zipcodes": [
              "20190"
            ]
          }
        ]
      },
      {
        "name": "บางละมุง",
        "subdistricts": [
          {
            "name": "บางละมุง",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "หนองปรือ",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "หนองปลาไหล",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "โป่ง",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "เขาไม้แก้ว",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "ห้วยใหญ่",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "ตะเคียนเตี้ย",
            "zipcodes": [
              "20150"
            ]
          },
          {
            "name": "นาเกลือ",
            "zipcodes": [
              "20150"
            ]
          }
        ]
      },
      {
        "name": "พานทอง",
        "subdistricts": [
          {
            "name": "พานทอง",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "หนองตำลึง",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "มาบโป่ง",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "หนองกะขะ",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "หนองหงษ์",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "โคกขี้หนอน",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "บ้านเก่า",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "หน้าประดู่",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "บางนาง",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "เกาะลอย",
            "zipcodes": [
              "20160"
            ]
          },
          {
            "name": "บางหัก",
            "zipcodes": [
              "20160"
            ]
          }
        ]
      },
      {
        "name": "พนัสนิคม",
        "subdistricts": [
          {
            "name": "พนัสนิคม",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หน้าพระธาตุ",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "วัดหลวง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "บ้านเซิด",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "นาเริก",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หมอนนาง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "สระสี่เหลี่ยม",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "วัดโบสถ์",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "กุฎโง้ง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หัวถนน",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หนองปรือ",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หนองขยาด",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "ทุ่งขวาง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "หนองเหียง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "นาวังหิน",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "บ้านช้าง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "โคกเพลาะ",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "ไร่หลักทอง",
            "zipcodes": [
              "20140"
            ]
          },
          {
            "name": "นามะตูม",
            "zipcodes": [
              "20140"
            ]
          }
        ]
      },
      {
        "name": "ศรีราชา",
        "subdistricts": [
          {
            "name": "ศรีราชา",
            "zipcodes": [
              "20110"
            ]
          },
          {
            "name": "สุรศักดิ์",
            "zipcodes": [
              "20110"
            ]
          },
          {
            "name": "ทุ่งสุขลา",
            "zipcodes": [
              "20230"
            ]
          },
          {
            "name": "บึง",
            "zipcodes": [
              "20230"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "20110"
            ]
          },
          {
            "name": "เขาคันทรง",
            "zipcodes": [
              "20110"
            ]
          },
          {
            "name": "บางพระ",
            "zipcodes": [
              "20110"
            ]
          },
          {
            "name": "บ่อวิน",
            "zipcodes": [
              "20230"
            ]
          }
        ]
      },
      {
        "name": "เกาะสีชัง",
        "subdistricts": [
          {
            "name": "ท่าเทววงษ์",
            "zipcodes": [
              "20120"
            ]
          }
        ]
      },
      {
        "name": "สัตหีบ",
        "subdistricts": [
          {
            "name": "สัตหีบ",
            "zipcodes": [
              "20180"
            ]
          },
          {
            "name": "นาจอมเทียน",
            "zipcodes": [
              "20250"
            ]
          },
          {
            "name": "พลูตาหลวง",
            "zipcodes": [
              "20180"
            ]
          },
          {
            "name": "บางเสร่",
            "zipcodes": [
              "20250"
            ]
          },
          {
            "name": "แสมสาร",
            "zipcodes": [
              "20180"
            ]
          }
        ]
      },
      {
        "name": "บ่อทอง",
        "subdistricts": [
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "20270"
            ]
          },
          {
            "name": "วัดสุวรรณ",
            "zipcodes": [
              "20270"
            ]
          },
          {
            "name": "บ่อกวางทอง",
            "zipcodes": [
              "20270"
            ]
          },
          {
            "name": "ธาตุทอง",
            "zipcodes": [
              "20270"
            ]
          },
          {
            "name": "เกษตรสุวรรณ",
            "zipcodes": [
              "20270"
            ]
          },
          {
            "name": "พลวงทอง",
            "zipcodes": [
              "20270"
            ]
          }
        ]
      },
      {
        "name": "เกาะจันทร์",
        "subdistricts": [
          {
            "name": "เกาะจันทร์",
            "zipcodes": [
              "20240"
            ]
          },
          {
            "name": "ท่าบุญมี",
            "zipcodes": [
              "20240"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ระยอง",
    "districts": [
      {
        "name": "เมืองระยอง",
        "subdistricts": [
          {
            "name": "ท่าประดู่",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "เชิงเนิน",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "ตะพง",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "เพ",
            "zipcodes": [
              "21160"
            ]
          },
          {
            "name": "แกลง",
            "zipcodes": [
              "21160"
            ]
          },
          {
            "name": "บ้านแลง",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "นาตาขวัญ",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "เนินพระ",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "กะเฉด",
            "zipcodes": [
              "21100"
            ]
          },
          {
            "name": "ทับมา",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "น้ำคอก",
            "zipcodes": [
              "21000"
            ]
          },
          {
            "name": "ห้วยโป่ง",
            "zipcodes": [
              "21150"
            ]
          },
          {
            "name": "มาบตาพุด",
            "zipcodes": [
              "21150"
            ]
          },
          {
            "name": "สำนักทอง",
            "zipcodes": [
              "21100"
            ]
          }
        ]
      },
      {
        "name": "บ้านฉาง",
        "subdistricts": [
          {
            "name": "สำนักท้อน",
            "zipcodes": [
              "21130"
            ]
          },
          {
            "name": "พลา",
            "zipcodes": [
              "21130"
            ]
          },
          {
            "name": "บ้านฉาง",
            "zipcodes": [
              "21130"
            ]
          }
        ]
      },
      {
        "name": "แกลง",
        "subdistricts": [
          {
            "name": "ทางเกวียน",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "วังหว้า",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "ชากโดน",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "เนินฆ้อ",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "กร่ำ",
            "zipcodes": [
              "21190"
            ]
          },
          {
            "name": "ชากพง",
            "zipcodes": [
              "21190"
            ]
          },
          {
            "name": "กระแสบน",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "ทุ่งควายกิน",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "กองดิน",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "คลองปูน",
            "zipcodes": [
              "21170"
            ]
          },
          {
            "name": "พังราด",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "ปากน้ำกระแส",
            "zipcodes": [
              "21170"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "สองสลึง",
            "zipcodes": [
              "21110"
            ]
          }
        ]
      },
      {
        "name": "วังจันทร์",
        "subdistricts": [
          {
            "name": "วังจันทร์",
            "zipcodes": [
              "21210"
            ]
          },
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "21210"
            ]
          },
          {
            "name": "ป่ายุบใน",
            "zipcodes": [
              "21210"
            ]
          },
          {
            "name": "พลงตาเอี่ยม",
            "zipcodes": [
              "21210"
            ]
          }
        ]
      },
      {
        "name": "บ้านค่าย",
        "subdistricts": [
          {
            "name": "บ้านค่าย",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "หนองละลอก",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "หนองตะพาน",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "ตาขัน",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "บางบุตร",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "21120"
            ]
          },
          {
            "name": "ชากบก",
            "zipcodes": [
              "21120"
            ]
          }
        ]
      },
      {
        "name": "ปลวกแดง",
        "subdistricts": [
          {
            "name": "ปลวกแดง",
            "zipcodes": [
              "21140"
            ]
          },
          {
            "name": "ตาสิทธิ์",
            "zipcodes": [
              "21140"
            ]
          },
          {
            "name": "ละหาร",
            "zipcodes": [
              "21140"
            ]
          },
          {
            "name": "แม่น้ำคู้",
            "zipcodes": [
              "21140"
            ]
          },
          {
            "name": "มาบยางพร",
            "zipcodes": [
              "21140"
            ]
          },
          {
            "name": "หนองไร่",
            "zipcodes": [
              "21140"
            ]
          }
        ]
      },
      {
        "name": "เขาชะเมา",
        "subdistricts": [
          {
            "name": "น้ำเป็น",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "ห้วยทับมอญ",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "ชำฆ้อ",
            "zipcodes": [
              "21110"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "21110"
            ]
          }
        ]
      },
      {
        "name": "นิคมพัฒนา",
        "subdistricts": [
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "21180"
            ]
          },
          {
            "name": "มาบข่า",
            "zipcodes": [
              "21180"
            ]
          },
          {
            "name": "พนานิคม",
            "zipcodes": [
              "21180"
            ]
          },
          {
            "name": "มะขามคู่",
            "zipcodes": [
              "21180"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "จันทบุรี",
    "districts": [
      {
        "name": "เมืองจันทบุรี",
        "subdistricts": [
          {
            "name": "ตลาด",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "วัดใหม่",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "คลองนารายณ์",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "เกาะขวาง",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "คมบาง",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "จันทนิมิต",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "บางกะจะ",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "แสลง",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "22000"
            ]
          },
          {
            "name": "พลับพลา",
            "zipcodes": [
              "22000"
            ]
          }
        ]
      },
      {
        "name": "ขลุง",
        "subdistricts": [
          {
            "name": "ขลุง",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "บ่อ",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "เกวียนหัก",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "ตะปอน",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "บางชัน",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "วันยาว",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "ซึ้ง",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "มาบไพ",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "วังสรรพรส",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "ตรอกนอง",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "ตกพรม",
            "zipcodes": [
              "22110"
            ]
          },
          {
            "name": "บ่อเวฬุ",
            "zipcodes": [
              "22150"
            ]
          }
        ]
      },
      {
        "name": "ท่าใหม่",
        "subdistricts": [
          {
            "name": "ท่าใหม่",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "ยายร้า",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "สีพยา",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "บ่อพุ",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "พลอยแหวน",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "เขาวัว",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "เขาบายศรี",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "สองพี่น้อง",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "ทุ่งเบญจา",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "รำพัน",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "โขมง",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "ตะกาดเง้า",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "คลองขุด",
            "zipcodes": [
              "22120"
            ]
          },
          {
            "name": "เขาแก้ว",
            "zipcodes": [
              "22170"
            ]
          }
        ]
      },
      {
        "name": "โป่งน้ำร้อน",
        "subdistricts": [
          {
            "name": "ทับไทร",
            "zipcodes": [
              "22140"
            ]
          },
          {
            "name": "โป่งน้ำร้อน",
            "zipcodes": [
              "22140"
            ]
          },
          {
            "name": "หนองตาคง",
            "zipcodes": [
              "22140"
            ]
          },
          {
            "name": "เทพนิมิต",
            "zipcodes": [
              "22140"
            ]
          },
          {
            "name": "คลองใหญ่",
            "zipcodes": [
              "22140"
            ]
          }
        ]
      },
      {
        "name": "มะขาม",
        "subdistricts": [
          {
            "name": "มะขาม",
            "zipcodes": [
              "22150"
            ]
          },
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "22150"
            ]
          },
          {
            "name": "ปัถวี",
            "zipcodes": [
              "22150"
            ]
          },
          {
            "name": "วังแซ้ม",
            "zipcodes": [
              "22150"
            ]
          },
          {
            "name": "ฉมัน",
            "zipcodes": [
              "22150"
            ]
          },
          {
            "name": "อ่างคีรี",
            "zipcodes": [
              "22150"
            ]
          }
        ]
      },
      {
        "name": "แหลมสิงห์",
        "subdistricts": [
          {
            "name": "ปากน้ำแหลมสิงห์",
            "zipcodes": [
              "22130"
            ]
          },
          {
            "name": "เกาะเปริด",
            "zipcodes": [
              "22130"
            ]
          },
          {
            "name": "หนองชิ่ม",
            "zipcodes": [
              "22130"
            ]
          },
          {
            "name": "พลิ้ว",
            "zipcodes": [
              "22190"
            ]
          },
          {
            "name": "คลองน้ำเค็ม",
            "zipcodes": [
              "22190"
            ]
          },
          {
            "name": "บางสระเก้า",
            "zipcodes": [
              "22190"
            ]
          },
          {
            "name": "บางกะไชย",
            "zipcodes": [
              "22120"
            ]
          }
        ]
      },
      {
        "name": "สอยดาว",
        "subdistricts": [
          {
            "name": "ปะตง",
            "zipcodes": [
              "22180"
            ]
          },
          {
            "name": "ทุ่งขนาน",
            "zipcodes": [
              "22180"
            ]
          },
          {
            "name": "ทับช้าง",
            "zipcodes": [
              "22180"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "22180"
            ]
          },
          {
            "name": "สะตอน",
            "zipcodes": [
              "22180"
            ]
          }
        ]
      },
      {
        "name": "แก่งหางแมว",
        "subdistricts": [
          {
            "name": "แก่งหางแมว",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "ขุนซ่อง",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "สามพี่น้อง",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "พวา",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "เขาวงกต",
            "zipcodes": [
              "22160"
            ]
          }
        ]
      },
      {
        "name": "นายายอาม",
        "subdistricts": [
          {
            "name": "นายายอาม",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "วังโตนด",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "กระแจะ",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "สนามไชย",
            "zipcodes": [
              "22170"
            ]
          },
          {
            "name": "ช้างข้าม",
            "zipcodes": [
              "22160"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "22170"
            ]
          }
        ]
      },
      {
        "name": "เขาคิชฌกูฏ",
        "subdistricts": [
          {
            "name": "ชากไทย",
            "zipcodes": [
              "22210"
            ]
          },
          {
            "name": "พลวง",
            "zipcodes": [
              "22210"
            ]
          },
          {
            "name": "ตะเคียนทอง",
            "zipcodes": [
              "22210"
            ]
          },
          {
            "name": "คลองพลู",
            "zipcodes": [
              "22210"
            ]
          },
          {
            "name": "จันทเขลม",
            "zipcodes": [
              "22210"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ตราด",
    "districts": [
      {
        "name": "เมืองตราด",
        "subdistricts": [
          {
            "name": "บางพระ",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "หนองเสม็ด",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "หนองโสน",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "หนองคันทรง",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ห้วงน้ำขาว",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "อ่าวใหญ่",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "วังกระแจะ",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ห้วยแร้ง",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "เนินทราย",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ท่าพริก",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ท่ากุ่ม",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ตะกาง",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "ชำราก",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "แหลมกลัด",
            "zipcodes": [
              "23000"
            ]
          }
        ]
      },
      {
        "name": "คลองใหญ่",
        "subdistricts": [
          {
            "name": "คลองใหญ่",
            "zipcodes": [
              "23110"
            ]
          },
          {
            "name": "ไม้รูด",
            "zipcodes": [
              "23110"
            ]
          },
          {
            "name": "หาดเล็ก",
            "zipcodes": [
              "23110"
            ]
          }
        ]
      },
      {
        "name": "เขาสมิง",
        "subdistricts": [
          {
            "name": "เขาสมิง",
            "zipcodes": [
              "23130"
            ]
          },
          {
            "name": "แสนตุ้ง",
            "zipcodes": [
              "23150"
            ]
          },
          {
            "name": "วังตะเคียน",
            "zipcodes": [
              "23130"
            ]
          },
          {
            "name": "ท่าโสม",
            "zipcodes": [
              "23150"
            ]
          },
          {
            "name": "สะตอ",
            "zipcodes": [
              "23150"
            ]
          },
          {
            "name": "ประณีต",
            "zipcodes": [
              "23150"
            ]
          },
          {
            "name": "เทพนิมิต",
            "zipcodes": [
              "23150"
            ]
          },
          {
            "name": "ทุ่งนนทรี",
            "zipcodes": [
              "23130"
            ]
          }
        ]
      },
      {
        "name": "บ่อไร่",
        "subdistricts": [
          {
            "name": "บ่อพลอย",
            "zipcodes": [
              "23140"
            ]
          },
          {
            "name": "ช้างทูน",
            "zipcodes": [
              "23140"
            ]
          },
          {
            "name": "ด่านชุมพล",
            "zipcodes": [
              "23140"
            ]
          },
          {
            "name": "หนองบอน",
            "zipcodes": [
              "23140"
            ]
          },
          {
            "name": "นนทรีย์",
            "zipcodes": [
              "23140"
            ]
          }
        ]
      },
      {
        "name": "แหลมงอบ",
        "subdistricts": [
          {
            "name": "แหลมงอบ",
            "zipcodes": [
              "23120"
            ]
          },
          {
            "name": "น้ำเชี่ยว",
            "zipcodes": [
              "23120"
            ]
          },
          {
            "name": "บางปิด",
            "zipcodes": [
              "23120"
            ]
          },
          {
            "name": "คลองใหญ่",
            "zipcodes": [
              "23120"
            ]
          }
        ]
      },
      {
        "name": "เกาะกูด",
        "subdistricts": [
          {
            "name": "เกาะหมาก",
            "zipcodes": [
              "23000"
            ]
          },
          {
            "name": "เกาะกูด",
            "zipcodes": [
              "23000"
            ]
          }
        ]
      },
      {
        "name": "เกาะช้าง",
        "subdistricts": [
          {
            "name": "เกาะช้าง",
            "zipcodes": [
              "23170"
            ]
          },
          {
            "name": "เกาะช้างใต้",
            "zipcodes": [
              "23170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ฉะเชิงเทรา",
    "districts": [
      {
        "name": "เมืองฉะเชิงเทรา",
        "subdistricts": [
          {
            "name": "หน้าเมือง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "ท่าไข่",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองนา",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางตีนเป็ด",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางไผ่",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองจุกกระเฌอ",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางขวัญ",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองนครเนื่องเขต",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "วังตะเคียน",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "โสธร",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางพระ",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางกะไห",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "หนามแดง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองเปรง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองอุดมชลจร",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองหลวงแพ่ง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางเตย",
            "zipcodes": [
              "24000"
            ]
          }
        ]
      },
      {
        "name": "บางคล้า",
        "subdistricts": [
          {
            "name": "บางคล้า",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "บางสวน",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "บางกระเจ็ด",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "ท่าทองหลาง",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "สาวชะโงก",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "เสม็ดเหนือ",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "เสม็ดใต้",
            "zipcodes": [
              "24110"
            ]
          },
          {
            "name": "หัวไทร",
            "zipcodes": [
              "24110"
            ]
          }
        ]
      },
      {
        "name": "บางน้ำเปรี้ยว",
        "subdistricts": [
          {
            "name": "บางน้ำเปรี้ยว",
            "zipcodes": [
              "24150"
            ]
          },
          {
            "name": "บางขนาก",
            "zipcodes": [
              "24150"
            ]
          },
          {
            "name": "สิงโตทอง",
            "zipcodes": [
              "24150"
            ]
          },
          {
            "name": "หมอนทอง",
            "zipcodes": [
              "24150"
            ]
          },
          {
            "name": "บึงน้ำรักษ์",
            "zipcodes": [
              "24170"
            ]
          },
          {
            "name": "ดอนเกาะกา",
            "zipcodes": [
              "24170"
            ]
          },
          {
            "name": "โยธะกา",
            "zipcodes": [
              "24150"
            ]
          },
          {
            "name": "ดอนฉิมพลี",
            "zipcodes": [
              "24170"
            ]
          },
          {
            "name": "ศาลาแดง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "โพรงอากาศ",
            "zipcodes": [
              "24150"
            ]
          }
        ]
      },
      {
        "name": "บางปะกง",
        "subdistricts": [
          {
            "name": "บางปะกง",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "ท่าสะอ้าน",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "บางวัว",
            "zipcodes": [
              "24180"
            ]
          },
          {
            "name": "บางสมัคร",
            "zipcodes": [
              "24180"
            ]
          },
          {
            "name": "บางผึ้ง",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "บางเกลือ",
            "zipcodes": [
              "24180"
            ]
          },
          {
            "name": "สองคลอง",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "หนองจอก",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "พิมพา",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "24130"
            ]
          },
          {
            "name": "หอมศีล",
            "zipcodes": [
              "24180"
            ]
          },
          {
            "name": "เขาดิน",
            "zipcodes": [
              "24130"
            ]
          }
        ]
      },
      {
        "name": "บ้านโพธิ์",
        "subdistricts": [
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "เกาะไร่",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "คลองขุด",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "คลองบ้านโพธิ์",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "คลองประเวศ",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "เทพราช",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "ท่าพลับ",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "หนองตีนนก",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "บางซ่อน",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "บางกรูด",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "แหลมประดู่",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "ลาดขวาง",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "สนามจันทร์",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "แสนภูดาษ",
            "zipcodes": [
              "24140"
            ]
          },
          {
            "name": "สิบเอ็ดศอก",
            "zipcodes": [
              "24140"
            ]
          }
        ]
      },
      {
        "name": "พนมสารคาม",
        "subdistricts": [
          {
            "name": "เกาะขนุน",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "บ้านซ่อง",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "พนมสารคาม",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "หนองยาว",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "ท่าถ่าน",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "หนองแหน",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "เขาหินซ้อน",
            "zipcodes": [
              "24120"
            ]
          }
        ]
      },
      {
        "name": "ราชสาส์น",
        "subdistricts": [
          {
            "name": "บางคา",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "เมืองใหม่",
            "zipcodes": [
              "24120"
            ]
          },
          {
            "name": "ดงน้อย",
            "zipcodes": [
              "24120"
            ]
          }
        ]
      },
      {
        "name": "สนามชัยเขต",
        "subdistricts": [
          {
            "name": "คู้ยายหมี",
            "zipcodes": [
              "24160"
            ]
          },
          {
            "name": "ท่ากระดาน",
            "zipcodes": [
              "24160"
            ]
          },
          {
            "name": "ทุ่งพระยา",
            "zipcodes": [
              "24160"
            ]
          },
          {
            "name": "ลาดกระทิง",
            "zipcodes": [
              "24160"
            ]
          }
        ]
      },
      {
        "name": "แปลงยาว",
        "subdistricts": [
          {
            "name": "แปลงยาว",
            "zipcodes": [
              "24190"
            ]
          },
          {
            "name": "วังเย็น",
            "zipcodes": [
              "24190"
            ]
          },
          {
            "name": "หัวสำโรง",
            "zipcodes": [
              "24190"
            ]
          },
          {
            "name": "หนองไม้แก่น",
            "zipcodes": [
              "24190"
            ]
          }
        ]
      },
      {
        "name": "ท่าตะเกียบ",
        "subdistricts": [
          {
            "name": "ท่าตะเกียบ",
            "zipcodes": [
              "24160"
            ]
          },
          {
            "name": "คลองตะเกรา",
            "zipcodes": [
              "24160"
            ]
          }
        ]
      },
      {
        "name": "คลองเขื่อน",
        "subdistricts": [
          {
            "name": "ก้อนแก้ว",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "คลองเขื่อน",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางเล่า",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางโรง",
            "zipcodes": [
              "24000"
            ]
          },
          {
            "name": "บางตลาด",
            "zipcodes": [
              "24110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ปราจีนบุรี",
    "districts": [
      {
        "name": "เมืองปราจีนบุรี",
        "subdistricts": [
          {
            "name": "หน้าเมือง",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "รอบเมือง",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "วัดโบสถ์",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "บางเดชะ",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "ท่างาม",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "บางบริบูรณ์",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "ดงพระราม",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "บ้านพระ",
            "zipcodes": [
              "25230"
            ]
          },
          {
            "name": "โคกไม้ลาย",
            "zipcodes": [
              "25230"
            ]
          },
          {
            "name": "ไม้เค็ด",
            "zipcodes": [
              "25230"
            ]
          },
          {
            "name": "ดงขี้เหล็ก",
            "zipcodes": [
              "25000"
            ]
          },
          {
            "name": "เนินหอม",
            "zipcodes": [
              "25230"
            ]
          },
          {
            "name": "โนนห้อม",
            "zipcodes": [
              "25000"
            ]
          }
        ]
      },
      {
        "name": "กบินทร์บุรี",
        "subdistricts": [
          {
            "name": "กบินทร์",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "25240"
            ]
          },
          {
            "name": "วังดาล",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "นนทรี",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "ย่านรี",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "วังตะเคียน",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "หาดนางแก้ว",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "ลาดตะเคียน",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "หนองกี่",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "นาแขม",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "เขาไม้แก้ว",
            "zipcodes": [
              "25110"
            ]
          },
          {
            "name": "วังท่าช้าง",
            "zipcodes": [
              "25110"
            ]
          }
        ]
      },
      {
        "name": "นาดี",
        "subdistricts": [
          {
            "name": "นาดี",
            "zipcodes": [
              "25220"
            ]
          },
          {
            "name": "สำพันตา",
            "zipcodes": [
              "25220"
            ]
          },
          {
            "name": "สะพานหิน",
            "zipcodes": [
              "25220"
            ]
          },
          {
            "name": "ทุ่งโพธิ์",
            "zipcodes": [
              "25220"
            ]
          },
          {
            "name": "แก่งดินสอ",
            "zipcodes": [
              "25220"
            ]
          },
          {
            "name": "บุพราหมณ์",
            "zipcodes": [
              "25220"
            ]
          }
        ]
      },
      {
        "name": "บ้านสร้าง",
        "subdistricts": [
          {
            "name": "บ้านสร้าง",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางกระเบา",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางเตย",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางยาง",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางแตน",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางพลวง",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางปลาร้า",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "บางขาม",
            "zipcodes": [
              "25150"
            ]
          },
          {
            "name": "กระทุ่มแพ้ว",
            "zipcodes": [
              "25150"
            ]
          }
        ]
      },
      {
        "name": "ประจันตคาม",
        "subdistricts": [
          {
            "name": "ประจันตคาม",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "เกาะลอย",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "บ้านหอย",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "หนองแสง",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "ดงบัง",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "คำโตนด",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "บุฝ้าย",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "หนองแก้ว",
            "zipcodes": [
              "25130"
            ]
          },
          {
            "name": "โพธิ์งาม",
            "zipcodes": [
              "25130"
            ]
          }
        ]
      },
      {
        "name": "ศรีมหาโพธิ",
        "subdistricts": [
          {
            "name": "ศรีมหาโพธิ",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "สัมพันธ์",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "บ้านทาม",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "ท่าตูม",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "บางกุ้ง",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "ดงกระทงยาม",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "หนองโพรง",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "หัวหว้า",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "หาดยาง",
            "zipcodes": [
              "25140"
            ]
          },
          {
            "name": "กรอกสมบูรณ์",
            "zipcodes": [
              "25140"
            ]
          }
        ]
      },
      {
        "name": "ศรีมโหสถ",
        "subdistricts": [
          {
            "name": "โคกปีบ",
            "zipcodes": [
              "25190"
            ]
          },
          {
            "name": "โคกไทย",
            "zipcodes": [
              "25190"
            ]
          },
          {
            "name": "คู้ลำพัน",
            "zipcodes": [
              "25190"
            ]
          },
          {
            "name": "ไผ่ชะเลือด",
            "zipcodes": [
              "25190"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครนายก",
    "districts": [
      {
        "name": "เมืองนครนายก",
        "subdistricts": [
          {
            "name": "นครนายก",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "บ้านใหญ่",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "วังกระโจม",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ท่าทราย",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ดอนยอ",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ศรีจุฬา",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ดงละคร",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "ศรีนาวา",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "สาริกา",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "หินตั้ง",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "เขาพระ",
            "zipcodes": [
              "26000"
            ]
          },
          {
            "name": "พรหมณี",
            "zipcodes": [
              "26000"
            ]
          }
        ]
      },
      {
        "name": "ปากพลี",
        "subdistricts": [
          {
            "name": "เกาะหวาย",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "เกาะโพธิ์",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "ปากพลี",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "โคกกรวด",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "หนองแสง",
            "zipcodes": [
              "26130"
            ]
          },
          {
            "name": "นาหินลาด",
            "zipcodes": [
              "26130"
            ]
          }
        ]
      },
      {
        "name": "บ้านนา",
        "subdistricts": [
          {
            "name": "บ้านนา",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "บ้านพร้าว",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "บ้านพริก",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "อาษา",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "ทองหลาง",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "บางอ้อ",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "พิกุลออก",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "ป่าขะ",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "เขาเพิ่ม",
            "zipcodes": [
              "26110"
            ]
          },
          {
            "name": "ศรีกะอาง",
            "zipcodes": [
              "26110"
            ]
          }
        ]
      },
      {
        "name": "องครักษ์",
        "subdistricts": [
          {
            "name": "พระอาจารย์",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "บึงศาล",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "ศีรษะกระบือ",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "โพธิ์แทน",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "บางสมบูรณ์",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "บางปลากด",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "บางลูกเสือ",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "องครักษ์",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "ชุมพล",
            "zipcodes": [
              "26120"
            ]
          },
          {
            "name": "คลองใหญ่",
            "zipcodes": [
              "26120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สระแก้ว",
    "districts": [
      {
        "name": "เมืองสระแก้ว",
        "subdistricts": [
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "ศาลาลำดวน",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "โคกปี่ฆ้อง",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "ท่าแยก",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "ท่าเกษม",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "สระขวัญ",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "หนองบอน",
            "zipcodes": [
              "27000"
            ]
          }
        ]
      },
      {
        "name": "คลองหาด",
        "subdistricts": [
          {
            "name": "คลองหาด",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "ไทยอุดม",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "ซับมะกรูด",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "ไทรเดี่ยว",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "คลองไก่เถื่อน",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "เบญจขร",
            "zipcodes": [
              "27260"
            ]
          },
          {
            "name": "ไทรทอง",
            "zipcodes": [
              "27260"
            ]
          }
        ]
      },
      {
        "name": "ตาพระยา",
        "subdistricts": [
          {
            "name": "ตาพระยา",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "ทัพเสด็จ",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "ทัพราช",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "ทัพไทย",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "โคคลาน",
            "zipcodes": [
              "27180"
            ]
          }
        ]
      },
      {
        "name": "วังน้ำเย็น",
        "subdistricts": [
          {
            "name": "วังน้ำเย็น",
            "zipcodes": [
              "27210"
            ]
          },
          {
            "name": "ตาหลังใน",
            "zipcodes": [
              "27210"
            ]
          },
          {
            "name": "คลองหินปูน",
            "zipcodes": [
              "27210"
            ]
          },
          {
            "name": "ทุ่งมหาเจริญ",
            "zipcodes": [
              "27210"
            ]
          }
        ]
      },
      {
        "name": "วัฒนานคร",
        "subdistricts": [
          {
            "name": "วัฒนานคร",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "ท่าเกวียน",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "ผักขะ",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "โนนหมากเค็ง",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "หนองน้ำใส",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "ช่องกุ่ม",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "แซร์ออ",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "หนองหมากฝ้าย",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "หนองตะเคียนบอน",
            "zipcodes": [
              "27160"
            ]
          },
          {
            "name": "ห้วยโจด",
            "zipcodes": [
              "27160"
            ]
          }
        ]
      },
      {
        "name": "อรัญประเทศ",
        "subdistricts": [
          {
            "name": "อรัญประเทศ",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "เมืองไผ่",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "หันทราย",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "คลองน้ำใส",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "ป่าไร่",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "ทับพริก",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "บ้านใหม่หนองไทร",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "ผ่านศึก",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "หนองสังข์",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "คลองทับจันทร์",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "ฟากห้วย",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "บ้านด่าน",
            "zipcodes": [
              "27120"
            ]
          }
        ]
      },
      {
        "name": "เขาฉกรรจ์",
        "subdistricts": [
          {
            "name": "เขาฉกรรจ์",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "พระเพลิง",
            "zipcodes": [
              "27000"
            ]
          },
          {
            "name": "เขาสามสิบ",
            "zipcodes": [
              "27000"
            ]
          }
        ]
      },
      {
        "name": "โคกสูง",
        "subdistricts": [
          {
            "name": "โคกสูง",
            "zipcodes": [
              "27120"
            ]
          },
          {
            "name": "หนองม่วง",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "27180"
            ]
          },
          {
            "name": "โนนหมากมุ่น",
            "zipcodes": [
              "27120"
            ]
          }
        ]
      },
      {
        "name": "วังสมบูรณ์",
        "subdistricts": [
          {
            "name": "วังสมบูรณ์",
            "zipcodes": [
              "27250"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "27250"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "27250"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครราชสีมา",
    "districts": [
      {
        "name": "เมืองนครราชสีมา",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "โพธิ์กลาง",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองจะบก",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "โคกสูง",
            "zipcodes": [
              "30310"
            ]
          },
          {
            "name": "มะเริง",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองระเวียง",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "ปรุใหญ่",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หมื่นไวย",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "พลกรัง",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองไผ่ล้อม",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หัวทะเล",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "พุดซา",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "30310"
            ]
          },
          {
            "name": "จอหอ",
            "zipcodes": [
              "30310"
            ]
          },
          {
            "name": "โคกกรวด",
            "zipcodes": [
              "30280"
            ]
          },
          {
            "name": "ไชยมงคล",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองบัวศาลา",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "สุรนารี",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "สีมุม",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "ตลาด",
            "zipcodes": [
              "30310"
            ]
          },
          {
            "name": "พะเนา",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองไข่น้ำ",
            "zipcodes": [
              "30310"
            ]
          }
        ]
      },
      {
        "name": "ครบุรี",
        "subdistricts": [
          {
            "name": "แชะ",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "เฉลียง",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "ครบุรี",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "โคกกระชาย",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "จระเข้หิน",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "มาบตะโกเอน",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "อรพิมพ์",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "ลำเพียก",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "ครบุรีใต้",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "ตะแบกบาน",
            "zipcodes": [
              "30250"
            ]
          },
          {
            "name": "สระว่านพระยา",
            "zipcodes": [
              "30250"
            ]
          }
        ]
      },
      {
        "name": "เสิงสาง",
        "subdistricts": [
          {
            "name": "เสิงสาง",
            "zipcodes": [
              "30330"
            ]
          },
          {
            "name": "สระตะเคียน",
            "zipcodes": [
              "30330"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "30330"
            ]
          },
          {
            "name": "กุดโบสถ์",
            "zipcodes": [
              "30330"
            ]
          },
          {
            "name": "สุขไพบูลย์",
            "zipcodes": [
              "30330"
            ]
          },
          {
            "name": "บ้านราษฎร์",
            "zipcodes": [
              "30330"
            ]
          }
        ]
      },
      {
        "name": "คง",
        "subdistricts": [
          {
            "name": "เมืองคง",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "คูขาด",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "เทพาลัย",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "ตาจั่น",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "บ้านปรางค์",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "หนองมะนาว",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "โนนเต็ง",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "ดอนใหญ่",
            "zipcodes": [
              "30260"
            ]
          },
          {
            "name": "ขามสมบูรณ์",
            "zipcodes": [
              "30260"
            ]
          }
        ]
      },
      {
        "name": "บ้านเหลื่อม",
        "subdistricts": [
          {
            "name": "บ้านเหลื่อม",
            "zipcodes": [
              "30350"
            ]
          },
          {
            "name": "วังโพธิ์",
            "zipcodes": [
              "30350"
            ]
          },
          {
            "name": "โคกกระเบื้อง",
            "zipcodes": [
              "30350"
            ]
          },
          {
            "name": "ช่อระกา",
            "zipcodes": [
              "30350"
            ]
          }
        ]
      },
      {
        "name": "จักราช",
        "subdistricts": [
          {
            "name": "จักราช",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "ทองหลาง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "สีสุก",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หนองงูเหลือม",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หนองพลวง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หนองยาง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "พระพุทธ",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "ศรีละกอ",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "คลองเมือง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "ช้างทอง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หินโคน",
            "zipcodes": [
              "30230"
            ]
          }
        ]
      },
      {
        "name": "โชคชัย",
        "subdistricts": [
          {
            "name": "กระโทก",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "พลับพลา",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ท่าอ่าง",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ทุ่งอรุณ",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ท่าลาดขาว",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ท่าจะหลุง",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ท่าเยี่ยม",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "โชคชัย",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ละลมใหม่พัฒนา",
            "zipcodes": [
              "30190"
            ]
          },
          {
            "name": "ด่านเกวียน",
            "zipcodes": [
              "30190"
            ]
          }
        ]
      },
      {
        "name": "ด่านขุนทด",
        "subdistricts": [
          {
            "name": "กุดพิมาน",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "ด่านขุนทด",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "ด่านนอก",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "ด่านใน",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "ตะเคียน",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "บ้านเก่า",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "บ้านแปรง",
            "zipcodes": [
              "36220"
            ]
          },
          {
            "name": "พันชนะ",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "สระจรเข้",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หนองกราด",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หนองบัวตะเกียด",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หนองบัวละคร",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หินดาด",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "ห้วยบง",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "โนนเมืองพัฒนา",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หนองไทร",
            "zipcodes": [
              "36220"
            ]
          }
        ]
      },
      {
        "name": "โนนไทย",
        "subdistricts": [
          {
            "name": "โนนไทย",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "ด่านจาก",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "กำปัง",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "ค้างพลู",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "บ้านวัง",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "บัลลังก์",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "สายออ",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "ถนนโพธิ์",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "พังเทียม",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "สระพระ",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "ทัพรั้ง",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "หนองหอย",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "มะค่า",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "มาบกราด",
            "zipcodes": [
              "30220"
            ]
          }
        ]
      },
      {
        "name": "โนนสูง",
        "subdistricts": [
          {
            "name": "โนนสูง",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ใหม่",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "โตนด",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "บิง",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ดอนชมพู",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ธารปราสาท",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "หลุมข้าว",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "มะค่า",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "พลสงคราม",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "จันอัด",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ขามเฒ่า",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ด่านคล้า",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ลำคอหงษ์",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "เมืองปราสาท",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ดอนหวาย",
            "zipcodes": [
              "30160"
            ]
          },
          {
            "name": "ลำมูล",
            "zipcodes": [
              "30160"
            ]
          }
        ]
      },
      {
        "name": "ขามสะแกแสง",
        "subdistricts": [
          {
            "name": "ขามสะแกแสง",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "โนนเมือง",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "เมืองนาท",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "ชีวึก",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "พะงาด",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "หนองหัวฟาน",
            "zipcodes": [
              "30290"
            ]
          },
          {
            "name": "เมืองเกษตร",
            "zipcodes": [
              "30290"
            ]
          }
        ]
      },
      {
        "name": "บัวใหญ่",
        "subdistricts": [
          {
            "name": "บัวใหญ่",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "เสมาใหญ่",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "ดอนตะหนิน",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "หนองบัวสะอาด",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "โนนทองหลาง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "บัวลาย",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "สีดา",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "กุดจอก",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "ด่านช้าง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "โนนจาน",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "สามเมือง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "ขุนทอง",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "หนองตาดใหญ่",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "เมืองพะไล",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "โนนประดู่",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "หนองแจ้งใหญ่",
            "zipcodes": [
              "30120"
            ]
          }
        ]
      },
      {
        "name": "ประทาย",
        "subdistricts": [
          {
            "name": "ประทาย",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "กระทุ่มราย",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "วังไม้แดง",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "ตลาดไทร",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "หนองพลวง",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "หนองค่าย",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "หันห้วยทราย",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "ดอนมัน",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "นางรำ",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "โนนเพ็ด",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "ทุ่งสว่าง",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "30180"
            ]
          },
          {
            "name": "เมืองโดน",
            "zipcodes": [
              "30180"
            ]
          }
        ]
      },
      {
        "name": "ปักธงชัย",
        "subdistricts": [
          {
            "name": "เมืองปัก",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ตะคุ",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "โคกไทย",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ตะขบ",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "นกออก",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ดอน",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ตูม",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "งิ้ว",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "สะแกราช",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ลำนางแก้ว",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ภูหลวง",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "ธงชัยเหนือ",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "สุขเกษม",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "เกษมทรัพย์",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "บ่อปลาทอง",
            "zipcodes": [
              "30150"
            ]
          }
        ]
      },
      {
        "name": "พิมาย",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "สัมฤทธิ์",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "โบสถ์",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "กระเบื้องใหญ่",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "รังกาใหญ่",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "ชีวาน",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "นิคมสร้างตนเอง",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "กระชอน",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "ดงใหญ่",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "ธารละหลอด",
            "zipcodes": [
              "30110"
            ]
          },
          {
            "name": "หนองระเวียง",
            "zipcodes": [
              "30110"
            ]
          }
        ]
      },
      {
        "name": "ห้วยแถลง",
        "subdistricts": [
          {
            "name": "ห้วยแถลง",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "ทับสวาย",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "เมืองพลับพลา",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "หลุ่งตะเคียน",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "หินดาด",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "งิ้ว",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "กงรถ",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "หลุ่งประดู่",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "ตะโก",
            "zipcodes": [
              "30240"
            ]
          },
          {
            "name": "ห้วยแคน",
            "zipcodes": [
              "30240"
            ]
          }
        ]
      },
      {
        "name": "ชุมพวง",
        "subdistricts": [
          {
            "name": "ชุมพวง",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ประสุข",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ท่าลาด",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "สาหร่าย",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ตลาดไทร",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ช่องแมว",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ขุย",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "โนนรัง",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "หนองหลัก",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ไพล",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "โนนตูม",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "โนนยอ",
            "zipcodes": [
              "30270"
            ]
          }
        ]
      },
      {
        "name": "สูงเนิน",
        "subdistricts": [
          {
            "name": "สูงเนิน",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "เสมา",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "โคราช",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "บุ่งขี้เหล็ก",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "โนนค่า",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "โค้งยาง",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "มะเกลือเก่า",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "มะเกลือใหม่",
            "zipcodes": [
              "30170"
            ]
          },
          {
            "name": "นากลาง",
            "zipcodes": [
              "30380"
            ]
          },
          {
            "name": "หนองตะไก้",
            "zipcodes": [
              "30380"
            ]
          },
          {
            "name": "กุดจิก",
            "zipcodes": [
              "30380"
            ]
          }
        ]
      },
      {
        "name": "ขามทะเลสอ",
        "subdistricts": [
          {
            "name": "ขามทะเลสอ",
            "zipcodes": [
              "30280"
            ]
          },
          {
            "name": "โป่งแดง",
            "zipcodes": [
              "30280"
            ]
          },
          {
            "name": "พันดุง",
            "zipcodes": [
              "30280"
            ]
          },
          {
            "name": "หนองสรวง",
            "zipcodes": [
              "30280"
            ]
          },
          {
            "name": "บึงอ้อ",
            "zipcodes": [
              "30280"
            ]
          }
        ]
      },
      {
        "name": "สีคิ้ว",
        "subdistricts": [
          {
            "name": "สีคิ้ว",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "บ้านหัน",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "กฤษณา",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "ลาดบัวขาว",
            "zipcodes": [
              "30340"
            ]
          },
          {
            "name": "หนองหญ้าขาว",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "กุดน้อย",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "หนองน้ำใส",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "วังโรงใหญ่",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "มิตรภาพ",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "คลองไผ่",
            "zipcodes": [
              "30340"
            ]
          },
          {
            "name": "ดอนเมือง",
            "zipcodes": [
              "30140"
            ]
          },
          {
            "name": "หนองบัวน้อย",
            "zipcodes": [
              "30140"
            ]
          }
        ]
      },
      {
        "name": "ปากช่อง",
        "subdistricts": [
          {
            "name": "ปากช่อง",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "กลางดง",
            "zipcodes": [
              "30320"
            ]
          },
          {
            "name": "จันทึก",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "วังกะทะ",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "หมูสี",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "หนองสาหร่าย",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "ขนงพระ",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "โป่งตาลอง",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "คลองม่วง",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "หนองน้ำแดง",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "วังไทร",
            "zipcodes": [
              "30130"
            ]
          },
          {
            "name": "พญาเย็น",
            "zipcodes": [
              "30320"
            ]
          }
        ]
      },
      {
        "name": "หนองบุญมาก",
        "subdistricts": [
          {
            "name": "หนองบุนนาก",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "สารภี",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "ไทยเจริญ",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "หนองหัวแรต",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "แหลมทอง",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "หนองตะไก้",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "ลุงเขว้า",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "หนองไม้ไผ่",
            "zipcodes": [
              "30410"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "30410"
            ]
          }
        ]
      },
      {
        "name": "แก้งสนามนาง",
        "subdistricts": [
          {
            "name": "แก้งสนามนาง",
            "zipcodes": [
              "30440"
            ]
          },
          {
            "name": "โนนสำราญ",
            "zipcodes": [
              "30440"
            ]
          },
          {
            "name": "บึงพะไล",
            "zipcodes": [
              "30440"
            ]
          },
          {
            "name": "สีสุก",
            "zipcodes": [
              "30440"
            ]
          },
          {
            "name": "บึงสำโรง",
            "zipcodes": [
              "30440"
            ]
          }
        ]
      },
      {
        "name": "โนนแดง",
        "subdistricts": [
          {
            "name": "โนนแดง",
            "zipcodes": [
              "30360"
            ]
          },
          {
            "name": "โนนตาเถร",
            "zipcodes": [
              "30360"
            ]
          },
          {
            "name": "สำพะเนียง",
            "zipcodes": [
              "30360"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "30360"
            ]
          },
          {
            "name": "ดอนยาวใหญ่",
            "zipcodes": [
              "30360"
            ]
          }
        ]
      },
      {
        "name": "วังน้ำเขียว",
        "subdistricts": [
          {
            "name": "วังน้ำเขียว",
            "zipcodes": [
              "30370"
            ]
          },
          {
            "name": "วังหมี",
            "zipcodes": [
              "30370"
            ]
          },
          {
            "name": "ระเริง",
            "zipcodes": [
              "30150"
            ]
          },
          {
            "name": "อุดมทรัพย์",
            "zipcodes": [
              "30370"
            ]
          },
          {
            "name": "ไทยสามัคคี",
            "zipcodes": [
              "30370"
            ]
          }
        ]
      },
      {
        "name": "เทพารักษ์",
        "subdistricts": [
          {
            "name": "สำนักตะคร้อ",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "บึงปรือ",
            "zipcodes": [
              "30210"
            ]
          },
          {
            "name": "วังยายทอง",
            "zipcodes": [
              "30210"
            ]
          }
        ]
      },
      {
        "name": "เมืองยาง",
        "subdistricts": [
          {
            "name": "เมืองยาง",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "กระเบื้องนอก",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ละหานปลาค้าว",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "โนนอุดม",
            "zipcodes": [
              "30270"
            ]
          }
        ]
      },
      {
        "name": "พระทองคำ",
        "subdistricts": [
          {
            "name": "สระพระ",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "มาบกราด",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "พังเทียม",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "ทัพรั้ง",
            "zipcodes": [
              "30220"
            ]
          },
          {
            "name": "หนองหอย",
            "zipcodes": [
              "30220"
            ]
          }
        ]
      },
      {
        "name": "ลำทะเมนชัย",
        "subdistricts": [
          {
            "name": "ขุย",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ช่องแมว",
            "zipcodes": [
              "30270"
            ]
          },
          {
            "name": "ไพล",
            "zipcodes": [
              "30270"
            ]
          }
        ]
      },
      {
        "name": "บัวลาย",
        "subdistricts": [
          {
            "name": "เมืองพะไล",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "โนนจาน",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "บัวลาย",
            "zipcodes": [
              "30120"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "30120"
            ]
          }
        ]
      },
      {
        "name": "สีดา",
        "subdistricts": [
          {
            "name": "สีดา",
            "zipcodes": [
              "30430"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "30430"
            ]
          },
          {
            "name": "โนนประดู่",
            "zipcodes": [
              "30430"
            ]
          },
          {
            "name": "สามเมือง",
            "zipcodes": [
              "30430"
            ]
          },
          {
            "name": "หนองตาดใหญ่",
            "zipcodes": [
              "30430"
            ]
          }
        ]
      },
      {
        "name": "เฉลิมพระเกียรติ",
        "subdistricts": [
          {
            "name": "ช้างทอง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "พระพุทธ",
            "zipcodes": [
              "30230"
            ]
          },
          {
            "name": "หนองงูเหลือม",
            "zipcodes": [
              "30000"
            ]
          },
          {
            "name": "หนองยาง",
            "zipcodes": [
              "30230"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "บุรีรัมย์",
    "districts": [
      {
        "name": "เมืองบุรีรัมย์",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "อิสาณ",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "เสม็ด",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "บ้านบัว",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สะแกโพรง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สวายจีก",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "พระครู",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ถลุงเหล็ก",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "หนองตาด",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ลุมปุ๊ก",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สองห้อง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "บัวทอง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ชุมเห็ด",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "หลักเขต",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สะแกซำ",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "กลันทา",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "กระสัง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "เมืองฝาง",
            "zipcodes": [
              "31000"
            ]
          }
        ]
      },
      {
        "name": "คูเมือง",
        "subdistricts": [
          {
            "name": "คูเมือง",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "ปะเคียบ",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "บ้านแพ",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "พรสำราญ",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "หินเหล็กไฟ",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "ตูมใหญ่",
            "zipcodes": [
              "31190"
            ]
          },
          {
            "name": "หนองขมาร",
            "zipcodes": [
              "31190"
            ]
          }
        ]
      },
      {
        "name": "กระสัง",
        "subdistricts": [
          {
            "name": "กระสัง",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "ลำดวน",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "สองชั้น",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "สูงเนิน",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "หนองเต็ง",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "เมืองไผ่",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "บ้านปรือ",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "ห้วยสำราญ",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "กันทรารมย์",
            "zipcodes": [
              "31160"
            ]
          },
          {
            "name": "ศรีภูมิ",
            "zipcodes": [
              "31160"
            ]
          }
        ]
      },
      {
        "name": "นางรอง",
        "subdistricts": [
          {
            "name": "นางรอง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "สะเดา",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองโบสถ์",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองกง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ถนนหัก",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองไทร",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ก้านเหลือง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "บ้านสิงห์",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ลำไทรโยง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ทรัพย์พระยา",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองยายพิมพ์",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หัวถนน",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ทุ่งแสงทอง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองโสน",
            "zipcodes": [
              "31110"
            ]
          }
        ]
      },
      {
        "name": "หนองกี่",
        "subdistricts": [
          {
            "name": "หนองกี่",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "เย้ยปราสาท",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "เมืองไผ่",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "ดอนอะราง",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "ทุ่งกระตาดพัฒนา",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "ทุ่งกระเต็น",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "ท่าโพธิ์ชัย",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "โคกสูง",
            "zipcodes": [
              "31210"
            ]
          },
          {
            "name": "บุกระสัง",
            "zipcodes": [
              "31210"
            ]
          }
        ]
      },
      {
        "name": "ละหานทราย",
        "subdistricts": [
          {
            "name": "ละหานทราย",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "ตาจง",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "สำโรงใหม่",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "หนองตะครอง",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "โคกว่าน",
            "zipcodes": [
              "31170"
            ]
          }
        ]
      },
      {
        "name": "ประโคนชัย",
        "subdistricts": [
          {
            "name": "ประโคนชัย",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "แสลงโทน",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "บ้านไทร",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "ละเวี้ย",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "จรเข้มาก",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "ปังกู",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "โคกย่าง",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "โคกม้า",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "ไพศาล",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "ตะโกตาพิ",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "เขาคอก",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "หนองบอน",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "โคกมะขาม",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "โคกตูม",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "ประทัดบุ",
            "zipcodes": [
              "31140"
            ]
          },
          {
            "name": "สี่เหลี่ยม",
            "zipcodes": [
              "31140"
            ]
          }
        ]
      },
      {
        "name": "บ้านกรวด",
        "subdistricts": [
          {
            "name": "บ้านกรวด",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "โนนเจริญ",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "หนองไม้งาม",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "ปราสาท",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "สายตะกู",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "หินลาด",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "บึงเจริญ",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "จันทบเพชร",
            "zipcodes": [
              "31180"
            ]
          },
          {
            "name": "เขาดินเหนือ",
            "zipcodes": [
              "31180"
            ]
          }
        ]
      },
      {
        "name": "พุทไธสง",
        "subdistricts": [
          {
            "name": "พุทไธสง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "มะเฟือง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "บ้านจาน",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "บ้านเป้า",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "บ้านแวง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "หายโศก",
            "zipcodes": [
              "31120"
            ]
          }
        ]
      },
      {
        "name": "ลำปลายมาศ",
        "subdistricts": [
          {
            "name": "ลำปลายมาศ",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "หนองคู",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "แสลงพัน",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "ทะเมนชัย",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "ตลาดโพธิ์",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "หนองกะทิง",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "เมืองแฝก",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "ผไทรินทร์",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "โคกล่าม",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "หินโคน",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "หนองบัวโคก",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "บุโพธิ์",
            "zipcodes": [
              "31130"
            ]
          },
          {
            "name": "หนองโดน",
            "zipcodes": [
              "31130"
            ]
          }
        ]
      },
      {
        "name": "สตึก",
        "subdistricts": [
          {
            "name": "สตึก",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "นิคม",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ทุ่งวัง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "เมืองแก",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ร่อนทอง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ดอนมนต์",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ท่าม่วง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "สะแก",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "สนามชัย",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "กระสัง",
            "zipcodes": [
              "31150"
            ]
          }
        ]
      },
      {
        "name": "ปะคำ",
        "subdistricts": [
          {
            "name": "ปะคำ",
            "zipcodes": [
              "31220"
            ]
          },
          {
            "name": "ไทยเจริญ",
            "zipcodes": [
              "31220"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "31220"
            ]
          },
          {
            "name": "โคกมะม่วง",
            "zipcodes": [
              "31220"
            ]
          },
          {
            "name": "หูทำนบ",
            "zipcodes": [
              "31220"
            ]
          }
        ]
      },
      {
        "name": "นาโพธิ์",
        "subdistricts": [
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "31230"
            ]
          },
          {
            "name": "บ้านคู",
            "zipcodes": [
              "31230"
            ]
          },
          {
            "name": "บ้านดู่",
            "zipcodes": [
              "31230"
            ]
          },
          {
            "name": "ดอนกอก",
            "zipcodes": [
              "31230"
            ]
          },
          {
            "name": "ศรีสว่าง",
            "zipcodes": [
              "31230"
            ]
          }
        ]
      },
      {
        "name": "หนองหงส์",
        "subdistricts": [
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "ห้วยหิน",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "ไทยสามัคคี",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "หนองชัยศรี",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "เสาเดียว",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "เมืองฝ้าย",
            "zipcodes": [
              "31240"
            ]
          },
          {
            "name": "สระทอง",
            "zipcodes": [
              "31240"
            ]
          }
        ]
      },
      {
        "name": "พลับพลาชัย",
        "subdistricts": [
          {
            "name": "จันดุม",
            "zipcodes": [
              "31250"
            ]
          },
          {
            "name": "โคกขมิ้น",
            "zipcodes": [
              "31250"
            ]
          },
          {
            "name": "ป่าชัน",
            "zipcodes": [
              "31250"
            ]
          },
          {
            "name": "สะเดา",
            "zipcodes": [
              "31250"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "31250"
            ]
          }
        ]
      },
      {
        "name": "ห้วยราช",
        "subdistricts": [
          {
            "name": "ห้วยราช",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สามแวง",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ตาเสา",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "บ้านตะโก",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "สนวน",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "โคกเหล็ก",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "เมืองโพธิ์",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ห้วยราชา",
            "zipcodes": [
              "31000"
            ]
          }
        ]
      },
      {
        "name": "โนนสุวรรณ",
        "subdistricts": [
          {
            "name": "โนนสุวรรณ",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ทุ่งจังหัน",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "โกรกแก้ว",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ดงอีจาน",
            "zipcodes": [
              "31110"
            ]
          }
        ]
      },
      {
        "name": "ชำนิ",
        "subdistricts": [
          {
            "name": "ชำนิ",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "หนองปล่อง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "เมืองยาง",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ช่อผกา",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ละลวด",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "โคกสนวน",
            "zipcodes": [
              "31110"
            ]
          }
        ]
      },
      {
        "name": "บ้านใหม่ไชยพจน์",
        "subdistricts": [
          {
            "name": "หนองแวง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "ทองหลาง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "แดงใหญ่",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "กู่สวนแตง",
            "zipcodes": [
              "31120"
            ]
          },
          {
            "name": "หนองเยือง",
            "zipcodes": [
              "31120"
            ]
          }
        ]
      },
      {
        "name": "โนนดินแดง",
        "subdistricts": [
          {
            "name": "โนนดินแดง",
            "zipcodes": [
              "31260"
            ]
          },
          {
            "name": "ส้มป่อย",
            "zipcodes": [
              "31260"
            ]
          },
          {
            "name": "ลำนางรอง",
            "zipcodes": [
              "31260"
            ]
          }
        ]
      },
      {
        "name": "บ้านด่าน",
        "subdistricts": [
          {
            "name": "บ้านด่าน",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "ปราสาท",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "วังเหนือ",
            "zipcodes": [
              "31000"
            ]
          },
          {
            "name": "โนนขวาง",
            "zipcodes": [
              "31000"
            ]
          }
        ]
      },
      {
        "name": "แคนดง",
        "subdistricts": [
          {
            "name": "แคนดง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "ดงพลอง",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "สระบัว",
            "zipcodes": [
              "31150"
            ]
          },
          {
            "name": "หัวฝาย",
            "zipcodes": [
              "31150"
            ]
          }
        ]
      },
      {
        "name": "เฉลิมพระเกียรติ",
        "subdistricts": [
          {
            "name": "เจริญสุข",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ตาเป๊ก",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "อีสานเขต",
            "zipcodes": [
              "31110"
            ]
          },
          {
            "name": "ถาวร",
            "zipcodes": [
              "31170"
            ]
          },
          {
            "name": "ยายแย้มวัฒนา",
            "zipcodes": [
              "31170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สุรินทร์",
    "districts": [
      {
        "name": "เมืองสุรินทร์",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ตั้งใจ",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "เพี้ยราม",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ท่าสว่าง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "สลักได",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ตาอ็อง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "แกใหญ่",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "นอกเมือง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "คอโค",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "สวาย",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "เฉนียง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "เทนมีย์",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "นาบัว",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "เมืองที",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ราม",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "บุฤาษี",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ตระแสง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "แสลงพันธ์",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "กาเกาะ",
            "zipcodes": [
              "32000"
            ]
          }
        ]
      },
      {
        "name": "ชุมพลบุรี",
        "subdistricts": [
          {
            "name": "ชุมพลบุรี",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "นาหนองไผ่",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "ไพรขลา",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "ศรีณรงค์",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "ยะวึก",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "เมืองบัว",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "สระขุด",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "กระเบื้อง",
            "zipcodes": [
              "32190"
            ]
          },
          {
            "name": "หนองเรือ",
            "zipcodes": [
              "32190"
            ]
          }
        ]
      },
      {
        "name": "ท่าตูม",
        "subdistricts": [
          {
            "name": "ท่าตูม",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "กระโพ",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "พรมเทพ",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "โพนครก",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "เมืองแก",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "บะ",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "บัวโคก",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "หนองเมธี",
            "zipcodes": [
              "32120"
            ]
          },
          {
            "name": "ทุ่งกุลา",
            "zipcodes": [
              "32120"
            ]
          }
        ]
      },
      {
        "name": "จอมพระ",
        "subdistricts": [
          {
            "name": "จอมพระ",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "เมืองลีง",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "กระหาด",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "บุแกรง",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "หนองสนิท",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "บ้านผือ",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "ลุ่มระวี",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "32180"
            ]
          },
          {
            "name": "เป็นสุข",
            "zipcodes": [
              "32180"
            ]
          }
        ]
      },
      {
        "name": "ปราสาท",
        "subdistricts": [
          {
            "name": "กังแอน",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ทมอ",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ไพล",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ปรือ",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ทุ่งมน",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ตาเบา",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "โคกยาง",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "บ้านไทร",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "โชคนาสาม",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "เชื้อเพลิง",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ปราสาททนง",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ตานี",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "บ้านพลวง",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "กันตวจระมวล",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "สมุด",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ประทัดบุ",
            "zipcodes": [
              "32140"
            ]
          }
        ]
      },
      {
        "name": "กาบเชิง",
        "subdistricts": [
          {
            "name": "กาบเชิง",
            "zipcodes": [
              "32210"
            ]
          },
          {
            "name": "คูตัน",
            "zipcodes": [
              "32210"
            ]
          },
          {
            "name": "ด่าน",
            "zipcodes": [
              "32210"
            ]
          },
          {
            "name": "แนงมุด",
            "zipcodes": [
              "32210"
            ]
          },
          {
            "name": "โคกตะเคียน",
            "zipcodes": [
              "32210"
            ]
          },
          {
            "name": "ตะเคียน",
            "zipcodes": [
              "32210"
            ]
          }
        ]
      },
      {
        "name": "รัตนบุรี",
        "subdistricts": [
          {
            "name": "รัตนบุรี",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ธาตุ",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "แก",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ดอนแรด",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "หนองบัวทอง",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "หนองบัวบาน",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ไผ่",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "เบิด",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "น้ำเขียว",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "กุดขาคีม",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ยางสว่าง",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ทับใหญ่",
            "zipcodes": [
              "32130"
            ]
          }
        ]
      },
      {
        "name": "สนม",
        "subdistricts": [
          {
            "name": "สนม",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "โพนโก",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "หนองระฆัง",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "นานวน",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "แคน",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "หัวงัว",
            "zipcodes": [
              "32160"
            ]
          },
          {
            "name": "หนองอียอ",
            "zipcodes": [
              "32160"
            ]
          }
        ]
      },
      {
        "name": "ศีขรภูมิ",
        "subdistricts": [
          {
            "name": "ระแงง",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ตรึม",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "จารพัต",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ยาง",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "แตล",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "คาละแมะ",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "หนองเหล็ก",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "หนองขวาว",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ช่างปี่",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "กุดหวาย",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ขวาวใหญ่",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "นารุ่ง",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ตรมไพร",
            "zipcodes": [
              "32110"
            ]
          },
          {
            "name": "ผักไหม",
            "zipcodes": [
              "32110"
            ]
          }
        ]
      },
      {
        "name": "สังขะ",
        "subdistricts": [
          {
            "name": "สังขะ",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ขอนแตก",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ดม",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "พระแก้ว",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "บ้านจารย์",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "กระเทียม",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "สะกาด",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ตาตุม",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ทับทัน",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ตาคง",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "บ้านชบ",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "เทพรักษา",
            "zipcodes": [
              "32150"
            ]
          }
        ]
      },
      {
        "name": "ลำดวน",
        "subdistricts": [
          {
            "name": "ลำดวน",
            "zipcodes": [
              "32220"
            ]
          },
          {
            "name": "โชคเหนือ",
            "zipcodes": [
              "32220"
            ]
          },
          {
            "name": "อู่โลก",
            "zipcodes": [
              "32220"
            ]
          },
          {
            "name": "ตรำดม",
            "zipcodes": [
              "32220"
            ]
          },
          {
            "name": "ตระเปียงเตีย",
            "zipcodes": [
              "32220"
            ]
          }
        ]
      },
      {
        "name": "สำโรงทาบ",
        "subdistricts": [
          {
            "name": "สำโรงทาบ",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "หนองไผ่ล้อม",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "กระออม",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "หนองฮะ",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "ศรีสุข",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "เกาะแก้ว",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "หมื่นศรี",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "เสม็จ",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "สะโน",
            "zipcodes": [
              "32170"
            ]
          },
          {
            "name": "ประดู่",
            "zipcodes": [
              "32170"
            ]
          }
        ]
      },
      {
        "name": "บัวเชด",
        "subdistricts": [
          {
            "name": "บัวเชด",
            "zipcodes": [
              "32230"
            ]
          },
          {
            "name": "สะเดา",
            "zipcodes": [
              "32230"
            ]
          },
          {
            "name": "จรัส",
            "zipcodes": [
              "32230"
            ]
          },
          {
            "name": "ตาวัง",
            "zipcodes": [
              "32230"
            ]
          },
          {
            "name": "อาโพน",
            "zipcodes": [
              "32230"
            ]
          },
          {
            "name": "สำเภาลูน",
            "zipcodes": [
              "32230"
            ]
          }
        ]
      },
      {
        "name": "พนมดงรัก",
        "subdistricts": [
          {
            "name": "บักได",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "จีกแดก",
            "zipcodes": [
              "32140"
            ]
          },
          {
            "name": "ตาเมียง",
            "zipcodes": [
              "32140"
            ]
          }
        ]
      },
      {
        "name": "ศรีณรงค์",
        "subdistricts": [
          {
            "name": "ณรงค์",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "แจนแวน",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ตรวจ",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "32150"
            ]
          },
          {
            "name": "ศรีสุข",
            "zipcodes": [
              "32150"
            ]
          }
        ]
      },
      {
        "name": "เขวาสินรินทร์",
        "subdistricts": [
          {
            "name": "เขวาสินรินทร์",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "บึง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ตากูก",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "ปราสาททอง",
            "zipcodes": [
              "32000"
            ]
          },
          {
            "name": "บ้านแร่",
            "zipcodes": [
              "32000"
            ]
          }
        ]
      },
      {
        "name": "โนนนารายณ์",
        "subdistricts": [
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "คำผง",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "โนน",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "ระเวียง",
            "zipcodes": [
              "32130"
            ]
          },
          {
            "name": "หนองเทพ",
            "zipcodes": [
              "32130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ศรีสะเกษ",
    "districts": [
      {
        "name": "เมืองศรีสะเกษ",
        "subdistricts": [
          {
            "name": "เมืองเหนือ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "เมืองใต้",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "คูซอด",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "ซำ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "จาน",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "ตะดอบ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หนองครก",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "โพนข่า",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "โพนค้อ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "โพนเขวา",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หญ้าปล้อง",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "ทุ่ม",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หนองแก้ว",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "น้ำคำ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "โพธิ์",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หมากเขียบ",
            "zipcodes": [
              "33000"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "33000"
            ]
          }
        ]
      },
      {
        "name": "ยางชุมน้อย",
        "subdistricts": [
          {
            "name": "ยางชุมน้อย",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "ลิ้นฟ้า",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "คอนกาม",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "โนนคูณ",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "กุดเมืองฮาม",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "บึงบอน",
            "zipcodes": [
              "33190"
            ]
          },
          {
            "name": "ยางชุมใหญ่",
            "zipcodes": [
              "33190"
            ]
          }
        ]
      },
      {
        "name": "กันทรารมย์",
        "subdistricts": [
          {
            "name": "ดูน",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "โนนสัง",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "หนองหัวช้าง",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ยาง",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "หนองแก้ว",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ทาม",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ละทาย",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "เมืองน้อย",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "อีปาด",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "บัวน้อย",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ดู่",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ผักแพว",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "จาน",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "คำเนียม",
            "zipcodes": [
              "33130"
            ]
          }
        ]
      },
      {
        "name": "กันทรลักษ์",
        "subdistricts": [
          {
            "name": "บึงมะลู",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "กุดเสลา",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "เมือง",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "สังเม็ก",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "น้ำอ้อม",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ละลาย",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "รุง",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ตระกาจ",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "จานใหญ่",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ภูเงิน",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ชำ",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "กระแชง",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "โนนสำราญ",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "หนองหญ้าลาด",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "เสาธงชัย",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ขนุน",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "สวนกล้วย",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "เวียงเหนือ",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ภูผาหมอก",
            "zipcodes": [
              "33110"
            ]
          }
        ]
      },
      {
        "name": "ขุขันธ์",
        "subdistricts": [
          {
            "name": "กันทรารมย์",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "จะกง",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ใจดี",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ดองกำเม็ด",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "โสน",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ปรือใหญ่",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "สะเดาใหญ่",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ตาอุด",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ห้วยเหนือ",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ห้วยใต้",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "หัวเสือ",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ตะเคียน",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "โคกเพชร",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ปราสาท",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "สำโรงตาเจ็น",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ห้วยสำราญ",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "กฤษณา",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ลมศักดิ์",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "หนองฉลอง",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ศรีตระกูล",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ศรีสะอาด",
            "zipcodes": [
              "33140"
            ]
          }
        ]
      },
      {
        "name": "ไพรบึง",
        "subdistricts": [
          {
            "name": "ไพรบึง",
            "zipcodes": [
              "33180"
            ]
          },
          {
            "name": "ดินแดง",
            "zipcodes": [
              "33180"
            ]
          },
          {
            "name": "ปราสาทเยอ",
            "zipcodes": [
              "33180"
            ]
          },
          {
            "name": "สำโรงพลัน",
            "zipcodes": [
              "33180"
            ]
          },
          {
            "name": "สุขสวัสดิ์",
            "zipcodes": [
              "33180"
            ]
          },
          {
            "name": "โนนปูน",
            "zipcodes": [
              "33180"
            ]
          }
        ]
      },
      {
        "name": "ปรางค์กู่",
        "subdistricts": [
          {
            "name": "พิมาย",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "กู่",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "หนองเชียงทูน",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "ตูม",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "สมอ",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "โพธิ์ศรี",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "สำโรงปราสาท",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "ดู่",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "สวาย",
            "zipcodes": [
              "33170"
            ]
          },
          {
            "name": "พิมายเหนือ",
            "zipcodes": [
              "33170"
            ]
          }
        ]
      },
      {
        "name": "ขุนหาญ",
        "subdistricts": [
          {
            "name": "สิ",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "บักดอง",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "พราน",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "โพธิ์วงศ์",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "ไพร",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "กระหวัน",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "ขุนหาญ",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "โนนสูง",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "กันทรอม",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "ภูฝ้าย",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "โพธิ์กระสังข์",
            "zipcodes": [
              "33150"
            ]
          },
          {
            "name": "ห้วยจันทร์",
            "zipcodes": [
              "33150"
            ]
          }
        ]
      },
      {
        "name": "ราษีไศล",
        "subdistricts": [
          {
            "name": "เมืองคง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "เมืองแคน",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "หนองแค",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "จิกสังข์ทอง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "ด่าน",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "ดู่",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "หนองอึ่ง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "บัวหุ่ง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "ไผ่",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "ส้มป่อย",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "หนองหมี",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "หว้านคำ",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "สร้างปี่",
            "zipcodes": [
              "33160"
            ]
          }
        ]
      },
      {
        "name": "อุทุมพรพิสัย",
        "subdistricts": [
          {
            "name": "กำแพง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "อี่หล่ำ",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ก้านเหลือง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ทุ่งไชย",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "แขม",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ขะยูง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ตาเกษ",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "หัวช้าง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "รังแร้ง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "แต้",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "แข้",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ปะอาว",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "หนองห้าง",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "สระกำแพงใหญ่",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "โคกหล่าม",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "โคกจาน",
            "zipcodes": [
              "33120"
            ]
          }
        ]
      },
      {
        "name": "บึงบูรพ์",
        "subdistricts": [
          {
            "name": "เป๊าะ",
            "zipcodes": [
              "33220"
            ]
          },
          {
            "name": "บึงบูรพ์",
            "zipcodes": [
              "33220"
            ]
          }
        ]
      },
      {
        "name": "ห้วยทับทัน",
        "subdistricts": [
          {
            "name": "ห้วยทับทัน",
            "zipcodes": [
              "33210"
            ]
          },
          {
            "name": "เมืองหลวง",
            "zipcodes": [
              "33210"
            ]
          },
          {
            "name": "กล้วยกว้าง",
            "zipcodes": [
              "33210"
            ]
          },
          {
            "name": "ผักไหม",
            "zipcodes": [
              "33210"
            ]
          },
          {
            "name": "จานแสนไชย",
            "zipcodes": [
              "33210"
            ]
          },
          {
            "name": "ปราสาท",
            "zipcodes": [
              "33210"
            ]
          }
        ]
      },
      {
        "name": "โนนคูณ",
        "subdistricts": [
          {
            "name": "โนนค้อ",
            "zipcodes": [
              "33250"
            ]
          },
          {
            "name": "บก",
            "zipcodes": [
              "33250"
            ]
          },
          {
            "name": "โพธิ์",
            "zipcodes": [
              "33250"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "33250"
            ]
          },
          {
            "name": "เหล่ากวาง",
            "zipcodes": [
              "33250"
            ]
          }
        ]
      },
      {
        "name": "ศรีรัตนะ",
        "subdistricts": [
          {
            "name": "ศรีแก้ว",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "พิงพวย",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "สระเยาว์",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "ตูม",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "เสื่องข้าว",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "ศรีโนนงาม",
            "zipcodes": [
              "33240"
            ]
          },
          {
            "name": "สะพุง",
            "zipcodes": [
              "33240"
            ]
          }
        ]
      },
      {
        "name": "น้ำเกลี้ยง",
        "subdistricts": [
          {
            "name": "น้ำเกลี้ยง",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ละเอาะ",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "ตองปิด",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "เขิน",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "รุ่งระวี",
            "zipcodes": [
              "33130"
            ]
          },
          {
            "name": "คูบ",
            "zipcodes": [
              "33130"
            ]
          }
        ]
      },
      {
        "name": "วังหิน",
        "subdistricts": [
          {
            "name": "บุสูง",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "ธาตุ",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "ดวนใหญ่",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "บ่อแก้ว",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "ศรีสำราญ",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "ทุ่งสว่าง",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "33270"
            ]
          },
          {
            "name": "โพนยาง",
            "zipcodes": [
              "33270"
            ]
          }
        ]
      },
      {
        "name": "ภูสิงห์",
        "subdistricts": [
          {
            "name": "โคกตาล",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ห้วยตามอญ",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ห้วยตึ๊กชู",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ละลม",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ตะเคียนราม",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ดงรัก",
            "zipcodes": [
              "33140"
            ]
          },
          {
            "name": "ไพรพัฒนา",
            "zipcodes": [
              "33140"
            ]
          }
        ]
      },
      {
        "name": "เมืองจันทร์",
        "subdistricts": [
          {
            "name": "เมืองจันทร์",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ตาโกน",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "33120"
            ]
          }
        ]
      },
      {
        "name": "เบญจลักษ์",
        "subdistricts": [
          {
            "name": "เสียว",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "หนองงูเหลือม",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "หนองฮาง",
            "zipcodes": [
              "33110"
            ]
          },
          {
            "name": "ท่าคล้อ",
            "zipcodes": [
              "33110"
            ]
          }
        ]
      },
      {
        "name": "พยุห์",
        "subdistricts": [
          {
            "name": "พยุห์",
            "zipcodes": [
              "33230"
            ]
          },
          {
            "name": "พรหมสวัสดิ์",
            "zipcodes": [
              "33230"
            ]
          },
          {
            "name": "ตำแย",
            "zipcodes": [
              "33230"
            ]
          },
          {
            "name": "โนนเพ็ก",
            "zipcodes": [
              "33230"
            ]
          },
          {
            "name": "หนองค้า",
            "zipcodes": [
              "33230"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ศรีสุวรรณ",
        "subdistricts": [
          {
            "name": "โดด",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "เสียว",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "หนองม้า",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "ผือใหญ่",
            "zipcodes": [
              "33120"
            ]
          },
          {
            "name": "อีเซ",
            "zipcodes": [
              "33120"
            ]
          }
        ]
      },
      {
        "name": "ศิลาลาด",
        "subdistricts": [
          {
            "name": "กุง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "คลีกลิ้ง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "หนองบัวดง",
            "zipcodes": [
              "33160"
            ]
          },
          {
            "name": "โจดม่วง",
            "zipcodes": [
              "33160"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อุบลราชธานี",
    "districts": [
      {
        "name": "เมืองอุบลราชธานี",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "หัวเรือ",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "หนองขอน",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ปทุม",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ขามใหญ่",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "แจระแม",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "หนองบ่อ",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ไร่น้อย",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "กระโสบ",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "กุดลาด",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ปะอาว",
            "zipcodes": [
              "34000"
            ]
          }
        ]
      },
      {
        "name": "ศรีเมืองใหม่",
        "subdistricts": [
          {
            "name": "นาคำ",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "แก้งกอก",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "เอือดใหญ่",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "วาริน",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "ลาดควาย",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "สงยาง",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "ตะบ่าย",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "คำไหล",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "หนามแท่ง",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "นาเลิน",
            "zipcodes": [
              "34250"
            ]
          },
          {
            "name": "ดอนใหญ่",
            "zipcodes": [
              "34250"
            ]
          }
        ]
      },
      {
        "name": "โขงเจียม",
        "subdistricts": [
          {
            "name": "โขงเจียม",
            "zipcodes": [
              "34220"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "34220"
            ]
          },
          {
            "name": "นาโพธิ์กลาง",
            "zipcodes": [
              "34220"
            ]
          },
          {
            "name": "หนองแสงใหญ่",
            "zipcodes": [
              "34220"
            ]
          },
          {
            "name": "ห้วยไผ่",
            "zipcodes": [
              "34220"
            ]
          },
          {
            "name": "คำเขื่อนแก้ว",
            "zipcodes": [
              "34220"
            ]
          }
        ]
      },
      {
        "name": "เขื่องใน",
        "subdistricts": [
          {
            "name": "เขื่องใน",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "สร้างถ่อ",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ค้อทอง",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ก่อเอ้",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "หัวดอน",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ชีทวน",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ท่าไห",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "นาคำใหญ่",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "แดงหม้อ",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ธาตุน้อย",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "บ้านไทย",
            "zipcodes": [
              "34320"
            ]
          },
          {
            "name": "บ้านกอก",
            "zipcodes": [
              "34320"
            ]
          },
          {
            "name": "กลางใหญ่",
            "zipcodes": [
              "34320"
            ]
          },
          {
            "name": "โนนรัง",
            "zipcodes": [
              "34320"
            ]
          },
          {
            "name": "ยางขี้นก",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "ศรีสุข",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "สหธาตุ",
            "zipcodes": [
              "34150"
            ]
          },
          {
            "name": "หนองเหล่า",
            "zipcodes": [
              "34150"
            ]
          }
        ]
      },
      {
        "name": "เขมราฐ",
        "subdistricts": [
          {
            "name": "เขมราฐ",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "ขามป้อม",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "เจียด",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "หนองผือ",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "นาแวง",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "แก้งเหนือ",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "หนองนกทา",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "หนองสิม",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "หัวนา",
            "zipcodes": [
              "34170"
            ]
          }
        ]
      },
      {
        "name": "เดชอุดม",
        "subdistricts": [
          {
            "name": "เมืองเดช",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาส่วง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาเจริญ",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "ทุ่งเทิง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "สมสะอาด",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "กุดประทาย",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "ตบหู",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "กลาง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "แก้ง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "ท่าโพธิ์ศรี",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "บัวงาม",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "คำครั่ง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นากระแซง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "ป่าโมง",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "34160"
            ]
          }
        ]
      },
      {
        "name": "นาจะหลวย",
        "subdistricts": [
          {
            "name": "นาจะหลวย",
            "zipcodes": [
              "34280"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "34280"
            ]
          },
          {
            "name": "พรสวรรค์",
            "zipcodes": [
              "34280"
            ]
          },
          {
            "name": "บ้านตูม",
            "zipcodes": [
              "34280"
            ]
          },
          {
            "name": "โสกแสง",
            "zipcodes": [
              "34280"
            ]
          },
          {
            "name": "โนนสวรรค์",
            "zipcodes": [
              "34280"
            ]
          }
        ]
      },
      {
        "name": "น้ำยืน",
        "subdistricts": [
          {
            "name": "โซง",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "ยาง",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "โดมประดิษฐ์",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "บุเปือย",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "สีวิเชียร",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "ยางใหญ่",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "เก่าขาม",
            "zipcodes": [
              "34260"
            ]
          }
        ]
      },
      {
        "name": "บุณฑริก",
        "subdistricts": [
          {
            "name": "โพนงาม",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "ห้วยข่า",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "คอแลน",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "หนองสะโน",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "โนนค้อ",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "บัวงาม",
            "zipcodes": [
              "34230"
            ]
          },
          {
            "name": "บ้านแมด",
            "zipcodes": [
              "34230"
            ]
          }
        ]
      },
      {
        "name": "ตระการพืชผล",
        "subdistricts": [
          {
            "name": "ขุหลุ",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "กระเดียน",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "เกษม",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "กุศกร",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ขามเปี้ย",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "คอนสาย",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "โคกจาน",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "นาพิน",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "นาสะไม",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "โนนกุง",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ตระการ",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ตากแดด",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ไหล่ทุ่ง",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "เป้า",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "เซเป็ด",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "สะพือ",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "หนองเต่า",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ถ้ำแข้",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "ห้วยฝ้ายพัฒนา",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "กุดยาลวน",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "บ้านแดง",
            "zipcodes": [
              "34130"
            ]
          },
          {
            "name": "คำเจริญ",
            "zipcodes": [
              "34130"
            ]
          }
        ]
      },
      {
        "name": "กุดข้าวปุ้น",
        "subdistricts": [
          {
            "name": "ข้าวปุ้น",
            "zipcodes": [
              "34270"
            ]
          },
          {
            "name": "โนนสวาง",
            "zipcodes": [
              "34270"
            ]
          },
          {
            "name": "แก่งเค็ง",
            "zipcodes": [
              "34270"
            ]
          },
          {
            "name": "กาบิน",
            "zipcodes": [
              "34270"
            ]
          },
          {
            "name": "หนองทันน้ำ",
            "zipcodes": [
              "34270"
            ]
          }
        ]
      },
      {
        "name": "ม่วงสามสิบ",
        "subdistricts": [
          {
            "name": "ม่วงสามสิบ",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "เหล่าบก",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "ดุมใหญ่",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "หนองช้างใหญ่",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "หนองเมือง",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "เตย",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "ยางสักกระโพหลุ่ม",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "หนองไข่นก",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "หนองเหล่า",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "หนองฮาง",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "ยางโยภาพ",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "ไผ่ใหญ่",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "นาเลิง",
            "zipcodes": [
              "34140"
            ]
          },
          {
            "name": "โพนแพง",
            "zipcodes": [
              "34140"
            ]
          }
        ]
      },
      {
        "name": "วารินชำราบ",
        "subdistricts": [
          {
            "name": "วารินชำราบ",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "ธาตุ",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "ท่าลาด",
            "zipcodes": [
              "34310"
            ]
          },
          {
            "name": "โนนโหนน",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "คูเมือง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "สระสมิง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "คำน้ำแซบ",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "บุ่งหวาย",
            "zipcodes": [
              "34310"
            ]
          },
          {
            "name": "คำขวาง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "โพธิ์ใหญ่",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "แสนสุข",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "หนองกินเพล",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "โนนผึ้ง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "เมืองศรีไค",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "ห้วยขะยูง",
            "zipcodes": [
              "34310"
            ]
          },
          {
            "name": "บุ่งไหม",
            "zipcodes": [
              "34190"
            ]
          }
        ]
      },
      {
        "name": "พิบูลมังสาหาร",
        "subdistricts": [
          {
            "name": "พิบูล",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "กุดชมภู",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "ดอนจิก",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "โนนกลาง",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "โพธิ์ไทร",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "โพธิ์ศรี",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "ระเว",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "ไร่ใต้",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "หนองบัวฮี",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "อ่างศิลา",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "โนนกาหลง",
            "zipcodes": [
              "34110"
            ]
          },
          {
            "name": "บ้านแขม",
            "zipcodes": [
              "34110"
            ]
          }
        ]
      },
      {
        "name": "ตาลสุม",
        "subdistricts": [
          {
            "name": "ตาลสุม",
            "zipcodes": [
              "34330"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "34330"
            ]
          },
          {
            "name": "จิกเทิง",
            "zipcodes": [
              "34330"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "34330"
            ]
          },
          {
            "name": "นาคาย",
            "zipcodes": [
              "34330"
            ]
          },
          {
            "name": "คำหว้า",
            "zipcodes": [
              "34330"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ไทร",
        "subdistricts": [
          {
            "name": "โพธิ์ไทร",
            "zipcodes": [
              "34340"
            ]
          },
          {
            "name": "ม่วงใหญ่",
            "zipcodes": [
              "34340"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "34340"
            ]
          },
          {
            "name": "สองคอน",
            "zipcodes": [
              "34340"
            ]
          },
          {
            "name": "สารภี",
            "zipcodes": [
              "34340"
            ]
          },
          {
            "name": "เหล่างาม",
            "zipcodes": [
              "34340"
            ]
          }
        ]
      },
      {
        "name": "สำโรง",
        "subdistricts": [
          {
            "name": "สำโรง",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "โคกก่อง",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "ค้อน้อย",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "โนนกาเล็น",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "โนนกลาง",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "บอน",
            "zipcodes": [
              "34360"
            ]
          },
          {
            "name": "ขามป้อม",
            "zipcodes": [
              "34360"
            ]
          }
        ]
      },
      {
        "name": "ดอนมดแดง",
        "subdistricts": [
          {
            "name": "ดอนมดแดง",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "เหล่าแดง",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "ท่าเมือง",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "คำไฮใหญ่",
            "zipcodes": [
              "34000"
            ]
          }
        ]
      },
      {
        "name": "สิรินธร",
        "subdistricts": [
          {
            "name": "คันไร่",
            "zipcodes": [
              "34350"
            ]
          },
          {
            "name": "ช่องเม็ก",
            "zipcodes": [
              "34350"
            ]
          },
          {
            "name": "โนนก่อ",
            "zipcodes": [
              "34350"
            ]
          },
          {
            "name": "นิคมสร้างตนเองลำโดมน้อย",
            "zipcodes": [
              "34350"
            ]
          },
          {
            "name": "ฝางคำ",
            "zipcodes": [
              "34350"
            ]
          },
          {
            "name": "คำเขื่อนแก้ว",
            "zipcodes": [
              "34350"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งศรีอุดม",
        "subdistricts": [
          {
            "name": "หนองอ้ม",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาเกษม",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "กุดเรือ",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "โคกชำแระ",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาห่อม",
            "zipcodes": [
              "34160"
            ]
          }
        ]
      },
      {
        "name": "นาเยีย",
        "subdistricts": [
          {
            "name": "นาเยีย",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "34160"
            ]
          },
          {
            "name": "นาเรือง",
            "zipcodes": [
              "34160"
            ]
          }
        ]
      },
      {
        "name": "นาตาล",
        "subdistricts": [
          {
            "name": "นาตาล",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "พะลาน",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "กองโพน",
            "zipcodes": [
              "34170"
            ]
          },
          {
            "name": "พังเคน",
            "zipcodes": [
              "34170"
            ]
          }
        ]
      },
      {
        "name": "เหล่าเสือโก้ก",
        "subdistricts": [
          {
            "name": "เหล่าเสือโก้ก",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "โพนเมือง",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "แพงใหญ่",
            "zipcodes": [
              "34000"
            ]
          },
          {
            "name": "หนองบก",
            "zipcodes": [
              "34000"
            ]
          }
        ]
      },
      {
        "name": "สว่างวีระวงศ์",
        "subdistricts": [
          {
            "name": "แก่งโดม",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "บุ่งมะแลง",
            "zipcodes": [
              "34190"
            ]
          },
          {
            "name": "สว่าง",
            "zipcodes": [
              "34190"
            ]
          }
        ]
      },
      {
        "name": "น้ำขุ่น",
        "subdistricts": [
          {
            "name": "ตาเกา",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "ไพบูลย์",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "34260"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "34260"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ยโสธร",
    "districts": [
      {
        "name": "เมืองยโสธร",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "น้ำคำใหญ่",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ตาดทอง",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "สำราญ",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ค้อเหนือ",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ดู่ทุ่ง",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "เดิด",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ขั้นไดใหญ่",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ทุ่งแต้",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "สิงห์",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "นาสะไมย์",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "เขื่องคำ",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "หนองหิน",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "หนองคู",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ขุมเงิน",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "ทุ่งนางโอก",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "หนองเรือ",
            "zipcodes": [
              "35000"
            ]
          },
          {
            "name": "หนองเป็ด",
            "zipcodes": [
              "35000"
            ]
          }
        ]
      },
      {
        "name": "ทรายมูล",
        "subdistricts": [
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "35170"
            ]
          },
          {
            "name": "ดู่ลาด",
            "zipcodes": [
              "35170"
            ]
          },
          {
            "name": "ดงมะไฟ",
            "zipcodes": [
              "35170"
            ]
          },
          {
            "name": "นาเวียง",
            "zipcodes": [
              "35170"
            ]
          },
          {
            "name": "ไผ่",
            "zipcodes": [
              "35170"
            ]
          }
        ]
      },
      {
        "name": "กุดชุม",
        "subdistricts": [
          {
            "name": "กุดชุม",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "โนนเปือย",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "กำแมด",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "นาโส่",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "ห้วยแก้ง",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "หนองหมี",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "คำน้ำสร้าง",
            "zipcodes": [
              "35140"
            ]
          },
          {
            "name": "หนองแหน",
            "zipcodes": [
              "35140"
            ]
          }
        ]
      },
      {
        "name": "คำเขื่อนแก้ว",
        "subdistricts": [
          {
            "name": "ลุมพุก",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "ย่อ",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "สงเปือย",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "โพนทัน",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "ทุ่งมน",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "นาคำ",
            "zipcodes": [
              "35180"
            ]
          },
          {
            "name": "ดงแคนใหญ่",
            "zipcodes": [
              "35180"
            ]
          },
          {
            "name": "กู่จาน",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "นาแก",
            "zipcodes": [
              "35180"
            ]
          },
          {
            "name": "กุดกุง",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "เหล่าไฮ",
            "zipcodes": [
              "35110"
            ]
          },
          {
            "name": "แคนน้อย",
            "zipcodes": [
              "35180"
            ]
          },
          {
            "name": "ดงเจริญ",
            "zipcodes": [
              "35110"
            ]
          }
        ]
      },
      {
        "name": "ป่าติ้ว",
        "subdistricts": [
          {
            "name": "โพธิ์ไทร",
            "zipcodes": [
              "35150"
            ]
          },
          {
            "name": "กระจาย",
            "zipcodes": [
              "35150"
            ]
          },
          {
            "name": "โคกนาโก",
            "zipcodes": [
              "35150"
            ]
          },
          {
            "name": "เชียงเพ็ง",
            "zipcodes": [
              "35150"
            ]
          },
          {
            "name": "ศรีฐาน",
            "zipcodes": [
              "35150"
            ]
          }
        ]
      },
      {
        "name": "มหาชนะชัย",
        "subdistricts": [
          {
            "name": "ฟ้าหยาด",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "หัวเมือง",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "คูเมือง",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "ผือฮี",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "บากเรือ",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "ม่วง",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "โนนทราย",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "บึงแก",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "พระเสาร์",
            "zipcodes": [
              "35130"
            ]
          },
          {
            "name": "สงยาง",
            "zipcodes": [
              "35130"
            ]
          }
        ]
      },
      {
        "name": "ค้อวัง",
        "subdistricts": [
          {
            "name": "ฟ้าห่วน",
            "zipcodes": [
              "35160"
            ]
          },
          {
            "name": "กุดน้ำใส",
            "zipcodes": [
              "35160"
            ]
          },
          {
            "name": "น้ำอ้อม",
            "zipcodes": [
              "35160"
            ]
          },
          {
            "name": "ค้อวัง",
            "zipcodes": [
              "35160"
            ]
          }
        ]
      },
      {
        "name": "เลิงนกทา",
        "subdistricts": [
          {
            "name": "บุ่งค้า",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "สวาท",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "ห้องแซง",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "สามัคคี",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "กุดเชียงหมี",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "สามแยก",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "กุดแห่",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "โคกสำราญ",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "สร้างมิ่ง",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "ศรีแก้ว",
            "zipcodes": [
              "35120"
            ]
          }
        ]
      },
      {
        "name": "ไทยเจริญ",
        "subdistricts": [
          {
            "name": "ไทยเจริญ",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "น้ำคำ",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "ส้มผ่อ",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "คำเตย",
            "zipcodes": [
              "35120"
            ]
          },
          {
            "name": "คำไผ่",
            "zipcodes": [
              "35120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ชัยภูมิ",
    "districts": [
      {
        "name": "เมืองชัยภูมิ",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "รอบเมือง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "นาฝาย",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "บ้านค่าย",
            "zipcodes": [
              "36240"
            ]
          },
          {
            "name": "กุดตุ้ม",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "ชีลอง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "บ้านเล่า",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "นาเสียว",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "หนองนาแซง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "ลาดใหญ่",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "36240"
            ]
          },
          {
            "name": "ท่าหินโงม",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "ห้วยต้อน",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "ห้วยบง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "โนนสำราญ",
            "zipcodes": [
              "36240"
            ]
          },
          {
            "name": "โคกสูง",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "บุ่งคล้า",
            "zipcodes": [
              "36000"
            ]
          },
          {
            "name": "ซับสีทอง",
            "zipcodes": [
              "36000"
            ]
          }
        ]
      },
      {
        "name": "บ้านเขว้า",
        "subdistricts": [
          {
            "name": "บ้านเขว้า",
            "zipcodes": [
              "36170"
            ]
          },
          {
            "name": "ตลาดแร้ง",
            "zipcodes": [
              "36170"
            ]
          },
          {
            "name": "ลุ่มลำชี",
            "zipcodes": [
              "36170"
            ]
          },
          {
            "name": "ชีบน",
            "zipcodes": [
              "36170"
            ]
          },
          {
            "name": "ภูแลนคา",
            "zipcodes": [
              "36170"
            ]
          },
          {
            "name": "โนนแดง",
            "zipcodes": [
              "36170"
            ]
          }
        ]
      },
      {
        "name": "คอนสวรรค์",
        "subdistricts": [
          {
            "name": "คอนสวรรค์",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "ยางหวาย",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "ช่องสามหมอ",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "ห้วยไร่",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "บ้านโสก",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "โคกมั่งงอย",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "36140"
            ]
          },
          {
            "name": "ศรีสำราญ",
            "zipcodes": [
              "36140"
            ]
          }
        ]
      },
      {
        "name": "เกษตรสมบูรณ์",
        "subdistricts": [
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "บ้านหัน",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "บ้านเดื่อ",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "บ้านเป้า",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "กุดเลาะ",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "โนนกอก",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "สระโพนทอง",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "หนองข่า",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "หนองโพนงาม",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "บ้านบัว",
            "zipcodes": [
              "36120"
            ]
          },
          {
            "name": "โนนทอง",
            "zipcodes": [
              "36120"
            ]
          }
        ]
      },
      {
        "name": "หนองบัวแดง",
        "subdistricts": [
          {
            "name": "หนองบัวแดง",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "กุดชุมแสง",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "ถ้ำวัวแดง",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "นางแดด",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "คูเมือง",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "ท่าใหญ่",
            "zipcodes": [
              "36210"
            ]
          },
          {
            "name": "วังชมภู",
            "zipcodes": [
              "36210"
            ]
          }
        ]
      },
      {
        "name": "จัตุรัส",
        "subdistricts": [
          {
            "name": "บ้านกอก",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "หนองบัวบาน",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "บ้านขาม",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "กุดน้ำใส",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "หนองโดน",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "ละหาน",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "หนองบัวใหญ่",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "หนองบัวโคก",
            "zipcodes": [
              "36220"
            ]
          },
          {
            "name": "ส้มป่อย",
            "zipcodes": [
              "36130"
            ]
          }
        ]
      },
      {
        "name": "บำเหน็จณรงค์",
        "subdistricts": [
          {
            "name": "บ้านชวน",
            "zipcodes": [
              "36160"
            ]
          },
          {
            "name": "บ้านเพชร",
            "zipcodes": [
              "36160"
            ]
          },
          {
            "name": "บ้านตาล",
            "zipcodes": [
              "36220"
            ]
          },
          {
            "name": "หัวทะเล",
            "zipcodes": [
              "36220"
            ]
          },
          {
            "name": "โคกเริงรมย์",
            "zipcodes": [
              "36160"
            ]
          },
          {
            "name": "เกาะมะนาว",
            "zipcodes": [
              "36160"
            ]
          },
          {
            "name": "โคกเพชรพัฒนา",
            "zipcodes": [
              "36160"
            ]
          }
        ]
      },
      {
        "name": "หนองบัวระเหว",
        "subdistricts": [
          {
            "name": "หนองบัวระเหว",
            "zipcodes": [
              "36250"
            ]
          },
          {
            "name": "วังตะเฆ่",
            "zipcodes": [
              "36250"
            ]
          },
          {
            "name": "ห้วยแย้",
            "zipcodes": [
              "36250"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "36250"
            ]
          },
          {
            "name": "โสกปลาดุก",
            "zipcodes": [
              "36250"
            ]
          }
        ]
      },
      {
        "name": "เทพสถิต",
        "subdistricts": [
          {
            "name": "วะตะแบก",
            "zipcodes": [
              "36230"
            ]
          },
          {
            "name": "ห้วยยายจิ๋ว",
            "zipcodes": [
              "36230"
            ]
          },
          {
            "name": "นายางกลัก",
            "zipcodes": [
              "36230"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "36230"
            ]
          },
          {
            "name": "โป่งนก",
            "zipcodes": [
              "36230"
            ]
          }
        ]
      },
      {
        "name": "ภูเขียว",
        "subdistricts": [
          {
            "name": "ผักปัง",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "กวางโจน",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "หนองคอนไทย",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "กุดยม",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "บ้านเพชร",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "หนองตูม",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "โอโล",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "ธาตุทอง",
            "zipcodes": [
              "36110"
            ]
          },
          {
            "name": "บ้านดอน",
            "zipcodes": [
              "36110"
            ]
          }
        ]
      },
      {
        "name": "บ้านแท่น",
        "subdistricts": [
          {
            "name": "บ้านแท่น",
            "zipcodes": [
              "36190"
            ]
          },
          {
            "name": "สามสวน",
            "zipcodes": [
              "36190"
            ]
          },
          {
            "name": "สระพัง",
            "zipcodes": [
              "36190"
            ]
          },
          {
            "name": "บ้านเต่า",
            "zipcodes": [
              "36190"
            ]
          },
          {
            "name": "หนองคู",
            "zipcodes": [
              "36190"
            ]
          }
        ]
      },
      {
        "name": "แก้งคร้อ",
        "subdistricts": [
          {
            "name": "ช่องสามหมอ",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "นาหนองทุ่ม",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "หนองสังข์",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "หลุบคา",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "โคกกุง",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "เก่าย่าดี",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "ท่ามะไฟหวาน",
            "zipcodes": [
              "36150"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "36150"
            ]
          }
        ]
      },
      {
        "name": "คอนสาร",
        "subdistricts": [
          {
            "name": "คอนสาร",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ทุ่งพระ",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "โนนคูณ",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ทุ่งลุยลาย",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ดงบัง",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ทุ่งนาเลา",
            "zipcodes": [
              "36180"
            ]
          },
          {
            "name": "ดงกลาง",
            "zipcodes": [
              "36180"
            ]
          }
        ]
      },
      {
        "name": "ภักดีชุมพล",
        "subdistricts": [
          {
            "name": "บ้านเจียง",
            "zipcodes": [
              "36260"
            ]
          },
          {
            "name": "เจาทอง",
            "zipcodes": [
              "36260"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "36260"
            ]
          },
          {
            "name": "แหลมทอง",
            "zipcodes": [
              "36260"
            ]
          }
        ]
      },
      {
        "name": "เนินสง่า",
        "subdistricts": [
          {
            "name": "หนองฉิม",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "ตาเนิน",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "กะฮาด",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "รังงาม",
            "zipcodes": [
              "36130"
            ]
          }
        ]
      },
      {
        "name": "ซับใหญ่",
        "subdistricts": [
          {
            "name": "ซับใหญ่",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "ท่ากูบ",
            "zipcodes": [
              "36130"
            ]
          },
          {
            "name": "ตะโกทอง",
            "zipcodes": [
              "36130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อำนาจเจริญ",
    "districts": [
      {
        "name": "เมืองอำนาจเจริญ",
        "subdistricts": [
          {
            "name": "บุ่ง",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ไก่คำ",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นาจิก",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ปลาค้าว",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "เหล่าพรวน",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "สร้างนกทา",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "คึมใหญ่",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นาผือ",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "น้ำปลีก",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นาวัง",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นาหมอม้า",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "โนนโพธิ์",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "โนนหนามแท่ง",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ห้วยไร่",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "หนองมะแซว",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "กุดปลาดุก",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ดอนเมย",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นายม",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "นาแต้",
            "zipcodes": [
              "37000"
            ]
          }
        ]
      },
      {
        "name": "ชานุมาน",
        "subdistricts": [
          {
            "name": "ชานุมาน",
            "zipcodes": [
              "37210"
            ]
          },
          {
            "name": "โคกสาร",
            "zipcodes": [
              "37210"
            ]
          },
          {
            "name": "คำเขื่อนแก้ว",
            "zipcodes": [
              "37210"
            ]
          },
          {
            "name": "โคกก่ง",
            "zipcodes": [
              "37210"
            ]
          },
          {
            "name": "ป่าก่อ",
            "zipcodes": [
              "37210"
            ]
          }
        ]
      },
      {
        "name": "ปทุมราชวงศา",
        "subdistricts": [
          {
            "name": "หนองข่า",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "คำโพน",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "นาหว้า",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "ลือ",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "ห้วย",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "โนนงาม",
            "zipcodes": [
              "37110"
            ]
          },
          {
            "name": "นาป่าแซง",
            "zipcodes": [
              "37110"
            ]
          }
        ]
      },
      {
        "name": "พนา",
        "subdistricts": [
          {
            "name": "พนา",
            "zipcodes": [
              "37180"
            ]
          },
          {
            "name": "จานลาน",
            "zipcodes": [
              "37180"
            ]
          },
          {
            "name": "ไม้กลอน",
            "zipcodes": [
              "37180"
            ]
          },
          {
            "name": "พระเหลา",
            "zipcodes": [
              "37180"
            ]
          }
        ]
      },
      {
        "name": "เสนางคนิคม",
        "subdistricts": [
          {
            "name": "เสนางคนิคม",
            "zipcodes": [
              "37290"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "37290"
            ]
          },
          {
            "name": "ไร่สีสุก",
            "zipcodes": [
              "37290"
            ]
          },
          {
            "name": "นาเวียง",
            "zipcodes": [
              "37290"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "37290"
            ]
          },
          {
            "name": "หนองสามสี",
            "zipcodes": [
              "37290"
            ]
          }
        ]
      },
      {
        "name": "หัวตะพาน",
        "subdistricts": [
          {
            "name": "หัวตะพาน",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "คำพระ",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "เค็งใหญ่",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "หนองแก้ว",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "โพนเมืองน้อย",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "สร้างถ่อน้อย",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "จิกดู่",
            "zipcodes": [
              "37240"
            ]
          },
          {
            "name": "รัตนวารี",
            "zipcodes": [
              "37240"
            ]
          }
        ]
      },
      {
        "name": "ลืออำนาจ",
        "subdistricts": [
          {
            "name": "อำนาจ",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ดงมะยาง",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "เปือย",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ดงบัง",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "ไร่ขี",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "แมด",
            "zipcodes": [
              "37000"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "37000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "หนองบัวลำภู",
    "districts": [
      {
        "name": "เมืองหนองบัวลำภู",
        "subdistricts": [
          {
            "name": "หนองบัว",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "หนองภัยศูนย์",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "หนองสวรรค์",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "หัวนา",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "บ้านขาม",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "นามะเฟือง",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "บ้านพร้าว",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "โนนขมิ้น",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "ลำภู",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "กุดจิก",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "โนนทัน",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "นาคำไฮ",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "ป่าไม้งาม",
            "zipcodes": [
              "39000"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "39000"
            ]
          }
        ]
      },
      {
        "name": "นากลาง",
        "subdistricts": [
          {
            "name": "นากลาง",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "ด่านช้าง",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "กุดดินจี่",
            "zipcodes": [
              "39350"
            ]
          },
          {
            "name": "ฝั่งแดง",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "เก่ากลอย",
            "zipcodes": [
              "39350"
            ]
          },
          {
            "name": "โนนเมือง",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "อุทัยสวรรค์",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "ดงสวรรค์",
            "zipcodes": [
              "39350"
            ]
          },
          {
            "name": "กุดแห่",
            "zipcodes": [
              "39170"
            ]
          }
        ]
      },
      {
        "name": "โนนสัง",
        "subdistricts": [
          {
            "name": "โนนสัง",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "บ้านถิ่น",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "หนองเรือ",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "กุดดู่",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "บ้านค้อ",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "โนนเมือง",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "โคกใหญ่",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "โคกม่วง",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "39140"
            ]
          },
          {
            "name": "ปางกู่",
            "zipcodes": [
              "39140"
            ]
          }
        ]
      },
      {
        "name": "ศรีบุญเรือง",
        "subdistricts": [
          {
            "name": "เมืองใหม่",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "ศรีบุญเรือง",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "หนองบัวใต้",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "กุดสะเทียน",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "นากอก",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "ยางหล่อ",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "โนนม่วง",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "หนองกุงแก้ว",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "หนองแก",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "ทรายทอง",
            "zipcodes": [
              "39180"
            ]
          },
          {
            "name": "หันนางาม",
            "zipcodes": [
              "39180"
            ]
          }
        ]
      },
      {
        "name": "สุวรรณคูหา",
        "subdistricts": [
          {
            "name": "นาสี",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "นาด่าน",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "ดงมะไฟ",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "สุวรรณคูหา",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "บุญทัน",
            "zipcodes": [
              "39270"
            ]
          },
          {
            "name": "กุดผึ้ง",
            "zipcodes": [
              "39270"
            ]
          }
        ]
      },
      {
        "name": "นาวัง",
        "subdistricts": [
          {
            "name": "นาเหล่า",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "นาแก",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "วังปลาป้อม",
            "zipcodes": [
              "39170"
            ]
          },
          {
            "name": "เทพคีรี",
            "zipcodes": [
              "39170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ขอนแก่น",
    "districts": [
      {
        "name": "เมืองขอนแก่น",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "สำราญ",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "โคกสี",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "ท่าพระ",
            "zipcodes": [
              "40260"
            ]
          },
          {
            "name": "บ้านทุ่ม",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "พระลับ",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "สาวะถี",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "บ้านหว้า",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "บ้านค้อ",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "แดงใหญ่",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "ดอนช้าง",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "ดอนหัน",
            "zipcodes": [
              "40260"
            ]
          },
          {
            "name": "ศิลา",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "บ้านเป็ด",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "หนองตูม",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "บึงเนียม",
            "zipcodes": [
              "40000"
            ]
          },
          {
            "name": "โนนท่อน",
            "zipcodes": [
              "40000"
            ]
          }
        ]
      },
      {
        "name": "บ้านฝาง",
        "subdistricts": [
          {
            "name": "หนองบัว",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "ป่าหวายนั่ง",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "โนนฆ้อง",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "ป่ามะนาว",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "บ้านฝาง",
            "zipcodes": [
              "40270"
            ]
          },
          {
            "name": "โคกงาม",
            "zipcodes": [
              "40270"
            ]
          }
        ]
      },
      {
        "name": "พระยืน",
        "subdistricts": [
          {
            "name": "พระยืน",
            "zipcodes": [
              "40320"
            ]
          },
          {
            "name": "พระบุ",
            "zipcodes": [
              "40320"
            ]
          },
          {
            "name": "บ้านโต้น",
            "zipcodes": [
              "40320"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "40320"
            ]
          },
          {
            "name": "ขามป้อม",
            "zipcodes": [
              "40320"
            ]
          }
        ]
      },
      {
        "name": "หนองเรือ",
        "subdistricts": [
          {
            "name": "หนองเรือ",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "บ้านเม็ง",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "บ้านกง",
            "zipcodes": [
              "40240"
            ]
          },
          {
            "name": "ยางคำ",
            "zipcodes": [
              "40240"
            ]
          },
          {
            "name": "จระเข้",
            "zipcodes": [
              "40240"
            ]
          },
          {
            "name": "โนนทอง",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "กุดกว้าง",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "โนนทัน",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "40210"
            ]
          },
          {
            "name": "บ้านผือ",
            "zipcodes": [
              "40240"
            ]
          }
        ]
      },
      {
        "name": "ชุมแพ",
        "subdistricts": [
          {
            "name": "ชุมแพ",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "โนนหัน",
            "zipcodes": [
              "40290"
            ]
          },
          {
            "name": "นาหนองทุ่ม",
            "zipcodes": [
              "40290"
            ]
          },
          {
            "name": "โนนอุดม",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "ขัวเรียง",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "ไชยสอ",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "วังหินลาด",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "นาเพียง",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "หนองเขียด",
            "zipcodes": [
              "40290"
            ]
          },
          {
            "name": "หนองเสาเล้า",
            "zipcodes": [
              "40130"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "40290"
            ]
          }
        ]
      },
      {
        "name": "สีชมพู",
        "subdistricts": [
          {
            "name": "สีชมพู",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "ศรีสุข",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "นาจาน",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "วังเพิ่ม",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "ซำยาง",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "หนองแดง",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "ดงลาน",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "บริบูรณ์",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "40220"
            ]
          },
          {
            "name": "ภูห่าน",
            "zipcodes": [
              "40220"
            ]
          }
        ]
      },
      {
        "name": "น้ำพอง",
        "subdistricts": [
          {
            "name": "น้ำพอง",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "วังชัย",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "บัวใหญ่",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "สะอาด",
            "zipcodes": [
              "40310"
            ]
          },
          {
            "name": "ม่วงหวาน",
            "zipcodes": [
              "40310"
            ]
          },
          {
            "name": "บ้านขาม",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "บัวเงิน",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "ท่ากระเสริม",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "พังทุย",
            "zipcodes": [
              "40140"
            ]
          },
          {
            "name": "กุดน้ำใส",
            "zipcodes": [
              "40140"
            ]
          }
        ]
      },
      {
        "name": "อุบลรัตน์",
        "subdistricts": [
          {
            "name": "โคกสูง",
            "zipcodes": [
              "40250"
            ]
          },
          {
            "name": "บ้านดง",
            "zipcodes": [
              "40250"
            ]
          },
          {
            "name": "เขื่อนอุบลรัตน์",
            "zipcodes": [
              "40250"
            ]
          },
          {
            "name": "นาคำ",
            "zipcodes": [
              "40250"
            ]
          },
          {
            "name": "ศรีสุขสำราญ",
            "zipcodes": [
              "40250"
            ]
          },
          {
            "name": "ทุ่งโป่ง",
            "zipcodes": [
              "40250"
            ]
          }
        ]
      },
      {
        "name": "กระนวน",
        "subdistricts": [
          {
            "name": "หนองโก",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "หนองกุงใหญ่",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "ห้วยโจด",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "บ้านฝาง",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "ดูนสาด",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "หนองโน",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "น้ำอ้อม",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "หัวนาคำ",
            "zipcodes": [
              "40170"
            ]
          }
        ]
      },
      {
        "name": "บ้านไผ่",
        "subdistricts": [
          {
            "name": "บ้านไผ่",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "ในเมือง",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "เมืองเพีย",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "บ้านลาน",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "แคนเหนือ",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "ภูเหล็ก",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "ป่าปอ",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "หินตั้ง",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "หนองน้ำใส",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "หัวหนอง",
            "zipcodes": [
              "40110"
            ]
          }
        ]
      },
      {
        "name": "เปือยน้อย",
        "subdistricts": [
          {
            "name": "เปือยน้อย",
            "zipcodes": [
              "40340"
            ]
          },
          {
            "name": "วังม่วง",
            "zipcodes": [
              "40340"
            ]
          },
          {
            "name": "ขามป้อม",
            "zipcodes": [
              "40340"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "40340"
            ]
          }
        ]
      },
      {
        "name": "พล",
        "subdistricts": [
          {
            "name": "เมืองพล",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "โจดหนองแก",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "เก่างิ้ว",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "หนองมะเขือ",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "หนองแวงโสกพระ",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "เพ็กใหญ่",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "โคกสง่า",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "หนองแวงนางเบ้า",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "ลอมคอม",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "โนนข่า",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "โสกนกเต็น",
            "zipcodes": [
              "40120"
            ]
          },
          {
            "name": "หัวทุ่ง",
            "zipcodes": [
              "40120"
            ]
          }
        ]
      },
      {
        "name": "แวงใหญ่",
        "subdistricts": [
          {
            "name": "คอนฉิม",
            "zipcodes": [
              "40330"
            ]
          },
          {
            "name": "ใหม่นาเพียง",
            "zipcodes": [
              "40330"
            ]
          },
          {
            "name": "โนนทอง",
            "zipcodes": [
              "40330"
            ]
          },
          {
            "name": "แวงใหญ่",
            "zipcodes": [
              "40330"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "40330"
            ]
          }
        ]
      },
      {
        "name": "แวงน้อย",
        "subdistricts": [
          {
            "name": "แวงน้อย",
            "zipcodes": [
              "40230"
            ]
          },
          {
            "name": "ก้านเหลือง",
            "zipcodes": [
              "40230"
            ]
          },
          {
            "name": "ท่านางแนว",
            "zipcodes": [
              "40230"
            ]
          },
          {
            "name": "ละหานนา",
            "zipcodes": [
              "40230"
            ]
          },
          {
            "name": "ท่าวัด",
            "zipcodes": [
              "40230"
            ]
          },
          {
            "name": "ทางขวาง",
            "zipcodes": [
              "40230"
            ]
          }
        ]
      },
      {
        "name": "หนองสองห้อง",
        "subdistricts": [
          {
            "name": "หนองสองห้อง",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "คึมชาด",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "โนนธาตุ",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "ตะกั่วป่า",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "หนองเม็ก",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "ดอนดู่",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "ดงเค็ง",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "หันโจด",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "ดอนดั่ง",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "40190"
            ]
          },
          {
            "name": "หนองไผ่ล้อม",
            "zipcodes": [
              "40190"
            ]
          }
        ]
      },
      {
        "name": "ภูเวียง",
        "subdistricts": [
          {
            "name": "บ้านเรือ",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "หว้าทอง",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "กุดขอนแก่น",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "นาชุมแสง",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "นาหว้า",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "หนองกุงธนสาร",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "หนองกุงเซิน",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "สงเปือย",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "ทุ่งชมพู",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "ดินดำ",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "ภูเวียง",
            "zipcodes": [
              "40150"
            ]
          }
        ]
      },
      {
        "name": "มัญจาคีรี",
        "subdistricts": [
          {
            "name": "กุดเค้า",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "สวนหม่อน",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "หนองแปน",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "โพนเพ็ก",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "คำแคน",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "นาข่า",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "นางาม",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "ท่าศาลา",
            "zipcodes": [
              "40160"
            ]
          }
        ]
      },
      {
        "name": "ชนบท",
        "subdistricts": [
          {
            "name": "ชนบท",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "กุดเพียขอม",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "วังแสง",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "ห้วยแก",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "บ้านแท่น",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "ศรีบุญเรือง",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "โนนพะยอม",
            "zipcodes": [
              "40180"
            ]
          },
          {
            "name": "ปอแดง",
            "zipcodes": [
              "40180"
            ]
          }
        ]
      },
      {
        "name": "เขาสวนกวาง",
        "subdistricts": [
          {
            "name": "เขาสวนกวาง",
            "zipcodes": [
              "40280"
            ]
          },
          {
            "name": "ดงเมืองแอม",
            "zipcodes": [
              "40280"
            ]
          },
          {
            "name": "นางิ้ว",
            "zipcodes": [
              "40280"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "40280"
            ]
          },
          {
            "name": "คำม่วง",
            "zipcodes": [
              "40280"
            ]
          }
        ]
      },
      {
        "name": "ภูผาม่าน",
        "subdistricts": [
          {
            "name": "โนนคอม",
            "zipcodes": [
              "40350"
            ]
          },
          {
            "name": "นาฝาย",
            "zipcodes": [
              "40350"
            ]
          },
          {
            "name": "ภูผาม่าน",
            "zipcodes": [
              "40350"
            ]
          },
          {
            "name": "วังสวาบ",
            "zipcodes": [
              "40350"
            ]
          },
          {
            "name": "ห้วยม่วง",
            "zipcodes": [
              "40350"
            ]
          }
        ]
      },
      {
        "name": "ซำสูง",
        "subdistricts": [
          {
            "name": "กระนวน",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "คำแมด",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "บ้านโนน",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "คูคำ",
            "zipcodes": [
              "40170"
            ]
          },
          {
            "name": "ห้วยเตย",
            "zipcodes": [
              "40170"
            ]
          }
        ]
      },
      {
        "name": "โคกโพธิ์ไชย",
        "subdistricts": [
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "โพธิ์ไชย",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "ซับสมบูรณ์",
            "zipcodes": [
              "40160"
            ]
          },
          {
            "name": "นาแพง",
            "zipcodes": [
              "40160"
            ]
          }
        ]
      },
      {
        "name": "หนองนาคำ",
        "subdistricts": [
          {
            "name": "กุดธาตุ",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "ขนวน",
            "zipcodes": [
              "40150"
            ]
          }
        ]
      },
      {
        "name": "บ้านแฮด",
        "subdistricts": [
          {
            "name": "บ้านแฮด",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "โคกสำราญ",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "หนองแซง",
            "zipcodes": [
              "40110"
            ]
          }
        ]
      },
      {
        "name": "โนนศิลา",
        "subdistricts": [
          {
            "name": "โนนศิลา",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "หนองปลาหมอ",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "บ้านหัน",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "เปือยใหญ่",
            "zipcodes": [
              "40110"
            ]
          },
          {
            "name": "โนนแดง",
            "zipcodes": [
              "40110"
            ]
          }
        ]
      },
      {
        "name": "เวียงเก่า",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "เมืองเก่าพัฒนา",
            "zipcodes": [
              "40150"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "40150"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อุดรธานี",
    "districts": [
      {
        "name": "เมืองอุดรธานี",
        "subdistricts": [
          {
            "name": "หมากแข้ง",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "นิคมสงเคราะห์",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "บ้านขาว",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "บ้านตาด",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "โนนสูง",
            "zipcodes": [
              "41330"
            ]
          },
          {
            "name": "หมูม่น",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "เชียงยืน",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "หนองนาคำ",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "กุดสระ",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "บ้านเลื่อม",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "เชียงพิณ",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "สามพร้าว",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "นาข่า",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "บ้านจั่น",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "หนองขอนกว้าง",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "นากว้าง",
            "zipcodes": [
              "41000"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "41330"
            ]
          }
        ]
      },
      {
        "name": "กุดจับ",
        "subdistricts": [
          {
            "name": "กุดจับ",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "ปะโค",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "ขอนยูง",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "เชียงเพ็ง",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "สร้างก่อ",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "เมืองเพีย",
            "zipcodes": [
              "41250"
            ]
          },
          {
            "name": "ตาลเลียน",
            "zipcodes": [
              "41250"
            ]
          }
        ]
      },
      {
        "name": "หนองวัวซอ",
        "subdistricts": [
          {
            "name": "หมากหญ้า",
            "zipcodes": [
              "41360"
            ]
          },
          {
            "name": "หนองอ้อ",
            "zipcodes": [
              "41220"
            ]
          },
          {
            "name": "อูบมุง",
            "zipcodes": [
              "41220"
            ]
          },
          {
            "name": "กุดหมากไฟ",
            "zipcodes": [
              "41220"
            ]
          },
          {
            "name": "น้ำพ่น",
            "zipcodes": [
              "41360"
            ]
          },
          {
            "name": "หนองบัวบาน",
            "zipcodes": [
              "41360"
            ]
          },
          {
            "name": "โนนหวาย",
            "zipcodes": [
              "41220"
            ]
          },
          {
            "name": "หนองวัวซอ",
            "zipcodes": [
              "41360"
            ]
          }
        ]
      },
      {
        "name": "กุมภวาปี",
        "subdistricts": [
          {
            "name": "ตูมใต้",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "พันดอน",
            "zipcodes": [
              "41370"
            ]
          },
          {
            "name": "เวียงคำ",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "แชแล",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "เชียงแหว",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "ห้วยเกิ้ง",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "เสอเพลอ",
            "zipcodes": [
              "41370"
            ]
          },
          {
            "name": "สีออ",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "ปะโค",
            "zipcodes": [
              "41370"
            ]
          },
          {
            "name": "ผาสุก",
            "zipcodes": [
              "41370"
            ]
          },
          {
            "name": "ท่าลี่",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "กุมภวาปี",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "หนองหว้า",
            "zipcodes": [
              "41110"
            ]
          }
        ]
      },
      {
        "name": "โนนสะอาด",
        "subdistricts": [
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "41240"
            ]
          },
          {
            "name": "บุ่งแก้ว",
            "zipcodes": [
              "41240"
            ]
          },
          {
            "name": "โพธิ์ศรีสำราญ",
            "zipcodes": [
              "41240"
            ]
          },
          {
            "name": "ทมนางาม",
            "zipcodes": [
              "41240"
            ]
          },
          {
            "name": "หนองกุงศรี",
            "zipcodes": [
              "41240"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "41240"
            ]
          }
        ]
      },
      {
        "name": "หนองหาน",
        "subdistricts": [
          {
            "name": "หนองหาน",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "หนองเม็ก",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "พังงู",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "สะแบง",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "สร้อยพร้าว",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "บ้านเชียง",
            "zipcodes": [
              "41320"
            ]
          },
          {
            "name": "บ้านยา",
            "zipcodes": [
              "41320"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "ผักตบ",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "ดอนหายโศก",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "หนองสระปลา",
            "zipcodes": [
              "41320"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งฝน",
        "subdistricts": [
          {
            "name": "ทุ่งฝน",
            "zipcodes": [
              "41310"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "41310"
            ]
          },
          {
            "name": "นาชุมแสง",
            "zipcodes": [
              "41310"
            ]
          },
          {
            "name": "นาทม",
            "zipcodes": [
              "41310"
            ]
          }
        ]
      },
      {
        "name": "ไชยวาน",
        "subdistricts": [
          {
            "name": "ไชยวาน",
            "zipcodes": [
              "41290"
            ]
          },
          {
            "name": "หนองหลัก",
            "zipcodes": [
              "41290"
            ]
          },
          {
            "name": "คำเลาะ",
            "zipcodes": [
              "41290"
            ]
          },
          {
            "name": "โพนสูง",
            "zipcodes": [
              "41290"
            ]
          }
        ]
      },
      {
        "name": "ศรีธาตุ",
        "subdistricts": [
          {
            "name": "ศรีธาตุ",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "จำปี",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "บ้านโปร่ง",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "หัวนาคำ",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "หนองนกเขียน",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "นายูง",
            "zipcodes": [
              "41230"
            ]
          },
          {
            "name": "ตาดทอง",
            "zipcodes": [
              "41230"
            ]
          }
        ]
      },
      {
        "name": "วังสามหมอ",
        "subdistricts": [
          {
            "name": "หนองกุงทับม้า",
            "zipcodes": [
              "41280"
            ]
          },
          {
            "name": "หนองหญ้าไซ",
            "zipcodes": [
              "41280"
            ]
          },
          {
            "name": "บะยาว",
            "zipcodes": [
              "41280"
            ]
          },
          {
            "name": "ผาสุก",
            "zipcodes": [
              "41280"
            ]
          },
          {
            "name": "คำโคกสูง",
            "zipcodes": [
              "41280"
            ]
          },
          {
            "name": "วังสามหมอ",
            "zipcodes": [
              "41280"
            ]
          }
        ]
      },
      {
        "name": "บ้านดุง",
        "subdistricts": [
          {
            "name": "ศรีสุทโธ",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "บ้านดุง",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "ดงเย็น",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "โพนสูง",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "อ้อมกอ",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "บ้านจันทน์",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "บ้านชัย",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "นาไหม",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "ถ่อนนาลับ",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "บ้านม่วง",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "บ้านตาด",
            "zipcodes": [
              "41190"
            ]
          },
          {
            "name": "นาคำ",
            "zipcodes": [
              "41190"
            ]
          }
        ]
      },
      {
        "name": "บ้านผือ",
        "subdistricts": [
          {
            "name": "บ้านผือ",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "หายโศก",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "เขือน้ำ",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "คำบง",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "โนนทอง",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "ข้าวสาร",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "จำปาโมง",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "กลางใหญ่",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "เมืองพาน",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "คำด้วง",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "หนองหัวคู",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "บ้านค้อ",
            "zipcodes": [
              "41160"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "41160"
            ]
          }
        ]
      },
      {
        "name": "น้ำโสม",
        "subdistricts": [
          {
            "name": "นางัว",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "น้ำโสม",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "บ้านหยวก",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "โสมเยี่ยม",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "ศรีสำราญ",
            "zipcodes": [
              "41210"
            ]
          },
          {
            "name": "สามัคคี",
            "zipcodes": [
              "41210"
            ]
          }
        ]
      },
      {
        "name": "เพ็ญ",
        "subdistricts": [
          {
            "name": "เพ็ญ",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "บ้านธาตุ",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "นาพู่",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "เชียงหวาง",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "สุมเส้า",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "นาบัว",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "จอมศรี",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "เตาไห",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "โคกกลาง",
            "zipcodes": [
              "41150"
            ]
          },
          {
            "name": "สร้างแป้น",
            "zipcodes": [
              "41150"
            ]
          }
        ]
      },
      {
        "name": "สร้างคอม",
        "subdistricts": [
          {
            "name": "สร้างคอม",
            "zipcodes": [
              "41260"
            ]
          },
          {
            "name": "เชียงดา",
            "zipcodes": [
              "41260"
            ]
          },
          {
            "name": "บ้านยวด",
            "zipcodes": [
              "41260"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "41260"
            ]
          },
          {
            "name": "นาสะอาด",
            "zipcodes": [
              "41260"
            ]
          },
          {
            "name": "บ้านหินโงม",
            "zipcodes": [
              "41260"
            ]
          }
        ]
      },
      {
        "name": "หนองแสง",
        "subdistricts": [
          {
            "name": "หนองแสง",
            "zipcodes": [
              "41340"
            ]
          },
          {
            "name": "แสงสว่าง",
            "zipcodes": [
              "41340"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "41340"
            ]
          },
          {
            "name": "ทับกุง",
            "zipcodes": [
              "41340"
            ]
          }
        ]
      },
      {
        "name": "นายูง",
        "subdistricts": [
          {
            "name": "นายูง",
            "zipcodes": [
              "41380"
            ]
          },
          {
            "name": "บ้านก้อง",
            "zipcodes": [
              "41380"
            ]
          },
          {
            "name": "นาแค",
            "zipcodes": [
              "41380"
            ]
          },
          {
            "name": "โนนทอง",
            "zipcodes": [
              "41380"
            ]
          }
        ]
      },
      {
        "name": "พิบูลย์รักษ์",
        "subdistricts": [
          {
            "name": "บ้านแดง",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "นาทราย",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "ดอนกลอย",
            "zipcodes": [
              "41130"
            ]
          }
        ]
      },
      {
        "name": "กู่แก้ว",
        "subdistricts": [
          {
            "name": "บ้านจีต",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "โนนทองอินทร์",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "ค้อใหญ่",
            "zipcodes": [
              "41130"
            ]
          },
          {
            "name": "คอนสาย",
            "zipcodes": [
              "41130"
            ]
          }
        ]
      },
      {
        "name": "ประจักษ์ศิลปาคม",
        "subdistricts": [
          {
            "name": "นาม่วง",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "ห้วยสามพาด",
            "zipcodes": [
              "41110"
            ]
          },
          {
            "name": "อุ่มจาน",
            "zipcodes": [
              "41110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "เลย",
    "districts": [
      {
        "name": "เมืองเลย",
        "subdistricts": [
          {
            "name": "กุดป่อง",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "เมือง",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "นาอ้อ",
            "zipcodes": [
              "42100"
            ]
          },
          {
            "name": "กกดู่",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "น้ำหมาน",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "เสี้ยว",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "นาอาน",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "นาโป่ง",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "นาดินดำ",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "น้ำสวย",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "ชัยพฤกษ์",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "นาแขม",
            "zipcodes": [
              "42000"
            ]
          },
          {
            "name": "ศรีสองรัก",
            "zipcodes": [
              "42100"
            ]
          },
          {
            "name": "กกทอง",
            "zipcodes": [
              "42000"
            ]
          }
        ]
      },
      {
        "name": "นาด้วง",
        "subdistricts": [
          {
            "name": "นาด้วง",
            "zipcodes": [
              "42210"
            ]
          },
          {
            "name": "นาดอกคำ",
            "zipcodes": [
              "42210"
            ]
          },
          {
            "name": "ท่าสะอาด",
            "zipcodes": [
              "42210"
            ]
          },
          {
            "name": "ท่าสวรรค์",
            "zipcodes": [
              "42210"
            ]
          }
        ]
      },
      {
        "name": "เชียงคาน",
        "subdistricts": [
          {
            "name": "เชียงคาน",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "ธาตุ",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "นาซ่าว",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "เขาแก้ว",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "ปากตม",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "บุฮม",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "จอมศรี",
            "zipcodes": [
              "42110"
            ]
          },
          {
            "name": "หาดทรายขาว",
            "zipcodes": [
              "42110"
            ]
          }
        ]
      },
      {
        "name": "ปากชม",
        "subdistricts": [
          {
            "name": "ปากชม",
            "zipcodes": [
              "42150"
            ]
          },
          {
            "name": "เชียงกลม",
            "zipcodes": [
              "42150"
            ]
          },
          {
            "name": "หาดคัมภีร์",
            "zipcodes": [
              "42150"
            ]
          },
          {
            "name": "ห้วยบ่อซืน",
            "zipcodes": [
              "42150"
            ]
          },
          {
            "name": "ห้วยพิชัย",
            "zipcodes": [
              "42150"
            ]
          },
          {
            "name": "ชมเจริญ",
            "zipcodes": [
              "42150"
            ]
          }
        ]
      },
      {
        "name": "ด่านซ้าย",
        "subdistricts": [
          {
            "name": "ด่านซ้าย",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "ปากหมัน",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "โคกงาม",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "โพนสูง",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "อิปุ่ม",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "กกสะทอน",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "โป่ง",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "วังยาว",
            "zipcodes": [
              "42120"
            ]
          },
          {
            "name": "นาหอ",
            "zipcodes": [
              "42120"
            ]
          }
        ]
      },
      {
        "name": "นาแห้ว",
        "subdistricts": [
          {
            "name": "นาแห้ว",
            "zipcodes": [
              "42170"
            ]
          },
          {
            "name": "แสงภา",
            "zipcodes": [
              "42170"
            ]
          },
          {
            "name": "นาพึง",
            "zipcodes": [
              "42170"
            ]
          },
          {
            "name": "นามาลา",
            "zipcodes": [
              "42170"
            ]
          },
          {
            "name": "เหล่ากอหก",
            "zipcodes": [
              "42170"
            ]
          }
        ]
      },
      {
        "name": "ภูเรือ",
        "subdistricts": [
          {
            "name": "หนองบัว",
            "zipcodes": [
              "42160"
            ]
          },
          {
            "name": "ท่าศาลา",
            "zipcodes": [
              "42160"
            ]
          },
          {
            "name": "ร่องจิก",
            "zipcodes": [
              "42160"
            ]
          },
          {
            "name": "ปลาบ่า",
            "zipcodes": [
              "42160"
            ]
          },
          {
            "name": "ลาดค่าง",
            "zipcodes": [
              "42160"
            ]
          },
          {
            "name": "สานตม",
            "zipcodes": [
              "42160"
            ]
          }
        ]
      },
      {
        "name": "ท่าลี่",
        "subdistricts": [
          {
            "name": "ท่าลี่",
            "zipcodes": [
              "42140"
            ]
          },
          {
            "name": "หนองผือ",
            "zipcodes": [
              "42140"
            ]
          },
          {
            "name": "อาฮี",
            "zipcodes": [
              "42140"
            ]
          },
          {
            "name": "น้ำแคม",
            "zipcodes": [
              "42140"
            ]
          },
          {
            "name": "โคกใหญ่",
            "zipcodes": [
              "42140"
            ]
          },
          {
            "name": "น้ำทูน",
            "zipcodes": [
              "42140"
            ]
          }
        ]
      },
      {
        "name": "วังสะพุง",
        "subdistricts": [
          {
            "name": "วังสะพุง",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "หนองหญ้าปล้อง",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "หนองงิ้ว",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "ปากปวน",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "ผาน้อย",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "ผาบิ้ง",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "เขาหลวง",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "โคกขมิ้น",
            "zipcodes": [
              "42130"
            ]
          },
          {
            "name": "ศรีสงคราม",
            "zipcodes": [
              "42130"
            ]
          }
        ]
      },
      {
        "name": "ภูกระดึง",
        "subdistricts": [
          {
            "name": "ศรีฐาน",
            "zipcodes": [
              "42180"
            ]
          },
          {
            "name": "ผานกเค้า",
            "zipcodes": [
              "42180"
            ]
          },
          {
            "name": "ภูกระดึง",
            "zipcodes": [
              "42180"
            ]
          },
          {
            "name": "ห้วยส้ม",
            "zipcodes": [
              "42180"
            ]
          }
        ]
      },
      {
        "name": "ภูหลวง",
        "subdistricts": [
          {
            "name": "ภูหอ",
            "zipcodes": [
              "42230"
            ]
          },
          {
            "name": "หนองคัน",
            "zipcodes": [
              "42230"
            ]
          },
          {
            "name": "ห้วยสีเสียด",
            "zipcodes": [
              "42230"
            ]
          },
          {
            "name": "เลยวังไสย์",
            "zipcodes": [
              "42230"
            ]
          },
          {
            "name": "แก่งศรีภูมิ",
            "zipcodes": [
              "42230"
            ]
          }
        ]
      },
      {
        "name": "ผาขาว",
        "subdistricts": [
          {
            "name": "ผาขาว",
            "zipcodes": [
              "42240"
            ]
          },
          {
            "name": "ท่าช้างคล้อง",
            "zipcodes": [
              "42240"
            ]
          },
          {
            "name": "โนนปอแดง",
            "zipcodes": [
              "42240"
            ]
          },
          {
            "name": "โนนป่าซาง",
            "zipcodes": [
              "42240"
            ]
          },
          {
            "name": "บ้านเพิ่ม",
            "zipcodes": [
              "42240"
            ]
          }
        ]
      },
      {
        "name": "เอราวัณ",
        "subdistricts": [
          {
            "name": "เอราวัณ",
            "zipcodes": [
              "42220"
            ]
          },
          {
            "name": "ผาอินทร์แปลง",
            "zipcodes": [
              "42220"
            ]
          },
          {
            "name": "ผาสามยอด",
            "zipcodes": [
              "42220"
            ]
          },
          {
            "name": "ทรัพย์ไพวัลย์",
            "zipcodes": [
              "42220"
            ]
          }
        ]
      },
      {
        "name": "หนองหิน",
        "subdistricts": [
          {
            "name": "หนองหิน",
            "zipcodes": [
              "42190"
            ]
          },
          {
            "name": "ตาดข่า",
            "zipcodes": [
              "42190"
            ]
          },
          {
            "name": "ปวนพุ",
            "zipcodes": [
              "42190"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "หนองคาย",
    "districts": [
      {
        "name": "เมืองหนองคาย",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "มีชัย",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "กวนวัน",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "เวียงคุก",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "วัดธาตุ",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "หาดคำ",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "หินโงม",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "บ้านเดื่อ",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "ค่ายบกหวาน",
            "zipcodes": [
              "43100"
            ]
          },
          {
            "name": "สองห้อง",
            "zipcodes": [
              "43100"
            ]
          },
          {
            "name": "พระธาตุบังพวน",
            "zipcodes": [
              "43100"
            ]
          },
          {
            "name": "หนองกอมเกาะ",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "ปะโค",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "เมืองหมี",
            "zipcodes": [
              "43000"
            ]
          },
          {
            "name": "สีกาย",
            "zipcodes": [
              "43000"
            ]
          }
        ]
      },
      {
        "name": "ท่าบ่อ",
        "subdistricts": [
          {
            "name": "ท่าบ่อ",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "น้ำโมง",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "กองนาง",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "โคกคอน",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "บ้านเดื่อ",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "บ้านถ่อน",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "บ้านว่าน",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "นาข่า",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "โพนสา",
            "zipcodes": [
              "43110"
            ]
          },
          {
            "name": "หนองนาง",
            "zipcodes": [
              "43110"
            ]
          }
        ]
      },
      {
        "name": "โพนพิสัย",
        "subdistricts": [
          {
            "name": "จุมพล",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "วัดหลวง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "กุดบง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "ชุมช้าง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "เหล่าต่างคำ",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "นาหนัง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "เซิม",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "บ้านผือ",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "สร้างนางขาว",
            "zipcodes": [
              "43120"
            ]
          }
        ]
      },
      {
        "name": "ศรีเชียงใหม่",
        "subdistricts": [
          {
            "name": "พานพร้าว",
            "zipcodes": [
              "43130"
            ]
          },
          {
            "name": "บ้านหม้อ",
            "zipcodes": [
              "43130"
            ]
          },
          {
            "name": "พระพุทธบาท",
            "zipcodes": [
              "43130"
            ]
          },
          {
            "name": "หนองปลาปาก",
            "zipcodes": [
              "43130"
            ]
          }
        ]
      },
      {
        "name": "สังคม",
        "subdistricts": [
          {
            "name": "แก้งไก่",
            "zipcodes": [
              "43160"
            ]
          },
          {
            "name": "ผาตั้ง",
            "zipcodes": [
              "43160"
            ]
          },
          {
            "name": "บ้านม่วง",
            "zipcodes": [
              "43160"
            ]
          },
          {
            "name": "นางิ้ว",
            "zipcodes": [
              "43160"
            ]
          },
          {
            "name": "สังคม",
            "zipcodes": [
              "43160"
            ]
          }
        ]
      },
      {
        "name": "สระใคร",
        "subdistricts": [
          {
            "name": "สระใคร",
            "zipcodes": [
              "43100"
            ]
          },
          {
            "name": "คอกช้าง",
            "zipcodes": [
              "43100"
            ]
          },
          {
            "name": "บ้านฝาง",
            "zipcodes": [
              "43100"
            ]
          }
        ]
      },
      {
        "name": "เฝ้าไร่",
        "subdistricts": [
          {
            "name": "เฝ้าไร่",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "วังหลวง",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "อุดมพร",
            "zipcodes": [
              "43120"
            ]
          }
        ]
      },
      {
        "name": "รัตนวาปี",
        "subdistricts": [
          {
            "name": "รัตนวาปี",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "นาทับไฮ",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "บ้านต้อน",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "พระบาทนาสิงห์",
            "zipcodes": [
              "43120"
            ]
          },
          {
            "name": "โพนแพง",
            "zipcodes": [
              "43120"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ตาก",
        "subdistricts": [
          {
            "name": "โพธิ์ตาก",
            "zipcodes": [
              "43130"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "43130"
            ]
          },
          {
            "name": "ด่านศรีสุข",
            "zipcodes": [
              "43130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "มหาสารคาม",
    "districts": [
      {
        "name": "เมืองมหาสารคาม",
        "subdistricts": [
          {
            "name": "ตลาด",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "เขวา",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "ท่าตูม",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "แวงน่าง",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "โคกก่อ",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "ดอนหว่าน",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "เกิ้ง",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "แก่งเลิงจาน",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "ท่าสองคอน",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "ลาดพัฒนา",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "ห้วยแอ่ง",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "หนองโน",
            "zipcodes": [
              "44000"
            ]
          },
          {
            "name": "บัวค้อ",
            "zipcodes": [
              "44000"
            ]
          }
        ]
      },
      {
        "name": "แกดำ",
        "subdistricts": [
          {
            "name": "แกดำ",
            "zipcodes": [
              "44190"
            ]
          },
          {
            "name": "วังแสง",
            "zipcodes": [
              "44190"
            ]
          },
          {
            "name": "มิตรภาพ",
            "zipcodes": [
              "44190"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "44190"
            ]
          },
          {
            "name": "โนนภิบาล",
            "zipcodes": [
              "44190"
            ]
          }
        ]
      },
      {
        "name": "โกสุมพิสัย",
        "subdistricts": [
          {
            "name": "หัวขวาง",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "ยางน้อย",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "วังยาว",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "เขวาไร่",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "แพง",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "แก้งแก",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "หนองเหล็ก",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "เหล่า",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "เขื่อน",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "หนองบอน",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "ยางท่าแจ้ง",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "แห่ใต้",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "หนองกุงสวรรค์",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "เลิงใต้",
            "zipcodes": [
              "44140"
            ]
          },
          {
            "name": "ดอนกลาง",
            "zipcodes": [
              "44140"
            ]
          }
        ]
      },
      {
        "name": "กันทรวิชัย",
        "subdistricts": [
          {
            "name": "โคกพระ",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "คันธารราษฎร์",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "มะค่า",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "ท่าขอนยาง",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "นาสีนวน",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "ขามเรียง",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "เขวาใหญ่",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "ศรีสุข",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "กุดใส้จ่อ",
            "zipcodes": [
              "44150"
            ]
          },
          {
            "name": "ขามเฒ่าพัฒนา",
            "zipcodes": [
              "44150"
            ]
          }
        ]
      },
      {
        "name": "เชียงยืน",
        "subdistricts": [
          {
            "name": "เชียงยืน",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "หนองซอน",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "ดอนเงิน",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "กู่ทอง",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "นาทอง",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "เสือเฒ่า",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "เหล่าบัวบาน",
            "zipcodes": [
              "44160"
            ]
          }
        ]
      },
      {
        "name": "บรบือ",
        "subdistricts": [
          {
            "name": "บรบือ",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "บ่อใหญ่",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "วังไชย",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองม่วง",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "กำพี้",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "โนนราษี",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "โนนแดง",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองจิก",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "บัวมาศ",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองคูขาด",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "ยาง",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองสิม",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองโก",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "ดอนงัว",
            "zipcodes": [
              "44130"
            ]
          }
        ]
      },
      {
        "name": "นาเชือก",
        "subdistricts": [
          {
            "name": "นาเชือก",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "สำโรง",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "หนองแดง",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "เขวาไร่",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "หนองโพธิ์",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "ปอพาน",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "หนองเม็ก",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "หนองเรือ",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "44170"
            ]
          },
          {
            "name": "สันป่าตอง",
            "zipcodes": [
              "44170"
            ]
          }
        ]
      },
      {
        "name": "พยัคฆภูมิพิสัย",
        "subdistricts": [
          {
            "name": "ปะหลาน",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "ก้ามปู",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "เวียงสะอาด",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "เม็กดำ",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "นาสีนวล",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "ราษฎร์เจริญ",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "หนองบัวแก้ว",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "เมืองเตา",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "ลานสะแก",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "เวียงชัย",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "ราษฎร์พัฒนา",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "เมืองเสือ",
            "zipcodes": [
              "44110"
            ]
          },
          {
            "name": "ภารแอ่น",
            "zipcodes": [
              "44110"
            ]
          }
        ]
      },
      {
        "name": "วาปีปทุม",
        "subdistricts": [
          {
            "name": "หนองแสง",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "ขามป้อม",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "เสือโก้ก",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "ดงใหญ่",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "หัวเรือ",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "แคน",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "งัวบา",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "นาข่า",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "บ้านหวาย",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "หนองไฮ",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "ประชาพัฒนา",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "หนองทุ่ม",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "หนองแสน",
            "zipcodes": [
              "44120"
            ]
          },
          {
            "name": "โคกสีทองหลาง",
            "zipcodes": [
              "44120"
            ]
          }
        ]
      },
      {
        "name": "นาดูน",
        "subdistricts": [
          {
            "name": "นาดูน",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "หนองคู",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "ดงบัง",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "ดงดวน",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "หัวดง",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "ดงยาง",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "กู่สันตรัตน์",
            "zipcodes": [
              "44180"
            ]
          },
          {
            "name": "พระธาตุ",
            "zipcodes": [
              "44180"
            ]
          }
        ]
      },
      {
        "name": "ยางสีสุราช",
        "subdistricts": [
          {
            "name": "ยางสีสุราช",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "นาภู",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "แวงดง",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "บ้านกู่",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "ดงเมือง",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "ขามเรียน",
            "zipcodes": [
              "44210"
            ]
          },
          {
            "name": "หนองบัวสันตุ",
            "zipcodes": [
              "44210"
            ]
          }
        ]
      },
      {
        "name": "กุดรัง",
        "subdistricts": [
          {
            "name": "กุดรัง",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "เลิงแฝก",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "44130"
            ]
          },
          {
            "name": "ห้วยเตย",
            "zipcodes": [
              "44130"
            ]
          }
        ]
      },
      {
        "name": "ชื่นชม",
        "subdistricts": [
          {
            "name": "ชื่นชม",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "กุดปลาดุก",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "เหล่าดอกไม้",
            "zipcodes": [
              "44160"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "44160"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ร้อยเอ็ด",
    "districts": [
      {
        "name": "เมืองร้อยเอ็ด",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "รอบเมือง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "เหนือเมือง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ขอนแก่น",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "สะอาดสมบูรณ์",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "สีแก้ว",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ปอภาร  (ปอพาน)",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "โนนรัง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "หนองแก้ว",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ดงลาน",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "แคนใหญ่",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "โนนตาล",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "เมืองทอง",
            "zipcodes": [
              "45000"
            ]
          }
        ]
      },
      {
        "name": "เกษตรวิสัย",
        "subdistricts": [
          {
            "name": "เกษตรวิสัย",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "เมืองบัว",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "เหล่าหลวง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "สิงห์โคก",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "ดงครั่งใหญ่",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "บ้านฝาง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "กำแพง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "กู่กาสิงห์",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "น้ำอ้อม",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "โนนสว่าง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "ทุ่งทอง",
            "zipcodes": [
              "45150"
            ]
          },
          {
            "name": "ดงครั่งน้อย",
            "zipcodes": [
              "45150"
            ]
          }
        ]
      },
      {
        "name": "ปทุมรัตต์",
        "subdistricts": [
          {
            "name": "บัวแดง",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "ดอกล้ำ",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "หนองแคน",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "โพนสูง",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "โนนสวรรค์",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "สระบัว",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "โนนสง่า",
            "zipcodes": [
              "45190"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "45190"
            ]
          }
        ]
      },
      {
        "name": "จตุรพักตรพิมาน",
        "subdistricts": [
          {
            "name": "หัวช้าง",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "หนองผือ",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "เมืองหงส์",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "โคกล่าม",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "น้ำใส",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ดงแดง",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ดงกลาง",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ป่าสังข์",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "อีง่อง",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ลิ้นฟ้า",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ดู่น้อย",
            "zipcodes": [
              "45180"
            ]
          },
          {
            "name": "ศรีโคตร",
            "zipcodes": [
              "45180"
            ]
          }
        ]
      },
      {
        "name": "ธวัชบุรี",
        "subdistricts": [
          {
            "name": "นิเวศน์",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "ธงธานี",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "ธวัชบุรี",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "อุ่มเม้า",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "มะอึ",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "เขวาทุ่ง",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "ไพศาล",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "เมืองน้อย",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "บึงนคร",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "ราชธานี",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "หนองพอก",
            "zipcodes": [
              "45170"
            ]
          }
        ]
      },
      {
        "name": "พนมไพร",
        "subdistricts": [
          {
            "name": "พนมไพร",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "แสนสุข",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "กุดน้ำใส",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "หนองทัพไทย",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "โพธิ์ใหญ่",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "วารีสวัสดิ์",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "โพธิ์ชัย",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "นานวล",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "คำไฮ",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "ค้อใหญ่",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "ชานุวรรณ",
            "zipcodes": [
              "45140"
            ]
          }
        ]
      },
      {
        "name": "โพนทอง",
        "subdistricts": [
          {
            "name": "แวง",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "โคกกกม่วง",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "นาอุดม",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "สว่าง",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "โพธิ์ทอง",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "โนนชัยศรี",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "โพธิ์ศรีสว่าง",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "อุ่มเม่า",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "คำนาดี",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "พรมสวรรค์",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "สระนกแก้ว",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "วังสามัคคี",
            "zipcodes": [
              "45110"
            ]
          },
          {
            "name": "โคกสูง",
            "zipcodes": [
              "45110"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ชัย",
        "subdistricts": [
          {
            "name": "ขามเปี้ย",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "เชียงใหม่",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "บัวคำ",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "อัคคะคำ",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "สะอาด",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "คำพอุง",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "หนองตาไก้",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "ดอนโอง",
            "zipcodes": [
              "45230"
            ]
          },
          {
            "name": "โพธิ์ศรี",
            "zipcodes": [
              "45230"
            ]
          }
        ]
      },
      {
        "name": "หนองพอก",
        "subdistricts": [
          {
            "name": "หนองพอก",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "บึงงาม",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "ภูเขาทอง",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "กกโพธิ์",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "หนองขุ่นใหญ่",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "รอบเมือง",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "ผาน้ำย้อย",
            "zipcodes": [
              "45210"
            ]
          },
          {
            "name": "ท่าสีดา",
            "zipcodes": [
              "45210"
            ]
          }
        ]
      },
      {
        "name": "เสลภูมิ",
        "subdistricts": [
          {
            "name": "กลาง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "นางาม",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "เมืองไพร",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "นาแซง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "นาเมือง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "วังหลวง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "ท่าม่วง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "ขวาว",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "โพธิ์ทอง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "ภูเงิน",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "เกาะแก้ว",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "นาเลิง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "เหล่าน้อย",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "ศรีวิลัย",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "พรสวรรค์",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "ขวัญเมือง",
            "zipcodes": [
              "45120"
            ]
          },
          {
            "name": "บึงเกลือ",
            "zipcodes": [
              "45120"
            ]
          }
        ]
      },
      {
        "name": "สุวรรณภูมิ",
        "subdistricts": [
          {
            "name": "สระคู",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ดอกไม้",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "นาใหญ่",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "หินกอง",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "เมืองทุ่ง",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "หัวโทน",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "บ่อพันขัน",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "หัวช้าง",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "น้ำคำ",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ห้วยหินลาด",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ช้างเผือก",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ทุ่งกุลา",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "ทุ่งศรีเมือง",
            "zipcodes": [
              "45130"
            ]
          },
          {
            "name": "จำปาขัน",
            "zipcodes": [
              "45130"
            ]
          }
        ]
      },
      {
        "name": "เมืองสรวง",
        "subdistricts": [
          {
            "name": "หนองผือ",
            "zipcodes": [
              "45220"
            ]
          },
          {
            "name": "หนองหิน",
            "zipcodes": [
              "45220"
            ]
          },
          {
            "name": "คูเมือง",
            "zipcodes": [
              "45220"
            ]
          },
          {
            "name": "กกกุง",
            "zipcodes": [
              "45220"
            ]
          },
          {
            "name": "เมืองสรวง",
            "zipcodes": [
              "45220"
            ]
          }
        ]
      },
      {
        "name": "โพนทราย",
        "subdistricts": [
          {
            "name": "โพนทราย",
            "zipcodes": [
              "45240"
            ]
          },
          {
            "name": "สามขา",
            "zipcodes": [
              "45240"
            ]
          },
          {
            "name": "ศรีสว่าง",
            "zipcodes": [
              "45240"
            ]
          },
          {
            "name": "ยางคำ",
            "zipcodes": [
              "45240"
            ]
          },
          {
            "name": "ท่าหาดยาว",
            "zipcodes": [
              "45240"
            ]
          }
        ]
      },
      {
        "name": "อาจสามารถ",
        "subdistricts": [
          {
            "name": "อาจสามารถ",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "โพนเมือง",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "บ้านแจ้ง",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "หน่อม",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "หนองหมื่นถ่าน",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "โหรา",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "45160"
            ]
          },
          {
            "name": "บ้านดู่",
            "zipcodes": [
              "45160"
            ]
          }
        ]
      },
      {
        "name": "เมยวดี",
        "subdistricts": [
          {
            "name": "เมยวดี",
            "zipcodes": [
              "45250"
            ]
          },
          {
            "name": "ชุมพร",
            "zipcodes": [
              "45250"
            ]
          },
          {
            "name": "บุ่งเลิศ",
            "zipcodes": [
              "45250"
            ]
          },
          {
            "name": "ชมสะอาด",
            "zipcodes": [
              "45250"
            ]
          }
        ]
      },
      {
        "name": "ศรีสมเด็จ",
        "subdistricts": [
          {
            "name": "โพธิ์ทอง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ศรีสมเด็จ",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "เมืองเปลือย",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "สวนจิก",
            "zipcodes": [
              "45280"
            ]
          },
          {
            "name": "โพธิ์สัย",
            "zipcodes": [
              "45280"
            ]
          },
          {
            "name": "หนองแวงควง",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "บ้านบาก",
            "zipcodes": [
              "45000"
            ]
          }
        ]
      },
      {
        "name": "จังหาร",
        "subdistricts": [
          {
            "name": "ดินดำ",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ปาฝา",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ม่วงลาด",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "จังหาร",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ดงสิงห์",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ยางใหญ่",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "ผักแว่น",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "แสนชาติ",
            "zipcodes": [
              "45000"
            ]
          }
        ]
      },
      {
        "name": "เชียงขวัญ",
        "subdistricts": [
          {
            "name": "เชียงขวัญ",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "พลับพลา",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "พระธาตุ",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "พระเจ้า",
            "zipcodes": [
              "45000"
            ]
          },
          {
            "name": "หมูม้น",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "บ้านเขือง",
            "zipcodes": [
              "45000"
            ]
          }
        ]
      },
      {
        "name": "หนองฮี",
        "subdistricts": [
          {
            "name": "หนองฮี",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "สาวแห",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "ดูกอึ่ง",
            "zipcodes": [
              "45140"
            ]
          },
          {
            "name": "เด่นราษฎร์",
            "zipcodes": [
              "45140"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งเขาหลวง",
        "subdistricts": [
          {
            "name": "ทุ่งเขาหลวง",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "เทอดไทย",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "บึงงาม",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "มะบ้า",
            "zipcodes": [
              "45170"
            ]
          },
          {
            "name": "เหล่า",
            "zipcodes": [
              "45170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "กาฬสินธุ์",
    "districts": [
      {
        "name": "เมืองกาฬสินธุ์",
        "subdistricts": [
          {
            "name": "กาฬสินธุ์",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "เหนือ",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "หลุบ",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ไผ่",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ลำปาว",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ลำพาน",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "เชียงเครือ",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "บึงวิชัย",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ห้วยโพธิ์",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ภูปอ",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ภูดิน",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "หนองกุง",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "กลางหมื่น",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ขมิ้น",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "นาจารย์",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ลำคลอง",
            "zipcodes": [
              "46000"
            ]
          }
        ]
      },
      {
        "name": "นามน",
        "subdistricts": [
          {
            "name": "นามน",
            "zipcodes": [
              "46230"
            ]
          },
          {
            "name": "ยอดแกง",
            "zipcodes": [
              "46230"
            ]
          },
          {
            "name": "สงเปลือย",
            "zipcodes": [
              "46230"
            ]
          },
          {
            "name": "หลักเหลี่ยม",
            "zipcodes": [
              "46230"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "46230"
            ]
          }
        ]
      },
      {
        "name": "กมลาไสย",
        "subdistricts": [
          {
            "name": "กมลาไสย",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "หลักเมือง",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "ดงลิง",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "ธัญญา",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "หนองแปน",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "เจ้าท่า",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "โคกสมบูรณ์",
            "zipcodes": [
              "46130"
            ]
          }
        ]
      },
      {
        "name": "ร่องคำ",
        "subdistricts": [
          {
            "name": "ร่องคำ",
            "zipcodes": [
              "46210"
            ]
          },
          {
            "name": "สามัคคี",
            "zipcodes": [
              "46210"
            ]
          },
          {
            "name": "เหล่าอ้อย",
            "zipcodes": [
              "46210"
            ]
          }
        ]
      },
      {
        "name": "กุฉินารายณ์",
        "subdistricts": [
          {
            "name": "บัวขาว",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "แจนแลน",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "เหล่าใหญ่",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "จุมจัง",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "เหล่าไฮงาม",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "กุดหว้า",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "สามขา",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "นาขาม",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "หนองห้าง",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "นาโก",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "สมสะอาด",
            "zipcodes": [
              "46110"
            ]
          },
          {
            "name": "กุดค้าว",
            "zipcodes": [
              "46110"
            ]
          }
        ]
      },
      {
        "name": "เขาวง",
        "subdistricts": [
          {
            "name": "คุ้มเก่า",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "สงเปลือย",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "หนองผือ",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "กุดสิมคุ้มใหม่",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "สระพังทอง",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "กุดปลาค้าว",
            "zipcodes": [
              "46160"
            ]
          }
        ]
      },
      {
        "name": "ยางตลาด",
        "subdistricts": [
          {
            "name": "ยางตลาด",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "หัวงัว",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "อุ่มเม่า",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "บัวบาน",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "เว่อ",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "อิตื้อ",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "หัวนาคำ",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "หนองอิเฒ่า",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "ดอนสมบูรณ์",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "นาเชือก",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "คลองขาม",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "เขาพระนอน",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "โนนสูง",
            "zipcodes": [
              "46120"
            ]
          },
          {
            "name": "หนองตอกแป้น",
            "zipcodes": [
              "46120"
            ]
          }
        ]
      },
      {
        "name": "ห้วยเม็ก",
        "subdistricts": [
          {
            "name": "ห้วยเม็ก",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "คำใหญ่",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "กุดโดน",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "บึงนาเรียง",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "หัวหิน",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "พิมูล",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "คำเหมือดแก้ว",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "46170"
            ]
          },
          {
            "name": "ทรายทอง",
            "zipcodes": [
              "46170"
            ]
          }
        ]
      },
      {
        "name": "สหัสขันธ์",
        "subdistricts": [
          {
            "name": "ภูสิงห์",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "สหัสขันธ์",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "นามะเขือ",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "โนนศิลา",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "นิคม",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "โนนแหลมทอง",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "โนนบุรี",
            "zipcodes": [
              "46140"
            ]
          },
          {
            "name": "โนนน้ำเกลี้ยง",
            "zipcodes": [
              "46140"
            ]
          }
        ]
      },
      {
        "name": "คำม่วง",
        "subdistricts": [
          {
            "name": "ทุ่งคลอง",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "โพน",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "ดินจี่",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "นาบอน",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "นาทัน",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "เนินยาง",
            "zipcodes": [
              "46180"
            ]
          }
        ]
      },
      {
        "name": "ท่าคันโท",
        "subdistricts": [
          {
            "name": "ท่าคันโท",
            "zipcodes": [
              "46190"
            ]
          },
          {
            "name": "กุงเก่า",
            "zipcodes": [
              "46190"
            ]
          },
          {
            "name": "ยางอู้ม",
            "zipcodes": [
              "46190"
            ]
          },
          {
            "name": "กุดจิก",
            "zipcodes": [
              "46190"
            ]
          },
          {
            "name": "นาตาล",
            "zipcodes": [
              "46190"
            ]
          },
          {
            "name": "ดงสมบูรณ์",
            "zipcodes": [
              "46190"
            ]
          }
        ]
      },
      {
        "name": "หนองกุงศรี",
        "subdistricts": [
          {
            "name": "หนองกุงศรี",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "โคกเครือ",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "หนองสรวง",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "เสาเล้า",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "หนองใหญ่",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "ดงมูล",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "ลำหนองแสน",
            "zipcodes": [
              "46220"
            ]
          },
          {
            "name": "หนองหิน",
            "zipcodes": [
              "46220"
            ]
          }
        ]
      },
      {
        "name": "สมเด็จ",
        "subdistricts": [
          {
            "name": "สมเด็จ",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "แซงบาดาล",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "มหาไชย",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "หมูม่น",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "ผาเสวย",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "ศรีสมเด็จ",
            "zipcodes": [
              "46150"
            ]
          },
          {
            "name": "ลำห้วยหลัว",
            "zipcodes": [
              "46150"
            ]
          }
        ]
      },
      {
        "name": "ห้วยผึ้ง",
        "subdistricts": [
          {
            "name": "คำบง",
            "zipcodes": [
              "46240"
            ]
          },
          {
            "name": "ไค้นุ่น",
            "zipcodes": [
              "46240"
            ]
          },
          {
            "name": "นิคมห้วยผึ้ง",
            "zipcodes": [
              "46240"
            ]
          },
          {
            "name": "หนองอีบุตร",
            "zipcodes": [
              "46240"
            ]
          }
        ]
      },
      {
        "name": "สามชัย",
        "subdistricts": [
          {
            "name": "สำราญ",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "สำราญใต้",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "คำสร้างเที่ยง",
            "zipcodes": [
              "46180"
            ]
          },
          {
            "name": "หนองช้าง",
            "zipcodes": [
              "46180"
            ]
          }
        ]
      },
      {
        "name": "นาคู",
        "subdistricts": [
          {
            "name": "นาคู",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "สายนาวัง",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "โนนนาจาน",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "บ่อแก้ว",
            "zipcodes": [
              "46160"
            ]
          },
          {
            "name": "ภูแล่นช้าง",
            "zipcodes": [
              "46160"
            ]
          }
        ]
      },
      {
        "name": "ดอนจาน",
        "subdistricts": [
          {
            "name": "ดอนจาน",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "สะอาดไชยศรี",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ดงพยุง",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "ม่วงนา",
            "zipcodes": [
              "46000"
            ]
          },
          {
            "name": "นาจำปา",
            "zipcodes": [
              "46000"
            ]
          }
        ]
      },
      {
        "name": "ฆ้องชัย",
        "subdistricts": [
          {
            "name": "ฆ้องชัยพัฒนา",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "เหล่ากลาง",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "โนนศิลาเลิง",
            "zipcodes": [
              "46130"
            ]
          },
          {
            "name": "ลำชี",
            "zipcodes": [
              "46130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สกลนคร",
    "districts": [
      {
        "name": "เมืองสกลนคร",
        "subdistricts": [
          {
            "name": "ธาตุเชิงชุม",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ขมิ้น",
            "zipcodes": [
              "47220"
            ]
          },
          {
            "name": "งิ้วด่อน",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "โนนหอม",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "เชียงเครือ",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ท่าแร่",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ม่วงลาย",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ดงชน",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "พังขว้าง",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ดงมะไฟ",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "ธาตุนาเวง",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "เหล่าปอแดง",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "หนองลาด",
            "zipcodes": [
              "47220"
            ]
          },
          {
            "name": "ฮางโฮง",
            "zipcodes": [
              "47000"
            ]
          },
          {
            "name": "โคกก่อง",
            "zipcodes": [
              "47000"
            ]
          }
        ]
      },
      {
        "name": "กุสุมาลย์",
        "subdistricts": [
          {
            "name": "กุสุมาลย์",
            "zipcodes": [
              "47210"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "47210"
            ]
          },
          {
            "name": "นาเพียง",
            "zipcodes": [
              "47230"
            ]
          },
          {
            "name": "โพธิไพศาล",
            "zipcodes": [
              "47210"
            ]
          },
          {
            "name": "อุ่มจาน",
            "zipcodes": [
              "47230"
            ]
          }
        ]
      },
      {
        "name": "กุดบาก",
        "subdistricts": [
          {
            "name": "กุดบาก",
            "zipcodes": [
              "47180"
            ]
          },
          {
            "name": "นาม่อง",
            "zipcodes": [
              "47180"
            ]
          },
          {
            "name": "กุดไห",
            "zipcodes": [
              "47180"
            ]
          }
        ]
      },
      {
        "name": "พรรณานิคม",
        "subdistricts": [
          {
            "name": "พรรณา",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "วังยาง",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "พอกน้อย",
            "zipcodes": [
              "47220"
            ]
          },
          {
            "name": "นาหัวบ่อ",
            "zipcodes": [
              "47220"
            ]
          },
          {
            "name": "ไร่",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "ช้างมิ่ง",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "นาใน",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "สว่าง",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "บะฮี",
            "zipcodes": [
              "47130"
            ]
          },
          {
            "name": "เชิงชุม",
            "zipcodes": [
              "47130"
            ]
          }
        ]
      },
      {
        "name": "พังโคน",
        "subdistricts": [
          {
            "name": "พังโคน",
            "zipcodes": [
              "47160"
            ]
          },
          {
            "name": "ม่วงไข่",
            "zipcodes": [
              "47160"
            ]
          },
          {
            "name": "แร่",
            "zipcodes": [
              "47160"
            ]
          },
          {
            "name": "ไฮหย่อง",
            "zipcodes": [
              "47160"
            ]
          },
          {
            "name": "ต้นผึ้ง",
            "zipcodes": [
              "47160"
            ]
          }
        ]
      },
      {
        "name": "วาริชภูมิ",
        "subdistricts": [
          {
            "name": "วาริชภูมิ",
            "zipcodes": [
              "47150"
            ]
          },
          {
            "name": "ปลาโหล",
            "zipcodes": [
              "47150"
            ]
          },
          {
            "name": "หนองลาด",
            "zipcodes": [
              "47150"
            ]
          },
          {
            "name": "คำบ่อ",
            "zipcodes": [
              "47150"
            ]
          },
          {
            "name": "ค้อเขียว",
            "zipcodes": [
              "47150"
            ]
          }
        ]
      },
      {
        "name": "นิคมน้ำอูน",
        "subdistricts": [
          {
            "name": "นิคมน้ำอูน",
            "zipcodes": [
              "47270"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "47270"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "47270"
            ]
          },
          {
            "name": "สุวรรณคาม",
            "zipcodes": [
              "47270"
            ]
          }
        ]
      },
      {
        "name": "วานรนิวาส",
        "subdistricts": [
          {
            "name": "วานรนิวาส",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "เดื่อศรีคันไชย",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "ขัวก่าย",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "หนองสนม",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "คูสะคาม",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "ธาตุ",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "ศรีวิชัย",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "นาซอ",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "อินทร์แปลง",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "นาคำ",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "คอนสวรรค์",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "กุดเรือคำ",
            "zipcodes": [
              "47120"
            ]
          },
          {
            "name": "หนองแวงใต้",
            "zipcodes": [
              "47120"
            ]
          }
        ]
      },
      {
        "name": "คำตากล้า",
        "subdistricts": [
          {
            "name": "คำตากล้า",
            "zipcodes": [
              "47250"
            ]
          },
          {
            "name": "หนองบัวสิม",
            "zipcodes": [
              "47250"
            ]
          },
          {
            "name": "นาแต้",
            "zipcodes": [
              "47250"
            ]
          },
          {
            "name": "แพด",
            "zipcodes": [
              "47250"
            ]
          }
        ]
      },
      {
        "name": "บ้านม่วง",
        "subdistricts": [
          {
            "name": "ม่วง",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "มาย",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "ดงหม้อทอง",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "ดงเหนือ",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "ดงหม้อทองใต้",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "ห้วยหลัว",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "โนนสะอาด",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "หนองกวั่ง",
            "zipcodes": [
              "47140"
            ]
          },
          {
            "name": "บ่อแก้ว",
            "zipcodes": [
              "47140"
            ]
          }
        ]
      },
      {
        "name": "อากาศอำนวย",
        "subdistricts": [
          {
            "name": "อากาศ",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "โพนแพง",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "วาใหญ่",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "ท่าก้อน",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "นาฮี",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "บะหว้า",
            "zipcodes": [
              "47170"
            ]
          },
          {
            "name": "สามัคคีพัฒนา",
            "zipcodes": [
              "47170"
            ]
          }
        ]
      },
      {
        "name": "สว่างแดนดิน",
        "subdistricts": [
          {
            "name": "สว่างแดนดิน",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "คำสะอาด",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "บ้านต้าย",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "บงเหนือ",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "โพนสูง",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "โคกสี",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "บงใต้",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "ค้อใต้",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "พันนา",
            "zipcodes": [
              "47240"
            ]
          },
          {
            "name": "แวง",
            "zipcodes": [
              "47240"
            ]
          },
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "47110"
            ]
          },
          {
            "name": "ตาลโกน",
            "zipcodes": [
              "47240"
            ]
          },
          {
            "name": "ตาลเนิ้ง",
            "zipcodes": [
              "47240"
            ]
          },
          {
            "name": "ธาตุทอง",
            "zipcodes": [
              "47240"
            ]
          },
          {
            "name": "บ้านถ่อน",
            "zipcodes": [
              "47110"
            ]
          }
        ]
      },
      {
        "name": "ส่องดาว",
        "subdistricts": [
          {
            "name": "ส่องดาว",
            "zipcodes": [
              "47190"
            ]
          },
          {
            "name": "ท่าศิลา",
            "zipcodes": [
              "47190"
            ]
          },
          {
            "name": "วัฒนา",
            "zipcodes": [
              "47190"
            ]
          },
          {
            "name": "ปทุมวาปี",
            "zipcodes": [
              "47190"
            ]
          }
        ]
      },
      {
        "name": "เต่างอย",
        "subdistricts": [
          {
            "name": "เต่างอย",
            "zipcodes": [
              "47260"
            ]
          },
          {
            "name": "บึงทวาย",
            "zipcodes": [
              "47260"
            ]
          },
          {
            "name": "นาตาล",
            "zipcodes": [
              "47260"
            ]
          },
          {
            "name": "จันทร์เพ็ญ",
            "zipcodes": [
              "47260"
            ]
          }
        ]
      },
      {
        "name": "โคกศรีสุพรรณ",
        "subdistricts": [
          {
            "name": "ตองโขบ",
            "zipcodes": [
              "47280"
            ]
          },
          {
            "name": "เหล่าโพนค้อ",
            "zipcodes": [
              "47280"
            ]
          },
          {
            "name": "ด่านม่วงคำ",
            "zipcodes": [
              "47280"
            ]
          },
          {
            "name": "แมดนาท่ม",
            "zipcodes": [
              "47280"
            ]
          }
        ]
      },
      {
        "name": "เจริญศิลป์",
        "subdistricts": [
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "47290"
            ]
          },
          {
            "name": "เจริญศิลป์",
            "zipcodes": [
              "47290"
            ]
          },
          {
            "name": "ทุ่งแก",
            "zipcodes": [
              "47290"
            ]
          },
          {
            "name": "โคกศิลา",
            "zipcodes": [
              "47290"
            ]
          },
          {
            "name": "หนองแปน",
            "zipcodes": [
              "47290"
            ]
          }
        ]
      },
      {
        "name": "โพนนาแก้ว",
        "subdistricts": [
          {
            "name": "บ้านโพน",
            "zipcodes": [
              "47230"
            ]
          },
          {
            "name": "นาแก้ว",
            "zipcodes": [
              "47230"
            ]
          },
          {
            "name": "นาตงวัฒนา",
            "zipcodes": [
              "47230"
            ]
          },
          {
            "name": "บ้านแป้น",
            "zipcodes": [
              "47230"
            ]
          },
          {
            "name": "เชียงสือ",
            "zipcodes": [
              "47230"
            ]
          }
        ]
      },
      {
        "name": "ภูพาน",
        "subdistricts": [
          {
            "name": "สร้างค้อ",
            "zipcodes": [
              "47180"
            ]
          },
          {
            "name": "หลุบเลา",
            "zipcodes": [
              "47180"
            ]
          },
          {
            "name": "โคกภู",
            "zipcodes": [
              "47180"
            ]
          },
          {
            "name": "กกปลาซิว",
            "zipcodes": [
              "47180"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครพนม",
    "districts": [
      {
        "name": "เมืองนครพนม",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "หนองแสง",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "นาทราย",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "นาราชควาย",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "กุรุคุ",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "บ้านผึ้ง",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "อาจสามารถ",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "ขามเฒ่า",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "ท่าค้อ",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "คำเตย",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "หนองญาติ",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "ดงขวาง",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "วังตามัว",
            "zipcodes": [
              "48000"
            ]
          },
          {
            "name": "โพธิ์ตาก",
            "zipcodes": [
              "48000"
            ]
          }
        ]
      },
      {
        "name": "ปลาปาก",
        "subdistricts": [
          {
            "name": "ปลาปาก",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "หนองฮี",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "กุตาไก้",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "โคกสว่าง",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "โคกสูง",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "มหาชัย",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "นามะเขือ",
            "zipcodes": [
              "48160"
            ]
          },
          {
            "name": "หนองเทาใหญ่",
            "zipcodes": [
              "48160"
            ]
          }
        ]
      },
      {
        "name": "ท่าอุเทน",
        "subdistricts": [
          {
            "name": "ท่าอุเทน",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "โนนตาล",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "ท่าจำปา",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "ไชยบุรี",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "พนอม",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "พะทาย",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "เวินพระบาท",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "รามราช",
            "zipcodes": [
              "48120"
            ]
          },
          {
            "name": "หนองเทา",
            "zipcodes": [
              "48120"
            ]
          }
        ]
      },
      {
        "name": "บ้านแพง",
        "subdistricts": [
          {
            "name": "บ้านแพง",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "ไผ่ล้อม",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "นางัว",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "นาเข",
            "zipcodes": [
              "48140"
            ]
          }
        ]
      },
      {
        "name": "ธาตุพนม",
        "subdistricts": [
          {
            "name": "ธาตุพนม",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "ฝั่งแดง",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "โพนแพง",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "พระกลางทุ่ง",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "นาถ่อน",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "แสนพัน",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "ดอนนางหงส์",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "น้ำก่ำ",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "อุ่มเหม้า",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "นาหนาด",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "กุดฉิม",
            "zipcodes": [
              "48110"
            ]
          },
          {
            "name": "ธาตุพนมเหนือ",
            "zipcodes": [
              "48110"
            ]
          }
        ]
      },
      {
        "name": "เรณูนคร",
        "subdistricts": [
          {
            "name": "เรณู",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "โพนทอง",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "ท่าลาด",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "นางาม",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "โคกหินแฮ่",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "หนองย่างชิ้น",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "เรณูใต้",
            "zipcodes": [
              "48170"
            ]
          },
          {
            "name": "นาขาม",
            "zipcodes": [
              "48170"
            ]
          }
        ]
      },
      {
        "name": "นาแก",
        "subdistricts": [
          {
            "name": "นาแก",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "พระซอง",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "หนองสังข์",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "นาคู่",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "พิมาน",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "พุ่มแก",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "ก้านเหลือง",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "หนองบ่อ",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "นาเลียง",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "คำพี้",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "สีชมพู",
            "zipcodes": [
              "48130"
            ]
          }
        ]
      },
      {
        "name": "ศรีสงคราม",
        "subdistricts": [
          {
            "name": "ศรีสงคราม",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "นาเดื่อ",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "บ้านเอื้อง",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "สามผง",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "ท่าบ่อสงคราม",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "บ้านข่า",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "นาคำ",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "โพนสว่าง",
            "zipcodes": [
              "48150"
            ]
          },
          {
            "name": "หาดแพง",
            "zipcodes": [
              "48150"
            ]
          }
        ]
      },
      {
        "name": "นาหว้า",
        "subdistricts": [
          {
            "name": "นาหว้า",
            "zipcodes": [
              "48180"
            ]
          },
          {
            "name": "นางัว",
            "zipcodes": [
              "48180"
            ]
          },
          {
            "name": "บ้านเสียว",
            "zipcodes": [
              "48180"
            ]
          },
          {
            "name": "นาคูณใหญ่",
            "zipcodes": [
              "48180"
            ]
          },
          {
            "name": "เหล่าพัฒนา",
            "zipcodes": [
              "48180"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "48180"
            ]
          }
        ]
      },
      {
        "name": "โพนสวรรค์",
        "subdistricts": [
          {
            "name": "โพนสวรรค์",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "นาหัวบ่อ",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "นาขมิ้น",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "โพนบก",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "บ้านค้อ",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "โพนจาน",
            "zipcodes": [
              "48190"
            ]
          },
          {
            "name": "นาใน",
            "zipcodes": [
              "48190"
            ]
          }
        ]
      },
      {
        "name": "นาทม",
        "subdistricts": [
          {
            "name": "นาทม",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "หนองซน",
            "zipcodes": [
              "48140"
            ]
          },
          {
            "name": "ดอนเตย",
            "zipcodes": [
              "48140"
            ]
          }
        ]
      },
      {
        "name": "วังยาง",
        "subdistricts": [
          {
            "name": "วังยาง",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "โคกสี",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "ยอดชาด",
            "zipcodes": [
              "48130"
            ]
          },
          {
            "name": "หนองโพธิ์",
            "zipcodes": [
              "48130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "มุกดาหาร",
    "districts": [
      {
        "name": "เมืองมุกดาหาร",
        "subdistricts": [
          {
            "name": "มุกดาหาร",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "ศรีบุญเรือง",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "บางทรายใหญ่",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "โพนทราย",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "ผึ่งแดด",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "นาโสก",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "นาสีนวน",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "คำป่าหลาย",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "คำอาฮวน",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "ดงเย็น",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "ดงมอน",
            "zipcodes": [
              "49000"
            ]
          },
          {
            "name": "กุดแข้",
            "zipcodes": [
              "49000"
            ]
          }
        ]
      },
      {
        "name": "นิคมคำสร้อย",
        "subdistricts": [
          {
            "name": "นิคมคำสร้อย",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "นากอก",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "หนองแวง",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "กกแดง",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "นาอุดม",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "โชคชัย",
            "zipcodes": [
              "49130"
            ]
          },
          {
            "name": "ร่มเกล้า",
            "zipcodes": [
              "49130"
            ]
          }
        ]
      },
      {
        "name": "ดอนตาล",
        "subdistricts": [
          {
            "name": "ดอนตาล",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "โพธิ์ไทร",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "ป่าไร่",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "เหล่าหมี",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "บ้านบาก",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "นาสะเม็ง",
            "zipcodes": [
              "49120"
            ]
          },
          {
            "name": "บ้านแก้ง",
            "zipcodes": [
              "49120"
            ]
          }
        ]
      },
      {
        "name": "ดงหลวง",
        "subdistricts": [
          {
            "name": "ดงหลวง",
            "zipcodes": [
              "49140"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "49140"
            ]
          },
          {
            "name": "กกตูม",
            "zipcodes": [
              "49140"
            ]
          },
          {
            "name": "หนองแคน",
            "zipcodes": [
              "49140"
            ]
          },
          {
            "name": "ชะโนดน้อย",
            "zipcodes": [
              "49140"
            ]
          },
          {
            "name": "พังแดง",
            "zipcodes": [
              "49140"
            ]
          }
        ]
      },
      {
        "name": "คำชะอี",
        "subdistricts": [
          {
            "name": "บ้านซ่ง",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "คำชะอี",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "หนองเอี่ยน",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "บ้านค้อ",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "โพนงาม",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "เหล่าสร้างถ่อ",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "คำบก",
            "zipcodes": [
              "49110"
            ]
          },
          {
            "name": "น้ำเที่ยง",
            "zipcodes": [
              "49110"
            ]
          }
        ]
      },
      {
        "name": "หว้านใหญ่",
        "subdistricts": [
          {
            "name": "หว้านใหญ่",
            "zipcodes": [
              "49150"
            ]
          },
          {
            "name": "ป่งขาม",
            "zipcodes": [
              "49150"
            ]
          },
          {
            "name": "บางทรายน้อย",
            "zipcodes": [
              "49150"
            ]
          },
          {
            "name": "ชะโนด",
            "zipcodes": [
              "49150"
            ]
          },
          {
            "name": "ดงหมู",
            "zipcodes": [
              "49150"
            ]
          }
        ]
      },
      {
        "name": "หนองสูง",
        "subdistricts": [
          {
            "name": "หนองสูง",
            "zipcodes": [
              "49160"
            ]
          },
          {
            "name": "โนนยาง",
            "zipcodes": [
              "49160"
            ]
          },
          {
            "name": "ภูวง",
            "zipcodes": [
              "49160"
            ]
          },
          {
            "name": "บ้านเป้า",
            "zipcodes": [
              "49160"
            ]
          },
          {
            "name": "หนองสูงใต้",
            "zipcodes": [
              "49160"
            ]
          },
          {
            "name": "หนองสูงเหนือ",
            "zipcodes": [
              "49160"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "เชียงใหม่",
    "districts": [
      {
        "name": "เมืองเชียงใหม่",
        "subdistricts": [
          {
            "name": "ศรีภูมิ",
            "zipcodes": [
              "50200"
            ]
          },
          {
            "name": "พระสิงห์",
            "zipcodes": [
              "50200"
            ]
          },
          {
            "name": "หายยา",
            "zipcodes": [
              "50100"
            ]
          },
          {
            "name": "ช้างม่อย",
            "zipcodes": [
              "50300"
            ]
          },
          {
            "name": "ช้างคลาน",
            "zipcodes": [
              "50100"
            ]
          },
          {
            "name": "วัดเกต",
            "zipcodes": [
              "50000"
            ]
          },
          {
            "name": "ช้างเผือก",
            "zipcodes": [
              "50300"
            ]
          },
          {
            "name": "สุเทพ",
            "zipcodes": [
              "50200"
            ]
          },
          {
            "name": "แม่เหียะ",
            "zipcodes": [
              "50100"
            ]
          },
          {
            "name": "ป่าแดด",
            "zipcodes": [
              "50100"
            ]
          },
          {
            "name": "หนองหอย",
            "zipcodes": [
              "50000"
            ]
          },
          {
            "name": "ท่าศาลา",
            "zipcodes": [
              "50000"
            ]
          },
          {
            "name": "หนองป่าครั่ง",
            "zipcodes": [
              "50000"
            ]
          },
          {
            "name": "ฟ้าฮ่าม",
            "zipcodes": [
              "50000"
            ]
          },
          {
            "name": "ป่าตัน",
            "zipcodes": [
              "50300"
            ]
          },
          {
            "name": "สันผีเสื้อ",
            "zipcodes": [
              "50300"
            ]
          }
        ]
      },
      {
        "name": "จอมทอง",
        "subdistricts": [
          {
            "name": "บ้านหลวง",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "ข่วงเปา",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "สบเตี๊ยะ",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "บ้านแปะ",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "ดอยแก้ว",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "แม่สอย",
            "zipcodes": [
              "50240"
            ]
          }
        ]
      },
      {
        "name": "แม่แจ่ม",
        "subdistricts": [
          {
            "name": "ช่างเคิ่ง",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "ท่าผา",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "บ้านทับ",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "แม่ศึก",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "แม่นาจร",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "ปางหินฝน",
            "zipcodes": [
              "50270"
            ]
          },
          {
            "name": "กองแขก",
            "zipcodes": [
              "50270"
            ]
          }
        ]
      },
      {
        "name": "เชียงดาว",
        "subdistricts": [
          {
            "name": "เชียงดาว",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "เมืองนะ",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "เมืองงาย",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "แม่นะ",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "เมืองคอง",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "ปิงโค้ง",
            "zipcodes": [
              "50170"
            ]
          },
          {
            "name": "ทุ่งข้าวพวง",
            "zipcodes": [
              "50170"
            ]
          }
        ]
      },
      {
        "name": "ดอยสะเก็ด",
        "subdistricts": [
          {
            "name": "เชิงดอย",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "สันปูเลย",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ลวงเหนือ",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ป่าป้อง",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "สง่าบ้าน",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ป่าลาน",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ตลาดขวัญ",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "สำราญราษฎร์",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "แม่คือ",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ตลาดใหญ่",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "แม่ฮ้อยเงิน",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "แม่โป่ง",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "ป่าเมี่ยง",
            "zipcodes": [
              "50220"
            ]
          },
          {
            "name": "เทพเสด็จ",
            "zipcodes": [
              "50220"
            ]
          }
        ]
      },
      {
        "name": "แม่แตง",
        "subdistricts": [
          {
            "name": "สันมหาพน",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "แม่แตง",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "ช่อแล",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "แม่หอพระ",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "สบเปิง",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "บ้านเป้า",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "สันป่ายาง",
            "zipcodes": [
              "50330"
            ]
          },
          {
            "name": "ป่าแป๋",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "เมืองก๋าย",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "บ้านช้าง",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "กื้ดช้าง",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "อินทขิล",
            "zipcodes": [
              "50150"
            ]
          },
          {
            "name": "สมก๋าย",
            "zipcodes": [
              "50150"
            ]
          }
        ]
      },
      {
        "name": "แม่ริม",
        "subdistricts": [
          {
            "name": "ริมใต้",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "ริมเหนือ",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "สันโป่ง",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "ขี้เหล็ก",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "สะลวง",
            "zipcodes": [
              "50330"
            ]
          },
          {
            "name": "ห้วยทราย",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "แม่แรม",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "โป่งแยง",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "แม่สา",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "ดอนแก้ว",
            "zipcodes": [
              "50180"
            ]
          },
          {
            "name": "เหมืองแก้ว",
            "zipcodes": [
              "50180"
            ]
          }
        ]
      },
      {
        "name": "สะเมิง",
        "subdistricts": [
          {
            "name": "สะเมิงใต้",
            "zipcodes": [
              "50250"
            ]
          },
          {
            "name": "สะเมิงเหนือ",
            "zipcodes": [
              "50250"
            ]
          },
          {
            "name": "แม่สาบ",
            "zipcodes": [
              "50250"
            ]
          },
          {
            "name": "บ่อแก้ว",
            "zipcodes": [
              "50250"
            ]
          },
          {
            "name": "ยั้งเมิน",
            "zipcodes": [
              "50250"
            ]
          }
        ]
      },
      {
        "name": "ฝาง",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "50110"
            ]
          },
          {
            "name": "ม่อนปิ่น",
            "zipcodes": [
              "50110"
            ]
          },
          {
            "name": "แม่งอน",
            "zipcodes": [
              "50320"
            ]
          },
          {
            "name": "แม่สูน",
            "zipcodes": [
              "50110"
            ]
          },
          {
            "name": "สันทราย",
            "zipcodes": [
              "50110"
            ]
          },
          {
            "name": "แม่คะ",
            "zipcodes": [
              "50110"
            ]
          },
          {
            "name": "แม่ข่า",
            "zipcodes": [
              "50320"
            ]
          },
          {
            "name": "โป่งน้ำร้อน",
            "zipcodes": [
              "50110"
            ]
          }
        ]
      },
      {
        "name": "แม่อาย",
        "subdistricts": [
          {
            "name": "แม่อาย",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "แม่สาว",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "สันต้นหมื้อ",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "แม่นาวาง",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "ท่าตอน",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "บ้านหลวง",
            "zipcodes": [
              "50280"
            ]
          },
          {
            "name": "มะลิกา",
            "zipcodes": [
              "50280"
            ]
          }
        ]
      },
      {
        "name": "พร้าว",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "ป่าตุ้ม",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "ป่าไหน่",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "สันทราย",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "บ้านโป่ง",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "น้ำแพร่",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "เขื่อนผาก",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "แม่แวน",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "แม่ปั๋ง",
            "zipcodes": [
              "50190"
            ]
          },
          {
            "name": "โหล่งขอด",
            "zipcodes": [
              "50190"
            ]
          }
        ]
      },
      {
        "name": "สันป่าตอง",
        "subdistricts": [
          {
            "name": "ยุหว่า",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "สันกลาง",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "ท่าวังพร้าว",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "มะขามหลวง",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "แม่ก๊า",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "บ้านแม",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "ทุ่งสะโตก",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "ทุ่งต้อม",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "น้ำบ่อหลวง",
            "zipcodes": [
              "50120"
            ]
          },
          {
            "name": "มะขุนหวาน",
            "zipcodes": [
              "50120"
            ]
          }
        ]
      },
      {
        "name": "สันกำแพง",
        "subdistricts": [
          {
            "name": "สันกำแพง",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ทรายมูล",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ร้องวัวแดง",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "บวกค้าง",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "แช่ช้าง",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ออนใต้",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "แม่ปูคา",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ห้วยทราย",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ต้นเปา",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "สันกลาง",
            "zipcodes": [
              "50130"
            ]
          }
        ]
      },
      {
        "name": "สันทราย",
        "subdistricts": [
          {
            "name": "สันทรายหลวง",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "สันทรายน้อย",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "สันพระเนตร",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "สันนาเม็ง",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "สันป่าเปา",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "หนองแหย่ง",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "หนองจ๊อม",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "หนองหาร",
            "zipcodes": [
              "50290"
            ]
          },
          {
            "name": "แม่แฝก",
            "zipcodes": [
              "50290"
            ]
          },
          {
            "name": "แม่แฝกใหม่",
            "zipcodes": [
              "50290"
            ]
          },
          {
            "name": "เมืองเล็น",
            "zipcodes": [
              "50210"
            ]
          },
          {
            "name": "ป่าไผ่",
            "zipcodes": [
              "50210"
            ]
          }
        ]
      },
      {
        "name": "หางดง",
        "subdistricts": [
          {
            "name": "หางดง",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "หนองแก๋ว",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "หารแก้ว",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "หนองตอง",
            "zipcodes": [
              "50340"
            ]
          },
          {
            "name": "ขุนคง",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "สบแม่ข่า",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "บ้านแหวน",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "สันผักหวาน",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "หนองควาย",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "บ้านปง",
            "zipcodes": [
              "50230"
            ]
          },
          {
            "name": "น้ำแพร่",
            "zipcodes": [
              "50230"
            ]
          }
        ]
      },
      {
        "name": "ฮอด",
        "subdistricts": [
          {
            "name": "หางดง",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "ฮอด",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "บ้านตาล",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "บ่อหลวง",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "บ่อสลี",
            "zipcodes": [
              "50240"
            ]
          },
          {
            "name": "นาคอเรือ",
            "zipcodes": [
              "50240"
            ]
          }
        ]
      },
      {
        "name": "ดอยเต่า",
        "subdistricts": [
          {
            "name": "ดอยเต่า",
            "zipcodes": [
              "50260"
            ]
          },
          {
            "name": "ท่าเดื่อ",
            "zipcodes": [
              "50260"
            ]
          },
          {
            "name": "มืดกา",
            "zipcodes": [
              "50260"
            ]
          },
          {
            "name": "บ้านแอ่น",
            "zipcodes": [
              "50260"
            ]
          },
          {
            "name": "บงตัน",
            "zipcodes": [
              "50260"
            ]
          },
          {
            "name": "โปงทุ่ง",
            "zipcodes": [
              "50260"
            ]
          }
        ]
      },
      {
        "name": "อมก๋อย",
        "subdistricts": [
          {
            "name": "อมก๋อย",
            "zipcodes": [
              "50310"
            ]
          },
          {
            "name": "ยางเปียง",
            "zipcodes": [
              "50310"
            ]
          },
          {
            "name": "แม่ตื่น",
            "zipcodes": [
              "50310"
            ]
          },
          {
            "name": "ม่อนจอง",
            "zipcodes": [
              "50310"
            ]
          },
          {
            "name": "สบโขง",
            "zipcodes": [
              "50310"
            ]
          },
          {
            "name": "นาเกียน",
            "zipcodes": [
              "50310"
            ]
          }
        ]
      },
      {
        "name": "สารภี",
        "subdistricts": [
          {
            "name": "ยางเนิ้ง",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "สารภี",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ชมภู",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ไชยสถาน",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ขัวมุง",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "หนองแฝก",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "หนองผึ้ง",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ท่ากว้าง",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ดอนแก้ว",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ท่าวังตาล",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "สันทราย",
            "zipcodes": [
              "50140"
            ]
          },
          {
            "name": "ป่าบง",
            "zipcodes": [
              "50140"
            ]
          }
        ]
      },
      {
        "name": "เวียงแหง",
        "subdistricts": [
          {
            "name": "เมืองแหง",
            "zipcodes": [
              "50350"
            ]
          },
          {
            "name": "เปียงหลวง",
            "zipcodes": [
              "50350"
            ]
          },
          {
            "name": "แสนไห",
            "zipcodes": [
              "50350"
            ]
          }
        ]
      },
      {
        "name": "ไชยปราการ",
        "subdistricts": [
          {
            "name": "ปงตำ",
            "zipcodes": [
              "50320"
            ]
          },
          {
            "name": "ศรีดงเย็น",
            "zipcodes": [
              "50320"
            ]
          },
          {
            "name": "แม่ทะลบ",
            "zipcodes": [
              "50320"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "50320"
            ]
          }
        ]
      },
      {
        "name": "แม่วาง",
        "subdistricts": [
          {
            "name": "บ้านกาด",
            "zipcodes": [
              "50360"
            ]
          },
          {
            "name": "ทุ่งปี้",
            "zipcodes": [
              "50360"
            ]
          },
          {
            "name": "ทุ่งรวงทอง",
            "zipcodes": [
              "50360"
            ]
          },
          {
            "name": "แม่วิน",
            "zipcodes": [
              "50360"
            ]
          },
          {
            "name": "ดอนเปา",
            "zipcodes": [
              "50360"
            ]
          }
        ]
      },
      {
        "name": "แม่ออน",
        "subdistricts": [
          {
            "name": "ออนเหนือ",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ออนกลาง",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "บ้านสหกรณ์",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ห้วยแก้ว",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "แม่ทา",
            "zipcodes": [
              "50130"
            ]
          },
          {
            "name": "ทาเหนือ",
            "zipcodes": [
              "50130"
            ]
          }
        ]
      },
      {
        "name": "ดอยหล่อ",
        "subdistricts": [
          {
            "name": "ดอยหล่อ",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "สองแคว",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "ยางคราม",
            "zipcodes": [
              "50160"
            ]
          },
          {
            "name": "สันติสุข",
            "zipcodes": [
              "50160"
            ]
          }
        ]
      },
      {
        "name": "กัลยาณิวัฒนา",
        "subdistricts": [
          {
            "name": "บ้านจันทร์",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "แม่แดด",
            "zipcodes": [
              "50250"
            ]
          },
          {
            "name": "แจ่มหลวง",
            "zipcodes": [
              "58130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ลำพูน",
    "districts": [
      {
        "name": "เมืองลำพูน",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "เหมืองง่า",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "อุโมงค์",
            "zipcodes": [
              "51150"
            ]
          },
          {
            "name": "หนองช้างคืน",
            "zipcodes": [
              "51150"
            ]
          },
          {
            "name": "ประตูป่า",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "ริมปิง",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "ต้นธง",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "บ้านแป้น",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "เหมืองจี้",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "ป่าสัก",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "เวียงยอง",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "มะเขือแจ้",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "ศรีบัวบาน",
            "zipcodes": [
              "51000"
            ]
          },
          {
            "name": "หนองหนาม",
            "zipcodes": [
              "51000"
            ]
          }
        ]
      },
      {
        "name": "แม่ทา",
        "subdistricts": [
          {
            "name": "ทาปลาดุก",
            "zipcodes": [
              "51140"
            ]
          },
          {
            "name": "ทาสบเส้า",
            "zipcodes": [
              "51140"
            ]
          },
          {
            "name": "ทากาศ",
            "zipcodes": [
              "51170"
            ]
          },
          {
            "name": "ทาขุมเงิน",
            "zipcodes": [
              "51170"
            ]
          },
          {
            "name": "ทาทุ่งหลวง",
            "zipcodes": [
              "51170"
            ]
          },
          {
            "name": "ทาแม่ลอบ",
            "zipcodes": [
              "51170"
            ]
          }
        ]
      },
      {
        "name": "บ้านโฮ่ง",
        "subdistricts": [
          {
            "name": "บ้านโฮ่ง",
            "zipcodes": [
              "51130"
            ]
          },
          {
            "name": "ป่าพลู",
            "zipcodes": [
              "51130"
            ]
          },
          {
            "name": "เหล่ายาว",
            "zipcodes": [
              "51130"
            ]
          },
          {
            "name": "ศรีเตี้ย",
            "zipcodes": [
              "51130"
            ]
          },
          {
            "name": "หนองปลาสะวาย",
            "zipcodes": [
              "51130"
            ]
          }
        ]
      },
      {
        "name": "ลี้",
        "subdistricts": [
          {
            "name": "ลี้",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "แม่ตืน",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "นาทราย",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "ดงดำ",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "ก้อ",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "แม่ลาน",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "ป่าไผ่",
            "zipcodes": [
              "51110"
            ]
          },
          {
            "name": "ศรีวิชัย",
            "zipcodes": [
              "51110"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งหัวช้าง",
        "subdistricts": [
          {
            "name": "ทุ่งหัวช้าง",
            "zipcodes": [
              "51160"
            ]
          },
          {
            "name": "บ้านปวง",
            "zipcodes": [
              "51160"
            ]
          },
          {
            "name": "ตะเคียนปม",
            "zipcodes": [
              "51160"
            ]
          }
        ]
      },
      {
        "name": "ป่าซาง",
        "subdistricts": [
          {
            "name": "ปากบ่อง",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "ป่าซาง",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "แม่แรง",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "ม่วงน้อย",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "บ้านเรือน",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "มะกอก",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "ท่าตุ้ม",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "น้ำดิบ",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "นครเจดีย์",
            "zipcodes": [
              "51120"
            ]
          }
        ]
      },
      {
        "name": "บ้านธิ",
        "subdistricts": [
          {
            "name": "บ้านธิ",
            "zipcodes": [
              "51180"
            ]
          },
          {
            "name": "ห้วยยาบ",
            "zipcodes": [
              "51180"
            ]
          }
        ]
      },
      {
        "name": "เวียงหนองล่อง",
        "subdistricts": [
          {
            "name": "หนองล่อง",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "หนองยวง",
            "zipcodes": [
              "51120"
            ]
          },
          {
            "name": "วังผาง",
            "zipcodes": [
              "51120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ลำปาง",
    "districts": [
      {
        "name": "เมืองลำปาง",
        "subdistricts": [
          {
            "name": "เวียงเหนือ",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "หัวเวียง",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "สวนดอก",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "สบตุ๋ย",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "พระบาท",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "ชมพู",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "กล้วยแพะ",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "ปงแสนทอง",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "บ้านแลง",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "บ้านเสด็จ",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "พิชัย",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "ทุ่งฝาย",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "บ้านเอื้อม",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "บ้านเป้า",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "บ้านค่า",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "บ่อแฮ้ว",
            "zipcodes": [
              "52100"
            ]
          },
          {
            "name": "ต้นธงชัย",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "52000"
            ]
          },
          {
            "name": "บุญนาคพัฒนา",
            "zipcodes": [
              "52000"
            ]
          }
        ]
      },
      {
        "name": "แม่เมาะ",
        "subdistricts": [
          {
            "name": "บ้านดง",
            "zipcodes": [
              "52220"
            ]
          },
          {
            "name": "นาสัก",
            "zipcodes": [
              "52220"
            ]
          },
          {
            "name": "จางเหนือ",
            "zipcodes": [
              "52220"
            ]
          },
          {
            "name": "แม่เมาะ",
            "zipcodes": [
              "52220"
            ]
          },
          {
            "name": "สบป้าด",
            "zipcodes": [
              "52220"
            ]
          }
        ]
      },
      {
        "name": "เกาะคา",
        "subdistricts": [
          {
            "name": "ลำปางหลวง",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "นาแก้ว",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "ไหล่หิน",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "วังพร้าว",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "ศาลา",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "เกาะคา",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "นาแส่ง",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "ท่าผา",
            "zipcodes": [
              "52130"
            ]
          },
          {
            "name": "ใหม่พัฒนา",
            "zipcodes": [
              "52130"
            ]
          }
        ]
      },
      {
        "name": "เสริมงาม",
        "subdistricts": [
          {
            "name": "ทุ่งงาม",
            "zipcodes": [
              "52210"
            ]
          },
          {
            "name": "เสริมขวา",
            "zipcodes": [
              "52210"
            ]
          },
          {
            "name": "เสริมซ้าย",
            "zipcodes": [
              "52210"
            ]
          },
          {
            "name": "เสริมกลาง",
            "zipcodes": [
              "52210"
            ]
          }
        ]
      },
      {
        "name": "งาว",
        "subdistricts": [
          {
            "name": "หลวงเหนือ",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "หลวงใต้",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "บ้านโป่ง",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "บ้านร้อง",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "ปงเตา",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "นาแก",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "บ้านอ้อน",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "บ้านแหง",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "บ้านหวด",
            "zipcodes": [
              "52110"
            ]
          },
          {
            "name": "แม่ตีบ",
            "zipcodes": [
              "52110"
            ]
          }
        ]
      },
      {
        "name": "แจ้ห่ม",
        "subdistricts": [
          {
            "name": "แจ้ห่ม",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "บ้านสา",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "ปงดอน",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "แม่สุก",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "เมืองมาย",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "ทุ่งผึ้ง",
            "zipcodes": [
              "52120"
            ]
          },
          {
            "name": "วิเชตนคร",
            "zipcodes": [
              "52120"
            ]
          }
        ]
      },
      {
        "name": "วังเหนือ",
        "subdistricts": [
          {
            "name": "ทุ่งฮั้ว",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังเหนือ",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังใต้",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "ร่องเคาะ",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังซ้าย",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังแก้ว",
            "zipcodes": [
              "52140"
            ]
          },
          {
            "name": "วังทรายคำ",
            "zipcodes": [
              "52140"
            ]
          }
        ]
      },
      {
        "name": "เถิน",
        "subdistricts": [
          {
            "name": "ล้อมแรด",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "แม่วะ",
            "zipcodes": [
              "52230"
            ]
          },
          {
            "name": "แม่ปะ",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "แม่มอก",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "เวียงมอก",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "นาโป่ง",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "แม่ถอด",
            "zipcodes": [
              "52160"
            ]
          },
          {
            "name": "เถินบุรี",
            "zipcodes": [
              "52160"
            ]
          }
        ]
      },
      {
        "name": "แม่พริก",
        "subdistricts": [
          {
            "name": "แม่พริก",
            "zipcodes": [
              "52180"
            ]
          },
          {
            "name": "ผาปัง",
            "zipcodes": [
              "52180"
            ]
          },
          {
            "name": "แม่ปุ",
            "zipcodes": [
              "52180"
            ]
          },
          {
            "name": "พระบาทวังตวง",
            "zipcodes": [
              "52180"
            ]
          }
        ]
      },
      {
        "name": "แม่ทะ",
        "subdistricts": [
          {
            "name": "แม่ทะ",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "นาครัว",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "ป่าตัน",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "บ้านกิ่ว",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "บ้านบอม",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "น้ำโจ้",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "ดอนไฟ",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "หัวเสือ",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "วังเงิน",
            "zipcodes": [
              "52150"
            ]
          },
          {
            "name": "สันดอนแก้ว",
            "zipcodes": [
              "52150"
            ]
          }
        ]
      },
      {
        "name": "สบปราบ",
        "subdistricts": [
          {
            "name": "สบปราบ",
            "zipcodes": [
              "52170"
            ]
          },
          {
            "name": "สมัย",
            "zipcodes": [
              "52170"
            ]
          },
          {
            "name": "แม่กัวะ",
            "zipcodes": [
              "52170"
            ]
          },
          {
            "name": "นายาง",
            "zipcodes": [
              "52170"
            ]
          }
        ]
      },
      {
        "name": "ห้างฉัตร",
        "subdistricts": [
          {
            "name": "ห้างฉัตร",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "หนองหล่ม",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "เมืองยาว",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "ปงยางคก",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "เวียงตาล",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "แม่สัน",
            "zipcodes": [
              "52190"
            ]
          },
          {
            "name": "วอแก้ว",
            "zipcodes": [
              "52190"
            ]
          }
        ]
      },
      {
        "name": "เมืองปาน",
        "subdistricts": [
          {
            "name": "เมืองปาน",
            "zipcodes": [
              "52240"
            ]
          },
          {
            "name": "บ้านขอ",
            "zipcodes": [
              "52240"
            ]
          },
          {
            "name": "ทุ่งกว๋าว",
            "zipcodes": [
              "52240"
            ]
          },
          {
            "name": "แจ้ซ้อน",
            "zipcodes": [
              "52240"
            ]
          },
          {
            "name": "หัวเมือง",
            "zipcodes": [
              "52240"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อุตรดิตถ์",
    "districts": [
      {
        "name": "เมืองอุตรดิตถ์",
        "subdistricts": [
          {
            "name": "ท่าอิฐ",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "ท่าเสา",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "ป่าเซ่า",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "คุ้งตะเภา",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "วังกะพี้",
            "zipcodes": [
              "53170"
            ]
          },
          {
            "name": "หาดกรวด",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "น้ำริด",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "งิ้วงาม",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "บ้านด่านนาขาม",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "บ้านด่าน",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "ผาจุก",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "วังดิน",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "แสนตอ",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "หาดงิ้ว",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "ขุนฝาง",
            "zipcodes": [
              "53000"
            ]
          },
          {
            "name": "ถ้ำฉลอง",
            "zipcodes": [
              "53000"
            ]
          }
        ]
      },
      {
        "name": "ตรอน",
        "subdistricts": [
          {
            "name": "วังแดง",
            "zipcodes": [
              "53140"
            ]
          },
          {
            "name": "บ้านแก่ง",
            "zipcodes": [
              "53140"
            ]
          },
          {
            "name": "หาดสองแคว",
            "zipcodes": [
              "53140"
            ]
          },
          {
            "name": "น้ำอ่าง",
            "zipcodes": [
              "53140"
            ]
          },
          {
            "name": "ข่อยสูง",
            "zipcodes": [
              "53140"
            ]
          }
        ]
      },
      {
        "name": "ท่าปลา",
        "subdistricts": [
          {
            "name": "ท่าปลา",
            "zipcodes": [
              "53150"
            ]
          },
          {
            "name": "หาดล้า",
            "zipcodes": [
              "53150"
            ]
          },
          {
            "name": "ผาเลือด",
            "zipcodes": [
              "53190"
            ]
          },
          {
            "name": "จริม",
            "zipcodes": [
              "53150"
            ]
          },
          {
            "name": "น้ำหมัน",
            "zipcodes": [
              "53150"
            ]
          },
          {
            "name": "ท่าแฝก",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "นางพญา",
            "zipcodes": [
              "53150"
            ]
          },
          {
            "name": "ร่วมจิต",
            "zipcodes": [
              "53190"
            ]
          }
        ]
      },
      {
        "name": "น้ำปาด",
        "subdistricts": [
          {
            "name": "แสนตอ",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "บ้านฝาย",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "เด่นเหล็ก",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "น้ำไคร้",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "น้ำไผ่",
            "zipcodes": [
              "53110"
            ]
          },
          {
            "name": "ห้วยมุ่น",
            "zipcodes": [
              "53110"
            ]
          }
        ]
      },
      {
        "name": "ฟากท่า",
        "subdistricts": [
          {
            "name": "ฟากท่า",
            "zipcodes": [
              "53160"
            ]
          },
          {
            "name": "สองคอน",
            "zipcodes": [
              "53160"
            ]
          },
          {
            "name": "บ้านเสี้ยว",
            "zipcodes": [
              "53160"
            ]
          },
          {
            "name": "สองห้อง",
            "zipcodes": [
              "53160"
            ]
          }
        ]
      },
      {
        "name": "บ้านโคก",
        "subdistricts": [
          {
            "name": "ม่วงเจ็ดต้น",
            "zipcodes": [
              "53180"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "53180"
            ]
          },
          {
            "name": "นาขุม",
            "zipcodes": [
              "53180"
            ]
          },
          {
            "name": "บ่อเบี้ย",
            "zipcodes": [
              "53180"
            ]
          }
        ]
      },
      {
        "name": "พิชัย",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "บ้านดารา",
            "zipcodes": [
              "53220"
            ]
          },
          {
            "name": "ไร่อ้อย",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "ท่าสัก",
            "zipcodes": [
              "53220"
            ]
          },
          {
            "name": "คอรุม",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "บ้านหม้อ",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "ท่ามะเฟือง",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "บ้านโคน",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "พญาแมน",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "นาอิน",
            "zipcodes": [
              "53120"
            ]
          },
          {
            "name": "นายาง",
            "zipcodes": [
              "53120"
            ]
          }
        ]
      },
      {
        "name": "ลับแล",
        "subdistricts": [
          {
            "name": "ศรีพนมมาศ",
            "zipcodes": [
              "53130"
            ]
          },
          {
            "name": "แม่พูล",
            "zipcodes": [
              "53130"
            ]
          },
          {
            "name": "นานกกก",
            "zipcodes": [
              "53130"
            ]
          },
          {
            "name": "ฝายหลวง",
            "zipcodes": [
              "53130"
            ]
          },
          {
            "name": "ชัยจุมพล",
            "zipcodes": [
              "53130"
            ]
          },
          {
            "name": "ไผ่ล้อม",
            "zipcodes": [
              "53210"
            ]
          },
          {
            "name": "ทุ่งยั้ง",
            "zipcodes": [
              "53210"
            ]
          },
          {
            "name": "ด่านแม่คำมัน",
            "zipcodes": [
              "53210"
            ]
          }
        ]
      },
      {
        "name": "ทองแสนขัน",
        "subdistricts": [
          {
            "name": "ผักขวง",
            "zipcodes": [
              "53230"
            ]
          },
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "53230"
            ]
          },
          {
            "name": "ป่าคาย",
            "zipcodes": [
              "53230"
            ]
          },
          {
            "name": "น้ำพี้",
            "zipcodes": [
              "53230"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "แพร่",
    "districts": [
      {
        "name": "เมืองแพร่",
        "subdistricts": [
          {
            "name": "ในเวียง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "นาจักร",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "น้ำชำ",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ป่าแดง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ทุ่งโฮ้ง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "เหมืองหม้อ",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "วังธง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "แม่หล่าย",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ห้วยม้า",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ป่าแมต",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "บ้านถิ่น",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "สวนเขื่อน",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "วังหงส์",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "แม่คำมี",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ทุ่งกวาว",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "แม่ยม",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ช่อแฮ",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "ร่องฟอง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "กาญจนา",
            "zipcodes": [
              "54000"
            ]
          }
        ]
      },
      {
        "name": "ร้องกวาง",
        "subdistricts": [
          {
            "name": "ร้องกวาง",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "ร้องเข็ม",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "น้ำเลา",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "บ้านเวียง",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "ทุ่งศรี",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "แม่ยางตาล",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "แม่ยางฮ่อ",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "ไผ่โทน",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "ห้วยโรง",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "แม่ทราย",
            "zipcodes": [
              "54140"
            ]
          },
          {
            "name": "แม่ยางร้อง",
            "zipcodes": [
              "54140"
            ]
          }
        ]
      },
      {
        "name": "ลอง",
        "subdistricts": [
          {
            "name": "ห้วยอ้อ",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "บ้านปิน",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "ต้าผามอก",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "เวียงต้า",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "ปากกาง",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "หัวทุ่ง",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "ทุ่งแล้ง",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "บ่อเหล็กลอง",
            "zipcodes": [
              "54150"
            ]
          },
          {
            "name": "แม่ปาน",
            "zipcodes": [
              "54150"
            ]
          }
        ]
      },
      {
        "name": "สูงเม่น",
        "subdistricts": [
          {
            "name": "สูงเม่น",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "น้ำชำ",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "หัวฝาย",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "ดอนมูล",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "บ้านกวาง",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "บ้านปง",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "บ้านกาศ",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "ร่องกาศ",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "สบสาย",
            "zipcodes": [
              "54130"
            ]
          },
          {
            "name": "เวียงทอง",
            "zipcodes": [
              "54000"
            ]
          },
          {
            "name": "พระหลวง",
            "zipcodes": [
              "54130"
            ]
          }
        ]
      },
      {
        "name": "เด่นชัย",
        "subdistricts": [
          {
            "name": "เด่นชัย",
            "zipcodes": [
              "54110"
            ]
          },
          {
            "name": "แม่จั๊วะ",
            "zipcodes": [
              "54110"
            ]
          },
          {
            "name": "ไทรย้อย",
            "zipcodes": [
              "54110"
            ]
          },
          {
            "name": "ห้วยไร่",
            "zipcodes": [
              "54110"
            ]
          },
          {
            "name": "ปงป่าหวาย",
            "zipcodes": [
              "54110"
            ]
          }
        ]
      },
      {
        "name": "สอง",
        "subdistricts": [
          {
            "name": "บ้านหนุน",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "ห้วยหม้าย",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "เตาปูน",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "หัวเมือง",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "สะเอียบ",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "แดนชุมพล",
            "zipcodes": [
              "54120"
            ]
          },
          {
            "name": "ทุ่งน้าว",
            "zipcodes": [
              "54120"
            ]
          }
        ]
      },
      {
        "name": "วังชิ้น",
        "subdistricts": [
          {
            "name": "วังชิ้น",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "สรอย",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "แม่ป้าก",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "นาพูน",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "แม่พุง",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "ป่าสัก",
            "zipcodes": [
              "54160"
            ]
          },
          {
            "name": "แม่เกิ๋ง",
            "zipcodes": [
              "54160"
            ]
          }
        ]
      },
      {
        "name": "หนองม่วงไข่",
        "subdistricts": [
          {
            "name": "แม่คำมี",
            "zipcodes": [
              "54170"
            ]
          },
          {
            "name": "หนองม่วงไข่",
            "zipcodes": [
              "54170"
            ]
          },
          {
            "name": "น้ำรัด",
            "zipcodes": [
              "54170"
            ]
          },
          {
            "name": "วังหลวง",
            "zipcodes": [
              "54170"
            ]
          },
          {
            "name": "ตำหนักธรรม",
            "zipcodes": [
              "54170"
            ]
          },
          {
            "name": "ทุ่งแค้ว",
            "zipcodes": [
              "54170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "น่าน",
    "districts": [
      {
        "name": "เมืองน่าน",
        "subdistricts": [
          {
            "name": "ในเวียง",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "บ่อ",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ผาสิงห์",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ไชยสถาน",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ถืมตอง",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "เรือง",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "นาซาว",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ดู่ใต้",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "กองควาย",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "สวก",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "สะเนียน",
            "zipcodes": [
              "55000"
            ]
          }
        ]
      },
      {
        "name": "แม่จริม",
        "subdistricts": [
          {
            "name": "หนองแดง",
            "zipcodes": [
              "55170"
            ]
          },
          {
            "name": "หมอเมือง",
            "zipcodes": [
              "55170"
            ]
          },
          {
            "name": "น้ำพาง",
            "zipcodes": [
              "55170"
            ]
          },
          {
            "name": "น้ำปาย",
            "zipcodes": [
              "55170"
            ]
          },
          {
            "name": "แม่จริม",
            "zipcodes": [
              "55170"
            ]
          }
        ]
      },
      {
        "name": "บ้านหลวง",
        "subdistricts": [
          {
            "name": "บ้านฟ้า",
            "zipcodes": [
              "55190"
            ]
          },
          {
            "name": "ป่าคาหลวง",
            "zipcodes": [
              "55190"
            ]
          },
          {
            "name": "สวด",
            "zipcodes": [
              "55190"
            ]
          },
          {
            "name": "บ้านพี้",
            "zipcodes": [
              "55190"
            ]
          }
        ]
      },
      {
        "name": "นาน้อย",
        "subdistricts": [
          {
            "name": "นาน้อย",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "เชียงของ",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "ศรีษะเกษ",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "สถาน",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "สันทะ",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "บัวใหญ่",
            "zipcodes": [
              "55150"
            ]
          },
          {
            "name": "น้ำตก",
            "zipcodes": [
              "55150"
            ]
          }
        ]
      },
      {
        "name": "ปัว",
        "subdistricts": [
          {
            "name": "ปัว",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "แงง",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "สถาน",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "ศิลาแลง",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "ศิลาเพชร",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "อวน",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "ไชยวัฒนา",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "เจดีย์ชัย",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "ภูคา",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "สกาด",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "ป่ากลาง",
            "zipcodes": [
              "55120"
            ]
          },
          {
            "name": "วรนคร",
            "zipcodes": [
              "55120"
            ]
          }
        ]
      },
      {
        "name": "ท่าวังผา",
        "subdistricts": [
          {
            "name": "ริม",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ป่าคา",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ผาตอ",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ยม",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ตาลชุม",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ศรีภูมิ",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "จอมพระ",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "แสนทอง",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ท่าวังผา",
            "zipcodes": [
              "55140"
            ]
          },
          {
            "name": "ผาทอง",
            "zipcodes": [
              "55140"
            ]
          }
        ]
      },
      {
        "name": "เวียงสา",
        "subdistricts": [
          {
            "name": "กลางเวียง",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ขึ่ง",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ไหล่น่าน",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ตาลชุม",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "นาเหลือง",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ส้าน",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "น้ำมวบ",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "น้ำปั้ว",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ยาบหัวนา",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ปงสนุก",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "อ่ายนาไลย",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ส้านนาหนองใหม่",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "แม่ขะนิง",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "แม่สาคร",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "จอมจันทร์",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "แม่สา",
            "zipcodes": [
              "55110"
            ]
          },
          {
            "name": "ทุ่งศรีทอง",
            "zipcodes": [
              "55110"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งช้าง",
        "subdistricts": [
          {
            "name": "ปอน",
            "zipcodes": [
              "55130"
            ]
          },
          {
            "name": "งอบ",
            "zipcodes": [
              "55130"
            ]
          },
          {
            "name": "และ",
            "zipcodes": [
              "55130"
            ]
          },
          {
            "name": "ทุ่งช้าง",
            "zipcodes": [
              "55130"
            ]
          }
        ]
      },
      {
        "name": "เชียงกลาง",
        "subdistricts": [
          {
            "name": "เชียงกลาง",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "เปือ",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "เชียงคาน",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "พระธาตุ",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "พญาแก้ว",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "พระพุทธบาท",
            "zipcodes": [
              "55160"
            ]
          }
        ]
      },
      {
        "name": "นาหมื่น",
        "subdistricts": [
          {
            "name": "นาทะนุง",
            "zipcodes": [
              "55180"
            ]
          },
          {
            "name": "บ่อแก้ว",
            "zipcodes": [
              "55180"
            ]
          },
          {
            "name": "เมืองลี",
            "zipcodes": [
              "55180"
            ]
          },
          {
            "name": "ปิงหลวง",
            "zipcodes": [
              "55180"
            ]
          }
        ]
      },
      {
        "name": "สันติสุข",
        "subdistricts": [
          {
            "name": "ดู่พงษ์",
            "zipcodes": [
              "55210"
            ]
          },
          {
            "name": "ป่าแลวหลวง",
            "zipcodes": [
              "55210"
            ]
          },
          {
            "name": "พงษ์",
            "zipcodes": [
              "55210"
            ]
          }
        ]
      },
      {
        "name": "บ่อเกลือ",
        "subdistricts": [
          {
            "name": "บ่อเกลือเหนือ",
            "zipcodes": [
              "55220"
            ]
          },
          {
            "name": "บ่อเกลือใต้",
            "zipcodes": [
              "55220"
            ]
          },
          {
            "name": "ภูฟ้า",
            "zipcodes": [
              "55220"
            ]
          },
          {
            "name": "ดงพญา",
            "zipcodes": [
              "55220"
            ]
          }
        ]
      },
      {
        "name": "สองแคว",
        "subdistricts": [
          {
            "name": "นาไร่หลวง",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "ชนแดน",
            "zipcodes": [
              "55160"
            ]
          },
          {
            "name": "ยอด",
            "zipcodes": [
              "55160"
            ]
          }
        ]
      },
      {
        "name": "ภูเพียง",
        "subdistricts": [
          {
            "name": "ม่วงตึ๊ด",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "นาปัง",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "น้ำแก่น",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "น้ำเกี๋ยน",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "เมืองจัง",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ท่าน้าว",
            "zipcodes": [
              "55000"
            ]
          },
          {
            "name": "ฝายแก้ว",
            "zipcodes": [
              "55000"
            ]
          }
        ]
      },
      {
        "name": "เฉลิมพระเกียรติ",
        "subdistricts": [
          {
            "name": "ห้วยโก๋น",
            "zipcodes": [
              "55130"
            ]
          },
          {
            "name": "ขุนน่าน",
            "zipcodes": [
              "55130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พะเยา",
    "districts": [
      {
        "name": "เมืองพะเยา",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่ต๋ำ",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่นาเรือ",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "บ้านตุ่น",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "บ้านต๊ำ",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "บ้านต๋อม",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่ปืม",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่กา",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "จำป่าหวาย",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "ท่าวังทอง",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่ใส",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "บ้านสาง",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "ท่าจำปี",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "สันป่าม่วง",
            "zipcodes": [
              "56000"
            ]
          }
        ]
      },
      {
        "name": "จุน",
        "subdistricts": [
          {
            "name": "ห้วยข้าวก่ำ",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "จุน",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "ลอ",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "หงส์หิน",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "ทุ่งรวงทอง",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "ห้วยยางขาม",
            "zipcodes": [
              "56150"
            ]
          },
          {
            "name": "พระธาตุขิงแกง",
            "zipcodes": [
              "56150"
            ]
          }
        ]
      },
      {
        "name": "เชียงคำ",
        "subdistricts": [
          {
            "name": "หย่วน",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "น้ำแวน",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "เวียง",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "ฝายกวาง",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "เจดีย์คำ",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "ร่มเย็น",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "เชียงบาน",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "แม่ลาว",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "ทุ่งผาสุข",
            "zipcodes": [
              "56110"
            ]
          }
        ]
      },
      {
        "name": "เชียงม่วน",
        "subdistricts": [
          {
            "name": "เชียงม่วน",
            "zipcodes": [
              "56160"
            ]
          },
          {
            "name": "บ้านมาง",
            "zipcodes": [
              "56160"
            ]
          },
          {
            "name": "สระ",
            "zipcodes": [
              "56160"
            ]
          }
        ]
      },
      {
        "name": "ดอกคำใต้",
        "subdistricts": [
          {
            "name": "ดอกคำใต้",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "ดอนศรีชุม",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "บ้านถ้ำ",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "บ้านปิน",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "ห้วยลาน",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "สันโค้ง",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "ป่าซาง",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "หนองหล่ม",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "ดงสุวรรณ",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "บุญเกิด",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "สว่างอารมณ์",
            "zipcodes": [
              "56120"
            ]
          },
          {
            "name": "คือเวียง",
            "zipcodes": [
              "56120"
            ]
          }
        ]
      },
      {
        "name": "ปง",
        "subdistricts": [
          {
            "name": "ปง",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "ควร",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "ออย",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "งิม",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "ผาช้างน้อย",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "นาปรัง",
            "zipcodes": [
              "56140"
            ]
          },
          {
            "name": "ขุนควร",
            "zipcodes": [
              "56140"
            ]
          }
        ]
      },
      {
        "name": "แม่ใจ",
        "subdistricts": [
          {
            "name": "แม่ใจ",
            "zipcodes": [
              "56130"
            ]
          },
          {
            "name": "ศรีถ้อย",
            "zipcodes": [
              "56130"
            ]
          },
          {
            "name": "แม่สุก",
            "zipcodes": [
              "56130"
            ]
          },
          {
            "name": "ป่าแฝก",
            "zipcodes": [
              "56130"
            ]
          },
          {
            "name": "บ้านเหล่า",
            "zipcodes": [
              "56130"
            ]
          },
          {
            "name": "เจริญราษฎร์",
            "zipcodes": [
              "56130"
            ]
          }
        ]
      },
      {
        "name": "ภูซาง",
        "subdistricts": [
          {
            "name": "ภูซาง",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "ป่าสัก",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "ทุ่งกล้วย",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "เชียงแรง",
            "zipcodes": [
              "56110"
            ]
          },
          {
            "name": "สบบง",
            "zipcodes": [
              "56110"
            ]
          }
        ]
      },
      {
        "name": "ภูกามยาว",
        "subdistricts": [
          {
            "name": "ห้วยแก้ว",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "ดงเจน",
            "zipcodes": [
              "56000"
            ]
          },
          {
            "name": "แม่อิง",
            "zipcodes": [
              "56000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "เชียงราย",
    "districts": [
      {
        "name": "เมืองเชียงราย",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "รอบเวียง",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "บ้านดู่",
            "zipcodes": [
              "57100"
            ]
          },
          {
            "name": "นางแล",
            "zipcodes": [
              "57100"
            ]
          },
          {
            "name": "แม่ข้าวต้ม",
            "zipcodes": [
              "57100"
            ]
          },
          {
            "name": "แม่ยาว",
            "zipcodes": [
              "57100"
            ]
          },
          {
            "name": "สันทราย",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "แม่กรณ์",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ห้วยชมภู",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ห้วยสัก",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ริมกก",
            "zipcodes": [
              "57100"
            ]
          },
          {
            "name": "ดอยลาน",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ป่าอ้อดอนชัย",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ท่าสาย",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ดอยฮาง",
            "zipcodes": [
              "57000"
            ]
          },
          {
            "name": "ท่าสุด",
            "zipcodes": [
              "57100"
            ]
          }
        ]
      },
      {
        "name": "เวียงชัย",
        "subdistricts": [
          {
            "name": "เวียงชัย",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "ผางาม",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "เวียงเหนือ",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "ดอนศิลา",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "เมืองชุม",
            "zipcodes": [
              "57210"
            ]
          }
        ]
      },
      {
        "name": "เชียงของ",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "57140"
            ]
          },
          {
            "name": "สถาน",
            "zipcodes": [
              "57140"
            ]
          },
          {
            "name": "ครึ่ง",
            "zipcodes": [
              "57140"
            ]
          },
          {
            "name": "บุญเรือง",
            "zipcodes": [
              "57140"
            ]
          },
          {
            "name": "ห้วยซ้อ",
            "zipcodes": [
              "57140"
            ]
          },
          {
            "name": "ศรีดอนชัย",
            "zipcodes": [
              "57230"
            ]
          },
          {
            "name": "ริมโขง",
            "zipcodes": [
              "57140"
            ]
          }
        ]
      },
      {
        "name": "เทิง",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "งิ้ว",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "ปล้อง",
            "zipcodes": [
              "57230"
            ]
          },
          {
            "name": "แม่ลอย",
            "zipcodes": [
              "57230"
            ]
          },
          {
            "name": "เชียงเคี่ยน",
            "zipcodes": [
              "57230"
            ]
          },
          {
            "name": "ตับเต่า",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "หงาว",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "สันทรายงาม",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "ศรีดอนไชย",
            "zipcodes": [
              "57160"
            ]
          },
          {
            "name": "หนองแรด",
            "zipcodes": [
              "57160"
            ]
          }
        ]
      },
      {
        "name": "พาน",
        "subdistricts": [
          {
            "name": "สันมะเค็ด",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "แม่อ้อ",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ธารทอง",
            "zipcodes": [
              "57250"
            ]
          },
          {
            "name": "สันติสุข",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ดอยงาม",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "หัวง้ม",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "เจริญเมือง",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ป่าหุ่ง",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ม่วงคำ",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "สันกลาง",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "แม่เย็น",
            "zipcodes": [
              "57280"
            ]
          },
          {
            "name": "เมืองพาน",
            "zipcodes": [
              "57120"
            ]
          },
          {
            "name": "ทานตะวัน",
            "zipcodes": [
              "57280"
            ]
          },
          {
            "name": "เวียงห้าว",
            "zipcodes": [
              "57120"
            ]
          }
        ]
      },
      {
        "name": "ป่าแดด",
        "subdistricts": [
          {
            "name": "ป่าแดด",
            "zipcodes": [
              "57190"
            ]
          },
          {
            "name": "ป่าแงะ",
            "zipcodes": [
              "57190"
            ]
          },
          {
            "name": "สันมะค่า",
            "zipcodes": [
              "57190"
            ]
          },
          {
            "name": "โรงช้าง",
            "zipcodes": [
              "57190"
            ]
          },
          {
            "name": "ศรีโพธิ์เงิน",
            "zipcodes": [
              "57190"
            ]
          }
        ]
      },
      {
        "name": "แม่จัน",
        "subdistricts": [
          {
            "name": "แม่จัน",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "จันจว้า",
            "zipcodes": [
              "57270"
            ]
          },
          {
            "name": "แม่คำ",
            "zipcodes": [
              "57240"
            ]
          },
          {
            "name": "ป่าซาง",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "สันทราย",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "ท่าข้าวเปลือก",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "ป่าตึง",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "แม่ไร่",
            "zipcodes": [
              "57240"
            ]
          },
          {
            "name": "ศรีค้ำ",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "จันจว้าใต้",
            "zipcodes": [
              "57270"
            ]
          },
          {
            "name": "จอมสวรรค์",
            "zipcodes": [
              "57110"
            ]
          }
        ]
      },
      {
        "name": "เชียงแสน",
        "subdistricts": [
          {
            "name": "เวียง",
            "zipcodes": [
              "57150"
            ]
          },
          {
            "name": "ป่าสัก",
            "zipcodes": [
              "57150"
            ]
          },
          {
            "name": "บ้านแซว",
            "zipcodes": [
              "57150"
            ]
          },
          {
            "name": "ศรีดอนมูล",
            "zipcodes": [
              "57150"
            ]
          },
          {
            "name": "แม่เงิน",
            "zipcodes": [
              "57150"
            ]
          },
          {
            "name": "โยนก",
            "zipcodes": [
              "57150"
            ]
          }
        ]
      },
      {
        "name": "แม่สาย",
        "subdistricts": [
          {
            "name": "แม่สาย",
            "zipcodes": [
              "57130"
            ]
          },
          {
            "name": "ห้วยไคร้",
            "zipcodes": [
              "57220"
            ]
          },
          {
            "name": "เกาะช้าง",
            "zipcodes": [
              "57130"
            ]
          },
          {
            "name": "โป่งผา",
            "zipcodes": [
              "57130"
            ]
          },
          {
            "name": "ศรีเมืองชุม",
            "zipcodes": [
              "57130"
            ]
          },
          {
            "name": "เวียงพางคำ",
            "zipcodes": [
              "57130"
            ]
          },
          {
            "name": "บ้านด้าย",
            "zipcodes": [
              "57220"
            ]
          },
          {
            "name": "โป่งงาม",
            "zipcodes": [
              "57130"
            ]
          }
        ]
      },
      {
        "name": "แม่สรวย",
        "subdistricts": [
          {
            "name": "แม่สรวย",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "ป่าแดด",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "แม่พริก",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "ศรีถ้อย",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "ท่าก๊อ",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "วาวี",
            "zipcodes": [
              "57180"
            ]
          },
          {
            "name": "เจดีย์หลวง",
            "zipcodes": [
              "57180"
            ]
          }
        ]
      },
      {
        "name": "เวียงป่าเป้า",
        "subdistricts": [
          {
            "name": "สันสลี",
            "zipcodes": [
              "57170"
            ]
          },
          {
            "name": "เวียง",
            "zipcodes": [
              "57170"
            ]
          },
          {
            "name": "บ้านโป่ง",
            "zipcodes": [
              "57170"
            ]
          },
          {
            "name": "ป่างิ้ว",
            "zipcodes": [
              "57170"
            ]
          },
          {
            "name": "เวียงกาหลง",
            "zipcodes": [
              "57260"
            ]
          },
          {
            "name": "แม่เจดีย์",
            "zipcodes": [
              "57260"
            ]
          },
          {
            "name": "แม่เจดีย์ใหม่",
            "zipcodes": [
              "57260"
            ]
          }
        ]
      },
      {
        "name": "พญาเม็งราย",
        "subdistricts": [
          {
            "name": "แม่เปา",
            "zipcodes": [
              "57290"
            ]
          },
          {
            "name": "แม่ต๋ำ",
            "zipcodes": [
              "57290"
            ]
          },
          {
            "name": "ไม้ยา",
            "zipcodes": [
              "57290"
            ]
          },
          {
            "name": "เม็งราย",
            "zipcodes": [
              "57290"
            ]
          },
          {
            "name": "ตาดควัน",
            "zipcodes": [
              "57290"
            ]
          }
        ]
      },
      {
        "name": "เวียงแก่น",
        "subdistricts": [
          {
            "name": "ม่วงยาย",
            "zipcodes": [
              "57310"
            ]
          },
          {
            "name": "ปอ",
            "zipcodes": [
              "57310"
            ]
          },
          {
            "name": "หล่ายงาว",
            "zipcodes": [
              "57310"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "57310"
            ]
          }
        ]
      },
      {
        "name": "ขุนตาล",
        "subdistricts": [
          {
            "name": "ต้า",
            "zipcodes": [
              "57340"
            ]
          },
          {
            "name": "ป่าตาล",
            "zipcodes": [
              "57340"
            ]
          },
          {
            "name": "ยางฮอม",
            "zipcodes": [
              "57340"
            ]
          }
        ]
      },
      {
        "name": "แม่ฟ้าหลวง",
        "subdistricts": [
          {
            "name": "เทอดไทย",
            "zipcodes": [
              "57240"
            ]
          },
          {
            "name": "แม่สลองใน",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "แม่สลองนอก",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "แม่ฟ้าหลวง",
            "zipcodes": [
              "57240"
            ]
          }
        ]
      },
      {
        "name": "แม่ลาว",
        "subdistricts": [
          {
            "name": "ดงมะดะ",
            "zipcodes": [
              "57250"
            ]
          },
          {
            "name": "จอมหมอกแก้ว",
            "zipcodes": [
              "57250"
            ]
          },
          {
            "name": "บัวสลี",
            "zipcodes": [
              "57250"
            ]
          },
          {
            "name": "ป่าก่อดำ",
            "zipcodes": [
              "57250"
            ]
          },
          {
            "name": "โป่งแพร่",
            "zipcodes": [
              "57000"
            ]
          }
        ]
      },
      {
        "name": "เวียงเชียงรุ้ง",
        "subdistricts": [
          {
            "name": "ทุ่งก่อ",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "ดงมหาวัน",
            "zipcodes": [
              "57210"
            ]
          },
          {
            "name": "ป่าซาง",
            "zipcodes": [
              "57210"
            ]
          }
        ]
      },
      {
        "name": "ดอยหลวง",
        "subdistricts": [
          {
            "name": "ปงน้อย",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "โชคชัย",
            "zipcodes": [
              "57110"
            ]
          },
          {
            "name": "หนองป่าก่อ",
            "zipcodes": [
              "57110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "แม่ฮ่องสอน",
    "districts": [
      {
        "name": "เมืองแม่ฮ่องสอน",
        "subdistricts": [
          {
            "name": "จองคำ",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "ห้วยโป่ง",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "ผาบ่อง",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "ปางหมู",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "หมอกจำแป่",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "ห้วยผา",
            "zipcodes": [
              "58000"
            ]
          },
          {
            "name": "ห้วยปูลิง",
            "zipcodes": [
              "58000"
            ]
          }
        ]
      },
      {
        "name": "ขุนยวม",
        "subdistricts": [
          {
            "name": "ขุนยวม",
            "zipcodes": [
              "58140"
            ]
          },
          {
            "name": "แม่เงา",
            "zipcodes": [
              "58140"
            ]
          },
          {
            "name": "เมืองปอน",
            "zipcodes": [
              "58140"
            ]
          },
          {
            "name": "แม่ยวมน้อย",
            "zipcodes": [
              "58140"
            ]
          },
          {
            "name": "แม่กิ๊",
            "zipcodes": [
              "58140"
            ]
          },
          {
            "name": "แม่อูคอ",
            "zipcodes": [
              "58140"
            ]
          }
        ]
      },
      {
        "name": "ปาย",
        "subdistricts": [
          {
            "name": "เวียงใต้",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "เวียงเหนือ",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "แม่นาเติง",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "แม่ฮี้",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "ทุ่งยาว",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "เมืองแปง",
            "zipcodes": [
              "58130"
            ]
          },
          {
            "name": "โป่งสา",
            "zipcodes": [
              "58130"
            ]
          }
        ]
      },
      {
        "name": "แม่สะเรียง",
        "subdistricts": [
          {
            "name": "บ้านกาศ",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่สะเรียง",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่คง",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่เหาะ",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่ยวม",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "เสาหิน",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "ป่าแป๋",
            "zipcodes": [
              "58110"
            ]
          }
        ]
      },
      {
        "name": "แม่ลาน้อย",
        "subdistricts": [
          {
            "name": "แม่ลาน้อย",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "แม่ลาหลวง",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "ท่าผาปุ้ม",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "แม่โถ",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "ห้วยห้อม",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "แม่นาจาง",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "สันติคีรี",
            "zipcodes": [
              "58120"
            ]
          },
          {
            "name": "ขุนแม่ลาน้อย",
            "zipcodes": [
              "58120"
            ]
          }
        ]
      },
      {
        "name": "สบเมย",
        "subdistricts": [
          {
            "name": "สบเมย",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่คะตวน",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "กองก๋อย",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่สวด",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "ป่าโปง",
            "zipcodes": [
              "58110"
            ]
          },
          {
            "name": "แม่สามแลบ",
            "zipcodes": [
              "58110"
            ]
          }
        ]
      },
      {
        "name": "ปางมะผ้า",
        "subdistricts": [
          {
            "name": "สบป่อง",
            "zipcodes": [
              "58150"
            ]
          },
          {
            "name": "ปางมะผ้า",
            "zipcodes": [
              "58150"
            ]
          },
          {
            "name": "ถ้ำลอด",
            "zipcodes": [
              "58150"
            ]
          },
          {
            "name": "นาปู่ป้อม",
            "zipcodes": [
              "58150"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครสวรรค์",
    "districts": [
      {
        "name": "เมืองนครสวรรค์",
        "subdistricts": [
          {
            "name": "ปากน้ำโพ",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "กลางแดด",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "เกรียงไกร",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "แควใหญ่",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "ตะเคียนเลื่อน",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "นครสวรรค์ตก",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "นครสวรรค์ออก",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "บางพระหลวง",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "บางม่วง",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "บ้านมะเกลือ",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "บ้านแก่ง",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "พระนอน",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "วัดไทร",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "หนองกรด",
            "zipcodes": [
              "60240"
            ]
          },
          {
            "name": "หนองกระโดน",
            "zipcodes": [
              "60240"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "60000"
            ]
          },
          {
            "name": "บึงเสนาท",
            "zipcodes": [
              "60000"
            ]
          }
        ]
      },
      {
        "name": "โกรกพระ",
        "subdistricts": [
          {
            "name": "โกรกพระ",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "ยางตาล",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "บางมะฝ่อ",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "บางประมุง",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "นากลาง",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "ศาลาแดง",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "เนินกว้าว",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "เนินศาลา",
            "zipcodes": [
              "60170"
            ]
          },
          {
            "name": "หาดสูง",
            "zipcodes": [
              "60170"
            ]
          }
        ]
      },
      {
        "name": "ชุมแสง",
        "subdistricts": [
          {
            "name": "ชุมแสง",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "ทับกฤช",
            "zipcodes": [
              "60250"
            ]
          },
          {
            "name": "พิกุล",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "เกยไชย",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "ท่าไม้",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "บางเคียน",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "หนองกระเจา",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "พันลาน",
            "zipcodes": [
              "60250"
            ]
          },
          {
            "name": "โคกหม้อ",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "ไผ่สิงห์",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "ฆะมัง",
            "zipcodes": [
              "60120"
            ]
          },
          {
            "name": "ทับกฤชใต้",
            "zipcodes": [
              "60250"
            ]
          }
        ]
      },
      {
        "name": "หนองบัว",
        "subdistricts": [
          {
            "name": "หนองบัว",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "หนองกลับ",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ธารทหาร",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ห้วยร่วม",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ห้วยถั่วใต้",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ห้วยถั่วเหนือ",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ห้วยใหญ่",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "ทุ่งทอง",
            "zipcodes": [
              "60110"
            ]
          },
          {
            "name": "วังบ่อ",
            "zipcodes": [
              "60110"
            ]
          }
        ]
      },
      {
        "name": "บรรพตพิสัย",
        "subdistricts": [
          {
            "name": "ท่างิ้ว",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "บางตาหงาย",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "หูกวาง",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "บ้านแดน",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "ตาขีด",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "ตาสัง",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "ด่านช้าง",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "หนองกรด",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "หนองตางู",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "บึงปลาทู",
            "zipcodes": [
              "60180"
            ]
          },
          {
            "name": "เจริญผล",
            "zipcodes": [
              "60180"
            ]
          }
        ]
      },
      {
        "name": "เก้าเลี้ยว",
        "subdistricts": [
          {
            "name": "มหาโพธิ",
            "zipcodes": [
              "60230"
            ]
          },
          {
            "name": "เก้าเลี้ยว",
            "zipcodes": [
              "60230"
            ]
          },
          {
            "name": "หนองเต่า",
            "zipcodes": [
              "60230"
            ]
          },
          {
            "name": "เขาดิน",
            "zipcodes": [
              "60230"
            ]
          },
          {
            "name": "หัวดง",
            "zipcodes": [
              "60230"
            ]
          }
        ]
      },
      {
        "name": "ตาคลี",
        "subdistricts": [
          {
            "name": "ตาคลี",
            "zipcodes": [
              "60140"
            ]
          },
          {
            "name": "ช่องแค",
            "zipcodes": [
              "60210"
            ]
          },
          {
            "name": "จันเสน",
            "zipcodes": [
              "60260"
            ]
          },
          {
            "name": "ห้วยหอม",
            "zipcodes": [
              "60210"
            ]
          },
          {
            "name": "หัวหวาย",
            "zipcodes": [
              "60140"
            ]
          },
          {
            "name": "หนองโพ",
            "zipcodes": [
              "60140"
            ]
          },
          {
            "name": "หนองหม้อ",
            "zipcodes": [
              "60140"
            ]
          },
          {
            "name": "สร้อยทอง",
            "zipcodes": [
              "60210"
            ]
          },
          {
            "name": "ลาดทิพรส",
            "zipcodes": [
              "60260"
            ]
          },
          {
            "name": "พรหมนิมิต",
            "zipcodes": [
              "60210"
            ]
          }
        ]
      },
      {
        "name": "ท่าตะโก",
        "subdistricts": [
          {
            "name": "ท่าตะโก",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "พนมรอก",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "หัวถนน",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "สายลำโพง",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "วังมหากร",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "ดอนคา",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "ทำนบ",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "วังใหญ่",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "พนมเศษ",
            "zipcodes": [
              "60160"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "60160"
            ]
          }
        ]
      },
      {
        "name": "ไพศาลี",
        "subdistricts": [
          {
            "name": "โคกเดื่อ",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "สำโรงชัย",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "วังน้ำลัด",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "ตะคร้อ",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "โพธิ์ประสาท",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "วังข่อย",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "นาขอม",
            "zipcodes": [
              "60220"
            ]
          },
          {
            "name": "ไพศาลี",
            "zipcodes": [
              "60220"
            ]
          }
        ]
      },
      {
        "name": "พยุหะคีรี",
        "subdistricts": [
          {
            "name": "พยุหะ",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "เนินมะกอก",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "นิคมเขาบ่อแก้ว",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "ม่วงหัก",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "ยางขาว",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "ย่านมัทรี",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "เขาทอง",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "ท่าน้ำอ้อย",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "น้ำทรง",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "เขากะลา",
            "zipcodes": [
              "60130"
            ]
          },
          {
            "name": "สระทะเล",
            "zipcodes": [
              "60130"
            ]
          }
        ]
      },
      {
        "name": "ลาดยาว",
        "subdistricts": [
          {
            "name": "ลาดยาว",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "ห้วยน้ำหอม",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "วังม้า",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "วังเมือง",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "สร้อยละคร",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "มาบแก",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "หนองยาว",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "หนองนมวัว",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "เนินขี้เหล็ก",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "ศาลเจ้าไก่ต่อ",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "60150"
            ]
          }
        ]
      },
      {
        "name": "ตากฟ้า",
        "subdistricts": [
          {
            "name": "ตากฟ้า",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "ลำพยนต์",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "สุขสำราญ",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "หนองพิกุล",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "พุนกยูง",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "อุดมธัญญา",
            "zipcodes": [
              "60190"
            ]
          },
          {
            "name": "เขาชายธง",
            "zipcodes": [
              "60190"
            ]
          }
        ]
      },
      {
        "name": "แม่วงก์",
        "subdistricts": [
          {
            "name": "แม่วงก์",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "แม่เล่ย์",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "วังซ่าน",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "เขาชนกัน",
            "zipcodes": [
              "60150"
            ]
          }
        ]
      },
      {
        "name": "แม่เปิน",
        "subdistricts": [
          {
            "name": "แม่เปิน",
            "zipcodes": [
              "60150"
            ]
          }
        ]
      },
      {
        "name": "ชุมตาบง",
        "subdistricts": [
          {
            "name": "ชุมตาบง",
            "zipcodes": [
              "60150"
            ]
          },
          {
            "name": "ปางสวรรค์",
            "zipcodes": [
              "60150"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "อุทัยธานี",
    "districts": [
      {
        "name": "เมืองอุทัยธานี",
        "subdistricts": [
          {
            "name": "อุทัยใหม่",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "น้ำซึม",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "สะแกกรัง",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "ดอนขวาง",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "หาดทนง",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "เกาะเทโพ",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "ท่าซุง",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "หนองแก",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "โนนเหล็ก",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "หนองเต่า",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "หนองไผ่แบน",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "หนองพังค่า",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "61000"
            ]
          },
          {
            "name": "เนินแจง",
            "zipcodes": [
              "61000"
            ]
          }
        ]
      },
      {
        "name": "ทัพทัน",
        "subdistricts": [
          {
            "name": "ทัพทัน",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "ทุ่งนาไทย",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "เขาขี้ฝอย",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "หนองหญ้าปล้อง",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "โคกหม้อ",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "หนองยายดา",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "หนองกลางดง",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "หนองสระ",
            "zipcodes": [
              "61120"
            ]
          },
          {
            "name": "ตลุกดู่",
            "zipcodes": [
              "61120"
            ]
          }
        ]
      },
      {
        "name": "สว่างอารมณ์",
        "subdistricts": [
          {
            "name": "สว่างอารมณ์",
            "zipcodes": [
              "61150"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "61150"
            ]
          },
          {
            "name": "พลวงสองนาง",
            "zipcodes": [
              "61150"
            ]
          },
          {
            "name": "ไผ่เขียว",
            "zipcodes": [
              "61150"
            ]
          },
          {
            "name": "บ่อยาง",
            "zipcodes": [
              "61150"
            ]
          }
        ]
      },
      {
        "name": "หนองฉาง",
        "subdistricts": [
          {
            "name": "หนองฉาง",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "หนองยาง",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "หนองนางนวล",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "หนองสรวง",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "บ้านเก่า",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "อุทัยเก่า",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "ทุ่งโพ",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "ทุ่งพง",
            "zipcodes": [
              "61110"
            ]
          },
          {
            "name": "เขาบางแกรก",
            "zipcodes": [
              "61170"
            ]
          },
          {
            "name": "เขากวางทอง",
            "zipcodes": [
              "61110"
            ]
          }
        ]
      },
      {
        "name": "หนองขาหย่าง",
        "subdistricts": [
          {
            "name": "หนองขาหย่าง",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "ดอนกลอย",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "ห้วยรอบ",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "ทุ่งพึ่ง",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "ท่าโพ",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "หมกแถว",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "หลุมเข้า",
            "zipcodes": [
              "61130"
            ]
          },
          {
            "name": "ดงขวาง",
            "zipcodes": [
              "61130"
            ]
          }
        ]
      },
      {
        "name": "บ้านไร่",
        "subdistricts": [
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "ทัพหลวง",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "ห้วยแห้ง",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "คอกควาย",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "เมืองการุ้ง",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "แก่นมะกรูด",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "หนองจอก",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "หูช้าง",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "บ้านบึง",
            "zipcodes": [
              "61140"
            ]
          },
          {
            "name": "บ้านใหม่คลองเคียน",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "หนองบ่มกล้วย",
            "zipcodes": [
              "61180"
            ]
          },
          {
            "name": "เจ้าวัด",
            "zipcodes": [
              "61140"
            ]
          }
        ]
      },
      {
        "name": "ลานสัก",
        "subdistricts": [
          {
            "name": "ลานสัก",
            "zipcodes": [
              "61160"
            ]
          },
          {
            "name": "ประดู่ยืน",
            "zipcodes": [
              "61160"
            ]
          },
          {
            "name": "ป่าอ้อ",
            "zipcodes": [
              "61160"
            ]
          },
          {
            "name": "ระบำ",
            "zipcodes": [
              "61160"
            ]
          },
          {
            "name": "น้ำรอบ",
            "zipcodes": [
              "61160"
            ]
          },
          {
            "name": "ทุ่งนางาม",
            "zipcodes": [
              "61160"
            ]
          }
        ]
      },
      {
        "name": "ห้วยคต",
        "subdistricts": [
          {
            "name": "สุขฤทัย",
            "zipcodes": [
              "61170"
            ]
          },
          {
            "name": "ทองหลาง",
            "zipcodes": [
              "61170"
            ]
          },
          {
            "name": "ห้วยคต",
            "zipcodes": [
              "61170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "กำแพงเพชร",
    "districts": [
      {
        "name": "เมืองกำแพงเพชร",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ไตรตรึงษ์",
            "zipcodes": [
              "62160"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "นาบ่อคำ",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "นครชุม",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ทรงธรรม",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ลานดอกไม้",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "คณฑี",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "นิคมทุ่งโพธิ์ทะเล",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "เทพนคร",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ท่าขุนราม",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "คลองแม่ลาย",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ธำมรงค์",
            "zipcodes": [
              "62160"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "62000"
            ]
          }
        ]
      },
      {
        "name": "ไทรงาม",
        "subdistricts": [
          {
            "name": "ไทรงาม",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "หนองคล้า",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "หนองทอง",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "หนองไม้กอง",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "มหาชัย",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "พานทอง",
            "zipcodes": [
              "62150"
            ]
          },
          {
            "name": "หนองแม่แตง",
            "zipcodes": [
              "62150"
            ]
          }
        ]
      },
      {
        "name": "คลองลาน",
        "subdistricts": [
          {
            "name": "คลองน้ำไหล",
            "zipcodes": [
              "62180"
            ]
          },
          {
            "name": "โป่งน้ำร้อน",
            "zipcodes": [
              "62180"
            ]
          },
          {
            "name": "คลองลานพัฒนา",
            "zipcodes": [
              "62180"
            ]
          },
          {
            "name": "สักงาม",
            "zipcodes": [
              "62180"
            ]
          }
        ]
      },
      {
        "name": "ขาณุวรลักษบุรี",
        "subdistricts": [
          {
            "name": "ยางสูง",
            "zipcodes": [
              "62130"
            ]
          },
          {
            "name": "ป่าพุทรา",
            "zipcodes": [
              "62130"
            ]
          },
          {
            "name": "แสนตอ",
            "zipcodes": [
              "62130"
            ]
          },
          {
            "name": "สลกบาตร",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "บ่อถ้ำ",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "ดอนแตง",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "วังชะพลู",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "โค้งไผ่",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "ปางมะค่า",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "วังหามแห",
            "zipcodes": [
              "62140"
            ]
          },
          {
            "name": "เกาะตาล",
            "zipcodes": [
              "62130"
            ]
          }
        ]
      },
      {
        "name": "คลองขลุง",
        "subdistricts": [
          {
            "name": "คลองขลุง",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "ท่ามะเขือ",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "ท่าพุทรา",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "แม่ลาด",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "วังยาง",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "วังแขม",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "หัวถนน",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "วังไทร",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "วังบัว",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "คลองสมบูรณ์",
            "zipcodes": [
              "62120"
            ]
          }
        ]
      },
      {
        "name": "พรานกระต่าย",
        "subdistricts": [
          {
            "name": "พรานกระต่าย",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "หนองหัววัว",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "ท่าไม้",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "วังควง",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "วังตะแบก",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "เขาคีริส",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "คุยบ้านโอง",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "คลองพิไกร",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "ถ้ำกระต่ายทอง",
            "zipcodes": [
              "62110"
            ]
          },
          {
            "name": "ห้วยยั้ง",
            "zipcodes": [
              "62110"
            ]
          }
        ]
      },
      {
        "name": "ลานกระบือ",
        "subdistricts": [
          {
            "name": "ลานกระบือ",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "ช่องลม",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "โนนพลวง",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "ประชาสุขสันต์",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "บึงทับแรต",
            "zipcodes": [
              "62170"
            ]
          },
          {
            "name": "จันทิมา",
            "zipcodes": [
              "62170"
            ]
          }
        ]
      },
      {
        "name": "ทรายทองวัฒนา",
        "subdistricts": [
          {
            "name": "ทุ่งทราย",
            "zipcodes": [
              "62190"
            ]
          },
          {
            "name": "ทุ่งทอง",
            "zipcodes": [
              "62190"
            ]
          },
          {
            "name": "ถาวรวัฒนา",
            "zipcodes": [
              "62190"
            ]
          }
        ]
      },
      {
        "name": "ปางศิลาทอง",
        "subdistricts": [
          {
            "name": "โพธิ์ทอง",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "หินดาต",
            "zipcodes": [
              "62120"
            ]
          },
          {
            "name": "ปางตาไว",
            "zipcodes": [
              "62120"
            ]
          }
        ]
      },
      {
        "name": "บึงสามัคคี",
        "subdistricts": [
          {
            "name": "บึงสามัคคี",
            "zipcodes": [
              "62210"
            ]
          },
          {
            "name": "วังชะโอน",
            "zipcodes": [
              "62210"
            ]
          },
          {
            "name": "ระหาน",
            "zipcodes": [
              "62210"
            ]
          },
          {
            "name": "เทพนิมิต",
            "zipcodes": [
              "62210"
            ]
          }
        ]
      },
      {
        "name": "โกสัมพีนคร",
        "subdistricts": [
          {
            "name": "โกสัมพี",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "เพชรชมภู",
            "zipcodes": [
              "62000"
            ]
          },
          {
            "name": "ลานดอกไม้ตก",
            "zipcodes": [
              "62000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ตาก",
    "districts": [
      {
        "name": "เมืองตาก",
        "subdistricts": [
          {
            "name": "ระแหง",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "เชียงเงิน",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "หัวเดียด",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "หนองบัวเหนือ",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "ไม้งาม",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "โป่งแดง",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "น้ำรึม",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "แม่ท้อ",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "ป่ามะม่วง",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "หนองบัวใต้",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "วังประจบ",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "ตลุกกลางทุ่ง",
            "zipcodes": [
              "63000"
            ]
          }
        ]
      },
      {
        "name": "บ้านตาก",
        "subdistricts": [
          {
            "name": "ตากออก",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "สมอโคน",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "แม่สลิด",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "ตากตก",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "เกาะตะเภา",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "ทุ่งกระเชาะ",
            "zipcodes": [
              "63120"
            ]
          },
          {
            "name": "ท้องฟ้า",
            "zipcodes": [
              "63120"
            ]
          }
        ]
      },
      {
        "name": "สามเงา",
        "subdistricts": [
          {
            "name": "สามเงา",
            "zipcodes": [
              "63130"
            ]
          },
          {
            "name": "วังหมัน",
            "zipcodes": [
              "63130"
            ]
          },
          {
            "name": "ยกกระบัตร",
            "zipcodes": [
              "63130"
            ]
          },
          {
            "name": "ย่านรี",
            "zipcodes": [
              "63130"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "63130"
            ]
          },
          {
            "name": "วังจันทร์",
            "zipcodes": [
              "63130"
            ]
          }
        ]
      },
      {
        "name": "แม่ระมาด",
        "subdistricts": [
          {
            "name": "แม่ระมาด",
            "zipcodes": [
              "63140"
            ]
          },
          {
            "name": "แม่จะเรา",
            "zipcodes": [
              "63140"
            ]
          },
          {
            "name": "ขะเนจื้อ",
            "zipcodes": [
              "63140"
            ]
          },
          {
            "name": "แม่ตื่น",
            "zipcodes": [
              "63140"
            ]
          },
          {
            "name": "สามหมื่น",
            "zipcodes": [
              "63140"
            ]
          },
          {
            "name": "พระธาตุ",
            "zipcodes": [
              "63140"
            ]
          }
        ]
      },
      {
        "name": "ท่าสองยาง",
        "subdistricts": [
          {
            "name": "ท่าสองยาง",
            "zipcodes": [
              "63150"
            ]
          },
          {
            "name": "แม่ต้าน",
            "zipcodes": [
              "63150"
            ]
          },
          {
            "name": "แม่สอง",
            "zipcodes": [
              "63150"
            ]
          },
          {
            "name": "แม่หละ",
            "zipcodes": [
              "63150"
            ]
          },
          {
            "name": "แม่วะหลวง",
            "zipcodes": [
              "63150"
            ]
          },
          {
            "name": "แม่อุสุ",
            "zipcodes": [
              "63150"
            ]
          }
        ]
      },
      {
        "name": "แม่สอด",
        "subdistricts": [
          {
            "name": "แม่สอด",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "แม่กุ",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "พะวอ",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "แม่ตาว",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "แม่กาษา",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "ท่าสายลวด",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "แม่ปะ",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "มหาวัน",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "ด่านแม่ละเมา",
            "zipcodes": [
              "63110"
            ]
          },
          {
            "name": "พระธาตุผาแดง",
            "zipcodes": [
              "63110"
            ]
          }
        ]
      },
      {
        "name": "พบพระ",
        "subdistricts": [
          {
            "name": "พบพระ",
            "zipcodes": [
              "63160"
            ]
          },
          {
            "name": "ช่องแคบ",
            "zipcodes": [
              "63160"
            ]
          },
          {
            "name": "คีรีราษฎร์",
            "zipcodes": [
              "63160"
            ]
          },
          {
            "name": "วาเล่ย์",
            "zipcodes": [
              "63160"
            ]
          },
          {
            "name": "รวมไทยพัฒนา",
            "zipcodes": [
              "63160"
            ]
          }
        ]
      },
      {
        "name": "อุ้มผาง",
        "subdistricts": [
          {
            "name": "อุ้มผาง",
            "zipcodes": [
              "63170"
            ]
          },
          {
            "name": "หนองหลวง",
            "zipcodes": [
              "63170"
            ]
          },
          {
            "name": "โมโกร",
            "zipcodes": [
              "63170"
            ]
          },
          {
            "name": "แม่จัน",
            "zipcodes": [
              "63170"
            ]
          },
          {
            "name": "แม่ละมุ้ง",
            "zipcodes": [
              "63170"
            ]
          },
          {
            "name": "แม่กลอง",
            "zipcodes": [
              "63170"
            ]
          }
        ]
      },
      {
        "name": "วังเจ้า",
        "subdistricts": [
          {
            "name": "เชียงทอง",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "นาโบสถ์",
            "zipcodes": [
              "63000"
            ]
          },
          {
            "name": "ประดาง",
            "zipcodes": [
              "63000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สุโขทัย",
    "districts": [
      {
        "name": "เมืองสุโขทัย",
        "subdistricts": [
          {
            "name": "ธานี",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "บ้านสวน",
            "zipcodes": [
              "64220"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "64210"
            ]
          },
          {
            "name": "ปากแคว",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "ยางซ้าย",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "บ้านกล้วย",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "บ้านหลุม",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "ตาลเตี้ย",
            "zipcodes": [
              "64220"
            ]
          },
          {
            "name": "ปากพระ",
            "zipcodes": [
              "64000"
            ]
          },
          {
            "name": "วังทองแดง",
            "zipcodes": [
              "64210"
            ]
          }
        ]
      },
      {
        "name": "บ้านด่านลานหอย",
        "subdistricts": [
          {
            "name": "ลานหอย",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "บ้านด่าน",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "วังตะคร้อ",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "วังน้ำขาว",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "หนองหญ้าปล้อง",
            "zipcodes": [
              "64140"
            ]
          },
          {
            "name": "วังลึก",
            "zipcodes": [
              "64140"
            ]
          }
        ]
      },
      {
        "name": "คีรีมาศ",
        "subdistricts": [
          {
            "name": "โตนด",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "บ้านป้อม",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "สามพวง",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "ศรีคีรีมาศ",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "หนองจิก",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "นาเชิงคีรี",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "หนองกระดิ่ง",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "บ้านน้ำพุ",
            "zipcodes": [
              "64160"
            ]
          },
          {
            "name": "ทุ่งยางเมือง",
            "zipcodes": [
              "64160"
            ]
          }
        ]
      },
      {
        "name": "กงไกรลาศ",
        "subdistricts": [
          {
            "name": "กง",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "บ้านกร่าง",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ไกรนอก",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ไกรกลาง",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ไกรใน",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ดงเดือย",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ป่าแฝก",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "กกแรต",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "ท่าฉนวน",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "หนองตูม",
            "zipcodes": [
              "64170"
            ]
          },
          {
            "name": "บ้านใหม่สุขเกษม",
            "zipcodes": [
              "64170"
            ]
          }
        ]
      },
      {
        "name": "ศรีสัชนาลัย",
        "subdistricts": [
          {
            "name": "หาดเสี้ยว",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "ป่างิ้ว",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "แม่สำ",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "แม่สิน",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "บ้านตึก",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "หนองอ้อ",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "ท่าชัย",
            "zipcodes": [
              "64190"
            ]
          },
          {
            "name": "ศรีสัชนาลัย",
            "zipcodes": [
              "64190"
            ]
          },
          {
            "name": "ดงคู่",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "บ้านแก่ง",
            "zipcodes": [
              "64130"
            ]
          },
          {
            "name": "สารจิตร",
            "zipcodes": [
              "64130"
            ]
          }
        ]
      },
      {
        "name": "ศรีสำโรง",
        "subdistricts": [
          {
            "name": "คลองตาล",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "วังลึก",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "สามเรือน",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "วังทอง",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "นาขุนไกร",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "เกาะตาเลี้ยง",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "วัดเกาะ",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "ทับผึ้ง",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "บ้านซ่าน",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "วังใหญ่",
            "zipcodes": [
              "64120"
            ]
          },
          {
            "name": "ราวต้นจันทร์",
            "zipcodes": [
              "64120"
            ]
          }
        ]
      },
      {
        "name": "สวรรคโลก",
        "subdistricts": [
          {
            "name": "เมืองสวรรคโลก",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "ในเมือง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "คลองกระจง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "วังพิณพาทย์",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "วังไม้ขอน",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "ย่านยาว",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "นาทุ่ง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "คลองยาง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "เมืองบางยม",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "ท่าทอง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "ป่ากุมเกาะ",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "เมืองบางขลัง",
            "zipcodes": [
              "64110"
            ]
          },
          {
            "name": "หนองกลับ",
            "zipcodes": [
              "64110"
            ]
          }
        ]
      },
      {
        "name": "ศรีนคร",
        "subdistricts": [
          {
            "name": "ศรีนคร",
            "zipcodes": [
              "64180"
            ]
          },
          {
            "name": "นครเดิฐ",
            "zipcodes": [
              "64180"
            ]
          },
          {
            "name": "น้ำขุม",
            "zipcodes": [
              "64180"
            ]
          },
          {
            "name": "คลองมะพลับ",
            "zipcodes": [
              "64180"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "64180"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งเสลี่ยม",
        "subdistricts": [
          {
            "name": "บ้านใหม่ไชยมงคล",
            "zipcodes": [
              "64230"
            ]
          },
          {
            "name": "ไทยชนะศึก",
            "zipcodes": [
              "64150"
            ]
          },
          {
            "name": "ทุ่งเสลี่ยม",
            "zipcodes": [
              "64150"
            ]
          },
          {
            "name": "กลางดง",
            "zipcodes": [
              "64150"
            ]
          },
          {
            "name": "เขาแก้วศรีสมบูรณ์",
            "zipcodes": [
              "64230"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พิษณุโลก",
    "districts": [
      {
        "name": "เมืองพิษณุโลก",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "วังน้ำคู้",
            "zipcodes": [
              "65230"
            ]
          },
          {
            "name": "วัดจันทร์",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "วัดพริก",
            "zipcodes": [
              "65230"
            ]
          },
          {
            "name": "ท่าทอง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "ท่าโพธิ์",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "สมอแข",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "ดอนทอง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "บ้านป่า",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "ปากโทก",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "หัวรอ",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "จอมทอง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "บ้านกร่าง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "บ้านคลอง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "พลายชุมพล",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "มะขามสูง",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "อรัญญิก",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "บึงพระ",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "ไผ่ขอดอน",
            "zipcodes": [
              "65000"
            ]
          },
          {
            "name": "งิ้วงาม",
            "zipcodes": [
              "65230"
            ]
          }
        ]
      },
      {
        "name": "นครไทย",
        "subdistricts": [
          {
            "name": "นครไทย",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "หนองกะท้าว",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "บ้านแยง",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "เนินเพิ่ม",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "นาบัว",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "นครชุม",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "น้ำกุ่ม",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "ยางโกลน",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "บ่อโพธิ์",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "บ้านพร้าว",
            "zipcodes": [
              "65120"
            ]
          },
          {
            "name": "ห้วยเฮี้ย",
            "zipcodes": [
              "65120"
            ]
          }
        ]
      },
      {
        "name": "ชาติตระการ",
        "subdistricts": [
          {
            "name": "ป่าแดง",
            "zipcodes": [
              "65170"
            ]
          },
          {
            "name": "ชาติตระการ",
            "zipcodes": [
              "65170"
            ]
          },
          {
            "name": "สวนเมี่ยง",
            "zipcodes": [
              "65170"
            ]
          },
          {
            "name": "บ้านดง",
            "zipcodes": [
              "65170"
            ]
          },
          {
            "name": "บ่อภาค",
            "zipcodes": [
              "65170"
            ]
          },
          {
            "name": "ท่าสะแก",
            "zipcodes": [
              "65170"
            ]
          }
        ]
      },
      {
        "name": "บางระกำ",
        "subdistricts": [
          {
            "name": "บางระกำ",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "ปลักแรด",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "พันเสา",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "วังอิทก",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "บึงกอก",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "หนองกุลา",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "ชุมแสงสงคราม",
            "zipcodes": [
              "65240"
            ]
          },
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "ท่านางงาม",
            "zipcodes": [
              "65140"
            ]
          },
          {
            "name": "คุยม่วง",
            "zipcodes": [
              "65240"
            ]
          }
        ]
      },
      {
        "name": "บางกระทุ่ม",
        "subdistricts": [
          {
            "name": "บางกระทุ่ม",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "โคกสลุด",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "สนามคลี",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "ท่าตาล",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "ไผ่ล้อม",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "นครป่าหมาก",
            "zipcodes": [
              "65110"
            ]
          },
          {
            "name": "เนินกุ่ม",
            "zipcodes": [
              "65210"
            ]
          },
          {
            "name": "วัดตายม",
            "zipcodes": [
              "65210"
            ]
          }
        ]
      },
      {
        "name": "พรหมพิราม",
        "subdistricts": [
          {
            "name": "พรหมพิราม",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "วงฆ้อง",
            "zipcodes": [
              "65180"
            ]
          },
          {
            "name": "มะตูม",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "หอกลอง",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "ศรีภิรมย์",
            "zipcodes": [
              "65180"
            ]
          },
          {
            "name": "ตลุกเทียม",
            "zipcodes": [
              "65180"
            ]
          },
          {
            "name": "วังวน",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "หนองแขม",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "มะต้อง",
            "zipcodes": [
              "65180"
            ]
          },
          {
            "name": "ทับยายเชียง",
            "zipcodes": [
              "65150"
            ]
          },
          {
            "name": "ดงประคำ",
            "zipcodes": [
              "65180"
            ]
          }
        ]
      },
      {
        "name": "วัดโบสถ์",
        "subdistricts": [
          {
            "name": "วัดโบสถ์",
            "zipcodes": [
              "65160"
            ]
          },
          {
            "name": "ท่างาม",
            "zipcodes": [
              "65160"
            ]
          },
          {
            "name": "ท้อแท้",
            "zipcodes": [
              "65160"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "65160"
            ]
          },
          {
            "name": "หินลาด",
            "zipcodes": [
              "65160"
            ]
          },
          {
            "name": "คันโช้ง",
            "zipcodes": [
              "65160"
            ]
          }
        ]
      },
      {
        "name": "วังทอง",
        "subdistricts": [
          {
            "name": "วังทอง",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "พันชาลี",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "แม่ระกา",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "65220"
            ]
          },
          {
            "name": "วังพิกุล",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "แก่งโสภา",
            "zipcodes": [
              "65220"
            ]
          },
          {
            "name": "ท่าหมื่นราม",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "วังนกแอ่น",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "หนองพระ",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "ชัยนาม",
            "zipcodes": [
              "65130"
            ]
          },
          {
            "name": "ดินทอง",
            "zipcodes": [
              "65130"
            ]
          }
        ]
      },
      {
        "name": "เนินมะปราง",
        "subdistricts": [
          {
            "name": "ชมพู",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "บ้านมุง",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "ไทรย้อย",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "วังโพรง",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "บ้านน้อยซุ้มขี้เหล็ก",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "เนินมะปราง",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "วังยาง",
            "zipcodes": [
              "65190"
            ]
          },
          {
            "name": "โคกแหลม",
            "zipcodes": [
              "65190"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พิจิตร",
    "districts": [
      {
        "name": "เมืองพิจิตร",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ไผ่ขวาง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ย่านยาว",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ท่าฬ่อ",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ปากทาง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "คลองคะเชนทร์",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "โรงช้าง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "เมืองเก่า",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ท่าหลวง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "บ้านบุ่ง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ฆะมัง",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ดงป่าคำ",
            "zipcodes": [
              "66170"
            ]
          },
          {
            "name": "หัวดง",
            "zipcodes": [
              "66170"
            ]
          },
          {
            "name": "ป่ามะคาบ",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "สายคำโห้",
            "zipcodes": [
              "66000"
            ]
          },
          {
            "name": "ดงกลาง",
            "zipcodes": [
              "66170"
            ]
          }
        ]
      },
      {
        "name": "วังทรายพูน",
        "subdistricts": [
          {
            "name": "วังทรายพูน",
            "zipcodes": [
              "66180"
            ]
          },
          {
            "name": "หนองปลาไหล",
            "zipcodes": [
              "66180"
            ]
          },
          {
            "name": "หนองพระ",
            "zipcodes": [
              "66180"
            ]
          },
          {
            "name": "หนองปล้อง",
            "zipcodes": [
              "66180"
            ]
          }
        ]
      },
      {
        "name": "โพธิ์ประทับช้าง",
        "subdistricts": [
          {
            "name": "โพธิ์ประทับช้าง",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "ไผ่ท่าโพ",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "วังจิก",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "ไผ่รอบ",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "ดงเสือเหลือง",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "เนินสว่าง",
            "zipcodes": [
              "66190"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "66190"
            ]
          }
        ]
      },
      {
        "name": "ตะพานหิน",
        "subdistricts": [
          {
            "name": "ตะพานหิน",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "งิ้วราย",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "ห้วยเกตุ",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "ไทรโรงโขน",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "หนองพยอม",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "ทุ่งโพธิ์",
            "zipcodes": [
              "66150"
            ]
          },
          {
            "name": "ดงตะขบ",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "คลองคูณ",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "วังสำโรง",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "วังหว้า",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "วังหลุม",
            "zipcodes": [
              "66150"
            ]
          },
          {
            "name": "ทับหมัน",
            "zipcodes": [
              "66110"
            ]
          },
          {
            "name": "ไผ่หลวง",
            "zipcodes": [
              "66110"
            ]
          }
        ]
      },
      {
        "name": "บางมูลนาก",
        "subdistricts": [
          {
            "name": "บางมูลนาก",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "บางไผ่",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "หอไกร",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "เนินมะกอก",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "วังสำโรง",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "ภูมิ",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "วังกรด",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "ห้วยเขน",
            "zipcodes": [
              "66120"
            ]
          },
          {
            "name": "วังตะกู",
            "zipcodes": [
              "66210"
            ]
          },
          {
            "name": "ลำประดา",
            "zipcodes": [
              "66120"
            ]
          }
        ]
      },
      {
        "name": "โพทะเล",
        "subdistricts": [
          {
            "name": "โพทะเล",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ท้ายน้ำ",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ทะนง",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ท่าบัว",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ทุ่งน้อย",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ท่าขมิ้น",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ท่าเสา",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "บางคลาน",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "ท่านั่ง",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "บ้านน้อย",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "วัดขวาง",
            "zipcodes": [
              "66130"
            ]
          }
        ]
      },
      {
        "name": "สามง่าม",
        "subdistricts": [
          {
            "name": "สามง่าม",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "กำแพงดิน",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "รังนก",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "เนินปอ",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "หนองโสน",
            "zipcodes": [
              "66140"
            ]
          }
        ]
      },
      {
        "name": "ทับคล้อ",
        "subdistricts": [
          {
            "name": "ทับคล้อ",
            "zipcodes": [
              "66150"
            ]
          },
          {
            "name": "เขาทราย",
            "zipcodes": [
              "66230"
            ]
          },
          {
            "name": "เขาเจ็ดลูก",
            "zipcodes": [
              "66230"
            ]
          },
          {
            "name": "ท้ายทุ่ง",
            "zipcodes": [
              "66150"
            ]
          }
        ]
      },
      {
        "name": "สากเหล็ก",
        "subdistricts": [
          {
            "name": "สากเหล็ก",
            "zipcodes": [
              "66160"
            ]
          },
          {
            "name": "ท่าเยี่ยม",
            "zipcodes": [
              "66160"
            ]
          },
          {
            "name": "คลองทราย",
            "zipcodes": [
              "66160"
            ]
          },
          {
            "name": "หนองหญ้าไทร",
            "zipcodes": [
              "66160"
            ]
          },
          {
            "name": "วังทับไทร",
            "zipcodes": [
              "66160"
            ]
          }
        ]
      },
      {
        "name": "บึงนาราง",
        "subdistricts": [
          {
            "name": "ห้วยแก้ว",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "โพธิ์ไทรงาม",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "แหลมรัง",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "บางลาย",
            "zipcodes": [
              "66130"
            ]
          },
          {
            "name": "บึงนาราง",
            "zipcodes": [
              "66130"
            ]
          }
        ]
      },
      {
        "name": "ดงเจริญ",
        "subdistricts": [
          {
            "name": "วังงิ้วใต้",
            "zipcodes": [
              "66210"
            ]
          },
          {
            "name": "วังงิ้ว",
            "zipcodes": [
              "66210"
            ]
          },
          {
            "name": "ห้วยร่วม",
            "zipcodes": [
              "66210"
            ]
          },
          {
            "name": "ห้วยพุก",
            "zipcodes": [
              "66210"
            ]
          },
          {
            "name": "สำนักขุนเณร",
            "zipcodes": [
              "66210"
            ]
          }
        ]
      },
      {
        "name": "วชิรบารมี",
        "subdistricts": [
          {
            "name": "บ้านนา",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "บึงบัว",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "วังโมกข์",
            "zipcodes": [
              "66140"
            ]
          },
          {
            "name": "หนองหลุม",
            "zipcodes": [
              "66220"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "เพชรบูรณ์",
    "districts": [
      {
        "name": "เมืองเพชรบูรณ์",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ตะเบาะ",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "บ้านโตก",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "สะเดียง",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ป่าเลา",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "นางั่ว",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ท่าพล",
            "zipcodes": [
              "67250"
            ]
          },
          {
            "name": "ดงมูลเหล็ก",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "บ้านโคก",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ชอนไพร",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "นาป่า",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "นายม",
            "zipcodes": [
              "67210"
            ]
          },
          {
            "name": "วังชมภู",
            "zipcodes": [
              "67210"
            ]
          },
          {
            "name": "น้ำร้อน",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ห้วยสะแก",
            "zipcodes": [
              "67210"
            ]
          },
          {
            "name": "ห้วยใหญ่",
            "zipcodes": [
              "67000"
            ]
          },
          {
            "name": "ระวิง",
            "zipcodes": [
              "67210"
            ]
          }
        ]
      },
      {
        "name": "ชนแดน",
        "subdistricts": [
          {
            "name": "ชนแดน",
            "zipcodes": [
              "67150"
            ]
          },
          {
            "name": "ดงขุย",
            "zipcodes": [
              "67190"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "67150"
            ]
          },
          {
            "name": "พุทธบาท",
            "zipcodes": [
              "67150"
            ]
          },
          {
            "name": "ลาดแค",
            "zipcodes": [
              "67150"
            ]
          },
          {
            "name": "บ้านกล้วย",
            "zipcodes": [
              "67190"
            ]
          },
          {
            "name": "ซับพุทรา",
            "zipcodes": [
              "67150"
            ]
          },
          {
            "name": "ตะกุดไร",
            "zipcodes": [
              "67190"
            ]
          },
          {
            "name": "ศาลาลาย",
            "zipcodes": [
              "67150"
            ]
          }
        ]
      },
      {
        "name": "หล่มสัก",
        "subdistricts": [
          {
            "name": "หล่มสัก",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "วัดป่า",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ตาลเดี่ยว",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ฝายนาแซง",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "หนองสว่าง",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "น้ำเฮี้ย",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "สักหลง",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ท่าอิบุญ",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บ้านโสก",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บ้านติ้ว",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ห้วยไร่",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "น้ำก้อ",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ปากช่อง",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "น้ำชุน",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "หนองไขว่",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ลานบ่า",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บุ่งคล้า",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บุ่งน้ำเต้า",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ช้างตะลูด",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "ปากดุก",
            "zipcodes": [
              "67110"
            ]
          },
          {
            "name": "บ้านหวาย",
            "zipcodes": [
              "67110"
            ]
          }
        ]
      },
      {
        "name": "หล่มเก่า",
        "subdistricts": [
          {
            "name": "หล่มเก่า",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "นาซำ",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "หินฮาว",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "บ้านเนิน",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "ศิลา",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "นาแซง",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "วังบาล",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "นาเกาะ",
            "zipcodes": [
              "67120"
            ]
          },
          {
            "name": "ตาดกลอย",
            "zipcodes": [
              "67120"
            ]
          }
        ]
      },
      {
        "name": "วิเชียรบุรี",
        "subdistricts": [
          {
            "name": "ท่าโรง",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "สระประดู่",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "สามแยก",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "โคกปรง",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "น้ำร้อน",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "บ่อรัง",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "พุเตย",
            "zipcodes": [
              "67180"
            ]
          },
          {
            "name": "พุขาม",
            "zipcodes": [
              "67180"
            ]
          },
          {
            "name": "ภูน้ำหยด",
            "zipcodes": [
              "67180"
            ]
          },
          {
            "name": "ซับสมบูรณ์",
            "zipcodes": [
              "67180"
            ]
          },
          {
            "name": "บึงกระจับ",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "วังใหญ่",
            "zipcodes": [
              "67180"
            ]
          },
          {
            "name": "ยางสาว",
            "zipcodes": [
              "67130"
            ]
          },
          {
            "name": "ซับน้อย",
            "zipcodes": [
              "67180"
            ]
          }
        ]
      },
      {
        "name": "ศรีเทพ",
        "subdistricts": [
          {
            "name": "ศรีเทพ",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "สระกรวด",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "คลองกระจัง",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "นาสนุ่น",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "โคกสะอาด",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "หนองย่างทอย",
            "zipcodes": [
              "67170"
            ]
          },
          {
            "name": "ประดู่งาม",
            "zipcodes": [
              "67170"
            ]
          }
        ]
      },
      {
        "name": "หนองไผ่",
        "subdistricts": [
          {
            "name": "กองทูล",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "นาเฉลียง",
            "zipcodes": [
              "67220"
            ]
          },
          {
            "name": "บ้านโภชน์",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "ท่าแดง",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "เพชรละคร",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "บ่อไทย",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "ห้วยโป่ง",
            "zipcodes": [
              "67220"
            ]
          },
          {
            "name": "วังท่าดี",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "บัววัฒนา",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "วังโบสถ์",
            "zipcodes": [
              "67140"
            ]
          },
          {
            "name": "ยางงาม",
            "zipcodes": [
              "67220"
            ]
          },
          {
            "name": "ท่าด้วง",
            "zipcodes": [
              "67140"
            ]
          }
        ]
      },
      {
        "name": "บึงสามพัน",
        "subdistricts": [
          {
            "name": "ซับสมอทอด",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "ซับไม้แดง",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "หนองแจง",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "กันจุ",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "วังพิกุล",
            "zipcodes": [
              "67230"
            ]
          },
          {
            "name": "พญาวัง",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "ศรีมงคล",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "67160"
            ]
          },
          {
            "name": "บึงสามพัน",
            "zipcodes": [
              "67160"
            ]
          }
        ]
      },
      {
        "name": "น้ำหนาว",
        "subdistricts": [
          {
            "name": "น้ำหนาว",
            "zipcodes": [
              "67260"
            ]
          },
          {
            "name": "หลักด่าน",
            "zipcodes": [
              "67260"
            ]
          },
          {
            "name": "วังกวาง",
            "zipcodes": [
              "67260"
            ]
          },
          {
            "name": "โคกมน",
            "zipcodes": [
              "67260"
            ]
          }
        ]
      },
      {
        "name": "วังโป่ง",
        "subdistricts": [
          {
            "name": "วังโป่ง",
            "zipcodes": [
              "67240"
            ]
          },
          {
            "name": "ท้ายดง",
            "zipcodes": [
              "67240"
            ]
          },
          {
            "name": "ซับเปิบ",
            "zipcodes": [
              "67240"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "67240"
            ]
          },
          {
            "name": "วังศาล",
            "zipcodes": [
              "67240"
            ]
          }
        ]
      },
      {
        "name": "เขาค้อ",
        "subdistricts": [
          {
            "name": "ทุ่งสมอ",
            "zipcodes": [
              "67270"
            ]
          },
          {
            "name": "แคมป์สน",
            "zipcodes": [
              "67280"
            ]
          },
          {
            "name": "เขาค้อ",
            "zipcodes": [
              "67270"
            ]
          },
          {
            "name": "ริมสีม่วง",
            "zipcodes": [
              "67270"
            ]
          },
          {
            "name": "สะเดาะพง",
            "zipcodes": [
              "67270"
            ]
          },
          {
            "name": "หนองแม่นา",
            "zipcodes": [
              "67270"
            ]
          },
          {
            "name": "เข็กน้อย",
            "zipcodes": [
              "67280"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ราชบุรี",
    "districts": [
      {
        "name": "เมืองราชบุรี",
        "subdistricts": [
          {
            "name": "หน้าเมือง",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "เจดีย์หัก",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "ดอนตะโก",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "หนองกลางนา",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "ห้วยไผ่",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "คุ้งน้ำวน",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "คุ้งกระถิน",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "โคกหม้อ",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "สามเรือน",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "พิกุลทอง",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "น้ำพุ",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "ดอนแร่",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "หินกอง",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "เขาแร้ง",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "เกาะพลับพลา",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "หลุมดิน",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "บางป่า",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "พงสวาย",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "คูบัว",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "ท่าราบ",
            "zipcodes": [
              "70000"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "70000"
            ]
          }
        ]
      },
      {
        "name": "จอมบึง",
        "subdistricts": [
          {
            "name": "จอมบึง",
            "zipcodes": [
              "70150"
            ]
          },
          {
            "name": "ปากช่อง",
            "zipcodes": [
              "70150"
            ]
          },
          {
            "name": "เบิกไพร",
            "zipcodes": [
              "70150"
            ]
          },
          {
            "name": "ด่านทับตะโก",
            "zipcodes": [
              "70150"
            ]
          },
          {
            "name": "แก้มอ้น",
            "zipcodes": [
              "70150"
            ]
          },
          {
            "name": "รางบัว",
            "zipcodes": [
              "70150"
            ]
          }
        ]
      },
      {
        "name": "สวนผึ้ง",
        "subdistricts": [
          {
            "name": "สวนผึ้ง",
            "zipcodes": [
              "70180"
            ]
          },
          {
            "name": "ป่าหวาย",
            "zipcodes": [
              "70180"
            ]
          },
          {
            "name": "ท่าเคย",
            "zipcodes": [
              "70180"
            ]
          },
          {
            "name": "ตะนาวศรี",
            "zipcodes": [
              "70180"
            ]
          }
        ]
      },
      {
        "name": "ดำเนินสะดวก",
        "subdistricts": [
          {
            "name": "ดำเนินสะดวก",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ประสาทสิทธิ์",
            "zipcodes": [
              "70210"
            ]
          },
          {
            "name": "ศรีสุราษฎร์",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ตาหลวง",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ดอนกรวย",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ดอนคลัง",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "บัวงาม",
            "zipcodes": [
              "70210"
            ]
          },
          {
            "name": "บ้านไร่",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "แพงพวย",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "สี่หมื่น",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ท่านัด",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ขุนพิทักษ์",
            "zipcodes": [
              "70130"
            ]
          },
          {
            "name": "ดอนไผ่",
            "zipcodes": [
              "70130"
            ]
          }
        ]
      },
      {
        "name": "บ้านโป่ง",
        "subdistricts": [
          {
            "name": "บ้านโป่ง",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "ท่าผา",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "กรับใหญ่",
            "zipcodes": [
              "70190"
            ]
          },
          {
            "name": "ปากแรต",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "หนองกบ",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "หนองอ้อ",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "ดอนกระเบื้อง",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "สวนกล้วย",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "นครชุมน์",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "บ้านม่วง",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "คุ้งพยอม",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "หนองปลาหมอ",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "เขาขลุง",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "เบิกไพร",
            "zipcodes": [
              "70110"
            ]
          },
          {
            "name": "ลาดบัวขาว",
            "zipcodes": [
              "70110"
            ]
          }
        ]
      },
      {
        "name": "บางแพ",
        "subdistricts": [
          {
            "name": "บางแพ",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "วังเย็น",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "หัวโพ",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "วัดแก้ว",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "ดอนใหญ่",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "ดอนคา",
            "zipcodes": [
              "70160"
            ]
          },
          {
            "name": "โพหัก",
            "zipcodes": [
              "70160"
            ]
          }
        ]
      },
      {
        "name": "โพธาราม",
        "subdistricts": [
          {
            "name": "โพธาราม",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "ดอนกระเบื้อง",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "หนองโพ",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "บ้านเลือก",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "คลองตาคต",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "บ้านฆ้อง",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "บ้านสิงห์",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "เจ็ดเสมียน",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "คลองข่อย",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "ชำแระ",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "สร้อยฟ้า",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "ท่าชุมพล",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "บางโตนด",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "เตาปูน",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "นางแก้ว",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "ธรรมเสน",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "เขาชะงุ้ม",
            "zipcodes": [
              "70120"
            ]
          },
          {
            "name": "หนองกวาง",
            "zipcodes": [
              "70120"
            ]
          }
        ]
      },
      {
        "name": "ปากท่อ",
        "subdistricts": [
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "วังมะนาว",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "ปากท่อ",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "ป่าไก่",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "วัดยางงาม",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "อ่างหิน",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "บ่อกระดาน",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "ยางหัก",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "วันดาว",
            "zipcodes": [
              "70140"
            ]
          },
          {
            "name": "ห้วยยางโทน",
            "zipcodes": [
              "70140"
            ]
          }
        ]
      },
      {
        "name": "วัดเพลง",
        "subdistricts": [
          {
            "name": "เกาะศาลพระ",
            "zipcodes": [
              "70170"
            ]
          },
          {
            "name": "จอมประทัด",
            "zipcodes": [
              "70170"
            ]
          },
          {
            "name": "วัดเพลง",
            "zipcodes": [
              "70170"
            ]
          }
        ]
      },
      {
        "name": "บ้านคา",
        "subdistricts": [
          {
            "name": "บ้านคา",
            "zipcodes": [
              "70180"
            ]
          },
          {
            "name": "บ้านบึง",
            "zipcodes": [
              "70180"
            ]
          },
          {
            "name": "หนองพันจันทร์",
            "zipcodes": [
              "70180"
            ]
          }
        ]
      },
      {
        "name": "ท้องถิ่นเทศบาลตำบลบ้านฆ้อง",
        "subdistricts": []
      }
    ]
  },
  {
    "name": "กาญจนบุรี",
    "districts": [
      {
        "name": "เมืองกาญจนบุรี",
        "subdistricts": [
          {
            "name": "บ้านเหนือ",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "บ้านใต้",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "ท่ามะขาม",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "แก่งเสี้ยน",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "71190"
            ]
          },
          {
            "name": "ลาดหญ้า",
            "zipcodes": [
              "71190"
            ]
          },
          {
            "name": "วังด้ง",
            "zipcodes": [
              "71190"
            ]
          },
          {
            "name": "ช่องสะเดา",
            "zipcodes": [
              "71190"
            ]
          },
          {
            "name": "หนองหญ้า",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "เกาะสำโรง",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "บ้านเก่า",
            "zipcodes": [
              "71000"
            ]
          },
          {
            "name": "วังเย็น",
            "zipcodes": [
              "71000"
            ]
          }
        ]
      },
      {
        "name": "ไทรโยค",
        "subdistricts": [
          {
            "name": "ลุ่มสุ่ม",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "ท่าเสา",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "สิงห์",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "ไทรโยค",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "วังกระแจะ",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "ศรีมงคล",
            "zipcodes": [
              "71150"
            ]
          },
          {
            "name": "บ้องตี้",
            "zipcodes": [
              "71150"
            ]
          }
        ]
      },
      {
        "name": "บ่อพลอย",
        "subdistricts": [
          {
            "name": "บ่อพลอย",
            "zipcodes": [
              "71160"
            ]
          },
          {
            "name": "หนองกุ่ม",
            "zipcodes": [
              "71160"
            ]
          },
          {
            "name": "หนองรี",
            "zipcodes": [
              "71220"
            ]
          },
          {
            "name": "หลุมรัง",
            "zipcodes": [
              "71160"
            ]
          },
          {
            "name": "ช่องด่าน",
            "zipcodes": [
              "71160"
            ]
          },
          {
            "name": "หนองกร่าง",
            "zipcodes": [
              "71220"
            ]
          }
        ]
      },
      {
        "name": "ศรีสวัสดิ์",
        "subdistricts": [
          {
            "name": "นาสวน",
            "zipcodes": [
              "71250"
            ]
          },
          {
            "name": "ด่านแม่แฉลบ",
            "zipcodes": [
              "71250"
            ]
          },
          {
            "name": "หนองเป็ด",
            "zipcodes": [
              "71250"
            ]
          },
          {
            "name": "ท่ากระดาน",
            "zipcodes": [
              "71250"
            ]
          },
          {
            "name": "เขาโจด",
            "zipcodes": [
              "71220"
            ]
          },
          {
            "name": "แม่กระบุง",
            "zipcodes": [
              "71250"
            ]
          }
        ]
      },
      {
        "name": "ท่ามะกา",
        "subdistricts": [
          {
            "name": "พงตึก",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "ยางม่วง",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "ดอนชะเอม",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "ท่าไม้",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "ตะคร้ำเอน",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "ท่ามะกา",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "โคกตะบอง",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "ดอนขมิ้น",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "อุโลกสี่หมื่น",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "เขาสามสิบหาบ",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "พระแท่น",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "หวายเหนียว",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "แสนตอ",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "สนามแย้",
            "zipcodes": [
              "70190"
            ]
          },
          {
            "name": "ท่าเสา",
            "zipcodes": [
              "71120"
            ]
          },
          {
            "name": "หนองลาน",
            "zipcodes": [
              "71130"
            ]
          }
        ]
      },
      {
        "name": "ท่าม่วง",
        "subdistricts": [
          {
            "name": "ท่าม่วง",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "วังขนาย",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "วังศาลา",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "ท่าล้อ",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "หนองขาว",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "ทุ่งทอง",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "ม่วงชุม",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "พังตรุ",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "ท่าตะคร้อ",
            "zipcodes": [
              "71130"
            ]
          },
          {
            "name": "รางสาลี่",
            "zipcodes": [
              "71110"
            ]
          },
          {
            "name": "หนองตากยา",
            "zipcodes": [
              "71110"
            ]
          }
        ]
      },
      {
        "name": "ทองผาภูมิ",
        "subdistricts": [
          {
            "name": "ท่าขนุน",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "ปิล๊อก",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "หินดาด",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "ลิ่นถิ่น",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "ชะแล",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "ห้วยเขย่ง",
            "zipcodes": [
              "71180"
            ]
          },
          {
            "name": "สหกรณ์นิคม",
            "zipcodes": [
              "71180"
            ]
          }
        ]
      },
      {
        "name": "สังขละบุรี",
        "subdistricts": [
          {
            "name": "หนองลู",
            "zipcodes": [
              "71240"
            ]
          },
          {
            "name": "ปรังเผล",
            "zipcodes": [
              "71240"
            ]
          },
          {
            "name": "ไล่โว่",
            "zipcodes": [
              "71240"
            ]
          }
        ]
      },
      {
        "name": "พนมทวน",
        "subdistricts": [
          {
            "name": "พนมทวน",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "หนองโรง",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "ทุ่งสมอ",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "ดอนเจดีย์",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "พังตรุ",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "รางหวาย",
            "zipcodes": [
              "71170"
            ]
          },
          {
            "name": "หนองสาหร่าย",
            "zipcodes": [
              "71140"
            ]
          },
          {
            "name": "ดอนตาเพชร",
            "zipcodes": [
              "71140"
            ]
          }
        ]
      },
      {
        "name": "เลาขวัญ",
        "subdistricts": [
          {
            "name": "เลาขวัญ",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "หนองโสน",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "หนองประดู่",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "หนองปลิง",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "หนองนกแก้ว",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "ทุ่งกระบ่ำ",
            "zipcodes": [
              "71210"
            ]
          },
          {
            "name": "หนองฝ้าย",
            "zipcodes": [
              "71210"
            ]
          }
        ]
      },
      {
        "name": "ด่านมะขามเตี้ย",
        "subdistricts": [
          {
            "name": "ด่านมะขามเตี้ย",
            "zipcodes": [
              "71260"
            ]
          },
          {
            "name": "กลอนโด",
            "zipcodes": [
              "71260"
            ]
          },
          {
            "name": "จรเข้เผือก",
            "zipcodes": [
              "71260"
            ]
          },
          {
            "name": "หนองไผ่",
            "zipcodes": [
              "71260"
            ]
          }
        ]
      },
      {
        "name": "หนองปรือ",
        "subdistricts": [
          {
            "name": "หนองปรือ",
            "zipcodes": [
              "71220"
            ]
          },
          {
            "name": "หนองปลาไหล",
            "zipcodes": [
              "71220"
            ]
          },
          {
            "name": "สมเด็จเจริญ",
            "zipcodes": [
              "71220"
            ]
          }
        ]
      },
      {
        "name": "ห้วยกระเจา",
        "subdistricts": [
          {
            "name": "ห้วยกระเจา",
            "zipcodes": [
              "71170"
            ]
          },
          {
            "name": "วังไผ่",
            "zipcodes": [
              "71170"
            ]
          },
          {
            "name": "ดอนแสลบ",
            "zipcodes": [
              "71170"
            ]
          },
          {
            "name": "สระลงเรือ",
            "zipcodes": [
              "71170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สุพรรณบุรี",
    "districts": [
      {
        "name": "เมืองสุพรรณบุรี",
        "subdistricts": [
          {
            "name": "ท่าพี่เลี้ยง",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "รั้วใหญ่",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ทับตีเหล็ก",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ท่าระหัด",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ไผ่ขวาง",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "โคกโคเฒ่า",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ดอนตาล",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ดอนมะสังข์",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "พิหารแดง",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ดอนกำยาน",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "ดอนโพธิ์ทอง",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "72230"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "72230"
            ]
          },
          {
            "name": "บางกุ้ง",
            "zipcodes": [
              "72210"
            ]
          },
          {
            "name": "ศาลาขาว",
            "zipcodes": [
              "72210"
            ]
          },
          {
            "name": "สวนแตง",
            "zipcodes": [
              "72210"
            ]
          },
          {
            "name": "สนามชัย",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "โพธิ์พระยา",
            "zipcodes": [
              "72000"
            ]
          },
          {
            "name": "สนามคลี",
            "zipcodes": [
              "72230"
            ]
          }
        ]
      },
      {
        "name": "เดิมบางนางบวช",
        "subdistricts": [
          {
            "name": "เขาพระ",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "เดิมบาง",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "นางบวช",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "เขาดิน",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "ทุ่งคลี",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "โคกช้าง",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "หัวเขา",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "หัวนา",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "บ่อกรุ",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "วังศรีราช",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "ป่าสะแก",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "ยางนอน",
            "zipcodes": [
              "72120"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "72120"
            ]
          }
        ]
      },
      {
        "name": "ด่านช้าง",
        "subdistricts": [
          {
            "name": "หนองมะค่าโมง",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "ด่านช้าง",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "ห้วยขมิ้น",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "องค์พระ",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "วังคัน",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "นิคมกระเสียว",
            "zipcodes": [
              "72180"
            ]
          },
          {
            "name": "วังยาว",
            "zipcodes": [
              "72180"
            ]
          }
        ]
      },
      {
        "name": "บางปลาม้า",
        "subdistricts": [
          {
            "name": "โคกคราม",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "บางปลาม้า",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "ตะค่า",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "บางใหญ่",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "กฤษณา",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "สาลี",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "ไผ่กองดิน",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "องครักษ์",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "จรเข้ใหญ่",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "บ้านแหลม",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "มะขามล้ม",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "วังน้ำเย็น",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "วัดโบสถ์",
            "zipcodes": [
              "72150"
            ]
          },
          {
            "name": "วัดดาว",
            "zipcodes": [
              "72150"
            ]
          }
        ]
      },
      {
        "name": "ศรีประจันต์",
        "subdistricts": [
          {
            "name": "ศรีประจันต์",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "บ้านกร่าง",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "มดแดง",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "บางงาม",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "ดอนปรู",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "ปลายนา",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "วังหว้า",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "วังน้ำซับ",
            "zipcodes": [
              "72140"
            ]
          },
          {
            "name": "วังยาง",
            "zipcodes": [
              "72140"
            ]
          }
        ]
      },
      {
        "name": "ดอนเจดีย์",
        "subdistricts": [
          {
            "name": "ดอนเจดีย์",
            "zipcodes": [
              "72170"
            ]
          },
          {
            "name": "หนองสาหร่าย",
            "zipcodes": [
              "72170"
            ]
          },
          {
            "name": "ไร่รถ",
            "zipcodes": [
              "72170"
            ]
          },
          {
            "name": "สระกระโจม",
            "zipcodes": [
              "72250"
            ]
          },
          {
            "name": "ทะเลบก",
            "zipcodes": [
              "72250"
            ]
          }
        ]
      },
      {
        "name": "สองพี่น้อง",
        "subdistricts": [
          {
            "name": "สองพี่น้อง",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บางเลน",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บางตาเถร",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บางตะเคียน",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บ้านกุ่ม",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "หัวโพธิ์",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บางพลับ",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "เนินพระปรางค์",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บ้านช้าง",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "ต้นตาล",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "ศรีสำราญ",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "ทุ่งคอก",
            "zipcodes": [
              "72190"
            ]
          },
          {
            "name": "หนองบ่อ",
            "zipcodes": [
              "72110"
            ]
          },
          {
            "name": "บ่อสุพรรณ",
            "zipcodes": [
              "72190"
            ]
          },
          {
            "name": "ดอนมะนาว",
            "zipcodes": [
              "72110"
            ]
          }
        ]
      },
      {
        "name": "สามชุก",
        "subdistricts": [
          {
            "name": "ย่านยาว",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "วังลึก",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "สามชุก",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "หนองผักนาก",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "บ้านสระ",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "หนองสะเดา",
            "zipcodes": [
              "72130"
            ]
          },
          {
            "name": "กระเสียว",
            "zipcodes": [
              "72130"
            ]
          }
        ]
      },
      {
        "name": "อู่ทอง",
        "subdistricts": [
          {
            "name": "อู่ทอง",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "สระยายโสม",
            "zipcodes": [
              "72220"
            ]
          },
          {
            "name": "จรเข้สามพัน",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "บ้านดอน",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "ยุ้งทะลาย",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "ดอนมะเกลือ",
            "zipcodes": [
              "72220"
            ]
          },
          {
            "name": "หนองโอ่ง",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "ดอนคา",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "พลับพลาไชย",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "บ้านโข้ง",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "เจดีย์",
            "zipcodes": [
              "72160"
            ]
          },
          {
            "name": "สระพังลาน",
            "zipcodes": [
              "72220"
            ]
          },
          {
            "name": "กระจัน",
            "zipcodes": [
              "72160"
            ]
          }
        ]
      },
      {
        "name": "หนองหญ้าไซ",
        "subdistricts": [
          {
            "name": "หนองหญ้าไซ",
            "zipcodes": [
              "72240"
            ]
          },
          {
            "name": "หนองราชวัตร",
            "zipcodes": [
              "72240"
            ]
          },
          {
            "name": "หนองโพธิ์",
            "zipcodes": [
              "72240"
            ]
          },
          {
            "name": "แจงงาม",
            "zipcodes": [
              "72240"
            ]
          },
          {
            "name": "หนองขาม",
            "zipcodes": [
              "72240"
            ]
          },
          {
            "name": "ทัพหลวง",
            "zipcodes": [
              "72240"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครปฐม",
    "districts": [
      {
        "name": "เมืองนครปฐม",
        "subdistricts": [
          {
            "name": "พระปฐมเจดีย์",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "บางแขม",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "พระประโทน",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ธรรมศาลา",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ตาก้อง",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "มาบแค",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "สนามจันทร์",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ดอนยายหอม",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ถนนขาด",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "บ่อพลับ",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "นครปฐม",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "วังตะกู",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "หนองปากโลง",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "สามควายเผือก",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ทุ่งน้อย",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "หนองดินแดง",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "วังเย็น",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "โพรงมะเดื่อ",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ลำพยา",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "สระกะเทียม",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "สวนป่าน",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ห้วยจรเข้",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "ทัพหลวง",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "หนองงูเหลือม",
            "zipcodes": [
              "73000"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "73000"
            ]
          }
        ]
      },
      {
        "name": "กำแพงแสน",
        "subdistricts": [
          {
            "name": "ทุ่งกระพังโหม",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "กระตีบ",
            "zipcodes": [
              "73180"
            ]
          },
          {
            "name": "ทุ่งลูกนก",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "ห้วยขวาง",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "ทุ่งขวาง",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "สระสี่มุม",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "ทุ่งบัว",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "ดอนข่อย",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "สระพัฒนา",
            "zipcodes": [
              "73180"
            ]
          },
          {
            "name": "ห้วยหมอนทอง",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "ห้วยม่วง",
            "zipcodes": [
              "73180"
            ]
          },
          {
            "name": "กำแพงแสน",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "รางพิกุล",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "หนองกระทุ่ม",
            "zipcodes": [
              "73140"
            ]
          },
          {
            "name": "วังน้ำเขียว",
            "zipcodes": [
              "73140"
            ]
          }
        ]
      },
      {
        "name": "นครชัยศรี",
        "subdistricts": [
          {
            "name": "นครชัยศรี",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "บางกระเบา",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "วัดแค",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ท่าตำหนัก",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ท่ากระชับ",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ขุนแก้ว",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ท่าพระยา",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "พะเนียด",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "บางระกำ",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "โคกพระเจดีย์",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ศรีษะทอง",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "แหลมบัว",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ศรีมหาโพธิ์",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "สัมปทวน",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "วัดสำโรง",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ดอนแฝก",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ห้วยพลู",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "วัดละมุด",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "บางพระ",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "บางแก้วฟ้า",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ลานตากฟ้า",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "งิ้วราย",
            "zipcodes": [
              "73120"
            ]
          },
          {
            "name": "ไทยาวาส",
            "zipcodes": [
              "73120"
            ]
          }
        ]
      },
      {
        "name": "ดอนตูม",
        "subdistricts": [
          {
            "name": "สามง่าม",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ห้วยพระ",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ลำเหย",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ดอนพุทรา",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "บ้านหลวง",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ดอนรวก",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ห้วยด้วน",
            "zipcodes": [
              "73150"
            ]
          },
          {
            "name": "ลำลูกบัว",
            "zipcodes": [
              "73150"
            ]
          }
        ]
      },
      {
        "name": "บางเลน",
        "subdistricts": [
          {
            "name": "บางเลน",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "บางปลา",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "บางหลวง",
            "zipcodes": [
              "73190"
            ]
          },
          {
            "name": "บางภาษี",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "บางระกำ",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "บางไทรป่า",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "หินมูล",
            "zipcodes": [
              "73190"
            ]
          },
          {
            "name": "ไทรงาม",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "ดอนตูม",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "นิลเพชร",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "บัวปากท่า",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "คลองนกกระทุง",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "นราภิรมย์",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "ลำพญา",
            "zipcodes": [
              "73130"
            ]
          },
          {
            "name": "ไผ่หูช้าง",
            "zipcodes": [
              "73130"
            ]
          }
        ]
      },
      {
        "name": "สามพราน",
        "subdistricts": [
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "ทรงคนอง",
            "zipcodes": [
              "73210"
            ]
          },
          {
            "name": "หอมเกร็ด",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "บางกระทึก",
            "zipcodes": [
              "73210"
            ]
          },
          {
            "name": "บางเตย",
            "zipcodes": [
              "73210"
            ]
          },
          {
            "name": "สามพราน",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "บางช้าง",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "ไร่ขิง",
            "zipcodes": [
              "73210"
            ]
          },
          {
            "name": "ท่าตลาด",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "กระทุ่มล้ม",
            "zipcodes": [
              "73220"
            ]
          },
          {
            "name": "คลองใหม่",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "ตลาดจินดา",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "คลองจินดา",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "ยายชา",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "73110"
            ]
          },
          {
            "name": "อ้อมใหญ่",
            "zipcodes": [
              "73160"
            ]
          }
        ]
      },
      {
        "name": "พุทธมณฑล",
        "subdistricts": [
          {
            "name": "ศาลายา",
            "zipcodes": [
              "73170"
            ]
          },
          {
            "name": "คลองโยง",
            "zipcodes": [
              "73170"
            ]
          },
          {
            "name": "มหาสวัสดิ์",
            "zipcodes": [
              "73170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สมุทรสาคร",
    "districts": [
      {
        "name": "เมืองสมุทรสาคร",
        "subdistricts": [
          {
            "name": "มหาชัย",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "ท่าฉลอม",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "โกรกกราก",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บ้านบ่อ",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บางโทรัด",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "กาหลง",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "นาโคก",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "ท่าจีน",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "นาดี",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "ท่าทราย",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "คอกกระบือ",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บางน้ำจืด",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "พันท้ายนรสิงห์",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "โคกขาม",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บางกระเจ้า",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "บางหญ้าแพรก",
            "zipcodes": [
              "74000"
            ]
          },
          {
            "name": "ชัยมงคล",
            "zipcodes": [
              "74000"
            ]
          }
        ]
      },
      {
        "name": "กระทุ่มแบน",
        "subdistricts": [
          {
            "name": "ตลาดกระทุ่มแบน",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "อ้อมน้อย",
            "zipcodes": [
              "74130"
            ]
          },
          {
            "name": "ท่าไม้",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "สวนหลวง",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "บางยาง",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "คลองมะเดื่อ",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "หนองนกไข่",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "ดอนไก่ดี",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "แคราย",
            "zipcodes": [
              "74110"
            ]
          },
          {
            "name": "ท่าเสา",
            "zipcodes": [
              "74110"
            ]
          }
        ]
      },
      {
        "name": "บ้านแพ้ว",
        "subdistricts": [
          {
            "name": "บ้านแพ้ว",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "หลักสาม",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "ยกกระบัตร",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "โรงเข้",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "หนองสองห้อง",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "หลักสอง",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "เจ็ดริ้ว",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "คลองตัน",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "อำแพง",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "สวนส้ม",
            "zipcodes": [
              "74120"
            ]
          },
          {
            "name": "เกษตรพัฒนา",
            "zipcodes": [
              "74120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สมุทรสงคราม",
    "districts": [
      {
        "name": "เมืองสมุทรสงคราม",
        "subdistricts": [
          {
            "name": "แม่กลอง",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "บางขันแตก",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "ลาดใหญ่",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "บ้านปรก",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "ท้ายหาด",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "แหลมใหญ่",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "คลองเขิน",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "คลองโคน",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "นางตะเคียน",
            "zipcodes": [
              "75000"
            ]
          },
          {
            "name": "บางจะเกร็ง",
            "zipcodes": [
              "75000"
            ]
          }
        ]
      },
      {
        "name": "บางคนที",
        "subdistricts": [
          {
            "name": "กระดังงา",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางสะแก",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางยี่รงค์",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "โรงหีบ",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางคนที",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "ดอนมะโนรา",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางพรม",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางกุ้ง",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "จอมปลวก",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางนกแขวก",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "ยายแพง",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บางกระบือ",
            "zipcodes": [
              "75120"
            ]
          },
          {
            "name": "บ้านปราโมทย์",
            "zipcodes": [
              "75120"
            ]
          }
        ]
      },
      {
        "name": "อัมพวา",
        "subdistricts": [
          {
            "name": "อัมพวา",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "สวนหลวง",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "ท่าคา",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "วัดประดู่",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "เหมืองใหม่",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "บางช้าง",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "แควอ้อม",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "ปลายโพงพาง",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "บางแค",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "แพรกหนามแดง",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "ยี่สาร",
            "zipcodes": [
              "75110"
            ]
          },
          {
            "name": "บางนางลี่",
            "zipcodes": [
              "75110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "เพชรบุรี",
    "districts": [
      {
        "name": "เมืองเพชรบุรี",
        "subdistricts": [
          {
            "name": "ท่าราบ",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "คลองกระแชง",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "บางจาน",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "นาพันสาม",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ธงชัย",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "บ้านกุ่ม",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "หนองโสน",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ไร่ส้ม",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "เวียงคอย",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "บางจาก",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "บ้านหม้อ",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ต้นมะม่วง",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ช่องสะแก",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "นาวุ้ง",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "สำมะโรง",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "โพพระ",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "หาดเจ้าสำราญ",
            "zipcodes": [
              "76100"
            ]
          },
          {
            "name": "หัวสะพาน",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ต้นมะพร้าว",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "วังตะโก",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "โพไร่หวาน",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "ดอนยาง",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "หนองขนาน",
            "zipcodes": [
              "76000"
            ]
          },
          {
            "name": "หนองพลับ",
            "zipcodes": [
              "76000"
            ]
          }
        ]
      },
      {
        "name": "เขาย้อย",
        "subdistricts": [
          {
            "name": "เขาย้อย",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "สระพัง",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "บางเค็ม",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "ทับคาง",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "หนองปลาไหล",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "หนองปรง",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "หนองชุมพล",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "ห้วยโรง",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "ห้วยท่าช้าง",
            "zipcodes": [
              "76140"
            ]
          },
          {
            "name": "หนองชุมพลเหนือ",
            "zipcodes": [
              "76140"
            ]
          }
        ]
      },
      {
        "name": "หนองหญ้าปล้อง",
        "subdistricts": [
          {
            "name": "หนองหญ้าปล้อง",
            "zipcodes": [
              "76160"
            ]
          },
          {
            "name": "ยางน้ำกลัดเหนือ",
            "zipcodes": [
              "76160"
            ]
          },
          {
            "name": "ยางน้ำกลัดใต้",
            "zipcodes": [
              "76160"
            ]
          },
          {
            "name": "ท่าตะคร้อ",
            "zipcodes": [
              "76160"
            ]
          }
        ]
      },
      {
        "name": "ชะอำ",
        "subdistricts": [
          {
            "name": "ชะอำ",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "บางเก่า",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "นายาง",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "เขาใหญ่",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "หนองศาลา",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "ห้วยทรายเหนือ",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "ไร่ใหม่พัฒนา",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "สามพระยา",
            "zipcodes": [
              "76120"
            ]
          },
          {
            "name": "ดอนขุนห้วย",
            "zipcodes": [
              "76120"
            ]
          }
        ]
      },
      {
        "name": "ท่ายาง",
        "subdistricts": [
          {
            "name": "ท่ายาง",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "ท่าคอย",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "ยางหย่อง",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "หนองจอก",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "มาบปลาเค้า",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "ท่าไม้รวก",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "วังไคร้",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "กลัดหลวง",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "ปึกเตียน",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "เขากระปุก",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "ท่าแลง",
            "zipcodes": [
              "76130"
            ]
          },
          {
            "name": "บ้านในดง",
            "zipcodes": [
              "76130"
            ]
          }
        ]
      },
      {
        "name": "บ้านลาด",
        "subdistricts": [
          {
            "name": "บ้านลาด",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "บ้านหาด",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "บ้านทาน",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ตำหรุ",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "สมอพลือ",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ไร่มะขาม",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ท่าเสน",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "หนองกระเจ็ด",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "หนองกะปุ",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ลาดโพธิ์",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "สะพานไกร",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ไร่โคก",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "โรงเข้",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ไร่สะท้อน",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ห้วยข้อง",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ถ้ำรงค์",
            "zipcodes": [
              "76150"
            ]
          },
          {
            "name": "ห้วยลึก",
            "zipcodes": [
              "76150"
            ]
          }
        ]
      },
      {
        "name": "บ้านแหลม",
        "subdistricts": [
          {
            "name": "บ้านแหลม",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "บางขุนไทร",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "ปากทะเล",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "แหลมผักเบี้ย",
            "zipcodes": [
              "76100"
            ]
          },
          {
            "name": "บางตะบูน",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "บางตะบูนออก",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "บางครก",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "ท่าแร้ง",
            "zipcodes": [
              "76110"
            ]
          },
          {
            "name": "ท่าแร้งออก",
            "zipcodes": [
              "76110"
            ]
          }
        ]
      },
      {
        "name": "แก่งกระจาน",
        "subdistricts": [
          {
            "name": "แก่งกระจาน",
            "zipcodes": [
              "76170"
            ]
          },
          {
            "name": "สองพี่น้อง",
            "zipcodes": [
              "76170"
            ]
          },
          {
            "name": "วังจันทร์",
            "zipcodes": [
              "76170"
            ]
          },
          {
            "name": "ป่าเด็ง",
            "zipcodes": [
              "76170"
            ]
          },
          {
            "name": "พุสวรรค์",
            "zipcodes": [
              "76170"
            ]
          },
          {
            "name": "ห้วยแม่เพรียง",
            "zipcodes": [
              "76170"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ประจวบคีรีขันธ์",
    "districts": [
      {
        "name": "เมืองประจวบคีรีขันธ์",
        "subdistricts": [
          {
            "name": "ประจวบคีรีขันธ์",
            "zipcodes": [
              "77000"
            ]
          },
          {
            "name": "เกาะหลัก",
            "zipcodes": [
              "77000"
            ]
          },
          {
            "name": "คลองวาฬ",
            "zipcodes": [
              "77000"
            ]
          },
          {
            "name": "ห้วยทราย",
            "zipcodes": [
              "77000"
            ]
          },
          {
            "name": "อ่าวน้อย",
            "zipcodes": [
              "77000"
            ]
          },
          {
            "name": "บ่อนอก",
            "zipcodes": [
              "77210"
            ]
          }
        ]
      },
      {
        "name": "กุยบุรี",
        "subdistricts": [
          {
            "name": "กุยบุรี",
            "zipcodes": [
              "77150"
            ]
          },
          {
            "name": "กุยเหนือ",
            "zipcodes": [
              "77150"
            ]
          },
          {
            "name": "เขาแดง",
            "zipcodes": [
              "77150"
            ]
          },
          {
            "name": "ดอนยายหนู",
            "zipcodes": [
              "77150"
            ]
          },
          {
            "name": "สามกระทาย",
            "zipcodes": [
              "77150"
            ]
          },
          {
            "name": "หาดขาม",
            "zipcodes": [
              "77150"
            ]
          }
        ]
      },
      {
        "name": "ทับสะแก",
        "subdistricts": [
          {
            "name": "ทับสะแก",
            "zipcodes": [
              "77130"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "77130"
            ]
          },
          {
            "name": "นาหูกวาง",
            "zipcodes": [
              "77130"
            ]
          },
          {
            "name": "เขาล้าน",
            "zipcodes": [
              "77130"
            ]
          },
          {
            "name": "ห้วยยาง",
            "zipcodes": [
              "77130"
            ]
          },
          {
            "name": "แสงอรุณ",
            "zipcodes": [
              "77130"
            ]
          }
        ]
      },
      {
        "name": "บางสะพาน",
        "subdistricts": [
          {
            "name": "กำเนิดนพคุณ",
            "zipcodes": [
              "77140"
            ]
          },
          {
            "name": "พงศ์ประศาสน์",
            "zipcodes": [
              "77140"
            ]
          },
          {
            "name": "ร่อนทอง",
            "zipcodes": [
              "77230"
            ]
          },
          {
            "name": "ธงชัย",
            "zipcodes": [
              "77190"
            ]
          },
          {
            "name": "ชัยเกษม",
            "zipcodes": [
              "77190"
            ]
          },
          {
            "name": "ทองมงคล",
            "zipcodes": [
              "77230"
            ]
          },
          {
            "name": "แม่รำพึง",
            "zipcodes": [
              "77140"
            ]
          }
        ]
      },
      {
        "name": "บางสะพานน้อย",
        "subdistricts": [
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "77170"
            ]
          },
          {
            "name": "บางสะพาน",
            "zipcodes": [
              "77170"
            ]
          },
          {
            "name": "ทรายทอง",
            "zipcodes": [
              "77170"
            ]
          },
          {
            "name": "ช้างแรก",
            "zipcodes": [
              "77170"
            ]
          },
          {
            "name": "ไชยราช",
            "zipcodes": [
              "77170"
            ]
          }
        ]
      },
      {
        "name": "ปราณบุรี",
        "subdistricts": [
          {
            "name": "ปราณบุรี",
            "zipcodes": [
              "77120"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "77120"
            ]
          },
          {
            "name": "ปากน้ำปราณ",
            "zipcodes": [
              "77220"
            ]
          },
          {
            "name": "หนองตาแต้ม",
            "zipcodes": [
              "77120"
            ]
          },
          {
            "name": "วังก์พง",
            "zipcodes": [
              "77120"
            ]
          },
          {
            "name": "เขาจ้าว",
            "zipcodes": [
              "77120"
            ]
          }
        ]
      },
      {
        "name": "หัวหิน",
        "subdistricts": [
          {
            "name": "หัวหิน",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "หนองแก",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "หินเหล็กไฟ",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "หนองพลับ",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "ทับใต้",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "ห้วยสัตว์ใหญ่",
            "zipcodes": [
              "77110"
            ]
          },
          {
            "name": "บึงนคร",
            "zipcodes": [
              "77110"
            ]
          }
        ]
      },
      {
        "name": "สามร้อยยอด",
        "subdistricts": [
          {
            "name": "สามร้อยยอด",
            "zipcodes": [
              "77120"
            ]
          },
          {
            "name": "ศิลาลอย",
            "zipcodes": [
              "77180"
            ]
          },
          {
            "name": "ไร่เก่า",
            "zipcodes": [
              "77180"
            ]
          },
          {
            "name": "ศาลาลัย",
            "zipcodes": [
              "77180"
            ]
          },
          {
            "name": "ไร่ใหม่",
            "zipcodes": [
              "77180"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นครศรีธรรมราช",
    "districts": [
      {
        "name": "เมืองนครศรีธรรมราช",
        "subdistricts": [
          {
            "name": "ในเมือง",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท่าวัง",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "คลัง",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท่าไร่",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ปากนคร",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "นาทราย",
            "zipcodes": [
              "80280"
            ]
          },
          {
            "name": "กำแพงเซา",
            "zipcodes": [
              "80280"
            ]
          },
          {
            "name": "ไชยมนตรี",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "มะม่วงสองต้น",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "นาเคียน",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท่างิ้ว",
            "zipcodes": [
              "80280"
            ]
          },
          {
            "name": "โพธิ์เสด็จ",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "บางจาก",
            "zipcodes": [
              "80330"
            ]
          },
          {
            "name": "ปากพูน",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท่าซัก",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "80290"
            ]
          }
        ]
      },
      {
        "name": "พรหมคีรี",
        "subdistricts": [
          {
            "name": "พรหมโลก",
            "zipcodes": [
              "80320"
            ]
          },
          {
            "name": "บ้านเกาะ",
            "zipcodes": [
              "80320"
            ]
          },
          {
            "name": "อินคีรี",
            "zipcodes": [
              "80320"
            ]
          },
          {
            "name": "ทอนหงส์",
            "zipcodes": [
              "80320"
            ]
          },
          {
            "name": "นาเรียง",
            "zipcodes": [
              "80320"
            ]
          }
        ]
      },
      {
        "name": "ลานสกา",
        "subdistricts": [
          {
            "name": "เขาแก้ว",
            "zipcodes": [
              "80230"
            ]
          },
          {
            "name": "ลานสกา",
            "zipcodes": [
              "80230"
            ]
          },
          {
            "name": "ท่าดี",
            "zipcodes": [
              "80230"
            ]
          },
          {
            "name": "กำโลน",
            "zipcodes": [
              "80230"
            ]
          },
          {
            "name": "ขุนทะเล",
            "zipcodes": [
              "80230"
            ]
          }
        ]
      },
      {
        "name": "ฉวาง",
        "subdistricts": [
          {
            "name": "ฉวาง",
            "zipcodes": [
              "80150"
            ]
          },
          {
            "name": "ละอาย",
            "zipcodes": [
              "80250"
            ]
          },
          {
            "name": "นาแว",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "ไม้เรียง",
            "zipcodes": [
              "80150"
            ]
          },
          {
            "name": "กะเปียด",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "นากะชะ",
            "zipcodes": [
              "80150"
            ]
          },
          {
            "name": "ห้วยปริก",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "ไสหร้า",
            "zipcodes": [
              "80150"
            ]
          },
          {
            "name": "นาเขลียง",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "จันดี",
            "zipcodes": [
              "80250"
            ]
          }
        ]
      },
      {
        "name": "พิปูน",
        "subdistricts": [
          {
            "name": "พิปูน",
            "zipcodes": [
              "80270"
            ]
          },
          {
            "name": "กะทูน",
            "zipcodes": [
              "80270"
            ]
          },
          {
            "name": "เขาพระ",
            "zipcodes": [
              "80270"
            ]
          },
          {
            "name": "ยางค้อม",
            "zipcodes": [
              "80270"
            ]
          },
          {
            "name": "ควนกลาง",
            "zipcodes": [
              "80270"
            ]
          }
        ]
      },
      {
        "name": "เชียรใหญ่",
        "subdistricts": [
          {
            "name": "เชียรใหญ่",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "ท่าขนาน",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "บ้านเนิน",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "ไสหมาก",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "ท้องลำเจียก",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "เสือหึง",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "การะเกด",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "เขาพระบาท",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "แม่เจ้าอยู่หัว",
            "zipcodes": [
              "80190"
            ]
          }
        ]
      },
      {
        "name": "ชะอวด",
        "subdistricts": [
          {
            "name": "ชะอวด",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "ท่าเสม็ด",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "ท่าประจะ",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "เคร็ง",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "วังอ่าง",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "บ้านตูล",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "ขอนหาด",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "เกาะขันธ์",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "ควนหนองหงษ์",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "เขาพระทอง",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "นางหลง",
            "zipcodes": [
              "80180"
            ]
          }
        ]
      },
      {
        "name": "ท่าศาลา",
        "subdistricts": [
          {
            "name": "ท่าศาลา",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "กลาย",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "ท่าขึ้น",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "หัวตะพาน",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "สระแก้ว",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "โมคลาน",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "ไทยบุรี",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "ดอนตะโก",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "โพธิ์ทอง",
            "zipcodes": [
              "80160"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งสง",
        "subdistricts": [
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "ชะมาย",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "หนองหงส์",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "ควนกรด",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "นาไม้ไผ่",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "นาหลวงเสน",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "เขาโร",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "กะปาง",
            "zipcodes": [
              "80310"
            ]
          },
          {
            "name": "ที่วัง",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "น้ำตก",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "ถ้ำใหญ่",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "80110"
            ]
          },
          {
            "name": "เขาขาว",
            "zipcodes": [
              "80110"
            ]
          }
        ]
      },
      {
        "name": "นาบอน",
        "subdistricts": [
          {
            "name": "นาบอน",
            "zipcodes": [
              "80220"
            ]
          },
          {
            "name": "ทุ่งสง",
            "zipcodes": [
              "80220"
            ]
          },
          {
            "name": "แก้วแสน",
            "zipcodes": [
              "80220"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งใหญ่",
        "subdistricts": [
          {
            "name": "ท่ายาง",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "ทุ่งสัง",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "กุแหระ",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "ปริก",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "บางรูป",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "กรุงหยัน",
            "zipcodes": [
              "80240"
            ]
          }
        ]
      },
      {
        "name": "ปากพนัง",
        "subdistricts": [
          {
            "name": "ปากพนัง",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "คลองน้อย",
            "zipcodes": [
              "80330"
            ]
          },
          {
            "name": "ป่าระกำ",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ชะเมา",
            "zipcodes": [
              "80330"
            ]
          },
          {
            "name": "คลองกระบือ",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "เกาะทวด",
            "zipcodes": [
              "80330"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "หูล่อง",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "แหลมตะลุมพุก",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ปากพนังฝั่งตะวันตก",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "บางศาลา",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "บางพระ",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "บางตะพง",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ปากพนังฝั่งตะวันออก",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "บ้านเพิง",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ท่าพยา",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "80140"
            ]
          },
          {
            "name": "ขนาบนาก",
            "zipcodes": [
              "80140"
            ]
          }
        ]
      },
      {
        "name": "ร่อนพิบูลย์",
        "subdistricts": [
          {
            "name": "ร่อนพิบูลย์",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "หินตก",
            "zipcodes": [
              "80350"
            ]
          },
          {
            "name": "เสาธง",
            "zipcodes": [
              "80350"
            ]
          },
          {
            "name": "ควนเกย",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "ควนพัง",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "ควนชุม",
            "zipcodes": [
              "80130"
            ]
          }
        ]
      },
      {
        "name": "สิชล",
        "subdistricts": [
          {
            "name": "สิชล",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "ทุ่งปรัง",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "ฉลอง",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "เสาเภา",
            "zipcodes": [
              "80340"
            ]
          },
          {
            "name": "เปลี่ยน",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "สี่ขีด",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "เทพราช",
            "zipcodes": [
              "80340"
            ]
          },
          {
            "name": "เขาน้อย",
            "zipcodes": [
              "80120"
            ]
          },
          {
            "name": "ทุ่งใส",
            "zipcodes": [
              "80120"
            ]
          }
        ]
      },
      {
        "name": "ขนอม",
        "subdistricts": [
          {
            "name": "ขนอม",
            "zipcodes": [
              "80210"
            ]
          },
          {
            "name": "ควนทอง",
            "zipcodes": [
              "80210"
            ]
          },
          {
            "name": "ท้องเนียน",
            "zipcodes": [
              "80210"
            ]
          }
        ]
      },
      {
        "name": "หัวไทร",
        "subdistricts": [
          {
            "name": "หัวไทร",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "หน้าสตน",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "แหลม",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "เขาพังไกร",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "บ้านราม",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "บางนบ",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "ท่าซอม",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "ควนชะลิก",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "รามแก้ว",
            "zipcodes": [
              "80170"
            ]
          },
          {
            "name": "เกาะเพชร",
            "zipcodes": [
              "80170"
            ]
          }
        ]
      },
      {
        "name": "บางขัน",
        "subdistricts": [
          {
            "name": "บางขัน",
            "zipcodes": [
              "80360"
            ]
          },
          {
            "name": "บ้านลำนาว",
            "zipcodes": [
              "80360"
            ]
          },
          {
            "name": "วังหิน",
            "zipcodes": [
              "80360"
            ]
          },
          {
            "name": "บ้านนิคม",
            "zipcodes": [
              "80360"
            ]
          }
        ]
      },
      {
        "name": "ถ้ำพรรณรา",
        "subdistricts": [
          {
            "name": "ถ้ำพรรณรา",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "คลองเส",
            "zipcodes": [
              "80260"
            ]
          },
          {
            "name": "ดุสิต",
            "zipcodes": [
              "80260"
            ]
          }
        ]
      },
      {
        "name": "จุฬาภรณ์",
        "subdistricts": [
          {
            "name": "บ้านควนมุด",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "บ้านชะอวด",
            "zipcodes": [
              "80180"
            ]
          },
          {
            "name": "ควนหนองคว้า",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "ทุ่งโพธิ์",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "นาหมอบุญ",
            "zipcodes": [
              "80130"
            ]
          },
          {
            "name": "สามตำบล",
            "zipcodes": [
              "80130"
            ]
          }
        ]
      },
      {
        "name": "พระพรหม",
        "subdistricts": [
          {
            "name": "นาพรุ",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "นาสาร",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ท้ายสำเภา",
            "zipcodes": [
              "80000"
            ]
          },
          {
            "name": "ช้างซ้าย",
            "zipcodes": [
              "80000"
            ]
          }
        ]
      },
      {
        "name": "นบพิตำ",
        "subdistricts": [
          {
            "name": "นบพิตำ",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "กรุงชิง",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "กะหรอ",
            "zipcodes": [
              "80160"
            ]
          },
          {
            "name": "นาเหรง",
            "zipcodes": [
              "80160"
            ]
          }
        ]
      },
      {
        "name": "ช้างกลาง",
        "subdistricts": [
          {
            "name": "ช้างกลาง",
            "zipcodes": [
              "80250"
            ]
          },
          {
            "name": "หลักช้าง",
            "zipcodes": [
              "80250"
            ]
          },
          {
            "name": "สวนขัน",
            "zipcodes": [
              "80250"
            ]
          }
        ]
      },
      {
        "name": "เฉลิมพระเกียรติ",
        "subdistricts": [
          {
            "name": "เชียรเขา",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "ดอนตรอ",
            "zipcodes": [
              "80290"
            ]
          },
          {
            "name": "สวนหลวง",
            "zipcodes": [
              "80190"
            ]
          },
          {
            "name": "ทางพูน",
            "zipcodes": [
              "80190"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "กระบี่",
    "districts": [
      {
        "name": "เมืองกระบี่",
        "subdistricts": [
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "กระบี่ใหญ่",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "กระบี่น้อย",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "เขาคราม",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "เขาทอง",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "ทับปริก",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "ไสไทย",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "อ่าวนาง",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "หนองทะเล",
            "zipcodes": [
              "81000"
            ]
          },
          {
            "name": "คลองประสงค์",
            "zipcodes": [
              "81000"
            ]
          }
        ]
      },
      {
        "name": "เขาพนม",
        "subdistricts": [
          {
            "name": "เขาพนม",
            "zipcodes": [
              "81140"
            ]
          },
          {
            "name": "เขาดิน",
            "zipcodes": [
              "81140"
            ]
          },
          {
            "name": "สินปุน",
            "zipcodes": [
              "80240"
            ]
          },
          {
            "name": "พรุเตียว",
            "zipcodes": [
              "81140"
            ]
          },
          {
            "name": "หน้าเขา",
            "zipcodes": [
              "81140"
            ]
          },
          {
            "name": "โคกหาร",
            "zipcodes": [
              "80240"
            ]
          }
        ]
      },
      {
        "name": "เกาะลันตา",
        "subdistricts": [
          {
            "name": "เกาะลันตาใหญ่",
            "zipcodes": [
              "81150"
            ]
          },
          {
            "name": "เกาะลันตาน้อย",
            "zipcodes": [
              "81150"
            ]
          },
          {
            "name": "เกาะกลาง",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "คลองยาง",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "ศาลาด่าน",
            "zipcodes": [
              "81150"
            ]
          }
        ]
      },
      {
        "name": "คลองท่อม",
        "subdistricts": [
          {
            "name": "คลองท่อมใต้",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "คลองท่อมเหนือ",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "คลองพน",
            "zipcodes": [
              "81170"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "81170"
            ]
          },
          {
            "name": "ห้วยน้ำขาว",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "พรุดินนา",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "เพหลา",
            "zipcodes": [
              "81120"
            ]
          }
        ]
      },
      {
        "name": "อ่าวลึก",
        "subdistricts": [
          {
            "name": "อ่าวลึกใต้",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "แหลมสัก",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "นาเหนือ",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "คลองหิน",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "อ่าวลึกน้อย",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "อ่าวลึกเหนือ",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "เขาใหญ่",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "คลองยา",
            "zipcodes": [
              "81110"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "81110"
            ]
          }
        ]
      },
      {
        "name": "ปลายพระยา",
        "subdistricts": [
          {
            "name": "ปลายพระยา",
            "zipcodes": [
              "81160"
            ]
          },
          {
            "name": "เขาเขน",
            "zipcodes": [
              "81160"
            ]
          },
          {
            "name": "เขาต่อ",
            "zipcodes": [
              "81160"
            ]
          },
          {
            "name": "คีรีวง",
            "zipcodes": [
              "81160"
            ]
          }
        ]
      },
      {
        "name": "ลำทับ",
        "subdistricts": [
          {
            "name": "ลำทับ",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "ดินอุดม",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "ทุ่งไทรทอง",
            "zipcodes": [
              "81120"
            ]
          },
          {
            "name": "ดินแดง",
            "zipcodes": [
              "81120"
            ]
          }
        ]
      },
      {
        "name": "เหนือคลอง",
        "subdistricts": [
          {
            "name": "เหนือคลอง",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "เกาะศรีบอยา",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "คลองขนาน",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "คลองเขม้า",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "โคกยาง",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "ปกาสัย",
            "zipcodes": [
              "81130"
            ]
          },
          {
            "name": "ห้วยยูง",
            "zipcodes": [
              "81130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พังงา",
    "districts": [
      {
        "name": "เมืองพังงา",
        "subdistricts": [
          {
            "name": "ท้ายช้าง",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "นบปริง",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "ถ้ำน้ำผุด",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "บางเตย",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "ตากแดด",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "สองแพรก",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "ทุ่งคาโงก",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "เกาะปันหยี",
            "zipcodes": [
              "82000"
            ]
          },
          {
            "name": "ป่ากอ",
            "zipcodes": [
              "82000"
            ]
          }
        ]
      },
      {
        "name": "เกาะยาว",
        "subdistricts": [
          {
            "name": "เกาะยาวน้อย",
            "zipcodes": [
              "82160"
            ]
          },
          {
            "name": "เกาะยาวใหญ่",
            "zipcodes": [
              "82160"
            ]
          },
          {
            "name": "พรุใน",
            "zipcodes": [
              "83000"
            ]
          }
        ]
      },
      {
        "name": "กะปง",
        "subdistricts": [
          {
            "name": "กะปง",
            "zipcodes": [
              "82170"
            ]
          },
          {
            "name": "ท่านา",
            "zipcodes": [
              "82170"
            ]
          },
          {
            "name": "เหมาะ",
            "zipcodes": [
              "82170"
            ]
          },
          {
            "name": "เหล",
            "zipcodes": [
              "82170"
            ]
          },
          {
            "name": "รมณีย์",
            "zipcodes": [
              "82170"
            ]
          }
        ]
      },
      {
        "name": "ตะกั่วทุ่ง",
        "subdistricts": [
          {
            "name": "ถ้ำ",
            "zipcodes": [
              "82130"
            ]
          },
          {
            "name": "กระโสม",
            "zipcodes": [
              "82130"
            ]
          },
          {
            "name": "กะไหล",
            "zipcodes": [
              "82130"
            ]
          },
          {
            "name": "ท่าอยู่",
            "zipcodes": [
              "82130"
            ]
          },
          {
            "name": "หล่อยูง",
            "zipcodes": [
              "82140"
            ]
          },
          {
            "name": "โคกกลอย",
            "zipcodes": [
              "82140"
            ]
          },
          {
            "name": "คลองเคียน",
            "zipcodes": [
              "82130"
            ]
          }
        ]
      },
      {
        "name": "ตะกั่วป่า",
        "subdistricts": [
          {
            "name": "ตะกั่วป่า",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "บางนายสี",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "บางไทร",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "บางม่วง",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "ตำตัว",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "โคกเคียน",
            "zipcodes": [
              "82110"
            ]
          },
          {
            "name": "คึกคัก",
            "zipcodes": [
              "82190"
            ]
          },
          {
            "name": "เกาะคอเขา",
            "zipcodes": [
              "82190"
            ]
          }
        ]
      },
      {
        "name": "คุระบุรี",
        "subdistricts": [
          {
            "name": "คุระ",
            "zipcodes": [
              "82150"
            ]
          },
          {
            "name": "บางวัน",
            "zipcodes": [
              "82150"
            ]
          },
          {
            "name": "เกาะพระทอง",
            "zipcodes": [
              "82150"
            ]
          },
          {
            "name": "แม่นางขาว",
            "zipcodes": [
              "82150"
            ]
          }
        ]
      },
      {
        "name": "ทับปุด",
        "subdistricts": [
          {
            "name": "ทับปุด",
            "zipcodes": [
              "82180"
            ]
          },
          {
            "name": "มะรุ่ย",
            "zipcodes": [
              "82180"
            ]
          },
          {
            "name": "บ่อแสน",
            "zipcodes": [
              "82180"
            ]
          },
          {
            "name": "ถ้ำทองหลาง",
            "zipcodes": [
              "82180"
            ]
          },
          {
            "name": "โคกเจริญ",
            "zipcodes": [
              "82180"
            ]
          },
          {
            "name": "บางเหรียง",
            "zipcodes": [
              "82180"
            ]
          }
        ]
      },
      {
        "name": "ท้ายเหมือง",
        "subdistricts": [
          {
            "name": "ท้ายเหมือง",
            "zipcodes": [
              "82120"
            ]
          },
          {
            "name": "นาเตย",
            "zipcodes": [
              "82120"
            ]
          },
          {
            "name": "บางทอง",
            "zipcodes": [
              "82120"
            ]
          },
          {
            "name": "ทุ่งมะพร้าว",
            "zipcodes": [
              "82120"
            ]
          },
          {
            "name": "ลำภี",
            "zipcodes": [
              "82120"
            ]
          },
          {
            "name": "ลำแก่น",
            "zipcodes": [
              "82120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ภูเก็ต",
    "districts": [
      {
        "name": "เมืองภูเก็ต",
        "subdistricts": [
          {
            "name": "ตลาดใหญ่",
            "zipcodes": [
              "83000"
            ]
          },
          {
            "name": "ตลาดเหนือ",
            "zipcodes": [
              "83000"
            ]
          },
          {
            "name": "เกาะแก้ว",
            "zipcodes": [
              "83000"
            ]
          },
          {
            "name": "รัษฎา",
            "zipcodes": [
              "83000"
            ]
          },
          {
            "name": "วิชิต",
            "zipcodes": [
              "83000"
            ]
          },
          {
            "name": "ฉลอง",
            "zipcodes": [
              "83130"
            ]
          },
          {
            "name": "ราไวย์",
            "zipcodes": [
              "83130"
            ]
          },
          {
            "name": "กะรน",
            "zipcodes": [
              "83100"
            ]
          }
        ]
      },
      {
        "name": "กะทู้",
        "subdistricts": [
          {
            "name": "กะทู้",
            "zipcodes": [
              "83120"
            ]
          },
          {
            "name": "ป่าตอง",
            "zipcodes": [
              "83150"
            ]
          },
          {
            "name": "กมลา",
            "zipcodes": [
              "83150"
            ]
          }
        ]
      },
      {
        "name": "ถลาง",
        "subdistricts": [
          {
            "name": "เทพกระษัตรี",
            "zipcodes": [
              "83110"
            ]
          },
          {
            "name": "ศรีสุนทร",
            "zipcodes": [
              "83110"
            ]
          },
          {
            "name": "เชิงทะเล",
            "zipcodes": [
              "83110"
            ]
          },
          {
            "name": "ป่าคลอก",
            "zipcodes": [
              "83110"
            ]
          },
          {
            "name": "ไม้ขาว",
            "zipcodes": [
              "83110"
            ]
          },
          {
            "name": "สาคู",
            "zipcodes": [
              "83110"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สุราษฎร์ธานี",
    "districts": [
      {
        "name": "เมืองสุราษฎร์ธานี",
        "subdistricts": [
          {
            "name": "ตลาด",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "มะขามเตี้ย",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "วัดประดู่",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "ขุนทะเล",
            "zipcodes": [
              "84100"
            ]
          },
          {
            "name": "บางใบไม้",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "บางชนะ",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "คลองน้อย",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "บางไทร",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "บางโพธิ์",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "บางกุ้ง",
            "zipcodes": [
              "84000"
            ]
          },
          {
            "name": "คลองฉนาก",
            "zipcodes": [
              "84000"
            ]
          }
        ]
      },
      {
        "name": "กาญจนดิษฐ์",
        "subdistricts": [
          {
            "name": "ท่าทองใหม่",
            "zipcodes": [
              "84290"
            ]
          },
          {
            "name": "ท่าทอง",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "กะแดะ",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ทุ่งกง",
            "zipcodes": [
              "84290"
            ]
          },
          {
            "name": "กรูด",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ช้างซ้าย",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "พลายวาส",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ป่าร่อน",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ตะเคียนทอง",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ช้างขวา",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ท่าอุแท",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ทุ่งรัง",
            "zipcodes": [
              "84290"
            ]
          },
          {
            "name": "คลองสระ",
            "zipcodes": [
              "84160"
            ]
          }
        ]
      },
      {
        "name": "ดอนสัก",
        "subdistricts": [
          {
            "name": "ดอนสัก",
            "zipcodes": [
              "84220"
            ]
          },
          {
            "name": "ชลคราม",
            "zipcodes": [
              "84160"
            ]
          },
          {
            "name": "ไชยคราม",
            "zipcodes": [
              "84220"
            ]
          },
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "84340"
            ]
          }
        ]
      },
      {
        "name": "เกาะสมุย",
        "subdistricts": [
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "84140"
            ]
          },
          {
            "name": "ลิปะน้อย",
            "zipcodes": [
              "84140"
            ]
          },
          {
            "name": "ตลิ่งงาม",
            "zipcodes": [
              "84140"
            ]
          },
          {
            "name": "หน้าเมือง",
            "zipcodes": [
              "84140"
            ]
          },
          {
            "name": "มะเร็ต",
            "zipcodes": [
              "84310"
            ]
          },
          {
            "name": "บ่อผุด",
            "zipcodes": [
              "84320"
            ]
          },
          {
            "name": "แม่น้ำ",
            "zipcodes": [
              "84330"
            ]
          }
        ]
      },
      {
        "name": "เกาะพะงัน",
        "subdistricts": [
          {
            "name": "เกาะพะงัน",
            "zipcodes": [
              "84280"
            ]
          },
          {
            "name": "บ้านใต้",
            "zipcodes": [
              "84280"
            ]
          },
          {
            "name": "เกาะเต่า",
            "zipcodes": [
              "84280"
            ]
          }
        ]
      },
      {
        "name": "ไชยา",
        "subdistricts": [
          {
            "name": "ตลาดไชยา",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "พุมเรียง",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "เลม็ด",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "เวียง",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "ทุ่ง",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "ป่าเว",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "ตะกรบ",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "โมถ่าย",
            "zipcodes": [
              "84110"
            ]
          },
          {
            "name": "ปากหมาก",
            "zipcodes": [
              "84110"
            ]
          }
        ]
      },
      {
        "name": "ท่าชนะ",
        "subdistricts": [
          {
            "name": "ท่าชนะ",
            "zipcodes": [
              "84170"
            ]
          },
          {
            "name": "สมอทอง",
            "zipcodes": [
              "84170"
            ]
          },
          {
            "name": "ประสงค์",
            "zipcodes": [
              "84170"
            ]
          },
          {
            "name": "คันธุลี",
            "zipcodes": [
              "84170"
            ]
          },
          {
            "name": "วัง",
            "zipcodes": [
              "84170"
            ]
          },
          {
            "name": "คลองพา",
            "zipcodes": [
              "84170"
            ]
          }
        ]
      },
      {
        "name": "คีรีรัฐนิคม",
        "subdistricts": [
          {
            "name": "ท่าขนอน",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "บ้านยาง",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "น้ำหัก",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "กะเปา",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "ท่ากระดาน",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "ย่านยาว",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "ถ้ำสิงขร",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "บ้านทำเนียบ",
            "zipcodes": [
              "84180"
            ]
          }
        ]
      },
      {
        "name": "บ้านตาขุน",
        "subdistricts": [
          {
            "name": "เขาวง",
            "zipcodes": [
              "84230"
            ]
          },
          {
            "name": "พระแสง",
            "zipcodes": [
              "84230"
            ]
          },
          {
            "name": "พรุไทย",
            "zipcodes": [
              "84230"
            ]
          },
          {
            "name": "เขาพัง",
            "zipcodes": [
              "84230"
            ]
          }
        ]
      },
      {
        "name": "พนม",
        "subdistricts": [
          {
            "name": "พนม",
            "zipcodes": [
              "84250"
            ]
          },
          {
            "name": "ต้นยวน",
            "zipcodes": [
              "84250"
            ]
          },
          {
            "name": "คลองศก",
            "zipcodes": [
              "84250"
            ]
          },
          {
            "name": "พลูเถื่อน",
            "zipcodes": [
              "84250"
            ]
          },
          {
            "name": "พังกาญจน์",
            "zipcodes": [
              "84250"
            ]
          },
          {
            "name": "คลองชะอุ่น",
            "zipcodes": [
              "84250"
            ]
          }
        ]
      },
      {
        "name": "ท่าฉาง",
        "subdistricts": [
          {
            "name": "ท่าฉาง",
            "zipcodes": [
              "84150"
            ]
          },
          {
            "name": "ท่าเคย",
            "zipcodes": [
              "84150"
            ]
          },
          {
            "name": "คลองไทร",
            "zipcodes": [
              "84150"
            ]
          },
          {
            "name": "เขาถ่าน",
            "zipcodes": [
              "84150"
            ]
          },
          {
            "name": "เสวียด",
            "zipcodes": [
              "84150"
            ]
          },
          {
            "name": "ปากฉลุย",
            "zipcodes": [
              "84150"
            ]
          }
        ]
      },
      {
        "name": "บ้านนาสาร",
        "subdistricts": [
          {
            "name": "นาสาร",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "พรุพี",
            "zipcodes": [
              "84270"
            ]
          },
          {
            "name": "ทุ่งเตา",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "ลำพูน",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "ท่าชี",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "ควนศรี",
            "zipcodes": [
              "84270"
            ]
          },
          {
            "name": "ควนสุบรรณ",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "คลองปราบ",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "น้ำพุ",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "ทุ่งเตาใหม่",
            "zipcodes": [
              "84120"
            ]
          },
          {
            "name": "เพิ่มพูนทรัพย์",
            "zipcodes": [
              "84120"
            ]
          }
        ]
      },
      {
        "name": "บ้านนาเดิม",
        "subdistricts": [
          {
            "name": "บ้านนา",
            "zipcodes": [
              "84240"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "84240"
            ]
          },
          {
            "name": "ทรัพย์ทวี",
            "zipcodes": [
              "84240"
            ]
          },
          {
            "name": "นาใต้",
            "zipcodes": [
              "84240"
            ]
          }
        ]
      },
      {
        "name": "เคียนซา",
        "subdistricts": [
          {
            "name": "เคียนซา",
            "zipcodes": [
              "84260"
            ]
          },
          {
            "name": "พ่วงพรมคร",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "เขาตอก",
            "zipcodes": [
              "84260"
            ]
          },
          {
            "name": "อรัญคามวารี",
            "zipcodes": [
              "84260"
            ]
          },
          {
            "name": "บ้านเสด็จ",
            "zipcodes": [
              "84260"
            ]
          }
        ]
      },
      {
        "name": "เวียงสระ",
        "subdistricts": [
          {
            "name": "เวียงสระ",
            "zipcodes": [
              "84190"
            ]
          },
          {
            "name": "บ้านส้อง",
            "zipcodes": [
              "84190"
            ]
          },
          {
            "name": "คลองฉนวน",
            "zipcodes": [
              "84190"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "84190"
            ]
          },
          {
            "name": "เขานิพันธ์",
            "zipcodes": [
              "84190"
            ]
          }
        ]
      },
      {
        "name": "พระแสง",
        "subdistricts": [
          {
            "name": "อิปัน",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "สินปุน",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "บางสวรรค์",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "ไทรขึง",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "สินเจริญ",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "ไทรโสภา",
            "zipcodes": [
              "84210"
            ]
          },
          {
            "name": "สาคู",
            "zipcodes": [
              "84210"
            ]
          }
        ]
      },
      {
        "name": "พุนพิน",
        "subdistricts": [
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "ท่าสะท้อน",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "ลีเล็ด",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "บางมะเดื่อ",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "บางเดือน",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "ท่าโรงช้าง",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "กรูด",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "พุนพิน",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "บางงอน",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "ศรีวิชัย",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "น้ำรอบ",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "มะลวน",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "หัวเตย",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "หนองไทร",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "เขาหัวควาย",
            "zipcodes": [
              "84130"
            ]
          },
          {
            "name": "ตะปาน",
            "zipcodes": [
              "84130"
            ]
          }
        ]
      },
      {
        "name": "ชัยบุรี",
        "subdistricts": [
          {
            "name": "สองแพรก",
            "zipcodes": [
              "84350"
            ]
          },
          {
            "name": "ชัยบุรี",
            "zipcodes": [
              "84350"
            ]
          },
          {
            "name": "คลองน้อย",
            "zipcodes": [
              "84350"
            ]
          },
          {
            "name": "ไทรทอง",
            "zipcodes": [
              "84350"
            ]
          }
        ]
      },
      {
        "name": "วิภาวดี",
        "subdistricts": [
          {
            "name": "ตะกุกใต้",
            "zipcodes": [
              "84180"
            ]
          },
          {
            "name": "ตะกุกเหนือ",
            "zipcodes": [
              "84180"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ระนอง",
    "districts": [
      {
        "name": "เมืองระนอง",
        "subdistricts": [
          {
            "name": "เขานิเวศน์",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "ราชกรูด",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "หงาว",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "บางริ้น",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "บางนอน",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "หาดส้มแป้น",
            "zipcodes": [
              "85000"
            ]
          },
          {
            "name": "ทรายแดง",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "เกาะพยาม",
            "zipcodes": [
              "85000"
            ]
          }
        ]
      },
      {
        "name": "ละอุ่น",
        "subdistricts": [
          {
            "name": "ละอุ่นใต้",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "ละอุ่นเหนือ",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "บางพระใต้",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "บางพระเหนือ",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "บางแก้ว",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "ในวงเหนือ",
            "zipcodes": [
              "85130"
            ]
          },
          {
            "name": "ในวงใต้",
            "zipcodes": [
              "85130"
            ]
          }
        ]
      },
      {
        "name": "กะเปอร์",
        "subdistricts": [
          {
            "name": "ม่วงกลวง",
            "zipcodes": [
              "85120"
            ]
          },
          {
            "name": "กะเปอร์",
            "zipcodes": [
              "85120"
            ]
          },
          {
            "name": "เชี่ยวเหลียง",
            "zipcodes": [
              "85120"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "85120"
            ]
          },
          {
            "name": "บางหิน",
            "zipcodes": [
              "85120"
            ]
          }
        ]
      },
      {
        "name": "กระบุรี",
        "subdistricts": [
          {
            "name": "น้ำจืด",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "น้ำจืดน้อย",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "มะมุ",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "ปากจั่น",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "ลำเลียง",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "จ.ป.ร.",
            "zipcodes": [
              "85110"
            ]
          },
          {
            "name": "บางใหญ่",
            "zipcodes": [
              "85110"
            ]
          }
        ]
      },
      {
        "name": "สุขสำราญ",
        "subdistricts": [
          {
            "name": "นาคา",
            "zipcodes": [
              "85120"
            ]
          },
          {
            "name": "กำพวน",
            "zipcodes": [
              "85120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ชุมพร",
    "districts": [
      {
        "name": "เมืองชุมพร",
        "subdistricts": [
          {
            "name": "ท่าตะเภา",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "86120"
            ]
          },
          {
            "name": "ท่ายาง",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "บางหมาก",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "นาทุ่ง",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "นาชะอัง",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "ตากแดด",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "บางลึก",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "หาดพันไกร",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "วังไผ่",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "86190"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "86190"
            ]
          },
          {
            "name": "ขุนกระทิง",
            "zipcodes": [
              "86000"
            ]
          },
          {
            "name": "ทุ่งคา",
            "zipcodes": [
              "86100"
            ]
          },
          {
            "name": "วิสัยเหนือ",
            "zipcodes": [
              "86100"
            ]
          },
          {
            "name": "หาดทรายรี",
            "zipcodes": [
              "86120"
            ]
          },
          {
            "name": "ถ้ำสิงห์",
            "zipcodes": [
              "86100"
            ]
          }
        ]
      },
      {
        "name": "ท่าแซะ",
        "subdistricts": [
          {
            "name": "ท่าแซะ",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "คุริง",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "สลุย",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "นากระตาม",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "รับร่อ",
            "zipcodes": [
              "86190"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "หงษ์เจริญ",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "หินแก้ว",
            "zipcodes": [
              "86190"
            ]
          },
          {
            "name": "ทรัพย์อนันต์",
            "zipcodes": [
              "86140"
            ]
          },
          {
            "name": "สองพี่น้อง",
            "zipcodes": [
              "86140"
            ]
          }
        ]
      },
      {
        "name": "ปะทิว",
        "subdistricts": [
          {
            "name": "บางสน",
            "zipcodes": [
              "86160"
            ]
          },
          {
            "name": "ทะเลทรัพย์",
            "zipcodes": [
              "86160"
            ]
          },
          {
            "name": "สะพลี",
            "zipcodes": [
              "86230"
            ]
          },
          {
            "name": "ชุมโค",
            "zipcodes": [
              "86160"
            ]
          },
          {
            "name": "ดอนยาง",
            "zipcodes": [
              "86210"
            ]
          },
          {
            "name": "ปากคลอง",
            "zipcodes": [
              "86210"
            ]
          },
          {
            "name": "เขาไชยราช",
            "zipcodes": [
              "86210"
            ]
          }
        ]
      },
      {
        "name": "หลังสวน",
        "subdistricts": [
          {
            "name": "หลังสวน",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "ขันเงิน",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "ท่ามะพลา",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "นาขา",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "นาพญา",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "บ้านควน",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "บางมะพร้าว",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "บางน้ำจืด",
            "zipcodes": [
              "86150"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "86150"
            ]
          },
          {
            "name": "พ้อแดง",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "แหลมทราย",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "วังตะกอ",
            "zipcodes": [
              "86110"
            ]
          },
          {
            "name": "หาดยาย",
            "zipcodes": [
              "86110"
            ]
          }
        ]
      },
      {
        "name": "ละแม",
        "subdistricts": [
          {
            "name": "ละแม",
            "zipcodes": [
              "86170"
            ]
          },
          {
            "name": "ทุ่งหลวง",
            "zipcodes": [
              "86170"
            ]
          },
          {
            "name": "สวนแตง",
            "zipcodes": [
              "86170"
            ]
          },
          {
            "name": "ทุ่งคาวัด",
            "zipcodes": [
              "86170"
            ]
          }
        ]
      },
      {
        "name": "พะโต๊ะ",
        "subdistricts": [
          {
            "name": "พะโต๊ะ",
            "zipcodes": [
              "86180"
            ]
          },
          {
            "name": "ปากทรง",
            "zipcodes": [
              "86180"
            ]
          },
          {
            "name": "ปังหวาน",
            "zipcodes": [
              "86180"
            ]
          },
          {
            "name": "พระรักษ์",
            "zipcodes": [
              "86180"
            ]
          }
        ]
      },
      {
        "name": "สวี",
        "subdistricts": [
          {
            "name": "นาโพธิ์",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "สวี",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "ทุ่งระยะ",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "ท่าหิน",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "ปากแพรก",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "ด่านสวี",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "ครน",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "วิสัยใต้",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "นาสัก",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "เขาทะลุ",
            "zipcodes": [
              "86130"
            ]
          },
          {
            "name": "เขาค่าย",
            "zipcodes": [
              "86130"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งตะโก",
        "subdistricts": [
          {
            "name": "ปากตะโก",
            "zipcodes": [
              "86220"
            ]
          },
          {
            "name": "ทุ่งตะไคร",
            "zipcodes": [
              "86220"
            ]
          },
          {
            "name": "ตะโก",
            "zipcodes": [
              "86220"
            ]
          },
          {
            "name": "ช่องไม้แก้ว",
            "zipcodes": [
              "86220"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "สงขลา",
    "districts": [
      {
        "name": "เมืองสงขลา",
        "subdistricts": [
          {
            "name": "บ่อยาง",
            "zipcodes": [
              "90000"
            ]
          },
          {
            "name": "เขารูปช้าง",
            "zipcodes": [
              "90000"
            ]
          },
          {
            "name": "เกาะแต้ว",
            "zipcodes": [
              "90000"
            ]
          },
          {
            "name": "พะวง",
            "zipcodes": [
              "90100"
            ]
          },
          {
            "name": "ทุ่งหวัง",
            "zipcodes": [
              "90000"
            ]
          },
          {
            "name": "เกาะยอ",
            "zipcodes": [
              "90100"
            ]
          }
        ]
      },
      {
        "name": "สทิงพระ",
        "subdistricts": [
          {
            "name": "จะทิ้งพระ",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "กระดังงา",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "สนามชัย",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "ดีหลวง",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "ชุมพล",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "คลองรี",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "คูขุด",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "ท่าหิน",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "วัดจันทร์",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "บ่อแดง",
            "zipcodes": [
              "90190"
            ]
          },
          {
            "name": "บ่อดาน",
            "zipcodes": [
              "90190"
            ]
          }
        ]
      },
      {
        "name": "จะนะ",
        "subdistricts": [
          {
            "name": "บ้านนา",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "ป่าชิง",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "สะพานไม้แก่น",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "สะกอม",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "นาหว้า",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "นาทับ",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "น้ำขาว",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "ขุนตัดหวาย",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "ท่าหมอไทร",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "จะโหนง",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "คู",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "แค",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "คลองเปียะ",
            "zipcodes": [
              "90130"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "90130"
            ]
          }
        ]
      },
      {
        "name": "นาทวี",
        "subdistricts": [
          {
            "name": "นาทวี",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "ฉาง",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "นาหมอศรี",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "คลองทราย",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "ปลักหนู",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "ท่าประดู่",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "สะท้อน",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "ทับช้าง",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "ประกอบ",
            "zipcodes": [
              "90160"
            ]
          },
          {
            "name": "คลองกวาง",
            "zipcodes": [
              "90160"
            ]
          }
        ]
      },
      {
        "name": "เทพา",
        "subdistricts": [
          {
            "name": "เทพา",
            "zipcodes": [
              "90150"
            ]
          },
          {
            "name": "ปากบาง",
            "zipcodes": [
              "90150"
            ]
          },
          {
            "name": "เกาะสะบ้า",
            "zipcodes": [
              "90150"
            ]
          },
          {
            "name": "ลำไพล",
            "zipcodes": [
              "90260"
            ]
          },
          {
            "name": "ท่าม่วง",
            "zipcodes": [
              "90260"
            ]
          },
          {
            "name": "วังใหญ่",
            "zipcodes": [
              "90260"
            ]
          },
          {
            "name": "สะกอม",
            "zipcodes": [
              "90150"
            ]
          }
        ]
      },
      {
        "name": "สะบ้าย้อย",
        "subdistricts": [
          {
            "name": "สะบ้าย้อย",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "ทุ่งพอ",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "เปียน",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "บ้านโหนด",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "จะแหน",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "คูหา",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "เขาแดง",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "บาโหย",
            "zipcodes": [
              "90210"
            ]
          },
          {
            "name": "ธารคีรี",
            "zipcodes": [
              "90210"
            ]
          }
        ]
      },
      {
        "name": "ระโนด",
        "subdistricts": [
          {
            "name": "ระโนด",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "คลองแดน",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "ตะเครียะ",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "ท่าบอน",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "บ้านใหม่",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "บ่อตรุ",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "ปากแตระ",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "พังยาง",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "ระวะ",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "วัดสน",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "บ้านขาว",
            "zipcodes": [
              "90140"
            ]
          },
          {
            "name": "แดนสงวน",
            "zipcodes": [
              "90140"
            ]
          }
        ]
      },
      {
        "name": "กระแสสินธุ์",
        "subdistricts": [
          {
            "name": "เกาะใหญ่",
            "zipcodes": [
              "90270"
            ]
          },
          {
            "name": "โรง",
            "zipcodes": [
              "90270"
            ]
          },
          {
            "name": "เชิงแส",
            "zipcodes": [
              "90270"
            ]
          },
          {
            "name": "กระแสสินธุ์",
            "zipcodes": [
              "90270"
            ]
          }
        ]
      },
      {
        "name": "รัตภูมิ",
        "subdistricts": [
          {
            "name": "กำแพงเพชร",
            "zipcodes": [
              "90180"
            ]
          },
          {
            "name": "ท่าชะมวง",
            "zipcodes": [
              "90180"
            ]
          },
          {
            "name": "คูหาใต้",
            "zipcodes": [
              "90180"
            ]
          },
          {
            "name": "ควนรู",
            "zipcodes": [
              "90180"
            ]
          },
          {
            "name": "เขาพระ",
            "zipcodes": [
              "90180"
            ]
          }
        ]
      },
      {
        "name": "สะเดา",
        "subdistricts": [
          {
            "name": "สะเดา",
            "zipcodes": [
              "90120"
            ]
          },
          {
            "name": "ปริก",
            "zipcodes": [
              "90120"
            ]
          },
          {
            "name": "พังลา",
            "zipcodes": [
              "90170"
            ]
          },
          {
            "name": "สำนักแต้ว",
            "zipcodes": [
              "90120"
            ]
          },
          {
            "name": "ทุ่งหมอ",
            "zipcodes": [
              "90240"
            ]
          },
          {
            "name": "ท่าโพธิ์",
            "zipcodes": [
              "90170"
            ]
          },
          {
            "name": "ปาดังเบซาร์",
            "zipcodes": [
              "90240"
            ]
          },
          {
            "name": "สำนักขาม",
            "zipcodes": [
              "90320"
            ]
          },
          {
            "name": "เขามีเกียรติ",
            "zipcodes": [
              "90170"
            ]
          }
        ]
      },
      {
        "name": "หาดใหญ่",
        "subdistricts": [
          {
            "name": "หาดใหญ่",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ควนลัง",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "คูเต่า",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "คอหงส์",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "คลองแห",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "คลองอู่ตะเภา",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ฉลุง",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ทุ่งใหญ่",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ทุ่งตำเสา",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "น้ำน้อย",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "บ้านพรุ",
            "zipcodes": [
              "90250"
            ]
          },
          {
            "name": "พะตง",
            "zipcodes": [
              "90230"
            ]
          }
        ]
      },
      {
        "name": "นาหม่อม",
        "subdistricts": [
          {
            "name": "นาหม่อม",
            "zipcodes": [
              "90310"
            ]
          },
          {
            "name": "พิจิตร",
            "zipcodes": [
              "90310"
            ]
          },
          {
            "name": "ทุ่งขมิ้น",
            "zipcodes": [
              "90310"
            ]
          },
          {
            "name": "คลองหรัง",
            "zipcodes": [
              "90310"
            ]
          }
        ]
      },
      {
        "name": "ควนเนียง",
        "subdistricts": [
          {
            "name": "รัตภูมิ",
            "zipcodes": [
              "90220"
            ]
          },
          {
            "name": "ควนโส",
            "zipcodes": [
              "90220"
            ]
          },
          {
            "name": "ห้วยลึก",
            "zipcodes": [
              "90220"
            ]
          },
          {
            "name": "บางเหรียง",
            "zipcodes": [
              "90220"
            ]
          }
        ]
      },
      {
        "name": "บางกล่ำ",
        "subdistricts": [
          {
            "name": "บางกล่ำ",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "ท่าช้าง",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "แม่ทอม",
            "zipcodes": [
              "90110"
            ]
          },
          {
            "name": "บ้านหาร",
            "zipcodes": [
              "90110"
            ]
          }
        ]
      },
      {
        "name": "สิงหนคร",
        "subdistricts": [
          {
            "name": "ชิงโค",
            "zipcodes": [
              "90280"
            ]
          },
          {
            "name": "สทิงหม้อ",
            "zipcodes": [
              "90280"
            ]
          },
          {
            "name": "ทำนบ",
            "zipcodes": [
              "90280"
            ]
          },
          {
            "name": "รำแดง",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "วัดขนุน",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "ชะแล้",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "ปากรอ",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "ป่าขาด",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "หัวเขา",
            "zipcodes": [
              "90280"
            ]
          },
          {
            "name": "บางเขียด",
            "zipcodes": [
              "90330"
            ]
          },
          {
            "name": "ม่วงงาม",
            "zipcodes": [
              "90330"
            ]
          }
        ]
      },
      {
        "name": "คลองหอยโข่ง",
        "subdistricts": [
          {
            "name": "คลองหอยโข่ง",
            "zipcodes": [
              "90230"
            ]
          },
          {
            "name": "ทุ่งลาน",
            "zipcodes": [
              "90230"
            ]
          },
          {
            "name": "โคกม่วง",
            "zipcodes": [
              "90230"
            ]
          },
          {
            "name": "คลองหลา",
            "zipcodes": [
              "90115"
            ]
          }
        ]
      },
      {
        "name": "ท้องถิ่นเทศบาลตำบลสำนักขาม",
        "subdistricts": []
      }
    ]
  },
  {
    "name": "สตูล",
    "districts": [
      {
        "name": "เมืองสตูล",
        "subdistricts": [
          {
            "name": "พิมาน",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "คลองขุด",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "ควนขัน",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "บ้านควน",
            "zipcodes": [
              "91140"
            ]
          },
          {
            "name": "ฉลุง",
            "zipcodes": [
              "91140"
            ]
          },
          {
            "name": "เกาะสาหร่าย",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "ตันหยงโป",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "เจ๊ะบิลัง",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "ตำมะลัง",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "ปูยู",
            "zipcodes": [
              "91000"
            ]
          },
          {
            "name": "ควนโพธิ์",
            "zipcodes": [
              "91140"
            ]
          },
          {
            "name": "เกตรี",
            "zipcodes": [
              "91140"
            ]
          }
        ]
      },
      {
        "name": "ควนโดน",
        "subdistricts": [
          {
            "name": "ควนโดน",
            "zipcodes": [
              "91160"
            ]
          },
          {
            "name": "ควนสตอ",
            "zipcodes": [
              "91160"
            ]
          },
          {
            "name": "ย่านซื่อ",
            "zipcodes": [
              "91160"
            ]
          },
          {
            "name": "วังประจัน",
            "zipcodes": [
              "91160"
            ]
          }
        ]
      },
      {
        "name": "ควนกาหลง",
        "subdistricts": [
          {
            "name": "ทุ่งนุ้ย",
            "zipcodes": [
              "91130"
            ]
          },
          {
            "name": "ควนกาหลง",
            "zipcodes": [
              "91130"
            ]
          },
          {
            "name": "อุใดเจริญ",
            "zipcodes": [
              "91130"
            ]
          }
        ]
      },
      {
        "name": "ท่าแพ",
        "subdistricts": [
          {
            "name": "ท่าแพ",
            "zipcodes": [
              "91150"
            ]
          },
          {
            "name": "แป-ระ",
            "zipcodes": [
              "91150"
            ]
          },
          {
            "name": "สาคร",
            "zipcodes": [
              "91150"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "91150"
            ]
          }
        ]
      },
      {
        "name": "ละงู",
        "subdistricts": [
          {
            "name": "กำแพง",
            "zipcodes": [
              "91110"
            ]
          },
          {
            "name": "ละงู",
            "zipcodes": [
              "91110"
            ]
          },
          {
            "name": "เขาขาว",
            "zipcodes": [
              "91110"
            ]
          },
          {
            "name": "ปากน้ำ",
            "zipcodes": [
              "91110"
            ]
          },
          {
            "name": "น้ำผุด",
            "zipcodes": [
              "91110"
            ]
          },
          {
            "name": "แหลมสน",
            "zipcodes": [
              "91110"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งหว้า",
        "subdistricts": [
          {
            "name": "ทุ่งหว้า",
            "zipcodes": [
              "91120"
            ]
          },
          {
            "name": "นาทอน",
            "zipcodes": [
              "91120"
            ]
          },
          {
            "name": "ขอนคลาน",
            "zipcodes": [
              "91120"
            ]
          },
          {
            "name": "ทุ่งบุหลัง",
            "zipcodes": [
              "91120"
            ]
          },
          {
            "name": "ป่าแก่บ่อหิน",
            "zipcodes": [
              "91120"
            ]
          }
        ]
      },
      {
        "name": "มะนัง",
        "subdistricts": [
          {
            "name": "ปาล์มพัฒนา",
            "zipcodes": [
              "91130"
            ]
          },
          {
            "name": "นิคมพัฒนา",
            "zipcodes": [
              "91130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ตรัง",
    "districts": [
      {
        "name": "เมืองตรัง",
        "subdistricts": [
          {
            "name": "ทับเที่ยง",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาพละ",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "บ้านควน",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาบินหลา",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "ควนปริง",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาโยงใต้",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "บางรัก",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "โคกหล่อ",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาโต๊ะหมิง",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "หนองตรุด",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "น้ำผุด",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาตาล่วง",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "บ้านโพธิ์",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "นาท่ามเหนือ",
            "zipcodes": [
              "92190"
            ]
          },
          {
            "name": "นาท่ามใต้",
            "zipcodes": [
              "92190"
            ]
          }
        ]
      },
      {
        "name": "กันตัง",
        "subdistricts": [
          {
            "name": "กันตัง",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "ควนธานี",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "บางหมาก",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "บางเป้า",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "วังวน",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "กันตังใต้",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "โคกยาง",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "คลองลุ",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "ย่านซื่อ",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "บ่อน้ำร้อน",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "บางสัก",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "นาเกลือ",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "เกาะลิบง",
            "zipcodes": [
              "92110"
            ]
          },
          {
            "name": "คลองชีล้อม",
            "zipcodes": [
              "92110"
            ]
          }
        ]
      },
      {
        "name": "ย่านตาขาว",
        "subdistricts": [
          {
            "name": "ย่านตาขาว",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "หนองบ่อ",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "นาชุมเห็ด",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "ในควน",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "โพรงจระเข้",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "ทุ่งกระบือ",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "ทุ่งค่าย",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "เกาะเปียะ",
            "zipcodes": [
              "92140"
            ]
          }
        ]
      },
      {
        "name": "ปะเหลียน",
        "subdistricts": [
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "92120"
            ]
          },
          {
            "name": "ทุ่งยาว",
            "zipcodes": [
              "92180"
            ]
          },
          {
            "name": "ปะเหลียน",
            "zipcodes": [
              "92180"
            ]
          },
          {
            "name": "บางด้วน",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "สุโสะ",
            "zipcodes": [
              "92120"
            ]
          },
          {
            "name": "ลิพัง",
            "zipcodes": [
              "92180"
            ]
          },
          {
            "name": "เกาะสุกร",
            "zipcodes": [
              "92120"
            ]
          },
          {
            "name": "ท่าพญา",
            "zipcodes": [
              "92140"
            ]
          },
          {
            "name": "แหลมสอม",
            "zipcodes": [
              "92180"
            ]
          }
        ]
      },
      {
        "name": "สิเกา",
        "subdistricts": [
          {
            "name": "บ่อหิน",
            "zipcodes": [
              "92150"
            ]
          },
          {
            "name": "เขาไม้แก้ว",
            "zipcodes": [
              "92150"
            ]
          },
          {
            "name": "กะลาเส",
            "zipcodes": [
              "92150"
            ]
          },
          {
            "name": "ไม้ฝาด",
            "zipcodes": [
              "92150"
            ]
          },
          {
            "name": "นาเมืองเพชร",
            "zipcodes": [
              "92000"
            ]
          }
        ]
      },
      {
        "name": "ห้วยยอด",
        "subdistricts": [
          {
            "name": "ห้วยยอด",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "หนองช้างแล่น",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "บางดี",
            "zipcodes": [
              "92210"
            ]
          },
          {
            "name": "บางกุ้ง",
            "zipcodes": [
              "92210"
            ]
          },
          {
            "name": "เขากอบ",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "เขาขาว",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "เขาปูน",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "ปากแจ่ม",
            "zipcodes": [
              "92190"
            ]
          },
          {
            "name": "ปากคม",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "ท่างิ้ว",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "ลำภูรา",
            "zipcodes": [
              "92190"
            ]
          },
          {
            "name": "นาวง",
            "zipcodes": [
              "92210"
            ]
          },
          {
            "name": "ห้วยนาง",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "ในเตา",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "ทุ่งต่อ",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "วังคีรี",
            "zipcodes": [
              "92210"
            ]
          }
        ]
      },
      {
        "name": "วังวิเศษ",
        "subdistricts": [
          {
            "name": "เขาวิเศษ",
            "zipcodes": [
              "92220"
            ]
          },
          {
            "name": "วังมะปราง",
            "zipcodes": [
              "92220"
            ]
          },
          {
            "name": "อ่าวตง",
            "zipcodes": [
              "92220"
            ]
          },
          {
            "name": "ท่าสะบ้า",
            "zipcodes": [
              "92000"
            ]
          },
          {
            "name": "วังมะปรางเหนือ",
            "zipcodes": [
              "92220"
            ]
          }
        ]
      },
      {
        "name": "นาโยง",
        "subdistricts": [
          {
            "name": "นาโยงเหนือ",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "ช่อง",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "ละมอ",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "โคกสะบ้า",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "นาหมื่นศรี",
            "zipcodes": [
              "92170"
            ]
          },
          {
            "name": "นาข้าวเสีย",
            "zipcodes": [
              "92170"
            ]
          }
        ]
      },
      {
        "name": "รัษฎา",
        "subdistricts": [
          {
            "name": "ควนเมา",
            "zipcodes": [
              "92160"
            ]
          },
          {
            "name": "คลองปาง",
            "zipcodes": [
              "92160"
            ]
          },
          {
            "name": "หนองบัว",
            "zipcodes": [
              "92160"
            ]
          },
          {
            "name": "หนองปรือ",
            "zipcodes": [
              "92130"
            ]
          },
          {
            "name": "เขาไพร",
            "zipcodes": [
              "92160"
            ]
          }
        ]
      },
      {
        "name": "หาดสำราญ",
        "subdistricts": [
          {
            "name": "หาดสำราญ",
            "zipcodes": [
              "92120"
            ]
          },
          {
            "name": "บ้าหวี",
            "zipcodes": [
              "92120"
            ]
          },
          {
            "name": "ตะเสะ",
            "zipcodes": [
              "92120"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "พัทลุง",
    "districts": [
      {
        "name": "เมืองพัทลุง",
        "subdistricts": [
          {
            "name": "คูหาสวรรค์",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "เขาเจียก",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ท่ามิหรำ",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "โคกชะงาย",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "นาท่อม",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ปรางหมู่",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ท่าแค",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ลำปำ",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ตำนาน",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ควนมะพร้าว",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ร่มเมือง",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ชัยบุรี",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "นาโหนด",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "พญาขัน",
            "zipcodes": [
              "93000"
            ]
          }
        ]
      },
      {
        "name": "กงหรา",
        "subdistricts": [
          {
            "name": "กงหรา",
            "zipcodes": [
              "93180"
            ]
          },
          {
            "name": "ชะรัด",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "คลองเฉลิม",
            "zipcodes": [
              "93180"
            ]
          },
          {
            "name": "คลองทรายขาว",
            "zipcodes": [
              "93180"
            ]
          },
          {
            "name": "สมหวัง",
            "zipcodes": [
              "93000"
            ]
          }
        ]
      },
      {
        "name": "เขาชัยสน",
        "subdistricts": [
          {
            "name": "เขาชัยสน",
            "zipcodes": [
              "93130"
            ]
          },
          {
            "name": "ควนขนุน",
            "zipcodes": [
              "93130"
            ]
          },
          {
            "name": "จองถนน",
            "zipcodes": [
              "93130"
            ]
          },
          {
            "name": "หานโพธิ์",
            "zipcodes": [
              "93130"
            ]
          },
          {
            "name": "โคกม่วง",
            "zipcodes": [
              "93130"
            ]
          }
        ]
      },
      {
        "name": "ตะโหมด",
        "subdistricts": [
          {
            "name": "แม่ขรี",
            "zipcodes": [
              "93160"
            ]
          },
          {
            "name": "ตะโหมด",
            "zipcodes": [
              "93160"
            ]
          },
          {
            "name": "คลองใหญ่",
            "zipcodes": [
              "93160"
            ]
          }
        ]
      },
      {
        "name": "ควนขนุน",
        "subdistricts": [
          {
            "name": "ควนขนุน",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "ทะเลน้อย",
            "zipcodes": [
              "93150"
            ]
          },
          {
            "name": "นาขยาด",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "พนมวังก์",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "แหลมโตนด",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "ปันแต",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "โตนดด้วน",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "มะกอกเหนือ",
            "zipcodes": [
              "93150"
            ]
          },
          {
            "name": "พนางตุง",
            "zipcodes": [
              "93150"
            ]
          },
          {
            "name": "ชะมวง",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "แพรกหา",
            "zipcodes": [
              "93110"
            ]
          }
        ]
      },
      {
        "name": "ปากพะยูน",
        "subdistricts": [
          {
            "name": "ปากพะยูน",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "ดอนประดู่",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "เกาะนางคำ",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "เกาะหมาก",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "ฝาละมี",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "หารเทา",
            "zipcodes": [
              "93120"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "93120"
            ]
          }
        ]
      },
      {
        "name": "ศรีบรรพต",
        "subdistricts": [
          {
            "name": "เขาย่า",
            "zipcodes": [
              "93190"
            ]
          },
          {
            "name": "เขาปู่",
            "zipcodes": [
              "93190"
            ]
          },
          {
            "name": "ตะแพน",
            "zipcodes": [
              "93190"
            ]
          }
        ]
      },
      {
        "name": "ป่าบอน",
        "subdistricts": [
          {
            "name": "ป่าบอน",
            "zipcodes": [
              "93170"
            ]
          },
          {
            "name": "โคกทราย",
            "zipcodes": [
              "93170"
            ]
          },
          {
            "name": "หนองธง",
            "zipcodes": [
              "93170"
            ]
          },
          {
            "name": "ทุ่งนารี",
            "zipcodes": [
              "93170"
            ]
          },
          {
            "name": "วังใหม่",
            "zipcodes": [
              "93170"
            ]
          }
        ]
      },
      {
        "name": "บางแก้ว",
        "subdistricts": [
          {
            "name": "ท่ามะเดื่อ",
            "zipcodes": [
              "93140"
            ]
          },
          {
            "name": "นาปะขอ",
            "zipcodes": [
              "93140"
            ]
          },
          {
            "name": "โคกสัก",
            "zipcodes": [
              "93140"
            ]
          }
        ]
      },
      {
        "name": "ป่าพะยอม",
        "subdistricts": [
          {
            "name": "ป่าพะยอม",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "ลานข่อย",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "เกาะเต่า",
            "zipcodes": [
              "93110"
            ]
          },
          {
            "name": "บ้านพร้าว",
            "zipcodes": [
              "93110"
            ]
          }
        ]
      },
      {
        "name": "ศรีนครินทร์",
        "subdistricts": [
          {
            "name": "ชุมพล",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "บ้านนา",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "อ่างทอง",
            "zipcodes": [
              "93000"
            ]
          },
          {
            "name": "ลำสินธุ์",
            "zipcodes": [
              "93000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ปัตตานี",
    "districts": [
      {
        "name": "เมืองปัตตานี",
        "subdistricts": [
          {
            "name": "สะบารัง",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "อาเนาะรู",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "จะบังติกอ",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "บานา",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "ตันหยงลุโละ",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "คลองมานิง",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "กะมิยอ",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "บาราโหม",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "ปะกาฮะรัง",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "รูสะมิแล",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "ตะลุโบะ",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "บาราเฮาะ",
            "zipcodes": [
              "94000"
            ]
          },
          {
            "name": "ปุยุด",
            "zipcodes": [
              "94000"
            ]
          }
        ]
      },
      {
        "name": "โคกโพธิ์",
        "subdistricts": [
          {
            "name": "โคกโพธิ์",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "มะกรูด",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "บางโกระ",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "ป่าบอน",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "ทรายขาว",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "นาประดู่",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ปากล่อ",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ทุ่งพลา",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ท่าเรือ",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "นาเกตุ",
            "zipcodes": [
              "94120"
            ]
          },
          {
            "name": "ควนโนรี",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ช้างให้ตก",
            "zipcodes": [
              "94120"
            ]
          }
        ]
      },
      {
        "name": "หนองจิก",
        "subdistricts": [
          {
            "name": "เกาะเปาะ",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "คอลอตันหยง",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ดอนรัก",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ดาโต๊ะ",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ตุยง",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ท่ากำชำ",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "บ่อทอง",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "บางเขา",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "บางตาวา",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ปุโละปุโย",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ยาบี",
            "zipcodes": [
              "94170"
            ]
          },
          {
            "name": "ลิปะสะโง",
            "zipcodes": [
              "94170"
            ]
          }
        ]
      },
      {
        "name": "ปะนาเระ",
        "subdistricts": [
          {
            "name": "ปะนาเระ",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "ท่าข้าม",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "บ้านนอก",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "ดอน",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "ควน",
            "zipcodes": [
              "94190"
            ]
          },
          {
            "name": "ท่าน้ำ",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "คอกกระบือ",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "พ่อมิ่ง",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "บ้านกลาง",
            "zipcodes": [
              "94130"
            ]
          },
          {
            "name": "บ้านน้ำบ่อ",
            "zipcodes": [
              "94130"
            ]
          }
        ]
      },
      {
        "name": "มายอ",
        "subdistricts": [
          {
            "name": "มายอ",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ถนน",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ตรัง",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "กระหวะ",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ลุโบะยิไร",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ลางา",
            "zipcodes": [
              "94190"
            ]
          },
          {
            "name": "กระเสาะ",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "เกาะจัน",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ปะโด",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "สาคอบน",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "สาคอใต้",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "สะกำ",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ปานัน",
            "zipcodes": [
              "94140"
            ]
          }
        ]
      },
      {
        "name": "ทุ่งยางแดง",
        "subdistricts": [
          {
            "name": "ตะโละแมะนา",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "พิเทน",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "น้ำดำ",
            "zipcodes": [
              "94140"
            ]
          },
          {
            "name": "ปากู",
            "zipcodes": [
              "94140"
            ]
          }
        ]
      },
      {
        "name": "สายบุรี",
        "subdistricts": [
          {
            "name": "ตะลุบัน",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "ตะบิ้ง",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "ปะเสยะวอ",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "บางเก่า",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "บือเระ",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "เตราะบอน",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "กะดุนง",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "ละหาร",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "มะนังดาลำ",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "แป้น",
            "zipcodes": [
              "94110"
            ]
          },
          {
            "name": "ทุ่งคล้า",
            "zipcodes": [
              "94190"
            ]
          }
        ]
      },
      {
        "name": "ไม้แก่น",
        "subdistricts": [
          {
            "name": "ไทรทอง",
            "zipcodes": [
              "94220"
            ]
          },
          {
            "name": "ไม้แก่น",
            "zipcodes": [
              "94220"
            ]
          },
          {
            "name": "ตะโละไกรทอง",
            "zipcodes": [
              "94220"
            ]
          },
          {
            "name": "ดอนทราย",
            "zipcodes": [
              "94220"
            ]
          }
        ]
      },
      {
        "name": "ยะหริ่ง",
        "subdistricts": [
          {
            "name": "ตะโละ",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ตะโละกาโปร์",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ตันหยงดาลอ",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ตันหยงจึงงา",
            "zipcodes": [
              "94190"
            ]
          },
          {
            "name": "ตอหลัง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ตาแกะ",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ตาลีอายร์",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ยามู",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "บางปู",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "หนองแรต",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ปิยามุมัง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ปุลากง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "บาโลย",
            "zipcodes": [
              "94190"
            ]
          },
          {
            "name": "สาบัน",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "มะนังยง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "ราตาปันยัง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "จะรัง",
            "zipcodes": [
              "94150"
            ]
          },
          {
            "name": "แหลมโพธิ์",
            "zipcodes": [
              "94150"
            ]
          }
        ]
      },
      {
        "name": "ยะรัง",
        "subdistricts": [
          {
            "name": "ยะรัง",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "สะดาวา",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "ประจัน",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "สะนอ",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "ระแว้ง",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "ปิตูมุดี",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "วัด",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "กระโด",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "คลองใหม่",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "เมาะมาวี",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "กอลำ",
            "zipcodes": [
              "94160"
            ]
          },
          {
            "name": "เขาตูม",
            "zipcodes": [
              "94160"
            ]
          }
        ]
      },
      {
        "name": "กะพ้อ",
        "subdistricts": [
          {
            "name": "กะรุบี",
            "zipcodes": [
              "94230"
            ]
          },
          {
            "name": "ตะโละดือรามัน",
            "zipcodes": [
              "94230"
            ]
          },
          {
            "name": "ปล่องหอย",
            "zipcodes": [
              "94230"
            ]
          }
        ]
      },
      {
        "name": "แม่ลาน",
        "subdistricts": [
          {
            "name": "แม่ลาน",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ม่วงเตี้ย",
            "zipcodes": [
              "94180"
            ]
          },
          {
            "name": "ป่าไร่",
            "zipcodes": [
              "94180"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ยะลา",
    "districts": [
      {
        "name": "เมืองยะลา",
        "subdistricts": [
          {
            "name": "สะเตง",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "บุดี",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ยุโป",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ลิดล",
            "zipcodes": [
              "95160"
            ]
          },
          {
            "name": "ยะลา",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ท่าสาป",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ลำใหม่",
            "zipcodes": [
              "95160"
            ]
          },
          {
            "name": "หน้าถ้ำ",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ลำพะยา",
            "zipcodes": [
              "95160"
            ]
          },
          {
            "name": "เปาะเส้ง",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "พร่อน",
            "zipcodes": [
              "95160"
            ]
          },
          {
            "name": "บันนังสาเรง",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "สะเตงนอก",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ตาเซะ",
            "zipcodes": [
              "95000"
            ]
          }
        ]
      },
      {
        "name": "เบตง",
        "subdistricts": [
          {
            "name": "เบตง",
            "zipcodes": [
              "95110"
            ]
          },
          {
            "name": "ยะรม",
            "zipcodes": [
              "95110"
            ]
          },
          {
            "name": "ตาเนาะแมเราะ",
            "zipcodes": [
              "95110"
            ]
          },
          {
            "name": "อัยเยอร์เวง",
            "zipcodes": [
              "95110"
            ]
          },
          {
            "name": "ธารน้ำทิพย์",
            "zipcodes": [
              "95110"
            ]
          }
        ]
      },
      {
        "name": "บันนังสตา",
        "subdistricts": [
          {
            "name": "บันนังสตา",
            "zipcodes": [
              "95130"
            ]
          },
          {
            "name": "บาเจาะ",
            "zipcodes": [
              "95130"
            ]
          },
          {
            "name": "ตาเนาะปูเต๊ะ",
            "zipcodes": [
              "95130"
            ]
          },
          {
            "name": "ถ้ำทะลุ",
            "zipcodes": [
              "95130"
            ]
          },
          {
            "name": "ตลิ่งชัน",
            "zipcodes": [
              "95130"
            ]
          },
          {
            "name": "เขื่อนบางลาง",
            "zipcodes": [
              "95130"
            ]
          }
        ]
      },
      {
        "name": "ธารโต",
        "subdistricts": [
          {
            "name": "ธารโต",
            "zipcodes": [
              "95150"
            ]
          },
          {
            "name": "บ้านแหร",
            "zipcodes": [
              "95150"
            ]
          },
          {
            "name": "แม่หวาด",
            "zipcodes": [
              "95170"
            ]
          },
          {
            "name": "คีรีเขต",
            "zipcodes": [
              "95150"
            ]
          }
        ]
      },
      {
        "name": "ยะหา",
        "subdistricts": [
          {
            "name": "ยะหา",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "ละแอ",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "ปะแต",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "บาโร๊ะ",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "ตาชี",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "บาโงยซิแน",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "กาตอง",
            "zipcodes": [
              "95120"
            ]
          }
        ]
      },
      {
        "name": "รามัน",
        "subdistricts": [
          {
            "name": "กายูบอเกาะ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "กาลูปัง",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "กาลอ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "กอตอตือร๊ะ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "โกตาบารู",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "เกะรอ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "จะกว๊ะ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "ท่าธง",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "เนินงาม",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "บาลอ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "บาโงย",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "บือมัง",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "ยะต๊ะ",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "วังพญา",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "อาซ่อง",
            "zipcodes": [
              "95140"
            ]
          },
          {
            "name": "ตะโล๊ะหะลอ",
            "zipcodes": [
              "95140"
            ]
          }
        ]
      },
      {
        "name": "กาบัง",
        "subdistricts": [
          {
            "name": "กาบัง",
            "zipcodes": [
              "95120"
            ]
          },
          {
            "name": "บาละ",
            "zipcodes": [
              "95120"
            ]
          }
        ]
      },
      {
        "name": "กรงปินัง",
        "subdistricts": [
          {
            "name": "กรงปินัง",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "สะเอะ",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ห้วยกระทิง",
            "zipcodes": [
              "95000"
            ]
          },
          {
            "name": "ปุโรง",
            "zipcodes": [
              "95000"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "นราธิวาส",
    "districts": [
      {
        "name": "เมืองนราธิวาส",
        "subdistricts": [
          {
            "name": "บางนาค",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "ลำภู",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "มะนังตายอ",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "บางปอ",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "กะลุวอ",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "กะลุวอเหนือ",
            "zipcodes": [
              "96000"
            ]
          },
          {
            "name": "โคกเคียน",
            "zipcodes": [
              "96000"
            ]
          }
        ]
      },
      {
        "name": "ตากใบ",
        "subdistricts": [
          {
            "name": "เจ๊ะเห",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "ไพรวัน",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "พร่อน",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "ศาลาใหม่",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "บางขุนทอง",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "เกาะสะท้อน",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "นานาค",
            "zipcodes": [
              "96110"
            ]
          },
          {
            "name": "โฆษิต",
            "zipcodes": [
              "96110"
            ]
          }
        ]
      },
      {
        "name": "บาเจาะ",
        "subdistricts": [
          {
            "name": "บาเจาะ",
            "zipcodes": [
              "96170"
            ]
          },
          {
            "name": "ลุโบะสาวอ",
            "zipcodes": [
              "96170"
            ]
          },
          {
            "name": "กาเยาะมาตี",
            "zipcodes": [
              "96170"
            ]
          },
          {
            "name": "ปะลุกาสาเมาะ",
            "zipcodes": [
              "96170"
            ]
          },
          {
            "name": "บาเระเหนือ",
            "zipcodes": [
              "96170"
            ]
          },
          {
            "name": "บาเระใต้",
            "zipcodes": [
              "96170"
            ]
          }
        ]
      },
      {
        "name": "ยี่งอ",
        "subdistricts": [
          {
            "name": "ยี่งอ",
            "zipcodes": [
              "96180"
            ]
          },
          {
            "name": "ละหาร",
            "zipcodes": [
              "96180"
            ]
          },
          {
            "name": "จอเบาะ",
            "zipcodes": [
              "96180"
            ]
          },
          {
            "name": "ลุโบะบายะ",
            "zipcodes": [
              "96180"
            ]
          },
          {
            "name": "ลุโบะบือซา",
            "zipcodes": [
              "96180"
            ]
          },
          {
            "name": "ตะปอเยาะ",
            "zipcodes": [
              "96180"
            ]
          }
        ]
      },
      {
        "name": "ระแงะ",
        "subdistricts": [
          {
            "name": "ตันหยงมัส",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "ตันหยงลิมอ",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "บองอ",
            "zipcodes": [
              "96220"
            ]
          },
          {
            "name": "กาลิซา",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "บาโงสะโต",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "เฉลิม",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "มะรือโบตก",
            "zipcodes": [
              "96130"
            ]
          }
        ]
      },
      {
        "name": "รือเสาะ",
        "subdistricts": [
          {
            "name": "รือเสาะ",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "สาวอ",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "เรียง",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "สามัคคี",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "บาตง",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "ลาโละ",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "รือเสาะออก",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "โคกสะตอ",
            "zipcodes": [
              "96150"
            ]
          },
          {
            "name": "สุวารี",
            "zipcodes": [
              "96150"
            ]
          }
        ]
      },
      {
        "name": "ศรีสาคร",
        "subdistricts": [
          {
            "name": "ซากอ",
            "zipcodes": [
              "96210"
            ]
          },
          {
            "name": "ตะมะยูง",
            "zipcodes": [
              "96210"
            ]
          },
          {
            "name": "ศรีสาคร",
            "zipcodes": [
              "96210"
            ]
          },
          {
            "name": "เชิงคีรี",
            "zipcodes": [
              "96210"
            ]
          },
          {
            "name": "กาหลง",
            "zipcodes": [
              "96210"
            ]
          },
          {
            "name": "ศรีบรรพต",
            "zipcodes": [
              "96210"
            ]
          }
        ]
      },
      {
        "name": "แว้ง",
        "subdistricts": [
          {
            "name": "แว้ง",
            "zipcodes": [
              "96160"
            ]
          },
          {
            "name": "กายูคละ",
            "zipcodes": [
              "96160"
            ]
          },
          {
            "name": "ฆอเลาะ",
            "zipcodes": [
              "96160"
            ]
          },
          {
            "name": "โละจูด",
            "zipcodes": [
              "96160"
            ]
          },
          {
            "name": "แม่ดง",
            "zipcodes": [
              "96160"
            ]
          },
          {
            "name": "เอราวัณ",
            "zipcodes": [
              "96160"
            ]
          }
        ]
      },
      {
        "name": "สุคิริน",
        "subdistricts": [
          {
            "name": "มาโมง",
            "zipcodes": [
              "96190"
            ]
          },
          {
            "name": "สุคิริน",
            "zipcodes": [
              "96190"
            ]
          },
          {
            "name": "เกียร์",
            "zipcodes": [
              "96190"
            ]
          },
          {
            "name": "ภูเขาทอง",
            "zipcodes": [
              "96190"
            ]
          },
          {
            "name": "ร่มไทร",
            "zipcodes": [
              "96190"
            ]
          }
        ]
      },
      {
        "name": "สุไหงโก-ลก",
        "subdistricts": [
          {
            "name": "สุไหงโก-ลก",
            "zipcodes": [
              "96120"
            ]
          },
          {
            "name": "ปาเสมัส",
            "zipcodes": [
              "96120"
            ]
          },
          {
            "name": "มูโนะ",
            "zipcodes": [
              "96120"
            ]
          },
          {
            "name": "ปูโยะ",
            "zipcodes": [
              "96120"
            ]
          }
        ]
      },
      {
        "name": "สุไหงปาดี",
        "subdistricts": [
          {
            "name": "ปะลุรู",
            "zipcodes": [
              "96140"
            ]
          },
          {
            "name": "สุไหงปาดี",
            "zipcodes": [
              "96140"
            ]
          },
          {
            "name": "โต๊ะเด็ง",
            "zipcodes": [
              "96140"
            ]
          },
          {
            "name": "สากอ",
            "zipcodes": [
              "96140"
            ]
          },
          {
            "name": "ริโก๋",
            "zipcodes": [
              "96140"
            ]
          },
          {
            "name": "กาวะ",
            "zipcodes": [
              "96140"
            ]
          }
        ]
      },
      {
        "name": "จะแนะ",
        "subdistricts": [
          {
            "name": "จะแนะ",
            "zipcodes": [
              "96220"
            ]
          },
          {
            "name": "ดุซงญอ",
            "zipcodes": [
              "96220"
            ]
          },
          {
            "name": "ผดุงมาตร",
            "zipcodes": [
              "96220"
            ]
          },
          {
            "name": "ช้างเผือก",
            "zipcodes": [
              "96220"
            ]
          }
        ]
      },
      {
        "name": "เจาะไอร้อง",
        "subdistricts": [
          {
            "name": "จวบ",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "บูกิต",
            "zipcodes": [
              "96130"
            ]
          },
          {
            "name": "มะรือโบออก",
            "zipcodes": [
              "96130"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "บึงกาฬ",
    "districts": [
      {
        "name": "เมืองบึงกาฬ",
        "subdistricts": [
          {
            "name": "คำนาดี",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "บึงโขงหลง",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "ไคสี",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "ชัยพร",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "นาสวรรค์",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "โนนสมบูรณ์",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "บึงกาฬ",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "โป่งเปื่อย",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "วิศิษฐ์",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "หนองเข็ง",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "หนองเลิง",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "หอคำ",
            "zipcodes": [
              "38000"
            ]
          }
        ]
      },
      {
        "name": "เซกา",
        "subdistricts": [
          {
            "name": "ซาง",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "เซกา",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "ท่ากกแดง",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "ท่าสะอาด",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "น้ำจั้น",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "บ้านต้อง",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "ป่งไฮ",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "โสกก่าม",
            "zipcodes": [
              "38150"
            ]
          },
          {
            "name": "หนองทุ่ม",
            "zipcodes": [
              "38150"
            ]
          }
        ]
      },
      {
        "name": "โซ่พิสัย",
        "subdistricts": [
          {
            "name": "คำแก้ว",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "โซ่",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "ถ้ำเจริญ",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "บัวตูม",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "ศรีชมภู",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "หนองพันทา",
            "zipcodes": [
              "38170"
            ]
          },
          {
            "name": "เหล่าทอง",
            "zipcodes": [
              "38170"
            ]
          }
        ]
      },
      {
        "name": "พรเจริญ",
        "subdistricts": [
          {
            "name": "ดอนหญ้านาง",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "ป่าแฝก",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "พรเจริญ",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "วังชมภู",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "ศรีชมภู",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "ศรีสำราญ",
            "zipcodes": [
              "38180"
            ]
          },
          {
            "name": "หนองหัวช้าง",
            "zipcodes": [
              "38180"
            ]
          }
        ]
      },
      {
        "name": "ศรีวิไล",
        "subdistricts": [
          {
            "name": "ชุมภูพร",
            "zipcodes": [
              "38210"
            ]
          },
          {
            "name": "นาสะแบง",
            "zipcodes": [
              "38210"
            ]
          },
          {
            "name": "นาสิงห์",
            "zipcodes": [
              "38210"
            ]
          },
          {
            "name": "นาแสง",
            "zipcodes": [
              "38210"
            ]
          },
          {
            "name": "ศรีวิไล",
            "zipcodes": [
              "38210"
            ]
          }
        ]
      },
      {
        "name": "บึงโขงหลง",
        "subdistricts": [
          {
            "name": "ดงบัง",
            "zipcodes": [
              "38220"
            ]
          },
          {
            "name": "ท่าดอกคำ",
            "zipcodes": [
              "38220"
            ]
          },
          {
            "name": "บึงโขงหลง",
            "zipcodes": [
              "38220"
            ]
          },
          {
            "name": "โพธิ์หมากแข้ง",
            "zipcodes": [
              "38220"
            ]
          }
        ]
      },
      {
        "name": "ปากคาด",
        "subdistricts": [
          {
            "name": "นากั้ง",
            "zipcodes": [
              "38190"
            ]
          },
          {
            "name": "นาดง",
            "zipcodes": [
              "38190"
            ]
          },
          {
            "name": "โนนศิลา",
            "zipcodes": [
              "38190"
            ]
          },
          {
            "name": "ปากคาด",
            "zipcodes": [
              "38190"
            ]
          },
          {
            "name": "ศรีวิไล",
            "zipcodes": [
              "38190"
            ]
          },
          {
            "name": "หนองยอง",
            "zipcodes": [
              "38190"
            ]
          }
        ]
      },
      {
        "name": "บุ่งคล้า",
        "subdistricts": [
          {
            "name": "โคกกว้าง",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "บุ่งคล้า",
            "zipcodes": [
              "38000"
            ]
          },
          {
            "name": "หนองเดิน",
            "zipcodes": [
              "38000"
            ]
          }
        ]
      }
    ]
  }
];

export const isBangkok = (province?: string) => province === "กรุงเทพมหานคร";
