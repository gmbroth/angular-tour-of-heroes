import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  errors: string[] = [];  // error messages
  heroes: Hero[]   = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  clearErrors(): void {
    this.errors = [];
  }

  addError(message: string): void {
    this.errors.push(message);
  }

  getErrors(): string[] {
    return this.errors;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    if (this.heroes.some(element => element.name === name)) {
      this.addError(`A hero with the name "${name}" already exists; please try a different name`);
      this.messageService.add(`Heroes: Rejected hero with duplicate name "${name}"`);
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(hero => {this.heroes.push(hero);});
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}