import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChevronUpProps = typeof __propDef.props;
export type ChevronUpEvents = typeof __propDef.events;
export type ChevronUpSlots = typeof __propDef.slots;
export default class ChevronUp extends SvelteComponentTyped<ChevronUpProps, ChevronUpEvents, ChevronUpSlots> {
}
export {};
