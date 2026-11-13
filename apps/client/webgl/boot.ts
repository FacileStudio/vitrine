export type Boot = "now" | "soon" | "idle";

type Slot = { stage: Boot; start: () => void; cancelled: boolean };

const SLOT_MS = 4000;

const waiting: Slot[] = [];
let running = 0;
let held = 0;
let primed = true;

const later = (fn: () => void) => {
    if (typeof requestIdleCallback === "function")
        requestIdleCallback(fn, { timeout: 1000 });
    else
        setTimeout(fn, 50);
};

function next() {
    const soon = primed ? waiting.findIndex((s) => s.stage === "soon") : -1;

    if (soon >= 0)
        return soon;

    return held ? -1 : waiting.findIndex((s) => s.stage === "idle");
}

function pump() {
    if (running > 0)
        return;

    const i = next();

    if (i < 0)
        return;

    const [slot] = waiting.splice(i, 1);

    running += 1;
    later(() => {
        if (slot.cancelled) {
            running -= 1;
            pump();
            return;
        }

        slot.start();
    });
}

const prime = () => {
    primed = true;
    pump();
};

export function holdBoot() {
    held += 1;
    primed = false;

    let released = false;
    const timer = setTimeout(prime, SLOT_MS);

    return () => {
        if (released)
            return;

        released = true;
        clearTimeout(timer);
        held -= 1;
        primed = true;
        pump();
    };
}

export function queueBoot(stage: Boot, start: () => void) {
    const slot: Slot = { stage, start, cancelled: false };

    if (stage !== "now" && !held && waiting.length === 0) {
        start();
        return { done: () => undefined, cancel: () => undefined };
    }

    let finished = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const done = () => {
        if (finished)
            return;

        finished = true;
        clearTimeout(timer);
        running -= 1;

        if (stage === "now")
            primed = true;

        pump();
    };

    const begin = () => {
        timer = setTimeout(done, SLOT_MS);
        start();
    };

    if (stage === "now") {
        running += 1;
        begin();
    } else {
        slot.start = begin;
        waiting.push(slot);
        pump();
    }

    return {
        done,
        cancel: () => {
            slot.cancelled = true;

            const i = waiting.indexOf(slot);

            if (i >= 0)
                waiting.splice(i, 1);
            else if (timer !== undefined)
                done();
        },
    };
}
