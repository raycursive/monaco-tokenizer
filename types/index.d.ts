import { languages } from "monaco-editor-core";

type Token = {
  language: string;
  type: string;
  offset: number;
};

export declare function tokenize(text: string, languageId: string): Token[][];
export declare const register: typeof languages.register;
export declare const setMonarchTokensProvider: typeof languages.setMonarchTokensProvider;
