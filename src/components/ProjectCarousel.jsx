"use client";

const PROJECTS = [
    {
        title: "Prachi Henna Art",
        desc: "Production ecommerce platform for a live creative design and fashion brand. Built for performance, maintainability, and real customer transactions.",
        href: "https://prachihennaart.com",
        preview:
            "Next.js storefront, payments integration, product management, deployment-ready architecture.",
        tag: "Live Production",
        badge: "Live",
    },
    {
        title: "EvoSim",
        desc: "Agent-based evolutionary simulation framework modeling adaptive systems, environmental pressures, and metric-driven experimentation.",
        href: "https://github.com/mmbrooks114/EvoSim",
        preview:
            "Modular simulation phases, disease/parasite systems, metrics logging, and structured experiment pipelines.",
        tag: "Open Source",
        badge: "Code",
    },
    {
        title: "Regina Field Toolkit",
        desc: "Feature engineering and structural analysis toolkit for motif-based prime signal research and projection modeling.",
        href: "https://github.com/mmbrooks114/Regina-Field-Toolkit",
        preview:
            "Motif extraction, harmonic scoring, structured CSV pipelines, reproducible projection workflows.",
        tag: "Open Source",
        badge: "Code",
    },
];

export function ProjectCarousel() {
    return (
        <div className="relative">
            <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-zinc-500">Live work and active codebases.</div>
                {PROJECTS.length > 3 && <div className="hidden sm:block text-xs text-zinc-600">Scroll →</div>}
            </div>

            <div className="mt-4 overflow-x-auto pb-3">
                <div className="flex gap-4 snap-x snap-mandatory">
                    {PROJECTS.map((p) => (
                        <a
                            key={p.title}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neon-border snap-start min-w-[280px] max-w-[280px] rounded-2xl border border-white/10 bg-zinc-950/50 p-5 hover:bg-white/5 transition"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-xs text-zinc-500">{p.tag}</div>
                                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
                                    {p.badge}
                                </span>
                            </div>

                            <div className="mt-2 text-lg font-semibold text-zinc-100">{p.title}</div>

                            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{p.desc}</p>

                            <div className="mt-4 h-px w-full neon-divider opacity-70" />

                            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{p.preview}</p>

                            <div className="mt-4 text-xs text-zinc-500">Opens in new tab</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}