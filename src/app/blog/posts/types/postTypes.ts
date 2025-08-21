export type AuthorType = {
    id: string;
    name: string;
}

export type PostType = {
    id: string;
    title: string;
    content: string;
    author: AuthorType;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export type PostProps = {
    post: PostType
}