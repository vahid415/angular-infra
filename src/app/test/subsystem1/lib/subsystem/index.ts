import { Subsystem } from '@app/ng-infra';
import faIRDict from './dictionaries/dictionary.fa-ir';
import enUSDict from './dictionaries/dictionary.en-us';
import menuItems from './menu-items';
import { environment } from 'src/environments/environment';

const subsystem = new Subsystem();
subsystem.id = 'NG_SUBSYSTEM_1';
subsystem.icon = 'dsf';
subsystem.titleKey = 'NG_SUBSYSTEM_1';
subsystem.menuItems = menuItems;
subsystem.dictionaries = [faIRDict, enUSDict];
subsystem.environment = environment;
export default subsystem;
