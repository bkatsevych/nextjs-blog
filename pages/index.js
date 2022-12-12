import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Currently interested in mastering MERN-stack development
                    with the main focus on frontend. Open for any
                    frontend/MERN-related commissions/cooperation. Have some
                    decent C++ understanding. Besides web development and
                    programming, also interested in neurology and psychiatry.
                    Self-taught. Dedicated. Fast learner.
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={`${utilStyles.headingLg}`}>Blog</h2>
                <ul className={`${utilStyles.list}`}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.ligtText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
