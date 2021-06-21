import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() label: string;
  @Output() toggle = new EventEmitter<boolean>();

  currentState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.currentState = !this.currentState;
    this.toggle.emit(this.currentState);
  }

}
