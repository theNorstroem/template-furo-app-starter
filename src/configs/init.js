// -- initialize application env, theme, api

import { Init, i18n, Iconset, Env } from '@furo/framework/furo.js';

// Attention: Styling is defined in main-stage
import { FuroBaseIcons } from '@furo/icon/iconsets/baseIcons.js';
import { MapsIcons } from '@furo/icon/iconsets/mapsIcons.js';
import { PlacesIcons } from '@furo/icon/iconsets/placesIcons.js';
import { CommunicationIcons } from '@furo/icon/iconsets/communicationIcons.js';
import { NotificationIcons } from '@furo/icon/iconsets/notificationIcons.js';
import { AvIcons } from '@furo/icon/iconsets/avIcons.js';
import { DeviceIcons } from '@furo/icon/iconsets/deviceIcons.js';
import { EditorIcons } from '@furo/icon/iconsets/editorIcons.js';
import { SocialIcons } from '@furo/icon/iconsets/socialIcons.js';
import { HardwareIcons } from '@furo/icon/iconsets/hardwareIcons.js';
import { ImageIcons } from '@furo/icon/iconsets/imageIcons.js';

// Private iconset
import { ExampleCustomIconset } from './iconset.js';

/**
 * Use the installed spec if you finaly have a seperate spec project (recomended)
 */
// import {Services, Types} from "/node_modules/YOURspecs/build/data_environment.js"
import { Services, Types } from './data_environment.js';

import './my_theme.js';

// -- register generated panels
// import { panelRegistry } from '@furo/route/lib/panelRegistry.js';
import '../generated_components/registry.js';

// -- register resource bundle i18n
import { Translations } from './translations.js';
// register the available types (only needed if you work with @furo/data... components  )
Init.registerApiServices(Services);
Init.registerApiTypes(Types);

/**
 * register the API prefix based on the APPROOT.
 * This information is used for furo-deep-link and furo-reverse-deep-link to resolve the api address.
 *
 * We use /api here, because we do not have a dedicated host like api.xxx.com for the api services
 * @type {string}
 */
// Env.api.prefix = `${window.APPROOT}/api`;

// -- Attention: Styling is defined in main-stage, this is theming

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
