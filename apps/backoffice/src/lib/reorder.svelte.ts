export class Reorder {
	dragged = $state<string | null>(null);
	over = $state<string | null>(null);

	enabled: () => boolean;
	onmove: (from: string, to: string) => void;

	constructor(enabled: () => boolean, onmove: (from: string, to: string) => void) {
		this.enabled = enabled;
		this.onmove = onmove;
	}

	props(slug: string) {
		return {
			draggable: this.enabled(),
			ondragstart: (e: DragEvent) => {
				if (!this.enabled())
					return e.preventDefault();

				this.dragged = slug;
				e.dataTransfer?.setData('text/plain', slug);

				if (e.dataTransfer) {
					e.dataTransfer.effectAllowed = 'move';
					e.dataTransfer.setDragImage(e.currentTarget as Element, 24, 24);
				}
			},
			ondragover: (e: DragEvent) => {
				if (!this.dragged)
					return;

				e.preventDefault();
				this.over = slug;
			},
			ondrop: (e: DragEvent) => {
				e.preventDefault();

				if (this.dragged)
					this.onmove(this.dragged, slug);

				this.dragged = this.over = null;
			},
			ondragend: () => (this.dragged = this.over = null),
		};
	}

	showsBar(slug: string) {
		return this.over === slug && this.dragged !== null && this.dragged !== slug;
	}
}
