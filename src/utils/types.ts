export type Model = {
    name: string,
    displayName: string
}

export type GalleryAsyncResponse = {
    displayName?: string,
    description?: string,
    images: string[]
}

export type GalleryAsyncState = {
    data?: GalleryAsyncResponse;
    error: boolean;
}

export interface ArtGeneratorAsyncState {
    image?: string;
    loading: boolean;
    error: boolean
}