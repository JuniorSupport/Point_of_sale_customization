# -*- coding: utf-8 -*-
# from odoo import http


# class PointOfSaleCustomization(http.Controller):
#     @http.route('/point_of_sale_customization/point_of_sale_customization', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/point_of_sale_customization/point_of_sale_customization/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('point_of_sale_customization.listing', {
#             'root': '/point_of_sale_customization/point_of_sale_customization',
#             'objects': http.request.env['point_of_sale_customization.point_of_sale_customization'].search([]),
#         })

#     @http.route('/point_of_sale_customization/point_of_sale_customization/objects/<model("point_of_sale_customization.point_of_sale_customization"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('point_of_sale_customization.object', {
#             'object': obj
#         })

