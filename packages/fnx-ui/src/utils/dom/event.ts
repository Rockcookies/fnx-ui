import { SyntheticEvent } from 'react';
import { IS_BROWSER } from '../detect';
import { noop } from '../misc';

export function stopPropagation(event: SyntheticEvent | Event) {
	event.stopPropagation();
}

export function preventDefault(
	event: SyntheticEvent | Event,
	isStopPropagation?: boolean,
) {
	if (typeof event.cancelable !== 'boolean' || event.cancelable) {
		event.preventDefault();
	}

	if (isStopPropagation) {
		stopPropagation(event);
	}
}

export let SUPPORTS_PASSIVE = false;

try {
	const opts = {};
	Object.defineProperty(opts, 'passive', {
		// eslint-disable-next-line getter-return
		get() {
			SUPPORTS_PASSIVE = true;
		},
	});
	(window as any).addEventListener('test-passive', null, opts);
} catch (e) {}

export function bindEvent(
	element: Element | Document | Window,
	event: string,
	callback: (...args: any[]) => any,
	options: {
		passive?: boolean;
	} = {},
) {
	let eventOptions: boolean | AddEventListenerOptions = false;

	if (options.passive != null) {
		eventOptions = SUPPORTS_PASSIVE ? { passive: options.passive } : false;
	}

	element.addEventListener(event, callback, eventOptions);
}

export function listenWindowResize(cb: () => void): () => void {
	if (!IS_BROWSER) {
		return noop;
	}

	window.addEventListener('resize', cb);
	window.addEventListener('orientationchange', cb);

	return () => {
		window.removeEventListener('resize', cb);
		window.removeEventListener('orientationchange', cb);
	};
}

export function listenDocumentVisibilityChange(
	cb: (status: 'visible' | 'hidden') => void,
): () => void {
	if (!IS_BROWSER) {
		return noop;
	}

	const listener = () => {
		cb(document.visibilityState);
	};

	document.addEventListener('visibilitychange', listener);

	return () => {
		document.removeEventListener('visibilitychange', listener);
	};
}
