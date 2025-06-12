export interface Article {
    id: number;
    title: string;
    body: string;
}

export interface ArticleLoaderData {
    loaderData: Article;
}

export interface ArticlesProps {
    loaderData: Article[];
}
