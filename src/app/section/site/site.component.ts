import { Component, OnInit } from '@angular/core';
import { Site } from './site.model';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public title: string = "Projet";

  public sites: Array<Site> = [
    new Site(
      'Site de présentation',
      './assets/images/logos/taxi-moto.jpg',
      'https://site-en-node.herokuapp.com/',
      'Site de Présentation',
      [
        'Intégration HTML5 / CSS3',
        'Intégration Mobile-first',
        'JavaScript Natif + jQuery',
        'Formulaire de contact (PHP 5 + JavaScript)',
        'Optimisation du référencement naturel SEO'
      ]
    ),
    new Site(
      'Taxi-Moto-Urgent',
      './assets/images/logos/taxi-moto.jpg',
      'http://www.taxi-moto-urgent.com/',
      'Création et intégration d\' un site de Réservation de Taxi moto',
      [
        'Intégration HTML5 / CSS3',
        'Intégration Mobile-first',
        'JavaScript Natif + jQuery',
        'Formulaire de contact (PHP 5 + JavaScript)',
        'Optimisation du référencement naturel SEO'
      ]
    ),
    new Site(
      'Shopping-Flux',
      './assets/images/logos/shopping-flux.jpg',
      'http://shopping-feed.com/',
      'Refonte et intégration d\' une nouvelle interface de l\' application.',
      [
        'Intégration continue',
        'Intégration des maquettes HTML5 / CSS3 (sass) / JavaScript',
        'Résolutions de divers bug front',
        'Docker',
        'Git',
        'Méthodes Agiles / Scrum',
        'Workshop',
        'Formation Angular-CLI + Intégration de la HomePage de la nouvelle application'
      ],
      'col-md-offset-3'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
