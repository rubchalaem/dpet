import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import {
  Phone,
  Mail,
  Facebook,
  MessageSquare,
  Twitter,
  Music2,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "กรุณากรอกชื่อ" }),
  lastName: z.string().min(2, { message: "กรุณากรอกนามสกุล" }),
  email: z
    .string()
    .min(1, { message: "กรุณากรอกอีเมล" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "อีเมลไม่ถูกต้อง เช่น name@example.com",
    }),
  subject: z.string().min(5, { message: "กรุณากรอกหัวข้อ" }),
  phone: z
    .string()
    .min(1, { message: "กรุณากรอกเบอร์โทร" })
    .regex(/^\d{10}$/, { message: "เบอร์โทรต้องเป็นตัวเลข 10 หลัก" }),
  category: z.string({ required_error: "กรุณาเลือกเรื่องที่ต้องการติดต่อ" }),
  details: z
    .string()
    .min(10, { message: "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร" }),
});

const Contact = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      phone: "",
      category: "",
      details: "",
    },
  });

  const handleCheckAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      const isConfirm = window.confirm(
        "กรุณาเข้าสู่ระบบก่อนใช้งานฟอร์มติดต่อ\nคุณต้องการไปหน้าเข้าสู่ระบบเพื่อดำเนินการต่อหรือไม่?",
      );
      if (isConfirm) {
        navigate("/login");
      }
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const token = localStorage.getItem("token");
    if (!token) {
      const isConfirm = window.confirm(
        "กรุณาเข้าสู่ระบบก่อนส่งข้อมูล\nคุณต้องการไปหน้าเข้าสู่ระบบเพื่อดำเนินการต่อหรือไม่?",
      );
      if (isConfirm) {
        navigate("/login");
      }
      return;
    }
    console.log(values);
    alert("ส่งข้อมูลสำเร็จ!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-#EFE6D2">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <div className="container mx-auto max-w-4xl px-4 py-12 text-left">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">
            แบบฟอร์มติดต่อ
          </h1>
          <p className="text-muted-foreground text-sm">
            หากมีข้อสงสัย กรุณาเลือกหัวข้อคำถามและกรอกข้อมูลของคุณ
            จากนั้นเจ้าหน้าที่จะติดต่อกลับเพื่อตอบทุกคำถามที่คุณอยากทราบ
          </p>
        </div>

        {/* Contact Form Section */}
        <div
          id="contact"
          className="container mx-auto max-w-4xl scroll-mt-24 px-4 pb-16"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onClickCapture={handleCheckAuth}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Section Header */}
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-lg font-bold text-foreground">
                    ลูกค้า *
                  </h2>
                </div>

                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="ชื่อ *"
                          {...field}
                          className="bg-white border border-input h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="นามสกุล *"
                          {...field}
                          className="bg-white border border-input h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="อีเมล *"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          {...field}
                          className="bg-white border border-input h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subject Topic Section Header */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <h2 className="text-lg font-bold text-foreground">
                    เรื่องที่ต้องการติดต่อ*
                  </h2>
                </div>

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="เรื่องที่ต้องการติดต่อ*"
                          {...field}
                          className="bg-white border border-input h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="เบอร์โทรศัพท์ติดต่อกลับ *"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          {...field}
                          onChange={(e) => {
                            const val = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                            field.onChange(val);
                          }}
                          className="bg-white border border-input h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Category Dropdown */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white border border-input h-12 text-muted-foreground">
                            <SelectValue placeholder="เลือกเรื่องที่ต้องการติดต่อ*" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">สอบถามทั่วไป</SelectItem>
                          <SelectItem value="booking">ปัญหาการจอง</SelectItem>
                          <SelectItem value="payment">การชำระเงิน</SelectItem>
                          <SelectItem value="suggest">ข้อเสนอแนะ</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Details */}
                <div className="col-span-1 md:col-span-2">
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="รายละเอียดที่ต้องการติดต่อ"
                            className="bg-white border border-input min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  className="bg-black hover:bg-black/90 text-white rounded-full px-12 py-6 text-lg font-bold"
                >
                  ส่งข้อมูล
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Contact Info Section */}
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            สอบถามหรือแจ้งปัญหา
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-accent text-white rounded-2xl p-6 flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Phone className="h-8 w-8" />
              </div>
              <span className="text-xl font-bold">02-698-2559-41</span>
            </div>

            <div className="bg-green-accent text-white rounded-2xl p-6 flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="h-8 w-8" />
              </div>
              <span className="text-xl font-bold">Srbr.Travel@gmail.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-green-accent text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Social Media</h3>
            <div className="flex justify-center gap-8">
              <div className="bg-black/20 hover:bg-black/30 p-4 rounded-full transition-colors cursor-pointer">
                <Facebook className="h-10 w-10 fill-white" />
              </div>
              <div className="bg-black/20 hover:bg-black/30 p-4 rounded-full transition-colors cursor-pointer flex items-center justify-center font-bold text-2xl">
                LINE
              </div>
              <div className="bg-black/20 hover:bg-black/30 p-4 rounded-full transition-colors cursor-pointer">
                <Twitter className="h-10 w-10 fill-white" />
              </div>
              <div className="bg-black/20 hover:bg-black/30 p-4 rounded-full transition-colors cursor-pointer">
                <Music2 className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          id="faq"
          className="container mx-auto max-w-4xl scroll-mt-24 px-4 py-16"
        >
          <h2 className="text-2xl font-bold mb-8">คำถามที่พบบ่อย</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "ต้องสมัครสมาชิกก่อนจองคอร์สหรือไม่?",
              "สามารถชำระเงินด้วยวิธีใดบ้าง?",
              "แพลตฟอร์มนี้มีค่าใช้จ่ายในการใช้งานหรือไม่?",
              "ยกเลิกการจองได้หรือไม่?",
              "ผู้ไม่ใช่ชาวพุทธสามารถเข้าร่วมกิจกรรมได้หรือไม่?",
            ].map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-2xl bg-[#EBE3D5] overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline font-bold text-lg text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground">
                  รายละเอียดคำตอบสำหรับคำถามนี้จะถูกแสดงที่นี่...
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
