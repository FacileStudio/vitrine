import { Icon } from "@iconify/react";

const isLocalIcon = (icon: string) => icon.startsWith("/");

// An app's mark: a shipped file when there is one, the iconify glyph otherwise
export default function AppMark({ icon, className, fileClassName }: { icon: string; className?: string; fileClassName?: string }) {
    return isLocalIcon(icon)
        ? <img src={icon} alt="" className={fileClassName} />
        : <Icon icon={icon} className={className} />;
}
