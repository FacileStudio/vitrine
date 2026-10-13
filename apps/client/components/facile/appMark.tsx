import { Icon } from "@iconify/react";

const isLocalIcon = (icon: string) => icon.startsWith("/");

const versioned = (icon: string) => `${icon}?v=${process.env.NEXT_PUBLIC_ICONS_VERSION}`;

export default function AppMark({ icon, className, fileClassName }: { icon: string; className?: string; fileClassName?: string }) {
    return isLocalIcon(icon)
        ? <img src={versioned(icon)} alt="" fetchPriority="low" decoding="async" className={fileClassName} />
        : <Icon icon={icon} className={className} />;
}
