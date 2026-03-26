import { Component, Input } from '@angular/core';

export type TocItem = {
  id: string;
  label: string;
  level: 1 | 2 | 3;
};

/**
 * TocComponent
 *
 * Displays a simple "On this page" table of contents list.
 * (IntersectionObserver active highlighting can be added later.)
 */
@Component({
  selector: 'app-toc',
  standalone: true,
  templateUrl: './toc.component.html',
  styleUrl: './toc.component.css',
})
export class TocComponent {
  @Input({ required: true }) items: TocItem[] = [];

  // PUBLIC_INTERFACE
  scrollTo(id: string): void {
    /** Scrolls the main document to the element with given id, if present. */
    const doc = globalThis.document;
    if (!doc) return;

    const el = doc.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
