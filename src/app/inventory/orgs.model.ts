import { ProjectModel } from "./project.model";

export class OrgsModel {
    public orgName?: string;
    public description?: string;
    public projects?: Array<ProjectModel>
}