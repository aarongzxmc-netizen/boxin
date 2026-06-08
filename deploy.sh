#!/bin/bash

# ANSI Color Code Definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Clear terminal screen
clear

echo -e "${CYAN}=======================================================================${NC}"
echo -e "         ${GREEN}博新环保 (BOXIN) B2B 独立站一键初始化与部署工具${NC}"
echo -e "         ${GREEN}BOXIN B2B Site One-Click Local Init & Deployment Tool${NC}"
echo -e "${CYAN}=======================================================================${NC}"
echo

# 1. Environment check (git)
echo -e "${BLUE}[1/4] 正在检测本地开发环境 (Checking local environment)...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${RED}[错误/ERROR] 未检测到 Git 客户端！(Git is not installed.)${NC}"
    echo "请先下载并安装 Git: https://git-scm.com/"
    echo "Please install Git first: https://git-scm.com/"
    echo
    exit 1
else
    echo -e " - Git 检测通过 (Git is detected)."
fi

# Environment check (gh)
HAS_GH=1
if ! command -v gh &> /dev/null; then
    HAS_GH=0
    echo -e " - ${YELLOW}[提示/WARNING] 未检测到 GitHub CLI (gh) 客户端。${NC}"
    echo "   如果您希望体验全自动建仓推送，推荐安装 gh: https://cli.github.com/"
    echo "   (Note: GitHub CLI 'gh' is recommended for auto-creation: https://cli.github.com/)"
    echo "   我们将提供手动 Git 关联选项。"
else
    echo -e " - GitHub CLI (gh) 检测通过 (GitHub CLI is detected)."
fi
echo

# 2. Git Initialization
echo -e "${BLUE}[2/4] 初始化本地 Git 仓库 (Initializing Git repository)...${NC}"
if [ ! -d ".git" ]; then
    git init
    git branch -M main
    echo -e " - ${GREEN}本地仓库初始化成功 (Local repository initialized).${NC}"
else
    echo " - 本地仓库已存在，无需重新初始化 (Local Git repository already exists)."
fi

echo
echo "正在添加项目文件并创建首次提交 (Staging files & committing)..."
git add .
git commit -m "chore: initial commit - BOXIN B2B website integrated" &> /dev/null
if [ $? -ne 0 ]; then
    echo " - 暂无新文件需要提交 (No changes to commit, or commit already done)."
else
    echo -e " - ${GREEN}成功创建首次提交 (Successfully created initial commit).${NC}"
fi
echo

# 3. Remote Repository Association
echo -e "${BLUE}[3/4] 关联远程 GitHub 仓库 (Associating remote GitHub repository)...${NC}"
if git remote get-url origin &> /dev/null; then
    echo -e " - 已存在绑定的远程仓库 (Remote origin already exists)."
    git remote -v
    echo
    read -p "是否要重新绑定远程仓库? (y/n) [Confirm rebind remote?]: " REBIND
    if [[ "$REBIND" =~ ^[Yy]$ ]]; then
        git remote remove origin
    else
        PUSH_NOW=1
    fi
fi

if [ -z "$PUSH_NOW" ]; then
    if [ $HAS_GH -eq 1 ]; then
        echo
        echo "检测到您安装了 GitHub CLI (gh)，我们可以帮您一键在 GitHub 上创建并推送。"
        echo "(Detected GitHub CLI, we can auto-create the repository on GitHub for you.)"
        echo
        read -p "是否需要自动在 GitHub 上创建新仓库并推送? (y/n) [Auto-create repo via gh?]: " AUTO_CREATE
        if [[ "$AUTO_CREATE" =~ ^[Yy]$ ]]; then
            echo "正在检测 GitHub 登录状态 (Checking gh authentication status)..."
            if ! gh auth status &> /dev/null; then
                echo -e "${YELLOW}[提示] 您尚未登录 GitHub CLI，请根据终端提示完成授权。${NC}"
                echo "(Please authenticate in the terminal as prompted.)"
                gh auth login
            fi
            echo
            read -p "请输入要在 GitHub 创建的仓库名 (默认: boxin-b2b-site): " REPO_NAME
            if [ -z "$REPO_NAME" ]; then
                REPO_NAME="boxin-b2b-site"
            fi
            echo
            echo -e "${CYAN}正在 GitHub 上创建公共仓库: $REPO_NAME 并一键推送...${NC}"
            gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
            if [ $? -eq 0 ]; then
                echo
                echo -e "${GREEN}[成功/SUCCESS] 仓库创建并推送完成！${NC}"
                SHOW_GUIDE=1
            else
                echo -e "${RED}[错误/ERROR] 自动建仓失败。我们将引导您转为手动绑定。${NC}"
                echo
            fi
        fi
    fi

    if [ -z "$SHOW_GUIDE" ]; then
        echo
        echo -e "${YELLOW}---- 手动关联 GitHub 仓库 (Manual Git Remote Setup) ----${NC}"
        echo "请先在 GitHub 网页端 (https://github.com/new) 创建一个空的仓库(不要勾选 README/.gitignore)。"
        echo -e "创建完成后，复制其 Git 仓库地址 (例如 ${CYAN}https://github.com/您的用户名/boxin-b2b-site.git${NC})。"
        echo
        read -p "请输入您的 GitHub 仓库 URL (Please paste your Git repository URL): " REPO_URL
        while [ -z "$REPO_URL" ]; do
            echo -e "${RED}[错误] 仓库地址不能为空！${NC}"
            read -p "请输入您的 GitHub 仓库 URL: " REPO_URL
        done

        git remote add origin "$REPO_URL"
        echo -e " - ${GREEN}成功关联远程仓库 (Successfully added remote origin).${NC}"
        echo
    fi
