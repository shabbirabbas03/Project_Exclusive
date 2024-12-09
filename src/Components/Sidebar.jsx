import { Sideitems } from "../constant";

const Sidebar = () => {
  return (
    <div className="max-w-sm">
      <ul className="menu menu-vertical gap-6 border-r-2 py-10">
        {Sideitems.map((items) => (
          <li
            className="btn items-start text-black btn-sm border-none shadow-none rounded hover:btn-primary hover:text-white font-medium text-base px-10"
            key={items.title}
          >
            <a href={items.href}>{items.title}</a>
          </li>
        ))}
      </ul>
      <hr className="w-full md:block hidden" />
    </div>
  );
};

export default Sidebar;
