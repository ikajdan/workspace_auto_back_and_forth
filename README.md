# Workspace Auto Back and Forth

Simple KWin addon (inspired by [i3wm option](https://i3wm.org/docs/userguide.html#workspace_auto_back_and_forth) with the same name) that enables user to switch workspaces back and forth using the same button.

## Installation

1. Clone the repository
2. `cd workspace-auto-back-and-forth`
3. `plasmapkg2 --type kwinscript -i .`

## Configuration

This script has no configuration page. Just install it and assign desired shortcuts in _Settings_ → _Shortcuts_ → _KWin_. Entries that belong to this script start with "WABF" keyword.

## Usage

Still doesn't understand how does it work?

Let's assume that there are nine virtual desktops and you have assigned `Meta+1..9` to switch between them. Currently, **Desktop 1** is focused. Upon pressing `Meta+4`, it will bring you to the **Desktop 4**. Now when you will press `Meta+4` again, it will switch back to **Desktop 1**. That's all.

## License

    Workspace Auto Back and Forth – A KWin script
    Copyright (C) 2021 Ignacy Kajdan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
