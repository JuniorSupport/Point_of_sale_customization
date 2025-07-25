/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { patch } from "@web/core/utils/patch";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
//import { MiPopup } from "../components/mi_popup";
import { usePos } from "@point_of_sale/app/store/pos_hook";


patch(ControlButtons.prototype, {
    
    setup(){
        super.setup();
        this.pos=usePos();
        console.log("POS:", this.pos);
    },

    onClickMiBoton(){

        const porcentaje = 5;

        const order = this.pos.get_order();
        const lines = order.get_orderlines();
        console.log(lines);
        
        for (const line of lines) {
            line.set_discount(porcentaje); 
        }
        
    }

});