import Header from "@/components/Header/Header";
import AvatarPage from "@/modules/AvatarPage/AvatarPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
const inter = Inter({ subsets: ['latin'] })

const Avatar = () => {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
      <AvatarPage/>
    </main>
  )
};

export default Avatar;