import { Component, OnInit } from '@angular/core';

interface contact {
  online: boolean,
  name: string,
  role: string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: contact[] = [
    {
      online: false,
      name: "Tighten Co.",
      role: "Team"
    },
    {
      online: true,
      name: "Taylor Otwell",
      role: "Member"
    },
    {
      online: false,
      name: "Adam Wathan",
      role: "Member"
    },
    {
      online: false,
      name: "Duke Street Studio Inc.",
      role: "Team"
    },
    {
      online: true,
      name: "Jeffrey Way",
      role: "Member"
    }
  ]

  query: string = '';
  f_contacts: contact[] = [];
  selected?: contact;

  constructor() { }

  ngOnInit(): void {
    this.f_contacts = this.contacts;
  }

  onFilter(): void {
    this.f_contacts = this.contacts.filter((contact) => {
      if (this.query.trim() === '') {
        return true;
      } else {
        if (contact.name.toLowerCase().includes(this.query.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
  
  onSelect(index: number): void {
    if(this.selected === this.f_contacts[index]) {
      this.selected = null;
    } else {
      this.selected = this.f_contacts[index];
    }
  }

}
