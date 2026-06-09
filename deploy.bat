@echo off
:: Set UTF-8 encoding for both Chinese and English support in command prompt
chcp 65001 >nul
title BOXIN B2B Site One-Click Deployer
cls

echo =======================================================================
echo         博新环保 (BOXIN) B2B 独立站一键初始化与部署工具
echo         BOXIN B2B Site One-Click Local Init ^& Deployment Tool
echo =======================================================================
echo.

:: 1. Environment check (git)
echo [1/4] 正在检测本地开发环境 (Checking local environment)...
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误/ERROR] 未检测到 Git 客户端！(Git is not installed.)
    echo 请先下载并安装 Git: https://git-scm.com/
    echo Please install Git first: https://git-scm.com/
    echo.
    pause
    exit /b 1
) else (
    echo - Git 检测通过 (Git is detected).
)

:: Environment check (gh)
where gh >nul 2>&1
set HAS_GH=1
if %errorlevel% neq 0 (
    set HAS_GH=0
    echo - [提示/WARNING] 未检测到 GitHub CLI (gh) 客户端。
    echo   如果您希望体验全自动建仓推送，推荐安装 gh: https://cli.github.com/
    echo   (Note: GitHub CLI 'gh' is recommended for auto-creation: https://cli.github.com/)
    echo   我们将提供手动 Git 关联选项。
) else (
    echo - GitHub CLI (gh) 检测通过 (GitHub CLI is detected).
)
echo.

:: 2. Git Initialization
echo [2/4] 初始化本地 Git 仓库 (Initializing Git repository)...
if not exist .git (
    git init
    git branch -M main
    echo - 本地仓库初始化成功 (Local repository initialized).
) else (
    echo - 本地仓库已存在，无需重新初始化 (Local Git repository already exists).
)

echo.
echo 正在添加项目文件并创建首次提交 (Staging files ^& committing)...
git add .
git commit -m "chore: initial commit - BOXIN B2B website integrated" >nul 2>&1
if %errorlevel% neq 0 (
    echo - 暂无新文件需要提交 (No changes to commit, or commit already done).
) else (
    echo - 成功创建首次提交 (Successfully created initial commit).
)
echo.

:: 3. Remote Repository Association
echo [3/4] 关联远程 GitHub 仓库 (Associating remote GitHub repository)...
git remote get-url origin >nul 2>&1
if %errorlevel% eq 0 (
    echo - 已存在绑定的远程仓库 (Remote origin already exists).
    git remote -v
    echo.
    set /p REBIND="是否要重新绑定远程仓库? (y/n) [Confirm rebind remote?]: "
    if /i "%REBIND%"=="y" (
        git remote remove origin
        goto :bind_flow
    )
    goto :push_flow
)

:bind_flow
if %HAS_GH%==1 (
    echo.
    echo 检测到您安装了 GitHub CLI (gh)，我们可以帮您一键在 GitHub 上创建并推送。
    echo (Detected GitHub CLI, we can auto-create the repository on GitHub for you.)
    echo.
    set /p AUTO_CREATE="是否需要自动在 GitHub 上创建新仓库并推送? (y/n) [Auto-create repo via gh?]: "
    if /i "%AUTO_CREATE%"=="y" (
        echo 正在检测 GitHub 登录状态 (Checking gh authentication status)...
        gh auth status >nul 2>&1
        if %errorlevel% neq 0 (
            echo [提示] 您尚未登录 GitHub CLI，请在接下来的弹窗中根据提示完成授权。
            echo (Please authenticate in the browser or terminal windows as prompted.)
            gh auth login
        )
        echo.
        set /p REPO_NAME="请输入要在 GitHub 创建的仓库名 (默认: boxin-b2b-site): "
        if "%REPO_NAME%"=="" set REPO_NAME=boxin-b2b-site
        
        echo.
        echo 正在 GitHub 上创建公共仓库: %REPO_NAME% 并一键推送...
        echo (Creating public repository and pushing...)
        gh repo create %REPO_NAME% --public --source=. --remote=origin --push
        if %errorlevel% eq 0 (
            echo.
            echo [成功/SUCCESS] 仓库创建并推送完成！
            goto :deploy_guide
        ) else (
            echo [错误/ERROR] 自动建仓失败。我们将引导您转为手动绑定。
            echo.
        )
    )
)

echo.
echo ---- 手动关联 GitHub 仓库 (Manual Git Remote Setup) ----
echo 请先在 GitHub 网页端 (https://github.com/new) 创建一个空的仓库(不要勾选 README/.gitignore)。
echo 创建完成后，复制其 Git 仓库地址 (例如 https://github.com/您的用户名/boxin-b2b-site.git)。
echo.
set /p REPO_URL="请输入您的 GitHub 仓库 URL (Please paste your Git repository URL): "
if "%REPO_URL%"=="" (
    echo [错误] 仓库地址不能为空！
    goto :bind_flow
)

git remote add origin %REPO_URL%
echo - 成功关联远程仓库 (Successfully added remote origin).
echo.

:push_flow
echo [4/4] 正在将代码推送到 GitHub... (Pushing code to GitHub...)
git branch -M main
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo [错误/ERROR] 推送失败！
    echo 请检查以下事项：
    echo 1. 您的网络是否可以连接 GitHub。
    echo 2. 您在 GitHub 上创建的仓库是否为空。
    echo 3. 您是否有该仓库的写入权限。
    echo.
    pause
    exit /b 1
)

:deploy_guide
echo.
echo =======================================================================
echo          ?? [恭喜/CONGRATULATIONS] 代码已成功部署到 GitHub！
echo =======================================================================
echo.
echo 接下来请按以下步骤在 Vercel 极速上线您的博新 B2B 独立站：
echo.
echo STEP 1: 登录 Vercel
echo   - 访问并登录 Vercel: https://vercel.com
echo.
echo STEP 2: 导入项目
echo   - 点击 [Add New] - [Project]
echo   - 在 Git 列表中找到刚刚推送的仓库 (例如: boxin-b2b-site) 并点击 [Import]
echo.
echo STEP 3: 确认部署
echo   - Framework Preset 选择 [Next.js] (Vercel 会自动识别)
echo   - 展开 [Environment Variables]，如果后续需要配置密钥，可在此输入 (当前暂无需配置)
echo   - 点击 [Deploy] 按钮，等待 1-2 分钟，即可获得 Vercel 分配的免费域名 (例如 xxx.vercel.app)
echo.
echo STEP 4: 绑定 Namecheap 自定义域名 (Custom Domain)
echo   - 在 Vercel 项目面板，点击 [Settings] - [Domains]
echo   - 输入您在 Namecheap 购买的域名 (如 www.yourdomain.com 或 yourdomain.com) 并点击 [Add]
echo   - Vercel 会给出所需的解析记录：
echo     - 若绑定 www.yourdomain.com，请在 Namecheap 的 DNS 中添加 CNAME 记录：
echo       * Type: CNAME Record
echo       * Host: www
echo       * Value: cname.vercel-dns.com.
echo     - 若绑定 yourdomain.com (顶级/裸域名)，请添加 A 记录：
echo       * Type: A Record
echo       * Host: @
echo       * Value: 76.76.21.21 (Vercel 全球 DNS 节点)
echo.
echo 官方商务联系信息 (Eliane / +86 199 8201 2846 / Eliane@fsbox.com)
echo =======================================================================
echo 部署引导完成！按任意键退出本窗口。
pause >nul
exit /b 0

