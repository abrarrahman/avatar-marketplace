import { Avatar } from "@/interfaces/Avatar.interface";
import { useRouter } from "next/router";
import AvatarCard from "../MarketPage/components/AvatarList/components/AvatarCard/AvatarCard";

interface Props {
  avatar: Avatar;
}

const AvatarPage = ({ avatar }: Props) => {
  return (
    <div>
      Avatar page rendered for id:{avatar.id}
      <AvatarCard avatar={avatar}/>
    </div>
  );
};

export default AvatarPage;
