import { Component, Injectable, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

import { ApiService } from "../../servicios/api.service";
import { Whisky } from "../../modelos/whisky"
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../componentes/dialogo-confirmacion/dialogo-confirmacion.component";

import { FormGroup, FormControl, Validators, FormBuilder } 
  from '@angular/forms';
    
  @Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-allwhisky',
  templateUrl: './allwhisky.component.html',
  styleUrls: ['./allwhisky.component.scss']
})
export class AllwhiskyComponent implements OnInit, AfterViewInit {

  searchTextWhisky = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator
    ;
  filterWhisky: Whisky[] = []
  displayedColumns: string[] = ['demo-position',
    'demo-name',
    'demo-metacritic',
    'demo-stdev',
    'demo-hastac',
    'demo-cost',
    'demo-classWhisky',
    'demo-superCluster',
    'demo-cluster',
  
    'demo-country',
    'demo-type',
    'details',
    'update',
    'delete'

  ];
 
  ARRAYELEMENT: Whisky[] = []
  /* whisky2: Whisky = new Whisky( '',0, 0, 0, '', '','','','', '');*/
 
  clickedRows = new Set<Whisky>();
  dataSource = new MatTableDataSource<Whisky>();
/*
   form = new FormGroup({
            Namewhisky: new FormControl("", Validators.required),
     metacritic: new FormControl("", Validators.required),
     stdev: new FormControl("", Validators.required),
     hastac: new FormControl("", Validators.required),
     cost: new FormControl("", Validators.required),
     classWhisky: new FormControl("", Validators.required),
     superCluster: new FormControl("", Validators.required),
     cluster: new FormControl("", Validators.required),
     country: new FormControl("", Validators.required),
     type: new FormControl("", Validators.required)
            
    });*/
  constructor(private apiservice: ApiService, public dialogo: MatDialog) {
   
  }

  ngOnInit(): void {


    this.GETALL()
    
    /*this.apiservice.getWhiskey().subscribe(whiskyApi => (this.whisky2 = new Whisky(
      whiskyApi.Whisky,whiskyApi.MetaCritic,whiskyApi.STDEV,whiskyApi.hastac,whiskyApi.Cost,whiskyApi.Class,whiskyApi.SuperCluster,whiskyApi.Cluster,whiskyApi.Country,whiskyApi.Type
      


    )));*/
    /*
    this.apiservice
      .getWhiskey()
      .subscribe((whiskyApi) => {
        console.log(whiskyApi)
        this.ARRAYELEMENT = whiskyApi
         this.dataSource= new MatTableDataSource<Whisky>(this.ARRAYELEMENT);
      });
      console.log(this.clickedRows)*/
  }


  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator)
    console.log(this.paginator)
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  handleInput(event: Event) {
    console.log((event.target as HTMLInputElement).value)
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  
 addRow() {
    const newRow: Whisky = new Whisky(     
      0,"test", 2, 1, 2, "&&&","elemental", "elemental", "elemental", "elemental", "elemental")
      
   this.dataSource.data = [newRow, ...this.dataSource.data];
   
      this.apiservice
      .addWhisky(newRow)
      .subscribe((whiskyApi) => {
        console.log(whiskyApi)
       

    
      });
    
    
 }
  
  Updateelement(WhiskyUpdate: Whisky) {

      this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: {
         mensaje: WhiskyUpdate,
          EsUpdate:true
        }
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
  
       
            this.GETALL();


        } else {
          
        }
      });
  }
  
  
  mostrarDialogo(WhiskyDelete: Whisky): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: WhiskyDelete
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
  
           this.apiservice.deleteWhisky(WhiskyDelete.id).subscribe(() => {
             this.dataSource.data = this.dataSource.data.filter((localid: Whisky) => (localid.id !== WhiskyDelete.id)

               
             );
    });

        } else {
          
        }
      });
  }


  //FORM
/*
  onSubmit() {
        const newRow: Whisky = new Whisky(     
          0, this.form.value.Namewhisky,
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

      
    this.dataSource.data = [newRow, ...this.dataSource.data];
    console.log(this.dataSource.data.length)
   
      this.apiservice
      .addWhisky(newRow)
      .subscribe((whiskyApi) => {
        console.log(whiskyApi)
       
        this.GETALL()
    
      });
        console.log("reactive form submitted");
  }*/
  

      GETALL(){
    this.apiservice
      .getWhiskey()
      .subscribe((whiskyApi) => {
        console.log(whiskyApi)
        this.ARRAYELEMENT = whiskyApi
        this.filterWhisky = whiskyApi
        this.dataSource.data = this.ARRAYELEMENT;
        this.dataSource.paginator = this.paginator;

        console.log(this.dataSource.paginator)
        console.log(this.paginator)
      });
    }
}