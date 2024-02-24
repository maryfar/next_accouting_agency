import { classNames } from "@/utils/tools";

export const OutLineButton: React.FC<IButton> = ({
  title,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "w-full rounded-md px-sm py-xs text-primary-800 shadow",
        "border-violet-600 hover:bg-primary-400 disabled:bg-primary-400"
      )}
      {...props}
    >
      {title}
    </button>
  );
};
