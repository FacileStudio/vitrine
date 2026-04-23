'use client'

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from 'next-intl';
import * as Dialog from '@radix-ui/react-dialog';

type ContactModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const ContactModal = ({ open, setOpen }: ContactModalProps) => {
    const t = useTranslations('common.contactModal');
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const steps = useMemo(() => ([
        {
            key: 'aboutYou',
            title: t('steps.aboutYou'),
            description: t('description'),
            fields: ['name', 'email'] as const,
        },
        {
            key: 'contact',
            title: t('steps.contact'),
            description: t('description'),
            fields: ['phone'] as const,
        },
        {
            key: 'message',
            title: t('steps.message'),
            description: t('description'),
            fields: ['message'] as const,
        },
    ]), [t]);

    useEffect(() => {
        if (!open) {
            setLoading(false);
            setError("");
            setSuccess("");
            setStep(0);
        }
    }, [open]);

    const isStepValid = (index: number) => {
        if (index === 0) {
            return formData.name.trim().length > 0 && formData.email.trim().length > 0;
        }

        if (index === 1) {
            return true;
        }

        return formData.message.trim().length > 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNext = () => {
        if (step < steps.length - 1 && isStepValid(step)) {
            setStep((current) => current + 1);
            setError("");
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((current) => current - 1);
            setError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isStepValid(step)) {
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const controller = new AbortController();
            const timeoutId = window.setTimeout(() => controller.abort(), 15000);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                signal: controller.signal,
            });
            window.clearTimeout(timeoutId);

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || t('error'));
                return;
            }

            setSuccess(t('success'));
            setFormData(initialFormData);

            window.setTimeout(() => setOpen(false), 900);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                setError("Request timed out. Please try again.");
            } else {
                setError(t('error'));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-[#050806]/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-0 z-50 overflow-hidden text-[#CAE6D8] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <Dialog.Title className="sr-only">{t('title')}</Dialog.Title>
                    <Dialog.Description className="sr-only">{t('description')}</Dialog.Description>

                    <div
                        style={{
                            backgroundImage: 'url("/images/bg-blur.webp")',
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="relative flex h-full w-full flex-col overflow-hidden"
                    >
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-[#CAE6D8]/10 blur-3xl" />
                            <div className="absolute right-[-5%] top-1/3 h-80 w-80 rounded-full bg-[#CAE6D8]/8 blur-3xl" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,6,0.3),rgba(5,8,6,0.92)_28%,rgba(5,8,6,0.98))]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(202,230,216,0.12),transparent_42%)]" />
                        </div>

                        <div className="relative z-10 flex h-full flex-col px-5 pb-8 pt-5 md:px-8 md:pb-10 md:pt-8 lg:px-12">
                            <div className="flex items-center justify-between">
                                <Dialog.Close className="group flex items-center gap-3 rounded-full border border-[#CAE6D8]/16 bg-[#CAE6D8]/8 px-4 py-2 text-sm text-[#CAE6D8]/78 transition-colors duration-200 hover:bg-[#CAE6D8]/14 hover:text-[#CAE6D8]">
                                    <span
                                        className="h-4 w-4 bg-[#CAE6D8]/78 transition-colors duration-200 group-hover:bg-[#CAE6D8]"
                                        style={{
                                            WebkitMaskImage: "url(/icons/arrow.svg)",
                                            maskImage: "url(/icons/arrow.svg)",
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                        }}
                                    />
                                    {t('close')}
                                </Dialog.Close>

                                <div className="hidden text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/38 md:block">
                                    {t('stepLabel')} {step + 1} / {steps.length}
                                </div>
                            </div>

                            <div className="mt-4 grid flex-1 gap-4 overflow-hidden lg:mt-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
                                <div className="flex flex-col justify-between rounded-[28px] border border-[#CAE6D8]/14 bg-[#0D1310]/48 p-5 backdrop-blur-md md:p-8">
                                    <div>
                                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                            <span className="h-2 w-2 rounded-full bg-[#CAE6D8]" />
                                            Facile Studio
                                        </div>

                                        <div className="mt-5 space-y-3 md:mt-8 md:space-y-4">
                                            <h2 className="max-w-xl text-[clamp(2.2rem,8vw,6rem)] font-black leading-[0.92] tracking-[-0.06em]">
                                                {t('title')}
                                            </h2>
                                            <p className="max-w-lg text-sm leading-relaxed text-[#CAE6D8]/68 md:text-lg">
                                                {t('description')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-10 lg:grid-cols-1 lg:gap-5">
                                        {steps.map((stepItem, index) => {
                                            const isActive = step === index;
                                            const isComplete = step > index;

                                            return (
                                                <div key={stepItem.key} className="flex items-start gap-3 rounded-[24px] border border-transparent bg-[#CAE6D8]/[0.02] p-3 lg:bg-transparent lg:p-0">
                                                    <div className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm transition-colors duration-200 ${isActive ? "border-[#CAE6D8] bg-[#CAE6D8] text-[#0A0F0D]" : isComplete ? "border-[#CAE6D8]/35 bg-[#CAE6D8]/14 text-[#CAE6D8]" : "border-[#CAE6D8]/15 bg-transparent text-[#CAE6D8]/45"}`}>
                                                        {index + 1}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className={`text-sm transition-colors duration-200 md:text-base ${isActive || isComplete ? "text-[#CAE6D8]" : "text-[#CAE6D8]/45"}`}>
                                                            {stepItem.title}
                                                        </div>
                                                        <div className="hidden text-sm text-[#CAE6D8]/45 lg:block">
                                                            {stepItem.fields.map((field) => t(field)).join(" / ")}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="flex min-h-0 flex-col rounded-[28px] border border-[#CAE6D8]/14 bg-[#070B09]/62 p-5 backdrop-blur-md md:p-8">
                                    <div className="space-y-3">
                                        <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                            {t('stepLabel')} {step + 1}
                                        </div>
                                        <h3 className="text-2xl font-black leading-[0.95] tracking-[-0.05em] md:text-4xl">
                                            {steps[step].title}
                                        </h3>
                                        <p className="max-w-xl text-sm leading-relaxed text-[#CAE6D8]/62 md:text-base">
                                            {steps[step].description}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex-1 overflow-y-auto">
                                        {step === 0 && (
                                            <div className="grid gap-5">
                                                <label className="space-y-3">
                                                    <span className="text-xs uppercase tracking-[0.24em] text-[#CAE6D8]/45">{t('name')}</span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Jane Doe"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full rounded-[24px] border border-[#CAE6D8]/14 bg-[#CAE6D8]/6 px-5 py-4 text-lg text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/24 focus:border-[#CAE6D8]/40"
                                                        required
                                                    />
                                                </label>

                                                <label className="space-y-3">
                                                    <span className="text-xs uppercase tracking-[0.24em] text-[#CAE6D8]/45">{t('email')}</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="jane.doe@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full rounded-[24px] border border-[#CAE6D8]/14 bg-[#CAE6D8]/6 px-5 py-4 text-lg text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/24 focus:border-[#CAE6D8]/40"
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        )}

                                        {step === 1 && (
                                            <div className="grid gap-5">
                                                <label className="space-y-3">
                                                    <span className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#CAE6D8]/45">
                                                        {t('phone')}
                                                        <span className="rounded-full border border-[#CAE6D8]/12 px-2 py-1 text-[10px] tracking-[0.2em] text-[#CAE6D8]/35">
                                                            {t('optional')}
                                                        </span>
                                                    </span>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="+33 6 12 34 56 78"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full rounded-[24px] border border-[#CAE6D8]/14 bg-[#CAE6D8]/6 px-5 py-4 text-lg text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/24 focus:border-[#CAE6D8]/40"
                                                    />
                                                </label>
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="grid h-full gap-5">
                                                <label className="flex h-full flex-col space-y-3">
                                                    <span className="text-xs uppercase tracking-[0.24em] text-[#CAE6D8]/45">{t('message')}</span>
                                                    <textarea
                                                        name="message"
                                                        placeholder={t('message')}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="min-h-[220px] flex-1 resize-none rounded-[28px] border border-[#CAE6D8]/14 bg-[#CAE6D8]/6 px-5 py-5 text-lg text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/24 focus:border-[#CAE6D8]/40 md:min-h-[260px]"
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-5 space-y-4 md:mt-6">
                                        {(error || success) && (
                                            <div className={`rounded-2xl border px-4 py-3 text-sm ${error ? "border-red-500/25 bg-red-500/8 text-red-200" : "border-green-500/25 bg-green-500/8 text-green-200"}`}>
                                                {error || success}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between gap-3">
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                disabled={step === 0 || loading}
                                                className="rounded-full border border-[#CAE6D8]/14 px-4 py-3 text-sm text-[#CAE6D8]/72 transition-colors duration-200 hover:border-[#CAE6D8]/30 hover:bg-[#CAE6D8]/8 hover:text-[#CAE6D8] disabled:cursor-not-allowed disabled:opacity-35 md:px-5"
                                            >
                                                {t('back')}
                                            </button>

                                            {step < steps.length - 1 ? (
                                                <button
                                                    type="button"
                                                    onClick={handleNext}
                                                    disabled={!isStepValid(step)}
                                                    className="group flex items-center gap-3 rounded-full bg-[#CAE6D8] px-5 py-3 text-sm text-[#0A0F0D] transition-all duration-200 hover:scale-[1.01] hover:bg-[#E0F3E8] disabled:cursor-not-allowed disabled:opacity-40 md:px-6"
                                                >
                                                    {t('next')}
                                                    <span
                                                        className="h-4 w-4 rotate-180 bg-[#0A0F0D]"
                                                        style={{
                                                            WebkitMaskImage: "url(/icons/arrow.svg)",
                                                            maskImage: "url(/icons/arrow.svg)",
                                                            WebkitMaskSize: "contain",
                                                            maskSize: "contain",
                                                            WebkitMaskRepeat: "no-repeat",
                                                            maskRepeat: "no-repeat",
                                                        }}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    disabled={loading || !isStepValid(step)}
                                                    className="group flex items-center gap-3 rounded-full bg-[#CAE6D8] px-5 py-3 text-sm text-[#0A0F0D] transition-all duration-200 hover:scale-[1.01] hover:bg-[#E0F3E8] disabled:cursor-not-allowed disabled:opacity-40 md:px-6"
                                                >
                                                    {loading && (
                                                        <span className="h-4 w-4 rounded-full border-2 border-[#0A0F0D]/20 border-t-[#0A0F0D] animate-spin" />
                                                    )}
                                                    {loading ? t('sending') : t('send')}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ContactModal;
