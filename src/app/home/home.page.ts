import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { Aluno } from '../modelos/Alunos';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public alunos: Aluno[];

  constructor(private loading: LoadingController,
              private alert: AlertController,
              private alunosService: AlunosService,
              private navCtrl: NavController) {}

  async ngOnInit() {
    const loading = await this.loading.create({
      message: 'Espere o carregar os carros ...'
    });
    await loading.present();


    this.alunosService.listar().subscribe((aluno) => {
        this.alunos = aluno;
      },
      async (err: HttpErrorResponse) => {
        console.log('Deu erro' + err.status);
        const al = await this.alert.create({
          header: 'Erro!',
          message: 'Erro ao carregar os alunos.',
          buttons: [{text: 'OK!'}]
        });

        await al.present();
      }).add(
        () => {
        loading.dismiss();
      }
      );
  }

  selecionarAluno(aluno: Aluno) {
    console.log(`Aluno selecionado: ${aluno.nome}`);


    this.navCtrl.navigateForward('escolha');
  }
}
