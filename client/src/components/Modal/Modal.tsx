import { Card, Modal as ModalUI } from "@ui-kitten/components";
import React, { FC, PropsWithChildren } from "react";
import { styles } from "./styles";

export interface ModalProps {
  visible: boolean;

  onClose(): void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  visible,
  onClose,
}) => (
  <ModalUI
    visible={visible}
    backdropStyle={styles.backdrop}
    style={styles.modal}
    onBackdropPress={onClose}
  >
    <Card disabled={true}>{children}</Card>
  </ModalUI>
);

export default Modal;
