@echo off
chcp 936 >nul
title 独立站 GitHub 一键推送工具 - One-Click Push Tool
color 0F
cls

echo =======================================================================
echo          博新独立站一键极速强推工具 (One-Click Force Push)
echo =======================================================================
echo.
echo  - 第一步：请先去浏览器复制您在 GitHub 新建的【空仓库网址】。
echo    例如: https://github.com/您的用户名/boxin-b2b-site.git
echo.
echo =======================================================================
echo.

:: 1. 检测 Git
where git >nul 2>&1
if %errorlevel% neq 0 goto :no_git

:: 2. 自动检测剪贴板
echo 正在尝试从系统剪贴板自动读取 GitHub 网址...
powershell -NoProfile -Command "$c = Get-Clipboard; if ($c) { $s = ($c -join '').Trim() -replace [char]34,'' -replace [char]39,''; if ($s -like '*github.com*') { $s } }" > "%temp%\clip_push.txt" 2>nul
set CLIP_URL=
set /p CLIP_URL=<"%temp%\clip_push.txt"
del "%temp%\clip_push.txt" >nul 2>&1

if "%CLIP_URL%"=="" goto :no_clip

:: 检测到剪贴板中包含 github.com 的有效网址，进行醒目绿色提示
color 0A
echo =======================================================================
echo  【自动读取成功！】检测到您刚刚复制的 GitHub 网址为：%CLIP_URL%
echo =======================================================================
color 0F
echo.
set CONFIRM=
set /p CONFIRM="确认使用该网址进行推送吗？(y/n，按回车默认为确认): "
if "%CONFIRM%"=="" set CONFIRM=y
if /i "%CONFIRM%"=="y" goto :use_clip
if /i "%CONFIRM%"=="yes" goto :use_clip
goto :no_clip

:use_clip
set REPO_URL=%CLIP_URL%
goto :start_push

:no_clip
echo =======================================================================
echo  【提示】未在剪贴板中检测到有效的 GitHub 网址。在 Windows 黑色窗口中，
echo  您可以通过【鼠标右键单击】来直接完成粘贴。
echo =======================================================================
echo.
goto :input_url

:input_url
set REPO_URL=
set /p REPO_URL=">> 请在此处【鼠标右键单击】粘贴您的 GitHub 仓库网址，然后按回车: "

if "%REPO_URL%"=="" goto :url_empty
goto :validate_input_url

:url_empty
echo [错误] 网址不能为空，请重新输入！
echo.
goto :input_url

:validate_input_url
echo %REPO_URL% | findstr /I "github.com" >nul
if %errorlevel% neq 0 goto :url_invalid
goto :start_push

:url_invalid
echo [错误] 您输入的网址似乎不是有效的 GitHub 网址，请重新输入！
echo.
goto :input_url

:start_push
echo.
echo =======================================================================
echo  正在为您全自动初始化并强推代码，请稍候...
echo  目标仓库: %REPO_URL%
echo =======================================================================
echo.

:: 3. 初始化与清理
git init >nul 2>&1
git config --local user.name "independent-station-user" >nul 2>&1
git config --local user.email "user@independent-station.com" >nul 2>&1

git checkout -b main >nul 2>&1
git branch -M main >nul 2>&1
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

:: 4. 提交与强推
git add .
git commit -m "deploy: initial B2B site complete from one-click-push" >nul 2>&1

echo.
echo >> 正在拼命向 GitHub 强行推送代码 (Pushing to GitHub)...
echo (这可能需要 10-30 秒，如果中途需要您登录，请根据弹出的提示完成授权)
echo.

git push -u origin main -f

if %errorlevel% neq 0 goto :push_failed
goto :push_success

:push_success
color 0A
echo.
echo =======================================================================
echo  [成功/SUCCESS] 您的全部网页、大图及联系方式已成功推送至 GitHub！
echo =======================================================================
echo.
echo  >> 下一步操作 (Next Steps):
echo     1. 回到您刚刚打开的 Vercel 网页。
echo     2. Vercel 会瞬间检测到您的代码推送，并【全自动开始部署】。
echo     3. 等待约 30 秒，"No Production Deployment" 就会变成绿色的上线状态！
echo.
echo 部署引导完成！按任意键退出本窗口。
pause >nul
exit

:push_failed
color 0C
echo.
echo [失败/ERROR] 推送遇到问题，请检查：
echo    1. 您的 GitHub 网址是否输入正确？
echo    2. 您的本地网络或代理是否通畅？
echo    3. 您的 GitHub 账号是否已在电脑端登录？
echo.
pause
exit

:no_git
color 0C
echo [错误] 未检测到 Git 客户端！请先安装 Git 后再试。
echo 官方下载地址: https://git-scm.com/
pause
exit
