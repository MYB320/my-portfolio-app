import type { Route } from "./+types/contact";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { ContactInfoItem } from "~/components/ContactInfoItem";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { SendIcon } from "lucide-react";
import { toast } from "sonner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Contact" },
    { name: "description", content: "Welcome to Mohamed Yasser's Portfolio" },
  ];
}

export default function Contact({}: Route.ComponentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show success toast with form data
    toast.success("Message Sent Successfully!", {
      duration: 5000,
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="py-8 md:pb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Get In Touch</h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from
          you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 order-2 md:order-1"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                id="name"
                autoComplete="off"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FieldDescription>This appears on the email.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                autoComplete="off"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input
                id="subject"
                autoComplete="off"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Field>
            <Button
              type="submit"
              className="w-full group transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
              <SendIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </FieldGroup>
        </form>
        <div className="space-y-6 order-1 md:order-2">
          <h3 className="text-sm md:text-base font-semibold mb-4 md:mb-6">
            Or reach out through phone or email
          </h3>
          <ContactInfoItem
            type="phone"
            title="Phone Number"
            content="+213 (0) 540 54 41 92"
            isAction
          />
          <ContactInfoItem
            type="email"
            title="Email Address"
            content="mybdev20@gmail.com"
            isAction
          />
          <ContactInfoItem
            type="adress"
            title="Location Address"
            content="Collo, Skikda, DZ"
          />
        </div>
      </div>
    </section>
  );
}
