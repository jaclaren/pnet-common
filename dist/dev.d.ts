declare const config: {
    classes: {
        card: string;
    };
};
declare const generateOrRemoveDetails: (rootElement: HTMLElement, item: any) => void;
declare const generateDetails: (item: any) => HTMLDivElement;
declare const generateElements: (items: any) => void;
declare function generateSkeletonItems(items: any, tmp: Element): void;
declare function fillItems(items: any, tmp: Element): void;
