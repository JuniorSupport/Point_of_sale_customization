
/** @odoo-module */
import { _t } from "@web/core/l10n/translation";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { patch } from "@web/core/utils/patch";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
patch(ControlButtons.prototype, {
    onClickMessage() {
        this.dialog.add(ConfirmationDialog, {
            body: _t("Hola desde OWL"),
            confirmLabel: _t("Aceptar"),
        });
    },
});
