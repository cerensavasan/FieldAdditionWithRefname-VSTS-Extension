import * as ProcessRestClient from "TFS/WorkItemTracking/ProcessRestClient";
import * as ProcessContracts from "TFS/WorkItemTracking/ProcessContracts"; 
import { Action } from "VSS/Flux/Action";
import { getCollectionService } from "VSS/Service";

export interface IWorkItemTypeAllFieldsDataLoadedPayload {
    processId: string;
    witRefName: string;
    witFieldModels: ProcessContracts.FieldModel[];
}

export var workItemTypeAllFieldsLoadedAction = new Action<IWorkItemTypeAllFieldsDataLoadedPayload>();

export module NameWithReferenceAdd  {

    export function beginAddFieldToWorkItemType(field: ProcessContracts.AddProcessWorkItemTypeFieldRequest, processId: string, witRefName: string): IPromise<ProcessContracts.ProcessWorkItemTypeField> {
        return ProcessRestClient.getClient();
        console.log("Got client new custom field.");
    }
}