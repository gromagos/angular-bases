import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 66;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Geri';
  }

  changeAge(): void {
    this.age = 26;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 66;

    //document.querySelectorAll('h1')!.forEach( el => {
    //  el.innerHTML = '<h1>Desde Angular</h1>';
    //});
  }
}
