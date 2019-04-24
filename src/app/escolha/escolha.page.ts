import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../modelos/Alunos';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  aluno: Aluno

  constructor(private navCtrl: NavController,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.aluno = <Aluno>JSON.parse(params['alunoSelecionado']);

      console.log(`O aluno escolhido na pagina foi: ${this.aluno.nome}`);
    });
  }

  avancaCadastro(){
    this.navCtrl.navigateForward(['cadastro']);
  }
}
