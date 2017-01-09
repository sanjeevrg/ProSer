
'use strict';

Ext.define('ProSer.view.Templates', {
  singleton: true,
  getItemGridTpl: function() {
    if (!this.itemGridTpl) {
      this.itemGridTpl = new Ext.XTemplate(
        '<div class="item-grid-inner">',
        '<img class="item-grid-img" src="{images.small}"/>',
        '<div class="item-grid-name fade">{name}</div>',
        '<div class="item-grid-uom">{quantity} {uom}</div>',
        '<span class="rupeeCls"></span>',
        '<span class="item-grid-price">{price}</span>',
        '</div>'
      );
    }
    return this.itemGridTpl;
  },
  getServiceListTpl: function() {
    if (!this.serviceListTpl) {
      this.itemGridTpl = new Ext.XTemplate(
        '<div class="item-grid-inner">',
        '<div class="item-grid-name fade">{servicename}</div>',
        '<div class="item-grid-uom">{servicedesc}</div>',
        '</div>'
      ); 
    }
  }
  
});
