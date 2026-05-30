import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <div class="about-grid">
          <div class="about-text">
            <p *ngFor="let p of c().paragraphs" [innerHTML]="p"></p>
          </div>
          <div class="about-facts">
            <div class="fact-card" *ngFor="let f of c().facts">
              <div class="fact-label">{{ f.label }}</div>
              <div class="fact-value">{{ f.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--white); }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }
    .about-text p { color: var(--text-muted); margin-bottom: 1.1rem; font-size: 0.97rem; }
    .about-facts { display: flex; flex-direction: column; gap: 0.85rem; }
    .fact-card { padding: 1.1rem 1.3rem; border: 0.5px solid var(--border); border-radius: 4px; background: var(--cream); border-left: 3px solid var(--gold); }
    .fact-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.3rem; }
    .fact-value { font-size: 0.95rem; color: var(--text-dark); font-weight: 500; }
    @media (max-width: 680px) { .about-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent {
  lang = inject(LanguageService);

  content = {
    fr: {
      label: 'Qui suis-je',
      title: 'À propos',
      paragraphs: [
        'Diplômé en M.Sc. Mathématiques Appliquées et Informatique de l\'UQTR, je combine une solide formation académique avec une expérience pratique en développement logiciel et en enseignement universitaire.',
        'Ma thèse portait sur l\'automatisation de la documentation médicale à l\'aide de modèles ML embarqués (Whisper&nbsp;+&nbsp;DistilBERT) sur Android, atteignant <strong>95,6&nbsp;%</strong> de précision d\'extraction avec un traitement <strong>6,4×</strong> plus rapide que le temps réel.',
        'Actuellement chargé de cours et assistant d\'enseignement à l\'UQTR, je cherche activement un poste de développeur backend ou fullstack pour contribuer à des projets innovants au Québec.',
        'Passionné de football (AC Milan) et d\'intelligence artificielle, je suis convaincu que la technologie bien conçue transforme les métiers et améliore le quotidien.'
      ],
      facts: [
        { label: 'Localisation', value: 'Trois-Rivières, Québec, Canada' },
        { label: 'Formation', value: 'M.Sc. Math. Appliquées & Informatique — UQTR' },
        { label: 'Poste actuel', value: 'Chargé de cours — UQTR (SIF1033, INF1034, PRO1026, INF1001, INF1013)' },
        { label: 'Disponibilité', value: 'Ouvert aux opportunités — temps plein' },
        { label: 'Expérience PHP', value: 'Depuis 2020 (~4 ans)' },
        { label: 'Langues', value: 'Français · Anglais · Wolof' }
      ]
    },
    en: {
      label: 'About me',
      title: 'About',
      paragraphs: [
        'Graduate of an M.Sc. in Applied Mathematics and Computer Science from UQTR, I combine a solid academic background with hands-on experience in software development and university teaching.',
        'My thesis focused on automating medical documentation using embedded ML models (Whisper&nbsp;+&nbsp;DistilBERT) on Android, achieving <strong>95.6%</strong> extraction accuracy with processing <strong>6.4×</strong> faster than real time.',
        'Currently a lecturer and teaching assistant at UQTR, I am actively looking for a backend or fullstack developer position to contribute to innovative projects in Quebec.',
        'Passionate about football (AC Milan) and artificial intelligence, I believe that well-designed technology transforms professions and improves everyday life.'
      ],
      facts: [
        { label: 'Location', value: 'Trois-Rivières, Québec, Canada' },
        { label: 'Education', value: 'M.Sc. Applied Mathematics & CS — UQTR' },
        { label: 'Current position', value: 'Lecturer — UQTR (SIF1033, INF1034, PRO1026, INF1001, INF1013)' },
        { label: 'Availability', value: 'Open to opportunities — full time' },
        { label: 'PHP experience', value: 'Since 2020 (~4 years)' },
        { label: 'Languages', value: 'French · English · Wolof' }
      ]
    }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }
}
