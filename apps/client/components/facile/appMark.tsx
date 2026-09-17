import { Icon } from "@iconify/react";

const isLocalIcon = (icon: string) => icon.startsWith("/");

export default function AppMark({ icon, className, fileClassName }: { icon: string; className?: string; fileClassName?: string }) {
    return isLocalIcon(icon)
        ? <img src={icon} alt="" fetchPriority="low" decoding="async" className={fileClassName} />
        : <Icon icon={icon} className={className} />;
}
