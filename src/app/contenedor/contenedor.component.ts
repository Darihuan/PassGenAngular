import { Component, OnInit } from '@angular/core';
import {FormService} from './form.service';
import {Especifications} from './especifications';
import {Password} from './password';
import{ClipboardService} from 'ngx-clipboard';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls:['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
    password:string=" "
    resultado:Password=new Password();
    especificaciones:Especifications=new Especifications();


  constructor(private service:FormService,private portapapeles:ClipboardService) { }

  ngOnInit(): void {
  }

  generar():void{
    this.service.generatepassword(this.especificaciones).subscribe(peticion=>this.password=peticion.pass);


  }
  copiarpass():void{
    this.portapapeles.copyFromContent(this.password);
    swal.fire('Done!','Your pass has been copied in the clipboard','success');
  }




}
