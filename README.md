<img src="https://userscript.scratchaddons.cf/images/icon.svg" alt="Scratch Addons logo" align="right" width="128px"></img>

# Welcome to Scratch Addons Userscript's repository!

[![](https://img.shields.io/github/stars/SA-Userscript/ScratchAddons?color=blue&style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/stargazers)
[![](https://img.shields.io/github/forks/SA-Userscript/ScratchAddons?color=blue&style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/network/members)
[![](https://img.shields.io/github/watchers/SA-Userscript/ScratchAddons?color=blue&style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/watchers)
[![](https://img.shields.io/github/issues/SA-Userscript/ScratchAddons?color=green&style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/issues)
[![](https://img.shields.io/github/issues-pr/SA-Userscript/ScratchAddons?color=green&style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/pulls)
[![](https://img.shields.io/github/license/SA-Userscript/ScratchAddons?style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/blob/master/LICENSE) <!-- 2 spaces -->
[![](https://img.shields.io/github/v/release/SA-Userscript/ScratchAddons?style=flat-square&logo=github&logoColor=white&label=version&color=181717)](https://github.com/SA-Userscript/ScratchAddons/releases)
[![](https://img.shields.io/github/downloads/SA-Userscript/ScratchAddons/total?style=flat-square&logo=github&logoColor=white&label=downloads&color=181717)](https://github.com/SA-Userscript/ScratchAddons/releases)
[![](https://img.shields.io/badge/discuss-on_github-181717.svg?style=flat-square)](https://github.com/SA-Userscript/ScratchAddons/discussions)
[![](https://img.shields.io/badge/chat-on_discord-7289da.svg?style=flat-square)](https://discord.gg/R5NBqwMjNc)
[![](https://img.shields.io/badge/website-scratchaddons.com-ff7b26.svg?style=flat-square)](https://scratchaddons.com)

## About

Scratch Addons Userscript is a userscript that has all the features of Scratch Addons' extension. Scratch Addons' mission is to combine all existing Scratch extensions, userscripts and userstyles into a single easy-to-access place, while still letting users choose which ones to enable. Learn more about Scratch Addons [here](https://github.com/ScratchAddons/Scratchaddons#readme)

## Contribute

If you found a bug, or want to suggest new features, please use the [issues tab](https://github.com/SA-Userscript/ScratchAddons/issues). If you want to help with the code or add a new addon, fork this repository, and then create a [pull request](https://github.com/SA-Userscript/ScratchAddons/pulls). Also, please read our [contributing guidelines](https://github.com/SA-Userscript/ScratchAddons/blob/master/CONTRIBUTING.md).

### How to test

#### Project one-time setup

1. Clone the source code

```sh
git clone https://github.com/SA-Userscript/ScratchAddons.git;
cd ScratchAddons;
```

2. [Install Node.JS](https://nodejs.org/en/download/) and `serve`

```sh
npm install serve --global;
```

4. Install a redirector browser extension like [Redirector](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd).
5. Add the following redirect: ![](https://media.discordapp.net/attachments/889246380068077608/896438233217531955/unknown.png?width=675&height=585)
6. Install a userscript manager browser extension like [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

#### Run the server to test

1. Run `npx serve --cors --symlinks` in the terminal.
2. Update [the userscript](https://userscript.scratchaddons.cf/userscript/script.user.js) on your device.

Scratch Addons will now be running as a userscript. You may or may not have to redo those steps depending on which files you have changed.

### How to pull from upstream

This will usually be done by @RedGuy12. You shouldn't need to bother with this.

```sh
git checkout -b pull-from-upstream; # pick any branch name
git pull origin master; # `origin` is https://github.com/ScratchAddons/ScratchAddons.git
# resolve conflicts, if any
npx serve --cors --symlinks;
# test
git add .; # if conflicts or other changes
git commit; # if conflicts or other changes
# write commit message
git push fork pull-from-upstream; # `fork` is your fork; `pull-from-upstream` is the branch name
# create PR to https://github.com/SA-Userscript/ScratchAddons/
```
## License

Scratch Addons is licensed under the terms of the [GNU General Public License v3.0](https://github.com/SA-Userscript/ScratchAddons/blob/master/LICENSE).

Other third-party libraries used are listed on [/libraries/README.md](https://github.com/SA-Userscript/ScratchAddons/tree/master/libraries#readme).
