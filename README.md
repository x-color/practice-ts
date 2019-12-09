# TypeScriptの開発環境&TypeScriptの勉強PJ

## Settings

- TypeScript
- Webpack
- Jest
- ESLint

## Test

単体テストファイルはテスト対象ファイルと同一フォルダ内。
結合テストなどは、「tests」ディレクトリ内などに配置。

[JestでのUnit testのディレクトリ構造について](https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850)

## 参考文献

- [TypeScriptでESlint用いる](https://qiita.com/suzuki_sh/items/fe9b60c4f9e1dbc5d903)
- [AirbnbのTypeScriptのlint設定](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [Resolve ESLint Error: Unable to resolve path to module](https://qiita.com/paranishian/items/334d0f2d87f487dc65d6)
- [TypeScript + Webpack](https://ics.media/entry/16329/)
- [TypeScript & Jest](https://qiita.com/mangano-ito/items/99dedf88d972e7e631b7)
- [jest実行時に警告されるesModuleInteropオプションについて](http://osamtimizer.hatenablog.com/entry/2018/06/28/122502)


[eslint 「error: Parsing error: "parserOptions.project"・・・」のエラー原因の一例](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)

> TypeScript will ignore files with duplicate filenames in the same folder (for example, src/file.ts and src/file.js). TypeScript purposely ignore all but one of the files, only keeping the one file with the highest priority extension (the extension priority order (from highest to lowest) is .ts, .tsx, .d.ts, .js, .jsx). For more info see #955.

このエラーは、VScode再起動で治ったりすることもある。