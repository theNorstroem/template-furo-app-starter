// -- initialize application env, theme, api

import {Init, Iconset} from "@furo/framework/furo.js";

/**
 * Use the installed spec if you finaly have a seperate spec project (recomended)
 */
//import {Services, Types} from "/node_modules/YOURspecs/build/data_environment.js"
import {Services, Types} from "/_specbuild/data_environment.js"

// register the available types (only needed if you work with @furo/data... components  )
Init.registerApiServices(Services);
Init.registerApiTypes(Types);


//Attention: Styling is defined in main-stage
import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
import {MapsIcons} from "@furo/layout/iconsets/mapsIcons";
import {PlacesIcons} from "@furo/layout/iconsets/placesIcons";
import {CommunicationIcons} from "@furo/layout/iconsets/communicationIcons";
import {NotificationIcons} from "@furo/layout/iconsets/notificationIcons";

import {AvIcons} from "@furo/layout/iconsets/avIcons";
import {DeviceIcons} from "@furo/layout/iconsets/deviceIcons";
import {EditorIcons} from "@furo/layout/iconsets/editorIcons";
import {SocialIcons} from "@furo/layout/iconsets/socialIcons";
import {HardwareIcons} from "@furo/layout/iconsets/hardwareIcons";
import {ImageIcons} from "@furo/layout/iconsets/imageIcons";

// Private icons
import {ExampleCustomIconset} from "./iconset"
// Privat icons
Iconset.registerIconset("myapp", ExampleCustomIconset);

Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("communication", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
Iconset.registerIconset("editor", EditorIcons);
Iconset.registerIconset("social", SocialIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("notification", NotificationIcons);
Iconset.registerIconset("map", MapsIcons);
Iconset.registerIconset("hardware", HardwareIcons);
Iconset.registerIconset("image", ImageIcons);
