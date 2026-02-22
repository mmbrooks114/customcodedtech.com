export function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-6 py-12">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-2 max-w-2xl text-sm text-zinc-400 leading-relaxed">
                    {subtitle}
                </p>
            </div>

            <div className="h-px w-full neon-divider opacity-70 mb-6" />

            {children}
        </section>
    );
}
