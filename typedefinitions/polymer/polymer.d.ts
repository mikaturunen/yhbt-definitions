// Type definitions for Polymer
// Project: https://github.com/polymer
// Definitions by: Mika Turunen <https://github.com/mikaturunen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Interface for Polymer 1.0
 */
interface Polymer {
	importElements(node: Node, callback: Function): void;

	import(url: string, callback?: () => void): void;

    mixin(target: any, ...mixins: any[]): any;

	waitingFor(): Array<string>;

    forceReady(timeout: number): void;

    (elementDescription: PolymerElement): void;
}

/**
 * Describes how the element is built.
 */
interface PolymerElement {
	is: string;

	/**
	 * User defined set of properties for the element. This should reflect the requirements
	 * the user might have for the Element.
	 */
	properties?: any;

	/**
	 * Called when the element is ready.
	 */
	ready?: () => void;

	/**
	 * Part of lifecycle callbacks: Element created.
	 */
	created?: () => void;

	/**
	 * Part of lifecycle callbacks: Element attached.
	 */
	attached?: () => void;

	/**
	 * Part of lifecycle callbacks: Element detached.
	 */
	detached?: () => void;

	/**
	 * Part of lifecycle callbacks: Elements attributes changed.
	 * TODO: Find out the typing for "type" argument
	 */
	attributeChanged?: (name: string, type: any) => void;

	/**
	 * List of static attributes on the Host element.
	 * For example:  hostAttributes: { role: 'button', 'aria-disabled': true, tabindex: 0 }.
	 * Reflects to:  <x-custom role="button" aria-disabled tabindex="0"></x-custom>.
	 */
	hostAttributes?: any;
}

declare var Polymer: Polymer;
