"use client";

import { useState } from "react";
import { DropdownMenu } from "radix-ui";
import { Check, ChevronDown, Copy, Mail } from "lucide-react";
import { EMAIL, mailtoFor } from "@/lib/content";

// "Enviar un correo": un mailto solo funciona si el visitante tiene una app de correo configurada,
// así que se ofrecen también Gmail y Outlook en el navegador y copiar la dirección.
export default function EmailMenu({
  className,
  subject,
  body,
  t,
}: {
  className: string;
  subject: string;
  body: string;
  t: { email: string; gmail: string; outlook: string; app: string; copy: string; copied: string };
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const q = (k: string, v: string) => `${k}=${encodeURIComponent(v)}`;
  const options = [
    { label: t.gmail, href: `https://mail.google.com/mail/?view=cm&fs=1&${q("to", EMAIL)}&${q("su", subject)}&${q("body", body)}` },
    { label: t.outlook, href: `https://outlook.office.com/mail/deeplink/compose?${q("to", EMAIL)}&${q("subject", subject)}&${q("body", body)}` },
    { label: t.app, href: mailtoFor(subject, body) },
  ];
  const item =
    "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-3 text-base font-medium text-foreground outline-none data-[highlighted]:bg-secondary";

  return (
    <DropdownMenu.Root open={open} onOpenChange={(o) => { setOpen(o); if (o) setCopied(false); }}>
      <DropdownMenu.Trigger className={className}>
        <Mail className="size-5" aria-hidden /> {t.email}
        <ChevronDown className="size-4 transition-transform duration-150 [[data-state=open]>&]:rotate-180" aria-hidden />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          className="email-menu z-50 min-w-60 rounded-xl border border-border bg-card p-1.5 shadow-xl"
        >
          {options.map((o) => (
            <DropdownMenu.Item key={o.label} asChild>
              <a href={o.href} target={o.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener" className={item}>
                {o.label}
              </a>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item
            className={item}
            onSelect={(e) => {
              e.preventDefault();
              navigator.clipboard?.writeText(EMAIL).then(() => {
                setCopied(true);
                setTimeout(() => setOpen(false), 1200);
              });
            }}
          >
            {copied ? <Check className="size-4 text-[#16a34a]" aria-hidden /> : <Copy className="size-4" aria-hidden />}
            <span aria-live="polite">{copied ? t.copied : t.copy}</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
