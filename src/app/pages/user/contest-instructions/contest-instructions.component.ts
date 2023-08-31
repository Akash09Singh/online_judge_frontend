import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contest-instructions',
  templateUrl: './contest-instructions.component.html',
  styleUrls: ['./contest-instructions.component.css']
})
export class ContestInstructionsComponent implements OnInit {

  contestId:number=0;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.contestId = Number(this.activatedRoute.snapshot.paramMap.get('contestId'));
  }

 

}
