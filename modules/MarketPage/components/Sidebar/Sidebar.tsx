import { FilterOptions } from "./constants/filterOptions";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white flex flex-col gap-3 p-4 text-xs">
      {FilterOptions.map((filterOption) => {
        return (
          <div key={filterOption.group.id}>
            <h3 className="mb-1 font-bold">{filterOption.group.label}</h3>
            <div className="flex flex-col gap-1">
            {filterOption.options.map(option=>{
              return <div key={option.id} className="flex ml-3">
                <input type="checkbox" className="checkbox checkbox-xs rounded mr-2" />
                <p className="font-medium">{option.label}</p>
                {option.id === 'vrChatPcVr' && <div className="w-3 h-3 rounded-full bg-skyAccent ml-1"/>}
                {option.id === 'vrChatQuest' && <div className="w-3 h-3 rounded-full bg-greenAccent ml-1"/>}
              </div>
            })}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
