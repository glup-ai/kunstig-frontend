export type Model = {
    name: string,
    displayName: string
}

export type GalleryAsync = {
    displayName?: string,
    description?: string,
    images: string[]
}

export interface ArtGeneratorAsyncState {
    image?: string;
    loading: boolean;
    error: boolean
}