export type Drag =
	| { from: 'grid' | 'bucket'; id: string; w: number; h: number }
	| { from: 'library'; kind: string; w: number; h: number };

// dataTransfer cannot be read during dragover, so the dragged element is shared through this instead
export const drag = $state<{ current: Drag | null }>({ current: null });

export function startDrag(event: DragEvent, value: Drag) {
	// Firefox only starts a drag that carries data
	event.dataTransfer?.setData('text/plain', 'from' in value ? value.from : '');

	// Chrome aborts the drag when the DOM changes inside dragstart, and the drop overlay is such a change
	setTimeout(() => (drag.current = value));
}

export function endDrag() {
	drag.current = null;
}
