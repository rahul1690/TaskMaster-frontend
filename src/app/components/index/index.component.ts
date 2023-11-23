import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'taskmaster-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,OnDestroy{

  bgImagePaths = ['./assets/index_bg/bg_1','./assets/index_bg/bg_2'];
  currentImgIdx = 0;
  
  ngOnInit(){
    console.log(this.bgImagePaths);
    document.body.classList.add('background-img')
    this.startBg();
  }

  startBg(){
    document.body.classList.add('background1');
    this.currentImgIdx+=1;
    setInterval(()=>this.nextBg(),7000);
  }

  changeBg(){
    document.body.classList.remove('background1','background2');
    document.body.classList.add(`background${this.currentImgIdx+1}`);
  }

  nextBg(){
    this.currentImgIdx = (this.currentImgIdx + 1)% this.bgImagePaths.length;
    this.changeBg();
  }

  ngOnDestroy(): void {
    document.body.classList.add('background-img');
    document.body.classList.remove('background1','background2')
  }



}
