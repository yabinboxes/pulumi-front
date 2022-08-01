import { ServiceModel } from "./service.model";

export class ProjectModel {
    public description?: string;
    public projectName?: string;
    public services?: Array<ServiceModel>
}