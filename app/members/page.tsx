import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export default async function Page(){
    const data = await getMembersList();
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((member) => (
                        <li key={member.id} className={styles.list}>
                            <Image
                                src={member.image.url}
                                alt=""
                                width={member.image.width}
                                height={member.image.height}
                                className={styles.image}
                            />

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}