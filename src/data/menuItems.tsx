import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },  
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertsScreen'
    }, 
    {
        name: 'TextImputs',
        icon: 'document-text-outline',
        component: 'TextImputScreen'
    },
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Section list',
        icon: 'list-outline',
        component: 'CustomSectionListScreen'
    },
    {
        name: 'Modal screen',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite scroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    }
]