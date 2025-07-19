# -*- coding: utf-8 -*-
{
    'name': "point_of_sale_customization",
    'summary': "Custom module for Odoo POS",
    'description': "",
    'author': "Junior Cañari",
    'website': "https://www.yourcompany.com",
    'category': 'Sales/Point of sale',
    'version': '0.1',
    'depends': ['point_of_sale'],
    'data': [
        # 'security/ir.model.access.csv',
    ],
    'installable':True,
    'application':True,
    'assets':{
        'point_of_sale._assets_pos':[
            'point_of_sale_customization/static/src/**/*.js',
            'point_of_sale_customization/static/src/**/*.xml'
        ]
    }
    
}

