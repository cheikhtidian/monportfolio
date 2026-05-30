import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="references">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <p class="intro">{{ c().intro }}</p>
        <div class="ref-grid">
          <div class="ref-card" *ngFor="let ref of c().refs">
            <div class="ref-avatar">{{ initials(ref.name) }}</div>
            <div class="ref-info">
              <div class="ref-name">{{ ref.name }}</div>
              <div class="ref-title">{{ ref.title }}</div>
              <div class="ref-org">{{ ref.org }}</div>
              <div class="ref-relation">{{ ref.relation }}</div>
              <div class="ref-contacts">
                <a *ngIf="ref.email" [href]="'mailto:' + ref.email" class="ref-contact">
                  <span>✉</span> {{ ref.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="disclaimer">{{ c().disclaimer }}</p>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--white); }
    .intro { color: var(--text-muted); font-size: 0.96rem; margin-bottom: 2.25rem; }
    .ref-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    .ref-card { display: flex; gap: 1.25rem; padding: 1.5rem; border: 0.5px solid var(--border); border-radius: 4px; background: var(--cream); border-top: 3px solid var(--gold); transition: box-shadow var(--transition), transform var(--transition); }
    .ref-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .ref-avatar { width: 52px; height: 52px; border-radius: 50%; background: var(--navy); color: var(--gold-light); font-family: var(--font-serif); font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .ref-info { flex: 1; }
    .ref-name { font-family: var(--font-serif); font-size: 1.05rem; color: var(--navy); font-weight: 600; margin-bottom: 0.15rem; }
    .ref-title { font-size: 0.85rem; color: var(--gold); font-weight: 600; margin-bottom: 0.1rem; }
    .ref-org { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.25rem; }
    .ref-relation { font-size: 0.78rem; color: var(--text-light); font-style: italic; margin-bottom: 0.75rem; padding-bottom: 0.6rem; border-bottom: 0.5px solid var(--border-light); }
    .ref-contacts { display: flex; flex-direction: column; gap: 0.35rem; }
    .ref-contact { display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: var(--text-muted); text-decoration: none; transition: color var(--transition); }
    .ref-contact:hover { color: var(--gold); }
    .disclaimer { margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-light); font-style: italic; text-align: center; }
    @media (max-width: 680px) { .ref-grid { grid-template-columns: 1fr; } }
  `]
})
export class ReferencesComponent {
  lang = inject(LanguageService);

  content = {
    fr: {
      label: 'Personnes de confiance', title: 'Références professionnelles',
      intro: 'Ces personnes peuvent attester de mes compétences, de mon sérieux et de mon engagement professionnel.',
      disclaimer: 'Les coordonnées complètes sont disponibles sur demande.',
      refs: [
        {
          name: 'Fadel Touré',
          title: 'Professeur & Directeur de recherche',
          org: 'Département de Mathématiques et Informatique — UQTR',
          relation: 'Directeur de thèse M.Sc. — a supervisé l\'ensemble de mes travaux de recherche',
          email: 'fadel.toure@uqtr.ca'
        },
        {
          name: 'Tarik Boukhalfi',
          title: 'Professeur',
          org: 'Département de Mathématiques et Informatique — UQTR',
          relation: 'Professeur responsable — assistant pour les cours INF1034 et SIF1033',
          email: 'tarik.boukhalfi@uqtr.ca'
        }
      ]
    },
    en: {
      label: 'Professional references', title: 'References',
      intro: 'These individuals can attest to my skills, professionalism, and dedication.',
      disclaimer: 'Full contact details available upon request.',
      refs: [
        {
          name: 'Fadel Touré',
          title: 'Professor & Research Supervisor',
          org: 'Department of Mathematics and Computer Science — UQTR',
          relation: 'M.Sc. thesis supervisor — oversaw all my research work',
          email: 'fadel.toure@uqtr.ca'
        },
        {
          name: 'Tarik Boukhalfi',
          title: 'Professor',
          org: 'Department of Mathematics and Computer Science — UQTR',
          relation: 'Course instructor — teaching assistant for INF1034 and SIF1033',
          email: 'tarik.boukhalfi@uqtr.ca'
        }
      ]
    }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }

  initials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
}
