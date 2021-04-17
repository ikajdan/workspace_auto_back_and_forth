var recent_desktop = workspace.currentDesktop;

function switchToDesktop(desktop) {
		current_desktop = workspace.currentDesktop;

		if (desktop >= 1 && desktop <= workspace.desktops) {
				if (desktop !== current_desktop) {
						workspace.currentDesktop = desktop;
				} else {
						workspace.currentDesktop = recent_desktop;
				}
		}

		recent_desktop = current_desktop;
}

if (registerShortcut) {
		registerShortcut('WABAF: Switch to Desktop 1', 'WABAF: Switch to Desktop 1', 'Meta+1',
										 function () { switchToDesktop(1); }
		);
		registerShortcut('WABAF: Switch to Desktop 2', 'WABAF: Switch to Desktop 2', 'Meta+2',
										 function () { switchToDesktop(2); }
		);
		registerShortcut('WABAF: Switch to Desktop 3', 'WABAF: Switch to Desktop 3', 'Meta+3',
										 function () { switchToDesktop(3); }
		);
		registerShortcut('WABAF: Switch to Desktop 4', 'WABAF: Switch to Desktop 4', 'Meta+4',
										 function () { switchToDesktop(4); }
		);
		registerShortcut('WABAF: Switch to Desktop 5', 'WABAF: Switch to Desktop 5', 'Meta+5',
										 function () { switchToDesktop(5); }
		);
		registerShortcut('WABAF: Switch to Desktop 6', 'WABAF: Switch to Desktop 6', 'Meta+6',
										 function () { switchToDesktop(6); }
		);
		registerShortcut('WABAF: Switch to Desktop 7', 'WABAF: Switch to Desktop 7', 'Meta+7',
										 function () { switchToDesktop(7); }
		);
		registerShortcut('WABAF: Switch to Desktop 8', 'WABAF: Switch to Desktop 8', 'Meta+8',
										 function () { switchToDesktop(8); }
		);
		registerShortcut('WABAF: Switch to Desktop 9', 'WABAF: Switch to Desktop 9', 'Meta+9',
										 function () { switchToDesktop(9); }
		);
		registerShortcut('WABAF: Switch to Desktop 10', 'WABAF: Switch to Desktop 10', '',
										 function () { switchToDesktop(10); }
		);
		registerShortcut('WABAF: Switch to Desktop 11', 'WABAF: Switch to Desktop 11', '',
										 function () { switchToDesktop(11); }
		);
		registerShortcut('WABAF: Switch to Desktop 12', 'WABAF: Switch to Desktop 12', '',
										 function () { switchToDesktop(12); }
		);
		registerShortcut('WABAF: Switch to Desktop 13', 'WABAF: Switch to Desktop 13', '',
										 function () { switchToDesktop(13); }
		);
		registerShortcut('WABAF: Switch to Desktop 14', 'WABAF: Switch to Desktop 14', '',
										 function () { switchToDesktop(14); }
		);
		registerShortcut('WABAF: Switch to Desktop 15', 'WABAF: Switch to Desktop 15', '',
										 function () { switchToDesktop(15); }
		);
		registerShortcut('WABAF: Switch to Desktop 16', 'WABAF: Switch to Desktop 16', '',
										 function () { switchToDesktop(16); }
		);
		registerShortcut('WABAF: Switch to Desktop 17', 'WABAF: Switch to Desktop 17', '',
										 function () { switchToDesktop(17); }
		);
		registerShortcut('WABAF: Switch to Desktop 18', 'WABAF: Switch to Desktop 18', '',
										 function () { switchToDesktop(18); }
		);
		registerShortcut('WABAF: Switch to Desktop 19', 'WABAF: Switch to Desktop 19', '',
										 function () { switchToDesktop(19); }
		);
		registerShortcut('WABAF: Switch to Desktop 20', 'WABAF: Switch to Desktop 20', '',
										 function () { switchToDesktop(20); }
		);
}
