# 博新环保 (BOXIN) B2B 独立站上线与部署实战指南
# BOXIN B2B Site Deployment & Launch Playbook

本指南旨在帮助您快速、无痛地将已整合完毕的博新 B2B 独立站部署发布至全球。我们提供了一键式本地初始化、提交与推送脚本，以及配套的 **Vercel 云托管 + Namecheap 自定义域名解析** 的完美实践方案。

---

## 📂 项目资产与完整性校验报告
在发布前，我们已对项目文件夹 `boxin-b2b-site` 进行了严格的资产与文案完整性校验，结果如下：

1. **Logo 资产**：已安全存放在 `public/assets/images/logo/logo.png`。
2. **产品图片**：12张 1688 源生产品图（10张 `.png`，2张 `.jpg`）已全部存放于 `public/assets/images/products/`。
3. **商务联系文案**：核心商务信息已完全集成到前端逻辑与 [src/config/site.ts](src/config/site.ts) 配置文件中：
   * **联系人 (Contact)**: Eliane
   * **电话/WhatsApp**: +86 199 8201 2846
   * **邮箱 (Email)**: Eliane@fsbox.com
   * **商务地址**: No. 32, Ganjiao Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong, China (甘蕉工业区32号)
   * **主打市场**: 中东（Middle East）与欧洲（Europe）

---

## 🚀 第一步：本地一键初始化与 GitHub 推送
我们在项目根目录内置了两个 **一键式部署脚本**。它们会自动检测您的运行环境（检测 `git` 和 `gh` 客户端），自动初始化本地仓库并完成首次提交，进而帮您在 GitHub 上建仓并推送。

