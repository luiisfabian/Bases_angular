import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {


  name = signal('IronMan')
  age = signal(45)


  // concatenacion computada

  getHeroDescriptionCompu = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  getHeroDescription(name: string = 'spiderman', age: number = 22) {
    // return `${ name } - ${ age }`;
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHeroName(name: string) {
    this.name.set(name);
  }

  changeHero() {
    this.name.set('Batman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('IronMan');
    this.age.set(45);
  }

  chageAge(){
    this.age.update(age => age = 60);
  }

}
