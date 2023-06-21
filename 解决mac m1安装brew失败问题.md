在 Mac M1 上安装 Homebrew 可以通过终端操作进行：

1. 打开终端。（你可以在启动台中的“其他”文件夹中找到终端程序）

2. 使用以下命令来安装 Homebrew：

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. 等待安装过程完成后，检验是否安装成功，使用以下命令：

   ```
   brew doctor
   ```

   如果终端显示 "Your system is ready to brew."，则表示 Homebrew 安装成功。

注意：

由于是安装在 M1 Mac 上，需要先安装 Rosetta。Rosetta 是一个跨架构的虚拟机，可以让 Intel 架构的应用程序在 Mac M1 上运行。如果你不知道 Mac M1 是否已经安装了 Rosetta，请打开终端并输入以下命令。

```
/usr/sbin/sysctl -n machdep.cpu.brand_string
```

如果输出结果中包含"Intel"，则表示你的 Mac M1 已经成功安装了 Rosetta。

如果没有安装，请在终端输入以下命令以安装 Rosetta：

```
/usr/sbin/softwareupdate --install-rosetta
```

安装完成后，在终端输入 `arch`，如果显示 `arm64`，则表示已经在本机上运行 M1 版本的终端。否则需要在 Finder 中用 Cmd+I 获取终端应用的信息，在界面中选择“打开用 Rosetta 打开”并确认即可。

希望这些步骤可以帮助你在 Mac M1 上成功安装 Homebrew。