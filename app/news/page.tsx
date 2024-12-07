import { getNewsList } from "@/app/_libs/microcms";
import NewList from "@/app/_components/NewList";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <NewList news={news} />;

}