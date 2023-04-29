

interface Props {
  contentCount?: number;
  children?: React.ReactNode;
}
const ActionButton = ({ contentCount , children}: Props) => {
  return (
    <div className="h-10 w-10 rounded-xl bg-greyBg flex items-center justify-center relative">
      {children}
      {contentCount && (
        <div className="bg-redAccent text-white absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {contentCount}
        </div>
      )}
    </div>
  );
};

export default ActionButton;
