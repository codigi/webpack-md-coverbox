var $mdDialog = require("webpack-mddialog-bootstrap");

var coverBoxShown = false;

module.exports = {
    show: function(message) {
        if(!coverBoxShown) {
            /* let's open a new dialog */
            $mdDialog.show($mdDialog.alert({
                template: '<md-dialog layout="center center" layout-padding><md-dialog-content>'+message+'</md-dialog-content></md-dialog>',
                clickOutsideToClose: false,
                escapeToClose: false,
                skipHide: true
            })).finally(function(){
                coverBoxShown=false;
            });
            coverBoxShown = true;
        } else {
            /* TODO: Update the message */
        }
    },

    hide: function() {
        if(!coverBoxShown) {
            /* no message and no open dialog - just exit */
            return;
        } else {
            /* there was open dialog, let's close it */
            $mdDialog.hide();
        }
    }
};
