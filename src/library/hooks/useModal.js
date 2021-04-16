import { useState } from "react";

export const useModal = (initalState = false) => {
  const [isModalActive, setIsModalActive] = useState(initalState);

  const toggleModal = () => {
    setIsModalActive((prev) => !prev);
  };

  return { isModalActive, toggleModal };
};
