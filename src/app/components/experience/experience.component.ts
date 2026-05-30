import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <div class="tabs">
          <button *ngFor="let tab of c().tabs" class="tab-btn" [class.active]="activeTab === tab.id" (click)="activeTab = tab.id">{{ tab.label }}</button>
        </div>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of filtered()">
            <div class="timeline-left">
              <div class="date">{{ item.date }}</div>
              <div class="date-sub" *ngIf="item.dateSub">{{ item.dateSub }}</div>
              <div class="type-badge" [ngClass]="item.type">{{ typeLabelMap()[item.type] }}</div>
            </div>
            <div class="timeline-right">
              <div class="role">{{ item.role }}</div>
              <div class="org">{{ item.org }}</div>
              <ul class="bullets"><li *ngFor="let b of item.bullets">{{ b }}</li></ul>
              <div class="techs" *ngIf="item.techs?.length">
                <span class="tech" *ngFor="let t of item.techs">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-label" style="margin-top:3rem">{{ c().formationLabel }}</div>
        <div class="formation-grid">
          <div class="formation-card" *ngFor="let f of c().formation">
            <div class="f-year">{{ f.year }}</div>
            <div class="f-degree">{{ f.degree }}</div>
            <div class="f-school">{{ f.school }}</div>
            <div class="f-detail" *ngIf="f.detail">{{ f.detail }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--cream); }
    .tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
    .tab-btn { padding: 0.4rem 1rem; border: 0.5px solid var(--border); background: var(--white); color: var(--text-muted); font-size: 0.82rem; font-family: var(--font-sans); cursor: pointer; border-radius: 2px; transition: all var(--transition); }
    .tab-btn:hover { border-color: var(--gold); color: var(--gold); }
    .tab-btn.active { background: var(--navy); color: var(--white); border-color: var(--navy); }
    .timeline { position: relative; }
    .timeline-item { display: grid; grid-template-columns: 160px 1fr; gap: 2rem; margin-bottom: 2.5rem; }
    .timeline-left { text-align: right; padding-top: 0.15rem; }
    .date { font-size: 0.82rem; color: var(--gold); font-weight: 600; }
    .date-sub { font-size: 0.78rem; color: var(--text-light); margin-top: 0.1rem; }
    .type-badge { display: inline-block; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.15rem 0.5rem; border-radius: 2px; margin-top: 0.5rem; }
    .type-badge.tech { background: rgba(13,27,42,0.08); color: var(--navy); }
    .type-badge.enseignement { background: var(--gold-pale); color: #7a640a; }
    .type-badge.associatif { background: rgba(29,158,117,0.1); color: #0f6e56; }
    .timeline-right { border-left: 2px solid var(--border); padding-left: 1.75rem; position: relative; }
    .timeline-right::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--gold); border: 2px solid var(--cream); position: absolute; left: -6px; top: 5px; }
    .role { font-family: var(--font-serif); font-size: 1.05rem; color: var(--navy); font-weight: 600; margin-bottom: 0.1rem; }
    .org { font-size: 0.85rem; color: var(--gold); font-weight: 600; margin-bottom: 0.5rem; }
    .bullets { list-style: none; padding: 0; margin: 0 0 0.75rem; }
    .bullets li { font-size: 0.89rem; color: var(--text-muted); line-height: 1.65; padding-left: 1rem; position: relative; margin-bottom: 0.3rem; }
    .bullets li::before { content: '–'; position: absolute; left: 0; color: var(--gold); }
    .techs { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tech { font-size: 0.74rem; padding: 0.18rem 0.55rem; background: var(--white); border: 0.5px solid var(--border); border-radius: 2px; color: var(--text-muted); }
    .formation-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.1rem; margin-top: 1rem; }
    .formation-card { background: var(--white); border: 0.5px solid var(--border); border-left: 3px solid var(--gold); border-radius: 4px; padding: 1.1rem 1.25rem; }
    .f-year { font-size: 0.75rem; color: var(--gold); font-weight: 600; margin-bottom: 0.2rem; }
    .f-degree { font-family: var(--font-serif); font-size: 0.95rem; color: var(--navy); font-weight: 600; margin-bottom: 0.15rem; }
    .f-school { font-size: 0.82rem; color: var(--text-muted); }
    .f-detail { font-size: 0.78rem; color: var(--text-light); margin-top: 0.3rem; font-style: italic; }
    @media (max-width: 680px) { .timeline-item { grid-template-columns: 1fr; gap: 0.3rem; } .timeline-left { text-align: left; } .timeline-right { border-left: none; padding-left: 0; } .timeline-right::before { display: none; } }
  `]
})
export class ExperienceComponent {
  lang = inject(LanguageService);
  activeTab = 'all';

  typeLabelMap(): Record<string, string> {
    return this.lang.isFr()
      ? { tech: 'Développement', enseignement: 'Enseignement', associatif: 'Associatif' }
      : { tech: 'Development', enseignement: 'Teaching', associatif: 'Community' };
  }

  filtered() {
    const items = this.c().items;
    return this.activeTab === 'all' ? items : items.filter((i: any) => i.type === this.activeTab);
  }

  content = {
    fr: {
      label: 'Parcours', title: 'Expériences & Formation', formationLabel: 'Formation académique',
      tabs: [{ id: 'all', label: 'Tout' }, { id: 'tech', label: 'Développement' }, { id: 'enseignement', label: 'Enseignement' }, { id: 'associatif', label: 'Associatif' }],
      items: [
        { date: '2024 – Présent', dateSub: 'Trois-Rivières, QC', role: 'Chargé de cours & Assistant d\'enseignement', org: 'UQTR — Université du Québec à Trois-Rivières', type: 'enseignement', bullets: ['SIF1033 — Traitement d\'images : OpenCV/Python, Affinity Designer, segmentation, filtrage', 'INF1034 — Design accessible : principes de Norman, évaluation d\'interfaces', 'PRO1026 — Programmation VB.NET : débogage Visual Studio, calculateur pondéré', 'INF1001 — Introduction à l\'informatique : fondements, algorithmes, logique', 'INF1013 — Environnement de développement : MVC/MVP, REST, Angular, Maven', 'Préparation du matériel pédagogique, correction des TPs et suivi des étudiants'], techs: ['Python', 'OpenCV', 'VB.NET', 'Angular', 'Maven', 'Affinity Designer'] },
        { date: '2024 – 2025', dateSub: 'Trois-Rivières, QC', role: 'Développeur Full-Stack — Projet de recherche LSJML', org: 'Département de Mathématiques et Informatique, UQTR', type: 'tech', bullets: ['Conception et développement d\'une application de gestion de traces podoscopiques forensiques', 'CRUD complet (Trace, Cas, Motif, Marque, Chaussure), upload d\'images, codification LSJML et Girod2', 'Configuration Spring Security (JWT), CORS, migrations Liquibase', 'Débogage de la chaîne TypeScript → Angular → Spring Boot → PostgreSQL'], techs: ['Spring Boot', 'Angular', 'PostgreSQL', 'Liquibase', 'Spring Security', 'TypeScript', 'Java'] },
        { date: 'Jan. 2024 – Déc. 2025', dateSub: 'UQTR', role: 'Assistant d\'enseignement', org: 'Département de Mathématiques et Informatique, UQTR', type: 'enseignement', bullets: ['Cours assistés : Programmation web, POO Java, Développement mobile Android, Structures de données', 'Identification et correction ciblée des lacunes des étudiants', 'Correction de travaux pratiques selon des grilles de notation strictes'], techs: ['Java', 'Android', 'PHP', 'HTML/CSS/JS'] },
        { date: '2024 – 2026', dateSub: 'UQTR', role: 'Vice-président pédagogique', org: 'AMI — Association des Mathématiques et Informatique, UQTR', type: 'associatif', bullets: ['Organisation de 5 conférences thématiques (IA, algorithmes génétiques, architecture logicielle, ML)', 'Coordination des intervenants, gestion logistique et promotion des événements', 'Animation de la vie associative et mobilisation des étudiants du département'] },
        { date: '2025 – 2026', dateSub: 'UQTR', role: 'Responsable de la Mosaïque (bénévole)', org: 'Département de Mathématiques et Informatique, UQTR', type: 'associatif', bullets: ['Organisation et coordination du projet de mosaïque annuel du département', 'Collaboration avec l\'équipe départementale pour la planification et l\'exécution'] },
        { date: 'Jan. – Août 2023', role: 'Développeur Full-Stack — Application présidents de jury', org: 'Projet académique', type: 'tech', bullets: ['Conception d\'une application web d\'affectation des présidents de jury (examens du Baccalauréat)', 'Développement de l\'API REST (backend) et de l\'interface Angular (frontend)', 'Gestion de l\'authentification et des rôles utilisateurs'], techs: ['Angular', 'REST API', 'Java', 'MySQL'] },
        { date: 'Déc. 2019 – Jan. 2022', dateSub: 'Dakar, Sénégal', role: 'Technicien informatique', org: 'Université Cheikh Anta Diop (UCAD) — Dakar', type: 'tech', bullets: ['Support technique aux utilisateurs (étudiants et personnel administratif)', 'Gestion et maintenance de bases de données Oracle', 'Installation et configuration de systèmes et réseaux locaux (LAN)', 'Dépannage matériel et logiciel des postes de travail'], techs: ['Oracle DB', 'Réseau LAN', 'Windows Server'] }
      ],
      formation: [
        { year: '2023 – 2025', degree: 'M.Sc. Mathématiques Appliquées & Informatique', school: 'UQTR, Trois-Rivières', detail: 'Thèse : Automatisation de la documentation médicale par ML embarqué — 95,6 % de précision' },
        { year: 'Avant 2023', degree: 'Formation en Informatique (1er cycle)', school: 'Sénégal', detail: 'Fondements en développement logiciel, systèmes et réseaux' }
      ]
    },
    en: {
      label: 'Experience', title: 'Experience & Education', formationLabel: 'Academic Education',
      tabs: [{ id: 'all', label: 'All' }, { id: 'tech', label: 'Development' }, { id: 'enseignement', label: 'Teaching' }, { id: 'associatif', label: 'Community' }],
      items: [
        { date: '2024 – Present', dateSub: 'Trois-Rivières, QC', role: 'Lecturer & Teaching Assistant', org: 'UQTR — Université du Québec à Trois-Rivières', type: 'enseignement', bullets: ['SIF1033 — Image Processing: OpenCV/Python, Affinity Designer, segmentation, filtering', 'INF1034 — Accessible Design: Norman\'s principles, interface evaluation', 'PRO1026 — VB.NET Programming: Visual Studio debugging, weighted average calculator', 'INF1001 — Introduction to Computer Science: fundamentals, algorithms, logic', 'INF1013 — Development Environment: MVC/MVP, REST, Angular, Maven', 'Course material preparation, lab grading, and student support'], techs: ['Python', 'OpenCV', 'VB.NET', 'Angular', 'Maven', 'Affinity Designer'] },
        { date: '2024 – 2025', dateSub: 'Trois-Rivières, QC', role: 'Full-Stack Developer — LSJML Research Project', org: 'Department of Mathematics and Computer Science, UQTR', type: 'tech', bullets: ['Design and development of a forensic shoe print trace management application', 'Full CRUD (Trace, Case, Pattern, Brand, Shoe), image upload, LSJML and Girod2 codification', 'Spring Security (JWT) configuration, CORS, Liquibase migrations', 'Debugging the TypeScript → Angular → Spring Boot → PostgreSQL chain'], techs: ['Spring Boot', 'Angular', 'PostgreSQL', 'Liquibase', 'Spring Security', 'TypeScript', 'Java'] },
        { date: 'Jan. 2024 – Dec. 2025', dateSub: 'UQTR', role: 'Teaching Assistant', org: 'Department of Mathematics and Computer Science, UQTR', type: 'enseignement', bullets: ['Assisted courses: Web programming, OOP Java, Android mobile development, Data structures', 'Targeted identification and remediation of student gaps', 'Lab grading using strict rubrics'], techs: ['Java', 'Android', 'PHP', 'HTML/CSS/JS'] },
        { date: '2024 – 2026', dateSub: 'UQTR', role: 'VP Academic Affairs', org: 'AMI — Math & CS Student Association, UQTR', type: 'associatif', bullets: ['Organized 5 thematic conferences (AI, genetic algorithms, software architecture, ML)', 'Coordinated speakers, logistics and event promotion', 'Animated student life and mobilized the department\'s students'] },
        { date: '2025 – 2026', dateSub: 'UQTR', role: 'Mosaic Project Coordinator (volunteer)', org: 'Department of Mathematics and Computer Science, UQTR', type: 'associatif', bullets: ['Organization and coordination of the department\'s annual mosaic project', 'Collaboration with the departmental team for planning and execution'] },
        { date: 'Jan. – Aug. 2023', role: 'Full-Stack Developer — Jury President Assignment App', org: 'Academic project', type: 'tech', bullets: ['Design of a web application for automatic jury president assignments (Baccalauréat exams)', 'REST API backend and Angular frontend development', 'Authentication and role management (admin, jury, observer)'], techs: ['Angular', 'REST API', 'Java', 'MySQL'] },
        { date: 'Dec. 2019 – Jan. 2022', dateSub: 'Dakar, Senegal', role: 'IT Technician', org: 'Cheikh Anta Diop University (UCAD) — Dakar', type: 'tech', bullets: ['Technical support for users (students and administrative staff)', 'Oracle database management and maintenance', 'LAN network and system installation and configuration', 'Hardware and software troubleshooting'], techs: ['Oracle DB', 'LAN Network', 'Windows Server'] }
      ],
      formation: [
        { year: '2023 – 2025', degree: 'M.Sc. Applied Mathematics & Computer Science', school: 'UQTR, Trois-Rivières', detail: 'Thesis: Automating medical documentation with embedded ML — 95.6% accuracy' },
        { year: 'Before 2023', degree: 'B.Sc. Computer Science', school: 'Senegal', detail: 'Foundations in software development, systems and networking' }
      ]
    }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }
}
