import { ContactForm } from "@/components/ContactForm";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Section } from "@/components/Section";
import { BadgeCheck, Cpu, Laptop, Layers, Wrench } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-tech min-h-screen">
      {/* Top glow */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div
          className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), rgba(168,85,247,0.14), rgba(236,72,153,0.10), transparent 70%)",
          }}
        />
      </div>

      <header className="relative mx-auto max-w-6xl px-6 pt-10 pb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="neon-border rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2">
              <span className="text-sm tracking-wide text-zinc-200">
                <Image className="color-white min-w-25 min-h-25" width={60} height={60} alt="Next.js Logo" src={"CustomCodedWhite.svg"} />
              </span>
            </div>
            <div>
              <span className="hidden sm:block text-xl font-bold text-zinc-400">
                Custom Coded
              </span>
              <span className="hidden sm:block text-lg font-bold text-zinc-400">
                Technology Solutions, LLC
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-sm">
            <a className="text-zinc-300 hover:text-white" href="#services">
              Services
            </a>
            <a className="text-zinc-300 hover:text-white" href="#projects">
              Projects
            </a>
            <a className="text-zinc-300 hover:text-white" href="#about">
              About
            </a>
            <a
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-zinc-100 hover:bg-white/10"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Modern computing power
              <span className="block text-zinc-200">
                for everyday people.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-zinc-300 leading-relaxed">
              From custom web applications and integrations to automation, consulting, and custom PC builds,
              we deliver clean, maintainable technology solutions for small businesses, creators, and ambitious individuals.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pill icon={<Layers className="h-4 w-4" />} text="Small business web apps" />
              <Pill icon={<Wrench className="h-4 w-4" />} text="Consulting & automation" />
              <Pill icon={<Cpu className="h-4 w-4" />} text="Custom PC builds" />
              <Pill icon={<BadgeCheck className="h-4 w-4" />} text="Straightforward, honest delivery" />
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#contact"
                className="neon-border rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Start an inquiry
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                See projects
              </a>
            </div>
          </div>

          <div className="neon-border rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">Core ethos</div>
              <Laptop className="h-4 w-4 text-zinc-400" />
            </div>

            <div className="mt-3 text-lg text-zinc-100">
              Bring the full power of modern computing to everyday creators, entrepreneurs, and builders,
              without the burden of unnecessary complexity.
            </div>

            <div className="mt-4 text-sm text-zinc-300 leading-relaxed">
              That means clarity over jargon, durable systems over quick fixes, and solutions designed around your real world constraints,
              including budget, timeline, and technical comfort.
            </div>

            <div className="mt-6 h-px w-full neon-divider opacity-80" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <MiniStat label="Focus" value="Practical + modern solutions" />
              <MiniStat label="Stack" value="Next.js / Node / Supabase / Stripe" />
              <MiniStat label="Strength" value="Systems design + implementation" />
              <MiniStat label="Extras" value="PC tuning + builds" />
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full neon-divider opacity-80" />
      </header>

      <Section
        id="services"
        title="Services"
        subtitle="Small business-friendly services with clean delivery, clear scope, and no fluff."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Software Solutions"
            desc="Web apps, internal tools, customer portals, dashboards, and lightweight ecommerce builds."
            bullets={["Next.js apps + APIs", "Auth, payments, email", "Data modeling + dashboards"]}
          />
          <ServiceCard
            title="Consulting"
            desc="Architecture, debugging, deployments, and practical automation across your stack."
            bullets={["MVP planning + scope", "Vercel / cloud deployments", "Integrations + workflow automation"]}
          />
          <ServiceCard
            title="PC Building"
            desc="Custom PCs designed for your exact workload — from audio production to gaming to creative pipelines."
            bullets={["Parts selection + build", "Thermals + noise optimization", "OS setup + performance tuning"]}
          />
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Our live work and active codebases."
      >
        <ProjectCarousel />
      </Section>

      <Section
        id="about"
        title="Staff"
        subtitle="A one-person operation that is direct, accountable, and hands-on."
      >
        <div className="neon-border rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xl font-semibold">Michael Middlebrooks</div>
              <div className="mt-1 text-sm text-zinc-400">
                Owner • Lead Systems Developer • PC Builder
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag text="Small business software" />
              <Tag text="Modern web systems" />
              <Tag text="Performance-focused PCs" />
            </div>
          </div>

          <div className="mt-5 text-zinc-300 leading-relaxed">
            I help people and small teams get leverage from technology. It's not just about "making
            a website”, but creating systems that actually reduce friction and open up
            capability. If you’re not sure what you need yet, that’s fine:
            describe the goal and the constraints, and I’ll shape a plan.
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Send a quick note, and we'll reply with next steps and a few clarifying questions."
      >
        <ContactForm />
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-8 text-sm text-zinc-500">
        <div className="h-px w-full neon-divider opacity-70 mb-6" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Custom Coded Technology Solutions, LLC</span>
          <span className="text-zinc-600">
            <Image className="color-white" width={100} height={100} alt="Next.js Logo" src={"next-white.svg"} />
            Built with Next.js
          </span>
        </div>
      </footer>
    </main>
  );
}

function Pill({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
      <span className="text-zinc-300">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-sm text-zinc-200">{value}</div>
    </div>
  );
}

function ServiceCard({ title, desc, bullets }) {
  return (
    <div className="neon-border rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>

      <div className="mt-4 h-px w-full neon-divider opacity-70" />

      <ul className="mt-4 space-y-2 text-sm text-zinc-200">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="text-zinc-300">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {text}
    </span>
  );
}