fi

# 4. Push code (if not already pushed by gh)
if [ -z "$SHOW_GUIDE" ]; then
    echo -e "${BLUE}[4/4] 正在将代码推送到 GitHub... (Pushing code to GitHub...)${NC}"
    git branch -M main
    git push -u origin main
    if [ $? -ne 0 ]; then
        echo
        echo -e "${RED}[错误/ERROR] 推送失败！${NC}"
        echo "请检查以下事项："
        echo "1. 您的网络是否可以连接 GitHub（可尝试代理或科学上网工具）。"
        echo "2. 您在 GitHub 上创建的仓库是否为空。"
        echo "3. 您是否有该仓库的写入权限。"
        echo
        exit 1
    fi
fi

# Show deployment guide
echo
echo -e "${GREEN}=======================================================================${NC}"
echo -e "          🎉 ${CYAN}[恭喜/CONGRATULATIONS] 代码已成功部署到 GitHub！${NC}"
echo -e "${GREEN}=======================================================================${NC}"
echo
echo "接下来请按以下步骤在 Vercel 极速上线您的博新 B2B 独立站："
echo
echo -e "${YELLOW}STEP 1: 登录 Vercel${NC}"
echo "  - 访问并登录 Vercel: https://vercel.com"
echo
echo -e "${YELLOW}STEP 2: 导入项目${NC}"
echo "  - 点击 [Add New] - [Project]"
echo "  - 在 Git 列表中找到刚刚推送的仓库 (例如: boxin-b2b-site) 并点击 [Import]"
echo
echo -e "${YELLOW}STEP 3: 确认部署${NC}"
echo "  - Framework Preset 选择 [Next.js] (Vercel 会自动识别)"
echo "  - 展开 [Environment Variables]，如果后续需要配置密钥，可在此输入 (当前暂无需配置)"
echo "  - 点击 [Deploy] 按钮，等待 1-2 分钟，即可获得 Vercel 分配的免费域名 (例如 xxx.vercel.app)"
echo
echo -e "${YELLOW}STEP 4: 绑定 Namecheap 自定义域名 (Custom Domain)${NC}"
echo "  - 在 Vercel 项目面板，点击 [Settings] - [Domains]"
echo "  - 输入您在 Namecheap 购买的域名 (如 www.yourdomain.com 或 yourdomain.com) 并点击 [Add]"
echo "  - Vercel 会给出所需的解析记录："
echo -e "    - 若绑定 ${CYAN}www.yourdomain.com${NC}，请在 Namecheap 的 DNS 中添加 CNAME 记录："
echo -e "      * Type: ${GREEN}CNAME Record${NC}"
echo -e "      * Host: ${GREEN}www${NC}"
echo -e "      * Value: ${GREEN}cname.vercel-dns.com.${NC}"
echo -e "    - 若绑定 ${CYAN}yourdomain.com${NC} (顶级/裸域名)，请添加 A 记录："
echo -e "      * Type: ${GREEN}A Record${NC}"
echo -e "      * Host: ${GREEN}@${NC}"
echo -e "      * Value: ${GREEN}76.76.21.21${NC} (Vercel 全球 DNS 节点)"
echo
echo -e "官方商务联系信息 (Eliane / +86 199 8201 2846 / Eliane@fsbox.com)"
echo -e "${CYAN}=======================================================================${NC}"
echo "部署引导完成！"
