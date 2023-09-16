import Head from "next/head";

const DEFAULT_TITLE = "MiniHacks Presents:";
const DEFAULT_DESC = "A Hackathon Project!";

export type MyHeadingProps = {
  title?: string;
  desc?: string;
};

const MyHeading = ({ title, desc }: MyHeadingProps): JSX.Element => (
  <Head>
    <title>{title || DEFAULT_TITLE}</title>
    <meta name={"description"} content={desc || DEFAULT_DESC} />
    <link rel={"icon"} href={"/favicon.ico"} />
  </Head>
);
export default MyHeading;
