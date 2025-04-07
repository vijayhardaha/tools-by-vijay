'use client';

const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
    type="button"
    onClick={onClick}
  >
    Menu
  </button>
);

export default MenuButton;
