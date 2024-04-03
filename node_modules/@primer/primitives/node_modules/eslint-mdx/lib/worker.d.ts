import type { Root } from 'mdast';
import type { Processor } from 'unified';
export declare const processorCache: Map<string, Processor<Root, undefined, undefined, Root, string>>;
export declare const getRemarkProcessor: (searchFrom: string, isMdx: boolean, ignoreRemarkConfig?: boolean) => Promise<Processor<Root, undefined, undefined, Root, string>>;
