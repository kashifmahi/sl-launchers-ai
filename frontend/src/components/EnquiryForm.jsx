import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SERVICES } from "../data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function EnquiryForm({ defaultService = "" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and project details.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Enquiry sent. We'll get back to you within one business day.");
      setForm({ name: "", company: "", email: "", phone: "", service: defaultService, message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail ? "Please check your details and try again." : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" data-testid="enquiry-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          placeholder="Your name *"
          value={form.name}
          onChange={set("name")}
          className="bg-zinc-900 border-white/10 focus:border-blue-500 h-12 text-white placeholder:text-zinc-500"
          data-testid="enquiry-name-input"
        />
        <Input
          placeholder="Company"
          value={form.company}
          onChange={set("company")}
          className="bg-zinc-900 border-white/10 focus:border-blue-500 h-12 text-white placeholder:text-zinc-500"
          data-testid="enquiry-company-input"
        />
        <Input
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={set("email")}
          className="bg-zinc-900 border-white/10 focus:border-blue-500 h-12 text-white placeholder:text-zinc-500"
          data-testid="enquiry-email-input"
        />
        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={set("phone")}
          className="bg-zinc-900 border-white/10 focus:border-blue-500 h-12 text-white placeholder:text-zinc-500"
          data-testid="enquiry-phone-input"
        />
      </div>
      <select
        value={form.service}
        onChange={set("service")}
        className="w-full h-12 rounded-md bg-zinc-900 border border-white/10 px-3 text-sm text-white focus:border-blue-500 focus:outline-none"
        data-testid="enquiry-service-select"
      >
        <option value="">Which service are you interested in?</option>
        {SERVICES.map((s) => (
          <option key={s.id} value={s.title}>{s.title}</option>
        ))}
        <option value="Other">Something else</option>
      </select>
      <Textarea
        placeholder="Tell us about your project *"
        value={form.message}
        onChange={set("message")}
        rows={5}
        className="bg-zinc-900 border-white/10 focus:border-blue-500 text-white placeholder:text-zinc-500"
        data-testid="enquiry-message-input"
      />
      <Button
        type="submit"
        disabled={sending}
        className="w-full h-12 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold"
        data-testid="enquiry-submit-button"
      >
        {sending ? "Sending..." : "Request Your Growth Strategy"}
      </Button>
    </form>
  );
}
