export interface ISmallCardItem {
    href: string;
    coverimage: any;
    average_score: any;
    reviewCount: any;
    title: string;
}
export declare const generateElements: (items: any) => void;
export declare function generateSkeletonItems(items: any, tmp: Element): void;
export declare function fillItems(items: ISmallCardItem[], tmp: Element): void;
