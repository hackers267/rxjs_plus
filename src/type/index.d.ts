import { ReactNode, ReactText } from "react";

export type Input = Record<string, ReactText>;
export type Option = { label: ReactNode; value: ReactNode };
export type TransferType = { key: ReactText; title: ReactText };
