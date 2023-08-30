import { Button, ButtonProps } from "@ui-kitten/components";
import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { Modal, ModalProps } from "../Modal";
import { styles } from "./styles";

export interface ConfirmationModalProps extends ModalProps {
  closeBtnProps?: ButtonProps;
  confirmBtnProps?: ButtonProps;
}

const ConfirmationModal: FC<PropsWithChildren<ConfirmationModalProps>> = ({
  children,
  visible,
  closeBtnProps,
  confirmBtnProps,
  onClose,
}) => (
  <Modal visible={visible} onClose={onClose}>
    {children}

    <View style={styles.buttonsContainer}>
      {closeBtnProps && (
        <Button onPress={onClose} status="danger" {...closeBtnProps} />
      )}

      {confirmBtnProps && <Button status="success" {...confirmBtnProps} />}
    </View>
  </Modal>
);

export default ConfirmationModal;
