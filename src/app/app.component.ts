import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import '../assets/css/styles.scss';
import { AppConfig } from '../env/config'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'.toString()],
})

export class AppComponent implements OnInit {
  IMAGE_URL: any;
  param = { value: 'world' };

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.IMAGE_URL = require('../assets/images/logohd.png');
  }
}