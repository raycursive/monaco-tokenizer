import "./global";
import {
  register,
  setMonarchTokensProvider,
} from "monaco-editor-core/esm/vs/editor/standalone/browser/standaloneLanguages";
import { tokenize as tokenizeOriginal } from "monaco-editor-core/esm/vs/editor/standalone/browser/standaloneEditor.js";
import "monaco-languages/release/esm/monaco.contribution";

function tokenize(text, languageId) {
  return tokenizeOriginal(text, languageId).map((row) =>
    row.map(({ offset, language, type }) => ({
      offset,
      language,
      type,
    }))
  );
}

export { register, setMonarchTokensProvider, tokenize };
