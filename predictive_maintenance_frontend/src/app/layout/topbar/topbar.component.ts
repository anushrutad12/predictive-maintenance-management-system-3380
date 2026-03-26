import { Component, EventEmitter, Output } from '@angular/core';

/**
 * TopbarComponent
 *
 * Dark top header spanning full width with:
 * - Left: toggle button for sidebar expanded mode (desktop) / potential drawer (mobile)
 * - Center/left: placeholder breadcrumbs/product label
 * - Right: placeholder icon buttons
 */
@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  // PUBLIC_INTERFACE
  onToggleSidebar(): void {
    /** Emits a toggle request for the sidebar expanded state. */
    this.toggleSidebar.emit();
  }
}
