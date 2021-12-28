import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.scss']
})
export class DialogoConfirmacionComponent implements OnInit {

   

  constructor(public dialogo: MatDialogRef<DialogoConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: any,
    @Inject(MAT_DIALOG_DATA) public EsUpdate: boolean,
    private formBuilder: FormBuilder,
    ) { }

  
    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
  ngOnInit(): void {
    console.log(this.mensaje.EsUpdate)
  
    
  }

}
