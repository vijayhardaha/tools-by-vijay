"use client";

import { Button } from "@/components/ui/button";
import { RiMenu3Fill } from "react-icons/ri";

const MenuButton = ({ onClick }) => (
  <Button onClick={onClick} variant="default">
    Menu
    <RiMenu3Fill />
  </Button>
);

export default MenuButton;
