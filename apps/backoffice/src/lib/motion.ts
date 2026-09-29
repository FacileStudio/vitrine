import gsap from 'gsap';

export const EASE = {
	out: 'power3.out',
	sharp: 'power2.inOut',
};

let batch = 0;

// elements mounted in the same frame stagger in, a lone element added later appears without waiting
export function enter(node: HTMLElement) {
	const index = batch++;

	if (index === 0)
		requestAnimationFrame(() => (batch = 0));

	const tween = gsap.from(node, {
		opacity: 0,
		y: 12,
		duration: 0.5,
		delay: Math.min(index, 12) * 0.04,
		ease: EASE.out,
		clearProps: 'opacity,transform',
	});

	return { destroy: () => tween.kill() };
}

export function spin(node: Element) {
	const tween = gsap.to(node, {
		rotation: 360,
		duration: 0.8,
		repeat: -1,
		ease: 'none',
	});

	return { destroy: () => tween.kill() };
}

export function pop(node: Element) {
	gsap.from(node, {
		scale: 0.4,
		opacity: 0,
		duration: 0.45,
		ease: 'back.out(3)',
	});
}

export function collapse(node: HTMLElement, onComplete: () => void) {
	gsap.to(node, {
		opacity: 0,
		height: 0,
		overflow: 'hidden',
		paddingTop: 0,
		paddingBottom: 0,
		duration: 0.3,
		ease: EASE.sharp,
		onComplete: () => {
			onComplete();
			gsap.set(node, { clearProps: 'all' });
		},
	});
}

export function settle(node: Element, fromY: number) {
	gsap.from(node, {
		y: fromY,
		opacity: 0.4,
		duration: 0.35,
		ease: EASE.out,
		clearProps: 'opacity,transform',
	});
}

// the image grows while its link is hovered, the card itself stays put
export function zoom(node: HTMLElement) {
	const host = node.closest('a') ?? node;
	const scale = gsap.quickTo(node, 'scale', {
		duration: 0.6,
		ease: EASE.out,
	});
	const grow = () => scale(1.05);
	const shrink = () => scale(1);

	host.addEventListener('mouseenter', grow);
	host.addEventListener('mouseleave', shrink);

	return {
		destroy: () => {
			host.removeEventListener('mouseenter', grow);
			host.removeEventListener('mouseleave', shrink);
		},
	};
}
