import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faAudioDescription } from '@fortawesome/free-solid-svg-icons';
import { InventoryHttpService } from './inventory-http.service';
import { OrgsModel } from './orgs.model';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public orgList : OrgsModel[] = [];
  public prjList : ProjectModel[] = [];
  public isDisabledPrjForm : boolean = true;
  public projectSelected: ProjectModel = new ProjectModel();
  public selectedOrg: OrgsModel = new OrgsModel();


  FormInputs: FormGroup;
  constructor(private _inventoryHttpService: InventoryHttpService) { }

  ngOnInit(): void {
    this.FormInputs = new FormGroup({
      orgName: new FormControl(''),
      projectName: new FormControl('')
    });

    this.updateOrgList();
    
  }

  updateOrgList() {
    this._inventoryHttpService.getInventory().subscribe((response) => {
      let temp:any = response;
      this.orgList = temp; 
     // this.showOrgs = true;
    }, (error) => {
      console.log('error is ', error)
    });
  }

  addOrg(form: FormGroup) {
    
    let myOrg = new OrgsModel();
    
    myOrg.orgName = form.value.orgName;
    myOrg.description = "test";
    myOrg.projects = new Array<ProjectModel>();
    if( this.pushOrgs(myOrg) === true ) {
      //this.orgList.push(myOrg);
      this.updateOrgList();
    }
    
  }

  addProject(form: FormGroup) {
   
    let myProject = new ProjectModel();

    myProject.projectName = form.value.projectName;
    myProject.description = "test";
    if( this.pushPrj(myProject) === true ) {
      //this.prjList.push(myProject);
      this.updateOrgList();
    }
    
  }

  pushOrgs(org: OrgsModel): boolean {
    this._inventoryHttpService.createOrg(org).subscribe((response) => {
      return true;
    }, (error) => {
      console.log('error is ', error)
      return false;
    });

    return true;
  }

  pushPrj(prj: ProjectModel): boolean {
    this._inventoryHttpService.createPrjInOrg(prj, this.selectedOrg).subscribe((response) => {
      return true;
    }, (error) => {
      console.log('error is ', error)
      return false;
    });

    return true;
  }

  removeOrg(index: number) {
    if(index > -1) {
      this.orgList.splice(index,1);
    }
  }

  selectOrg(index: number) {
    if(index > -1) {
      this.selectedOrg = this.orgList[index];
      this.prjList = this.orgList[index].projects;
      this.isDisabledPrjForm = false;
    }
  }

  selectPrj(index: number) {
    if(index > -1) {
      this.projectSelected = this.prjList[index];
    }
  }

  

  removeProject(index:number) {
    if(index > -1) {
      this.prjList.splice(index,1);
    }
  }


}
