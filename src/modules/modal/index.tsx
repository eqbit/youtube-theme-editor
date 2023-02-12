import React from "react";
import { Modal as MuiModal } from "@mui/material";
import css from "./index.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, open, children }: Props) => {
  return (
    <MuiModal open={open} onClose={onClose} className={css.wrapper}>
      <>{children}</>
    </MuiModal>
  );
};
