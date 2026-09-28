"use client";

import { useEffect } from "react";
import { trpc } from "@/lib/trpc";

const VISITOR_KEY = "facile-visitor";

export default function VisitTracker() {
    useEffect(() => {
        let key = localStorage.getItem(VISITOR_KEY);

        if (!key) {
            key = `visitor_${crypto.randomUUID().replace(/-/g, "")}`;
            localStorage.setItem(VISITOR_KEY, key);
        }

        // a stats outage must never surface on the public site
        trpc.statistics.trackVisit.mutate({ visitorKey: key }).catch(() => {});
    }, []);

    return null;
}
