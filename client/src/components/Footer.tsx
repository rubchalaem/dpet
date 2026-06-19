const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="space-y-3">
          <h3 className="text-xl font-extrabold tracking-wide">Srbr.com</h3>
          <p className="max-w-sm text-sm leading-relaxed opacity-70">
            แพลตฟอร์มดิจิทัลสำหรับค้นหาและจองแพ็กเกจท่องเที่ยวจังหวัดสระบุรี
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href="/contact#faq" className="opacity-70 transition-opacity hover:opacity-100 hover:underline">
            คำถามที่พบบ่อย
          </a>
          <a href="/contact#contact" className="opacity-70 transition-opacity hover:opacity-100 hover:underline">
            ติดต่อเรา
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
