import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-inner">
        <span class="logo">S.<span class="gold">T</span></span>
        <p class="copy">
          &copy; {{ year }} Serigne Cheikh Ahmet Tidiane Sy Thioune &nbsp;·&nbsp;
          {{ lang.isFr() ? 'Tous droits réservés' : 'All rights reserved' }}
        </p>
        <div class="back-top">
          <a (click)="scrollToTop()" [title]="lang.isFr() ? 'Retour en haut' : 'Back to top'">↑</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: var(--navy-mid); border-top: 1px solid rgba(255,255,255,0.07); padding: 1.5rem 2rem; }
    .footer-inner { max-width: 980px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
    .logo { font-family: var(--font-serif); color: var(--white); font-size: 1rem; font-weight: 600; }
    .logo .gold { color: var(--gold-light); }
    .copy { font-size: 0.8rem; color: rgba(255,255,255,0.3); }
    .back-top a { color: rgba(255,255,255,0.35); font-size: 1.1rem; cursor: pointer; transition: color var(--transition); }
    .back-top a:hover { color: var(--gold-light); }
  `]
})
export class FooterComponent {
  lang = inject(LanguageService);
  year = new Date().getFullYear();
  scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
