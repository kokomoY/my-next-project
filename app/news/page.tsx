import { getNewsList } from "@/app/_libs/microcms";
import NewList from "@/app/_components/NewList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return <NewList news={news} />;

}