### 选项 A：Windows 环境（双击运行）
- **脚本名称**: `deploy.bat`
- **运行方式**: 直接双击项目根目录下的 `deploy.bat`。
- **环境检测机制**: 
  - 自动检测本地是否安装 `git`。若无，将友好提示并提供官方下载链接 [https://git-scm.com/](https://git-scm.com/)。
  - 自动检测是否安装 `gh` (GitHub CLI)。若安装了，可选择全自动命令行建仓；若未安装，脚本将提供手动关联远程 URL 的操作指引。

### 选项 B：macOS / Linux 环境（终端运行）
- **脚本名称**: `deploy.sh`
- **运行方式**: 
  1. 打开终端并进入 `boxin-b2b-site` 目录：`cd /path/to/boxin-b2b-site`
  2. 赋予脚本执行权限：`chmod +x deploy.sh`
  3. 执行脚本：`./deploy.sh`
- **环境检测机制**: 具有同等的 `git` 及 `gh` 客户端环境诊断逻辑，引导您流畅完成仓库创建、关联、提交、推送。

---

## ☁️ 第二步：Vercel 极速云端部署
[Vercel](https://vercel.com) 是 Next.js 官方首选的 Serverless 托管平台，对全球（尤其是中东和欧洲等博新核心市场）拥有极佳的 CDN 访问加速。

1. **注册/登录 Vercel**:
   - 访问 [Vercel 官网](https://vercel.com)，推荐使用您的 **GitHub 账户** 直接授权登录。
2. **导入项目**:
   - 进入 Vercel 控制台，点击 **[Add New...]** 并选择 **[Project]**。
   - 在 Git 导入列表中，找到您刚刚通过脚本推送的 `boxin-b2b-site` 仓库，点击 **[Import]**。
3. **框架与配置**:
   - **Framework Preset**: Vercel 会自动识别并选择 **`Next.js`**，请保持默认。
   - **Root Directory**: 保持为 `./`（项目根目录）。
   - **Build and Output Settings** / **Environment Variables**: 保持默认。无需配置任何额外环境变量（若后续需要配置 Cloudflare R2 密钥，可在 Settings -> Environment Variables 中动态注入）。
4. **一键 Deploy**:
   - 点击 **[Deploy]** 按钮。Vercel 将在 1 分钟内自动完成项目的构建与全球分发。
   - 部署完成后，您会获得一个免费的临时域名，格式如 `boxin-b2b-site.vercel.app`。

---

## 🌐 第三步：Namecheap 自定义域名绑定与 DNS 解析
为彰显博新的企业品牌专业度，必须将 Namecheap 购买的独立域名（例如 `yourdomain.com`）绑定至该独立站。

### 1. 在 Vercel 端添加自定义域名
1. 在 Vercel 的该项目面板中，点击顶部导航栏的 **[Settings]**。
2. 在左侧菜单中选择 **[Domains]**。
3. 在输入框中输入您在 Namecheap 购买的域名（例如 `yourdomain.com` 或带 www 的 `www.yourdomain.com`），然后点击 **[Add]**。
4. 此时 Vercel 会智能识别您的域名配置并给出状态提示：`Invalid Configuration`（因为我们还没去 Namecheap 配置解析，请不要关闭此页面，它提供了必要的解析参数）。

### 2. 在 Namecheap 端配置高级 DNS 解析 (Advanced DNS)
1. 登录 [Namecheap 官网](https://www.namecheap.com/) 并进入您的 **Dashboard**。
2. 找到您购买的域名，点击其右侧的 **[MANAGE]** 按钮。
3. 在管理页面顶部切换至 **[Advanced DNS]** 选项卡。
4. **清除默认记录**（如果有 Namecheap 默认的 Parking Page 或 Redirect 记录，请点击垃圾桶图标将其删除）。
5. **添加以下两条核心解析记录**（根据您在 Vercel 绑定的域名形式配置）：

| 记录类型 (Type) | 主机名 (Host) | 目标值 (Value / IP Address) | TTL / 解析时间 | 说明 (Notes) |
| :--- | :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | Automatic / 30 min | 绑定不带 www 的顶级域名 (yourdomain.com)。指向 Vercel 官方全球 Anycast IP。 |
| **CNAME Record** | `www` | `cname.vercel-dns.com.` | Automatic / 30 min | 绑定带 www 的二级域名 (www.yourdomain.com)。指向 Vercel 的 CNAME 系统。**（注意：末尾有个点 "."）** |

> ⚠️ **重要提示**：在 Namecheap 的 DNS 记录值末尾填写的域名，如 `cname.vercel-dns.com.`，建议包含末尾的半角句点以符合标准 RFC 规范，Namecheap 会在保存时自动处理。

---

## 🌐 第三步（备选）：阿里云域名（Alibaba Cloud DNS）绑定与解析指南

若您使用的是在**阿里云 (Alibaba Cloud)** 购买的域名，而非 Namecheap，请按照本章节指南在阿里云控制台配置 DNS 解析，将其完美指向 Vercel 的全球 Anycast CDN 节点。

### 1. 在 Vercel 端添加自定义域名
1. 在 Vercel 的该项目面板中，点击顶部导航栏的 **[Settings]**。
2. 在左侧菜单中选择 **[Domains]**。
3. 在输入框中输入您在阿里云购买的域名（例如 `yourdomain.com` 或带 www 的 `www.yourdomain.com`），然后点击 **[Add]**。
4. 保持该页面打开，以便获取 Vercel 提供的验证和解析状态提示。

### 2. 在阿里云控制台配置 DNS 解析
1. **登录阿里云控制台**：
   - 访问 [阿里云官网](https://www.aliyun.com/) 并登录您的账号。
2. **进入云解析 DNS**：
   - 在控制台首页左侧导航栏或搜索框中，输入并选择 **“云解析 DNS” (Alibaba Cloud DNS)**。
   - 在域名解析列表中，找到您需要绑定的域名，点击其右侧操作列的 **“解析设置”**。
3. **添加/修改解析记录**：
   - 检查已有的解析记录。如果存在默认的 A 记录、CNAME 记录或默认的跳转记录（如指向阿里云默认页面的解析），请先点击 **“删除”** 或 **“修改”** 它们。
   - 点击 **“添加记录”** 按钮，分别添加以下两条核心解析记录：

| 记录类型 (Type) | 主机记录 (Host) | 解析线路 | 记录值 (Value) | TTL | 说明 (Notes) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | 默认 | `76.76.21.21` | 10分钟/默认 | 绑定顶级域名 (`yourdomain.com`)。指向 Vercel 官方全球 Anycast IP。 |
| **CNAME** | `www` | 默认 | `cname.vercel-dns.com` | 10分钟/默认 | 绑定带 `www` 的二级域名 (`www.yourdomain.com`)。指向 Vercel 的 CNAME 系统。 |

> ⚠️ **重要提示**：
> - 阿里云的 CNAME 记录值末尾**不需要**且**不支持**半角句点 `.`，请直接填写 `cname.vercel-dns.com`。
> - 配置完成后，通常 5~15 分钟内解析就会生效。您可以回到 Vercel 的 Domains 页面，点击 **[Refresh]** 按钮验证解析状态。一旦显示绿色的 `Active` 标志，即代表域名绑定成功。

---

## 🔒 第四步：HTTPS 安全证书与上线验证
1. **SSL 证书自动生成**：
   - 只要您在 Namecheap 上的 DNS 解析记录生效，Vercel 会自动为您的博新独立站申请并部署 **Let's Encrypt 免费 SSL 证书**。这个过程是全自动的，无需您购买或手动上传任何证书文件。
2. **DNS 生效时间**：
   - Namecheap 的 DNS 刷新速度极快，通常 5~15 分钟即可全球生效（最长不超过 24 小时）。
3. **首屏访问测试**：
   - DNS 生效后，在浏览器中输入 `https://yourdomain.com` 即可打开经过 HTTPS 强加密保护的博新外贸 B2B 独立站。
   - 请在手机和电脑双端进行测试，首屏将呈现博新完美的 Edelstahl（不锈钢）商用环保垃圾桶系列。

---

## 🛠️ 运维与后续更新
当您以后需要修改网站内容（例如 Eliane 增加了新的联系电话，或要更新产品图片）：
1. 在本地修改代码或配置文件 `src/config/site.ts`。
2. 使用常规的 Git 提交并推送：
   ```bash
   git add .
   git commit -m "update: contact information"
   git push origin main
   ```
3. Vercel 会通过 Webhook 自动监听您的 GitHub `main` 分支的提交。**一旦检测到新提交，Vercel 会在后台自动完成热更新和重新部署，整个过程完全不需要人工干预**，网站将实现无缝平滑切换。
