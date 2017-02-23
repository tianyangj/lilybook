export interface Abrsm {
    name: string;
    order: number;
    description?: string;
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