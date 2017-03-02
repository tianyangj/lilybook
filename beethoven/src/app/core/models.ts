export interface AFUnwrappedDataSnapshot {
    $key: string;
    $value?: string | number | boolean;
    $exists: () => boolean;
}

export interface Abrsm extends AFUnwrappedDataSnapshot {
    name: string;
    order: number;
    description?: string;
}

export interface Composer extends AFUnwrappedDataSnapshot {
    fullname: string;
    image: string;
    name: string;
    bio?: string;
    compositions?: any;
}

export interface Composition extends AFUnwrappedDataSnapshot {
    abrsm?: string;
    composerId: string;
    description?: string;
    form?: string;
    henle?: string;
    imslp?: string;
    key?: string;
    media?: {
        videos?: [{
            src: string;
            type: string;
        }];
        audios?: [{
            src: string;
            type: string;
        }]
    };
    rcm?: string;
    sheet?: {
        images: [string];
    };
    thumbnail?: {
        url: string;
    };
    title: string;
}

export interface Form extends AFUnwrappedDataSnapshot {
    name: string;
    description: string;
    wiki: string;
    order: number;
}

export interface Henle extends AFUnwrappedDataSnapshot {
    name: string;
}

export interface Key extends AFUnwrappedDataSnapshot {
    name: string;
    image: string;
    wiki: string;
}

export interface Rcm extends AFUnwrappedDataSnapshot {
    certificate: string;
    name: string;
    order: number;
    description?: string;
}