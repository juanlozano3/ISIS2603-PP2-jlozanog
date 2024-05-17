import { Component, OnInit } from '@angular/core';
import {Nave} from './nave';
import {NaveService} from './nave.service';
import { naveData } from './dataNaves';
@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  naves : Array<Nave> = [];
  constructor(private naveService: NaveService) { }
  selectedNave!: Nave;
  selected = false;
  onSelected(nave: Nave): void {
    this.selectedNave = nave;
    this.selected = true;
  }
  getNavess(){
    this.naveService.getNavess().subscribe((naves) => {
      console.log(naves)
      this.naves = naves
    }
  );

      
    
  }


  ngOnInit() {
    this.getNavess();
  }

}
