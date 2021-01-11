import { MenuItems } from '@navaco/mcb-infra';

export default [{
  code: 100,
  titleKey: 'Subsystem1',
  icon: 'keypad-outline',
  children: [
    {
      code: 101,
      titleKey: 'تست فرم 1',
      path: 'subsystem1/usecase1/feature1',
    },
    {
      code: 102,
      titleKey: 'lookup2 Test',
      path: 'subsystem1/lookup2-test',
    },
    {
      code: 102,
      titleKey: 'file-upload',
      path: 'subsystem1/file-upload',
    },
    {
      code: 102,
      titleKey: 'master-form',
      path: 'subsystem1/master-form',
    },
  ],
}] as MenuItems;
