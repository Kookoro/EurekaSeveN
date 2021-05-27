import { Controller, Get,Post, Response, HttpStatus, Param, Body } from '@nestjs/common';
import { throws } from 'assert';
import { query } from 'express';
import { IndexService } from './index.service';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}


  @Get('image')
  getDailyImg(@Response() response) {
    this.indexService.getDailyImg().subscribe(res => {
      return response.status(HttpStatus.OK).json(res.data);
    });
    // return response.json(await this.indexService.getImg());
  }
  @Get('getImg')
  getImg(@Response() response) {
    this.indexService.getDailyImg().subscribe(res => {
      const e = res.data;
      return response.json(e);
    });
  }
  @Post('datelist')
  getDateList(@Body() date,@Response() response){

    const dbegin  = date.dbegin
    const dend = date.dend
    
    if(dbegin>dend){
      throw new Error('开始时间不能大约结束时间')
    }


    const result =[]
   this.indexService.getDateList(dbegin,dend).then((res)=>{

    res.map((item)=>{
      result.push({
        count:item.ncount,
        date:item.ddate
      })
    })
    return response.json(result);
   })
  

    

  } 
}
