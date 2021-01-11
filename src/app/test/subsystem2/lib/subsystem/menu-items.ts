import { MenuItems } from '@navaco/mcb-infra';

export default [{
    code: 200,
    titleKey: 'Subsystem2',
    icon: 'keypad-outline',
    children: [
        {
            code: 201,
            titleKey: 'feature1',
            path: 'subsystem2/usecase1/feature1',
        },
        {
            code: 201,
            titleKey: 'printer-test',
            path: 'subsystem2/printer-test',
        },
        {
            code: 201,
            titleKey: 'zero-test',
            path: 'subsystem2/zero-test',
        },
    ],
}] as MenuItems;
