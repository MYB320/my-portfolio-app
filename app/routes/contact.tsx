import type { Route } from "./+types/contact";
import { Form, useActionData, useNavigation } from "react-router";
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
import { db } from "~/db";
import { contacts } from "~/db/schema";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Contact" },
    { name: "description", content: "Welcome to Mohamed Yasser's Portfolio" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validate input
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "All fields are required",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Invalid email address",
    };
  }

  try {
    // Insert into database
    await db.insert(contacts).values({
      name,
      email,
      subject,
      message,
    });

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}

export default function Contact({}: Route.ComponentProps) {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Show toast based on action result
  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        toast.success(actionData.message, {
          duration: 5000,
        });
      } else {
        toast.error(actionData.error, {
          duration: 5000,
        });
      }
    }
  }, [actionData]);

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
        <Form method="post" className="md:col-span-2 order-2 md:order-1">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Your name"
                disabled={isSubmitting}
                required
              />
              <FieldDescription>This appears on the email.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input
                id="subject"
                name="subject"
                autoComplete="off"
                placeholder="What's this about?"
                disabled={isSubmitting}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                disabled={isSubmitting}
                required
              />
            </Field>
            <Button
              type="submit"
              className="w-full group transition-all duration-300 hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <SendIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </FieldGroup>
        </Form>
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
            content="Cheikh Mohamed Ave. Collo, Skikda, Algeria"
            isAction
          />
        </div>
      </div>
    </section>
  );
}
