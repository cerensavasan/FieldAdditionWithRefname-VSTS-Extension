import * as React from "react";
import * as ReactDOM from "react-dom";
import { PrimaryButton, DefaultButton } from "OfficeFabric/Button";
import { Dialog, DialogType, DialogFooter } from "OfficeFabric/Dialog";

export class NameWithReferenceComponent extends React.Component<{},
    {hideDialog: boolean; }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            hideDialog: true
        };
    }
    /*
    customization: "inherited"
    description: ""
    name: "Potato"
    referenceName: "Custom.Potato"
    required: true
    type: "string"
    url: "https://codedev.ms/cerensav/_apis/work/processes/8883dec4-484a-4ac4-83fc-3a7403ee3df1/behaviors"
    */

    public render(): JSX.Element {
        return (
            <div className="nameComponent">
                <DefaultButton onClick={this._showDialog} text="Open Dialog" />
                <Dialog hidden={this.state.hideDialog}
                        onDismiss={this._closeDialog}
                        dialogContentProps={{
                            type: DialogType.normal,
                            title: "Add a Field with Reference Name",
                            subText: "This field addition allows you to assign the reference name."
                        }}
                        modalProps={{
                            titleAriaId: "createFieldWithRefName-DialogLabelId",
                            subtitleAriaId: "createFieldWithRefName-DialogSubTextId",
                            isBlocking: false,
                            containerClassName: "ms-dialogMainOverride"
                        }}
                >
                    <form>
                    Field Name:<br/>
                    <input type="text" name="name"/><br/>
                    Field Type:<br/>
                    <input type="text" name="type"/><br/>
                    <br/>
                    Field Reference Name:<br/>
                    <input type="text" name="refname"/>
                    </form>
                    <DialogFooter>
                        <PrimaryButton onClick={this._closeDialog} text="Save" />
                        <DefaultButton onClick={this._closeDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private _showDialog = (): void => {
        this.setState({ hideDialog: false });
    }

    private _closeDialog = (): void => {
        this.setState({ hideDialog: true });
    }
}

export function init(): void {
    console.log("Inside namerefcomponent");
    ReactDOM.render(<NameWithReferenceComponent />, document.getElementById("main"));
}

//  TODO: edit this target to match the component i need 
//  VSS.register("work-projectoverview-process-component-section", ProjectOverviewProcessSectionComponent);