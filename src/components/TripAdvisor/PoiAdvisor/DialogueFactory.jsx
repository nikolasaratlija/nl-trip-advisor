import React from "react";

import InitDialog from "../assets/dialog/InitDialog.jsx";
import Boijmans from "./assets/poi-dialog/Boijmans.jsx";
import Euromast from "./assets/poi-dialog/Euromast.jsx";
import Stadhuis from "./assets/poi-dialog/Stadhuis.jsx";

class DialogueFactory {
    static build(component) {
        switch (component) {
            case "InitDialog":
                return <InitDialog/>;
            case "Boijmans":
                return <Boijmans/>;
            case "Euromast":
                return <Euromast/>;
            case "Stadhuis":
                return <Stadhuis/>;
            default:
                return undefined;
        }
    }
}

export default DialogueFactory;