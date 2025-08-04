<div>
  <p align="center"> 
    <img src="images/portfolio_banner.png" height="150" alt="Portfolio Banner"/>
  </p>

  <h1 align="center">Aaliyah Providence's Developer Portfolio</h1>
  <h3 align="center" style="margin-top:20px;">Showcasing skills, experience, personal projects and source code</h3>

  <!-- Badges -->
  <p align="center">
    <!-- CI/CD Badge -->
    <a href="https://github.com/Sherida101/Portfolio/actions">
      <img alt="CI" src="https://github.com/Sherida101/Portfolio/actions/workflows/deploy-to-gh-pages.yml/badge.svg">
    </a>
    <!-- Test Coverage (using Jest) -->
    <a href="https://coveralls.io/github/Sherida101/Portfolio">
      <img alt="Coverage Status" src="https://coveralls.io/repos/github/Sherida101/Portfolio/badge.svg?branch=main">
    </a>
    <!-- Node.js -->
    <a href="https://nodejs.org/en/blog/release/v16.16.0/"><img alt="NodeJS" src="https://img.shields.io/badge/node-16.16.0-important?style=flat-square" /></a>
    <!-- Npm -->
    <a href="https://www.npmjs.com/package/npm/v/8.15.0"><img alt="NPM" src="https://img.shields.io/badge/npm-8.15.0-blueviolet?style=flat-square" /></a>
    <!-- React.js -->
    <a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/react-61DAFB?style=flat-square" /></a>
    <!-- Prettier -->
    <a href="https://github.com/prettier/prettier"><img alt="Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
    <!-- Maintenance -->
    <a href="https://github.com/Sherida101/Portfolio/commits/main"><img alt="Maintenance" src="https://img.shields.io/badge/maintained-yes-brightgreen?style=flat-square" /></a>
    <!-- Website status -->
    <a href="http://badges.mit-license.org/"><img alt="Status" src="https://img.shields.io/badge/website-live-yellow?style=flat-square" /></a>
    <!-- License -->
    <a href="/LICENSE"><img src="https://img.shields.io/:license-mit-blue.svg?style=flat-square" alt="License" /></a>
  </p>
</div>

## About 👩🏽‍💻

