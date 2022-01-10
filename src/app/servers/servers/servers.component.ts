import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  constructor(private serversService: ServersService, private router: Router) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers']);
  }

}
