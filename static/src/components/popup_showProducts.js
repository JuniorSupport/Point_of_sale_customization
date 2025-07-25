/** @odoo-module */
import { Dialog } from "@web/core/dialog/dialog";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Component, useState } from "@odoo/owl";
export class InfoPopup extends Component {
    static template = "point_of_sale_customization.poup_showProducts";
    static components = { Dialog };

    static props = {
        close: Function,
        title: { type: String, optional: true },
        order: Object,
        getPayload:Function,
    };

   async setup() {

        this.pos = usePos();

        const partner = this.props.order.get_partner?.() || {}; 
        
        this.state = useState({
            customer: partner.name ?? "", 
            notes: this.props.order.general_note || "",
            product: [],
        });

        const domain = [['partner_id', '=', partner.id]]; 
        try {
            const orders = await this.pos.data.orm.call(
                "pos.order",        
                "search_read",     
                [],                
                {
                    domain: domain,             
                    fields: ['name', 'amount_total','pos_reference']             
                }
            );

            this.state.product = orders;
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    }
    async confirm() {
        this.props.getPayload(this.state);
        this.props.close();
    }



}