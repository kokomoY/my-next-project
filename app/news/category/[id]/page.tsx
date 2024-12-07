import { getCategoryDetail,getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewList from "@/app/_components/NewList";
import Category from "@/app/_components/Category"
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
            <p>
                <Category category={category} /> の一覧
            </p>
        </>
    );
}