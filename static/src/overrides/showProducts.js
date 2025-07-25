import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { InfoPopup } from "../components/popup_showProducts";
import { makeAwaitable } from "@point_of_sale/app/store/make_awaitable_dialog";
import { patch } from "@web/core/utils/patch";
import { _t } from "@web/core/l10n/translation";
patch(ControlButtons.prototype, {
    async mostrarPopup() {
        const order = this.pos.get_order();
        const payload = await makeAwaitable(this.dialog, InfoPopup, {
            title: _t("Custom Popup!"),
            order: order,
        });
    }
});