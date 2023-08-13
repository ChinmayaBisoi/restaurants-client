import Link from "next/link";

const sidebarOptions = [
  {
    label: "Menu",
    url: "/",
  },
  {
    label: "Billing",
    url: "/billing",
  },
  {
    label: "Settings",
    url: "/settings",
  },
];

const Sidebar = ({}) => {
  return (
    <aside className="hidden w-[200px] flex-col gap-4 md:flex fixed">
      {sidebarOptions.map(({ label, url }) => {
        return (
          <Link key={label} href={url}>
            <div
              className={`py-2 px-4 rounded-md flex items-center gap-3
            ${"hover:bg-gray-200"}
            `}>
              {label}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
