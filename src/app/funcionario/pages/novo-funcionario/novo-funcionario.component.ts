import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

/*name: string= '';
email: string= '';
foto: string= '';
*/


@ViewChild('fileInput')
fileInput!: ElementRef;


funcionario:FormGroup= this.fb.group({
  nome: ['' ,[Validators.required]],
  email: ['',[Validators.required,Validators.email]],
  foto: ['',[Validators.required]]
})

  constructor(
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {}

  submit(): void {
    this.snack.open('Cadastro realizado com sucesso', 'OK', {duration: 3000});
  }

  ngOnInit(): void {
  }

selectImage(): void {
  this.fileInput.nativeElement.click();
}

}
