export interface Abrsm {
    name: string;
    order: number;
    description?: string;
}

export interface Composer {
    fullname: string;
    image: string;
    name: string;
    bio?: string;
}

export interface Composition {
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

export interface Form {
    name: string;
    description: string;
    wiki: string;
    order: number;
}

export interface Henle {
    name: string;
}

export interface Key {
    name: string;
    image: string;
    wiki: string;
}

export interface Rcm {
    certificate: string;
    name: string;
    order: number;
    description?: string;
}