'use client';

import { Component, type ReactNode } from "react";

// r3f rethrows a failed context into react, which would unmount the whole page for a decorative canvas
export class CanvasBoundary extends Component<{ children: ReactNode; onFail: () => void }, { failed: boolean }> {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch() {
        this.props.onFail();
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}
