<img src="https://sa-userscript-dev.cf/images/icon.svg" alt="Scratch Addons logo" align="right" width="128px"></img>

# Welcome to Scratch Addons Userscript's repository!

[![](https://img.shields.io/github/stars/scratchaddons-community/userscript?color=blue&style=flat-square)](https://github.com/scratchaddons-community/userscript/stargazers)
[![](https://img.shields.io/github/forks/scratchaddons-community/userscript?color=blue&style=flat-square)](https://github.com/scratchaddons-community/userscript/network/members)
[![](https://img.shields.io/github/watchers/scratchaddons-community/userscript?color=blue&style=flat-square)](https://github.com/scratchaddons-community/userscript/watchers)
[![](https://img.shields.io/github/issues/scratchaddons-community/userscript?color=green&style=flat-square)](https://github.com/scratchaddons-community/userscript/issues)
[![](https://img.shields.io/github/issues-pr/scratchaddons-community/userscript?color=green&style=flat-square)](https://github.com/scratchaddons-community/userscript/pulls)
[![](https://img.shields.io/github/license/scratchaddons-community/userscript?style=flat-square)](https://github.com/scratchaddons-community/userscript/blob/userscript/LICENSE) <!-- 2 spaces -->
[![](https://img.shields.io/github/v/userscript/scratchaddons-community/userscript?style=flat-square&logo=github&logoColor=white&label=version&color=181717)](https://github.com/scratchaddons-community/userscript/releases)
[![](https://img.shields.io/github/downloads/scratchaddons-community/userscript/total?style=flat-square&logo=github&logoColor=white&label=downloads&color=181717)](https://github.com/scratchaddons-community/userscript/releases)
[![](https://img.shields.io/badge/discuss-on_github-181717.svg?style=flat-square)](https://github.com/scratchaddons-community/userscript/discussions)
[![](https://img.shields.io/badge/chat-on_discord-7289da.svg?style=flat-square)](https://discord.gg/R5NBqwMjNc)
[![](https://img.shields.io/badge/website-scratchaddons.com-ff7b26.svg?style=flat-square)](https://scratchaddons.com)

## About

Scratch Addons Userscript is a userscript that has most, if not all, of the features of the Scratch Addons extension. Scratch Addons' mission is to combine all existing Scratch extensions, userscripts and userstyles into a single easy-to-access place, while still letting users choose which ones to enable. Learn more about Scratch Addons [here](https://github.com/ScratchAddons/ScratchAddons#readme)

## Contribute

If you found a bug, or want to suggest new features, please use the [issues tab](https://github.com/scratchaddons-community/userscript/issues). If you want to help with the code or add a new addon, fork this repository, and then create a [pull request](https://github.com/scratchaddons-community/userscript/pulls). Also, please read our [contributing guidelines](https://github.com/scratchaddons-community/userscript/blob/userscript/CONTRIBUTING.md).

### Set up

1. Clone the source code

```sh
git clone https://github.com/scratchaddons-community/userscript.git;
cd ScratchAddons;
```

2. [Install Node.JS](https://nodejs.org/en/download/) and `serve`

```sh
npm install serve --global;
```

4. Install a redirector browser extension like [Redirector](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd).
5. Add the following redirect: ![](https://media.discordapp.net/attachments/889246380068077608/896438233217531955/unknown.png?width=675&height=585)
6. Install a userscript manager browser extension like [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

### Testing

1. Run `npx serve --cors;` in the terminal.
2. Update [the userscript](http://scratchaddons-community.github.io/userscript/userscript/script.user.js) on your device.

Scratch Addons will now be running as a userscript. You may or may not have to redo those steps depending on which files you have changed.

## License

Scratch Addons is licensed under the terms of the [GNU General Public License v3.0](https://github.com/scratchaddons-community/userscript/blob/userscript/LICENSE).

Other third-party libraries used are listed on [/libraries/README.md](https://github.com/scratchaddons-community/userscript/tree/userscript/libraries#readme).
