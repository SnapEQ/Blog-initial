
export async function generateStaticParams() {
}

export default async function BlogPostPage({
    params,
    } : {
        params: Promise<{slug : string}>
    }) {
        const { slug } = await params;
    }