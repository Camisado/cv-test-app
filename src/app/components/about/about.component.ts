import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private linkedIn: string;
  private vk: string;
  private facebook: string;

  constructor() {
    this.linkedIn = 'https://www.linkedin.com/in/yury-haichuk-429644a4/';
    this.vk = 'https://vk.com/camisadont';
    this. facebook = 'https://www.facebook.com/CamisadoNT'
  }

  openSocial(social): void {
    let link: string;
    switch (social) {
      case 'linkedIn': {
        link = this.linkedIn;
        break;
      }
      case 'vk': {
        link = this.vk;
        break;
      }
      case 'facebook': {
        link = this.facebook;
        break;
      }
    }
    window.open(link, '_blank');
  }
}
