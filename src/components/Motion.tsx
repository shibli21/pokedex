import { Box, BoxProps, Flex, FlexProps, Text, TextProps } from "@chakra-ui/layout";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { FunctionComponent } from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<"div">>;
export const MotionBox: React.FC<MotionBoxProps> = motion(Box);

type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<"div">>;
export const MotionFlex: FunctionComponent<MotionFlexProps> = motion(Flex);

type MotionTextProps = Merge<TextProps, HTMLMotionProps<"div">>;
export const MotionText: FunctionComponent<MotionTextProps> = motion(Text);
