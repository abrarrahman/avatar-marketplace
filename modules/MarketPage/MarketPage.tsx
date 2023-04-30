import useScreenSize from "@/hooks/useScreenSize";
import Sidebar from "./components/Sidebar/Sidebar";
import SortBySelect from "./components/SortBySelect/SortBySelect";
import { HiChevronDown } from "react-icons/hi";
import AvatarList from "./components/AvatarList/AvatarList";
import { Avatar } from "@/interfaces/Avatar.interface";
import { avatars } from "../../mock/Avatar.mock";

interface Props {
  avatars: Avatar[];
}
const MarketPage = ({ avatars }: Props) => {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex-1 flex flex-col md:flex-row w-full">
      {!isMobile() && <Sidebar />}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center pl-1 bg-white">
          <h2>All Items</h2>
          <div className="flex">
            <SortBySelect />
            {isMobile() && <div className="flex items-center justify-center px-3 text-purpleAccent text-sm border border-l">
              Filters <HiChevronDown className="ml-2" />
            </div>}
          </div>
        </div>
        <AvatarList avatars={avatars}/>
      </div>
    </div>
  );
};

export default MarketPage;
