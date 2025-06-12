import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  
  
  ssr: true,
  async prerender(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let articles = await response.json();
    return articles.map(
      (article: { id: number }) => `/articles/${article.id}`
    );
  },
} satisfies Config;
