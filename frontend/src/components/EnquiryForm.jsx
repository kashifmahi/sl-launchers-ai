import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SERVICES, CONTACT } from "../data/content";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const initial = { name: "", company: "", email: "", phone: "", service: "", message: "" };

export default function EnquiryForm({ defaultService = "" }) {
  const [form, setForm] = useState({ ...initial, service: defaultService });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: null });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = "Please tell us a little about your project (at least 10 characters).";
    return errs;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Inquiry sent. We'll get back to you within one business day.");
      setForm({ ...initial, service: defaultService });
      setErrors({});
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Something went wrong sending your inquiry. Please try again, or email us directly at " + CONTACT.email + ".");
    } finally {
      setSending(false);
    }
  };

  const inputCls = (field) =>
    `bg-white border ${errors[field] ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-500"} h-12 text-[#0B1739] placeholder:text-slate-400`;

  return (
    <form onSubmit={submit} className="space-y-5" data-testid="enquiry-form" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enquiry-name" className="block text-sm font-medium text-[#0B1739] mb-1.5">Name *</label>
          <Input
            id="enquiry-name"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            className={inputCls("name")}
            aria-invalid={!!errors.name}
            data-testid="enquiry-name-input"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5" data-testid="enquiry-name-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-company" className="block text-sm font-medium text-[#0B1739] mb-1.5">Company</label>
          <Input
            id="enquiry-company"
            placeholder="Your company"
            value={form.company}
            onChange={set("company")}
            className={inputCls("company")}
            data-testid="enquiry-company-input"
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" className="block text-sm font-medium text-[#0B1739] mb-1.5">Email *</label>
          <Input
            id="enquiry-email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={set("email")}
            className={inputCls("email")}
            aria-invalid={!!errors.email}
            data-testid="enquiry-email-input"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5" data-testid="enquiry-email-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-phone" className="block text-sm font-medium text-[#0B1739] mb-1.5">Phone</label>
          <Input
            id="enquiry-phone"
            type="tel"
            placeholder="Your phone number"
            value={form.phone}
            onChange={set("phone")}
            className={inputCls("phone")}
            data-testid="enquiry-phone-input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="enquiry-service" className="block text-sm font-medium text-[#0B1739] mb-1.5">Service</label>
        <select
          id="enquiry-service"
          value={form.service}
          onChange={set("service")}
          className="w-full h-12 rounded-md bg-white border border-slate-200 px-3 text-sm text-[#0B1739] focus:border-blue-500 focus:outline-none"
          data-testid="enquiry-service-select"
        >
          <option value="">Which service are you interested in?</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-medium text-[#0B1739] mb-1.5">Project details *</label>
        <Textarea
          id="enquiry-message"
          placeholder="Tell us about your project, goals and timeline"
          value={form.message}
          onChange={set("message")}
          rows={5}
          className={inputCls("message")}
          aria-invalid={!!errors.message}
          data-testid="enquiry-message-input"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5" data-testid="enquiry-message-error">{errors.message}</p>}
      </div>
      <p className="text-xs text-slate-500 leading-relaxed">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-blue-600 underline underline-offset-2" data-testid="privacy-link">privacy policy</a>.
        We'll only use your details to respond to your inquiry.
      </p>
      <Button
        type="submit"
        disabled={sending}
        className="w-full h-12 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold"
        data-testid="enquiry-submit-button"
      >
        {sending ? "Sending..." : "Send Project Inquiry"}
      </Button>
    </form>
  );
}
