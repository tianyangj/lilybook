import { Observable } from 'rxjs/Observable';

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

export interface Collection extends AFUnwrappedDataSnapshot {
    name: string;
    book?: boolean;
    compositions?: { string: number }[];
    compositions$?: Observable<Composition>[];
}

export interface Composer extends AFUnwrappedDataSnapshot {
    fullname: string;
    image: string;
    name: string;
    bio?: string;
    compositions?: { string: number }[];
    compositions$?: Observable<Composition>[];
}

export interface Composition extends AFUnwrappedDataSnapshot {
    abrsm?: string;
    abrsm$?: Observable<Abrsm>;
    composerId: string;
    composer$?: Observable<Composer>;
    description?: string;
    form?: string;
    form$?: Observable<Form>;
    henle?: string;
    henle$?: Observable<Henle>;
    imslp?: string;
    key?: string;
    key$?: Observable<Key>;
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
    rcm$?: Observable<Rcm>;
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