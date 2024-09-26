export interface Markdown {
    metadata: {
        title: string,
        date: string,
        content: string,
        categories: string[]
    }
}

export interface MarkdownGet {
    meta: Markdown["metadata"],
    // meta: {
    //     title: string,
    //     date: string,
    //     content: string,
    //     categories: string[]
    // },
    path: string
}

