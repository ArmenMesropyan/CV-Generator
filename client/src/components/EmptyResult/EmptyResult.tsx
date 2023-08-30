import { Text } from "@ui-kitten/components";
import React, { FC } from "react";

export interface EmptyResultProps {
  children: string;
}

const EmptyResult: FC<EmptyResultProps> = ({ children }) => (
  <Text style={{ textAlign: "center" }}>{children}</Text>
);

export default EmptyResult;
