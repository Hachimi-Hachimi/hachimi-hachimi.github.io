# トラブルシューティング
[[toc]]

## 共通

### ゲームを開始しようとした際に、"Communication error" が発生する

ゲームと接続するために、VPNが必要な可能性があります。詳細は[こちらのページ](https://gametora.com/umamusume/playing-on-dmm)からご確認ください。
もし Steam のグローバル版と、DMM の日本語版の両方がインストールされている場合、ゲームがダウンロードされているフォルダ（`C:\Users\あなたのユーザー名\AppData\LocalLow\Cygames`）の大文字小文字の区別を有効化する必要があります。
1. `C:\Users\あなたのユーザー名\AppData\LocalLow\Cygames` 内のすべてのデータを一時的に退避する必要があります。このフォルダは空である必要があります。もし両方のバージョンがインストールされている場合は、一時的に片方のバージョンのフォルダ名を変更してください。（フォルダ名に「1」を追加するなど）移動する際に Windows によってファイルが上書きされてしまう可能性があります。
2. Powershell を開き `fsutil.exe file setCaseSensitiveInfo {（ここに実際のフォルダまでのパスを入力してください） \LocalLow\Cygames} enable` と入力します。
3. すべてのファイルを Cygames フォルダ内に戻して下さい。グローバル版は「Umamusume」、日本語版は「umamusume」です。

### 60 FPS以上で動作させるときに、髪や衣装などの物理演算が固くなる

「Physics update mode」を「Mode60FPS」に変更してください。「Gameplay」タブにある設定エディタから変更が可能です。

## Windows

### Hachimi をインストールした後にゲームが起動しなくなる。

正しいバージョンの Hachimi を使用したかを確認してください。現時点（v0.14.1）では、Steam のグローバル版用と、DMM 日本語版 で、別々のバージョンがあります。
グローバル版の場合、[最新のグローバル版用リリース](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/latest)の「hachimi_installer.exe」を使用する必要があります。
DMM 日本語版の場合、[最新の日本語版用リリース](https://github.com/Hachimi-Hachimi/Hachimi/releases/latest)の「hachimi_installer.exe」を使用する必要があります。
DMM 日本語版に Hachimi をインストールした後は、再起動が必要になります。**「電源」メニューから「再起動」を選択してください。単にシャットダウンした後にもう一度電源をつけるだけではいけません**。

### Steam版：Steamオーバーレイが開かない

Steamオーバーレイは Hachimi のオーバーレイと干渉します。Steamオーバーレイを有効にするには、Hachimi のオーバーレイを開き、「General」タブにある「Disable overlay (GUI)」にチェックを入れてください。その後、「Save」を押し、ゲームを再起動してください。
もう一度 Hachimi のオーバーレイを有効化するには、Hachimi の設定ファイル（config.json）をテキストエディタなどで開き、`disable_gui` の値を `true` から `false` に戻し、ゲームを再起動してください。設定ファイルはゲームのインストールフォルダ内の「hachimi」フォルダにあります。

### DMM版：ウィンドウのサイズを変更した後に、間違った位置に入力がされる

これは、DMM 日本語版用の Hachimi の既知の問題（近日中に修正予定™）です。今はウィンドウのサイズを変更しないでください。

### DMM版：Hachimi をインストール後、いくつかのゲームがプレイできなくなった

DMM 日本語版用の Hachimi は、ロードのために「.local」を使った DLL リダイレクトを使用しています。そのため、いくつかのアンチチートは、このことを良しとしません。
Vanguard や 他の、同じようなことを検出するアンチチートを搭載したゲームを遊ぶ際は、DLL リダイレクトを無効にする必要があります。
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/)は、「.local」を使った DLL リダイレクトの有効無効を簡単に切り替えられるプログラムです。

### DMM：フルスクリーンモードの際に、入力の位置が間違っている、またはゲームの解像度が引き伸ばされている

`full_screen_mode` と `resolution_scaling` オプションが正しく設定されていることを確認してください。画面の解像度が 1080p を超える場合は、 `resolution_scaling` を他のいずれかの値に変更してください。
また、画面のアスペクト比が 16:9 以外の場合は、 `full_screen_mode` を `ExclusiveFullScreen` に設定してご使用ください。

## Android

### パッチに失敗する

分割 APK ファイルの両方（ベース APK ファイルと分割構成 APK ファイル）、または統合された XAPK ファイルを使用していることを確認してください。ファイルピッカーで長押しをすることで複数ファイルを選択することができます。
APK ファイルは、[Qoopy](https://qoopy.leadrdrk.com/)を使ってダウンロードすることを推奨します（IDは「6172」です）。もし Xiaomi の端末を使用している場合は、MIUI の最適化を無効化してください。インストールに干渉する可能性があります。

### 「この端末でのプレイは許可されていません (You are not authorized to play on this device)」というエラーが発生する

端末がルート化されている場合は、ゲームからルート化をわからなくする必要があります。Magisk の denylistは、Shamiko などの他のツールと同様に機能するようです。
もし、ルート化*されていない*のであれば、ゲームを始めるときにVPNが必要である可能性があります。「ゲームを開始しようとした際に、"Communication error" が発生する」の項目をご確認ください。

### I/O error: Permission denied (os error 13)

Android 10で導入された対象範囲別ストレージにより、Hachimi がデータディレクトリを作成できなくなっている可能性があります。
回避策として、ファイルマネージャーを開き、 `Android/media` フォルダに移動して「jp.co.cygames.umamusume」という名前でフォルダを作成してください。ゲームを再起動すると、エラーが解決するはずです。

### I/O error: File exists (os error 17)

端末を再起動し、もう一度ゲームを起動してみてください。それでも解決しない場合は、Discord サーバーでヘルプを求めてください。

### 起動後にクラッシュする

ファイルマネージャーを開き、`Android/media` に移動し、「jp.co.cygames.umamusume」という名前でフォルダを作成します。そのフォルダ内に「hachimi」という名前でフォルダを作成して、最後に、以下の設定ファイルをダウンロードし、「hachimi」フォルダ内に配置します（ダウンロードしたファイル名が「config.json」になっていることを確認してください）。

[設定ファイルをダウンロードする](https://files.leadrdrk.com/hachimi/android-compat/config.json)

一部の端末やエミュレーターでは、この操作が必要になります。