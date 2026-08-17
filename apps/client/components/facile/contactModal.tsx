'use client'

import { useMemo, useState } from "react";
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

export default function ContactModal({ open, setOpen }: ContactModalProps) {
    const t = useTranslations('common.contactModal');
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const steps = useMemo(() => ([
        {
            key: 'name',
            title: t('steps.aboutYou'),
            label: t('name'),
            placeholder: 'Jane Doe',
            type: 'text',
            optional: false,
        },
        {
            key: 'email',
            title: t('steps.contact'),
            label: t('email'),
            placeholder: 'jane.doe@example.com',
            type: 'email',
            optional: false,
        },
        {
            key: 'phone',
            title: t('steps.contact'),
            label: t('phone'),
            placeholder: '+33 6 12 34 56 78',
            type: 'tel',
            optional: true,
        },
        {
            key: 'message',
            title: t('steps.message'),
            label: t('message'),
            placeholder: t('message'),
            type: 'textarea',
            optional: false,
        },
    ] as const), [t]);

    const currentStep = steps[step];

    const handleOpenChange = (next: boolean) => {
        if (!next) {
            setStep(0);
            setLoading(false);
            setError("");
            setSuccess("");
        }
        setOpen(next);
    };

    const currentValue = formData[currentStep.key];

    const isCurrentStepValid = () => {
        if (currentStep.optional) {
            return true;
        }

        return currentValue.trim().length > 0;
    };

    const handleChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            [currentStep.key]: value,
        }));
    };

    const handleNext = () => {
        if (!isCurrentStepValid()) {
            return;
        }

        if (step < steps.length - 1) {
            setStep((current) => current + 1);
            setError("");
            setSuccess("");
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((current) => current - 1);
            setError("");
            setSuccess("");
        }
    };

    const handleSubmit = async () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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

    const handleContinue = () => {
        if (step === steps.length - 1) {
            void handleSubmit();
            return;
        }

        handleNext();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key !== "Enter" || loading) {
            return;
        }

        if (currentStep.type === 'textarea' && e.shiftKey) {
            return;
        }

        e.preventDefault();
        handleContinue();
    };

    return (
        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-[#060907]/88 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-0 z-50 text-[#CAE6D8] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
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
                            <div className="absolute left-[-10%] top-20 h-64 w-64 rounded-full bg-[#CAE6D8]/10 blur-3xl" />
                            <div className="absolute right-[-8%] bottom-12 h-72 w-72 rounded-full bg-[#CAE6D8]/8 blur-3xl" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,6,0.42),rgba(5,8,6,0.92)_36%,rgba(5,8,6,0.98))]" />
                        </div>

                        <div className="relative z-10 flex h-full flex-col px-5 pb-8 pt-5 md:px-8 md:pb-10 md:pt-8 lg:px-12">
                            <div className="flex items-center justify-between">
                                <Dialog.Close className="group flex items-center gap-3 rounded-full border border-[#CAE6D8]/16 px-4 py-2 text-sm text-[#CAE6D8]/68 transition-colors duration-200 hover:border-[#CAE6D8]/30 hover:bg-[#CAE6D8]/8 hover:text-[#CAE6D8]">
                                    <span
                                        className="h-4 w-4 bg-[#CAE6D8]/68 transition-colors duration-200 group-hover:bg-[#CAE6D8]"
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

                                <div className="text-lg font-semibold tracking-[-0.04em] text-[#CAE6D8]/55 md:text-2xl">
                                    {step + 1}/{steps.length}
                                </div>
                            </div>

                            <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
                                <div className="mb-8 flex gap-2">
                                    {steps.map((stepItem, index) => (
                                        <div
                                            key={stepItem.key}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === step ? "w-10 bg-[#CAE6D8]" : index < step ? "w-2 bg-[#CAE6D8]/65" : "w-2 bg-[#CAE6D8]/14"}`}
                                        />
                                    ))}
                                </div>

                                <div className="space-y-6 md:space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="max-w-3xl text-[clamp(2.6rem,7vw,5.75rem)] font-black leading-[0.95] tracking-[-0.06em]">
                                            {currentStep.label}
                                        </h2>
                                        {currentStep.optional && (
                                            <div className="text-sm text-[#CAE6D8]/42">
                                                {t('optional')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="max-w-3xl">
                                        {currentStep.type === 'textarea' ? (
                                            <textarea
                                                name={currentStep.key}
                                                value={currentValue}
                                                onChange={(e) => handleChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                placeholder={currentStep.placeholder}
                                                className="min-h-[180px] w-full resize-none border-0 border-b border-[#CAE6D8]/22 bg-transparent px-0 py-4 text-xl leading-relaxed text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/20 focus:border-[#CAE6D8] md:min-h-[220px] md:text-3xl"
                                            />
                                        ) : (
                                            <input
                                                type={currentStep.type}
                                                name={currentStep.key}
                                                value={currentValue}
                                                onChange={(e) => handleChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                placeholder={currentStep.placeholder}
                                                className="w-full border-0 border-b border-[#CAE6D8]/22 bg-transparent px-0 py-4 text-xl text-[#CAE6D8] outline-none transition-colors duration-200 placeholder:text-[#CAE6D8]/20 focus:border-[#CAE6D8] md:text-3xl"
                                            />
                                        )}
                                    </div>

                                    {(error || success) && (
                                        <div className={`max-w-2xl text-sm ${error ? "text-red-200" : "text-green-200"}`}>
                                            {error || success}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 pt-6">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    disabled={step === 0 || loading}
                                    className="group flex items-center gap-3 rounded-full border border-[#CAE6D8]/16 px-4 py-2 text-sm text-[#CAE6D8]/68 transition-colors duration-200 hover:border-[#CAE6D8]/30 hover:bg-[#CAE6D8]/8 hover:text-[#CAE6D8] disabled:opacity-20"
                                >
                                    <span
                                        className="h-4 w-4 bg-[#CAE6D8]/68 transition-colors duration-200 group-hover:bg-[#CAE6D8]"
                                        style={{
                                            WebkitMaskImage: "url(/icons/arrow.svg)",
                                            maskImage: "url(/icons/arrow.svg)",
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                        }}
                                    />
                                    {t('back')}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleContinue}
                                    disabled={loading || !isCurrentStepValid()}
                                    className="group flex items-center gap-3 rounded-full bg-[#CAE6D8] px-5 py-3 text-sm text-[#0A0F0D] transition-all duration-200 hover:scale-[1.01] hover:bg-[#E0F3E8] disabled:cursor-not-allowed disabled:opacity-35 md:px-6"
                                >
                                    {loading && (
                                        <span className="h-4 w-4 rounded-full border-2 border-[#0A0F0D]/20 border-t-[#0A0F0D] animate-spin" />
                                    )}
                                    {step === steps.length - 1 ? (loading ? t('sending') : t('send')) : t('next')}
                                    {!loading && (
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
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
