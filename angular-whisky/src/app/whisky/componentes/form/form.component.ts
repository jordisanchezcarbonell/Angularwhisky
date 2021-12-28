import { Component, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

import { ApiService } from "../../servicios/api.service";
import { Whisky } from "../../modelos/whisky"
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../componentes/dialogo-confirmacion/dialogo-confirmacion.component";
import { AllwhiskyComponent} from "../../componentes/allwhisky/allwhisky.component"
import { FormGroup, FormControl, Validators, FormBuilder } 
  from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() data: any;


  form = new FormGroup({
     id: new FormControl("", Validators.required),
            whisky: new FormControl("", Validators.required),
     metacritic: new FormControl("", Validators.required),
     stdev: new FormControl("", Validators.required),
     hastac: new FormControl("", Validators.required),
     cost: new FormControl("", Validators.required),
     classWhisky: new FormControl("", Validators.required),
     superCluster: new FormControl("", Validators.required),
     cluster: new FormControl("", Validators.required),
     country: new FormControl("", Validators.required),
     type: new FormControl("", Validators.required)
            
    });
  
  constructor(private apiservice: ApiService,private AllwhiskyComponent: AllwhiskyComponent,) { }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data != null) {
      
      this.form.setValue({
        id:this.data.id,
    whisky: this.data.whisky,
     metacritic: this.data.metacritic,
     stdev: this.data.stdev,
     hastac: this.data.hastac,
     cost: this.data.cost,
     classWhisky: this.data.classWhisky,
     superCluster: this.data.superCluster,
     cluster: this.data.cluster,
     country: this.data.country,
     type: this.data.type
});
  console.log(this.data.id)
      
         
    }
  }
  
  onSubmit() {
   
    if (this.data != null) {
      const newRow: Whisky = new Whisky(
        0, this.form.value.whisky,
        this.form.value.metacritic,
        this.form.value.stdev,
        this.form.value.hastac,
        this.form.value.cost,
        this.form.value.classWhisky,
        this.form.value.superCluster,
        this.form.value.cluster,
        this.form.value.country,
        this.form.value.type,
      )


   
      this.apiservice
        .addWhisky(newRow)
        .subscribe((whiskyApi) => {
          console.log(whiskyApi)
          this.AllwhiskyComponent.GETALL();
     
    
        });
      console.log("reactive form submitted");
    }
    else {
      console.log(this.form.value)
      /*
       this.apiservice
        .updateWhisky(this.form.value)
        .subscribe((whiskyApi) => {
          console.log(whiskyApi)
          this.AllwhiskyComponent.GETALL();
     
    
        });*/
    }
  }
  
  Update() {
    console.log(this.form.value)
    this.apiservice
        .updateWhisky(this.form.value)
        .subscribe((e) => {
          /** */
          this.AllwhiskyComponent.GETALL();
              
                          // <<<---using ()=> syntax
          this.AllwhiskyComponent.dialogo.closeAll();
         window.location.reload();
          console.log(e)
        });
    
  }
}
