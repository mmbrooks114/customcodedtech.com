"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "Software Solutions",
        message: "",
    });

    const canSend = useMemo(() => {
        return (
            form.name.trim().length >= 2 &&
            form.email.trim().includes("@") &&
            form.message.trim().length >= 10
        );
    }, [form]);

    async function onSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data?.error || "Failed to send message.");
            }

            setStatus("success");
            setForm({
                name: "",
                email: "",
                company: "",
                service: "Software Solutions",
                message: "",
            });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err?.message || "Something went wrong.");
        }
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="neon-border rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
                <div className="text-lg font-semibold">Inquiry form</div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Tell us what you are building or fixing, your timeline, and any constraints.
                    If you are unsure, describe the goal and we will help shape a clear plan.
                </p>

                <div className="mt-6 h-px w-full neon-divider opacity-70" />

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Name">
                            <input
                                value={form.name}
                                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                                className={inputCls}
                                placeholder="Your name"
                                autoComplete="name"
                            />
                        </Field>

                        <Field label="Email">
                            <input
                                value={form.email}
                                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                                className={inputCls}
                                placeholder="you@email.com"
                                autoComplete="email"
                            />
                        </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Company (optional)">
                            <input
                                value={form.company}
                                onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                                className={inputCls}
                                placeholder="Business / Brand"
                            />
                        </Field>

                        <Field label="Service">
                            <select
                                value={form.service}
                                onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                                className={inputCls}
                            >
                                <option>Software Solutions</option>
                                <option>Consulting</option>
                                <option>PC Building</option>
                                <option>Not sure yet</option>
                            </select>
                        </Field>
                    </div>

                    <Field label="Message">
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                            className={`${inputCls} min-h-[140px] resize-y`}
                            placeholder="What do you want to accomplish? Any timeline/budget constraints?"
                        />
                    </Field>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="submit"
                            disabled={!canSend || status === "sending"}
                            className="neon-border inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5"
                        >
                            {status === "sending" ? "Sending..." : "Send inquiry"}
                        </button>

                        <StatusLine status={status} errorMsg={errorMsg} />
                    </div>
                </form>
            </div>

            <div className="neon-border rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
                <div className="text-lg font-semibold">What to include</div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    For the most efficient response, please include any of the following details:
                </p>

                <div className="mt-6 h-px w-full neon-divider opacity-70" />

                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                    <li className="flex gap-3">
                        <Dot />
                        <span>Your goal including what “done” looks like to you.</span>
                    </li>
                    <li className="flex gap-3">
                        <Dot />
                        <span>Timeline + any deadlines</span>
                    </li>
                    <li className="flex gap-3">
                        <Dot />
                        <span>Budget range (a rough estimates is fine)</span>
                    </li>
                    <li className="flex gap-3">
                        <Dot />
                        <span>Existing stack/tools (if any)</span>
                    </li>
                    <li className="flex gap-3">
                        <Dot />
                        <span>For PCs: workload + target performance + noise preference</span>
                    </li>
                </ul>

                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                    <div className="text-zinc-200 font-medium">Privacy note</div>
                    <div className="mt-1 text-zinc-400">
                        Don’t send passwords or secret keys here. If we need secure access later, we’ll use a safe handoff.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Field({ label, children }) {
    return (
        <label className="block">
            <div className="mb-1 text-xs text-zinc-500">{label}</div>
            {children}
        </label>
    );
}

function StatusLine({ status, errorMsg }) {
    if (status === "idle") return <span className="text-xs text-zinc-600">Typically response time is 1–2 business days.</span>;
    if (status === "sending") return <span className="text-xs text-zinc-400">Sending…</span>;
    if (status === "success") return <span className="text-xs text-emerald-300">Sent. I’ll get back to you soon.</span>;
    return <span className="text-xs text-rose-300">{errorMsg || "Failed to send."}</span>;
}

function Dot() {
    return <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />;
}

const inputCls =
    "w-full rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-white/20";
