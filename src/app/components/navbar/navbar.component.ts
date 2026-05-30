import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="nav-inner">
        <a class="nav-logo" (click)="scrollTo('hero')">S.<span>T</span></a>
        <button class="nav-toggle" (click)="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" [class.open]="menuOpen">
          <li *ngFor="let link of links()">
            <a (click)="scrollTo(link.id)">{{ link.label }}</a>
          </li>
        </ul>
        <button class="lang-toggle" (click)="lang.toggle()" [title]="lang.isFr() ? 'Switch to English' : 'Passer en français'">
          <span class="lang-flag">{{ lang.isFr() ? '🇬🇧' : '🇫🇷' }}</span>
          <span class="lang-text">{{ lang.isFr() ? 'EN' : 'FR' }}</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: sticky; top: 0; z-index: 1000;
      background: var(--navy);
      border-bottom: 2px solid var(--gold);
      transition: box-shadow var(--transition);
    }
    nav.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.25); }
    .nav-inner {
      max-width: 980px; margin: 0 auto; padding: 0 2rem;
      height: 62px;
      display: flex; align-items: center; justify-content: space-between; gap: 1rem;
    }
    .nav-logo {
      font-family: var(--font-serif); color: var(--white);
      font-size: 1.15rem; letter-spacing: 0.05em; font-weight: 600; cursor: pointer;
    }
    .nav-logo span { color: var(--gold-light); }
    .nav-links { display: flex; gap: 1.5rem; list-style: none; flex: 1; justify-content: center; }
    .nav-links a {
      color: rgba(255,255,255,0.7); font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.07em; text-transform: uppercase; cursor: pointer;
      transition: color var(--transition);
    }
    .nav-links a:hover { color: var(--gold-light); }
    .lang-toggle {
      display: flex; align-items: center; gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      background: rgba(255,255,255,0.08);
      border: 0.5px solid rgba(255,255,255,0.2);
      border-radius: 2px;
      color: rgba(255,255,255,0.85);
      font-size: 0.8rem; font-weight: 600;
      cursor: pointer; letter-spacing: 0.06em;
      font-family: var(--font-sans);
      transition: all var(--transition);
      flex-shrink: 0;
    }
    .lang-toggle:hover { background: var(--gold); color: var(--navy); border-color: var(--gold); }
    .lang-flag { font-size: 0.95rem; }
    .nav-toggle {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
    }
    .nav-toggle span { display: block; width: 22px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; }
    @media (max-width: 760px) {
      .nav-toggle { display: flex; }
      .nav-links {
        display: none; position: absolute; top: 62px; left: 0; right: 0;
        background: var(--navy-mid); flex-direction: column; gap: 0;
        border-bottom: 2px solid var(--gold);
      }
      .nav-links.open { display: flex; }
      .nav-links li a { display: block; padding: 0.9rem 2rem; border-bottom: 0.5px solid rgba(255,255,255,0.07); }
    }
  `]
})
export class NavbarComponent {
  lang = inject(LanguageService);
  isScrolled = false;
  menuOpen = false;

  links() {
    const fr = [
      { label: 'À propos', id: 'about' },
      { label: 'Compétences', id: 'skills' },
      { label: 'Projets', id: 'projects' },
      { label: 'Parcours', id: 'experience' },
      { label: 'Pourquoi moi ?', id: 'why-me' },
      { label: 'Références', id: 'references' },
      { label: 'Contact', id: 'contact' }
    ];
    const en = [
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' },
      { label: 'Experience', id: 'experience' },
      { label: 'Why me?', id: 'why-me' },
      { label: 'References', id: 'references' },
      { label: 'Contact', id: 'contact' }
    ];
    return this.lang.isFr() ? fr : en;
  }

  scrollTo(id: string) {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 62;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 30; }
}
