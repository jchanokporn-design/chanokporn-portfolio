# Chanokporn Rinfong — Portfolio Website (New Version)

โปรเจกต์นี้เป็น **HTML + CSS + JS ธรรมดา** ไม่ใช้ React/Next.js/Tailwind ไม่มีความเสี่ยงเรื่องสี/ฟอนต์/ธีมชนกันแบบที่เจอใน v0

## สิ่งที่อัปเดตในเวอร์ชันนี้

- **Credentials**: เพิ่มเป็น 4 ใบ (จากเดิม 3 ใบ) — เพิ่มใบ "Speaker Certificate — AI Power Leader" ใหม่ และเปลี่ยนอีก 3 ใบเป็นสแกนคุณภาพสูงกว่าเดิม
- **Case Study: Chickens Station** — เพิ่มภาพทีมงานตอน setup ร้านใหม่และงาน event
- **Case Study: Software & Digital Transformation** — เพิ่มภาพทีมงานตอนทำกิจกรรมกับลูกค้าที่ Tokyu Department Store

## วิธีดูตัวอย่างในคอมพิวเตอร์ก่อน deploy

เปิดไฟล์ `index.html` ในโฟลเดอร์นี้โดยดับเบิลคลิก — เปิดดูได้ทันทีในเบราว์เซอร์ ไม่ต้องเชื่อมเน็ต

## วิธี Deploy — แนะนำ 2 ทางเลือก

### ทางเลือก A: เร็วที่สุด ไม่มี Git (เหมาะถ้าไม่ต้องการเก็บเวอร์ชัน)

1. เข้า vercel.com → login
2. "Add New..." → "Project"
3. มองหา "Deploy without Git" หรือกล่องลาก-วางไฟล์
4. **ลากทั้งโฟลเดอร์นี้** ไปวาง
5. กด Deploy รอ 20-30 วินาที ได้ลิงก์ทันที

### ทางเลือก B: มี Git เก็บเวอร์ชัน (ใช้ GitHub ธรรมดา — ไม่ใช้ v0)

1. เข้า github.com → "New" → สร้าง repository ใหม่ **ไม่เลือก template ใดๆ** (ปล่อยว่างเปล่า)
2. ในหน้า repo ว่างเปล่า หาลิงก์ "uploading an existing file" (หรือกด "Add file" → "Upload files" ถ้าเจอปุ่มนั้นแทน)
3. เปิดโฟลเดอร์นี้ในเครื่อง → กด `Ctrl+A` เลือกไฟล์/โฟลเดอร์ **ข้างใน** ทั้งหมด (index.html, style.css, script.js, images, files, README.md) — **ห้ามลากตัวโฟลเดอร์แม่เข้าไป**
4. ลากไปวาง → Commit changes
5. เช็คว่า `index.html` ต้องอยู่แถวบนสุดของหน้า repo (ไม่ซ้อนอยู่ในโฟลเดอร์ย่อย)
6. เข้า vercel.com → "Add New..." → "Project" → "Import Git Repository" → เลือก repo นี้ → Deploy

ทุกครั้งที่แก้ไขต่อไป: แก้ไฟล์บน GitHub ตรงๆ (กดดินสอ → แก้ → Commit) → Vercel deploy ให้อัตโนมัติ **ไม่ต้องใช้ v0 เลย ไม่มีค่าใช้จ่ายด้าน token**

## โครงสร้างไฟล์

```
index.html          → หน้าเว็บหลัก
style.css            → ดีไซน์ทั้งหมด
script.js             → เอฟเฟกต์ scroll และเมนูมือถือ
files/
  CV_Chanokporn_Rinfong.pdf/.docx
images/
  profile/    → รูปโปรไฟล์
  pictures/   → รูปเคสสตัดี้ (8 ภาพ)
  certs/      → certificate (4 ภาพ)
```

## หมายเหตุ

- หน้านี้ตั้งค่า `noindex` ไว้แล้ว (ไม่ขึ้นในผลค้นหา Google) เหมาะสำหรับส่งลิงก์ตรงให้ HR
- ถ้าอยากแก้เนื้อหาเอง เปิด `index.html` ด้วย text editor ธรรมดา ค้นหาข้อความที่ต้องการแก้แล้วพิมพ์ทับได้เลย ไม่กระทบดีไซน์