Welcome to my software developer portfolio. This project showcases my experience, personal projects, technical skills and certifications in one interactive site. You can explore a [live demo here](https://sherida101.github.io/Portfolio).

If you’re a developer or student and want to use this as a template for your own portfolio, feel free to **fork or clone** this repository. Instructions for customisation are below. Attribution is appreciated but not required as this is an open-source project licensed under the [MIT License](LICENSE).

## Portfolio Sections 📁

- Portfolio Introduction
- Skills
- Open Source Projects
- Experience
- Certifications
- Education
- Contact

## Tech Stack 🛠️

This portfolio leverages the following technologies and tools:

- React – Frontend JavaScript library for building user interfaces
- GraphQL – Query language for APIs
- Apollo Boost – Simplified setup for integrating GraphQL with React
- Base Web (BaseUI) – Component library by Uber for building accessible UIs
- Styled Components – CSS-in-JS styling for dynamic component styles
- React Reveal – Animation framework for React

## Assets & Visuals 🎨

Visual elements and icons used in this project:

- [UnDraw](https://undraw.co/illustrations) - Open-source illustrations
- [Iconify design](https://icon-sets.iconify.design) - Icon library with multiple icon sets
- [Flaticon](https://www.flaticon.com/) - Free icons for web projects

---

## Getting Started 🚀

> This project is built using `React.js`. You'll need `Node.js` and `npm` installed to run or customise it.

### Clone the repository

```bash
git clone https://github.com/Sherida101/Portfolio.git
cd Portfolio
npm install
npm start
```

This will start the development server and open the portfolio in your default web browser at `http://localhost:3000`.

---

### Customise Your Portfolio ✏️

To personalise this project for yourself, modify the following:

1. `package.json`
   - Change the "name" and "homepage" to reflect your GitHub Pages URL:

   ```json
   "homepage": "https://<your-username>.github.io"
   ```

2. **Personal Details**
   - Update `src/portfolio.js` with your:
     - Name etc. in the `greeting` section.
     - Skills
     - Social media links
     - Experience
     - Education
     - Certifications
     - Contact information

     Example:

     ```javascript
     // Home Page
     const greeting = {
       ...
     };
     // Skills
     const skills = {
       ...

     };
     ...
     ```

3. **Icons**
   - Icons are set using [Iconify design](https://icon-sets.iconify.design/). Some of the icons used are Devicon (devicon), Boxicons (bx) and Simple Icons (simple-icons).

   - Choose an icon, copy the code, and update `fontAwesomeClassName` under `skills` in `portfolio.js`.

4. **GitHub Integration**
   - This portfolio fetches open source project data (Pull requests, Issues, Organisations, Pinned projects etc.) directly from GitHub.
   - Create a GitHub token with `repo` permissions:
     - Go to [GitHub Settings](https://github.com/settings/tokens) and create a new token. See [GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for details.

   - Add your GitHub token and username in `git_data_fetcher.mjs`. It is located in the root directory of the project.

   ```javascript
   const openSource = {
     githubConvertedToken: "your-token",
     githubUserName: "your-username",
   };
   ```

   Run:

   ```bash
   node git_data_fetcher.mjs
   ```

5. Splash Logo (optional)
   - Use your own animated logo in `./src/components/Loader`
     [Figma](https://www.figma.com/) or [Adobe XD](https://adobexdplatform.com/) or [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) or [Inkscape](https://inkscape.org/) can be used to to create a custom logo.

   - **Or** you can disable the splash screen by setting `isSplash: false` in `src/portfolio.js`

   ````javascript
   // Website related settings
   const settings = {
     isSplash: false,
   };
       ```
   ````

---

### Deployment 🌐

This portfolio can be deployed to [GitHub Pages](https://pages.github.com/) for easy sharing.

Follow these steps to deploy to GitHub Pages:

1. **Install gh-pages**:

   ```bash
   npm install gh-pages --save-dev
   ```

   In package.json:

   ```json
   {
     "homepage": "https://<your-username>.github.io"
   }
   ```

   Replace `<your-username>` with your GitHub username.

2. **Add Deployment Scripts**:

   In your `package.json`, add the following scripts:

   ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -b gh-pages -d build"
     }
   ```

   > **Note:** You will notice that `NODE_OPTIONS=--openssl-legacy-provider` is used in the `start` and `build` scripts.
   >
   > This is necessary for compatibility with certain Node.js versions because the current Node.js version uses OpenSSL 3.0, which has stricter defaults that can break some older packages relying on legacy crypto algorithms.
   >
   > If you encounter issues, you can add it to your scripts like this:

   ```json
   "scripts": {
     "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
     "build": "NODE_OPTIONS=--openssl-legacy-provider react-scripts build"
   }

   ```

3. **Deploy Your Portfolio to GitHub Pages**:

   ```bash
   git add .
   git commit -m "Deploying to GitHub Pages"
   git push origin gh-pages
   npm run deploy
   ```

   This will build the project and push it to the `gh-pages` branch of your repository.

> `npm run deploy` uses the `gh-pages` Node.js package. That package pushes the contents of the build directory to the gh-pages branch of the repository.
> Make sure you have set up your repository to use the `gh-pages` branch for GitHub Pages. If not, install the `gh-pages` package globally:

```bash
npm install -g gh-pages
```

> **Note:** If you are using a different branch for deployment, adjust the `-b` flag accordingly in the deploy script.

Verify that the `gh-pages` branch is enabled for the repository. You can check this on GitHub via Repository Settings > Pages. Ensure the source is set to the `gh-pages` branch.

> GitHub Pages can be configured (via repository settings) to serve content directly from the gh-pages branch.

4. **Access Your Portfolio**:

   After deployment, your portfolio will be available at:

   ```
   https://<your-username>.github.io/Portfolio
   ```

---

## Themes 🎨

This portfolio supports multiple themes to match your style. The default theme is `blueTheme`, but you can choose from `greenTheme`, `purpleTheme` or `redTheme` or create your own.

Themes can be customised in src/theme.js. Set your preferred theme in:

```javascript
import { blueTheme } from "./theme";
export const chosenTheme = blueTheme;
```

## Resources & Tips

- How to Check Latest Versions:
  - Use the GitHub Marketplace:
    - https://github.com/marketplace/actions/setup-node-js-environment
    - https://github.com/marketplace/actions/checkout
  - **Or** use the command line:
    ```bash
    gh actions list
    ```
  ***
- To kill a process running on a specific port (e.g., 3000):

  ```bash
   kill -9 $(lsof -t -i :3000 || echo 0)
  ```

- Check React scripts version which is in `package.json`:

  ```bash
  npm list react-scripts
  ```

- To clean the project

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Developer 👩🏽‍💻

<table> <tr> <td align="center"> <a href="https://Sherida101.github.io/"> <img src="https://avatars.githubusercontent.com/u/32401854?v=4" width="100px;" alt="Aaliyah Providence"/> <br /><sub><b>Aaliyah Providence</b></sub> </a> <br/> 💻 📖 🎨 🚧 🤔 </td> </tr> </table>

---

## Acknowledgments 🙌

Adapted in part from [Ashutosh Hathidara's Master Portfolio Project](https://github.com/ashutosh1919/masterPortfolio)
