import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('fr');

  toggle() {
    this.lang.set(this.lang() === 'fr' ? 'en' : 'fr');
  }

  isFr = computed(() => this.lang() === 'fr');
}
