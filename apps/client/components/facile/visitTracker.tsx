"use client";

import { useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { isOptedOut, visitorKey } from "@/lib/visitor";

export default function VisitTracker() {
    useEffect(() => {
        if (isOptedOut())
            return;

        // a stats outage must never surface on the public site
        trpc.statistics.trackVisit.mutate({ visitorKey: visitorKey() }).catch(() => {});
    }, []);

    return null;
}
