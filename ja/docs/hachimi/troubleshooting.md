# トラブルシューティング
- I/O error: Permission denied (os error 13)

これは、Android 10で導入された対象範囲別ストレージが原因で発生している可能性があります。これにより、Hachimi がデータディレクトリを作成できなくなっている可能性があります。回避策として、ファイルマネージャーを開き、 `Android/media` フォルダに移動して「jp.co.cygames.umamusume」という名前でフォルダを作成してください。ゲームを再起動すると、エラーが解決するはずです。


- フルスクリーンモードの際に、入力した位置が間違っている、またはゲームの解像度が引き伸ばされている

`full_screen_mode` と `resolution_scaling` オプションが正しく設定されていることを確認してください。画面の解像度が 1080p を超える場合は、 `resolution_scaling` を他のいずれかの値に変更してください。また、画面のアスペクト比が 16:9 以外の場合は、 `full_screen_mode` を `ExclusiveFullScreen` に設定してご利用ください。