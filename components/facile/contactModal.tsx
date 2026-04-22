'use client'

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import * as Dialog from '@radix-ui/react-dialog';

type ContactModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactModal = ({ open, setOpen }: ContactModalProps) => {
    const t = useTranslations('common.contactModal');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (!open) {
            setLoading(false);
            setError("");
            setSuccess("");
        }
    }, [open]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            setFormData({ name: "", email: "", phone: "", message: "" });

            setTimeout(() => setOpen(false), 800);
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
                <Dialog.Overlay className="fixed inset-0 z-50 bg-[#111111]/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#CAE6D8] p-16 rounded-[32px] w-full max-w-xl flex flex-col gap-8 text-[#1e1e1e] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                    <Dialog.Close className="absolute top-8 left-8 cursor-pointer text-[#1E1E1E]">
                        <img src={"/icons/arrow.svg"} alt="arrow" width={20} height={20} />
                    </Dialog.Close>

                    <Dialog.Title className="sr-only">{t('title') || 'Contact Us'}</Dialog.Title>
                    <Dialog.Description className="sr-only">{t('description') || 'Send us a message'}</Dialog.Description>

                    <img
                        alt="Facile"
                        src="/icons/HIRE%20US.svg"
                        className="h-20 mx-auto mb-5"
                    />

                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="relative w-full">
                            <div className="absolute bg-[#CAE6D8] px-4 left-5 top-0 -translate-y-1/2">{t('name')}</div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-4 text-center w-full rounded-full border border-[#1E1E1E]/20 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="relative w-full">
                            <div className="absolute bg-[#CAE6D8] px-4 left-5 top-0 -translate-y-1/2">{t('email')}</div>
                            <input
                                type="email"
                                name="email"
                                placeholder="jane.doe@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-4 w-full text-center rounded-full border border-[#1E1E1E]/20 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="relative w-full">
                            <div className="absolute bg-[#CAE6D8] px-4 left-5 top-0 -translate-y-1/2">{t('phone')}</div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+00 1 23 45 67 89"
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-4 w-full text-center rounded-full border border-[#1E1E1E]/20 focus:outline-none"
                            />
                        </div>

                        <div className="relative w-full">
                            <div className="absolute bg-[#CAE6D8] px-4 left-5 top-0 -translate-y-1/2">{t('message')}</div>
                            <textarea
                                name="message"
                                placeholder={t('message')}
                                value={formData.message}
                                onChange={handleChange}
                                className="p-4 w-full text-left rounded-3xl border border-[#1E1E1E]/20 h-48 resize-none focus:outline-none"
                                required
                            />
                        </div>

                        {error && <p className="text-red-600 text-center">{error}</p>}
                        {success && <p className="text-green-700 text-center">{success}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#1E1E1E] text-[#CAE6D8] py-3 rounded-full hover:bg-[#333] transition disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            {loading && (
                                <span className="h-4 w-4 rounded-full border-2 border-[#CAE6D8]/30 border-t-[#CAE6D8] animate-spin" />
                            )}
                            {loading ? t('sending') : t('send')}
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ContactModal;
