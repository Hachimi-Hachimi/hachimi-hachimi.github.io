# トラブルシューティング
- **I/O error: Permission denied (os error 13)**

Android 10で導入された対象範囲別ストレージにより、Hachimi がデータディレクトリを作成できなくなっている可能性があります。回避策として、ファイルマネージャーを開き、 `Android/media` フォルダに移動して「jp.co.cygames.umamusume」という名前でフォルダを作成してください。ゲームを再起動すると、エラーが解決するはずです。


- **フルスクリーンモードの際に、入力の位置が間違っている、またはゲームの解像度が引き伸ばされている**

`full_screen_mode` と `resolution_scaling` オプションが正しく設定されていることを確認してください。画面の解像度が 1080p を超える場合は、 `resolution_scaling` を他のいずれかの値に変更してください。また、画面のアスペクト比が 16:9 以外の場合は、 `full_screen_mode` を `ExclusiveFullScreen` に設定してご使用ください。


- **Androidで、起動後にクラッシュする**

ファイルマネージャーを開き、`Android/media` に移動し、「jp.co.cygames.umamusume」という名前でフォルダを作成します。そのフォルダ内に「hachimi」という名前でフォルダを作成して、最後に、以下の設定ファイルをダウンロードし、「hachimi」フォルダ内に配置します（ダウンロードしたファイル名が「config.json」になっていることを確認してください）。

[設定ファイルをダウンロードする](https://files.leadrdrk.com/hachimi/android-compat/config.json)

一部のデバイスやエミュレーターでは、この操作が必要になります。