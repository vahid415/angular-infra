import { Subsystem } from '@app/ng-infra';
import faIRDict from './dictionaries/dictionary.fa-ir';
import enUSDict from './dictionaries/dictionary.en-us';
import menuItems from './menu-items';
import { environment } from 'src/environments/environment';

const subsystem = new Subsystem();
subsystem.id = 'MCB_SUBSYSTEM_2';
subsystem.icon = 'dsf';
subsystem.titleKey = 'MCB_SUBSYSTEM_2';
subsystem.menuItems = menuItems;
subsystem.dictionaries = [faIRDict, enUSDict];
subsystem.environment = environment;
export default subsystem;
