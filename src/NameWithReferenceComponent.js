var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "react", "react-dom", "OfficeFabric/Button", "OfficeFabric/Dialog"], function (require, exports, React, ReactDOM, Button_1, Dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NameWithReferenceComponent = /** @class */ (function (_super) {
        __extends(NameWithReferenceComponent, _super);
        function NameWithReferenceComponent(props) {
            var _this = _super.call(this, props) || this;
            _this._showDialog = function () {
                _this.setState({ hideDialog: false });
            };
            _this._closeDialog = function () {
                _this.setState({ hideDialog: true });
            };
            _this.state = {
                hideDialog: true
            };
            return _this;
        }
        NameWithReferenceComponent.prototype.render = function () {
            console.log("Inside namerefcomponent render");
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { onClick: this._showDialog, text: "Open Dialog" }),
                React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                        type: Dialog_1.DialogType.normal,
                        title: "Add a Field with Reference Name",
                        subText: "This field addition allows you to customize the reference name."
                    }, modalProps: {
                        titleAriaId: "myLabelId",
                        subtitleAriaId: "mySubTextId",
                        isBlocking: false,
                        containerClassName: "ms-dialogMainOverride"
                    } },
                    React.createElement("form", null,
                        "Field Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", name: "name" }),
                        React.createElement("br", null),
                        "Field Reference Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", name: "refname" })),
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
        };
        return NameWithReferenceComponent;
    }(React.Component));
    exports.NameWithReferenceComponent = NameWithReferenceComponent;
    function init() {
        console.log("Inside namerefcomponent");
        ReactDOM.render(React.createElement(NameWithReferenceComponent, null), document.getElementById("main"));
    }
    exports.init = init;
});
//  TODO: edit this target to match the component i need 
//  VSS.register("work-projectoverview-process-component-section", ProjectOverviewProcessSectionComponent);
