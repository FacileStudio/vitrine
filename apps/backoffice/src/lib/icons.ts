import { icons } from '$lib/muse';

// muse draws Solar and MDI glyphs inside SideBar and MobileNav with no prop to swap them, so the
// shared map is repointed once at startup; the lucide names render through iconify-icon
Object.assign(icons, {
	collapse: 'lucide:panel-left',
	search: 'lucide:search',
	settings: 'lucide:settings',
	arrow: 'lucide:chevron-right',
	folder: 'lucide:folder-kanban',
	usersGroup: 'lucide:users-round',
	mail: 'lucide:mail',
	dashboard: 'lucide:chart-column',
	shield: 'lucide:shield-user',
	paletteMark: 'lucide:palette',
});

export { icons };
