import Header from "@/components/Header/Header";
import { Avatar } from "@/interfaces/Avatar.interface";
import { avatars } from "@/mock/Avatar.mock";
import AvatarPage from "@/modules/AvatarPage/AvatarPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  avatar?: Avatar;
  error?: string;
}

const Avatar = ({ avatar, error }: Props) => {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      {error && <p>Avatar not found</p>}
      {avatar && <AvatarPage avatar={avatar} />}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = avatars.map((avatar) => ({
    params: { id: avatar.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const avatar = avatars.find((avatar) => avatar.id === id);
    return { props: { avatar } };
  } catch (err: any) {
    return { props: { error: err.message } };
  }
};

export default Avatar;
