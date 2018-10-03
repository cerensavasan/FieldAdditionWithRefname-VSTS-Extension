import * as React from "react";
import * as ReactDOM from "react-dom";
import { NameWithReferenceComponent } from "./NameWithReferenceComponent";

class App extends React.Component {
    public constructor(props: {}, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        console.log("Inside app component render");
        return (
            <div className="hub-view">
                Inside App.tsx
                <p>Hi</p>
                <NameWithReferenceComponent></NameWithReferenceComponent>
            </div>
        );
    }
}


export function init() {
    ReactDOM.render(<App />, document.getElementById("react-container"));
}
