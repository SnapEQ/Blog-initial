import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landingPage.tsx"),
    route("articles", "routes/articles/index.tsx", [
        index("routes/articles/list.tsx"),
        route(":articleId", "routes/articles/article.tsx")
])

] satisfies RouteConfig;
