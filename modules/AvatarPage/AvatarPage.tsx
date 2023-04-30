import { useRouter } from "next/router";

const AvatarPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Avatar Page for id:{id}</div>
}

export default AvatarPage;