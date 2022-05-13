import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})
export class ExtensionsComponent implements OnInit {

 extensions: string[] = [
    `Reverse the presentation order of messages by displaying the most recent ones at the top`,
    `Add a timestamp to each message; format message display using a table`, 
    `An attempt to create a duplicate hero is rejected, displaying an error 
      message (along with an error-dismiss button)`,
    ];

  constructor() { }

  ngOnInit(): void {
  }
}
