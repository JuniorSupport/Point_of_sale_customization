import { Component, useState, xml } from "@odoo/owl";
import {Dialog} from "@web/core/dialog/dialog";
import { usePos } from "@point_of_sale/app/store/pos_hook";


export class MiPopup extends Component {

  //  static template = "pos_custom.SimplePopup";
    static components = { Dialog };
    static props = {
        close: Function,
        title: { type: String, optional: true },
    };

    setup() {
        this.state = useState({ porcentaje: 0 });
        this.pos = usePos();
    }

    aplicarDescuento() {
     /*   const porcentaje = parseFloat(this.state.porcentaje);
        if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
            alert("Porcentaje inválido. Debe estar entre 0 y 100.");
            return;
        }*/

        const porcentaje=5;

        const order = this.pos.get_order();
        console.log(order);
        const lines = order.get_orderlines();

        for (const line of lines) {
            line.set_discount(porcentaje); 

        this.props.close();
        }
    }

    closePopup() {
        this.props.close();
    }
    
}