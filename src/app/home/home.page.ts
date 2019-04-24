<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { Aluno } from '../modelos/Alunos';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
=======
import { Component, OnInit } from "@angular/core";
import { LoadingController, AlertController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { Aluno } from "../modelos/Alunos";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
>>>>>>> a287f9e28019ae17886a19d64109d2f8e49a45f4
})
export class HomePage implements OnInit {
  public alunos: Aluno[];

  constructor(private loading: LoadingController,
              private alert: AlertController,
<<<<<<< HEAD
              private alunosService: AlunosService,
              private navCtrl: NavController) {}

  async ngOnInit() {
    const loading = await this.loading.create({
      message: 'Espere o carregar dos alunos ...'
=======
              private alunosService: AlunosService) {}

  async ngOnInit() {
    const loading = await this.loading.create({
      message: 'Espere o carregar os carros ...'
>>>>>>> a287f9e28019ae17886a19d64109d2f8e49a45f4
    });
    await loading.present();


<<<<<<< HEAD
    this.alunosService.listar().subscribe((aluno) => {
        this.alunos = aluno;
      },
      async (err: HttpErrorResponse) => {
        console.log('Deu erro' + err.status);
=======
    this.alunosService.listar().subscribe((alunos) => {
        this.alunos = alunos;
      },
      async (err: HttpErrorResponse) => {
        console.log('Deu erro' + err.status)
>>>>>>> a287f9e28019ae17886a19d64109d2f8e49a45f4
        const al = await this.alert.create({
          header: 'Erro!',
          message: 'Erro ao carregar os alunos.',
          buttons: [{text: 'OK!'}]
        });

        await al.present();
      }).add(
        () => {
<<<<<<< HEAD
        loading.dismiss();
      });
  }

  selecionaAluno(aluno: Aluno) {
    console.log(`Aluno selecionado: ${aluno.nome}`);

    let extras: NavigationExtras = {
      queryParams: {
        alunoSelecionado: JSON.stringify(aluno)
      }
    };
    this.navCtrl.navigateForward(['escolha'], extras);
  }

  avancaCadastro(aluno: Aluno){
    this.navCtrl.navigateForward(['cadastro']);
=======
        loading.dismiss()
      }
      )
>>>>>>> a287f9e28019ae17886a19d64109d2f8e49a45f4
  }
}
