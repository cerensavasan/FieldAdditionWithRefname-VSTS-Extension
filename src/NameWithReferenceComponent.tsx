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

    public render(): JSX.Element {
        console.log("Inside namerefcomponent render");
        return (
            <div>
                <DefaultButton onClick={this._showDialog} text="Open Dialog" />
                <Dialog hidden={this.state.hideDialog}
                        onDismiss={this._closeDialog}
                        dialogContentProps={{
                            type: DialogType.normal,
                            title: "Add a Field with Reference Name",
                            subText: "This field addition allows you to customize the reference name."
                        }}
                        modalProps={{
                            titleAriaId: "myLabelId",
                            subtitleAriaId: "mySubTextId",
                            isBlocking: false,
                            containerClassName: "ms-dialogMainOverride"
                        }}
                >
                    <form>
                    Field Name:<br/>
                    <input type="text" name="name"/><br/>
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