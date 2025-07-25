
/** @odoo-module */
import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { usePos } from "@point_of_sale/app/store/pos_hook";
patch(ControlButtons.prototype, {

    setup(){
        super.setup();
        this.pos=usePos();

    },

    onClickMessage(){
        const order = this.pos.get_order();
        console.log(Object.keys(order));
        console.log(Object.getOwnPropertyNames(order));
    /*    console.log("============================")
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(order.get_orderlines()[0].get_product())));*/

        const orderLines = order.get_orderlines();
        
        orderLines.forEach(element => {

            const products =  element.get_product();

           console.log(products.display_name);
           console.log(products.get_price());
           console.log(products.product_tmpl_id);
           console.log(products.description_sale);
            
        });
     //   console.log(Object.keys(order.get_orderlines()[0].get_product()));    
        
    }
});
