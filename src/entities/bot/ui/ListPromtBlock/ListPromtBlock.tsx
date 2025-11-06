"use client";

import { Button } from "antd";
import { FC } from "react";
import { useModal } from "@shared/context/ModalProvider";
import PromtBot from "../PromtBot/PromtBot";
import { usePromtStore } from "./model/useListPromt";
import AddFormPromt from "../AddFromPromt/AddFromPromt";

const ListPromtBlock: FC = () => {
  const { openModal } = useModal();
  const listPromt = usePromtStore((state) => state.listPromt);

  return (
    <div>
      {listPromt.map((e, i) => (
        <PromtBot key={i} promt={e} />
      ))}

      <Button onClick={() => openModal(<AddFormPromt />)}>Добавить</Button>
    </div>
  );
};

export default ListPromtBlock;
