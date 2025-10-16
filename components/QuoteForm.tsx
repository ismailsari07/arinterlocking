"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

export default function QuoteForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      fullname: fd.get("fullname"),
      email: fd.get("email"),
      phoneNumber: fd.get("phoneNumber"),
      date: fd.get("date"),
      note: fd.get("note")
    };

    try {
      // Replace with your actual EmailJS service, template, and public key
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
      emailjs.init({ publicKey });
      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
        name: payload.fullname,
        email: payload.email,
        phone: payload.phoneNumber,
        date: payload.date,
        note: payload.note
      });
      setStatus({ ok: true, msg: "Email sent successfully!" });
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong." });
    } 
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Full Name */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="full-name">Full Name</Label>
        <Input
          type="text"
          name="fullname"
          id="full-name"
          placeholder="Full Name"
        />
      </div>

      {/* Email Address */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </div>

      {/* Phone Number */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="phone-number">Phone Number</Label>
        <Input
          type="tel"
          name="phoneNumber"
          id="phone-number"
          placeholder="Phone Number"
        />
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Date */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="date">Date</Label>
          <Input type="date" name="date" id="date" />
        </div>
      </div>

      {/* Note */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="note">Note</Label>
        <Textarea name="note" id="note" placeholder="Type your note" />
      </div>

      {status && (
        <p className={status.ok ? "text-green-600" : "text-red-600"}>
          {status.msg}
        </p>
      )}

      <Button type="submit" variant="default" size="lg" className="mt-6">
        Get My Free Quote
      </Button>
    </form>
  );
}
