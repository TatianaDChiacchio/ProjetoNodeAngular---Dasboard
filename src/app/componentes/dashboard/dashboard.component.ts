import { DadosService } from './../../servicos/dados.service';
import { Component, OnInit } from '@angular/core';

declare let google: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dados: any

  constructor(private dadosService:DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(result =>{
      this.dados = result
      this.iniciar()
    }

    )
  }

  // essa função iniciar está carregando pra dentro da nossa aplicação todos os pacotes do google gráficos, necessários para a construção dos gráficos
  iniciar(): void{
    google.charts.load('current', {'packages':['corechart']})
    setTimeout(() =>{
      google.charts.setOnLoadCallback(this.exibirGraficos())
    },1000)
  }

  exibirGraficos(){
    this.exibirPieChart()
    this.exibir3dPieChart()
    this.exibirGraficoRosquinha()
    this.exibirGraficoBarra()
    this.exibirGraficoLinha()
  }

  exibirPieChart(): void{
    const grafico = document.getElementById('pie_chart')
    // essa variável chart está instanciando o grafico PieChart
    const chart = new google.visualization.PieChart(grafico)
    // a função draw desenha o gráfica e precisa como parâmetros os dados e as opções de gráficos
    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }

  exibir3dPieChart(): void{
    const grafico = document.getElementById('3d_pie_chart')
    const chart = new google.visualization.PieChart(grafico)

    const opcoes = this.obterOpcoes()

    opcoes['is3D'] = true
    chart.draw(this.obterDataTable(),opcoes)

  }

  exibirGraficoRosquinha(): void{
    const grafico = document.getElementById('graf_rosquinha')
    const chart = new google.visualization.PieChart(grafico)

    const opcoes = this.obterOpcoes()

    opcoes['pieHole'] = 0.4
    chart.draw(this.obterDataTable(),opcoes)

  }

  exibirGraficoBarra(): void{
    const grafico = document.getElementById('graf_barra')

    const chart = new google.visualization.BarChart(grafico)

    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }

  exibirGraficoLinha(): void{
    const grafico = document.getElementById('graf_linha')

    const chart = new google.visualization.LineChart(grafico)

    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }


  obterDataTable(): any{

    const data = new google.visualization.DataTable()

    data.addColumn('string', "Mês")
    data.addColumn('number', "Quantidade")
    data.addRows(this.dados)

    return data
  }

  obterOpcoes(): any{
    return{
      'title': 'Quantidade de camisetas vendidas no semestre',
      'width': 400,
      'height': 300
    }
  }
}
