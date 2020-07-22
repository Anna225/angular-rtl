import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Home', icon: 'fas fa-tachometer-alt', class: 'menu-toggle',
        submenu: [
            { path: '/dashboard/main', title: 'Dashboard 1', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard 2', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/dashboard/dashboard3', title: 'Dashboard 3', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '/tables/advance-table', title: 'Advance Table', icon: 'far fa-list-alt', class: '', submenu: []
    },
    {
        path: '/apps/calendar', title: 'Events', icon: 'far fa-calendar', class: '', submenu: []
    },
    {
        path: '', title: 'Email', icon: 'fas fa-mail-bulk', class: 'menu-toggle',
        submenu: [
            { path: '/email/inbox', title: 'Inbox', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/email/compose', title: 'Compose', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/email/read-mail', title: 'Read Email', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Apps', icon: 'fab fa-google-play', class: 'menu-toggle',
        submenu: [
            { path: '/apps/chat', title: 'Chat', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/apps/dragdrop', title: 'Drag & Drop', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/apps/portfolio', title: 'Portfolio', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/apps/contact-list', title: 'Contact List', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/apps/contact-grid', title: 'Contact Grid', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/apps/support', title: 'Support', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Widgets', icon: 'fab fa-pagelines', class: 'menu-toggle',
        submenu: [
            { path: '/widget/chart-widget', title: 'Chart Widget', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/widget/data-widget', title: 'Data Widget', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'User Interface (UI)', icon: 'fas fa-drafting-compass', class: 'menu-toggle',
        submenu: [
            { path: '/ui/alerts', title: 'Alerts', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/animations', title: 'Animations', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/badges', title: 'Badges', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/modal', title: 'Modal', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/buttons', title: 'Buttons', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/collapse', title: 'Collapse', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/dialogs', title: 'Dialogs', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/cards', title: 'Cards', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/labels', title: 'Labels', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/list-group', title: 'List Group', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/media-object', title: 'Media Object', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/notifications', title: 'Notifications', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/preloaders', title: 'Preloaders', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/progressbars', title: 'Progress Bars', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/rangeslider', title: 'Range Sliders', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/tabs', title: 'Tabs', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/waves', title: 'Waves', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/typography', title: 'Typography', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/ui/helper-classes', title: 'Helper Classes', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Forms', icon: 'fab fa-wpforms', class: 'menu-toggle',
        submenu: [
            { path: '/forms/basic', title: 'Basic Form', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/forms/advance', title: 'Advanced Form', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/forms/form-example', title: 'Form Examples', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/forms/form-validation', title: 'Form Validation', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/forms/wizard', title: 'Form Wizard', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/forms/editors', title: 'Editors', icon: '', class: 'ml-menu', submenu: [] },
        ]
    },
    {
        path: '', title: 'Tables', icon: 'fas fa-table', class: 'menu-toggle',
        submenu: [
            { path: '/tables/basic-tables', title: 'Basic Tables', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/data-table', title: 'Datatables', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/export-table', title: 'Export Table', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/child-row-table', title: 'Child Row Table', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/group-table', title: 'Grouping', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/editable-table', title: 'Editable Tables', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/tables/ngx-datatable', title: 'ngx-datatable', icon: '', class: 'ml-menu', submenu: [] },
        ]
    },
    {
        path: '', title: 'Medias', icon: 'far fa-images', class: 'menu-toggle',
        submenu: [
            { path: '/media/gallery', title: 'Image Gallery', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/media/carousel', title: 'Carousel', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Charts', icon: 'fas fa-chart-line', class: 'menu-toggle',
        submenu: [
            { path: '/charts/echart', title: 'Echart', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/morris', title: 'Morris', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/apex', title: 'Apex', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJS', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/ngx-charts', title: 'Ngx-Charts', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/sparkline', title: 'Sparkline', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/charts/knob', title: 'Jquery Knob', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Timeline', icon: 'fab fa-hubspot', class: 'menu-toggle',
        submenu: [
            { path: '/timeline/timeline1', title: 'Timeline 1', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/timeline/timeline2', title: 'Timeline 2', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Icons', icon: 'fas fa-paw', class: 'menu-toggle',
        submenu: [
            { path: '/icons/material', title: 'Material Icons', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/icons/font-awesome', title: 'Font Awesome', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Authentication', icon: 'fas fa-id-card', class: 'menu-toggle',
        submenu: [
            { path: '/authentication/signin', title: 'Sign In', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/authentication/signup', title: 'Sign Up', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/authentication/forgot-password', title: 'Forgot Password', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/authentication/locked', title: 'Locked', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/authentication/page404', title: '404 - Not Found', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/authentication/page500', title: '500 - Server Error', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Extra Pages', icon: 'far fa-file-alt', class: 'menu-toggle',
        submenu: [
            { path: '/extra-pages/profile', title: 'Profile', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/extra-pages/pricing', title: 'Pricing', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/extra-pages/invoice', title: 'Invoice', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/extra-pages/faqs', title: 'Faqs', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/extra-pages/blank', title: 'Blank Page', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Maps', icon: 'fas fa-globe-americas', class: 'menu-toggle',
        submenu: [
            { path: '/maps/google', title: 'Google Map', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/maps/vector', title: 'Vector Map', icon: '', class: 'ml-menu', submenu: [] },
            { path: '/maps/datamap', title: 'Data Map', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },
    {
        path: '', title: 'Multi level', icon: 'fas fa-angle-double-down', class: 'menu-toggle',
        submenu: [
            { path: '#', title: 'First', icon: '', class: 'ml-menu', submenu: [] },
            {
                path: '/', title: 'Second', icon: '', class: 'ml-sub-menu', submenu: [
                    { path: '/', title: 'Second 1', icon: '', class: '', submenu: [] },
                    { path: '/', title: 'Second 2', icon: '', class: '', submenu: [] }

                ]
            },
            { path: '#', title: 'Third', icon: '', class: 'ml-menu', submenu: [] }
        ]
    },

];

