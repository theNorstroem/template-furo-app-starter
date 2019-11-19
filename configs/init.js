// -- initialize application env, theme, api

import { Init, i18n, Iconset, Theme, Env } from '@furo/framework/furo.js';

// Attention: Styling is defined in main-stage
import { FuroBaseIcons } from '@furo/layout/iconsets/baseIcons.js';
import { MapsIcons } from '@furo/layout/iconsets/mapsIcons.js';
import { PlacesIcons } from '@furo/layout/iconsets/placesIcons.js';
import { CommunicationIcons } from '@furo/layout/iconsets/communicationIcons.js';
import { NotificationIcons } from '@furo/layout/iconsets/notificationIcons.js';
import { AvIcons } from '@furo/layout/iconsets/avIcons.js';
import { DeviceIcons } from '@furo/layout/iconsets/deviceIcons.js';
import { EditorIcons } from '@furo/layout/iconsets/editorIcons.js';
import { SocialIcons } from '@furo/layout/iconsets/socialIcons.js';
import { HardwareIcons } from '@furo/layout/iconsets/hardwareIcons.js';
import { ImageIcons } from '@furo/layout/iconsets/imageIcons.js';

// Private iconset
import { ExampleCustomIconset } from './iconset.js';

/**
 * Use the installed spec if you finaly have a seperate spec project (recomended)
 */
// import {Services, Types} from "/node_modules/YOURspecs/build/data_environment.js"
import { Services, Types } from '../_specbuild/data_environment.js';

import { MyThemeset } from './my_theme.js';

// -- register resource bundle i18n
import { Translations } from './translations.js';
// register the available types (only needed if you work with @furo/data... components  )
Init.registerApiServices(Services);
Init.registerApiTypes(Types);

// -- Attention: Styling is defined in main-stage, this is themeing
Theme.registerThemeset(MyThemeset);
i18n.registerResBundle(Translations);

// Translate messages in specs
Init.translateStaticTypeMessages(Env.locale);

// Privat icons
Iconset.registerIconset('myapp', ExampleCustomIconset);
Iconset.registerIconset('default', FuroBaseIcons);
Iconset.registerIconset('av', AvIcons);
Iconset.registerIconset('communication', CommunicationIcons);
Iconset.registerIconset('device', DeviceIcons);
Iconset.registerIconset('editor', EditorIcons);
Iconset.registerIconset('social', SocialIcons);
Iconset.registerIconset('places', PlacesIcons);
Iconset.registerIconset('notification', NotificationIcons);
Iconset.registerIconset('map', MapsIcons);
Iconset.registerIconset('hardware', HardwareIcons);
Iconset.registerIconset('image', ImageIcons);
