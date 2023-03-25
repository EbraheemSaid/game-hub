import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green.300" : score > 80 ? "yellow.400" : "";

  return (
    <Badge borderRadius={"6px"} paddingX={2} color={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
